/**
 * Savior - Native Messaging Host for Google Chrome
 * Communicates with Chrome extension via stdin/stdout length-prefixed JSON.
 * Provides multi-threaded downloading and FFmpeg stream muxing/conversion.
 */

const { spawn, exec } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');
const https = require('https');

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

function resolveTargetDir(outputDir) {
  if (outputDir && typeof outputDir === 'string') {
    try {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      if (fs.existsSync(outputDir)) return outputDir;
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
function logHost(txt) {
  try {
    if (fs.existsSync(LOG_FILE) && fs.statSync(LOG_FILE).size > 300 * 1024) {
      fs.writeFileSync(LOG_FILE, `[${new Date().toISOString()}] [Log truncated]\n`);
    }
    fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${txt}\n`);
  } catch (e) {}
}

logHost(`Savior Host started PID=${process.pid}`);

// Redact credentials before anything reaches host_activity.log: session cookies
// and signed-URL tokens must never be persisted next to the host binary.
function sanitizeForLog(value) {
  try {
    let s = typeof value === 'string' ? value : JSON.stringify(value);
    if (!s) return s;
    s = s.replace(/"cookie"\s*:\s*"(?:[^"\\]|\\.)*"/gi, '"cookie":"<redacted>"');
    s = s.replace(/"set-cookie"\s*:\s*"(?:[^"\\]|\\.)*"/gi, '"set-cookie":"<redacted>"');
    s = s.replace(/((?:signature|sig|token|auth|key|exp|nonce|n|rand)=[A-Za-z0-9_%\-\.]{8,})/gi, '$1=<redacted>');
    return s;
  } catch (_) {
    return '<unloggable>';
  }
}

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
    if (activeProcess || activeMultiThreadJob) {
      logHost('Process or multi-thread job is still active, giving 5s grace period before termination');
      setTimeout(() => {
        try { if (activeStreamJob) cleanupStreamJob(true); } catch (e) {}
        try { if (activeMultiThreadJob) activeMultiThreadJob.cancel(); } catch (e) {}
        try { if (activeProcess) activeProcess.kill(); } catch (e) {}
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
  return /\.(exe|bat|cmd|msi|ps1|command|sh|dmg|pkg|app|jar|scpt|workflow)$/i.test(filePath.trim());
}

// TaskId of the most recent download job — used to notify the extension when a
// job is superseded (killed because a newer job arrived).
let activeTaskId = null;

function notifySuperseded() {
  try {
    sendMessage({ action: 'cancelled', taskId: activeTaskId, reason: 'superseded' });
  } catch (_) {}
}

// ==========================================
// Stream relay job (Chrome fetches, host writes) — see handleMessage cases.
// ==========================================
let activeStreamJob = null;

function startStreamRelayJob(msg) {
  if (activeStreamJob) {
    // A previous relay still holds the pipe: drop it cleanly first.
    try { cleanupStreamJob(true); } catch (e) {}
  }
  let safeTitle = (msg.title || 'video').replace(/[<>:"/\\|?*]/g, '_').replace(/[\s.]+$/, '').trim().slice(0, 150).replace(/[\s.]+$/, '');
  if (!safeTitle) safeTitle = `Video_${Date.now()}`;
  const finalFilename = msg.filename || `${safeTitle}.mp4`;
  const targetDir = resolveTargetDir(msg.outputDir);
  const outPath = path.join(targetDir, finalFilename);
  const part = partPathFor(outPath);
  try {
    const fd = fs.openSync(part, 'w');
    activeStreamJob = { taskId: msg.taskId, fd, outPath, partPath: part, bytesWritten: 0, total: 0 };
    if (msg.taskId) activeTaskId = msg.taskId;
    logHost(`Stream relay started (task ${msg.taskId}) → "${part}"`);
    sendMessage({ action: 'streamReady', taskId: msg.taskId, ok: true });
  } catch (e) {
    sendMessage({ action: 'error', taskId: msg.taskId, error: 'HOST_STREAM_OPEN: ' + e.message });
  }
}

function cleanupStreamJob(unlinkPart) {
  if (!activeStreamJob) return;
  try { if (activeStreamJob.fd !== null) fs.closeSync(activeStreamJob.fd); } catch (e) {}
  if (unlinkPart) {
    try { if (fs.existsSync(activeStreamJob.partPath)) fs.unlinkSync(activeStreamJob.partPath); } catch (e) {}
  }
  activeStreamJob = null;
}

function handleStreamChunk(msg) {
  if (!activeStreamJob || String(activeStreamJob.taskId) !== String(msg.taskId)) return;
  try {
    const buf = Buffer.from(msg.data || '', 'base64');
    // Multi-threaded relays send each batch at an explicit file offset so
    // parallel workers may land out of order; positional writes handle both.
    const off = Number(msg.offset);
    if (Number.isFinite(off) && off >= 0) {
      fs.writeSync(activeStreamJob.fd, buf, 0, buf.length, off);
    } else {
      fs.writeSync(activeStreamJob.fd, buf);
    }
    activeStreamJob.bytesWritten += buf.length;
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
      speed: 'Đang tải qua Chrome...',
      eta: '',
      size: activeStreamJob.total > 0
        ? `${formatBytes(activeStreamJob.bytesWritten)} / ${formatBytes(activeStreamJob.total)}`
        : formatBytes(activeStreamJob.bytesWritten)
    });
  } catch (e) {
    cleanupStreamJob(true);
    sendMessage({ action: 'error', taskId: msg.taskId, error: 'HOST_STREAM_WRITE: ' + e.message });
  }
}

function finishStreamJob(msg) {
  if (!activeStreamJob || String(activeStreamJob.taskId) !== String(msg.taskId)) return;
  const job = activeStreamJob;
  activeStreamJob = null;
  try {
    fs.closeSync(job.fd);
    job.fd = null;
    // Segmented transfers must be complete before promotion: a short worker
    // would otherwise finalize a file with zero-filled holes.
    if (job.total > 0) {
      const written = fs.statSync(job.partPath).size;
      if (written !== job.total) throw new Error(`size mismatch: wrote ${written} of ${job.total} bytes`);
    }
    if (!finalizePartFile(job.outPath)) throw new Error('rename failed');
    logHost(`Stream relay completed: "${job.outPath}" (${job.bytesWritten} bytes)`);
    sendMessage({ action: 'progress', taskId: msg.taskId, percent: '100%', speed: 'Hoàn thành', eta: '', size: formatBytes(job.bytesWritten) });
    sendMessage({ action: 'complete', taskId: msg.taskId, outputFile: path.basename(job.outPath), downloadsDir: path.dirname(job.outPath) });
  } catch (e) {
    try { if (job.fd !== null) fs.closeSync(job.fd); } catch (_) {}
    try { if (fs.existsSync(job.partPath)) fs.unlinkSync(job.partPath); } catch (_) {}
    sendMessage({ action: 'error', taskId: msg.taskId, error: 'HOST_STREAM_FINALIZE: ' + e.message });
  }
}

function handleMessage(msg) {
  logHost(`RECV: ${sanitizeForLog(msg)}`);
  if (!msg || !msg.action) {
    sendMessage({ status: 'error', error: 'Missing action' });
    return;
  }

  switch (msg.action) {
    case 'ping': {
      sendMessage({
        status: 'ok',
        action: 'pong',
        version: '2.4.65',
        downloadsDir: DOWNLOADS_DIR,
        hasFfmpeg: fs.existsSync(FFMPEG_PATH),
        hasYtDlp: fs.existsSync(YTDLP_PATH)
      });
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
    case 'streamDownload': {
      startStreamRelayJob(msg);
      break;
    }

    case 'streamChunk': {
      handleStreamChunk(msg);
      break;
    }

    case 'streamEnd': {
      finishStreamJob(msg);
      break;
    }

    case 'streamAbort': {
      logHost(`Stream relay aborted by extension (task ${msg.taskId}).`);
      cleanupStreamJob(true);
      sendMessage({ action: 'cancelled', taskId: msg.taskId });
      break;
    }

    case 'browseFolder': {
      if (isWin) {
        const psScript = `Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Chọn thư mục để lưu video tải về'; if ($f.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { Write-Output $f.SelectedPath }`;
        exec(`powershell -NoProfile -Command "${psScript}"`, (err, stdout) => {
          const selected = (stdout || '').trim();
          sendMessage({
            action: 'browseFolderResult',
            path: selected,
            canceled: !selected
          });
        });
      } else if (isMac) {
        const osaCmd = `osascript -e 'try' -e 'set folderPath to POSIX path of (choose folder with prompt "Chọn thư mục để lưu video tải về")' -e 'return folderPath' -e 'on error' -e 'return ""' -e 'end try'`;
        exec(osaCmd, (err, stdout) => {
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
      let folderPath = msg.path || msg.downloadDir || msg.outputDir || DOWNLOADS_DIR;
      try {
        if (folderPath && fs.existsSync(folderPath)) {
          if (fs.statSync(folderPath).isFile()) {
            folderPath = path.dirname(folderPath);
          }
        } else if (folderPath && !path.isAbsolute(folderPath)) {
          folderPath = DOWNLOADS_DIR;
        }
      } catch (_) {
        folderPath = DOWNLOADS_DIR;
      }
      const openCmd = isWin ? `explorer.exe "${folderPath}"` : (isMac ? `open "${folderPath}"` : `xdg-open "${folderPath}"`);
      exec(openCmd, (err) => {
        sendMessage({ action: 'openFolderResult', success: !err });
      });
      break;
    }

    case 'openFile': {
      let targetPath = msg.path || '';
      let filename = msg.filename || '';
      const taskId = msg.id || msg.taskId || null;
      const baseDir = msg.downloadDir || msg.outputDir || DOWNLOADS_DIR;
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

      // 2. Build search directories list
      const searchDirs = [];
      if (baseDir && !searchDirs.includes(baseDir)) searchDirs.push(baseDir);
      if (DOWNLOADS_DIR && !searchDirs.includes(DOWNLOADS_DIR)) searchDirs.push(DOWNLOADS_DIR);
      if (targetPath && path.isAbsolute(targetPath)) {
        const pDir = path.dirname(targetPath);
        if (fs.existsSync(pDir) && !searchDirs.includes(pDir)) searchDirs.push(pDir);
      }

      let resolvedFile = '';

      // Direct check: absolute path
      if (targetPath && path.isAbsolute(targetPath) && fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
        resolvedFile = targetPath;
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
                if (match) {
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

      if (resolvedFile && fs.existsSync(resolvedFile)) {
        if (isExecutableFile(resolvedFile)) {
          logHost(`openFile blocked executable launch: "${resolvedFile}"`);
          const fallbackDir = path.dirname(resolvedFile);
          if (isWin) {
            spawn('explorer.exe', [`/select,${resolvedFile}`], { windowsHide: true, detached: true });
          } else if (isMac) {
            spawn('open', ['-R', resolvedFile], { detached: true });
          } else {
            spawn('xdg-open', [fallbackDir], { detached: true });
          }
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
          break;
        }

        logHost(`openFile launching: "${resolvedFile}"`);
        if (isWin) {
          spawn('cmd.exe', ['/c', 'start', '""', resolvedFile], { windowsHide: true, detached: true });
        } else if (isMac) {
          spawn('open', [resolvedFile], { detached: true });
        } else {
          spawn('xdg-open', [resolvedFile], { detached: true });
        }
        sendMessage({ action: 'openFileResult', id: taskId, taskId, success: true, path: resolvedFile });
      } else {
        const fallbackDir = fs.existsSync(baseDir) ? baseDir : DOWNLOADS_DIR;
        logHost(`openFile fallback: opening folder "${fallbackDir}"`);
        if (isWin) {
          spawn('explorer.exe', [fallbackDir], { windowsHide: true, detached: true });
        } else if (isMac) {
          spawn('open', [fallbackDir], { detached: true });
        } else {
          spawn('xdg-open', [fallbackDir], { detached: true });
        }
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
      }
      break;
    }

    case 'showInFolder': {
      const baseDir = msg.downloadDir || msg.outputDir || DOWNLOADS_DIR;
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
        if (isWin) {
          spawn('explorer.exe', [`/select,${filePath}`], { windowsHide: true, detached: true });
        } else if (isMac) {
          spawn('open', ['-R', filePath], { detached: true });
        } else {
          spawn('xdg-open', [baseDir], { detached: true });
        }
      } else {
        const fallbackDir = fs.existsSync(baseDir) ? baseDir : DOWNLOADS_DIR;
        if (isWin) {
          spawn('explorer.exe', [fallbackDir], { windowsHide: true, detached: true });
        } else if (isMac) {
          spawn('open', [fallbackDir], { detached: true });
        } else {
          spawn('xdg-open', [fallbackDir], { detached: true });
        }
      }
      sendMessage({ action: 'showInFolderResult', success: true });
      break;
    }

    case 'cancel': {
      logHost(`Received cancel command from extension.`);
      if (activeStreamJob) {
        try { cleanupStreamJob(true); } catch (e) {}
      }
      if (activeMultiThreadJob) {
        try { activeMultiThreadJob.cancel(); } catch (e) {}
        activeMultiThreadJob = null;
      }
      if (activeProcess) {
        activeProcess.isKilledByHost = true;
        const pid = activeProcess.pid;
        try {
          if (isWin && pid) {
            exec(`taskkill /F /T /PID ${pid}`, () => {});
          }
          activeProcess.kill('SIGKILL');
        } catch (e) {}
        activeProcess = null;
      }
      sendMessage({ action: 'cancelled' });
      break;
    }

    default:
      sendMessage({ status: 'error', error: 'Unknown action: ' + msg.action });
      break;
  }
}

function formatBytes(bytes) {
  if (!bytes || isNaN(bytes) || bytes <= 0) return '0 MB';
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
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
    if (maxRedirects <= 0) return resolve({ supported: false, size: 0, url: urlStr });
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
          return probeHttpRange(nextUrl, headers, maxRedirects - 1).then(resolve);
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
        resolve({ supported, size, url: urlStr });
      });
      req.on('error', () => resolve({ supported: false, size: 0, url: urlStr }));
      req.on('timeout', () => { req.destroy(); resolve({ supported: false, size: 0, url: urlStr }); });
      req.end();
    } catch (e) {
      resolve({ supported: false, size: 0, url: urlStr });
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
    if (fs.existsSync(part)) fs.renameSync(part, outPath);
    return fs.existsSync(outPath);
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

    const cleanup = () => {
      isAborted = true;
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
    const progressInterval = setInterval(() => {
      if (isAborted) {
        clearInterval(progressInterval);
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
        if (!finalizePartFile(outPath)) {
          hasError = true;
          return reject(new Error('Failed to finalize downloaded file'));
        }
        resolve();
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
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            activeReqs.delete(req);
            res.destroy();
            url = new URL(res.headers.location, url).href;
            return fetchBlock(block, retryCount).then(blockResolve);
          }

          if (res.statusCode === 200 && block.blockIdx > 0) {
            activeReqs.delete(req);
            res.destroy();
            hasError = true;
            cleanup();
            return reject(new Error(`Server does not support HTTP Range requests (returned 200 on block ${block.blockIdx})`));
          }

          if (res.statusCode !== 206 && res.statusCode !== 200) {
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

            // Write full 1 MB block asynchronously to disk in a single I/O call
            const fullBuf = Buffer.concat(blockChunks);
            pendingWrites++;
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
        return downloadFileSingleStream({ url: nextUrl, outPath, headers, onProgress, signal }).then(resolve).catch(reject);
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
            return reject(new Error('Phát hiện luồng HLS m3u8 (cần FFmpeg giải mã)'));
          }
          const cType = String(res.headers['content-type'] || '').toLowerCase();
          if ((headStr.startsWith('<!DOCTYPE') || headStr.startsWith('<html') || headStr.startsWith('{"status_code"')) &&
              (cType.includes('text/html') || cType.includes('application/json'))) {
            try { fileStream.close(); } catch (_) {}
            try { fs.unlinkSync(partPath); } catch (_) {}
            try { req.destroy(); } catch (_) {}
            return reject(new Error('Tệp tải về không phải video (máy chủ trả về trang HTML/Lỗi API)'));
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
      fileStream.on('finish', () => {
        // Stream fully flushed: promote .part to the final name atomically.
        if (finalizePartFile(outPath)) return resolve();
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
      reject(err);
    });
  });
}

async function startMultiThreadDownload(req, targetUrl, outPath, referer, origin, onFallback, onComplete) {
  const signal = { onAbort: null };
  activeMultiThreadJob = {
    cancel: () => {
      if (signal.onAbort) signal.onAbort();
    }
  };

  const reqHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept': '*/*'
  };
  if (referer) reqHeaders['Referer'] = referer;
  if (origin) {
    try {
      const uHost = new URL(targetUrl).hostname.toLowerCase();
      const oHost = new URL(origin).hostname.toLowerCase();
      if (uHost === oHost || uHost.endsWith('.' + oHost) || oHost.endsWith('.' + uHost)) {
        reqHeaders['Origin'] = origin;
      }
    } catch (_) {}
  }
  if (req.cookie) {
    try {
      const uHost = new URL(targetUrl).hostname.toLowerCase();
      const pHost = req.pageUrl ? new URL(req.pageUrl).hostname.toLowerCase() : '';
      if (pHost && (uHost === pHost || uHost.endsWith('.' + pHost) || pHost.endsWith('.' + uHost) || (uHost.includes('tiktok') && pHost.includes('tiktok')))) {
        reqHeaders['Cookie'] = req.cookie;
      }
    } catch (_) {}
  }

  sendMessage({
    action: 'progress',
    percent: '1%',
    speed: 'Đang kết nối luồng tải đa luồng...',
    eta: '',
    size: ''
  });

  try {
    const probe = await probeHttpRange(targetUrl, reqHeaders);
    logHost(`Multi-thread probe: url="${targetUrl}", supported=${probe.supported}, size=${probe.size}`);

    const onProgress = (prog) => {
      sendMessage({
        action: 'progress',
        percent: prog.percent,
        speed: prog.speed,
        eta: '',
        size: prog.size
      });
    };

    if (probe.supported && probe.size > 512 * 1024) {
      logHost(`Starting 10-thread Range download for ${outPath} (${probe.size} bytes)`);
      await downloadFileMultiThread({
        url: probe.url || targetUrl,
        outPath,
        headers: reqHeaders,
        totalSize: probe.size,
        concurrency: 10,
        onProgress,
        signal
      });
    } else {
      logHost(`Server Range not supported or small file. Starting single-stream download for ${outPath}`);
      await downloadFileSingleStream({
        url: probe.url || targetUrl,
        outPath,
        headers: reqHeaders,
        onProgress,
        signal
      });
    }

    activeMultiThreadJob = null;
    logHost(`Multi-thread download completed successfully: "${outPath}"`);
    if (typeof onComplete === 'function') {
      onComplete(probe);
      return;
    }
    sendMessage({
      action: 'progress',
      percent: '100%',
      speed: 'Hoàn thành',
      eta: '',
      size: formatBytes(probe.size || 0)
    });
    sendMessage({
      action: 'complete',
      percent: '100%',
      outputFile: path.basename(outPath),
      downloadsDir: path.dirname(outPath)
    });
  } catch (err) {
    activeMultiThreadJob = null;
    if (err && err.message === 'USER_CANCELED') {
      logHost(`Multi-thread download canceled by user: "${outPath}"`);
      cleanupPartialFiles(outPath);
      try { if (fs.existsSync(outPath)) fs.unlinkSync(outPath); } catch (_) {}
      sendMessage({ action: 'cancelled' });
      return;
    }
    logHost(`Multi-thread download error: ${err.message}. Triggering fallback.`);
    cleanupPartialFiles(outPath);
    if (typeof onFallback === 'function') {
      onFallback(err);
    } else {
      sendMessage({ action: 'error', error: err.message });
    }
  }
}

function cleanFbCdnUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return rawUrl;
  try {
    const u = new URL(rawUrl);
    u.searchParams.delete('bytestart');
    u.searchParams.delete('byteend');
    u.searchParams.delete('range');
    u.searchParams.delete('rn');
    u.searchParams.delete('rbuf');
    return u.toString();
  } catch (e) {
    return rawUrl.replace(/[?&]bytestart=\d+/g, '').replace(/[?&]byteend=\d+/g, '');
  }
}

function fallbackToDirectFfmpegMux(req, videoUrl, audioUrl, outPath, finalFilename, targetDir, headers) {
  const netInputFlags = [
    '-reconnect', '1',
    '-reconnect_at_eof', '1',
    '-reconnect_streamed', '1',
    '-reconnect_delay_max', '5',
    '-multiple_requests', '1',
    '-rw_timeout', '15000000'
  ];

  const args = [
    '-y',
    '-threads', FFMPEG_THREAD_LIMIT,
    '-fflags', '+genpts+igndts+discardcorrupt+sortdts',
    '-protocol_whitelist', 'file,http,https,tcp,tls,crypto,data'
  ];
  if (videoUrl.startsWith('http')) {
    args.push(...netInputFlags, '-headers', headers);
  }
  args.push('-i', videoUrl);

  if (audioUrl && audioUrl !== videoUrl) {
    if (audioUrl.startsWith('http')) {
      args.push(...netInputFlags, '-headers', headers);
    }
    const isOpusOrWebm = audioUrl.includes('mime=audio%2Fwebm') || audioUrl.includes('opus') || (req && req.audioCodec === 'opus');
    if (isOpusOrWebm && outPath.endsWith('.mp4')) {
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

  activeProcess = spawn(FFMPEG_PATH, args, { windowsHide: true });
  setBackgroundPriority(activeProcess);
  const proc = activeProcess;

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
        percent: percent || '',
        speed: computedSpeed || (percent ? '' : 'Đang ghép luồng (FFmpeg)...'),
        eta: '',
        size: formatBytes(totalBytes)
      });
    }
  });

  proc.on('close', (code) => {
    if (proc && proc.isKilledByHost) {
      if (activeProcess === proc) activeProcess = null;
      cleanupPartialFiles(outPath);
      notifySuperseded();
      return;
    }
    if (activeProcess === proc) activeProcess = null;
    if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 1000 && finalizePartFile(outPath)) {
      sendMessage({
        action: 'progress',
        percent: '100%',
        speed: 'Hoàn thành',
        eta: '',
        size: ''
      });
      sendMessage({
        action: 'complete',
        outputFile: finalFilename,
        downloadsDir: targetDir
      });
    } else {
      const errLines = errOutput.split('\n').filter(l => l.trim() && !l.startsWith('ffmpeg version') && !l.startsWith('  built with') && !l.startsWith('  configuration:'));
      const shortErr = errLines.slice(-3).join(' ').trim() || `FFmpeg code ${code}`;
      sendMessage({
        action: 'error',
        error: shortErr
      });
    }
  });

  proc.on('error', (err) => {
    if (activeProcess === proc) activeProcess = null;
    sendMessage({ action: 'error', error: err.message });
  });
}

function isSameOriginOrSubdomain(baseHost, targetHost) {
  if (!baseHost || !targetHost) return false;
  try {
    if (baseHost.includes('://')) baseHost = new URL(baseHost).hostname;
    if (targetHost.includes('://')) targetHost = new URL(targetHost).hostname;
  } catch (_) {}
  const b = String(baseHost).toLowerCase().replace(/:\d+$/, '');
  const t = String(targetHost).toLowerCase().replace(/:\d+$/, '');
  if (b === t) return true;
  if (t.endsWith('.' + b) || b.endsWith('.' + t)) return true;
  const bClean = b.replace(/^www\./, '');
  const tClean = t.replace(/^www\./, '');
  if (bClean === tClean) return true;
  if (t.endsWith('.' + bClean) || b.endsWith('.' + tClean)) return true;
  return false;
}

async function startFfmpegMux(req) {
  if (activeProcess) {
    activeProcess.isKilledByHost = true;
    try { activeProcess.kill(); } catch (e) {}
    activeProcess = null;
  }
  if (activeMultiThreadJob) {
    try { activeMultiThreadJob.cancel(); } catch (e) {}
    activeMultiThreadJob = null;
  }

  let videoUrl = cleanFbCdnUrl(req.videoUrl || req.url);
  let audioUrl = cleanFbCdnUrl(req.audioUrl);

  let safeTitle = (req.title || 'video').replace(/[<>:"/\\|?*]/g, '_').replace(/[\s.]+$/, '').trim().slice(0, 150).replace(/[\s.]+$/, '');
  if (!safeTitle) safeTitle = `Video_${Date.now()}`;

  const targetDir = resolveTargetDir(req.outputDir);
  const finalFilename = `${safeTitle}.mp4`;
  const outPath = path.join(targetDir, finalFilename);

  let referer = resolveDefaultReferer(videoUrl, req.referer, req.pageUrl);
  let origin = '';
  if (referer) {
    try { origin = new URL(referer).origin; } catch (e) {}
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
      }
    } catch (_) {}
  }

  const rawHeadersStr = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36\r\n' +
    (referer ? `Referer: ${referer}\r\n` : '') +
    (origin ? `Origin: ${origin}\r\n` : '') +
    (allowCookie && req.cookie ? `Cookie: ${req.cookie}\r\n` : '') +
    'Accept: */*\r\n';

  const reqHeadersObj = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept': '*/*'
  };
  if (referer) reqHeadersObj['Referer'] = referer;
  if (origin) reqHeadersObj['Origin'] = origin;
  if (allowCookie && req.cookie) reqHeadersObj['Cookie'] = req.cookie;

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
  activeMultiThreadJob = {
    cancel: () => {
      for (const cb of abortCallbacks) {
        try { cb(); } catch (e) {}
      }
      abortCallbacks.clear();
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
    }
  };

  sendMessage({
    action: 'progress',
    percent: '1%',
    speed: 'Đang kết nối đa luồng (Video + Audio)...',
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
        percent: pct,
        speed: speedStr || (pct ? '' : 'Đang tải đa luồng...'),
        eta: '',
        size: totalCombined > 0 ? `${formatBytes(currentDownloaded)} / ${formatBytes(totalCombined)}` : formatBytes(currentDownloaded)
      });
    };

    const downloadVideo = async () => {
      if (probeVideo.supported && probeVideo.size > 512 * 1024) {
        await downloadFileMultiThread({
          url: probeVideo.url || videoUrl,
          outPath: tempVideoPath,
          headers: reqHeadersObj,
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
          headers: reqHeadersObj,
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
          headers: reqHeadersObj,
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
          headers: reqHeadersObj,
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

    activeMultiThreadJob = null;

    sendMessage({
      action: 'progress',
      percent: '99%',
      speed: 'Đang ghép luồng cục bộ...',
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
      const isOpusOrWebm = audioUrl.includes('mime=audio%2Fwebm') || audioUrl.includes('opus') || (req && req.audioCodec === 'opus');
      if (isOpusOrWebm && outPath.endsWith('.mp4')) {
        muxArgs.push('-i', tempAudioPath, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-strict', '-2');
      } else {
        muxArgs.push('-i', tempAudioPath, '-c', 'copy', '-strict', '-2');
      }
    } else {
      muxArgs.push('-c', 'copy');
    }

    muxArgs.push(
      '-avoid_negative_ts', 'make_zero',
      '-movflags', '+faststart',
      '-f', 'mp4',
      partPathFor(outPath)
    );

    activeProcess = spawn(FFMPEG_PATH, muxArgs, { windowsHide: true });
    setBackgroundPriority(activeProcess);
    const proc = activeProcess;

    let muxErr = '';
    proc.stderr.on('data', (d) => { muxErr += d.toString('utf8'); });

    proc.on('close', (code) => {
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      if (activeProcess === proc) activeProcess = null;
      if (proc && proc.isKilledByHost) {
        logHost(`FFmpeg mux killed by host/cancel.`);
        cleanupPartialFiles(outPath);
        notifySuperseded();
        return;
      }

      if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 1000 && finalizePartFile(outPath)) {
        sendMessage({
          action: 'progress',
          percent: '100%',
          speed: 'Hoàn thành',
          eta: '',
          size: formatBytes(fs.statSync(outPath).size)
        });
        sendMessage({
          action: 'complete',
          outputFile: finalFilename,
          downloadsDir: targetDir
        });
      } else {
        const shortErr = muxErr.split('\n').filter(l => l.trim() && !l.startsWith('ffmpeg version')).slice(-2).join(' ') || `FFmpeg code ${code}`;
        sendMessage({
          action: 'error',
          error: `Lỗi ghép video/audio: ${shortErr}`
        });
      }
    });

    proc.on('error', (err) => {
      try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      if (activeProcess === proc) activeProcess = null;
      sendMessage({ action: 'error', error: err.message });
    });

  } catch (err) {
    activeMultiThreadJob = null;
    try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
    if (err && err.message === 'USER_CANCELED') {
      logHost(`Mux Range download canceled by user.`);
      sendMessage({ action: 'cancelled' });
      return;
    }
    logHost(`Mux Range download failed: ${err.message}. Retrying via direct FFmpeg stream.`);
    fallbackToDirectFfmpegMux(req, videoUrl, audioUrl, outPath, finalFilename, targetDir, rawHeadersStr);
  }
}


function fetchHttpResource(urlStr, referer = '', isBin = false) {
  return new Promise((resolve, reject) => {
    const client = urlStr.startsWith('https') ? https : http;
    const reqHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept': '*/*'
    };
    if (referer) {
      reqHeaders['Referer'] = referer;
      try {
        reqHeaders['Origin'] = new URL(referer).origin;
      } catch (_) {}
    }

    client.get(urlStr, { headers: reqHeaders }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redir = new URL(res.headers.location, urlStr).href;
        return fetchHttpResource(redir, referer, isBin).then(resolve).catch(reject);
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`HTTP ${res.statusCode} for ${urlStr}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        resolve(isBin ? buf : buf.toString('utf8'));
      });
    }).on('error', reject);
  });
}

async function startFfmpegDirectStream(req) {
  if (activeProcess) {
    activeProcess.isKilledByHost = true;
    try { activeProcess.kill(); } catch (e) {}
    activeProcess = null;
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
  if (!targetUrl) {
    sendMessage({ action: 'error', error: 'Không tìm thấy URL tải video' });
    return;
  }

  const isAudio = req.quality === 'audio' || req.soundOnly;
  const ext = isAudio ? 'mp3' : 'mp4';
  let safeTitle = (req.title || 'video').replace(/[<>:"/\\|?*]/g, '_').replace(/[\s.]+$/, '').trim().slice(0, 150).replace(/[\s.]+$/, '');
  if (!safeTitle) safeTitle = `Video_${Date.now()}`;

  const targetDir = resolveTargetDir(req.outputDir);
  const finalFilename = `${safeTitle}.${ext}`;
  const outPath = path.join(targetDir, finalFilename);

  let referer = resolveDefaultReferer(targetUrl, req.referer, req.pageUrl);

  let origin = '';
  if (referer) {
    try { origin = new URL(referer).origin; } catch (e) {}
  }

  let safeOrigin = '';
  if (origin) {
    try {
      const uHost = new URL(targetUrl).hostname.toLowerCase();
      const oHost = new URL(origin).hostname.toLowerCase();
      const isKnownCrossCdn = uHost.includes('fbcdn.net') || uHost.includes('tiktokcdn.com');
      if (uHost === oHost || uHost.endsWith('.' + oHost) || oHost.endsWith('.' + uHost) || isKnownCrossCdn) {
        safeOrigin = origin;
      }
    } catch (_) {}
  }
  let safeCookie = '';
  if (req.cookie) {
    try {
      const uHost = new URL(targetUrl).hostname.toLowerCase();
      const pHost = req.pageUrl ? new URL(req.pageUrl).hostname.toLowerCase() : '';
      if (pHost && (uHost === pHost || uHost.endsWith('.' + pHost) || pHost.endsWith('.' + uHost) || (uHost.includes('tiktok') && pHost.includes('tiktok')))) {
        safeCookie = req.cookie;
      }
    } catch (_) {}
  }

  const headers = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36\r\n' +
    (referer ? `Referer: ${referer}\r\n` : '') +
    (safeOrigin ? `Origin: ${safeOrigin}\r\n` : '') +
    (safeCookie ? `Cookie: ${safeCookie}\r\n` : '') +
    'Accept: */*\r\n';

  sendMessage({
    action: 'progress',
    percent: '1%',
    speed: 'Đang chuẩn bị luồng video (FFmpeg)...',
    eta: '',
    size: ''
  });

  let ffmpegInput = targetUrl;
  let tempSessionDir = null;
  let totalPlaylistDuration = 0;

  const isHls = targetUrl.toLowerCase().includes('.m3u8') ||
    targetUrl.includes('/hls/') ||
    targetUrl.includes('format=m3u8') ||
    targetUrl.includes('type=m3u8') ||
    targetUrl.includes('playlist');
  if (isHls && targetUrl.startsWith('http')) {
    try {
      tempSessionDir = path.join(os.tmpdir(), `savior_stream_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`);
      fs.mkdirSync(tempSessionDir, { recursive: true });

      logHost(`Fetching HLS playlist: ${targetUrl}`);
      let playlistText = await fetchHttpResource(targetUrl, referer, false);

      // Verify that the response is actually an HLS playlist (#EXTM3U)
      if (!playlistText || !playlistText.includes('#EXTM3U')) {
        logHost(`Invalid playlist response: Does not contain #EXTM3U`);
        sendMessage({ action: 'error', error: 'Máy chủ trả về luồng không hợp lệ (không phải định dạng HLS playlist).' });
        return;
      }

      // Handle Master Playlist
      if (playlistText.includes('#EXT-X-STREAM-INF')) {
        const lines = playlistText.split(/\r?\n/);
        let bestUri = null;
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
                }
                break;
              }
            }
          }
        }
        if (bestUri) {
          const resolvedMediaUrl = new URL(bestUri, targetUrl).href;
          targetUrl = resolvedMediaUrl;
          playlistText = await fetchHttpResource(resolvedMediaUrl, referer, false);
        }
      }

      // Calculate total duration from #EXTINF
      const extInfMatches = playlistText.match(/#EXTINF:([0-9.]+)/g) || [];
      for (const m of extInfMatches) {
        const d = parseFloat(m.replace('#EXTINF:', ''));
        if (!isNaN(d)) totalPlaylistDuration += d;
      }

      // Handle AES-128 keys, fMP4 init maps (#EXT-X-MAP), and relative segment paths
      const pLines = playlistText.split(/\r?\n/);
      const sanitizedLines = [];
      let keyCount = 0;
      const hasEncryptionKey = playlistText.includes('#EXT-X-KEY');

      for (let i = 0; i < pLines.length; i++) {
        let line = pLines[i];
        if (line.startsWith('#EXT-X-KEY')) {
          const uriMatch = line.match(/URI=\"([^\"]+)\"/);
          if (uriMatch) {
            const rawKeyUri = uriMatch[1];
            const absKeyUrl = new URL(rawKeyUri, targetUrl).href;
            try {
              logHost(`Fetching AES-128 key: ${absKeyUrl}`);
              const keyBytes = await fetchHttpResource(absKeyUrl, referer, true);
              const keyFilename = `key_${++keyCount}.key`;
              const localKeyPath = path.join(tempSessionDir, keyFilename);
              fs.writeFileSync(localKeyPath, keyBytes);
              line = line.replace(rawKeyUri, keyFilename);
            } catch (kErr) {
              logHost(`Failed to fetch key: ${kErr.message}`);
            }
          }
          sanitizedLines.push(line);
        } else if (line.startsWith('#EXT-X-MAP')) {
          const uriMatch = line.match(/URI=\"([^\"]+)\"/);
          if (uriMatch) {
            const rawMapUri = uriMatch[1];
            const absMapUrl = new URL(rawMapUri, targetUrl).href;
            if (hasEncryptionKey) {
              try {
                logHost(`Fetching fMP4 initialization segment: ${absMapUrl}`);
                const mapBytes = await fetchHttpResource(absMapUrl, referer, true);
                const mapFilename = `init_${Date.now()}.mp4`;
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
        } else if (line.trim().length > 0 && !line.startsWith('#')) {
          const rawSegUrl = new URL(line.trim(), targetUrl).href;
          sanitizedLines.push(rawSegUrl);
        } else {
          sanitizedLines.push(line);
        }
      }

      if (hasEncryptionKey) {
        const localM3u8Path = path.join(tempSessionDir, 'playlist.m3u8');
        fs.writeFileSync(localM3u8Path, sanitizedLines.join('\n'), 'utf8');
        ffmpegInput = localM3u8Path;
      } else {
        // Direct remote stream: let FFmpeg fetch the playlist directly over HTTP
        // with full -headers (including Referer/User-Agent) and -reconnect flags!
        ffmpegInput = targetUrl;
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

  args.push('-protocol_whitelist', 'file,http,https,tcp,tls,crypto,data');
  if (typeof ffmpegInput === 'string' && ffmpegInput.startsWith('http')) {
    args.push(
      '-reconnect', '1',
      '-reconnect_at_eof', '1',
      '-reconnect_streamed', '1',
      '-reconnect_delay_max', '5',
      '-multiple_requests', '1',
      '-rw_timeout', '15000000',
      '-headers', headers
    );
  }
  args.push('-i', ffmpegInput);

  if (isAudio) {
    args.push('-vn', '-c:a', 'libmp3lame', '-q:a', '2');
  } else {
    args.push(
      '-c', 'copy',
      '-avoid_negative_ts', 'make_zero',
      '-max_muxing_queue_size', '1024',
      '-movflags', '+faststart'
    );
  }

  args.push('-f', isAudio ? 'mp3' : 'mp4', '-progress', 'pipe:1', partPathFor(outPath));

  function attachDirectFfmpegHandlers(proc) {
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
            percent: pctStr,
            speed: computedSpeed || speed || '',
            eta: '',
            size: formatBytes(totalBytes)
          });
        }
      }
    });

    proc.on('close', (code) => {
      if (proc && proc.isKilledByHost) {
        if (activeProcess === proc) activeProcess = null;
        cleanupPartialFiles(outPath);
        notifySuperseded();
        return;
      }
      if (activeProcess === proc) activeProcess = null;
      if (tempSessionDir && fs.existsSync(tempSessionDir)) {
        try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      }

      if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 1000 && finalizePartFile(outPath)) {
        sendMessage({
          action: 'progress',
          percent: '100%',
          speed: 'Hoàn thành',
          eta: '',
          size: ''
        });
        sendMessage({
          action: 'complete',
          outputFile: finalFilename,
          downloadsDir: targetDir
        });
      } else {
        cleanupPartialFiles(outPath);
        try {
          if (fs.existsSync(outPath) && fs.statSync(outPath).size <= 1000) {
            fs.unlinkSync(outPath);
          }
        } catch (_) {}
        const is403 = /403|Forbidden|Access Denied/i.test(errOutput);
        const errLines = errOutput.split('\n').filter(l => l.trim() && !l.startsWith('ffmpeg version') && !l.startsWith('  built with') && !l.startsWith('  configuration:'));
        const shortErr = is403
          ? 'Token luồng phim đã hết hạn hoặc bị từ chối truy cập (HTTP 403). Vui lòng tải lại trang để lấy luồng mới.'
          : `Lỗi tải luồng: ${(errLines.slice(-3).join(' ').trim() || `FFmpeg code ${code}`).slice(0, 150)}`;
        sendMessage({
          action: 'error',
          error: shortErr
        });
      }
    });

    proc.on('error', (err) => {
      if (activeProcess === proc) activeProcess = null;
      if (tempSessionDir && fs.existsSync(tempSessionDir)) {
        try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      }
      sendMessage({ action: 'error', error: err.message });
    });
  }

  // For non-HLS direct media streams, try multi-thread download first
  if (!isHls && targetUrl.startsWith('http')) {
    if (isAudio) {
      // Audio extraction: download source media stream via multi-thread Range first, then convert locally with FFmpeg
      const tempMediaFile = path.join(os.tmpdir(), `savior_audio_src_${Date.now()}_${Math.random().toString(36).substr(2, 6)}.tmp`);
      startMultiThreadDownload(req, targetUrl, tempMediaFile, referer, origin, (err) => {
        // Fallback to direct FFmpeg network streaming if Range fails
        activeProcess = spawn(FFMPEG_PATH, args, {
          cwd: tempSessionDir || process.cwd(),
          windowsHide: true
        });
        attachDirectFfmpegHandlers(activeProcess);
      }, () => {
        // Source stream downloaded locally! Now convert to MP3 via local FFmpeg in < 1 second
        sendMessage({
          action: 'progress',
          percent: '99%',
          speed: 'Đang chuyển đổi MP3...',
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
        activeProcess = spawn(FFMPEG_PATH, convertArgs, { windowsHide: true });
        setBackgroundPriority(activeProcess);
        const cProc = activeProcess;
        let cErr = '';
        cProc.stderr.on('data', (d) => { cErr += d.toString('utf8'); });
        cProc.on('close', (code) => {
          try { fs.rmSync(tempMediaFile, { force: true }); } catch (e) {}
          if (activeProcess === cProc) activeProcess = null;
          if (code === 0 && fs.existsSync(partPathFor(outPath)) && fs.statSync(partPathFor(outPath)).size > 100 && finalizePartFile(outPath)) {
            sendMessage({ action: 'progress', percent: '100%', speed: 'Hoàn thành', eta: '', size: formatBytes(fs.statSync(outPath).size) });
            sendMessage({ action: 'complete', outputFile: finalFilename, downloadsDir: targetDir });
          } else {
            cleanupPartialFiles(outPath);
            sendMessage({ action: 'error', error: `Lỗi chuyển đổi MP3 (code ${code})` });
          }
        });
        cProc.on('error', (err) => {
          try { fs.rmSync(tempMediaFile, { force: true }); } catch (e) {}
          if (activeProcess === cProc) activeProcess = null;
          sendMessage({ action: 'error', error: err.message });
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
          error: `${err.message}. Liên kết tải có thể đã hết hạn; hãy mở lại video và lấy luồng mới.`
        });
        return;
      }
      activeProcess = spawn(FFMPEG_PATH, args, {
        cwd: tempSessionDir || process.cwd(),
        windowsHide: true
      });
      attachDirectFfmpegHandlers(activeProcess);
    });
    return;
  }

  activeProcess = spawn(FFMPEG_PATH, args, {
    cwd: tempSessionDir || process.cwd(),
    windowsHide: true
  });
  attachDirectFfmpegHandlers(activeProcess);
}

function detectPlatformName(line, targetUrl = '') {
  if (line.includes('youtube') || targetUrl.includes('youtube') || targetUrl.includes('youtu.be')) return 'YouTube';
  if (line.includes('tiktok') || targetUrl.includes('tiktok')) return 'TikTok';
  if (line.includes('facebook') || targetUrl.includes('facebook') || targetUrl.includes('fb.watch')) return 'Facebook';
  if (line.includes('instagram') || targetUrl.includes('instagram')) return 'Instagram';
  return 'máy chủ';
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
  return u.includes('tiktok.com') || u.includes('tiktokcdn.com') || u.includes('byteoversea.com') || u.includes('ibytedtos.com');
}

function resolveDefaultReferer(targetUrl = '', reqReferer = '', pageUrl = '') {
  const u = String(targetUrl || '').toLowerCase();
  const p = String(pageUrl || '').toLowerCase();

  // Strict CDN Referrer Rules:
  // These CDNs actively block 3rd-party embedder referers with HTTP 403 Forbidden.
  // Their standard referer MUST take precedence over any 3rd-party reqReferer.
  if (u.includes('twimg.com') || u.includes('twitter.com') || u.includes('x.com')) {
    return 'https://x.com/';
  }
  if (u.includes('tiktok.com') || u.includes('tiktokcdn.com') || u.includes('byteoversea.com') || u.includes('ibytedtos.com')) {
    return 'https://www.tiktok.com/';
  }
  if (u.includes('facebook.com') || u.includes('fbcdn.net') || u.includes('fb.watch')) {
    return 'https://www.facebook.com/';
  }
  if (p.includes('threads.net') || u.includes('threads.net')) {
    return 'https://www.threads.net/';
  }
  if (u.includes('instagram.com') || u.includes('cdninstagram.com')) {
    return 'https://www.instagram.com/';
  }
  if (u.includes('googlevideo.com') || u.includes('youtube.com') || u.includes('youtu.be')) {
    return 'https://www.youtube.com/';
  }
  if (u.includes('bilivideo.com') || u.includes('bilibili.com')) {
    return 'https://www.bilibili.com/';
  }
  if (u.includes('douyin.com') || u.includes('iesdouyin.com')) {
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

  if (p.includes('threads.net') || u.includes('threads.net')) {
    return 'https://www.threads.net/';
  }
  if (p.includes('tiktok.com')) {
    return 'https://www.tiktok.com/';
  }
  if (p.includes('youtube.com')) {
    return 'https://www.youtube.com/';
  }
  if (p.includes('facebook.com')) {
    return 'https://www.facebook.com/';
  }
  if (p.includes('instagram.com')) {
    return 'https://www.instagram.com/';
  }
  if (p.includes('x.com') || p.includes('twitter.com')) {
    return 'https://x.com/';
  }
  if (p.includes('bilibili.com')) {
    return 'https://www.bilibili.com/';
  }
  if (p.includes('douyin.com')) {
    return 'https://www.douyin.com/';
  }
  if (p.includes('reddit.com')) {
    return 'https://www.reddit.com/';
  }
  if (p.includes('vimeo.com')) {
    return 'https://vimeo.com/';
  }
  if (p.includes('twitch.tv')) {
    return 'https://www.twitch.tv/';
  }
  if (p.includes('dailymotion.com')) {
    return 'https://www.dailymotion.com/';
  }
  if (p.includes('pinterest.com')) {
    return 'https://www.pinterest.com/';
  }
  if (p.includes('zingmp3.vn')) {
    return 'https://zingmp3.vn/';
  }
  if (p.includes('nhaccuatui.com')) {
    return 'https://www.nhaccuatui.com/';
  }
  if (p.includes('soundcloud.com')) {
    return 'https://soundcloud.com/';
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
    return { percent: '0%', speed: `Đang kết nối ${pName}...` };
  }
  if (line.includes('player API JSON') || line.includes('initial data API') || line.includes('Downloading m3u8 information') || line.includes('Downloading video webpage')) {
    return { percent: '0%', speed: 'Đang chuẩn bị luồng video...' };
  }
  if (line.includes('Downloading 1 format') || line.includes('Destination:') || line.includes('[hlsnative]')) {
    return { percent: '1%', speed: 'Bắt đầu tải stream...' };
  }
  if (line.includes('[Merger] Merging formats') || line.includes('Merging formats into')) {
    return { percent: '99%', speed: 'Đang ghép âm thanh và hình ảnh (FFmpeg)...' };
  }
  if (line.includes('[ExtractAudio] Destination:') || line.includes('ExtractAudio')) {
    return { percent: '99%', speed: 'Đang xuất file âm thanh MP3...' };
  }

  return null;
}

function startYtDlpDownload(req, targetUrl) {
  if (activeProcess) {
    activeProcess.isKilledByHost = true;
    try { activeProcess.kill(); } catch (e) {}
    activeProcess = null;
  }

  const isAudio = Boolean(req.soundOnly || req.quality === 'audio');
  const quality = req.quality || 'best';
  let formatArg = 'bv*+ba/b';

  if (quality === '4k') formatArg = 'bv*[height<=2160]+ba/b';
  else if (quality === '2k') formatArg = 'bv*[height<=1440]+ba/b';
  else if (quality === '1080p') formatArg = 'bv*[height<=1080]+ba/b';
  else if (quality === '720p') formatArg = 'bv*[height<=720]+ba/b';
  else if (quality === '480p') formatArg = 'bv*[height<=480]+ba/b';
  else if (quality === '360p') formatArg = 'bv*[height<=360]+ba/b';
  else if (isAudio) formatArg = 'ba/b';

  let safeTitle = (req.title || '').replace(/[<>:"/\\|?*]/g, '_').replace(/[\s.]+$/, '').trim().slice(0, 150).replace(/[\s.]+$/, '');
  if (!safeTitle || safeTitle === 'video') {
    if (targetUrl.includes('youtube') || targetUrl.includes('youtu.be')) safeTitle = `YouTube_${Date.now()}`;
    else if (targetUrl.includes('facebook') || targetUrl.includes('fbcdn')) safeTitle = `Facebook_${Date.now()}`;
    else if (targetUrl.includes('tiktok')) safeTitle = `TikTok_${Date.now()}`;
    else safeTitle = `Video_${Date.now()}`;
  }

  const targetDir = resolveTargetDir(req.outputDir);
  const outTemplate = path.join(targetDir, `${safeTitle}.%(ext)s`);

  const isYouTube = checkIsYouTube(targetUrl) || checkIsYouTube(req.referer) || checkIsYouTube(req.pageUrl);

  const args = [
    '--no-playlist',
    '--ffmpeg-location', BIN_DIR,
    '--js-runtimes', `node:${process.execPath}`,
    '--no-check-certificates',
    '--geo-bypass',
    '--retries', '5',
    '--fragment-retries', '5',
    '--socket-timeout', '20',
    '--extractor-retries', '3',
    '--http-chunk-size', '10M',
    '--concurrent-fragments', '4',
    '--throttled-rate', '100K',
    '-f', formatArg,
    '--format-sort', 'res,vcodec:h264,acodec:m4a,proto:https',
    '--fixup', 'detect_or_warn',
    '--no-warnings',
    '--newline',
    '--progress-template', 'download:UVD_PROG::%(progress._percent_str)s::%(progress._speed_str)s::%(progress._eta_str)s::%(progress._total_bytes_str)s',
    '-o', outTemplate
  ];

  if (isYouTube) {
    args.push('--extractor-args', 'youtube:player_client=visionos,android,web');
  } else {
    args.push('--user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
  }

  if (isAudio) {
    args.push('-x', '--audio-format', 'mp3');
  } else {
    args.push('--merge-output-format', 'mp4');
  }

  if (req.referer) {
    const cleanRef = isYouTube ? 'https://www.youtube.com/' : req.referer;
    args.push('--referer', cleanRef);
    try {
      const orig = new URL(cleanRef).origin;
      args.push('--add-header', `Origin: ${orig}`);
    } catch (_) {}
  }

  if (req.cookie && !isYouTube) {
    args.push('--add-header', `Cookie: ${req.cookie}`);
  }

  args.push('--downloader-args', 'ffmpeg:-protocol_whitelist file,http,https,tcp,tls,crypto,data');
  args.push('--postprocessor-args', 'ffmpeg:-avoid_negative_ts make_zero -max_muxing_queue_size 1024');

  args.push(targetUrl);

  sendMessage({
    action: 'progress',
    percent: '1%',
    speed: 'Đang kết nối tăng tốc (yt-dlp)...',
    eta: '',
    size: ''
  });

  let finalFilename = '';
  let lastSentTime = 0;
  let fallbackInitiated = false;

  function triggerFallback(reason) {
    if (fallbackInitiated) return;
    fallbackInitiated = true;
    logHost(`yt-dlp fallback triggered (${reason}). Routing to FFmpeg.`);
    if (req.videoUrl && req.audioUrl && req.videoUrl !== req.audioUrl) {
      startFfmpegMux(req);
    } else {
      startFfmpegDirectStream(req);
    }
  }

  function processOutput(text) {
    const lines = text.split(/\r?\n/);
    for (const line of lines) {
      const prog = parseProgressLine(line, targetUrl);
      if (prog) {
        const now = Date.now();
        if (now - lastSentTime > 150 || prog.percent === '100%' || prog.percent === '100.0%') {
          lastSentTime = now;
          sendMessage({ action: 'progress', ...prog });
        }
      }

      if (line.includes('[Merger] Merging formats into') || line.includes('[download] Destination:') || line.includes('[ExtractAudio] Destination:') || line.includes('has already been downloaded')) {
        const match = line.match(/"([^"]+)"/) || line.match(/Destination:\s*(.+)$/) || line.match(/\[download\]\s*(.+?)\s+has already been downloaded/);
        if (match && match[1]) {
          finalFilename = path.basename(match[1].trim());
        }
      }
    }
  }

  activeProcess = spawn(YTDLP_PATH, args, { windowsHide: true });
  setBackgroundPriority(activeProcess);
  const proc = activeProcess;

  let errOutput = '';
  proc.stdout.on('data', (data) => {
    const text = data.toString('utf8');
    if (text.includes('ERROR:') || text.includes('Error:')) errOutput += text;
    processOutput(text);
  });

  proc.stderr.on('data', (data) => {
    const text = data.toString('utf8');
    errOutput += text;
    processOutput(text);
  });

  proc.on('close', (code) => {
    if (proc && proc.isKilledByHost) {
      if (activeProcess === proc) activeProcess = null;
      notifySuperseded();
      return;
    }
    if (activeProcess === proc) activeProcess = null;

    if (code === 0) {
      let savedFile = finalFilename;
      try {
        const completedFiles = fs.readdirSync(targetDir)
          .filter(f => !f.endsWith('.part') && !f.endsWith('.ytdl') && !f.endsWith('.tmp'))
          .map(f => ({ name: f, time: fs.statSync(path.join(targetDir, f)).mtimeMs }))
          .sort((a, b) => b.time - a.time);

        if (safeTitle) {
          const matchTitle = completedFiles.find(f => f.name.startsWith(safeTitle));
          if (matchTitle) savedFile = matchTitle.name;
        }
        if (!savedFile && completedFiles.length > 0) {
          savedFile = completedFiles[0].name;
        }
      } catch (_) {}

      sendMessage({
        action: 'progress',
        percent: '100%',
        speed: 'Hoàn thành',
        eta: '',
        size: ''
      });
      sendMessage({
        action: 'complete',
        outputFile: savedFile || `${safeTitle}.mp4`,
        downloadsDir: targetDir
      });
    } else {
      triggerFallback(`exit code ${code}`);
    }
  });

  proc.on('error', (err) => {
    if (activeProcess === proc) activeProcess = null;
    triggerFallback(`spawn error: ${err.message}`);
  });
}

function startDownload(req) {
  logHost(`startDownload: ${JSON.stringify({ url: req.url, videoUrl: req.videoUrl, audioUrl: req.audioUrl, title: req.title, quality: req.quality })}`);

  let targetUrl = req.videoUrl || req.url || '';
  const isTikTok = checkIsTikTok(targetUrl) || checkIsTikTok(req.referer) || checkIsTikTok(req.pageUrl);
  if (isTikTok) {
    // If targetUrl is already a direct media stream URL, DO NOT overwrite with pageUrl!
    const isDirectCdn = targetUrl.includes('tiktokcdn.com') ||
      targetUrl.includes('byteoversea.com') ||
      targetUrl.includes('ibytedtos.com') ||
      targetUrl.includes('video/tos/');
    if (!isDirectCdn) {
      if (req.pageUrl && req.pageUrl.includes('tiktok.com')) req.videoUrl = req.pageUrl;
      else if (req.referer && req.referer.includes('tiktok.com')) req.videoUrl = req.referer;
    }
  }

  // Fast Path 1: Separate DASH video and audio streams via accelerated FFmpeg mux
  if (req.videoUrl && req.audioUrl && req.videoUrl !== req.audioUrl) {
    logHost('Routing to startFfmpegMux (separate video + audio streams)');
    return startFfmpegMux(req);
  }

  // Note: yt-dlp is intentionally bypassed so that private, member-only, and token-authenticated
  // videos can be downloaded using the browser session cookies and headers captured by Savior.
  // All streams route through Savior's accelerated multi-thread Range downloader and local FFmpeg!

  // Direct progressive file, HLS stream, or audio conversion
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
    downloadFileMultiThread,
    handleMessage,
    setMessageHook,
    startDownload,
    startYtDlpDownload,
    DISCONNECT_GRACE_MS
  };
}
