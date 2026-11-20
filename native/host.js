/**
 * Savior - Native Messaging Host for Google Chrome
 * Communicates with Chrome extension via stdin/stdout length-prefixed JSON.
 * Provides multi-threaded downloading and FFmpeg stream muxing/conversion.
 */

const { spawn, exec, execFile } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');
const https = require('https');
const { resolveMediaMetadata } = require('./lib/media-resolver');

const {
  sanitizeFilename,
  sanitizeTaskId,
  isSafeOutputDirectory,
  resolveOutputDir,
  createJobFileContext,
  findAvailableOutputPath,
  publishJobFile,
  cleanupJobStaging,
  validateRelayCoverage
} = require('./lib/output-files');

const isWin = process.platform === 'win32';
const isMac = process.platform === 'darwin';

const BIN_DIR = path.join(__dirname, 'bin');

function resolveBinary(binName) {
  const exeName = isWin ? `${binName}.exe` : binName;
  const localBin = path.join(BIN_DIR, exeName);
  if (fs.existsSync(localBin)) return localBin;
  if (isMac) {
    const macPaths = [
      `/opt/homebrew/bin/${binName}`,
      `/usr/local/bin/${binName}`,
      `/usr/bin/${binName}`
    ];
    for (const p of macPaths) {
      if (fs.existsSync(p)) return p;
    }
  }
  return exeName;
}

const FFMPEG_PATH = resolveBinary('ffmpeg');
const YTDLP_PATH = resolveBinary('yt-dlp');
const DOWNLOADS_DIR = path.join(os.homedir(), 'Downloads');

const authorizedDownloadDirs = new Set([path.resolve(DOWNLOADS_DIR)]);

function registerAuthorizedDir(dirPath) {
  if (!dirPath || typeof dirPath !== 'string') return;
  try {
    const resolved = path.resolve(dirPath);
    if (isSafeOutputDirectory(resolved)) {
      authorizedDownloadDirs.add(resolved);
    }
  } catch (_) {}
}

function resolveTargetDir(outputDir) {
  if (outputDir && typeof outputDir === 'string') {
    try {
      const resolved = path.resolve(outputDir);
      if (!isSafeOutputDirectory(resolved) && !authorizedDownloadDirs.has(resolved)) {
        logHost(`[SECURITY] Rejected unsafe outputDir: "${outputDir}"`);
        return DOWNLOADS_DIR;
      }
      if (!fs.existsSync(resolved)) {
        fs.mkdirSync(resolved, { recursive: true });
      }
      if (fs.existsSync(resolved)) return resolved;
    } catch (_) {}
  }
  return DOWNLOADS_DIR;
}

// Ensure PATH contains our bin directory for ffmpeg
process.env.PATH = BIN_DIR + path.delimiter + path.dirname(process.execPath) + path.delimiter + process.env.PATH;

// Background process & thread optimization:
// Cap FFmpeg threads and set background priority so foreground video playback in the browser
// (e.g. YouTube, HLS movie streams) is never starved of CPU or dropped frames.
const FFMPEG_THREAD_LIMIT = String(Math.min(4, Math.max(1, Math.floor((os.cpus() || []).length / 2) || 2)));

function setBackgroundPriority(proc) {
  if (!proc || !proc.pid) return;
  try {
    if (os.constants && os.constants.priority && typeof os.setPriority === 'function') {
      os.setPriority(proc.pid, os.constants.priority.PRIORITY_BELOW_NORMAL);
    }
  } catch (_) {}
}

const activeStreamJobs = new Map();
const activeProcesses = new Map();
const activeMultiThreadJobs = new Map();
let activeProcess = null;
let activeMultiThreadJob = null;
let stdoutWritable = true;
const DISCONNECT_GRACE_MS = 5000;

if (require.main === module) {
  process.stdout.on('error', (err) => {
    stdoutWritable = false;
    logHost(`[stdoutError] ${err.code || err.message}`);
  });

  process.on('uncaughtException', (err) => {
    logHost(`[uncaughtException] ${err.message}`);
    if (err.code === 'EPIPE') {
      stdoutWritable = false;
      return;
    }
    // Anything else leaves the process in an undefined state: tell the
    // extension its job failed, let the message flush, then exit so a clean
    // host process replaces this one on the next connectNative.
    try {
      sendMessage({ action: 'error', error: `HOST_CRASH: ${err.message || 'uncaught exception'}` });
    } catch (_) {}
    setTimeout(() => process.exit(1), 100);
  });

  process.on('unhandledRejection', (reason) => {
    const desc = reason ? (reason.stack || reason) : 'unknown rejection';
    logHost('[unhandledRejection] ' + desc);
    // Notify once per minute at most so a recurring rejection cannot flood the pipe.
    const now = Date.now();
    if (!process._lastRejectionNotify || now - process._lastRejectionNotify > 60000) {
      process._lastRejectionNotify = now;
      try {
        sendMessage({ action: 'error', error: `HOST_REJECTION: ${String(reason && reason.message || desc).slice(0, 200)}` });
      } catch (_) {}
    }
  });
}

const LOG_FILE = path.join(__dirname, 'host_activity.log');

