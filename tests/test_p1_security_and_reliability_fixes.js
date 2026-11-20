/**
 * Regression Test Suite: P1 Security, Concurrency & Reliability Audit Fixes (AUD-006 .. AUD-011)
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
const host = require('../native/host');
const outputFiles = require('../native/lib/output-files');

console.log('=== TEST SUITE: P1 SECURITY & RELIABILITY REGRESSIONS ===\n');

(async () => {
  const bgSrc = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');

  // ------------------------------------------------------------------
  // AUD-006: isGenericFeedTitle & isFeedPageUrl hoisted to module scope
  // ------------------------------------------------------------------
  console.log('[AUD-006] Module-scoped isGenericFeedTitle & isFeedPageUrl...');
  {
    assert.ok(
      /\nfunction isGenericFeedTitle\(str\)/.test(bgSrc),
      'isGenericFeedTitle must be declared at top-level module scope'
    );
    assert.ok(
      /\nfunction isFeedPageUrl\(u\)/.test(bgSrc),
      'isFeedPageUrl must be declared at top-level module scope'
    );
  }
  console.log('✓ AUD-006 passed.');

  // ------------------------------------------------------------------
  // AUD-007: chrome.runtime.onMessage privilege separation
  // ------------------------------------------------------------------
  console.log('[AUD-007] Privilege separation in chrome.runtime.onMessage...');
  {
    assert.ok(
      bgSrc.includes('function isPrivilegedExtensionSender(sender)') &&
      bgSrc.includes('PRIVILEGED_RUNTIME_ACTIONS.has(action) && !isPrivilegedExtensionSender(sender)'),
      'onMessage must enforce isPrivilegedExtensionSender for privileged actions'
    );
    assert.ok(
      bgSrc.includes("(isPrivilegedExtensionSender(sender) ? req.outputDir : '')"),
      'downloadNative must ignore req.outputDir from content scripts'
    );
  }
  console.log('✓ AUD-007 passed.');

  // ------------------------------------------------------------------
  // AUD-008: 100% of DNR rules in setupAnti403Rules() must scope initiatorDomains
  // ------------------------------------------------------------------
  console.log('[AUD-008] All DNR rules in setupAnti403Rules() scope initiatorDomains...');
  {
    const m = bgSrc.match(/addRules:\s*\[([\s\S]*?)\n      \]\n    \}\)/);
    assert.ok(m, 'Could not locate DNR addRules block');
    const rules = m[1].split(/\n        \{\n          id:/).slice(1);
    assert.ok(rules.length >= 25, `Expected >=25 DNR rules, got ${rules.length}`);
    for (const r of rules) {
      const idM = r.match(/^\s*(\d+)/);
      assert.ok(
        r.includes('initiatorDomains:'),
        `DNR rule ${idM ? idM[1] : '?'} is missing initiatorDomains`
      );
    }
  }
  console.log('✓ AUD-008 passed.');

  // ------------------------------------------------------------------
  // AUD-009: validateRelayCoverage empty check, task-scoped .part, redirect cap, single-stream timeout
  // ------------------------------------------------------------------
  console.log('[AUD-009] Concurrency & data integrity (empty coverage, redirect cap, timeout, isolated .part)...');
  {
    // 1. validateRelayCoverage([], 1024) must throw
    assert.throws(
      () => outputFiles.validateRelayCoverage([], 1024),
      /Sparse file: empty coverage/,
      'validateRelayCoverage must reject empty intervals when total > 0'
    );
    assert.strictEqual(outputFiles.validateRelayCoverage([[0, 99]], 100), true);

    // 2. Concurrent stream relay jobs with same filename must use distinct .part files
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vidown-aud009-'));
    try {
      host.handleMessage({ action: 'startStreamRelay', taskId: 'jobA', filename: 'same.mp4', outputDir: tmpDir, total: 4 });
      host.handleMessage({ action: 'startStreamRelay', taskId: 'jobB', filename: 'same.mp4', outputDir: tmpDir, total: 4 });
      const jobA = host.activeStreamJobs.get('jobA');
      const jobB = host.activeStreamJobs.get('jobB');
      assert.ok(jobA && jobB, 'Both concurrent stream relay jobs must be active');
      assert.notStrictEqual(jobA.partPath, jobB.partPath, 'Concurrent jobs with same filename must not share .part path');
      host.cleanupStreamJob('jobA', true);
      host.cleanupStreamJob('jobB', true);

      // 3. downloadFileSingleStream must abort on infinite redirect loop
      const loopServer = http.createServer((req, res) => {
        res.writeHead(302, { Location: '/loop' });
        res.end();
      });
      await new Promise((r) => loopServer.listen(0, '127.0.0.1', r));
      try {
        let loopErr = null;
        try {
          await host.downloadFileSingleStream({
            url: `http://127.0.0.1:${loopServer.address().port}/loop`,
            outPath: path.join(tmpDir, 'loop.mp4'),
            headers: {},
            maxRedirects: 3
          });
        } catch (e) {
          loopErr = e;
        }
        assert.ok(loopErr && /Too many redirects/i.test(loopErr.message), 'downloadFileSingleStream must cap redirects');
      } finally {
        await new Promise((r) => loopServer.close(r));
      }

      // 4. downloadFileSingleStream must abort on stalled response body timeout
      const stallServer = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'video/mp4', 'Content-Length': '10000' });
        res.write(Buffer.alloc(16, 0x41));
        // intentionally never end
      });
      await new Promise((r) => stallServer.listen(0, '127.0.0.1', r));
      try {
        let timeoutErr = null;
        try {
          await host.downloadFileSingleStream({
            url: `http://127.0.0.1:${stallServer.address().port}/stall`,
            outPath: path.join(tmpDir, 'stall.mp4'),
            headers: {},
            timeoutMs: 250,
            bodyTimeoutMs: 250
          });
        } catch (e) {
          timeoutErr = e;
        }
        assert.ok(timeoutErr, 'downloadFileSingleStream must fail on stalled server');
      } finally {
        stallServer.closeAllConnections?.();
        await new Promise((r) => stallServer.close(r));
      }
    } finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  }
  console.log('✓ AUD-009 passed.');

  // ------------------------------------------------------------------
  // AUD-010: clearHistory cancels native/relay tasks & serializes storage writes
  // ------------------------------------------------------------------
  console.log('[AUD-010] clearHistory cancellation & serialized downloadHistory writes...');
  {
    assert.ok(
      bgSrc.includes("activeNativePort.postMessage({ action: 'cancel' })") &&
      bgSrc.includes('nativeDownloadQueue.length = 0;'),
      'clearHistory must cancel active native jobs and empty queue'
    );
    assert.ok(
      bgSrc.includes("historyWritePromise = historyWritePromise\n        .then(() => new Promise((resolve) => {\n          try { chrome.storage.local.set({ downloadHistory: [] }"),
      'clearHistory must serialize downloadHistory reset through historyWritePromise'
    );
  }
  console.log('✓ AUD-010 passed.');

  // ------------------------------------------------------------------
  // AUD-011: widget-manager.js fallback renderer must not use innerHTML for media metadata
  // ------------------------------------------------------------------
  console.log('[AUD-011] widget-manager.js fallback renderer eliminates innerHTML XSS...');
  {
    const widgetSrc = fs.readFileSync(path.join(ROOT, 'src/content/widget/widget-manager.js'), 'utf8');
    assert.ok(
      !widgetSrc.includes('lbl.innerHTML = "<strong>" + (bucket.i18n_type'),
      'widget-manager.js must not concatenate bucket.type into lbl.innerHTML'
    );
    assert.ok(
      !widgetSrc.includes("q.innerHTML = '<strong class=\"media-name '"),
      'widget-manager.js must not concatenate media quality/resolution/ext into q.innerHTML'
    );
    assert.ok(
      widgetSrc.includes('nameEl.textContent = String(m.i18n_quality || m.quality || "Default")'),
      'widget-manager.js must use textContent for media quality labels'
    );
  }
  console.log('✓ AUD-011 passed.');

  console.log('\n======================================================');
  console.log('ALL P1 SECURITY & RELIABILITY REGRESSION TESTS PASSED!');
  console.log('======================================================\n');
})().catch((err) => {
  console.error('FAILED:', err);
  process.exit(1);
});
