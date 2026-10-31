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
const csPath = fs.existsSync(path.join(__dirname, '..', 'content-script.js'))
  ? 'content-script.js'
  : 'content/content_main.js';
const cs = read(csPath);
const nav = read('downloads-nav.js');

// 1. Widget scrape: first run + interval at ~0-1s (was 5s)
if (cs.includes('this.repeatWhileEnabled')) {
  assert.ok(
    cs.includes('this.repeatWhileEnabled(()=>{Object(vt.b)(document,this.parent.$node)},1e3)'),
    'widget media scrape must run first at 1s with a 1s poll interval'
  );
  assert.ok(
    !cs.includes('this.repeatWhileEnabled(()=>{Object(vt.b)(document,this.parent.$node)},5e3)'),
    'the 5-second first-scrape delay must be gone'
  );
} else {
  assert.ok(cs.includes("document.querySelectorAll('video').forEach(processVideoElement)"), 'Immediate scrape at 0ms');
  assert.ok(!cs.includes('5e3'), 'No 5s artificial delay');
}
console.log('PASS: widget scrapes media at ~0-1s instead of 5s.');

// 2. Sniffer: immediate scan at script start + load-event pass + catch-ups
assert.ok(nav.includes('scanBufferedEntries();'), 'sniffer scans immediately at init');
assert.ok(nav.includes("document.readyState !== 'complete'"), 'sniffer hooks the load event');
assert.ok(nav.includes('setTimeout(scanBufferedEntries, 1500)'), '1.5s catch-up pass kept');
console.log('PASS: sniffer detects buffered media at ~0ms with catch-up passes.');

console.log('\nALL MEDIA DETECTION SPEED TESTS PASSED! ✅');
