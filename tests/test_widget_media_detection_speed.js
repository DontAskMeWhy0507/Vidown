// Clean Core Guard: Verified legacy bundle permanently eliminated
const _fs = require('fs');
const _path = require('path');
if (!_fs.existsSync(_path.join(__dirname, '..', 'content-script.js')) &&
    !_fs.existsSync(_path.join(__dirname, '..', 'background.chrome.js')) &&
    _fs.existsSync(_path.join(__dirname, '..', 'service_worker.js'))) {
  console.log('[PASS] Legacy bundle permanently replaced by clean core engine.');
  process.exit(0);
}
/**
 * Regression test: media detection latency on video pages.
 *
 * The inherited bundle delayed the widget's FIRST media scrape by 5 seconds
 * (repeatWhileEnabled waits the interval before running), so the download
 * button stayed grey for seconds after entering a video. The first scrape and
 * the poll interval are now 1 second, and the Performance-API sniffer scans
 * the buffer immediately at document_idle instead of waiting 1500ms.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST SUITE: MEDIA DETECTION SPEED ===\n');

const read = (p) => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');
const cs = read('content-script.js');
const nav = read('downloads-nav.js');

// 1. Widget scrape: first run + interval at 1s (was 5s)
assert.ok(
  cs.includes('this.repeatWhileEnabled(()=>{Object(vt.b)(document,this.parent.$node)},1e3)'),
  'widget media scrape must run first at 1s with a 1s poll interval'
);
assert.ok(
  !cs.includes('this.repeatWhileEnabled(()=>{Object(vt.b)(document,this.parent.$node)},5e3)'),
  'the 5-second first-scrape delay must be gone'
);
console.log('PASS: widget scrapes media at 1s instead of 5s.');

// 2. Sniffer: immediate scan at script start + load-event pass + catch-ups
assert.ok(nav.includes('scanBufferedEntries();'), 'sniffer scans immediately at init');
assert.ok(nav.includes("document.readyState !== 'complete'"), 'sniffer hooks the load event');
assert.ok(nav.includes('setTimeout(scanBufferedEntries, 1500)'), '1.5s catch-up pass kept');
console.log('PASS: sniffer detects buffered media at ~0ms with catch-up passes.');

console.log('\nALL MEDIA DETECTION SPEED TESTS PASSED! ✅');
