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

const BIN_DIR = path.join(__dirname, 'bin');
const FFMPEG_PATH = path.join(BIN_DIR, 'ffmpeg.exe');
const YTDLP_PATH = path.join(BIN_DIR, 'yt-dlp.exe');
const DOWNLOADS_DIR = path.join(os.homedir(), 'Downloads');

// Ensure PATH contains our bin directory for ffmpeg
process.env.PATH = BIN_DIR + path.delimiter + path.dirname(process.execPath) + path.delimiter + process.env.PATH;

let activeProcess = null;
let activeMultiThreadJob = null;
let stdoutWritable = true;

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
});

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

// Send length-prefixed JSON message to Chrome
function sendMessage(msg) {
  if (!stdoutWritable) return;
  try {
    logHost(`SEND: ${JSON.stringify(msg)}`);
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
      logHost('Process or multi-thread job is still active, giving 30m grace period before termination');
      setTimeout(() => {
        try { if (activeMultiThreadJob) activeMultiThreadJob.cancel(); } catch (e) {}
        try { if (activeProcess) activeProcess.kill(); } catch (e) {}
        process.exit(0);
      }, 1800000);
    } else {
      process.exit(0);
    }
  });
}

function handleMessage(msg) {
  logHost(`RECV: ${JSON.stringify(msg)}`);
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
      startDownload(msg);
      break;
    }

    case 'browseFolder': {
      const psScript = `Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Chọn thư mục để lưu video tải về'; if ($f.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { Write-Output $f.SelectedPath }`;
      exec(`powershell -NoProfile -Command "${psScript}"`, (err, stdout) => {
        const selected = (stdout || '').trim();
        sendMessage({
          action: 'browseFolderResult',
          path: selected || DOWNLOADS_DIR
        });
      });
      break;
    }

    case 'openFolder': {
      const folderPath = msg.path || DOWNLOADS_DIR;
      exec(`explorer.exe "${folderPath}"`, (err) => {
        sendMessage({ action: 'openFolderResult', success: !err });
      });
      break;
    }

    case 'openFile': {
      let targetPath = msg.path || '';
      const filename = msg.filename || '';
      logHost(`openFile requested: path="${targetPath}", filename="${filename}"`);

      let resolvedFile = '';
      if (targetPath && path.isAbsolute(targetPath) && fs.existsSync(targetPath)) {
        resolvedFile = targetPath;
      } else if (targetPath && fs.existsSync(path.join(DOWNLOADS_DIR, targetPath))) {
        resolvedFile = path.join(DOWNLOADS_DIR, targetPath);
      } else if (filename) {
        const fn = path.basename(filename);
        const directCandidate = path.join(DOWNLOADS_DIR, fn);
        if (fs.existsSync(directCandidate)) {
          resolvedFile = directCandidate;
        } else {
          for (const ext of ['.mp4', '.mkv', '.webm', '.mp3', '.m4a']) {
            const withExt = fn.toLowerCase().endsWith(ext) ? directCandidate : `${directCandidate}${ext}`;
            if (fs.existsSync(withExt)) {
              resolvedFile = withExt;
              break;
            }
          }
        }
      }

      if (resolvedFile && fs.existsSync(resolvedFile)) {
        logHost(`openFile launching: "${resolvedFile}"`);
        exec(`cmd /c start "" "${resolvedFile.replace(/"/g, '""')}"`, { windowsHide: true }, (err) => {
          if (err) {
            exec(`powershell -NoProfile -Command "Start-Process -FilePath '${resolvedFile.replace(/'/g, "''")}'"`, { windowsHide: true });
          }
        });
        sendMessage({ action: 'openFileResult', success: true, path: resolvedFile });
      } else {
        exec(`explorer.exe "${DOWNLOADS_DIR}"`);
        sendMessage({ action: 'openFileResult', success: false, error: 'Không tìm thấy tệp. Đã mở thư mục Downloads.' });
      }
      break;
    }

    case 'showInFolder': {
      const filePath = msg.path;
      if (filePath && fs.existsSync(filePath)) {
        exec(`explorer.exe /select,"${filePath}"`);
      } else {
        exec(`explorer.exe "${DOWNLOADS_DIR}"`);
      }
      sendMessage({ action: 'showInFolderResult', success: true });
      break;
    }

    case 'cancel': {
      if (activeMultiThreadJob) {
        try { activeMultiThreadJob.cancel(); } catch (e) {}
        activeMultiThreadJob = null;
      }
      if (activeProcess) {
        activeProcess.isKilledByHost = true;
        try { activeProcess.kill(); } catch (e) {}
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

function downloadFileMultiThread({ url, outPath, headers, totalSize, concurrency = 6, onProgress, signal }) {
  return new Promise((resolve, reject) => {
    let fd = null;
    try {
      fd = fs.openSync(outPath, 'w');
      if (totalSize > 0) {
        try { fs.ftruncateSync(fd, totalSize); } catch (e) {}
      }
    } catch (e) {
      return reject(e);
    }

    const numChunks = Math.min(concurrency, Math.max(1, Math.floor(totalSize / (1024 * 1024))));
    const chunkSize = Math.ceil(totalSize / numChunks);
    let totalDownloaded = 0;
    let completedChunks = 0;
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
      signal.onAbort = cleanup;
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

    for (let i = 0; i < numChunks; i++) {
      const chunkStart = i * chunkSize;
      const chunkEnd = Math.min(totalSize - 1, (i + 1) * chunkSize - 1);
      downloadChunk(i, chunkStart, chunkEnd, 0);
    }

    function downloadChunk(chunkIdx, start, end, retryCount) {
      if (isAborted || hasError) return;
      if (start > end) {
        checkDone();
        return;
      }

      let currentWritePos = start;
      const u = new URL(url);
      const client = u.protocol === 'https:' ? https : http;
      const reqHeaders = { ...headers, Range: `bytes=${currentWritePos}-${end}` };

      const req = client.get(u, { headers: reqHeaders }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          activeReqs.delete(req);
          res.destroy();
          url = new URL(res.headers.location, url).href;
          return downloadChunk(chunkIdx, currentWritePos, end, retryCount);
        }

        if (res.statusCode !== 206 && res.statusCode !== 200) {
          activeReqs.delete(req);
          res.destroy();
          if (retryCount < 4 && !isAborted) {
            return setTimeout(() => downloadChunk(chunkIdx, currentWritePos, end, retryCount + 1), 600);
          }
          hasError = true;
          cleanup();
          return reject(new Error(`HTTP ${res.statusCode} on chunk ${chunkIdx}`));
        }

        res.on('data', (chunk) => {
          if (isAborted || hasError) return;
          const writeOffset = currentWritePos;
          currentWritePos += chunk.length;
          totalDownloaded += chunk.length;
          try {
            fs.writeSync(fd, chunk, 0, chunk.length, writeOffset);
          } catch (err) {
            if (!hasError && !isAborted) {
              hasError = true;
              cleanup();
              reject(err);
            }
          }
        });

        res.on('end', () => {
          activeReqs.delete(req);
          if (isAborted || hasError) return;
          if (currentWritePos <= end && retryCount < 4) {
            return setTimeout(() => downloadChunk(chunkIdx, currentWritePos, end, retryCount + 1), 500);
          }
          checkDone();
        });

        res.on('error', (err) => {
          activeReqs.delete(req);
          if (retryCount < 4 && !isAborted && !hasError) {
            setTimeout(() => downloadChunk(chunkIdx, currentWritePos, end, retryCount + 1), 600);
          } else if (!hasError && !isAborted) {
            hasError = true;
            cleanup();
            reject(err);
          }
        });
      });

      req.on('error', (err) => {
        activeReqs.delete(req);
        if (retryCount < 4 && !isAborted && !hasError) {
          setTimeout(() => downloadChunk(chunkIdx, currentWritePos, end, retryCount + 1), 600);
        } else if (!hasError && !isAborted) {
          hasError = true;
          cleanup();
          reject(err);
        }
      });

      activeReqs.add(req);
    }

    function checkDone() {
      completedChunks++;
      if (completedChunks >= numChunks && !isAborted && !hasError) {
        clearInterval(progressInterval);
        cleanup();
        resolve();
      }
    }
  });
}