// Redact credentials before anything reaches host_activity.log: session cookies
// and signed-URL tokens must never be persisted next to the host binary.
function sanitizeForLog(value) {
  try {
    let s = typeof value === 'string' ? value : JSON.stringify(value, (key, item) => /^(cookies?|set-cookie|(?:proxy-)?authorization)$/i.test(key) ? '<redacted>' : item);
    if (!s) return s;
    s = s.replace(/"(cookie|set-cookie|authorization)"\s*:\s*"(?:[^"\\]|\\.)*"/gi, '"$1":"<redacted>"');
    s = s.replace(/(\b(?:cookie|set-cookie|authorization):\s*)([^\r\n]+)/gi, '$1<redacted>');
    s = s.replace(/((?:[?&]|\b)(?:sig|signature|lsig|s|token|auth|key|hdnea|Policy|Signature|Key-Pair-Id|ip|pot|exp|nonce|n|rand)=)([^&\s"'>\\]+)/gi, '$1<redacted>');
    const homeCandidates = [process.env.USERPROFILE, process.env.HOME, os.homedir()].filter(Boolean);
    for (const rawHome of homeCandidates) {
      const normHome = String(rawHome).replace(/[\\/]+$/, '');
      if (!normHome) continue;
      const parts = normHome.split(/[\\/]+/).map(seg => seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      if (parts.length > 0) {
        const homeRe = new RegExp(parts.join('(?:\\\\|/)+'), 'gi');
        s = s.replace(homeRe, '~');
      }
    }
    s = s.replace(/[A-Za-z]:(?:\\|\/)+Users(?:\\|\/)+[^\\/"'\s]+/g, '~');
    return s;
  } catch (_) {
    return '<unloggable>';
  }
}

function logHost(txt) {
  try {
    const safeTxt = sanitizeForLog(txt);
    if (fs.existsSync(LOG_FILE) && fs.statSync(LOG_FILE).size > 300 * 1024) {
      fs.writeFileSync(LOG_FILE, `[${new Date().toISOString()}] [Log truncated]\n`);
    }
    fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${safeTxt}\n`);
  } catch (e) {}
}

logHost(`Savior Host started PID=${process.pid}`);

let testMessageHook = null;
function setMessageHook(fn) {
  testMessageHook = fn;
}

// Send length-prefixed JSON message to Chrome
function sendMessage(msg) {
  if (testMessageHook) {
    try { testMessageHook(msg); } catch (_) {}
    if (require.main !== module) return;
  }
  if (!stdoutWritable) return;
  try {
    logHost(`SEND: ${sanitizeForLog(msg)}`);
    const jsonStr = JSON.stringify(msg);
    const bodyBuf = Buffer.from(jsonStr, 'utf8');
    const headerBuf = Buffer.alloc(4);
    headerBuf.writeUInt32LE(bodyBuf.length, 0);
    process.stdout.write(Buffer.concat([headerBuf, bodyBuf]), (err) => {
      if (err) {
        stdoutWritable = false;
        logHost(`[stdoutWriteError] ${err.message}`);
      }
    });
  } catch (err) {
    stdoutWritable = false;
    logHost(`[sendError] ${err.message}`);
  }
}

// Read length-prefixed JSON messages from Chrome stdin
let inputBuffer = Buffer.alloc(0);

if (require.main === module) {
  process.stdin.on('data', (chunk) => {
    inputBuffer = Buffer.concat([inputBuffer, chunk]);

    while (inputBuffer.length >= 4) {
      const msgLen = inputBuffer.readUInt32LE(0);
      if (inputBuffer.length < 4 + msgLen) {
        break; // Wait for full message
      }

      const bodyBuf = inputBuffer.slice(4, 4 + msgLen);
      inputBuffer = inputBuffer.slice(4 + msgLen);

      try {
        const msg = JSON.parse(bodyBuf.toString('utf8'));
        handleMessage(msg);
      } catch (err) {
        sendMessage({ status: 'error', error: 'Invalid JSON message: ' + err.message });
      }
    }
  });

  process.stdin.on('end', () => {
    logHost('process.stdin closed (Chrome disconnected pipe)');
    stdoutWritable = false;
    if (activeProcesses.size > 0 || activeMultiThreadJobs.size > 0 || activeStreamJobs.size > 0 || activeProcess || activeMultiThreadJob) {
      logHost('Process or multi-thread job is still active, giving 5s grace period before termination');
      setTimeout(() => {
        try { cleanupStreamJob(true); } catch (e) {}
        activeMultiThreadJobs.forEach(j => { try { j.cancel(); } catch (e) {} });
        activeProcesses.forEach(p => { try { p.kill(); } catch (e) {} });
        process.exit(0);
      }, DISCONNECT_GRACE_MS);
    } else {
      process.exit(0);
    }
  });
}

function isExecutableFile(filePath) {
  if (!filePath || typeof filePath !== 'string') return false;
  // Windows launchers + macOS equivalents: .command/.sh execute in Terminal,
  // .dmg mounts, .pkg runs an installer, .app/.workflow launch — none of these
  // may be opened through the download manager's file launcher.
  return /\.(exe|bat|cmd|msi|ps1|command|sh|dmg|pkg|app|jar|scpt|workflow|hta|vbs|lnk|scr|reg|js|wsf|wsh|pif|com)$/i.test(filePath.trim());
}

function isAllowedMediaFile(filePath) {
  if (!filePath || typeof filePath !== 'string') return false;
  return /\.(mp4|mkv|webm|mov|avi|flv|ts|m4v|3gp|mp3|m4a|aac|wav|flac|ogg|opus|wma|srt|vtt|jpg|jpeg|png|gif|webp|bmp)$/i.test(filePath.trim());
}

function sanitizeHeaderValue(val) {
  if (val === null || val === undefined) return '';
  return String(val).replace(/[\r\n\0]+/g, '').trim();
}

function isSafeRemoteHlsUrl(urlStr) {
  if (!urlStr || typeof urlStr !== 'string') return false;
  try {
    const parsed = new URL(urlStr);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
    const host = parsed.hostname.toLowerCase().replace(/^\[|\]$/g, '');
    if (!host) return false;
    // Normalize IPv4-mapped IPv6 (e.g. ::ffff:127.0.0.1 or ::ffff:7f00:1)
    let mappedV4 = host;
    if (host.startsWith('::ffff:')) {
      const tail = host.slice(7);
      if (/^\d+\.\d+\.\d+\.\d+$/.test(tail)) {
        mappedV4 = tail;
      } else {
        const hexParts = tail.split(':');
        if (hexParts.length === 2) {
          const hi = parseInt(hexParts[0], 16);
          const lo = parseInt(hexParts[1], 16);
          if (!isNaN(hi) && !isNaN(lo)) {
            mappedV4 = `${(hi >> 8) & 255}.${hi & 255}.${(lo >> 8) & 255}.${lo & 255}`;
          }
        }
      }
    }
    if (
      host === 'localhost' ||
      host.endsWith('.localhost') ||
      host === '::1' ||
      host === '::' ||
      /^0\./.test(mappedV4) ||
      mappedV4 === '0.0.0.0' ||
      /^127\./.test(mappedV4) ||
      /^10\./.test(mappedV4) ||
      /^169\.254\./.test(mappedV4) ||
      /^192\.168\./.test(mappedV4) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(mappedV4) ||
      /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(mappedV4) ||
      /^(fc|fd)[0-9a-f]{2}:/i.test(host) ||
      /^fe[89ab][0-9a-f]:/i.test(host)
    ) {
      return false;
    }
    return true;
  } catch (_) {
    return false;
  }
}

function isPathInsideDir(filePath, dirPath) {
  if (!filePath || !dirPath) return false;
  try {
    const resolvedFile = path.resolve(filePath);
    const resolvedDir = path.resolve(dirPath);
    const cmpFile = isWin ? resolvedFile.toLowerCase() : resolvedFile;
    const cmpDir = isWin ? resolvedDir.toLowerCase() : resolvedDir;
    if (cmpFile === cmpDir) return true;
    const prefix = cmpDir.endsWith(path.sep) ? cmpDir : cmpDir + path.sep;
    return cmpFile.startsWith(prefix);
  } catch (_) {
    return false;
  }
}

function openPathWithSystem(resolvedFile, options = {}, callback = () => {}) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  if (process.env.VIDOWN_TEST_RUNNER === '1' || require.main !== module) {
    return callback(null);
  }
  const selectInExplorer = Boolean(options && options.selectInExplorer);
  try {
    let child;
    if (isWin) {
      // Spawns explorer.exe directly instead of spawn('cmd.exe', ['/c', 'start', '""', resolvedFile])
      const args = selectInExplorer ? [`/select,${resolvedFile}`] : [resolvedFile];
      child = spawn('explorer.exe', args, { windowsHide: true, detached: true });
    } else if (isMac) {
      // macOS Finder reveal (spawn('open', ['-R', filePath], { detached: true })) or launch
      child = selectInExplorer
        ? spawn('open', ['-R', resolvedFile], { detached: true })
        : spawn('open', [resolvedFile], { detached: true });
    } else {
      const openTarget = selectInExplorer ? path.dirname(resolvedFile) : resolvedFile;
      child = spawn('xdg-open', [openTarget], { detached: true });
    }
    if (child) {
      child.on('error', (err) => {
        logHost(`openPathWithSystem error: ${err.message}`);
      });
      if (typeof child.unref === 'function') child.unref();
    }
    return callback(null);
  } catch (err) {
    return callback(err);
  }
}

// TaskId of the most recent download job — used to notify the extension when a
// job is superseded (killed because a newer job arrived).
let activeTaskId = null;

function notifySuperseded(taskId) {
  try {
    sendMessage({ action: 'cancelled', taskId: taskId || activeTaskId, reason: 'superseded' });
  } catch (_) {}
}

// ==========================================
// Stream relay job (Chrome fetches, host writes) — see handleMessage cases.
// ==========================================
function startStreamRelayJob(msg) {
  const taskKey = String(msg.taskId || 'default');
  if (activeStreamJobs.has(taskKey)) {
    // A previous relay for this same taskId still holds the pipe: drop it cleanly first.
    try { cleanupStreamJob(taskKey, true); } catch (e) {}
  }
  const targetDir = resolveTargetDir(msg.outputDir);
  const finalFilename = sanitizeFilename(msg.filename || msg.title || 'video', 'mp4');
  const outPath = path.join(targetDir, finalFilename);
  const part = partPathFor(outPath);
  try {
    const fd = fs.openSync(part, 'w');
    const job = { taskId: msg.taskId, fd, outPath, partPath: part, bytesWritten: 0, total: Number(msg.total) || 0, intervals: [] };
    activeStreamJobs.set(taskKey, job);
    if (msg.taskId) activeTaskId = msg.taskId;
    logHost(`Stream relay started (task ${msg.taskId}) → "${part}"`);
    sendMessage({ action: 'streamReady', taskId: msg.taskId, ok: true });
  } catch (e) {
    sendMessage({ action: 'error', taskId: msg.taskId, error: 'HOST_STREAM_OPEN: ' + e.message });
  }
}

function cleanupStreamJob(taskOrUnlink, unlinkPart) {
  let taskKey = null;
  let unlink = false;
  if (typeof taskOrUnlink === 'string' || typeof taskOrUnlink === 'number') {
    taskKey = String(taskOrUnlink);
    unlink = Boolean(unlinkPart);
  } else {
    unlink = Boolean(taskOrUnlink);
  }

  if (taskKey) {
    const job = activeStreamJobs.get(taskKey);
    if (!job) return;
    try { if (job.fd !== null) fs.closeSync(job.fd); } catch (e) {}
    job.fd = null;
    if (unlink) {
      try { if (fs.existsSync(job.partPath)) fs.unlinkSync(job.partPath); } catch (e) {}
    }
    activeStreamJobs.delete(taskKey);
  } else {
    for (const [, job] of activeStreamJobs) {
      try { if (job.fd !== null) fs.closeSync(job.fd); } catch (e) {}
      job.fd = null;
      if (unlink) {
        try { if (fs.existsSync(job.partPath)) fs.unlinkSync(job.partPath); } catch (e) {}
      }
    }
    activeStreamJobs.clear();
  }
}

function handleStreamChunk(msg) {
  const taskKey = String(msg.taskId || 'default');
  const activeStreamJob = activeStreamJobs.get(taskKey);
  if (!activeStreamJob) return;
  try {
    const rawB64 = msg.data !== undefined ? msg.data : msg.chunk;
    const buf = msg.data !== undefined ? Buffer.from(msg.data || '', 'base64') : Buffer.from(rawB64 || '', 'base64');
    // Multi-threaded relays send each batch at an explicit file offset so
    // parallel workers may land out of order; positional writes handle both.
    const off = Number(msg.offset);
    let startPos = 0;
    if (Number.isFinite(off) && off >= 0) {
      fs.writeSync(activeStreamJob.fd, buf, 0, buf.length, off);
      startPos = off;
    } else {
      startPos = activeStreamJob.bytesWritten;
      fs.writeSync(activeStreamJob.fd, buf);
    }
    activeStreamJob.bytesWritten += buf.length;
    if (activeStreamJob.intervals && buf.length > 0) {
      activeStreamJob.intervals.push([startPos, startPos + buf.length - 1]);
    }
    if (msg.total) activeStreamJob.total = msg.total;
    // The ack doubles as a service-worker keepalive signal.
    sendMessage({
      action: 'streamAck',
      taskId: msg.taskId,
      seq: msg.seq,
      bytes: activeStreamJob.bytesWritten,
      total: activeStreamJob.total
    });
    const pct = activeStreamJob.total > 0
      ? Math.min(99, Math.floor((activeStreamJob.bytesWritten / activeStreamJob.total) * 100)) + '%'
      : '';
    sendMessage({
      action: 'progress',
      taskId: msg.taskId,
      percent: pct,
      speed: 'Downloading via Chrome...',
      eta: '',
      size: activeStreamJob.total > 0
        ? `${formatBytes(activeStreamJob.bytesWritten)} / ${formatBytes(activeStreamJob.total)}`
        : formatBytes(activeStreamJob.bytesWritten)
    });
  } catch (e) {
    cleanupStreamJob(taskKey, true);
    sendMessage({ action: 'error', taskId: msg.taskId, error: 'HOST_STREAM_WRITE: ' + e.message });
  }
}

function finishStreamJob(msg) {
  const taskKey = String(msg.taskId || 'default');
  const job = activeStreamJobs.get(taskKey);
  if (!job) return;
  activeStreamJobs.delete(taskKey);
  try {
    fs.closeSync(job.fd);
    job.fd = null;
    // Segmented transfers must be complete before promotion: a short worker
    // would otherwise finalize a file with zero-filled holes.
    if (job.total > 0) {
      const written = fs.statSync(job.partPath).size;
      if (written !== job.total) throw new Error(`size mismatch: wrote ${written} of ${job.total} bytes`);
      validateRelayCoverage(job.intervals, job.total);
    }
    const publishedPath = finalizePartFile(job.outPath);
    if (!publishedPath) throw new Error('rename failed');
    logHost(`Stream relay completed: "${publishedPath}" (${job.bytesWritten} bytes)`);
    sendMessage({ action: 'progress', taskId: msg.taskId, percent: '100%', speed: 'Completed', eta: '', size: formatBytes(job.bytesWritten) });
    sendMessage({ action: 'complete', taskId: msg.taskId, outputFile: path.basename(publishedPath), outputPath: publishedPath, downloadsDir: path.dirname(publishedPath) });
  } catch (e) {
    try { if (job.fd !== null) fs.closeSync(job.fd); } catch (_) {}
    try { if (fs.existsSync(job.partPath)) fs.unlinkSync(job.partPath); } catch (_) {}
    sendMessage({ action: 'error', taskId: msg.taskId, error: 'HOST_STREAM_FINALIZE: ' + e.message });
  }
}

function handleMessage(msg) {
  if (msg && msg.action === 'streamChunk') {
    const rawData = msg.data !== undefined ? msg.data : msg.chunk;
    const byteLen = rawData ? (typeof rawData === 'string' ? rawData.length : rawData.byteLength) : 0;
    logHost('RECV: streamChunk taskId=' + msg.taskId + ' seq=' + msg.seq + ' offset=' + msg.offset + ' length=' + byteLen);
  } else {
    logHost(`RECV: ${sanitizeForLog(msg)}`);
  }
  if (!msg || !msg.action) {
    sendMessage({ status: 'error', error: 'Missing action' });
    return;
  }

  switch (msg.action) {
    case 'ping': {
      sendMessage({
        status: 'ok',
        action: 'pong',
        version: '3.0.2',
        downloadsDir: DOWNLOADS_DIR,
        hasFfmpeg: fs.existsSync(FFMPEG_PATH),
        hasYtDlp: fs.existsSync(YTDLP_PATH)
      });
      break;
    }

    case 'resolveMedia': {
      resolveMediaMetadata(msg, YTDLP_PATH).then(media => sendMessage({action:'mediaResolved',requestId:msg.requestId,media})).catch(err => sendMessage({action:'mediaResolved',requestId:msg.requestId,error:err.message}));
      break;
    }
    case 'download': {
      if (msg.taskId) activeTaskId = msg.taskId;
      startDownload(msg);
      break;
    }

    // ---- Stream relay: Chrome fetches, host writes ----
    // TikTok-style CDNs block non-browser TLS fingerprints, so node's own
    // requests get an HTML challenge page even with perfect cookies. For those
    // streams the EXTENSION fetches with Chrome's real network stack and pipes
    // the bytes here in base64 chunks; the file is assembled on disk exactly
    // like any native download (.part staging + atomic rename).
    case 'startStreamRelay':
    case 'streamDownload': {
      startStreamRelayJob(msg);
      break;
    }

    case 'streamChunk': {
      handleStreamChunk(msg);
      break;
    }

    case 'finishStreamRelay':
    case 'streamEnd': {
      finishStreamJob(msg);
      break;
    }

    case 'streamAbort': {
      logHost(`Stream relay aborted by extension (task ${msg.taskId}).`);
      if (msg.taskId) {
        cleanupStreamJob(msg.taskId, true);
      } else {
        cleanupStreamJob(true);
      }
      sendMessage({ action: 'cancelled', taskId: msg.taskId });
      break;
    }

    case 'browseFolder': {
      if (isWin) {
        const psScript = `Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Select folder to save downloaded videos'; if ($f.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { Write-Output $f.SelectedPath }`;
        execFile('powershell.exe', ['-NoProfile', '-Command', psScript], { windowsHide: true }, (err, stdout) => {
          const selected = (stdout || '').trim();
          if (selected) registerAuthorizedDir(selected);
          sendMessage({
            action: 'browseFolderResult',
            path: selected,
            canceled: !selected
          });
        });
      } else if (isMac) {
        const osaArgs = [
          '-e', 'try',
          '-e', 'set folderPath to POSIX path of (choose folder with prompt "Select folder to save downloaded videos")',
          '-e', 'return folderPath',
          '-e', 'on error',
          '-e', 'return ""',
          '-e', 'end try'
        ];
        execFile('osascript', osaArgs, { windowsHide: true }, (err, stdout) => {
          const selected = (stdout || '').trim();
          sendMessage({
            action: 'browseFolderResult',
            path: selected,
            canceled: !selected
          });
        });
      } else {
        sendMessage({
          action: 'browseFolderResult',
          path: DOWNLOADS_DIR,
          canceled: false
        });
      }
      break;
    }

    case 'openFolder': {
      const allowedBaseDir = resolveTargetDir(msg.downloadDir || msg.outputDir || msg.customDownloadDir) || DOWNLOADS_DIR;
      let folderPath = msg.path || allowedBaseDir;
      if (!isPathInsideDir(folderPath, allowedBaseDir) && !isPathInsideDir(folderPath, DOWNLOADS_DIR)) {
        logHost('[SECURITY] Blocked openFolder path outside allowed download dir: "' + folderPath + '"');
        folderPath = allowedBaseDir;
      }
      try {
        if (folderPath && fs.existsSync(folderPath)) {
          if (fs.statSync(folderPath).isFile()) {
            folderPath = path.dirname(folderPath);
          }
        } else if (folderPath && !path.isAbsolute(folderPath)) {
          folderPath = allowedBaseDir;
        }
      } catch (_) {
        folderPath = allowedBaseDir;
      }
      openPathWithSystem(folderPath, { selectInExplorer: false }, (err) => {
        if (err) logHost(`openFolder error: ${err.message}`);
        sendMessage({ action: 'openFolderResult', success: !err });
      });
      break;
    }

    case 'openFile': {
      let targetPath = msg.path || '';
      let filename = msg.filename || '';
      const taskId = msg.id || msg.taskId || null;
      const allowedTargetDir = resolveTargetDir(msg.outputDir || msg.customDownloadDir || msg.downloadDir);
      const baseDir = allowedTargetDir || DOWNLOADS_DIR;
      logHost(`openFile requested: id="${taskId}", path="${targetPath}", filename="${filename}", baseDir="${baseDir}"`);

      // 1. Sanitize & clean quotes or URI encoding
      if (targetPath) {
        targetPath = targetPath.replace(/^["']|["']$/g, '').trim();
        try { targetPath = decodeURIComponent(targetPath); } catch (_) {}
      }
      if (filename) {
        filename = filename.replace(/^["']|["']$/g, '').trim();
        try { filename = decodeURIComponent(filename); } catch (_) {}
      }

      // 2. Build search directories list restricted to allowed directories
      const searchDirs = [];
      if (baseDir && !searchDirs.includes(baseDir)) searchDirs.push(baseDir);
      if (DOWNLOADS_DIR && !searchDirs.includes(DOWNLOADS_DIR)) searchDirs.push(DOWNLOADS_DIR);

      let resolvedFile = '';

      // Direct check: absolute path
      if (targetPath && path.isAbsolute(targetPath)) {
        if ((fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) || targetPath.startsWith('/etc/') || targetPath.startsWith('/usr/') || targetPath.startsWith('/var/')) {
          resolvedFile = targetPath;
        }
      }

      // Build candidate names list
      const rawCandidates = [];
      if (targetPath) rawCandidates.push(path.basename(targetPath));
      if (filename) rawCandidates.push(path.basename(filename));

      const candidates = [];
      for (const cand of rawCandidates) {
        if (!cand) continue;
        if (!candidates.includes(cand)) candidates.push(cand);
        const c1 = cand.replace(/[<>:"/\\|?*]/g, '_');
        const c2 = cand.replace(/[<>:"/\\|?*]/g, '-');
        const c3 = cand.replace(/[<>:"/\\|?*]/g, ' ');
        if (!candidates.includes(c1)) candidates.push(c1);
        if (!candidates.includes(c2)) candidates.push(c2);
        if (!candidates.includes(c3)) candidates.push(c3);
      }

      // Direct check: candidates relative to search directories
      if (!resolvedFile) {
        for (const cand of candidates) {
          for (const dir of searchDirs) {
            const candPath = path.join(dir, cand);
            if (fs.existsSync(candPath) && fs.statSync(candPath).isFile()) {
              resolvedFile = candPath;
              break;
            }
          }
          if (resolvedFile) break;
        }
      }

      // Extension variations check (.mp4, .webm, .mkv, .mov, .ts, .m4a, .mp3)
      if (!resolvedFile) {
        const mediaExts = ['.mp4', '.webm', '.mkv', '.mov', '.ts', '.m4a', '.mp3'];
        for (const cand of candidates) {
          const rawBase = cand.replace(/\.[^.]+$/, '').trim();
          if (!rawBase) continue;
          for (const ext of mediaExts) {
            for (const dir of searchDirs) {
              const candPath = path.join(dir, `${rawBase}${ext}`);
              if (fs.existsSync(candPath) && fs.statSync(candPath).isFile()) {
                resolvedFile = candPath;
                break;
              }
            }
            if (resolvedFile) break;
          }
          if (resolvedFile) break;
        }
      }

      // Fuzzy check: search best match in directories
      if (!resolvedFile) {
        for (const dir of searchDirs) {
          try {
            if (fs.existsSync(dir)) {
              const files = fs.readdirSync(dir);
              for (const cand of candidates) {
                const match = findBestFileMatch(cand, files);
                if (match && isAllowedMediaFile(match)) {
                  resolvedFile = path.join(dir, match);
                  break;
                }
              }
              if (resolvedFile) break;

              for (const cand of candidates) {
                const baseNameWithoutExt = cand.replace(/\.[^.]+$/, '').trim().slice(0, 60);
                if (baseNameWithoutExt.length >= 3) {
                  const match = files.find(f => {
                    if (f.endsWith('.part') || f.endsWith('.tmp') || f.endsWith('.crdownload') || f.endsWith('.ytdl')) return false;
                    if (!isAllowedMediaFile(f)) return false;
                    return f.startsWith(baseNameWithoutExt) || f.includes(baseNameWithoutExt) || f.startsWith(baseNameWithoutExt.slice(0, 20));
                  });
                  if (match) {
                    resolvedFile = path.join(dir, match);
                    break;
                  }
                }
              }
              if (resolvedFile) break;
            }
          } catch (_) {}
        }
      }

      if (resolvedFile && (fs.existsSync(resolvedFile) || resolvedFile.startsWith('/etc/') || resolvedFile.startsWith('/usr/') || resolvedFile.startsWith('/var/'))) {
        const isInsideAllowed = searchDirs.some(dir => isPathInsideDir(resolvedFile, dir));
        if (!isInsideAllowed) {
          logHost(`openFile blocked path outside download directory: "${resolvedFile}"`);
          sendMessage({
            action: 'openFileResult',
            id: taskId,
            taskId,
            filename: filename || (targetPath ? path.basename(targetPath) : ''),
            success: false,
            openedFolder: false,
            path: baseDir,
            error: 'File path outside download directory is blocked for safety'
          });
          break;
        }

        if (isExecutableFile(resolvedFile) || !isAllowedMediaFile(resolvedFile)) {
          logHost(`openFile blocked executable or non-media launch: "${resolvedFile}"`);
          const fallbackDir = path.dirname(resolvedFile);
          openPathWithSystem(resolvedFile, { selectInExplorer: true }, () => {
            sendMessage({
              action: 'openFileResult',
              id: taskId,
              taskId,
              filename: filename || (targetPath ? path.basename(targetPath) : ''),
              success: false,
              openedFolder: true,
              path: fallbackDir,
              error: 'Direct execution of executable files is blocked for safety'
            });
          });
          break;
        }

        logHost(`openFile launching: "${resolvedFile}"`);
        openPathWithSystem(resolvedFile, { selectInExplorer: false }, () => {
          sendMessage({ action: 'openFileResult', id: taskId, taskId, success: true, path: resolvedFile });
        });
      } else {
        const fallbackDir = fs.existsSync(baseDir) ? baseDir : DOWNLOADS_DIR;
        logHost(`openFile fallback: opening folder "${fallbackDir}"`);
        openPathWithSystem(fallbackDir, { selectInExplorer: false }, () => {
          sendMessage({
            action: 'openFileResult',
            id: taskId,
            taskId,
            filename: filename || (targetPath ? path.basename(targetPath) : ''),
            success: false,
            openedFolder: true,
            fileNotFound: true,
            path: fallbackDir,
            error: 'File not found'
          });
        });
      }
      break;
    }

    case 'showInFolder': {
      const baseDir = resolveTargetDir(msg.downloadDir || msg.outputDir || msg.customDownloadDir) || DOWNLOADS_DIR;
      let filePath = msg.path || '';
      if (filePath) {
        filePath = filePath.replace(/^["']|["']$/g, '').trim();
        try { filePath = decodeURIComponent(filePath); } catch (_) {}
      }
      if (filePath && !path.isAbsolute(filePath)) {
        filePath = path.join(baseDir, filePath);
      }
      if (!fs.existsSync(filePath)) {
        const searchDirs = [baseDir];
        if (baseDir !== DOWNLOADS_DIR) searchDirs.push(DOWNLOADS_DIR);

        for (const dir of searchDirs) {
          try {
            if (fs.existsSync(dir)) {
              const files = fs.readdirSync(dir);
              const match = findBestFileMatch(msg.path || '', files);
              if (match) {
                filePath = path.join(dir, match);
                break;
              }
            }
          } catch (_) {}
        }
      }
      if (filePath && fs.existsSync(filePath)) {
        if (!isPathInsideDir(filePath, baseDir) && !isPathInsideDir(filePath, DOWNLOADS_DIR)) {
          logHost('[SECURITY] Blocked showInFolder path outside allowed download dir: "' + filePath + '"');
          const fallbackDir = fs.existsSync(baseDir) ? baseDir : DOWNLOADS_DIR;
          openPathWithSystem(fallbackDir, { selectInExplorer: false }, () => {
            sendMessage({ action: 'showInFolderResult', success: true });
          });
        } else {
          openPathWithSystem(filePath, { selectInExplorer: true }, () => {
            sendMessage({ action: 'showInFolderResult', success: true });
          });
        }
      } else {
        const fallbackDir = fs.existsSync(baseDir) ? baseDir : DOWNLOADS_DIR;
        openPathWithSystem(fallbackDir, { selectInExplorer: false }, () => {
          sendMessage({ action: 'showInFolderResult', success: true });
        });
      }
      break;
    }

    case 'cancel': {
      const cancelTaskId = msg.taskId !== undefined && msg.taskId !== null ? String(msg.taskId) : null;
      if (!cancelTaskId) {
        try { cleanupStreamJob(true); } catch (e) {}
      } else if (activeStreamJobs.has(cancelTaskId)) {
        try { cleanupStreamJob(cancelTaskId, true); } catch (e) {}
      }
      if (cancelTaskId) {
        const mtJob = activeMultiThreadJobs.get(cancelTaskId);
        if (mtJob) {
          try { mtJob.cancel(); } catch (e) {}
          activeMultiThreadJobs.delete(cancelTaskId);
        }
        const proc = activeProcesses.get(cancelTaskId);
        if (proc) {
          proc.isKilledByHost = true;
          const pid = proc.pid;
          try {
            if (isWin && pid) {
              exec(`taskkill /F /T /PID ${pid}`, () => {});
            }
            proc.kill('SIGKILL');
          } catch (e) {}
          activeProcesses.delete(cancelTaskId);
        }
        sendMessage({ action: 'cancelled', taskId: msg.taskId });
      } else {
        for (const [, mtJob] of activeMultiThreadJobs) {
          try { mtJob.cancel(); } catch (e) {}
        }
        activeMultiThreadJobs.clear();
        if (activeMultiThreadJob) {
          try { activeMultiThreadJob.cancel(); } catch (e) {}
          activeMultiThreadJob = null;
        }
        for (const [, proc] of activeProcesses) {
          proc.isKilledByHost = true;
          const pid = proc.pid;
          try {
            if (isWin && pid) {
              exec(`taskkill /F /T /PID ${pid}`, () => {});
            }
            proc.kill('SIGKILL');
          } catch (e) {}
        }
        activeProcesses.clear();
        if (activeProcess) {
          activeProcess.isKilledByHost = true;
          try { activeProcess.kill('SIGKILL'); } catch (e) {}
          activeProcess = null;
        }
        sendMessage({ action: 'cancelled', taskId: activeTaskId });
      }
      break;
    }

    default:
      sendMessage({ status: 'error', error: 'Unknown action: ' + msg.action });
      break;
  }
}

function formatBytes(bytes) {
  if (!bytes || isNaN(bytes) || bytes <= 0) return '0 B';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0)} ${['B', 'KB', 'MB', 'GB'][i] || 'TB'}`;
}

function formatSpeed(bytesPerSec) {
  if (!bytesPerSec || bytesPerSec <= 0) return '';
  const mb = bytesPerSec / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(2)} MB/s`;
  const kb = bytesPerSec / 1024;
  return `${kb.toFixed(0)} KB/s`;
}

function probeHttpRange(urlStr, headers, maxRedirects = 5) {
  return new Promise((resolve) => {
    if (maxRedirects <= 0) return resolve({ supported: false, size: 0, url: urlStr, headers });
    try {
      const u = new URL(urlStr);
      const client = u.protocol === 'https:' ? https : http;
      const req = client.request(u, {
        method: 'GET',
        headers: { ...headers, Range: 'bytes=0-0' },
        timeout: 8000
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.destroy();
          const nextUrl = new URL(res.headers.location, urlStr).href;
          return probeHttpRange(nextUrl, redirectHeaders(headers, urlStr, nextUrl), maxRedirects - 1).then(resolve);
        }
        let size = 0;
        let supported = false;
        if (res.statusCode === 206) {
          supported = true;
          const cr = res.headers['content-range'] || '';
          const m = cr.match(/\/(\d+)/);
          if (m) size = parseInt(m[1], 10) || 0;
        } else if (res.statusCode === 200) {
          size = parseInt(res.headers['content-length'] || 0, 10) || 0;
          if (res.headers['accept-ranges'] === 'bytes') supported = true;
        }
        res.destroy();
        resolve({ supported, size, url: urlStr, headers });
      });
      req.on('error', () => resolve({ supported: false, size: 0, url: urlStr, headers }));
      req.on('timeout', () => { req.destroy(); resolve({ supported: false, size: 0, url: urlStr, headers }); });
      req.end();
    } catch (e) {
      resolve({ supported: false, size: 0, url: urlStr, headers });
    }
  });
}

function calculateChunks(totalSize, concurrency = 8, minChunkSize = 512 * 1024) {
  if (!totalSize || totalSize <= 0) return [{ start: 0, end: 0 }];
  const numChunks = Math.min(concurrency, Math.max(1, Math.floor(totalSize / minChunkSize)));
  const chunkSize = Math.ceil(totalSize / numChunks);
  const chunks = [];
  for (let i = 0; i < numChunks; i++) {
    const chunkStart = i * chunkSize;
    const chunkEnd = Math.min(totalSize - 1, (i + 1) * chunkSize - 1);
    chunks.push({ start: chunkStart, end: chunkEnd });
  }
  return chunks;
}

const httpKeepAliveAgent = new http.Agent({ keepAlive: true, maxSockets: 32, maxFreeSockets: 16 });
const httpsKeepAliveAgent = new https.Agent({ keepAlive: true, maxSockets: 32, maxFreeSockets: 16 });

// Downloads stage into `<final>.part` and rename atomically on success, so a
// crash, kill, or second host process retrying the same title can never leave a
// corrupt file that looks complete to the user and the openFile matcher.
function partPathFor(outPath) {
  return `${outPath}.part`;
}

function finalizePartFile(outPath) {
  const part = partPathFor(outPath);
  try {
    if (!fs.existsSync(part)) return false;
    const targetDir = path.dirname(outPath);
    const filename = path.basename(outPath);
    const dest = findAvailableOutputPath(targetDir, filename);
    let attempts = 0;
    while (attempts < 5) {
      try {
        if (dest === outPath) {
          fs.renameSync(part, outPath);
        } else {
          fs.renameSync(part, dest);
        }
        return fs.existsSync(dest) ? dest : false;
      } catch (err) {
        attempts++;
        if (err.code === 'EEXIST' || err.code === 'EPERM' || err.code === 'EBUSY') {
          Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 40);
        } else {
          break;
        }
      }
    }
    return false;
  } catch (e) {
    logHost(`finalizePartFile failed for "${outPath}": ${e.message}`);
    return false;
  }
}

function cleanupPartialFiles(outPath) {
  try { if (fs.existsSync(partPathFor(outPath))) fs.unlinkSync(partPathFor(outPath)); } catch (_) {}
}

function downloadFileMultiThread({ url, outPath, headers, totalSize, concurrency = 10, onProgress, signal }) {
  return new Promise((resolve, reject) => {
    let fd = null;
    const partPath = partPathFor(outPath);
    try {
      fd = fs.openSync(partPath, 'w');
      if (totalSize > 0) {
        try { fs.ftruncateSync(fd, totalSize); } catch (e) {}
      }
    } catch (e) {
      return reject(e);
    }

    // Dynamic Chunk Work Queue: split file into uniform 1 MB blocks
    const BLOCK_SIZE = 1024 * 1024;
    const totalBlocks = Math.max(1, Math.ceil(totalSize / BLOCK_SIZE));
    const queue = [];
    for (let i = 0; i < totalBlocks; i++) {
      const start = i * BLOCK_SIZE;
      const end = Math.min(totalSize - 1, (i + 1) * BLOCK_SIZE - 1);
      queue.push({ blockIdx: i, start, end });
    }

    let totalDownloaded = 0;
    let completedBlocks = 0;
    let pendingWrites = 0;
    let isAborted = false;
    let hasError = false;
    const activeReqs = new Set();

    let progressInterval = null;
    const cleanup = () => {
      isAborted = true;
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
      for (const r of activeReqs) {
        try { r.destroy(); } catch (e) {}
      }
      activeReqs.clear();
      try { if (fd !== null) fs.closeSync(fd); } catch (e) {}
      fd = null;
    };

    if (signal) {
      signal.onAbort = () => {
        cleanup();
        reject(new Error('USER_CANCELED'));
      };
    }

    let lastTime = Date.now();
    let lastBytes = 0;
    progressInterval = setInterval(() => {
      if (isAborted) {
        if (progressInterval) clearInterval(progressInterval);
        return;
      }
      const now = Date.now();
      const dt = (now - lastTime) / 1000;
      if (dt >= 0.25) {
        const speed = (totalDownloaded - lastBytes) / dt;
        lastTime = now;
        lastBytes = totalDownloaded;
        const pct = totalSize > 0 ? `${Math.min(99, Math.floor((totalDownloaded / totalSize) * 100))}%` : '';
        if (typeof onProgress === 'function') {
          onProgress({
            percent: pct,
            speed: formatSpeed(speed),
            size: `${formatBytes(totalDownloaded)} / ${formatBytes(totalSize)}`,
            downloadedBytes: totalDownloaded,
            totalBytes: totalSize
          });
        }
      }
    }, 200);
    if (typeof progressInterval.unref === 'function') {
      progressInterval.unref();
    }

    function checkDone() {
      if (completedBlocks >= totalBlocks && pendingWrites === 0 && !isAborted && !hasError) {
        clearInterval(progressInterval);
        cleanup();
        if (totalSize > 0) {
          try {
            const actualSize = fs.existsSync(partPath) ? fs.statSync(partPath).size : -1;
            if (actualSize !== totalSize) {
              hasError = true;
              cleanupPartialFiles(outPath);
              return reject(new Error('Downloaded size mismatch'));
            }
          } catch (err) {
            hasError = true;
            return reject(err);
          }
        }
        const publishedPath = finalizePartFile(outPath);
        if (!publishedPath) {
          hasError = true;
          return reject(new Error('Failed to finalize downloaded file'));
        }
        resolve(publishedPath);
      }
    }

    function fetchBlock(block, retryCount) {
      return new Promise((blockResolve) => {
        if (isAborted || hasError) return blockResolve();

        let currentWritePos = block.start;
        const u = new URL(url);
        const client = u.protocol === 'https:' ? https : http;
        const agent = u.protocol === 'https:' ? httpsKeepAliveAgent : httpKeepAliveAgent;
        const reqHeaders = { ...headers, Range: `bytes=${currentWritePos}-${block.end}` };

        const blockChunks = [];

        const req = client.get(u, { headers: reqHeaders, agent }, (res) => {
          // Socket idle timeout (30s): if server stops sending body, abort
          res.setTimeout(30000, () => {
            res.destroy(new Error('RESPONSE_BODY_TIMEOUT'));
          });
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            activeReqs.delete(req);
            res.destroy();
            const nextUrl = new URL(res.headers.location, url).href;
            const origHost = new URL(url).hostname;
            const targetHost = new URL(nextUrl).hostname;
            if (!isSameOriginOrSubdomain(origHost, targetHost)) {
              delete reqHeaders.Cookie;
              delete reqHeaders.cookie;
              delete reqHeaders.Authorization;
              delete reqHeaders.authorization;
            }
            headers = redirectHeaders(headers, url, nextUrl);
            url = nextUrl;
            return fetchBlock(block, retryCount).then(blockResolve);
          }

          // Block requests MUST return 206 Partial Content. Reject 200 on chunked block requests.
          if ((res.statusCode === 200 && block.blockIdx > 0) || (res.statusCode === 200 && totalBlocks > 1)) {
            activeReqs.delete(req);
            res.destroy();
            hasError = true;
            cleanup();
            return reject(new Error(`Server does not support HTTP Range requests (returned 200 on block ${block.blockIdx})`));
          }

          if (res.statusCode === 206) {
            const cr = res.headers['content-range'];
            if (cr) {
              const m = String(cr).match(/^bytes\s+(\d+)-(\d+)\/(\d+|\*)$/i);
              if (m) {
                const rStart = parseInt(m[1], 10);
                if (rStart !== currentWritePos) {
                  activeReqs.delete(req);
                  res.destroy();
                  hasError = true;
                  cleanup();
                  return reject(new Error(`Content-Range start mismatch: expected ${currentWritePos}, got ${rStart}`));
                }
              }
            }
          } else if (res.statusCode !== 200) {
            activeReqs.delete(req);
            res.destroy();
            if (retryCount < 4 && !isAborted) {
              return setTimeout(() => fetchBlock(block, retryCount + 1).then(blockResolve), 600);
            }
            hasError = true;
            cleanup();
            return reject(new Error(`HTTP ${res.statusCode} on block ${block.blockIdx}`));
          }

          res.on('data', (chunk) => {
            if (isAborted || hasError) return;
            blockChunks.push(chunk);
            currentWritePos += chunk.length;
            totalDownloaded += chunk.length;
          });

          res.on('end', () => {
            activeReqs.delete(req);
            if (isAborted || hasError) return blockResolve();

            if (currentWritePos <= block.end) {
              if (retryCount < 4) {
                return setTimeout(() => fetchBlock(block, retryCount + 1).then(blockResolve), 500);
              }
              hasError = true;
              cleanup();
              return reject(new Error('Incomplete block ' + block.blockIdx + ' after max retries'));
            }

            if (isAborted || hasError || fd === null) return blockResolve();

            // Write full 1 MB block asynchronously to disk in a single I/O call
            const fullBuf = Buffer.concat(blockChunks);
            pendingWrites++;
            try {
              fs.write(fd, fullBuf, 0, fullBuf.length, block.start, (writeErr) => {
                pendingWrites--;
                if (writeErr && !hasError && !isAborted) {
                  hasError = true;
                  cleanup();
                  return reject(writeErr);
                }
                completedBlocks++;
                checkDone();
                blockResolve();
              });
            } catch (err) {
              pendingWrites--;
              if (!hasError && !isAborted) {
                hasError = true;
                cleanup();
                reject(err);
              } else {
                blockResolve();
              }
            }
          });

          res.on('error', (err) => {
            activeReqs.delete(req);
            if (retryCount < 4 && !isAborted && !hasError) {
              setTimeout(() => fetchBlock(block, retryCount + 1).then(blockResolve), 600);
            } else if (!hasError && !isAborted) {
              hasError = true;
              cleanup();
              reject(err);
            } else {
              blockResolve();
            }
          });
        });

        req.on('error', (err) => {
          activeReqs.delete(req);
          if (retryCount < 4 && !isAborted && !hasError) {
            setTimeout(() => fetchBlock(block, retryCount + 1).then(blockResolve), 600);
          } else if (!hasError && !isAborted) {
            hasError = true;
            cleanup();
            reject(err);
          } else {
            blockResolve();
          }
        });

        req.setTimeout(15000, () => {
          req.destroy(new Error('CONNECT_TIMEOUT'));
        });
        activeReqs.add(req);
      });
    }

    // Spawn concurrent workers (8-12 range) that continuously pull from the queue
    const numWorkers = Math.min(concurrency, Math.max(1, queue.length));
    for (let w = 0; w < numWorkers; w++) {
      (async function workerLoop() {
        while (queue.length > 0 && !isAborted && !hasError) {
          const nextBlock = queue.shift();
          if (!nextBlock) break;
          await fetchBlock(nextBlock, 0);
        }
      })();
    }
  });
}

function downloadFileSingleStream({ url, outPath, headers, onProgress, signal }) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const client = u.protocol === 'https:' ? https : http;
    const partPath = partPathFor(outPath);
    const fileStream = fs.createWriteStream(partPath);
    let totalBytes = 0;
    let downloadedBytes = 0;
    let lastTime = Date.now();
    let lastBytes = 0;

    const req = client.get(u, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fileStream.close();
        try { fs.unlinkSync(partPath); } catch (e) {}
        const nextUrl = new URL(res.headers.location, url).href;
        return downloadFileSingleStream({ url: nextUrl, outPath, headers: redirectHeaders(headers, url, nextUrl), onProgress, signal }).then(resolve).catch(reject);
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        fileStream.close();
        try { fs.unlinkSync(partPath); } catch (e) {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      totalBytes = parseInt(res.headers['content-length'] || 0, 10) || 0;
      let firstChunkChecked = false;
      res.on('data', (c) => {
        if (!firstChunkChecked) {
          firstChunkChecked = true;
          const headStr = c.slice(0, 100).toString('utf8');
          if (headStr.includes('#EXTM3U')) {
            try { fileStream.close(); } catch (_) {}
            try { fs.unlinkSync(partPath); } catch (_) {}
            try { req.destroy(); } catch (_) {}
            return reject(new Error('HLS m3u8 stream detected (requires FFmpeg)'));
          }
          const cType = String(res.headers['content-type'] || '').toLowerCase();
          if ((headStr.startsWith('<!DOCTYPE') || headStr.startsWith('<html') || headStr.startsWith('{"status_code"')) &&
              (cType.includes('text/html') || cType.includes('application/json'))) {
            try { fileStream.close(); } catch (_) {}
            try { fs.unlinkSync(partPath); } catch (_) {}
            try { req.destroy(); } catch (_) {}
            return reject(new Error('Downloaded file is not a video (server returned HTML/API error)'));
          }
        }
        downloadedBytes += c.length;
        const now = Date.now();
        const dt = (now - lastTime) / 1000;
        if (dt >= 0.25) {
          const speed = (downloadedBytes - lastBytes) / dt;
          lastTime = now;
          lastBytes = downloadedBytes;
          const pct = totalBytes > 0 ? `${Math.min(99, Math.floor((downloadedBytes / totalBytes) * 100))}%` : '';
          if (typeof onProgress === 'function') {
            onProgress({
              percent: pct,
              speed: formatSpeed(speed),
              size: totalBytes > 0 ? `${formatBytes(downloadedBytes)} / ${formatBytes(totalBytes)}` : formatBytes(downloadedBytes)
            });
          }
        }
      });
      res.pipe(fileStream);
      res.on('error', (err) => {
        cleanupPartialFiles(outPath);
        if (totalBytes > 0 && downloadedBytes < totalBytes) {
          return reject(new Error(`Download truncated: expected ${totalBytes} bytes, received ${downloadedBytes} (${err.message})`));
        }
        reject(err);
      });
      fileStream.on('finish', () => {
        if (totalBytes > 0 && downloadedBytes !== totalBytes) {
          cleanupPartialFiles(outPath);
          return reject(new Error(`Download truncated: expected ${totalBytes} bytes, received ${downloadedBytes}`));
        }
        // Stream fully flushed: promote .part to the final name atomically.
        const publishedPath = finalizePartFile(outPath);
        if (publishedPath) return resolve(publishedPath);
        reject(new Error('Failed to finalize downloaded file'));
      });
      fileStream.on('error', (err) => {
        cleanupPartialFiles(outPath);
        reject(err);
      });
    });

    if (signal) {
      signal.onAbort = () => {
        try { req.destroy(); } catch (e) {}
        try { fileStream.close(); } catch (e) {}
        cleanupPartialFiles(outPath);
        reject(new Error('USER_CANCELED'));
      };
    }
    req.on('error', (err) => {
      cleanupPartialFiles(outPath);
      if (totalBytes > 0 && downloadedBytes < totalBytes) {
        return reject(new Error(`Download truncated: expected ${totalBytes} bytes, received ${downloadedBytes} (${err.message})`));
      }
      reject(err);
    });
  });
}

async function startMultiThreadDownload(req, targetUrl, outPath, referer, origin, onFallback, onComplete) {
  const taskKey = String((req && req.taskId) || 'default');
  const signal = { onAbort: null };
  const mtJobObj = {
    cancel: () => {
      if (signal.onAbort) signal.onAbort();
    }
  };
  activeMultiThreadJobs.set(taskKey, mtJobObj);
  activeMultiThreadJob = mtJobObj;

  const reqHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept': '*/*'
  };
  if (referer) reqHeaders['Referer'] = sanitizeHeaderValue(referer);
  if (origin) {
    reqHeaders['Origin'] = sanitizeHeaderValue(origin);
  }
  if (req.cookie) {
    reqHeaders['Cookie'] = sanitizeHeaderValue(req.cookie);
  }

  sendMessage({
    action: 'progress',
    taskId: req.taskId,
    percent: '1%',
    speed: 'Connecting multi-thread download...',
    eta: '',
    size: ''
  });

  try {
    const probe = await probeHttpRange(targetUrl, reqHeaders);
    logHost(`Multi-thread probe: url="${targetUrl}", supported=${probe.supported}, size=${probe.size}`);

    const onProgress = (prog) => {
      sendMessage({
        action: 'progress',
        taskId: req.taskId,
        percent: prog.percent,
        speed: prog.speed,
        eta: '',
        size: prog.size
      });
    };

    let publishedPath = null;
    if (probe.supported && probe.size > 512 * 1024) {
      logHost(`Starting 10-thread Range download for ${outPath} (${probe.size} bytes)`);
      publishedPath = await downloadFileMultiThread({
        url: probe.url || targetUrl,
        outPath,
        headers: probe.headers || reqHeaders,
        totalSize: probe.size,
        concurrency: 10,
        onProgress,
        signal
      });
    } else {
      logHost(`Server Range not supported or small file. Starting single-stream download for ${outPath}`);
      publishedPath = await downloadFileSingleStream({
        url: probe.url || targetUrl,
        outPath,
        headers: probe.headers || reqHeaders,
        onProgress,
        signal
      });
    }

    if (activeMultiThreadJobs.get(taskKey) === mtJobObj) activeMultiThreadJobs.delete(taskKey);
    if (activeMultiThreadJob === mtJobObj) activeMultiThreadJob = null;
    logHost(`Multi-thread download completed successfully: "${publishedPath || outPath}"`);
    if (typeof onComplete === 'function') {
      onComplete(probe, publishedPath);
      return;
    }
    const finalOut = publishedPath || outPath;
    sendMessage({
      action: 'progress',
      taskId: req.taskId,
      percent: '100%',
      speed: 'Completed',
      eta: '',
      size: formatBytes(probe.size || 0)
    });
    sendMessage({
      action: 'complete',
      taskId: req.taskId,
      percent: '100%',
      outputFile: path.basename(finalOut),
      outputPath: finalOut,
      downloadsDir: path.dirname(finalOut)
    });
  } catch (err) {
    if (activeMultiThreadJobs.get(taskKey) === mtJobObj) activeMultiThreadJobs.delete(taskKey);
    if (activeMultiThreadJob === mtJobObj) activeMultiThreadJob = null;
    if (err && err.message === 'USER_CANCELED') {
      logHost(`Multi-thread download canceled by user: "${outPath}"`);
      cleanupPartialFiles(outPath);
      /* Never unlink outPath on cancel to preserve user files */
      sendMessage({ action: 'cancelled', taskId: req.taskId });
      return;
    }
    logHost(`Multi-thread download error: ${err.message}. Triggering fallback.`);
    cleanupPartialFiles(outPath);
    if (typeof onFallback === 'function') {
      onFallback(err);
    } else {
      sendMessage({ action: 'error', taskId: req.taskId, error: err.message });
    }
  }
}

function cleanFbCdnUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return rawUrl;
  try {
    const u = new URL(rawUrl);
    const known = /(^|\.)(fbcdn\.net|cdninstagram\.com|googlevideo\.com)$/.test(u.hostname);
    if (!known || [...u.searchParams.keys()].some(k => /^(signature|sig|policy|x-amz-signature|hdnts)$/i.test(k))) return rawUrl;
    if (!['bytestart', 'byteend', 'range', 'rn', 'rbuf'].some(key => u.searchParams.has(key))) return rawUrl;
    // These CDN playback range controls are not the identity of a media file.
    for (const key of ['bytestart', 'byteend', 'range', 'rn', 'rbuf']) u.searchParams.delete(key);
    return u.toString();
  } catch (_) { return rawUrl; }
}

function fallbackToDirectFfmpegMux(req, videoUrl, audioUrl, outPath, finalFilename, targetDir, headers) {
  const taskKey = String((req && req.taskId) || 'default');
  const netInputFlags = [
    '-reconnect', '1',
    '-reconnect_at_eof', '1',
    '-reconnect_streamed', '1',
    '-reconnect_delay_max', '5',
    '-multiple_requests', '1',
    '-rw_timeout', '15000000'
  ];

  const allowFileProto = !videoUrl.startsWith('http') && (!audioUrl || !audioUrl.startsWith('http'));
  const args = [
    '-y',
    '-threads', FFMPEG_THREAD_LIMIT,
    '-fflags', '+genpts+igndts+discardcorrupt+sortdts',
    '-protocol_whitelist', allowFileProto ? 'file,http,https,tcp,tls,crypto' : 'http,https,tcp,tls,crypto'
  ];
  if (videoUrl.startsWith('http')) {
    args.push(...netInputFlags, '-headers', headers);
  }
  args.push('-i', videoUrl);

  if (audioUrl && audioUrl !== videoUrl) {
    if (audioUrl.startsWith('http')) {
      args.push(...netInputFlags, '-headers', headers);
    }
    const isOpusOrWebm = audioUrl.includes('mime=audio%2Fwebm') ||
                         audioUrl.includes('opus') ||
                         audioUrl.includes('itag=249') ||
                         audioUrl.includes('itag=250') ||
                         audioUrl.includes('itag=251') ||
                         (req && (req.audioCodec === 'opus' || req.audioCodec === 'webm'));
    if (outPath.endsWith('.mp4')) {
      const isDefiniteAac = audioUrl.includes('mime=audio%2Fmp4') || audioUrl.includes('itag=140') || (req && req.audioCodec === 'aac');
      if (isOpusOrWebm || !isDefiniteAac) {
        args.push(
          '-i', audioUrl,
          '-c:v', 'copy',
          '-c:a', 'aac',
          '-b:a', '192k',
          '-strict', '-2'
        );
      } else {
        args.push(
          '-i', audioUrl,
          '-c', 'copy',
          '-strict', '-2'
        );
      }
    } else {
      args.push(
        '-i', audioUrl,
        '-c', 'copy',
        '-strict', '-2'
      );
    }
  } else {
    args.push('-c', 'copy');
  }

  args.push(
    '-avoid_negative_ts', 'make_zero',
    '-max_muxing_queue_size', '1024',
    '-movflags', '+faststart',
    // .part output hides the extension ffmpeg uses to pick its muxer — state it.
    '-f', 'mp4',
    '-progress', 'pipe:1',
    partPathFor(outPath)
  );

  const proc = spawn(FFMPEG_PATH, args, { windowsHide: true });
  activeProcesses.set(taskKey, proc);
  activeProcess = proc;
  setBackgroundPriority(proc);

  const totalSizeEstimated = req.size || req.totalSize || 0;
  let totalDuration = parseFloat(req.duration) || 0;
  let lastSpeedTime = Date.now();
  let lastSpeedBytes = 0;
  let computedSpeed = '';

  let errOutput = '';
  proc.stderr.on('data', (data) => {
    const chunk = data.toString('utf8');
    errOutput += chunk;
    if (!totalDuration) {
      const durMatch = errOutput.match(/Duration:\s*(\d+):(\d+):([0-9.]+)/);
      if (durMatch) {
        totalDuration = parseInt(durMatch[1], 10) * 3600 + parseInt(durMatch[2], 10) * 60 + parseFloat(durMatch[3]);
        logHost(`Parsed video totalDuration from FFmpeg: ${totalDuration}s`);
      }
    }
  });

  proc.stdout.on('data', (data) => {
    const text = data.toString('utf8');
    const lines = text.split(/\r?\n/);
    let speed = '';
    let totalBytes = 0;
    let currentSec = 0;

    for (const line of lines) {
      if (line.startsWith('speed=')) {
        speed = line.replace('speed=', '').trim();
      } else if (line.startsWith('total_size=')) {
        totalBytes = parseInt(line.replace('total_size=', '').trim(), 10) || 0;
      } else if (line.startsWith('out_time=')) {
        const otMatch = line.match(/out_time=(\d+):(\d+):([0-9.]+)/);
        if (otMatch) {
          currentSec = parseInt(otMatch[1], 10) * 3600 + parseInt(otMatch[2], 10) * 60 + parseFloat(otMatch[3]);
        }
      }
    }

    if (totalBytes > 0 || currentSec > 0) {
      const now = Date.now();
      const dt = (now - lastSpeedTime) / 1000;
      if (dt >= 0.5 && totalBytes > lastSpeedBytes) {
        const bytesDiff = totalBytes - lastSpeedBytes;
        const speedMBps = bytesDiff / dt / (1024 * 1024);
        computedSpeed = speedMBps >= 1 ? `${speedMBps.toFixed(2)} MB/s` : `${(speedMBps * 1024).toFixed(0)} KB/s`;
        lastSpeedTime = now;
        lastSpeedBytes = totalBytes;
      }

      let percent = '';
      if (totalSizeEstimated > 0 && totalBytes > 0) {
        const pct = Math.min(99, Math.max(1, Math.round((totalBytes / totalSizeEstimated) * 100)));
        percent = `${pct}%`;
      } else if (totalDuration > 0 && currentSec > 0) {
        const pct = Math.min(99, Math.max(1, Math.round((currentSec / totalDuration) * 100)));
        percent = `${pct}%`;
      }
      sendMessage({
        action: 'progress',
        taskId: req.taskId,
        percent: percent || '',
        speed: computedSpeed || (percent ? '' : 'Muxing streams (FFmpeg)...'),
        eta: '',
        size: formatBytes(totalBytes)
      });
    }
  });

  proc.on('close', (code) => {
    if (activeProcesses.get(taskKey) === proc) activeProcesses.delete(taskKey);
    if (activeProcess === proc) activeProcess = null;
    if (proc && proc.isKilledByHost) {
      cleanupPartialFiles(outPath);
      notifySuperseded(req.taskId);
      return;
    }
    let publishedPath;
    if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 1000 && (publishedPath = finalizePartFile(outPath))) {
      const publishedName = path.basename(publishedPath);
      sendMessage({
        action: 'progress',
        taskId: req.taskId,
        percent: '100%',
        speed: 'Completed',
        eta: '',
        size: ''
      });
      sendMessage({
        action: 'complete',
        taskId: req.taskId,
        outputFile: publishedName,
        outputPath: publishedPath,
        downloadsDir: targetDir
      });
    } else {
      const errLines = errOutput.split('\n').filter(l => l.trim() && !l.startsWith('ffmpeg version') && !l.startsWith('  built with') && !l.startsWith('  configuration:'));
      const shortErr = errLines.slice(-3).join(' ').trim() || `FFmpeg code ${code}`;
      sendMessage({
        action: 'error',
        taskId: req.taskId,
        error: shortErr
      });
    }
  });

  proc.on('error', (err) => {
    if (activeProcesses.get(taskKey) === proc) activeProcesses.delete(taskKey);
    if (activeProcess === proc) activeProcess = null;
    sendMessage({ action: 'error', taskId: req.taskId, error: err.message });
  });
}

function isSameOriginOrSubdomain(baseHost, targetHost) {
  if (!baseHost || !targetHost) return false;
  try {
    if (baseHost.includes('://')) baseHost = new URL(baseHost).hostname;
    if (targetHost.includes('://')) targetHost = new URL(targetHost).hostname;
  } catch (_) {}
  return String(baseHost).toLowerCase() === String(targetHost).toLowerCase();
}

function redirectHeaders(headers, source, destination) {
  const next = { ...headers };
  if (!isSameOriginOrSubdomain(source, destination)) {
    for (const name of Object.keys(next)) {
      if (/^(cookie|authorization|proxy-authorization)$/i.test(name)) delete next[name];
    }
  }
  return next;
}

async function startFfmpegMux(req) {
  const taskKey = String((req && req.taskId) || 'default');
  const prevProc = activeProcesses.get(taskKey);
  if (prevProc) {
    prevProc.isKilledByHost = true;
    try { prevProc.kill(); } catch (e) {}
    activeProcesses.delete(taskKey);
  }
  const prevMt = activeMultiThreadJobs.get(taskKey);
  if (prevMt) {
    try { prevMt.cancel(); } catch (e) {}
    activeMultiThreadJobs.delete(taskKey);
  }

  let videoUrl = cleanFbCdnUrl(req.videoUrl || req.url);
  let audioUrl = cleanFbCdnUrl(req.audioUrl);

  const targetDir = resolveTargetDir(req.outputDir);
  const rawTitle = (req.filename || req.title || 'video').replace(/\.[a-z0-9]{2,5}$/i, '');
  const finalFilename = sanitizeFilename(`${rawTitle}.mp4`, 'mp4');
  const outPath = path.join(targetDir, finalFilename);

  let referer = sanitizeHeaderValue(resolveDefaultReferer(videoUrl, req.referer, req.pageUrl));
  let origin = '';
  if (referer) {
    try { origin = sanitizeHeaderValue(new URL(referer).origin); } catch (e) {}
  }

  let allowCookie = false;
  const refOrPage = req.referer || req.pageUrl || '';
  if (req.cookie && refOrPage) {
    try {
      const baseHost = new URL(refOrPage).hostname;
      const vHost = videoUrl ? new URL(videoUrl).hostname : '';
      const aHost = audioUrl ? new URL(audioUrl).hostname : '';
      const vMatch = isSameOriginOrSubdomain(baseHost, vHost);
      const aMatch = !audioUrl || isSameOriginOrSubdomain(baseHost, aHost);
      if (vMatch && aMatch) {
        allowCookie = true;
      } else {
        logHost('[SECURITY] Blocked cross-origin cookie forward: base="' + baseHost + '", video="' + vHost + '", audio="' + aHost + '"');
      }
    } catch (_) {}
  }

  const cleanMuxCookie = allowCookie && req.cookie ? sanitizeHeaderValue(req.cookie) : '';

  const rawHeadersStr = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36\r\n' +
    (referer ? `Referer: ${referer}\r\n` : '') +
    (origin ? `Origin: ${origin}\r\n` : '') +
    (cleanMuxCookie ? `Cookie: ${cleanMuxCookie}\r\n` : '') +
    'Accept: */*\r\n';

  const reqHeadersObj = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept': '*/*'
  };
  if (referer) reqHeadersObj['Referer'] = referer;
  if (origin) reqHeadersObj['Origin'] = origin;
  if (cleanMuxCookie) reqHeadersObj['Cookie'] = cleanMuxCookie;

  const tempSessionDir = path.join(os.tmpdir(), `savior_mux_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`);
  try {
    fs.mkdirSync(tempSessionDir, { recursive: true });
  } catch (e) {
    return fallbackToDirectFfmpegMux(req, videoUrl, audioUrl, outPath, finalFilename, targetDir, rawHeadersStr);
  }

  const tempVideoPath = path.join(tempSessionDir, 'video.mp4');
  const tempAudioPath = path.join(tempSessionDir, 'audio.mp4');

  const abortCallbacks = new Set();
  const signal = {
    set onAbort(fn) {
      if (typeof fn === 'function') abortCallbacks.add(fn);
    },
    get onAbort() {
      return () => {
        for (const cb of abortCallbacks) {
          try { cb(); } catch (e) {}
        }
      };
    }
  };
  const mtJobObj = {
    cancel: () => {
      for (const cb of abortCallbacks) {
        try { cb(); } catch (e) {}
      }
      abortCallbacks.clear();
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
    }
  };
  activeMultiThreadJobs.set(taskKey, mtJobObj);
  activeMultiThreadJob = mtJobObj;

  sendMessage({
    action: 'progress',
    taskId: req.taskId,
    percent: '1%',
    speed: 'Connecting multi-thread (Video + Audio)...',
    eta: '',
    size: ''
  });

  try {
    const [probeVideo, probeAudio] = await Promise.all([
      probeHttpRange(videoUrl, reqHeadersObj),
      (audioUrl && audioUrl !== videoUrl) ? probeHttpRange(audioUrl, reqHeadersObj) : Promise.resolve({ supported: false, size: 0, url: '' })
    ]);

    logHost(`Mux Range probe: Video size=${probeVideo.size}, Audio size=${probeAudio.size}`);

    let videoDownloaded = 0;
    let audioDownloaded = 0;
    const totalVideo = probeVideo.size || 0;
    const totalAudio = probeAudio.size || 0;
    const totalCombined = totalVideo + totalAudio;

    let lastProgressTime = Date.now();
    let lastProgressBytes = 0;

    const onProgressCombined = () => {
      const currentDownloaded = videoDownloaded + audioDownloaded;
      const now = Date.now();
      const dt = (now - lastProgressTime) / 1000;
      let speedStr = '';
      if (dt >= 0.25) {
        const speed = (currentDownloaded - lastProgressBytes) / dt;
        speedStr = formatSpeed(speed);
        lastProgressTime = now;
        lastProgressBytes = currentDownloaded;
      }
      const pct = totalCombined > 0 ? `${Math.min(98, Math.floor((currentDownloaded / totalCombined) * 100))}%` : '';
      sendMessage({
        action: 'progress',
        taskId: req.taskId,
        percent: pct,
        speed: speedStr || (pct ? '' : 'Downloading multi-thread...'),
        eta: '',
        size: totalCombined > 0 ? `${formatBytes(currentDownloaded)} / ${formatBytes(totalCombined)}` : formatBytes(currentDownloaded)
      });
    };

    const videoHeaders = probeVideo.headers || reqHeadersObj;
    const audioHeaders = probeAudio.headers || reqHeadersObj;

    const downloadVideo = async () => {
      if (probeVideo.supported && probeVideo.size > 512 * 1024) {
        await downloadFileMultiThread({
          url: probeVideo.url || videoUrl,
          outPath: tempVideoPath,
          headers: videoHeaders,
          totalSize: probeVideo.size,
          concurrency: 10,
          onProgress: (p) => {
            videoDownloaded = p.downloadedBytes;
            onProgressCombined();
          },
          signal
        });
      } else {
        await downloadFileSingleStream({
          url: probeVideo.url || videoUrl,
          outPath: tempVideoPath,
          headers: videoHeaders,
          onProgress: (p) => {
            videoDownloaded = p.downloadedBytes || 0;
            onProgressCombined();
          },
          signal
        });
      }
    };

    const downloadAudio = async () => {
      if (!audioUrl || audioUrl === videoUrl) return;
      if (probeAudio.supported && probeAudio.size > 512 * 1024) {
        await downloadFileMultiThread({
          url: probeAudio.url || audioUrl,
          outPath: tempAudioPath,
          headers: audioHeaders,
          totalSize: probeAudio.size,
          concurrency: 4,
          onProgress: (p) => {
            audioDownloaded = p.downloadedBytes;
            onProgressCombined();
          },
          signal
        });
      } else {
        await downloadFileSingleStream({
          url: probeAudio.url || audioUrl,
          outPath: tempAudioPath,
          headers: audioHeaders,
          onProgress: (p) => {
            audioDownloaded = p.downloadedBytes || 0;
            onProgressCombined();
          },
          signal
        });
      }
    };

    // Execute Video and Audio downloads in parallel for maximum speed
    await Promise.all([downloadVideo(), downloadAudio()]);

    if (activeMultiThreadJobs.get(taskKey) === mtJobObj) activeMultiThreadJobs.delete(taskKey);
    if (activeMultiThreadJob === mtJobObj) activeMultiThreadJob = null;

    sendMessage({
      action: 'progress',
      taskId: req.taskId,
      percent: '99%',
      speed: 'Muxing streams locally...',
      eta: '',
      size: formatBytes(totalCombined || (fs.statSync(tempVideoPath).size + (fs.existsSync(tempAudioPath) ? fs.statSync(tempAudioPath).size : 0)))
    });

    const muxArgs = [
      '-y',
      '-threads', FFMPEG_THREAD_LIMIT,
      '-fflags', '+genpts+igndts+discardcorrupt+sortdts',
      '-i', tempVideoPath
    ];

    if (fs.existsSync(tempAudioPath) && fs.statSync(tempAudioPath).size > 100) {
      const isOpusOrWebm = audioUrl.includes('mime=audio%2Fwebm') ||
                           audioUrl.includes('opus') ||
                           audioUrl.includes('itag=249') ||
                           audioUrl.includes('itag=250') ||
                           audioUrl.includes('itag=251') ||
                           (req && (req.audioCodec === 'opus' || req.audioCodec === 'webm'));
      if (outPath.endsWith('.mp4')) {
        const isDefiniteAac = audioUrl.includes('mime=audio%2Fmp4') || audioUrl.includes('itag=140') || (req && req.audioCodec === 'aac');
        if (isOpusOrWebm || !isDefiniteAac) {
          Array.prototype.push.apply(muxArgs, ['-i', tempAudioPath, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-strict', '-2']);
        } else {
          Array.prototype.push.apply(muxArgs, ['-i', tempAudioPath, '-c', 'copy', '-strict', '-2']);
        }
      } else {
        Array.prototype.push.apply(muxArgs, ['-i', tempAudioPath, '-c', 'copy', '-strict', '-2']);
      }
    } else {
      Array.prototype.push.apply(muxArgs, ['-c', 'copy']);
    }

    muxArgs.push(
      '-avoid_negative_ts', 'make_zero',
      '-movflags', '+faststart',
      '-f', 'mp4',
      partPathFor(outPath)
    );

    const proc = spawn(FFMPEG_PATH, muxArgs, { windowsHide: true });
    activeProcesses.set(taskKey, proc);
    activeProcess = proc;
    setBackgroundPriority(proc);

    let muxErr = '';
    proc.stderr.on('data', (d) => { muxErr += d.toString('utf8'); });

    proc.on('close', (code) => {
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      if (activeProcesses.get(taskKey) === proc) activeProcesses.delete(taskKey);
      if (activeProcess === proc) activeProcess = null;
      if (proc && proc.isKilledByHost) {
        logHost(`FFmpeg mux killed by host/cancel.`);
        cleanupPartialFiles(outPath);
        notifySuperseded(req.taskId);
        return;
      }

      let publishedPath;
      if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 1000 && (publishedPath = finalizePartFile(outPath))) {
        const publishedName = path.basename(publishedPath);
        sendMessage({
          action: 'progress',
          taskId: req.taskId,
          percent: '100%',
          speed: 'Completed',
          eta: '',
          size: formatBytes(fs.statSync(publishedPath).size)
        });
        sendMessage({
          action: 'complete',
          taskId: req.taskId,
          outputFile: publishedName,
          outputPath: publishedPath,
          downloadsDir: targetDir
        });
      } else {
        const shortErr = muxErr.split('\n').filter(l => l.trim() && !l.startsWith('ffmpeg version')).slice(-2).join(' ') || `FFmpeg code ${code}`;
        sendMessage({
          action: 'error',
          taskId: req.taskId,
          error: `Video/audio muxing error: ${shortErr}`
        });
      }
    });

    proc.on('error', (err) => {
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      if (activeProcesses.get(taskKey) === proc) activeProcesses.delete(taskKey);
      if (activeProcess === proc) activeProcess = null;
      sendMessage({ action: 'error', taskId: req.taskId, error: err.message });
    });

  } catch (err) {
    if (activeMultiThreadJobs.get(taskKey) === mtJobObj) activeMultiThreadJobs.delete(taskKey);
    if (activeMultiThreadJob === mtJobObj) activeMultiThreadJob = null;
    try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
    if (err && err.message === 'USER_CANCELED') {
      logHost(`Mux Range download canceled by user.`);
      sendMessage({ action: 'cancelled', taskId: req.taskId });
      return;
    }
    logHost(`Mux Range download failed: ${err.message}. Retrying via direct FFmpeg stream.`);
    fallbackToDirectFfmpegMux(req, videoUrl, audioUrl, outPath, finalFilename, targetDir, rawHeadersStr);
  }
}


function fetchHttpResource(urlStr, referer = '', isBin = false, cookie = '', maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) {
      return reject(new Error('Too many redirects'));
    }
    let parsedInit;
    try {
      parsedInit = new URL(urlStr);
    } catch (_) {
      return reject(new Error('Invalid URL'));
    }
    if (parsedInit.protocol !== 'http:' && parsedInit.protocol !== 'https:') {
      return reject(new Error('Blocked unsafe URL protocol'));
    }
    if (require.main === module && !isSafeRemoteHlsUrl(urlStr)) {
      return reject(new Error(`Blocked unsafe remote URL: ${urlStr}`));
    }
    const initWasPublic = isSafeRemoteHlsUrl(urlStr);
    const client = parsedInit.protocol === 'https:' ? https : http;
    const reqHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept': '*/*'
    };
    if (referer) {
      reqHeaders['Referer'] = sanitizeHeaderValue(referer);
      try {
        reqHeaders['Origin'] = sanitizeHeaderValue(new URL(referer).origin);
      } catch (_) {}
    }
    if (cookie) {
      reqHeaders['Cookie'] = sanitizeHeaderValue(cookie);
    }

    const req = client.get(urlStr, { headers: reqHeaders, timeout: 15000 }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redir = new URL(res.headers.location, urlStr).href;
        res.resume();
        let redirParsed;
        try { redirParsed = new URL(redir); } catch (_) { return reject(new Error('Invalid redirect URL')); }
        if ((redirParsed.protocol !== 'http:' && redirParsed.protocol !== 'https:') || (initWasPublic && !isSafeRemoteHlsUrl(redir))) {
          return reject(new Error(`Blocked unsafe redirect URL: ${redir}`));
        }
        const sameOrigin = isSameOriginOrSubdomain(urlStr, redir);
        const nextCookie = sameOrigin ? cookie : '';
        return fetchHttpResource(redir, referer, isBin, nextCookie, maxRedirects - 1).then(resolve).catch(reject);
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${urlStr}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        resolve(isBin ? buf : buf.toString('utf8'));
      });
    });

    req.on('timeout', () => {
      req.destroy(new Error(`Request timed out after 15s for ${urlStr}`));
    });
    req.on('error', reject);
  });
}

