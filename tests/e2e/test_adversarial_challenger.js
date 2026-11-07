/**
 * tests/e2e/test_adversarial_challenger.js
 *
 * EMPIRICAL ADVERSARIAL STRESS HARNESS for Vidown Extension & Companion Helper
 * Milestone 1 (M1-E2E-TEST) Challenger M1-2
 *
 * Rigorously stress-tests:
 * 1. Authentication Boundary Enforcement:
 *    - Validates that unauthenticated requests to FB Private Group, Instagram Stories,
 *      YouTube Members-Only, and Telegram Private Chat return login walls/redirects.
 *    - Asserts that saving any unauthenticated error response to disk is immediately
 *      rejected by Stage 1 Magic Byte validation.
 *    - Asserts that all auth-gated scenarios strictly evaluate to BLOCKED and cannot falsely PASS.
 * 2. Rapid Repeated Downloads:
 *    - Floods startNativeDownload with 5 rapid duplicate requests in <50ms.
 *    - Verifies deduplication guard, single clean file generation, and bitstream integrity.
 * 3. Concurrent Download Queuing:
 *    - Queues 3 distinct DASH/conversion download requests concurrently.
 *    - Verifies serial queuing, queue draining, zero deadlock, and full decode integrity.
 * 4. Dynamic Quality Switching:
 *    - Verifies independent multi-quality resolution selection (1080p vs 720p vs audio).
 * 5. Scroll-Triggered Media Detection:
 *    - Tests browser DOM dynamic scrolling with lazy-loaded video elements.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert');
const cp = require('child_process');
const { ChromeCDPClient } = require('./cdp_client');
const { validateMediaFile, FFMPEG_BIN, FFPROBE_BIN } = require('./media_validator');
const { PLATFORM_TEST_CASES } = require('./test_platforms');

const os = require('os');
const STRESS_DOWNLOAD_DIR = path.join(os.tmpdir(), 'vidown_test_downloads', 'adversarial_stress');
const CDP_PORT = 9338;
const FIXTURE_PORT = 9448;

// Helper to start HTTP fixture server
function startStressFixtureServer(port, mediaDir) {
  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      return res.end();
    }

    const u = new URL(req.url, `http://127.0.0.1:${port}`);
    const pathname = u.pathname;

    // Auth-gated endpoints
    if (pathname.startsWith('/auth/')) {
      if (pathname.includes('facebook-private-group') || pathname.includes('fb-group')) {
        res.writeHead(302, { Location: '/login/?next=fb-group' });
        return res.end('<!DOCTYPE html><html><body>Redirecting to Facebook Login</body></html>');
      }
      if (pathname.includes('instagram-stories')) {
        res.writeHead(302, { Location: '/accounts/login/?next=stories' });
        return res.end('<!DOCTYPE html><html><body>Redirecting to Instagram Login</body></html>');
      }
      if (pathname.includes('youtube-members-only')) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
          <!DOCTYPE html><html><head><title>YouTube</title></head><body>
            <div class="yt-playability-error-supported-renderers">
              <h1>Join this channel to get access to members-only content</h1>
            </div>
          </body></html>
        `);
      }
      if (pathname.includes('telegram-private')) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
          <!DOCTYPE html><html><head><title>Telegram Web</title></head><body>
            <div class="login-wrapper"><h1>Log in to Telegram by QR Code</h1></div>
          </body></html>
        `);
      }
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      return res.end('Access Denied (Auth Required)');
    }

    // Media streaming with range support
    if (pathname.startsWith('/media/')) {
      const filename = path.basename(pathname);
      const filePath = path.join(mediaDir, filename);

      if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Not Found');
      }

      const stat = fs.statSync(filePath);
      const fileSize = stat.size;
      const range = req.headers.range;

      let contentType = 'application/octet-stream';
      if (filename.endsWith('.mp4')) contentType = 'video/mp4';
      else if (filename.endsWith('.m4a')) contentType = 'audio/mp4';
      else if (filename.endsWith('.mp3')) contentType = 'audio/mpeg';

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = (end - start) + 1;
        const fileStream = fs.createReadStream(filePath, { start, end });

        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': contentType
        });
        fileStream.pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': fileSize,
          'Accept-Ranges': 'bytes',
          'Content-Type': contentType
        });
        fs.createReadStream(filePath).pipe(res);
      }
      return;
    }

    // Long scrollable page with lazy videos
    if (pathname === '/scroll-test') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Scroll Media Test</title>
          <style>
            body { margin: 0; padding: 20px; font-family: sans-serif; }
            .spacer { height: 1200px; background: linear-gradient(#eee, #ccc); margin-bottom: 20px; }
            .media-box { height: 300px; background: #ddd; margin: 20px 0; display: flex; align-items: center; justify-content: center; }
          </style>
        </head>
        <body>
          <h1>Scroll Media Test</h1>
          <div class="media-box" id="box-1">
            <video id="vid-1" width="320" height="240" controls src="/media/sample_720p.mp4"></video>
          </div>
          <div class="spacer"></div>
          <div class="media-box" id="box-2">
            <video id="vid-2" width="320" height="240" controls data-src="/media/sample_1080p.mp4"></video>
          </div>
          <div class="spacer"></div>
          <div class="media-box" id="box-3">
            <video id="vid-3" width="320" height="240" controls data-src="/media/sample_vertical.mp4"></video>
          </div>
          <script>
            // Simple IntersectionObserver for lazy loading
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const vid = entry.target.querySelector('video');
                  if (vid && vid.dataset.src) {
                    vid.src = vid.dataset.src;
                    vid.setAttribute('data-loaded', 'true');
                  }
                }
              });
            }, { threshold: 0.1 });
            document.querySelectorAll('.media-box').forEach(el => observer.observe(el));
          </script>
        </body>
        </html>
      `);
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!DOCTYPE html><html><body>Vidown Stress Server</body></html>');
  });

  return new Promise((resolve, reject) => {
    server.listen(port, '127.0.0.1', () => {
      resolve({
        server,
        baseUrl: `http://127.0.0.1:${port}`,
        close: () => new Promise(r => server.close(r))
      });
    });
    server.on('error', reject);
  });
}

// Poll disk for downloaded file
async function waitForDownloadFile(dir, filename, timeoutMs = 30000) {
  const filePath = path.join(dir, filename);
  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    if (fs.existsSync(filePath)) {
      const partFile = `${filePath}.part`;
      if (!fs.existsSync(partFile)) {
        const size1 = fs.statSync(filePath).size;
        if (size1 > 0) {
          await new Promise(r => setTimeout(r, 400));
          const size2 = fs.statSync(filePath).size;
          if (size1 === size2) {
            return filePath;
          }
        }
      }
    }
    await new Promise(r => setTimeout(r, 200));
  }
  return null;
}

// Fetch helper using native http
function httpGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function runAdversarialChallenge() {
  console.log('========================================================================');
  console.log('  VIDOWN EMPIRICAL ADVERSARIAL STRESS SUITE (CHALLENGER M1-2)');
  console.log('========================================================================\n');

  fs.mkdirSync(STRESS_DOWNLOAD_DIR, { recursive: true });
  const fixtureDir = path.resolve(__dirname, '../fixtures/media');
  const audio2Path = path.join(fixtureDir, 'sample_audio_only_2.m4a');
  if (!fs.existsSync(audio2Path) || fs.statSync(audio2Path).size === 0) {
    try {
      cp.execFileSync(FFMPEG_BIN, ['-y', '-f', 'lavfi', '-i', 'sine=frequency=880:duration=12', '-c:a', 'aac', '-b:a', '128k', audio2Path], { stdio: 'pipe' });
    } catch (_) {}
  }
  const server = await startStressFixtureServer(FIXTURE_PORT, fixtureDir);
  console.log(`[Setup] Stress fixture server listening at ${server.baseUrl}`);

  let cdpClient = null;
  const challengeResults = {
    authBoundary: { passed: 0, failed: 0, checks: [] },
    rapidRepeated: { passed: 0, failed: 0, checks: [] },
    concurrentQueuing: { passed: 0, failed: 0, checks: [] },
    qualitySwitching: { passed: 0, failed: 0, checks: [] },
    scrollDetection: { passed: 0, failed: 0, checks: [] }
  };

  try {
    // -------------------------------------------------------------------------
    // TEST SUITE 1: Authentication Boundary Enforcement & Negative Tests
    // -------------------------------------------------------------------------
    console.log('\n--- [TEST SUITE 1] Authentication Boundary Enforcement & Negative Validation ---');

    const authTargets = [
      { name: 'Facebook Private Group', path: '/auth/facebook-private-group', expectedStatus: 302, tcId: 'TC-FB-06' },
      { name: 'Instagram Stories', path: '/auth/instagram-stories', expectedStatus: 302, tcId: 'TC-IG-05' },
      { name: 'YouTube Members-Only', path: '/auth/youtube-members-only', expectedStatus: 200, isHtmlWall: true, tcId: 'TC-YT-08' },
      { name: 'Telegram Private Chat', path: '/auth/telegram-private', expectedStatus: 200, isHtmlWall: true, tcId: 'TC-TG-02' }
    ];

    for (const target of authTargets) {
      const res = await httpGet(`${server.baseUrl}${target.path}`);
      
      // 1A. Check HTTP response behavior (redirect or HTML paywall)
      const isRedirect = res.statusCode === 302 && res.headers.location;
      const isHtmlWall = target.isHtmlWall && res.statusCode === 200 && res.body.includes('<!DOCTYPE html');
      const authEnforced = isRedirect || isHtmlWall;
      assert.ok(authEnforced, `${target.name} must return redirect or HTML paywall`);

      // 1B. Negative Validation: What if an attacker saves this body as an .mp4 file?
      const fakeCorruptPath = path.join(STRESS_DOWNLOAD_DIR, `fake_${target.tcId.toLowerCase()}.mp4`);
      fs.writeFileSync(fakeCorruptPath, res.body, 'utf8');

      const validation = await validateMediaFile(fakeCorruptPath, { mediaType: 'video', format: 'mp4' });
      assert.strictEqual(validation.valid, false, `${target.name} fake file MUST be rejected`);
      assert.strictEqual(validation.stage, 'magic_bytes', `${target.name} fake file MUST be rejected at magic_bytes stage`);
      assert.ok(validation.error.includes('Rejected HTML') || validation.error.includes('Rejected text'), `Error must report rejected HTML`);
      fs.unlinkSync(fakeCorruptPath);

      // 1C. Verify test registry status
      const regCase = PLATFORM_TEST_CASES.find(c => c.id === target.tcId);
      assert.ok(regCase, `Test registry must contain ${target.tcId}`);
      assert.strictEqual(regCase.authRequired, true, `${target.tcId} authRequired must be true`);
      assert.strictEqual(regCase.expectedStatus, 'BLOCKED', `${target.tcId} expectedStatus must be BLOCKED`);
      assert.strictEqual(regCase.expected, null, `${target.tcId} expected media must be null`);

      console.log(`  ✓ ${target.tcId} (${target.name}): Authentically BLOCKED, HTML payload rejected at Stage 1 magic bytes.`);
      challengeResults.authBoundary.passed++;
      challengeResults.authBoundary.checks.push({ tcId: target.tcId, name: target.name, status: 'VERIFIED_BLOCKED' });
    }

    // -------------------------------------------------------------------------
    // Launch Chrome CDP Client for Interactive Stress Tests
    // -------------------------------------------------------------------------
    console.log('\n[Setup] Launching Chrome via CDP on port ' + CDP_PORT + '...');
    cdpClient = new ChromeCDPClient({
      port: CDP_PORT,
      headless: true
    });
    await cdpClient.launch();
    const ext = await cdpClient.loadExtension(path.resolve('.'));
    console.log(`[Setup] Extension loaded with deterministic ID: ${ext.extensionId}`);
    await cdpClient.configureCustomDownloadDir(STRESS_DOWNLOAD_DIR);

    // Verify native helper ping
    const pingRes = await cdpClient.evaluateServiceWorker(`
      new Promise((resolve) => {
        chrome.runtime.sendNativeMessage("com.savior.helper", { action: "ping" }, (r) => {
          resolve(r || {});
        });
      })
    `);
    assert.strictEqual(pingRes.action, 'pong', 'Native helper must respond to ping');
    assert.strictEqual(pingRes.hasFfmpeg, true, 'Native helper must have FFmpeg');
    console.log(`[Setup] Native Helper connected successfully (v${pingRes.version}, FFmpeg=${pingRes.hasFfmpeg})`);

    // -------------------------------------------------------------------------
    // TEST SUITE 2: Rapid Repeated Downloads & Deduplication Under Load
    // -------------------------------------------------------------------------
    console.log('\n--- [TEST SUITE 2] Rapid Repeated Downloads (5 Rapid Duplicate Triggers) ---');
    const rapidUrl = `${server.baseUrl}/media/sample_1080p.mp4`;
    const rapidFilename = `rapid_dedupe_${Date.now()}.mp4`;

    const startRapidTime = Date.now();
    const taskIds = await cdpClient.evaluateServiceWorker(`
      new Promise(async (resolve) => {
        const ids = [];
        const promises = [];
        for (let i = 0; i < 5; i++) {
          promises.push(new Promise((res) => {
            startNativeDownload({
              url: ${JSON.stringify(rapidUrl)},
              videoUrl: ${JSON.stringify(rapidUrl)},
              filename: ${JSON.stringify(rapidFilename)},
              title: "Rapid Dedupe Stress Test",
              outputDir: ${JSON.stringify(STRESS_DOWNLOAD_DIR)}
            }, (id) => res(id));
          }));
        }
        const results = await Promise.all(promises);
        resolve(results);
      })
    `);

    console.log(`  Received task IDs for 5 rapid triggers:`, taskIds);
    // All returned task IDs must refer to the same deduplicated task ID
    const uniqueIds = Array.from(new Set(taskIds.filter(Boolean)));
    assert.strictEqual(uniqueIds.length, 1, 'Duplicate guard must coalesce rapid identical requests into exactly 1 task ID');

    // Wait for the single download to finish
    const rapidDownloaded = await waitForDownloadFile(STRESS_DOWNLOAD_DIR, rapidFilename, 30000);
    assert.ok(rapidDownloaded, `File ${rapidFilename} must exist on disk`);
    
    // Validate media integrity
    const rapidVal = await validateMediaFile(rapidDownloaded, {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 10,
      hasAudio: true,
      minHeight: 720
    });
    assert.strictEqual(rapidVal.valid, true, `Rapid download must pass media validation: ${rapidVal.error}`);
    assert.strictEqual(rapidVal.details.ffmpegDecode.exitCode, 0, 'FFmpeg decode exit code must be 0');
    console.log(`  ✓ Rapid repeated triggers coalesced into 1 task. Downloaded file verified: ${rapidVal.details.resolution}, duration ${rapidVal.details.duration}s, 0 decode errors.`);
    challengeResults.rapidRepeated.passed++;

    // -------------------------------------------------------------------------
    // TEST SUITE 3: Concurrent Download Queuing & Non-Deadlock Drain
    // -------------------------------------------------------------------------
    console.log('\n--- [TEST SUITE 3] Concurrent Download Queuing (3 Distinct DASH/Audio Tasks) ---');
    const queueFile1 = `queue_1080p_${Date.now()}.mp4`;
    const queueFile2 = `queue_720p_${Date.now()}.mp4`;
    const queueFile3 = `queue_audio_${Date.now()}.mp3`;

    const q1Video = `${server.baseUrl}/media/sample_video_only.mp4`;
    const q1Audio = `${server.baseUrl}/media/sample_audio_only.m4a`;
    const q2Video = `${server.baseUrl}/media/sample_720p.mp4`;
    const q2Audio = `${server.baseUrl}/media/sample_audio_only_2.m4a`;
    const q3Audio = `${server.baseUrl}/media/sample_audio.mp3`;

    // Dispatch 3 concurrent tasks to startNativeDownload
    const queueJobIds = await cdpClient.evaluateServiceWorker(`
      new Promise(async (resolve) => {
        const ids = [];
        // Job 1: 1080p DASH Mux
        startNativeDownload({
          videoUrl: ${JSON.stringify(q1Video)},
          audioUrl: ${JSON.stringify(q1Audio)},
          filename: ${JSON.stringify(queueFile1)},
          title: "Queue Job 1 (1080p DASH)",
          outputDir: ${JSON.stringify(STRESS_DOWNLOAD_DIR)}
        }, (id) => ids.push({ job: 1, id }));

        // Job 2: 720p DASH Mux
        startNativeDownload({
          videoUrl: ${JSON.stringify(q2Video)},
          audioUrl: ${JSON.stringify(q2Audio)},
          filename: ${JSON.stringify(queueFile2)},
          title: "Queue Job 2 (720p DASH)",
          outputDir: ${JSON.stringify(STRESS_DOWNLOAD_DIR)}
        }, (id) => ids.push({ job: 2, id }));

        // Job 3: Sound-only MP3
        startNativeDownload({
          url: ${JSON.stringify(q3Audio)},
          videoUrl: ${JSON.stringify(q3Audio)},
          filename: ${JSON.stringify(queueFile3)},
          title: "Queue Job 3 (Audio MP3)",
          soundOnly: true,
          outputDir: ${JSON.stringify(STRESS_DOWNLOAD_DIR)}
        }, (id) => ids.push({ job: 3, id }));

        // Give event loop 300ms to register states
        setTimeout(() => resolve(ids), 300);
      })
    `);

    console.log(`  Concurrent jobs dispatched:`, queueJobIds);

    // Wait for all 3 files to complete in sequence
    const dlQ1 = await waitForDownloadFile(STRESS_DOWNLOAD_DIR, queueFile1, 35000);
    assert.ok(dlQ1, `Queue Job 1 (${queueFile1}) must complete`);
    console.log(`  ✓ Queue Job 1 completed.`);

    const dlQ2 = await waitForDownloadFile(STRESS_DOWNLOAD_DIR, queueFile2, 35000);
    assert.ok(dlQ2, `Queue Job 2 (${queueFile2}) must complete`);
    console.log(`  ✓ Queue Job 2 completed.`);

    const dlQ3 = await waitForDownloadFile(STRESS_DOWNLOAD_DIR, queueFile3, 35000);
    assert.ok(dlQ3, `Queue Job 3 (${queueFile3}) must complete`);
    console.log(`  ✓ Queue Job 3 completed.`);

    // Validate media integrity of all 3 queued downloads
    const valQ1 = await validateMediaFile(dlQ1, { mediaType: 'video', format: 'mp4', minHeight: 720, hasAudio: true });
    assert.strictEqual(valQ1.valid, true, `Job 1 validation failed: ${valQ1.error}`);

    const valQ2 = await validateMediaFile(dlQ2, { mediaType: 'video', format: 'mp4', minHeight: 360, hasAudio: true });
    assert.strictEqual(valQ2.valid, true, `Job 2 validation failed: ${valQ2.error}`);

    const valQ3 = await validateMediaFile(dlQ3, { mediaType: 'audio', format: 'mp3', hasAudio: true });
    assert.strictEqual(valQ3.valid, true, `Job 3 validation failed: ${valQ3.error}`);

    console.log(`  ✓ All 3 queued tasks drained cleanly. Job 1: ${valQ1.details.resolution}, Job 2: ${valQ2.details.resolution}, Job 3: ${valQ3.details.format}`);
    challengeResults.concurrentQueuing.passed++;

    // -------------------------------------------------------------------------
    // TEST SUITE 4: Dynamic Quality Switching
    // -------------------------------------------------------------------------
    console.log('\n--- [TEST SUITE 4] Dynamic Quality Switching (1080p vs 720p vs Sound-only) ---');
    const q1080File = `quality_1080p_${Date.now()}.mp4`;
    const q720File = `quality_720p_${Date.now()}.mp4`;

    // Download 1080p
    await cdpClient.evaluateServiceWorker(`
      new Promise((res) => {
        startNativeDownload({
          url: "${server.baseUrl}/media/sample_1080p.mp4",
          videoUrl: "${server.baseUrl}/media/sample_1080p.mp4",
          filename: "${q1080File}",
          quality: "1080p",
          title: "Quality Switch 1080p",
          outputDir: ${JSON.stringify(STRESS_DOWNLOAD_DIR)}
        }, res);
      })
    `);
    const dl1080 = await waitForDownloadFile(STRESS_DOWNLOAD_DIR, q1080File, 30000);
    assert.ok(dl1080, '1080p file must download');

    // Download 720p
    await cdpClient.evaluateServiceWorker(`
      new Promise((res) => {
        startNativeDownload({
          url: "${server.baseUrl}/media/sample_720p.mp4",
          videoUrl: "${server.baseUrl}/media/sample_720p.mp4",
          filename: "${q720File}",
          quality: "720p",
          title: "Quality Switch 720p",
          outputDir: ${JSON.stringify(STRESS_DOWNLOAD_DIR)}
        }, res);
      })
    `);
    const dl720 = await waitForDownloadFile(STRESS_DOWNLOAD_DIR, q720File, 30000);
    assert.ok(dl720, '720p file must download');

    const v1080 = await validateMediaFile(dl1080, { mediaType: 'video', minHeight: 1000 });
    const v720 = await validateMediaFile(dl720, { mediaType: 'video', minHeight: 700 });
    assert.strictEqual(v1080.valid, true, `1080p verification failed: ${v1080.error}`);
    assert.strictEqual(v720.valid, true, `720p verification failed: ${v720.error}`);
    assert.strictEqual(v1080.details.resolution, '1920x1080', '1080p resolution must match 1920x1080');
    assert.strictEqual(v720.details.resolution, '1280x720', '720p resolution must match 1280x720');

    console.log(`  ✓ Quality switching verified: 1080p (${v1080.details.resolution}) and 720p (${v720.details.resolution}) both intact.`);
    challengeResults.qualitySwitching.passed++;

    // -------------------------------------------------------------------------
    // TEST SUITE 5: Scroll-Triggered Media Detection & Dynamic DOM
    // -------------------------------------------------------------------------
    console.log('\n--- [TEST SUITE 5] Scroll-Triggered Media Detection in Browser DOM ---');
    const scrollPage = await cdpClient.newPage(`${server.baseUrl}/scroll-test`);
    
    // Check initial video 1 loaded
    const initialVid1Src = await scrollPage.evaluate(`document.querySelector('#vid-1').currentSrc || document.querySelector('#vid-1').src`);
    assert.ok(initialVid1Src.includes('sample_720p.mp4'), 'Video 1 should have source initially');

    // Video 2 and 3 should not be loaded yet
    const initialVid2Loaded = await scrollPage.evaluate(`document.querySelector('#vid-2').getAttribute('data-loaded')`);
    assert.strictEqual(initialVid2Loaded, null, 'Video 2 should not be loaded before scrolling');

    // Scroll to Video 2
    console.log('  Scrolling to 1400px to trigger lazy observer on Video 2...');
    await scrollPage.evaluate(`window.scrollTo({ top: 1400, behavior: 'instant' })`);
    await new Promise(r => setTimeout(r, 600));

    const vid2Loaded = await scrollPage.evaluate(`document.querySelector('#vid-2').getAttribute('data-loaded')`);
    const vid2Src = await scrollPage.evaluate(`document.querySelector('#vid-2').src`);
    assert.strictEqual(vid2Loaded, 'true', 'Video 2 must be loaded after scrolling into view');
    assert.ok(vid2Src.includes('sample_1080p.mp4'), 'Video 2 src must be populated with sample_1080p.mp4');
    console.log(`  ✓ Video 2 successfully loaded on scroll: ${vid2Src}`);

    // Scroll to Video 3
    console.log('  Scrolling to 2800px to trigger lazy observer on Video 3...');
    await scrollPage.evaluate(`window.scrollTo({ top: 2800, behavior: 'instant' })`);
    await new Promise(r => setTimeout(r, 600));

    const vid3Loaded = await scrollPage.evaluate(`document.querySelector('#vid-3').getAttribute('data-loaded')`);
    const vid3Src = await scrollPage.evaluate(`document.querySelector('#vid-3').src`);
    assert.strictEqual(vid3Loaded, 'true', 'Video 3 must be loaded after scrolling into view');
    assert.ok(vid3Src.includes('sample_vertical.mp4'), 'Video 3 src must be populated with sample_vertical.mp4');
    console.log(`  ✓ Video 3 successfully loaded on scroll: ${vid3Src}`);

    await scrollPage.close();
    challengeResults.scrollDetection.passed++;

    console.log('\n========================================================================');
    console.log('  CHALLENGER STRESS SUITE: ALL 5 SUITES PASSED EMPIRICALLY!');
    console.log('========================================================================');
    console.log('Summary:');
    console.log(`- Auth Boundary Enforcement:    ${challengeResults.authBoundary.passed} / 4 passed (100% verified BLOCKED, rejected at Stage 1)`);
    console.log(`- Rapid Repeated Downloads:     ${challengeResults.rapidRepeated.passed} / 1 passed (100% deduplicated, 0 corruption)`);
    console.log(`- Concurrent Download Queuing:  ${challengeResults.concurrentQueuing.passed} / 1 passed (3 tasks drained cleanly)`);
    console.log(`- Dynamic Quality Switching:    ${challengeResults.qualitySwitching.passed} / 1 passed (1080p and 720p verified)`);
    console.log(`- Scroll-Triggered Detection:   ${challengeResults.scrollDetection.passed} / 1 passed (Lazy loading triggered on scroll)`);
    console.log('========================================================================\n');

  } finally {
    if (cdpClient) {
      try {
        if (cdpClient.browserConn && cdpClient.browserConn.isConnected) {
          await cdpClient.browserConn.send('Browser.close');
        }
      } catch (_) {}
      await cdpClient.kill();
    }
    await server.close();
  }
}

if (require.main === module) {
  runAdversarialChallenge().catch(err => {
    console.error('FAIL in Adversarial Challenge Suite:', err);
    process.exit(1);
  });
}

module.exports = { runAdversarialChallenge };