function downloadFileSingleStream({ url, outPath, headers, onProgress, signal }) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const client = u.protocol === 'https:' ? https : http;
    const fileStream = fs.createWriteStream(outPath);
    let totalBytes = 0;
    let downloadedBytes = 0;
    let lastTime = Date.now();
    let lastBytes = 0;

    const req = client.get(u, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fileStream.close();
        try { fs.unlinkSync(outPath); } catch (e) {}
        const nextUrl = new URL(res.headers.location, url).href;
        return downloadFileSingleStream({ url: nextUrl, outPath, headers, onProgress, signal }).then(resolve).catch(reject);
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        fileStream.close();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      totalBytes = parseInt(res.headers['content-length'] || 0, 10) || 0;
      res.on('data', (c) => {
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
      fileStream.on('finish', () => resolve());
      fileStream.on('error', reject);
    });

    if (signal) {
      signal.onAbort = () => {
        try { req.destroy(); } catch (e) {}
        try { fileStream.close(); } catch (e) {}
      };
    }
    req.on('error', reject);
  });
}

async function startMultiThreadDownload(req, targetUrl, outPath, referer, origin, onFallback) {
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
  if (origin) reqHeaders['Origin'] = origin;
  if (req.cookie) reqHeaders['Cookie'] = req.cookie;

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

    if (probe.supported && probe.size > 2 * 1024 * 1024) {
      logHost(`Starting 6-thread Range download for ${outPath} (${probe.size} bytes)`);
      await downloadFileMultiThread({
        url: probe.url || targetUrl,
        outPath,
        headers: reqHeaders,
        totalSize: probe.size,
        concurrency: 6,
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
    logHost(`Multi-thread download error: ${err.message}. Triggering fallback.`);
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

function startFfmpegMux(req) {
  if (activeProcess) {
    activeProcess.isKilledByHost = true;
    try { activeProcess.kill(); } catch (e) {}
    activeProcess = null;
  }
  let videoUrl = cleanFbCdnUrl(req.videoUrl || req.url);
  let audioUrl = cleanFbCdnUrl(req.audioUrl);

  let safeTitle = (req.title || 'video').replace(/[<>:"/\\|?*]/g, '_').replace(/[\s.]+$/, '').trim().slice(0, 150).replace(/[\s.]+$/, '');
  if (!safeTitle) safeTitle = `Video_${Date.now()}`;

  const targetDir = (req.outputDir && fs.existsSync(req.outputDir)) ? req.outputDir : DOWNLOADS_DIR;
  const finalFilename = `${safeTitle}.mp4`;
  const outPath = path.join(targetDir, finalFilename);

  let referer = req.referer || '';
  if (!referer) {
    if (videoUrl.includes('facebook') || videoUrl.includes('fbcdn')) {
      referer = 'https://www.facebook.com/';
    } else if (videoUrl.includes('youtube') || videoUrl.includes('googlevideo')) {
      referer = 'https://www.youtube.com/';
    }
  }
  let origin = '';
  if (referer) {
    try { origin = new URL(referer).origin; } catch (e) {}
  }

  const headers = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36\r\n' +
    (referer ? `Referer: ${referer}\r\n` : '') +
    (origin ? `Origin: ${origin}\r\n` : '') +
    (req.cookie ? `Cookie: ${req.cookie}\r\n` : '') +
    'Accept: */*\r\n';

  const netInputFlags = [
    '-reconnect', '1',
    '-reconnect_at_eof', '1',
    '-reconnect_streamed', '1',
    '-reconnect_delay_max', '5',
    '-multiple_requests', '1',
    '-buffer_size', '16M',
    '-rw_timeout', '15000000'
  ];

  const args = [
    '-y',
    '-fflags', '+genpts+igndts+discardcorrupt+sortdts',
    '-protocol_whitelist', 'file,http,https,tcp,tls,crypto,data'
  ];
  if (videoUrl.startsWith('http')) args.push(...netInputFlags);
  args.push('-headers', headers, '-i', videoUrl);

  if (audioUrl && audioUrl !== videoUrl) {
    if (audioUrl.startsWith('http')) args.push(...netInputFlags);
    args.push(
      '-headers', headers,
      '-i', audioUrl,
      '-c', 'copy',
      '-strict', '-2'
    );
  } else {
    args.push('-c', 'copy');
  }

  args.push(
    '-avoid_negative_ts', 'make_zero',
    '-max_muxing_queue_size', '1024',
    '-movflags', '+faststart',
    '-progress', 'pipe:1',
    outPath
  );

  activeProcess = spawn(FFMPEG_PATH, args, { windowsHide: true });
  const proc = activeProcess; // capture before any async callbacks

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
      return;
    }
    if (activeProcess === proc) activeProcess = null;
    if (code === 0 && fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
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

function deobfuscateKingCdnPath(pathStr) {
  if (!pathStr || typeof pathStr !== 'string') return pathStr;
  try {
    const qt = (e, t = 6) => e.replace(/[a-zA-Z]/g, c => String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + t) ? c : c - 26));
    return Buffer.from(qt(pathStr, 6), 'base64').toString('utf8');
  } catch (e) {
    return pathStr;
  }
}

function resolveKingCdnUrl(rawUrl, isKey = false) {
  if (!rawUrl || typeof rawUrl !== 'string') return rawUrl;
  if (rawUrl.includes('kingcdn.xyz') || rawUrl.includes('buiduyanh.online')) {
    try {
      const u = new URL(rawUrl);
      const filename = u.pathname.replace(/^\/+/, '');
      const extMatch = filename.match(/\.([a-zA-Z0-9]+)$/);
      const baseName = extMatch ? filename.slice(0, -extMatch[0].length) : filename;

      if (baseName.length > 30 && !baseName.includes('-')) {
        const deobf = deobfuscateKingCdnPath(baseName);
        if (deobf && deobf.includes('-')) {
          u.pathname = '/' + deobf + (isKey ? '.key' : (extMatch ? extMatch[0] : ''));
          return u.href;
        }
      }
    } catch (e) {}
  }
  return rawUrl;
}

function fetchHttpResource(urlStr, referer = '', isBin = false) {
  return new Promise((resolve, reject) => {
    const client = urlStr.startsWith('https') ? https : http;
    const reqHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept': '*/*'
    };
    if (referer) reqHeaders['Referer'] = referer;

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
  let targetUrl = cleanFbCdnUrl(req.videoUrl || req.url);
  if (!targetUrl) {
    sendMessage({ action: 'error', error: 'Không tìm thấy URL tải video' });
    return;
  }

  const isAudio = req.quality === 'audio' || req.soundOnly;
  const ext = isAudio ? 'mp3' : 'mp4';
  let safeTitle = (req.title || 'video').replace(/[<>:"/\\|?*]/g, '_').replace(/[\s.]+$/, '').trim().slice(0, 150).replace(/[\s.]+$/, '');
  if (!safeTitle) safeTitle = `Video_${Date.now()}`;

  const targetDir = (req.outputDir && fs.existsSync(req.outputDir)) ? req.outputDir : DOWNLOADS_DIR;
  const finalFilename = `${safeTitle}.${ext}`;
  const outPath = path.join(targetDir, finalFilename);

  let referer = req.referer || '';
  if (!referer) {
    if (targetUrl.includes('tiktok') || targetUrl.includes('byteoversea')) {
      referer = 'https://www.tiktok.com/';
    } else if (targetUrl.includes('facebook') || targetUrl.includes('fbcdn')) {
      referer = 'https://www.facebook.com/';
    } else if (targetUrl.includes('instagram') || targetUrl.includes('cdninstagram')) {
      referer = 'https://www.instagram.com/';
    }
  }

  let origin = '';
  if (referer) {
    try { origin = new URL(referer).origin; } catch (e) {}
  }

  const headers = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36\r\n' +
    (referer ? `Referer: ${referer}\r\n` : '') +
    (origin ? `Origin: ${origin}\r\n` : '') +
    (req.cookie ? `Cookie: ${req.cookie}\r\n` : '') +
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

  const isHls = targetUrl.toLowerCase().includes('.m3u8') || targetUrl.includes('kingcdn.xyz') || targetUrl.includes('buiduyanh.online');
  if (isHls && targetUrl.startsWith('http')) {
    try {
      tempSessionDir = path.join(os.tmpdir(), `savior_stream_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`);
      fs.mkdirSync(tempSessionDir, { recursive: true });

      logHost(`Fetching HLS playlist: ${targetUrl}`);
      let playlistText = await fetchHttpResource(targetUrl, referer, false);

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

      // Deobfuscate KingCDN / HLS segments and handle AES-128 keys
      const pLines = playlistText.split(/\r?\n/);
      const sanitizedLines = [];
      let keyCount = 0;

      for (let i = 0; i < pLines.length; i++) {
        let line = pLines[i];
        if (line.startsWith('#EXT-X-KEY')) {
          const uriMatch = line.match(/URI=\"([^\"]+)\"/);
          if (uriMatch) {
            const rawKeyUri = uriMatch[1];
            const absKeyUrl = new URL(rawKeyUri, targetUrl).href;
            const resolvedKeyUrl = resolveKingCdnUrl(absKeyUrl, true);
            try {
              logHost(`Fetching AES-128 key: ${resolvedKeyUrl}`);
              const keyBytes = await fetchHttpResource(resolvedKeyUrl, referer, true);
              const keyFilename = `key_${++keyCount}.key`;
              const localKeyPath = path.join(tempSessionDir, keyFilename);
              fs.writeFileSync(localKeyPath, keyBytes);
              line = line.replace(rawKeyUri, keyFilename);
            } catch (kErr) {
              logHost(`Failed to fetch key: ${kErr.message}`);
            }
          }
          sanitizedLines.push(line);
        } else if (line.trim().length > 0 && !line.startsWith('#')) {
          const rawSegUrl = new URL(line.trim(), targetUrl).href;
          const resolvedSegUrl = resolveKingCdnUrl(rawSegUrl, false);
          sanitizedLines.push(resolvedSegUrl);
        } else {
          sanitizedLines.push(line);
        }
      }

      const localM3u8Path = path.join(tempSessionDir, 'playlist.m3u8');
      fs.writeFileSync(localM3u8Path, sanitizedLines.join('\n'), 'utf8');
      ffmpegInput = localM3u8Path;
    } catch (prepErr) {
      logHost(`HLS prep error: ${prepErr.message}`);
      ffmpegInput = targetUrl;
    }
  }

  const args = [
    '-y',
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
      '-buffer_size', '16M',
      '-reconnect', '1',
      '-reconnect_at_eof', '1',
      '-reconnect_streamed', '1',
      '-reconnect_delay_max', '5',
      '-multiple_requests', '1',
      '-rw_timeout', '15000000'
    );
  }
  args.push('-headers', headers);
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

  args.push('-progress', 'pipe:1', outPath);

  function attachDirectFfmpegHandlers(proc) {
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
        return;
      }
      if (activeProcess === proc) activeProcess = null;
      if (tempSessionDir && fs.existsSync(tempSessionDir)) {
        try { fs.rmSync(tempSessionDir, { recursive: true, force: true }); } catch (e) {}
      }

      if (code === 0 && fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
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
          error: `Lỗi tải luồng: ${shortErr.slice(0, 150)}`
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
  if (!isHls && !isAudio && targetUrl.startsWith('http')) {
    startMultiThreadDownload(req, targetUrl, outPath, referer, origin, () => {
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

  const targetDir = (req.outputDir && fs.existsSync(req.outputDir)) ? req.outputDir : DOWNLOADS_DIR;
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
  const isYouTube = checkIsYouTube(targetUrl) || checkIsYouTube(req.referer) || checkIsYouTube(req.pageUrl);
  const isTikTok = checkIsTikTok(targetUrl) || checkIsTikTok(req.referer) || checkIsTikTok(req.pageUrl);
  const isFacebook = checkIsFacebook(targetUrl) || checkIsFacebook(req.referer) || checkIsFacebook(req.pageUrl);

  // Canonicalize platform URL
  if (isYouTube) {
    const canonicalYt = extractYouTubeUrl([req.pageUrl, req.referer, targetUrl, req.url]);
    if (canonicalYt) targetUrl = canonicalYt;
  } else if (isTikTok) {
    if (req.pageUrl && req.pageUrl.includes('tiktok.com')) targetUrl = req.pageUrl;
    else if (req.referer && req.referer.includes('tiktok.com')) targetUrl = req.referer;
  } else if (isFacebook) {
    if (req.pageUrl && (req.pageUrl.includes('facebook.com') || req.pageUrl.includes('fb.watch'))) targetUrl = req.pageUrl;
    else if (req.referer && (req.referer.includes('facebook.com') || req.referer.includes('fb.watch'))) targetUrl = req.referer;
  }

  // Fast Path 1: If yt-dlp is available and this is YouTube (or mainstream platform), use high-speed yt-dlp
  if (fs.existsSync(YTDLP_PATH) && (isYouTube || isTikTok || isFacebook)) {
    logHost(`Routing to startYtDlpDownload: targetUrl=${targetUrl}`);
    return startYtDlpDownload(req, targetUrl);
  }

  // Fast Path 2: Separate DASH video and audio streams via accelerated FFmpeg mux
  if (req.videoUrl && req.audioUrl && req.videoUrl !== req.audioUrl) {
    logHost('Routing to startFfmpegMux (separate video + audio streams)');
    return startFfmpegMux(req);
  }

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
    parseProgressLine
  };
}