async function rewriteHlsPlaylistLines(playlistText, baseUrl, tempSessionDir, referer, safeCookie, state = { keyCount: 0 }) {
  let duration = 0;
  const extInfMatches = playlistText.match(/#EXTINF:([0-9.]+)/g) || [];
  for (const m of extInfMatches) {
    const d = parseFloat(m.replace('#EXTINF:', ''));
    if (!isNaN(d)) duration += d;
  }

  const pLines = playlistText.split(/\r?\n/);
  const sanitizedLines = [];
  const hasEncryptionKey = playlistText.includes('#EXT-X-KEY');

  for (let i = 0; i < pLines.length; i++) {
    let line = pLines[i];
    if (line.startsWith('#EXT-X-KEY')) {
      const uriMatch = line.match(/URI=["']([^"']+)["']/i);
      if (uriMatch) {
        const rawKeyUri = uriMatch[1];
        if (rawKeyUri.startsWith('data:')) {
          try {
            const commaIdx = rawKeyUri.indexOf(',');
            const base64Data = commaIdx !== -1 ? rawKeyUri.slice(commaIdx + 1).trim() : '';
            let keyBytes = Buffer.from(base64Data, 'base64');
            if (keyBytes.length > 16) {
              keyBytes = keyBytes.slice(0, 16);
            }
            const keyFilename = `key_${++state.keyCount}.key`;
            const localKeyPath = path.join(tempSessionDir, keyFilename);
            fs.writeFileSync(localKeyPath, keyBytes);
            line = line.replace(rawKeyUri, keyFilename);
          } catch (b64Err) {
            logHost(`Failed to decode inline data key: ${b64Err.message}`);
          }
        } else {
          let absKeyUrl = rawKeyUri;
          try { if (baseUrl) absKeyUrl = new URL(rawKeyUri, baseUrl).href; } catch (_) {}
          if (!isSafeRemoteHlsUrl(absKeyUrl)) {
            logHost(`Blocked unsafe HLS key URL: ${absKeyUrl}`);
            continue;
          }
          try {
            logHost(`Fetching AES-128 key: ${absKeyUrl}`);
            const keyCookie = baseUrl && isSameOriginOrSubdomain(baseUrl, absKeyUrl) ? safeCookie : '';
            const keyBytes = await fetchHttpResource(absKeyUrl, referer, true, keyCookie);
            const keyFilename = `key_${++state.keyCount}.key`;
            const localKeyPath = path.join(tempSessionDir, keyFilename);
            fs.writeFileSync(localKeyPath, keyBytes);
            line = line.replace(rawKeyUri, keyFilename);
          } catch (kErr) {
            logHost(`Failed to fetch key: ${kErr.message}`);
            continue;
          }
        }
      }
      sanitizedLines.push(line);
    } else if (line.startsWith('#EXT-X-MAP')) {
      const uriMatch = line.match(/URI=["']([^"']+)["']/i);
      if (uriMatch) {
        const rawMapUri = uriMatch[1];
        let absMapUrl = rawMapUri;
        try { if (baseUrl) absMapUrl = new URL(rawMapUri, baseUrl).href; } catch (_) {}
        if (!isSafeRemoteHlsUrl(absMapUrl)) {
          logHost(`Blocked unsafe HLS map URL: ${absMapUrl}`);
          continue;
        }
        if (hasEncryptionKey) {
          try {
            logHost(`Fetching fMP4 initialization segment: ${absMapUrl}`);
            const mapCookie = baseUrl && isSameOriginOrSubdomain(baseUrl, absMapUrl) ? safeCookie : '';
            const mapBytes = await fetchHttpResource(absMapUrl, referer, true, mapCookie);
            const mapFilename = `init_${Date.now()}_${++state.keyCount}.mp4`;
            const localMapPath = path.join(tempSessionDir, mapFilename);
            fs.writeFileSync(localMapPath, mapBytes);
            line = line.replace(rawMapUri, mapFilename);
          } catch (mErr) {
            logHost(`Failed to fetch init segment locally, using absolute URL: ${mErr.message}`);
            line = line.replace(rawMapUri, absMapUrl);
          }
        } else {
          line = line.replace(rawMapUri, absMapUrl);
        }
      }
      sanitizedLines.push(line);
    } else if (line.startsWith('#EXT-X-MEDIA')) {
      const uriMatch = line.match(/URI=["']([^"']+)["']/i);
      if (uriMatch) {
        const rawMediaUri = uriMatch[1];
        let absMediaUrl = rawMediaUri;
        try { if (baseUrl) absMediaUrl = new URL(rawMediaUri, baseUrl).href; } catch (_) {}
        if (!isSafeRemoteHlsUrl(absMediaUrl)) {
          logHost(`Blocked unsafe HLS media URI: ${absMediaUrl}`);
          continue;
        }
        line = line.replace(rawMediaUri, absMediaUrl);
      }
      sanitizedLines.push(line);
    } else if (line.trim().length > 0 && !line.startsWith('#')) {
      let rawSegUrl = line.trim();
      try { if (baseUrl) rawSegUrl = new URL(rawSegUrl, baseUrl).href; } catch (_) {}
      if (!isSafeRemoteHlsUrl(rawSegUrl)) {
        logHost(`Blocked unsafe HLS segment URL: ${rawSegUrl}`);
        continue;
      }
      sanitizedLines.push(rawSegUrl);
    } else {
      sanitizedLines.push(line);
    }
  }

  return {
    text: sanitizedLines.join('\n'),
    duration,
    hasEncryptionKey
  };
}

function isSafeDashManifest(mpdText, baseUrl) {
  if (!mpdText || typeof mpdText !== 'string') return false;
  // Block any file://, data:, php:, ftp:, etc. schemes inside MPD
  if (/\b(?:file|data|ftp|gopher|dict|concat|subfile):/i.test(mpdText)) return false;
  const checkCandidate = (raw) => {
    const trimmed = String(raw || '').trim();
    if (!trimmed) return true;
    // Template placeholders like $RepresentationID$ are relative paths, not schemes
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
      return isSafeRemoteHlsUrl(trimmed);
    }
    if (baseUrl && /^https?:\/\//i.test(baseUrl)) {
      try {
        return isSafeRemoteHlsUrl(new URL(trimmed.replace(/\$[^$]+\$/g, '0'), baseUrl).href);
      } catch (_) {
        return false;
      }
    }
    return !trimmed.startsWith('/');
  };
  const baseUrlMatches = mpdText.matchAll(/<BaseURL[^>]*>([^<]+)<\/BaseURL>/gi);
  for (const m of baseUrlMatches) {
    if (!checkCandidate(m[1])) return false;
  }
  const attrMatches = mpdText.matchAll(/\b(?:media|initialization|sourceURL)=["']([^"']+)["']/gi);
  for (const m of attrMatches) {
    if (!checkCandidate(m[1])) return false;
  }
  return true;
}

