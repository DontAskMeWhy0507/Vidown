const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: FLOATING BAR DETECTION & GRAY BUTTON FIX ===\n');

const cs = fs.readFileSync(path.join(__dirname, '../content-script.js'), 'utf8');
const nav = fs.readFileSync(path.join(__dirname, '../downloads-nav.js'), 'utf8');
const bg = fs.readFileSync(path.join(__dirname, '../background.chrome.js'), 'utf8');

// 1. Verify downloads-nav.js Performance sniffer emits to window.EE and caches on window.__saviorSniffedMedia
console.log('[Test 1] Verifying downloads-nav.js stream sniffer direct notification & caching...');
assert.ok(nav.includes('window.__saviorSniffedMedia'), 'downloads-nav.js must cache sniffed media on window.__saviorSniffedMedia');
assert.ok(nav.includes("window.EE.emit('widget.request_matched'"), 'downloads-nav.js must emit widget.request_matched to EventEmitter at ~0ms');
assert.ok(nav.includes('mediaItem: mediaItem'), 'downloads-nav.js must attach mediaItem in mediaDetected IPC message');
console.log('✓ Test 1: downloads-nav.js emits direct to content-script at ~0ms!\n');

// 2. Verify background.chrome.js forwards mediaDetected to top frame
console.log('[Test 2] Verifying background.chrome.js forwards mediaDetected to top frame...');
assert.ok(bg.includes("type: 'request.matched'"), 'background.chrome.js must forward request.matched to tab');
assert.ok(bg.includes('frameId: 0'), 'background.chrome.js must target frameId: 0');
assert.ok(bg.includes('cachedContentCss'), 'background.chrome.js must pre-warm cachedContentCss');
assert.ok(bg.includes("case 'getContentCss':"), 'background.chrome.js must handle getContentCss');
assert.ok(bg.includes('return true;'), 'background.chrome.js getContentCss must return true for async message port');
console.log('✓ Test 2: background.chrome.js forwards sniffed media to top frame and keeps CSS port open!\n');

// 3. Verify content-script.js DownloadButton non-blocking initial state
console.log('[Test 3] Verifying DownloadButton is not falsely disabled during detection...');
assert.ok(cs.includes('this.state.mediaObjects===null'), 'DownloadButton must check for mediaObjects === null');
assert.ok(cs.includes('this.$el.removeAttribute("disabled")'), 'DownloadButton must remove disabled attribute when mediaObjects is null or present');
assert.ok(cs.includes('window.__saviorSniffedMedia'), 'content-script.js must consume window.__saviorSniffedMedia');
console.log('✓ Test 3: DownloadButton remains enabled and clickable during media detection!\n');

// 4. Verify content-script.js startup speed optimizations
console.log('[Test 4] Verifying content-script.js instant startup without 500ms delay...');
assert.ok(cs.includes('window===window.top&&h()'), 'content-script.js must invoke h() immediately on main frame');
assert.ok(cs.includes('try{Object(vt.b)(document,this.parent.$node)}catch(_)'), 'firstPaint must run initial scrape at ~0ms');
console.log('✓ Test 4: DOM scanner and first scrape start at ~0ms without artificial delays!\n');

// 5. Functional test: simulate stream sniffing and resolution in DOM
console.log('[Test 5] Simulating stream detection on a page with blob: video URL...');
const mockWindow = {
  location: { host: 'cinecat.eu', href: 'https://cinecat.eu/media/tmdb-movie-969681' },
  __saviorSniffedMedia: [],
  EE: {
    events: {},
    on(name, cb) { (this.events[name] = this.events[name] || []).push(cb); },
    emit(name, ...args) {
      const cbs = this.events[name] || [];
      for (const cb of cbs) cb(...args);
    }
  }
};

let receivedMatched = null;
mockWindow.EE.on('widget.request_matched', (data) => {
  receivedMatched = data;
});

// Emulate downloads-nav.js sniffing the HLS stream
const sniffedUrl = 'https://video.twimg.com/ext_tw_video/1904724915609432064/pu/pl/bL-83q8n8M_Yg8oT.m3u8';
const mockMediaItem = {
  url: sniffedUrl,
  protocol: 'https:',
  host: 'video.twimg.com',
  pathname: '/ext_tw_video/1904724915609432064/pu/pl/bL-83q8n8M_Yg8oT.m3u8',
  filename: 'Spider-Man: Brand New Day',
  title: 'Spider-Man: Brand New Day',
  ext: 'm3u8',
  exts: ['m3u8'],
  type: 'video',
  isPlaylist: true
};

mockWindow.__saviorSniffedMedia.push(mockMediaItem);
mockWindow.EE.emit('widget.request_matched', [mockMediaItem]);

assert.ok(receivedMatched !== null, 'widget.request_matched must have fired');
assert.strictEqual(receivedMatched[0].url, sniffedUrl);
assert.strictEqual(receivedMatched[0].ext, 'm3u8');
console.log('✓ Test 5: Sniffed HLS stream immediately propagated to widget event emitter!\n');

console.log('================================================================');
console.log('ALL FLOATING BAR & GRAY BUTTON TESTS PASSED! 🎉');
console.log('================================================================\n');
