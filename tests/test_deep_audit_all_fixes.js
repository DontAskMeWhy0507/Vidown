'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');

// 1. Batch 1: manifest.json, background.chrome.js & scripts/*.js
(function testBatch1() {
  const manifest = read('manifest.json');
  assert.ok(!manifest.includes('"file://*"'), 'manifest.json must use valid "file:///*" pattern');
  assert.ok(manifest.includes('"file:///*"'), 'manifest.json must include "file:///*"');

  const bg = read('background.chrome.js');
  assert.strictEqual(bg, read('dist/unpacked/background.chrome.js'), 'dist/unpacked/background.chrome.js must stay synced');
  assert.ok(!bg.includes('cdn.coccoc.com/static/videos/browser/onboarding-en-to-vi.mp4'), 'DEFAULT_TEMPLATES must not embed cdn.coccoc.com video');
  assert.ok(bg.includes('_windowResolvers: new Set()'), 'Stream Relay task must initialize _windowResolvers upfront');
  assert.ok(bg.includes('nativeDownloadQueue.length = 0;'), 'onDisconnect must clear nativeDownloadQueue');
  assert.ok(bg.includes('if (purgedTaskIds.has(String(fakeId)) || !activeDownloads.has(fakeId) || task.state === \'canceled\')'), 'postDownload must guard against cancel during cookie fetch');
  assert.ok(bg.includes('escapedUrl.length <= 512'), 'Stream Relay DNR must avoid RE2 overflow on long CDN URLs');

  // Verify isPrivilegedExtensionSender allows downloads.html (even with sender.tab set) while blocking web pages
  const fnStart = bg.indexOf('function isPrivilegedExtensionSender(sender)');
  const fnEnd = bg.indexOf('const PRIVILEGED_RUNTIME_ACTIONS', fnStart);
  const fnSrc = bg.slice(fnStart, fnEnd);
  const checkSender = new Function('chrome', `${fnSrc}; return isPrivilegedExtensionSender;`)({
    runtime: { id: 'ext123', getURL: (p) => `chrome-extension://ext123/${p}` }
  });
  assert.strictEqual(checkSender({ id: 'ext123', url: 'chrome-extension://ext123/downloads/downloads.html', tab: { id: 5 } }), true, 'Extension tab (downloads.html) must be allowed');
  assert.strictEqual(checkSender({ id: 'ext123', url: 'chrome-extension://ext123/popup/popup.html' }), true, 'Popup must be allowed');
  assert.strictEqual(checkSender({ id: 'ext123', url: 'https://evil.example/page', tab: { id: 5 } }), false, 'Web content script must be blocked');
  assert.strictEqual(checkSender({ id: 'otherExt', url: 'chrome-extension://ext123/popup/popup.html' }), false, 'Foreign extension ID must be blocked');

  assert.ok(read('scripts/package_release.js').includes('Math.max(1980, Math.min(2107, year))'), 'package_release must clamp DOS year >= 1980');
  assert.ok(read('scripts/test_runner.js').includes("err.signal === 'SIGKILL'"), 'test_runner must detect SIGKILL timeout');
  assert.ok(read('scripts/build_inject.js').includes('fs.rmSync(DEST_INJECT'), 'build_inject must clean stale files');
})();

// 2. Batch 2: native/*
(function testBatch2() {
  const host = require(path.join(ROOT, 'native/host.js'));
  assert.strictEqual(host.isSafeRemoteHlsUrl('http://[::127.0.0.1]/a.m3u8'), false, 'IPv4-compatible IPv6 loopback must be blocked');
  assert.strictEqual(host.isSafeRemoteHlsUrl('http://[64:ff9b::127.0.0.1]/a.m3u8'), false, 'NAT64 loopback must be blocked');
  assert.strictEqual(host.isSafeRemoteHlsUrl('http://[ff02::1]/a.m3u8'), false, 'IPv6 multicast must be blocked');
  assert.strictEqual(host.isSafeRemoteHlsUrl('https://cdn.example.com/v.m3u8'), true, 'Public HTTPS URL must be allowed');

  const hostSrc = read('native/host.js');
  assert.ok(hostSrc.includes("if (bUrl.protocol === 'https:' && tUrl.protocol !== 'https:') return false;"), 'isSameOriginOrSubdomain must block HTTPS->HTTP downgrade');
  assert.ok(hostSrc.includes("if (prepErr && /Blocked unsafe/i.test(String(prepErr.message || '')))"), 'HLS catch must not bypass SSRF into FFmpeg');
  assert.ok(hostSrc.includes('if (selected) registerAuthorizedDir(selected);'), 'macOS browseFolder must register selected directory');
  assert.ok(!hostSrc.includes('const allowFileProto = !videoUrl.startsWith'), 'fallbackToDirectFfmpegMux must not enable file protocol');

  const outFiles = require(path.join(ROOT, 'native/lib/output-files.js'));
  assert.ok(outFiles.sanitizeFilename('CON .mp4').startsWith('File_'), 'Windows reserved name with space before dot must be prefixed');
  assert.ok(outFiles.sanitizeFilename('a.' + 'x'.repeat(200)).length <= 155, 'Very long extension must not bypass filename truncation');

  assert.ok(read('native/install.bat').includes('ConvertTo-Json'), 'install.bat must write manifest safely via ConvertTo-Json');
  assert.ok(read('native/install.sh').includes('HOST_SH_ESC='), 'install.sh must escape HOST_SH path for JSON');
  assert.ok(read('native/host.sh').includes('.nvm/versions/node/'), 'host.sh must support nvm/volta/asdf/mise node paths');
})();