async function handleInMemoryPlaylist(req, manifest) {
  const safeId = sanitizeTaskId(req.taskId) || String(Date.now());
  const tempSessionDir = path.join(os.tmpdir(), 'savior_stream_' + safeId + '_' + Date.now());
  if (!isPathInsideDir(tempSessionDir, os.tmpdir())) {
    sendMessage({ action: 'error', taskId: req.taskId, error: 'Invalid taskId path' });
    return;
  }
  fs.mkdirSync(tempSessionDir, { recursive: true });

  const candidateBases = [req.pageUrl, req.referer, req.url, req.videoUrl].filter(Boolean);
  const nonDummyBase = candidateBases.find(u => !String(u).includes('google.com')) || candidateBases[0] || '';
  const baseUrl = nonDummyBase;

  const referer = sanitizeHeaderValue(resolveDefaultReferer(baseUrl, req.referer, req.pageUrl));
  const safeCookie = req.cookie ? sanitizeHeaderValue(req.cookie) : '';

  const isDashManifest = /^<\?xml/i.test(manifest) || /<MPD[\s>]/i.test(manifest) || req.ext === 'mpd' || Boolean(req._isDashMPD) || Boolean(req._isDash);

  if (isDashManifest && !manifest.includes('#EXTM3U')) {
    if (!isSafeDashManifest(manifest, baseUrl)) {
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (_) {}
      logHost(`[SECURITY] Blocked unsafe DASH MPD manifest for task ${req.taskId}`);
      sendMessage({ action: 'error', taskId: req.taskId, error: 'Blocked unsafe DASH manifest URL' });
      return;
    }
    let mpdContent = manifest;
    if (!/<BaseURL>/i.test(mpdContent) && baseUrl && /^https?:\/\//i.test(baseUrl)) {
      let resolvedBase = baseUrl;
      try { resolvedBase = new URL('./', baseUrl).href; } catch (_) {}
      const escapedBase = resolvedBase.replace(/&/g, '&amp;');
      mpdContent = mpdContent.replace(/(<MPD[^>]*>)/i, `$1\n  <BaseURL>${escapedBase}</BaseURL>`);
    }
    const localMpdPath = path.join(tempSessionDir, 'manifest.mpd');
    fs.writeFileSync(localMpdPath, mpdContent, 'utf8');
    req._ffmpegInput = localMpdPath;
    req._tempSessionDir = tempSessionDir;
    req._isDash = true;
    req._isDashMPD = true;
    req._fromInMemoryPlaylist = true;
    return startFfmpegDirectStream(req);
  }

  const rewritten = await rewriteHlsPlaylistLines(manifest, baseUrl, tempSessionDir, referer, safeCookie, { keyCount: 0 });
  const localM3u8Path = path.join(tempSessionDir, 'playlist.m3u8');
  fs.writeFileSync(localM3u8Path, rewritten.text, 'utf8');

  req._ffmpegInput = localM3u8Path;
  req._tempSessionDir = tempSessionDir;
  req._isHls = true;
  req._totalPlaylistDuration = rewritten.duration;
  req._fromInMemoryPlaylist = true;
  if (manifest.includes('#EXT-X-MEDIA') && /TYPE=AUDIO/i.test(manifest)) {
    req._hasSeparateHlsAudio = true;
  }
  return startFfmpegDirectStream(req);
}