// 3. Batch 3: UI, guard & sniffer
(function testBatch3() {
  const cg = read('context-guard.js');
  const pipIdx = cg.indexOf('_origRequestPip.apply'); assert.ok(pipIdx !== -1 && !cg.slice(pipIdx, pipIdx + 160).includes('return res.catch(() => {});'), 'context-guard must not swallow requestPictureInPicture rejection into undefined');
  assert.ok(cg.includes('coccoc\\.com(?:\\/|\\?|#|$)'), 'context-guard fetch filter must match coccoc.com without trailing slash');

  const popup = read('popup/popup.js');
  assert.ok(popup.includes('it.chromeId !== undefined && item.chromeId !== undefined && String(it.chromeId) === String(item.chromeId)'), 'retryRecentItem must not match undefined chromeIds');
  assert.ok(popup.includes("'.status-badge.downloading, .status-badge.queued'"), 'popup must update queued badge on nativeProgress');

  const dl = read('downloads/downloads.js');
  assert.ok(dl.includes('disable_savior_sites: next, hidePermanent: next'), 'downloads.js must sync disable_savior_sites with hidePermanent');
  assert.ok(dl.includes('data.min_stream_size !== undefined ? Number(data.min_stream_size) : 30720'), 'downloads.js must preserve default 30720 min_stream_size');
  assert.ok(dl.includes("if (activeItem.state === 'queued') activeItem.state = 'downloading';"), 'downloads.js must transition queued -> downloading on nativeProgress');
  assert.ok(dl.includes('clearActiveCardMenu()'), 'downloads.js must clean up card menu document listener');
})();

// 4. Batch 4: src/content/*, src/inject/*, _locales/*
(function testBatch4() {
  const domUtils = read('src/content/core/dom-utils.js');
  assert.ok(domUtils.includes('return Y(e2.href);'), 'getVideoId must recurse on canonical e2.href, not t3');
  assert.ok(domUtils.includes('!t3.includes(e3)'), 'mergeArray must push missing items, not duplicates');

  const wm = read('src/content/widget/widget-manager.js');
  assert.ok(!wm.includes('b59df0256819b112511f92795fbfa127f851c068420b5b016da9228889d1a90d'), 'Hardcoded CocCoc Bearer token must be removed');
  assert.ok(!wm.includes('msgEl.innerHTML = sanitized;'), 'ToastNotification must use textContent instead of innerHTML');
  assert.ok(wm.includes('findIndex((t2) => t2 == ev)'), 'StateComponent.unwatch must use findIndex');

  const sniffer = read('src/content/core/media-sniffer.js');
  assert.ok(sniffer.includes('if (r2 < 0) return false;'), 'media-sniffer.off must not splice(-1, 1)');

  const fmt = read('src/content/core/format-resolver.js');
  assert.ok(!fmt.includes('"https//" + r2'), 'format-resolver must fix https// typo');

  const tt = read('src/content/platform/tiktok-douyin.js');
  assert.ok(!tt.includes('mediaObj.url = fetchedDetail.url || fetchedDetail;'), 'tiktok-douyin must never assign object to mediaObj.url');

  const tw = read('src/content/platform/twitter_com-extractor.js');
  assert.ok(tw.includes('if (obj_u[var_e.url])'), 'twitter extractor must not overwrite filename with undefined');

  const vm = read('src/content/platform/vimeo_com-extractor.js');
  assert.ok(!vm.includes('siteMatcher: () => /^vimeo.com/'), 'vimeo siteMatcher must match https://vimeo.com');

  const dm = read('src/content/platform/dailymotion-extractor.js');
  assert.ok(dm.includes('return var_u_1;'), 'dailymotion HLS fallback must return var_u_1 instead of {}');

  const bili = read('src/content/platform/bilibili_com-extractor.js');
  assert.ok(!bili.includes('return console.warn(var_t), "null";'), 'bilibili must return null, not string "null"');
  assert.ok(bili.includes('Object.assign({}, list_c[0]'), 'bilibili must clone list_c[0] instead of mutating cached url');

  const ig = read('src/content/platform/instagram_com-extractor.js');
  assert.ok(!ig.includes('xvl5U8HSBDNKZnlUyZpYttlfwNqlgyLX'), 'instagram must not hardcode stale fallback CSRF token');

  const ytHost = read('src/content/platform/youtube-host.js');
  assert.ok(ytHost.includes('/^\\/(channel|@)/i.test(location.pathname)'), 'youtube-host pathname regex must include leading slash');

  // ReDoS regression test on 9animes_org-extractor.js
  const nineAnime = read('src/content/platform/9animes_org-extractor.js');
  assert.ok(!nineAnime.includes('(\\S+\\.)*'), '9animes extractor must not have exponential ReDoS regex');

  // Inject sync & fixes
  assert.strictEqual(read('src/inject/animevietsub/main-world.js'), read('inject/animevietsub/main-world.js'), 'inject/animevietsub must stay synced');
  assert.ok(read('src/inject/facebook/messenger-audio/main-world.js').includes('__vidownMessengerAudioHooked'), 'messenger-audio must have idempotency guard');
  assert.ok(read('src/inject/todayplus/main-world.js').includes('} finally {'), 'todayplus must free WASM heap in finally');

  // Locales schema check
  for (const lang of ['en', 'id', 'vi']) {
    const loc = JSON.parse(read(`_locales/${lang}/messages.json`));
    assert.strictEqual(typeof loc.download_all_images.placeholders.number.example, 'string', `${lang} download_all_images example must be string`);
    assert.strictEqual(typeof loc.popup_how_many_media_found.placeholders.number.example, 'string', `${lang} popup_how_many_media_found example must be string`);
  }
})();

console.log('✓ test_deep_audit_all_fixes.js passed all 4 batch suites');