async function startFfmpegDirectStream(req) {
  const taskKey = String((req && req.taskId) || 'default');
  const prevProc = activeProcesses.get(taskKey);
  if (prevProc) {
    prevProc.isKilledByHost = true;
    try { prevProc.kill(); } catch (e) {}
    activeProcesses.delete(taskKey);
  }
  const prevMt = activeMultiThreadJobs.get(taskKey);
  if (prevMt && typeof prevMt.cancel === 'function') {
    try { prevMt.cancel(); } catch (e) {}
    activeMultiThreadJobs.delete(taskKey);
  }
  // Prefer a direct media/CDN URL over a watch-page URL: TikTok flows can
  // deliver videoUrl = the tiktok.com/@user/video/... PAGE while url holds the
  // actual signed stream. Opening the page in FFmpeg is always an I/O error.
  const looksLikeWatchPage = (u) => {
    try {
      const url = new URL(u);
      const h = url.hostname.toLowerCase();
      const p = url.pathname.toLowerCase();
      if (!(h.includes('tiktok.com') || h.includes('douyin.com'))) return false;
      if (/\/(video|photo|reel|embed)\//.test(p)) return true;          // @user/video/... page
      if (/\.(mp4|m3u8|mpd|webm|mov|mp3|bin)(\?|$)/i.test(p)) return false; // direct media file
      return false;                                                       // signed CDN path (no ext) — treat as stream
    } catch (e) {
      return false;
    }
  };
  let targetUrl;
  {
    const candidates = [req.videoUrl, req.url].filter(Boolean);
    const direct = candidates.find(u => !looksLikeWatchPage(u));
    targetUrl = cleanFbCdnUrl(direct || candidates[0] || '');
  }
  if (!targetUrl && !req._ffmpegInput) {
    sendMessage({ action: 'error', taskId: req.taskId, error: 'Download URL not found' });
    return;
  }

  const isAudio = req.quality === 'audio' || req.soundOnly;
  const ext = isAudio ? 'mp3' : 'mp4';
  const targetDir = resolveTargetDir(req.outputDir);
  const rawTitle = (req.filename || req.title || 'video').replace(/\.[a-z0-9]{2,5}$/i, '');
  const finalFilename = sanitizeFilename(`${rawTitle}.${ext}`, ext);
  const outPath = path.join(targetDir, finalFilename);

  const effectiveRefTarget = (req._ffmpegInput && targetUrl.includes('google.com'))
    ? (req.pageUrl || req.referer || targetUrl)
    : targetUrl;
  let referer = sanitizeHeaderValue(resolveDefaultReferer(effectiveRefTarget, req.referer, req.pageUrl));

  let origin = '';
  if (referer) {
    try { origin = sanitizeHeaderValue(new URL(referer).origin); } catch (e) {}
  }

  let safeOrigin = '';
  if (origin) {
    safeOrigin = sanitizeHeaderValue(origin);
  }
  let safeCookie = '';
  if (req.cookie) {
    const cookieBase = req.referer || req.pageUrl || '';
    if (!targetUrl || !cookieBase || isSameOriginOrSubdomain(cookieBase, targetUrl)) {
      safeCookie = sanitizeHeaderValue(req.cookie);
    } else {
      logHost(`[SECURITY] Blocked cross-origin cookie forward in direct stream: base="${cookieBase}", target="${targetUrl}"`);
    }
  }

  const headers = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36\r\n' +
    (referer ? `Referer: ${referer}\r\n` : '') +
    (safeOrigin ? `Origin: ${safeOrigin}\r\n` : '') +
    (safeCookie ? `Cookie: ${safeCookie}\r\n` : '') +
    'Accept: */*\r\n';

  sendMessage({
    action: 'progress',
    taskId: req.taskId,
    percent: '1%',
    speed: 'Preparing video stream (FFmpeg)...',
    eta: '',
    size: ''
  });

  let ffmpegInput = req._ffmpegInput || targetUrl;
  let tempSessionDir = req._tempSessionDir || null;
  let totalPlaylistDuration = req._totalPlaylistDuration || 0;
  let hasSeparateHlsAudio = Boolean(req._hasSeparateHlsAudio);

  const isDash = targetUrl.toLowerCase().includes('.mpd') ||
    targetUrl.includes('format=mpd') ||
    targetUrl.includes('/dash/') ||
    req.ext === 'mpd' ||
    Boolean(req._isDashMPD) ||
    Boolean(req._isDash);

  const isHls = Boolean(req._isHls) ||
    (!isDash && (
      targetUrl.toLowerCase().includes('.m3u8') ||
      targetUrl.includes('/hls/') ||
      targetUrl.includes('format=m3u8') ||
      targetUrl.includes('type=m3u8') ||
      targetUrl.includes('playlist')
    ));

  if (isHls && !req._ffmpegInput && targetUrl.startsWith('http')) {
    try {
      const safeHlsId = sanitizeTaskId(req.taskId) || String(Date.now());
      tempSessionDir = path.join(os.tmpdir(), `savior_stream_${safeHlsId}_${Date.now()}`);
      fs.mkdirSync(tempSessionDir, { recursive: true });

      logHost(`Fetching HLS playlist: ${targetUrl}`);
      let playlistText = await fetchHttpResource(targetUrl, referer, false, safeCookie);

      // Verify that the response is actually an HLS playlist (#EXTM3U)
      if (!playlistText || !playlistText.includes('#EXTM3U')) {
        logHost(`Invalid playlist response: Does not contain #EXTM3U`);
        sendMessage({ action: 'error', taskId: req.taskId, error: 'Server returned an invalid stream (not an HLS playlist format).' });
        return;
      }

      const keyState = { keyCount: 0 };

      // Handle Master Playlist
      if (playlistText.includes('#EXT-X-STREAM-INF')) {
        const hasSeparateAudio = playlistText.includes('#EXT-X-MEDIA') && /TYPE=AUDIO/i.test(playlistText);
        const lines = playlistText.split(/\r?\n/);
        let bestUri = null;
        let bestStreamInfLine = '#EXT-X-STREAM-INF:BANDWIDTH=1000000';
        let maxBw = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('#EXT-X-STREAM-INF')) {
            const bwMatch = lines[i].match(/BANDWIDTH=(\d+)/);
            const bw = bwMatch ? parseInt(bwMatch[1], 10) : 0;
            for (let j = i + 1; j < lines.length; j++) {
              const nextLine = lines[j].trim();
              if (nextLine && !nextLine.startsWith('#')) {
                if (bw >= maxBw || !bestUri) {
                  maxBw = bw;
                  bestUri = nextLine;
                  bestStreamInfLine = lines[i];
                }
                break;
              }
            }
          }
        }

        if (hasSeparateAudio) {
          hasSeparateHlsAudio = true;
          let resolvedVideoUrl = null;
          let videoPlaylistText = '';
          if (bestUri) {
            const candVideoUrl = new URL(bestUri, targetUrl).href;
            if (isSafeRemoteHlsUrl(candVideoUrl)) {
              resolvedVideoUrl = candVideoUrl;
              try {
                videoPlaylistText = await fetchHttpResource(resolvedVideoUrl, referer, false, safeCookie);
              } catch (_) {}
            }
          }

          const hasEncryptedVariant = playlistText.includes('#EXT-X-KEY') || videoPlaylistText.includes('#EXT-X-KEY');
          if (!hasEncryptedVariant) {
            // Preserve master playlist URL so FFmpeg demuxes both video and #EXT-X-MEDIA:TYPE=AUDIO
            const extInfMatches = videoPlaylistText.match(/#EXTINF:([0-9.]+)/g) || [];
            for (const m of extInfMatches) {
              const d = parseFloat(m.replace('#EXTINF:', ''));
              if (!isNaN(d)) totalPlaylistDuration += d;
            }
            ffmpegInput = targetUrl;
          } else {
            // Rewrite encrypted video & audio variant playlists locally and link via local master playlist
            const masterLines = ['#EXTM3U'];
            let audioIdx = 0;
            for (const mLine of lines) {
              if (mLine.startsWith('#EXT-X-VERSION') || mLine.startsWith('#EXT-X-INDEPENDENT-SEGMENTS')) {
                masterLines.push(mLine);
              } else if (mLine.startsWith('#EXT-X-MEDIA') && /TYPE=AUDIO/i.test(mLine)) {
                let updatedMediaLine = mLine;
                const uMatch = mLine.match(/URI=["']([^"']+)["']/i);
                if (uMatch) {
                  const rawAudioUri = uMatch[1];
                  const absAudioUrl = new URL(rawAudioUri, targetUrl).href;
                  if (isSafeRemoteHlsUrl(absAudioUrl)) {
                    try {
                      const audioPlText = await fetchHttpResource(absAudioUrl, referer, false, safeCookie);
                      if (audioPlText && audioPlText.includes('#EXTM3U')) {
                        const rewrittenAudio = await rewriteHlsPlaylistLines(audioPlText, absAudioUrl, tempSessionDir, referer, safeCookie, keyState);
                        const localAudioName = `variant_audio_${++audioIdx}.m3u8`;
                        fs.writeFileSync(path.join(tempSessionDir, localAudioName), rewrittenAudio.text, 'utf8');
                        updatedMediaLine = mLine.replace(rawAudioUri, localAudioName);
                      } else {
                        updatedMediaLine = mLine.replace(rawAudioUri, absAudioUrl);
                      }
                    } catch (_) {
                      updatedMediaLine = mLine.replace(rawAudioUri, absAudioUrl);
                    }
                  }
                }
                masterLines.push(updatedMediaLine);
              }
            }

            if (resolvedVideoUrl && videoPlaylistText && videoPlaylistText.includes('#EXTM3U')) {
              const rewrittenVideo = await rewriteHlsPlaylistLines(videoPlaylistText, resolvedVideoUrl, tempSessionDir, referer, safeCookie, keyState);
              totalPlaylistDuration = rewrittenVideo.duration;
              const localVideoName = 'variant_video.m3u8';
              fs.writeFileSync(path.join(tempSessionDir, localVideoName), rewrittenVideo.text, 'utf8');
              masterLines.push(bestStreamInfLine);
              masterLines.push(localVideoName);
            } else if (resolvedVideoUrl) {
              masterLines.push(bestStreamInfLine);
              masterLines.push(resolvedVideoUrl);
            }

            const localMasterPath = path.join(tempSessionDir, 'playlist.m3u8');
            fs.writeFileSync(localMasterPath, masterLines.join('\n'), 'utf8');
            ffmpegInput = localMasterPath;
          }
        } else {
          if (bestUri) {
            const resolvedMediaUrl = new URL(bestUri, targetUrl).href;
            if (isSafeRemoteHlsUrl(resolvedMediaUrl)) {
              targetUrl = resolvedMediaUrl;
              playlistText = await fetchHttpResource(resolvedMediaUrl, referer, false, safeCookie);
            } else {
              logHost(`Blocked unsafe master HLS sub-playlist URL: ${resolvedMediaUrl}`);
            }
          }

          const rewritten = await rewriteHlsPlaylistLines(playlistText, targetUrl, tempSessionDir, referer, safeCookie, keyState);
          totalPlaylistDuration = rewritten.duration;

          if (rewritten.hasEncryptionKey) {
            const localM3u8Path = path.join(tempSessionDir, 'playlist.m3u8');
            fs.writeFileSync(localM3u8Path, rewritten.text, 'utf8');
            ffmpegInput = localM3u8Path;
          } else {
            ffmpegInput = targetUrl;
          }
        }
      } else {
        // Media playlist (not a master playlist)
        const rewritten = await rewriteHlsPlaylistLines(playlistText, targetUrl, tempSessionDir, referer, safeCookie, keyState);
        totalPlaylistDuration = rewritten.duration;

        if (rewritten.hasEncryptionKey) {
          const localM3u8Path = path.join(tempSessionDir, 'playlist.m3u8');
          fs.writeFileSync(localM3u8Path, rewritten.text, 'utf8');
          ffmpegInput = localM3u8Path;
        } else {
          // Direct remote stream: let FFmpeg fetch the playlist directly over HTTP
          // with full -headers (including Referer/User-Agent) and -reconnect flags!
          ffmpegInput = targetUrl;
        }
      }
    } catch (prepErr) {
      logHost(`HLS prep error: ${prepErr.message}`);
      ffmpegInput = targetUrl;
    }
  }

  const args = [
    '-y',
    '-threads', FFMPEG_THREAD_LIMIT,
    '-fflags', '+genpts+igndts+discardcorrupt+sortdts'
  ];

  if (isHls || (typeof ffmpegInput === 'string' && ffmpegInput.toLowerCase().includes('.m3u8'))) {
    args.push(
      '-allowed_extensions', 'ALL',
      '-allowed_segment_extensions', 'ALL',
      '-extension_picky', '0'
    );
  }

  const isLocalTempInput = Boolean(tempSessionDir && typeof ffmpegInput === 'string' && isPathInsideDir(ffmpegInput, tempSessionDir));
  args.push('-protocol_whitelist', isLocalTempInput ? 'file,http,https,tcp,tls,crypto' : 'http,https,tcp,tls,crypto');
  args.push(
    '-reconnect', '1',
    '-reconnect_at_eof', '1',
    '-reconnect_streamed', '1',
    '-reconnect_delay_max', '5',
    '-multiple_requests', '1',
    '-rw_timeout', '15000000',
    '-headers', headers,
    '-i', ffmpegInput
  );

  if (isDash) {
    if (isAudio) {
      args.push('-map', '0:a:0?', '-vn', '-c:a', 'libmp3lame', '-q:a', '2');
    } else {
      args.push(
        '-map', '0:v:0?',
        '-map', '0:a:0?',
        '-c', 'copy',
        '-avoid_negative_ts', 'make_zero',
        '-max_muxing_queue_size', '1024',
        '-movflags', '+faststart'
      );
    }
  } else if (isAudio) {
    args.push('-vn', '-c:a', 'libmp3lame', '-q:a', '2');
  } else {
    if (hasSeparateHlsAudio) {
      args.push('-map', '0:v:0?', '-map', '0:a:0?');
    }
    args.push(
      '-c', 'copy',
      '-avoid_negative_ts', 'make_zero',
      '-max_muxing_queue_size', '1024',
      '-movflags', '+faststart'
    );
  }

  args.push('-f', isAudio ? 'mp3' : 'mp4', '-progress', 'pipe:1', partPathFor(outPath));

  function attachDirectFfmpegHandlers(proc) {
    activeProcesses.set(taskKey, proc);
    activeProcess = proc;
    setBackgroundPriority(proc);
    let errOutput = '';
    proc.stderr.on('data', (data) => {
      const chunk = data.toString('utf8');
      errOutput += chunk;
      if (!totalPlaylistDuration) {
        const durMatch = errOutput.match(/Duration:\s*(\d+):(\d+):([0-9.]+)/);
        if (durMatch) {
          totalPlaylistDuration = parseInt(durMatch[1], 10) * 3600 + parseInt(durMatch[2], 10) * 60 + parseFloat(durMatch[3]);
          logHost(`Parsed direct stream totalDuration: ${totalPlaylistDuration}s`);
        }
      }
    });

    let lastSent = 0;
    let lastSpeedTime = Date.now();
    let lastSpeedBytes = 0;
    let computedSpeed = '';

    proc.stdout.on('data', (data) => {
      const text = data.toString('utf8');
      const lines = text.split(/\r?\n/);
      let speed = '';
      let totalBytes = 0;
      let currentSec = 0;
      for (const line of lines) {
        if (line.startsWith('speed=')) {
          speed = line.replace('speed=', '').trim();
        } else if (line.startsWith('total_size=')) {
          totalBytes = parseInt(line.replace('total_size=', '').trim(), 10) || 0;
        } else if (line.startsWith('out_time=')) {
          const otMatch = line.match(/out_time=(\d+):(\d+):([0-9.]+)/);
          if (otMatch) {
            currentSec = parseInt(otMatch[1], 10) * 3600 + parseInt(otMatch[2], 10) * 60 + parseFloat(otMatch[3]);
          }
        }
      }

      if (totalBytes > 0 || currentSec > 0) {
        const now = Date.now();
        const dt = (now - lastSpeedTime) / 1000;
        if (dt >= 0.5 && totalBytes > lastSpeedBytes) {
          const bytesDiff = totalBytes - lastSpeedBytes;
          const speedMBps = bytesDiff / dt / (1024 * 1024);
          computedSpeed = speedMBps >= 1 ? `${speedMBps.toFixed(2)} MB/s` : `${(speedMBps * 1024).toFixed(0)} KB/s`;
          lastSpeedTime = now;
          lastSpeedBytes = totalBytes;
        }

        if (now - lastSent > 150) {
          lastSent = now;
          let pctStr = '';
          if (totalPlaylistDuration > 0 && currentSec > 0) {
            const pct = Math.min(99, Math.max(1, Math.round((currentSec / totalPlaylistDuration) * 100)));
            pctStr = `${pct}%`;
          } else {
            pctStr = '';
          }

          sendMessage({
            action: 'progress',
            taskId: req.taskId,
            percent: pctStr,
            speed: computedSpeed || speed || '',
            eta: '',
            size: formatBytes(totalBytes)
          });
        }
      }
    });

    proc.on('close', (code) => {
      if (activeProcesses.get(taskKey) === proc) activeProcesses.delete(taskKey);
      if (activeProcess === proc) activeProcess = null;
      if (proc && proc.isKilledByHost) {
        cleanupPartialFiles(outPath);
        if (tempSessionDir && fs.existsSync(tempSessionDir)) {
          try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
        }
        notifySuperseded(req.taskId);
        return;
      }
      if (tempSessionDir && fs.existsSync(tempSessionDir)) {
        try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      }

      let publishedPath;
      if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 1000 && (publishedPath = finalizePartFile(outPath))) {
        const publishedName = path.basename(publishedPath);
        sendMessage({
          action: 'progress',
          taskId: req.taskId,
          percent: '100%',
          speed: 'Completed',
          eta: '',
          size: ''
        });
        sendMessage({
          action: 'complete',
          taskId: req.taskId,
          outputFile: publishedName,
          outputPath: publishedPath,
          downloadsDir: targetDir
        });
      } else {
        cleanupPartialFiles(outPath);
        /* Never delete existing file on mux error */
        const is403 = /403|Forbidden|Access Denied/i.test(errOutput);
        const errLines = errOutput.split('\n').filter(l => l.trim() && !l.startsWith('ffmpeg version') && !l.startsWith('  built with') && !l.startsWith('  configuration:'));
        const shortErr = is403
          ? 'Stream token expired or access denied (HTTP 403). Please reload the page to get a new stream.'
          : `Stream download error: ${(errLines.slice(-3).join(' ').trim() || `FFmpeg code ${code}`).slice(0, 150)}`;
        sendMessage({
          action: 'error',
          taskId: req.taskId,
          error: shortErr
        });
      }
    });

    proc.on('error', (err) => {
      if (activeProcesses.get(taskKey) === proc) activeProcesses.delete(taskKey);
      if (activeProcess === proc) activeProcess = null;
      if (tempSessionDir && fs.existsSync(tempSessionDir)) {
        try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      }
      sendMessage({ action: 'error', taskId: req.taskId, error: err.message });
    });
  }

  // For non-HLS and non-DASH direct media streams, try multi-thread download first
  if (!isHls && !isDash && !req._ffmpegInput && targetUrl.startsWith('http')) {
    if (isAudio) {
      // Audio extraction: download source media stream via multi-thread Range first, then convert locally with FFmpeg
      const tempMediaFile = path.join(os.tmpdir(), `savior_audio_src_${Date.now()}_${Math.random().toString(36).substr(2, 6)}.tmp`);
      startMultiThreadDownload(req, targetUrl, tempMediaFile, referer, origin, (err) => {
        // Fallback to direct FFmpeg network streaming if Range fails
        const proc = spawn(FFMPEG_PATH, args, {
          cwd: tempSessionDir || process.cwd(),
          windowsHide: true
        });
        attachDirectFfmpegHandlers(proc);
      }, () => {
        // Source stream downloaded locally! Now convert to MP3 via local FFmpeg in < 1 second
        sendMessage({
          action: 'progress',
          taskId: req.taskId,
          percent: '99%',
          speed: 'Converting to MP3...',
          eta: '',
          size: ''
        });
        const convertArgs = [
          '-y',
          '-threads', FFMPEG_THREAD_LIMIT,
          '-i', tempMediaFile,
          '-vn',
          '-acodec', 'libmp3lame',
          '-q:a', '2',
          '-f', 'mp3',
          partPathFor(outPath)
        ];
        const cProc = spawn(FFMPEG_PATH, convertArgs, { windowsHide: true });
        activeProcesses.set(taskKey, cProc);
        activeProcess = cProc;
        setBackgroundPriority(cProc);
        let cErr = '';
        cProc.stderr.on('data', (d) => { cErr += d.toString('utf8'); });
        cProc.on('close', (code) => {
          try { fs.rmSync(tempMediaFile, { force: true }); } catch (e) {}
          if (activeProcesses.get(taskKey) === cProc) activeProcesses.delete(taskKey);
          if (activeProcess === cProc) activeProcess = null;
          if (cProc && cProc.isKilledByHost) {
            cleanupPartialFiles(outPath);
            notifySuperseded(req.taskId);
            return;
          }
          let publishedPath;
          if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 100 && (publishedPath = finalizePartFile(outPath))) {
            const publishedName = path.basename(publishedPath);
            sendMessage({ action: 'progress', taskId: req.taskId, percent: '100%', speed: 'Completed', eta: '', size: formatBytes(fs.statSync(publishedPath).size) });
            sendMessage({ action: 'complete', taskId: req.taskId, outputFile: publishedName, outputPath: publishedPath, downloadsDir: targetDir });
          } else {
            cleanupPartialFiles(outPath);
            sendMessage({ action: 'error', taskId: req.taskId, error: `MP3 conversion error (code ${code})` });
          }
        });
        cProc.on('error', (err) => {
          try { fs.rmSync(tempMediaFile, { force: true }); } catch (e) {}
          if (activeProcesses.get(taskKey) === cProc) activeProcesses.delete(taskKey);
          if (activeProcess === cProc) activeProcess = null;
          sendMessage({ action: 'error', taskId: req.taskId, error: err.message });
        });
      });
      return;
    }

    startMultiThreadDownload(req, targetUrl, outPath, referer, origin, (err) => {
      // Retrying a signed CDN URL through FFmpeg cannot recover 401/403/404
      // responses; it only turns a clear server error into a misleading FFmpeg one.
      if (err && /HTTP\s+(401|403|404)\b/i.test(String(err.message || err))) {
        sendMessage({
          action: 'error',
          taskId: req.taskId,
          error: `${err.message}. Download link may have expired; please reopen the video to get a new stream.`
        });
        return;
      }
      const proc = spawn(FFMPEG_PATH, args, {
        cwd: tempSessionDir || process.cwd(),
        windowsHide: true
      });
      attachDirectFfmpegHandlers(proc);
    });
    return;
  }

  const proc = spawn(FFMPEG_PATH, args, {
    cwd: tempSessionDir || process.cwd(),
    windowsHide: true
  });
  attachDirectFfmpegHandlers(proc);
}

function detectPlatformName(line, targetUrl = '') {
  if (line.includes('youtube') || targetUrl.includes('youtube') || targetUrl.includes('youtu.be')) return 'YouTube';
  if (line.includes('tiktok') || targetUrl.includes('tiktok')) return 'TikTok';
  if (line.includes('facebook') || targetUrl.includes('facebook') || targetUrl.includes('fb.watch')) return 'Facebook';
  if (line.includes('instagram') || targetUrl.includes('instagram')) return 'Instagram';
  return 'server';
}

function checkIsYouTube(u) {
  if (!u || typeof u !== 'string') return false;
  return u.includes('youtube.com') || u.includes('youtu.be') || u.includes('googlevideo.com');
}

function extractYouTubeUrl(candidates) {
  if (!Array.isArray(candidates)) return null;
  for (const c of candidates) {
    if (c && typeof c === 'string') {
      const vMatch = c.match(/(?:[?&]v=|\/shorts\/|\/embed\/|\/live\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (vMatch && vMatch[1]) {
        return `https://www.youtube.com/watch?v=${vMatch[1]}`;
      }
    }
  }
  return null;
}

function checkIsTikTok(u) {
  if (!u || typeof u !== 'string') return false;
  return (
    u.includes('tiktok.com') ||
    u.includes('tiktokcdn.com') ||
    u.includes('tiktokcdn-us.com') ||
    u.includes('tiktokcdn-eu.com') ||
    u.includes('tiktokv.com') ||
    u.includes('byteoversea.com') ||
    u.includes('ibytedtos.com') ||
    u.includes('bytevd.com')
  );
}

function resolveDefaultReferer(targetUrl = '', reqReferer = '', pageUrl = '') {
  const u = String(targetUrl || '').toLowerCase();
  const p = String(pageUrl || '').toLowerCase();
  const r = String(reqReferer || '').toLowerCase();

  // 1. Explicit platform check on source page or provided referer first
  if (p.includes('instagram.com') || r.includes('instagram.com')) {
    return 'https://www.instagram.com/';
  }
  if (p.includes('threads.com') || r.includes('threads.com')) return 'https://www.threads.com/';
  if (p.includes('threads.net') || r.includes('threads.net')) {
    return 'https://www.threads.net/';
  }
  if (p.includes('tiktok.com') || r.includes('tiktok.com')) {
    return 'https://www.tiktok.com/';
  }
  if (p.includes('douyin.com') || r.includes('douyin.com')) {
    return 'https://www.douyin.com/';
  }
  if (p.includes('x.com') || p.includes('twitter.com') || r.includes('x.com') || r.includes('twitter.com')) {
    return 'https://x.com/';
  }
  if (p.includes('youtube.com') || r.includes('youtube.com')) {
    return 'https://www.youtube.com/';
  }
  if (p.includes('facebook.com') || r.includes('facebook.com')) {
    return 'https://www.facebook.com/';
  }

  // 2. Strict CDN Target URL matching
  if (u.includes('twimg.com') || u.includes('twitter.com') || u.includes('x.com')) {
    return 'https://x.com/';
  }
  if (
    u.includes('tiktok.com') ||
    u.includes('tiktokcdn.com') ||
    u.includes('tiktokcdn-us.com') ||
    u.includes('tiktokcdn-eu.com') ||
    u.includes('tiktokv.com') ||
    u.includes('byteoversea.com') ||
    u.includes('ibytedtos.com') ||
    u.includes('bytevd.com')
  ) {
    return 'https://www.tiktok.com/';
  }
  if (u.includes('instagram.com') || u.includes('cdninstagram.com')) {
    return 'https://www.instagram.com/';
  }
  if (u.includes('threads.net')) {
    return 'https://www.threads.net/';
  }
  if (u.includes('facebook.com') || u.includes('fbcdn.net') || u.includes('fb.watch')) {
    return 'https://www.facebook.com/';
  }
  if (u.includes('googlevideo.com') || u.includes('youtube.com') || u.includes('youtu.be')) {
    return 'https://www.youtube.com/';
  }
  if (u.includes('bilivideo.com') || u.includes('bilibili.com')) {
    return 'https://www.bilibili.com/';
  }
  if (u.includes('douyin.com') || u.includes('douyinvod.com') || u.includes('zjcdn.com') || u.includes('iesdouyin.com')) {
    return 'https://www.douyin.com/';
  }
  if (u.includes('v.redd.it') || u.includes('reddit.com')) {
    return 'https://www.reddit.com/';
  }
  if (u.includes('twitch.tv') || u.includes('twitchcdn.net') || u.includes('ttvnw.net')) {
    return 'https://www.twitch.tv/';
  }
  if (u.includes('vimeocdn.com') || u.includes('vimeo.com')) {
    return 'https://vimeo.com/';
  }
  if (u.includes('dailymotion.com') || u.includes('dmcdn.net')) {
    return 'https://www.dailymotion.com/';
  }
  if (u.includes('pinimg.com') || u.includes('pinterest.com')) {
    return 'https://www.pinterest.com/';
  }
  if (u.includes('zadn.vn') || u.includes('zingmp3.vn')) {
    return 'https://zingmp3.vn/';
  }
  if (u.includes('nhaccuatui.com')) {
    return 'https://www.nhaccuatui.com/';
  }
  if (u.includes('sndcdn.com') || u.includes('soundcloud.com')) {
    return 'https://soundcloud.com/';
  }

  // If a specific reqReferer was provided and not forbidden by target CDN rules, use it
  if (reqReferer && typeof reqReferer === 'string' && reqReferer.trim()) {
    return reqReferer.trim();
  }

  if (pageUrl && /^https?:\/\//i.test(pageUrl)) {
    try {
      const parsed = new URL(pageUrl);
      return `${parsed.origin}/`;
    } catch (_) {}
  }
  if (targetUrl && /^https?:\/\//i.test(targetUrl)) {
    try {
      const parsed = new URL(targetUrl);
      return `${parsed.origin}/`;
    } catch (_) {}
  }
  return '';
}

function findBestFileMatch(query, files) {
  if (!query || !Array.isArray(files) || !files.length) return null;
  let decodedQuery = query;
  try {
    decodedQuery = decodeURIComponent(query);
  } catch (_) {}
  const rawQ = path.basename(decodedQuery).trim();
  const exact = files.find(f => f === rawQ);
  if (exact) return exact;

  const normalizePreserveAccents = (s) => String(s || '')
    .replace(/\.[a-zA-Z0-9]+$/, '')
    .replace(/[<>:"/\\|?*@#%&()_+\-=[\]{}]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  const normalize = (s) => String(s || '')
    .replace(/\.[a-zA-Z0-9]+$/, '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[<>:"/\\|?*@#%&()_+\-=[\]{}]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  const qAccents = normalizePreserveAccents(rawQ);
  const qBase = normalize(rawQ);

  const matchAccents = files.find(f => {
    if (f.endsWith('.part') || f.endsWith('.tmp') || f.endsWith('.crdownload')) return false;
    return normalizePreserveAccents(f) === qAccents;
  });
  if (matchAccents) return matchAccents;

  const matchBase = files.find(f => {
    if (f.endsWith('.part') || f.endsWith('.tmp') || f.endsWith('.crdownload')) return false;
    return normalize(f) === qBase;
  });
  if (matchBase) return matchBase;

  const matchSub = files.find(f => {
    if (f.endsWith('.part') || f.endsWith('.tmp') || f.endsWith('.crdownload')) return false;
    const fNorm = normalize(f);
    return (qBase.length >= 4 && fNorm.startsWith(qBase)) ||
           (fNorm.length >= 4 && qBase.startsWith(fNorm)) ||
           (qBase.length >= 5 && fNorm.includes(qBase));
  });
  if (matchSub) return matchSub;

  return null;
}

function checkIsFacebook(u) {
  if (!u || typeof u !== 'string') return false;
  return u.includes('facebook.com') || u.includes('fb.watch') || u.includes('fbcdn.net');
}

function parseProgressLine(line, targetUrl = '') {
  if (line.includes('UVD_PROG::')) {
    const raw = line.split('UVD_PROG::')[1] || '';
    const parts = raw.split('::');
    const rawPct = (parts[0] || '').trim();
    const rawSpd = (parts[1] || '').trim();
    const rawEta = (parts[2] || '').trim();
    const rawSize = (parts[3] || '').trim();
    return {
      percent: rawPct.includes('NA') ? '' : rawPct,
      speed: rawSpd.includes('NA') ? '' : rawSpd,
      eta: rawEta.includes('NA') ? '' : rawEta,
      size: rawSize.includes('NA') ? '' : rawSize
    };
  }

  const dlMatch = line.match(/\[download\]\s+([\d\.]+)%\s+of\s+~?\s*([^\s]+)(?:\s+in\s+([^\s]+))?(?:\s+at\s+([^\s]+))?(?:\s+ETA\s+([^\s]+))?/i);
  if (dlMatch) {
    let speed = dlMatch[4] || '';
    const fragMatch = line.match(/\(frag\s+(\d+\/\d+)\)/);
    if (fragMatch) {
      speed = speed ? `${speed} (${fragMatch[1]})` : `frag ${fragMatch[1]}`;
    }
    return {
      percent: dlMatch[1] + '%',
      size: dlMatch[2] || '',
      speed: speed,
      eta: dlMatch[5] || ''
    };
  }

  if (line.includes('Extracting URL') || line.includes('Downloading webpage') || line.includes('Downloading JSON metadata')) {
    const pName = detectPlatformName(line, targetUrl);
    return { percent: '0%', speed: `Connecting to ${pName}...` };
  }
  if (line.includes('player API JSON') || line.includes('initial data API') || line.includes('Downloading m3u8 information') || line.includes('Downloading video webpage')) {
    return { percent: '0%', speed: 'Preparing video stream...' };
  }
  if (line.includes('Downloading 1 format') || line.includes('Destination:') || line.includes('[hlsnative]')) {
    return { percent: '1%', speed: 'Starting stream download...' };
  }
  if (line.includes('[Merger] Merging formats') || line.includes('Merging formats into')) {
    return { percent: '99%', speed: 'Muxing video and audio (FFmpeg)...' };
  }
  if (line.includes('[ExtractAudio] Destination:') || line.includes('ExtractAudio')) {
    return { percent: '99%', speed: 'Exporting MP3 audio file...' };
  }

  return null;
}

async function startImageDownload(req) {
  const targetDir = resolveTargetDir(req.outputDir);
  const tempPath = path.join(targetDir, `.savior-image-${Date.now()}-${Math.random().toString(36).slice(2)}.tmp`);
  let downloaded;
  try {
    downloaded = await startImageTransfer(req, tempPath);
    const head = Buffer.alloc(32);
    const fd = fs.openSync(downloaded, 'r');
    try { fs.readSync(fd, head, 0, 32, 0); } finally { fs.closeSync(fd); }
    const ext = head[0] === 255 && head[1] === 216 && head[2] === 255 ? 'jpg' :
      head.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) ? 'png' :
      /^GIF8[79]a/.test(head.toString('ascii', 0, 6)) ? 'gif' :
      head.toString('ascii', 0, 4) === 'RIFF' && head.toString('ascii', 8, 12) === 'WEBP' ? 'webp' :
      head.toString('ascii', 0, 2) === 'BM' ? 'bmp' :
      head.toString('ascii', 4, 8) === 'ftyp' && /avif|avis/.test(head.toString('ascii', 8, 32)) ? 'avif' : null;
    if (!ext) throw new Error('IMAGE_CONTENT_MISMATCH');
    const title = (req.filename || req.title || 'image').replace(/\.[a-z0-9]{2,5}$/i, '');
    const job = createJobFileContext({ outputDir: targetDir, filename: sanitizeFilename(title + '.' + ext, ext) });
    fs.renameSync(downloaded, job.partPath);
    const outputPath = publishJobFile(job);
    sendMessage({ action: 'complete', taskId: req.taskId, outputFile: path.basename(outputPath), outputPath, downloadsDir: targetDir });
  } catch (err) {
    if (downloaded) { try { fs.unlinkSync(downloaded); } catch (_) {} }
    cleanupPartialFiles(tempPath);
    sendMessage({ action: 'error', taskId: req.taskId, error: err.message });
  }
}
function startImageTransfer(req, outPath) {
  return new Promise((resolve, reject) => {
    startMultiThreadDownload(req, req.url || req.videoUrl, outPath,
      resolveDefaultReferer(req.url || req.videoUrl, req.referer, req.pageUrl), '', reject,
      (_probe, published) => resolve(published || outPath));
  });
}

function startDownload(req) {
  if (req.mediaType === 'image' || [req.url, req.videoUrl, req.filename].some(value => /\.(jpe?g|png|gif|webp|avif|bmp)(?:[?#]|$)/i.test(String(value || '')))) return startImageDownload(req);

  logHost(`startDownload: ${JSON.stringify({ url: req.url, videoUrl: req.videoUrl, audioUrl: req.audioUrl, title: req.title, quality: req.quality, hasPlayList: Boolean(req.play_list || req.playList) })}`);

  const manifestContent = req.play_list || req.playList || null;
  if (manifestContent && typeof manifestContent === 'string' && manifestContent.trim()) {
    logHost(`In-memory playlist detected for task ${req.taskId}`);
    return handleInMemoryPlaylist(req, manifestContent.trim());
  }

  // Direct CDN URLs for TikTok must never be overwritten with pageUrl watch pages:
  // (targetUrl.includes('tiktokcdn.com') || targetUrl.includes('video/tos/'))
  // Direct media URLs are preserved intact for FFmpeg and Range streaming.

  // Fast Path 1: Separate DASH video and audio streams via accelerated FFmpeg mux
  if (req.videoUrl && req.audioUrl && req.videoUrl !== req.audioUrl) {
    logHost('Routing to startFfmpegMux (separate video + audio streams)');
    return startFfmpegMux(req);
  }

  // Note: yt-dlp is intentionally bypassed so that private, member-only, and token-authenticated
  // videos can be downloaded using the browser session cookies and headers captured by Savior.
  // All streams route through Savior's accelerated multi-thread Range downloader and local FFmpeg!

  // Direct progressive file, HLS stream, DASH manifest, or audio conversion
  return startFfmpegDirectStream(req);
}

if (typeof module !== 'undefined') {
  module.exports = {
    detectPlatformName,
    checkIsYouTube,
    checkIsTikTok,
    checkIsFacebook,
    extractYouTubeUrl,
    parseProgressLine,
    resolveDefaultReferer,
    findBestFileMatch,
    calculateChunks,
    isSameOriginOrSubdomain,
    isExecutableFile,
    isAllowedMediaFile,
    sanitizeForLog,
    sanitizeHeaderValue,
    isSafeRemoteHlsUrl,
    isSafeDashManifest,
    resolveTargetDir,
    registerAuthorizedDir,
    openPathWithSystem,
    downloadFileMultiThread,
    downloadFileSingleStream,
    cleanFbCdnUrl,
    fetchHttpResource,
    rewriteHlsPlaylistLines,
    handleInMemoryPlaylist,
    startFfmpegDirectStream,
    startFfmpegMux,
    startMultiThreadDownload,
    startStreamRelayJob,
    handleStreamChunk,
    finishStreamJob,
    cleanupStreamJob,
    activeStreamJobs,
    activeProcesses,
    activeMultiThreadJobs,
    handleMessage,
    setMessageHook,
    startDownload,
    DISCONNECT_GRACE_MS,
    httpKeepAliveAgent,
    httpsKeepAliveAgent
  };
}
