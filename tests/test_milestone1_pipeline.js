/**
 * Milestone 1 Comprehensive Verification Test Suite
 * Covers Features 1, 2, 3, 5, 6, 7 across:
 * - background.chrome.js
 * - src/background/entry/service-worker-entry.js
 * - popup/popup.js
 * - downloads/downloads.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== TEST SUITE: MILESTONE 1 DOWNLOAD PIPELINE & BACKGROUND FIXES ===\n');

const ROOT = path.join(__dirname, '..');
const bgCode = fs.readFileSync(path.join(ROOT, 'background.chrome.js'), 'utf8');
const popupCode = fs.readFileSync(path.join(ROOT, 'popup', 'popup.js'), 'utf8');
const downloadsCode = fs.readFileSync(path.join(ROOT, 'downloads', 'downloads.js'), 'utf8');

function createSandboxedSW(customOverrides = {}) {
  let runtimeMessageHandler = null;
  let portMessageHandler = null;
  let portDisconnectHandler = null;
  let sessionRulesConfig = null;
  const postedNativeMessages = [];
  const browserDownloadCalls = [];
  const activeTimers = new Set();
  const activeIntervals = new Set();

  const storageState = {
    downloadHistory: [],
    customDownloadDir: '',
    ...(customOverrides.initialStorage || {})
  };

  const mockPort = {
    postMessage: (msg) => postedNativeMessages.push(msg),
    onMessage: {
      addListener: (fn) => { portMessageHandler = fn; },
      removeListener: (fn) => { if (portMessageHandler === fn) portMessageHandler = null; }
    },
    onDisconnect: {
      addListener: (fn) => { portDisconnectHandler = fn; }
    }
  };

  const context = {
    console: {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {}
    },
    setTimeout: (fn, ms) => {
      const t = setTimeout(fn, ms || 0);
      activeTimers.add(t);
      return t;
    },
    clearTimeout: (t) => {
      activeTimers.delete(t);
      clearTimeout(t);
    },
    setInterval: (fn, ms) => {
      const i = setInterval(fn, ms || 1000);
      activeIntervals.add(i);
      return i;
    },
    clearInterval: (i) => {
      activeIntervals.delete(i);
      clearInterval(i);
    },
    Map,
    Set,
    Array,
    Object,
    Date,
    Math,
    String,
    Number,
    Boolean,
    URL,
    Uint8Array,
    Buffer,
    AbortController,
    Error,
    Promise,
    parseInt,
    parseFloat,
    isNaN,
    btoa: (str) => Buffer.from(str, 'binary').toString('base64'),
    fetch: customOverrides.fetch || (async () => ({ ok: false, status: 404, headers: { get: () => '' } })),
    importScripts: () => {},
    addEventListener: () => {},
    chrome: {
      runtime: {
        id: 'test-ext-id',
        onInstalled: { addListener: () => {} },
        onStartup: { addListener: () => {} },
        onMessage: {
          addListener: (fn) => { runtimeMessageHandler = fn; }
        },
        onMessageExternal: { addListener: () => {} },
        connectNative: customOverrides.connectNative || (() => mockPort),
        sendNativeMessage: (h, m, cb) => cb && cb({ success: true }),
        sendMessage: () => Promise.resolve(),
        getURL: (p) => p,
        getPlatformInfo: (cb) => cb && cb({ os: 'linux' })
      },
      declarativeNetRequest: {
        updateSessionRules: (cfg) => {
          sessionRulesConfig = cfg;
          return Promise.resolve();
        }
      },
      cookies: {
        getAll: (q, cb) => cb && cb([{ domain: '.example.com', path: '/', name: 'sid', value: '123' }])
      },
      tabs: {
        onActivated: { addListener: () => {} },
        onUpdated: { addListener: () => {} },
        onRemoved: { addListener: () => {} },
        query: (q, cb) => cb && cb([]),
        get: (id, cb) => cb && cb(null),
        sendMessage: () => Promise.resolve()
      },
      action: {
        setBadgeText: () => {},
        setBadgeBackgroundColor: () => {}
      },
      storage: {
        local: {
          get: (keys, cb) => {
            const res = {};
            const kList = Array.isArray(keys) ? keys : [keys];
            kList.forEach(k => { res[k] = storageState[k]; });
            if (cb) cb(res);
            return Promise.resolve(res);
          },
          set: (obj, cb) => {
            Object.assign(storageState, obj);
            if (cb) cb();
            return Promise.resolve();
          }
        },
        session: {
          get: () => Promise.resolve({}),
          set: () => Promise.resolve()
        },
        onChanged: { addListener: () => {} }
      },
      downloads: {
        download: (opts, cb) => {
          browserDownloadCalls.push(opts);
          if (cb) cb(777);
        },
        search: (q, cb) => {
          if (cb) cb([]);
          return Promise.resolve([]);
        },
        cancel: (id, cb) => cb && cb(),
        erase: (q, cb) => cb && cb([]),
        onCreated: { addListener: () => {} },
        onChanged: { addListener: () => {} }
      },
      webRequest: {
        onBeforeSendHeaders: { addListener: () => {} },
        onHeadersReceived: { addListener: () => {} }
      },
      webNavigation: {
        onCommitted: { addListener: () => {} }
      },
      scripting: {
        executeScript: () => Promise.resolve([])
      }
    }
  };
  context.self = context;

  vm.createContext(context);
  vm.runInContext(bgCode, context);

  return {
    context,
    getSessionRulesConfig: () => sessionRulesConfig,
    getRuntimeHandler: () => runtimeMessageHandler,
    getPortDisconnectHandler: () => portDisconnectHandler,
    postedNativeMessages,
    browserDownloadCalls,
    storageState,
    eval: (expr) => vm.runInContext(expr, context),
    destroy: () => {
      for (const i of activeIntervals) clearInterval(i);
      activeIntervals.clear();
      for (const t of activeTimers) clearTimeout(t);
      activeTimers.clear();
    }
  };
}

async function runAllTests() {
  // =========================================================================
  // FEATURE 1: isBogusStreamUrl & resolveRealStreamForDownload
  // =========================================================================
  console.log('[Feature 1] Testing isBogusStreamUrl & resolveRealStreamForDownload...');
  {
    const sw = createSandboxedSW();
    const isBogus = sw.eval('isBogusStreamUrl');
    const registerSniffed = sw.eval('registerSniffedStream');
    const resolveReal = sw.eval('resolveRealStreamForDownload');

    // 1a. Subtitles (.vtt, .srt) and valid endpoints with .json/.key/.xml + stream signature
    assert.strictEqual(isBogus('https://cdn.example.com/subs/en.vtt', 'https://example.com/watch'), false, '.vtt subtitle must not be bogus');
    assert.strictEqual(isBogus('https://cdn.example.com/subs/vi.srt?token=1', 'https://example.com/watch'), false, '.srt subtitle must not be bogus');
    assert.strictEqual(isBogus('https://cdn.example.com/hls/stream.json?format=m3u8', 'https://example.com/watch'), false, '.json endpoint with m3u8 signature must not be bogus');
    assert.strictEqual(isBogus('https://cdn.example.com/hls/manifest.xml?type=mpd', 'https://example.com/watch'), false, '.xml endpoint with mpd signature must not be bogus');

    // Static assets must still be rejected
    assert.strictEqual(isBogus('https://cdn.example.com/assets/app.js', 'https://example.com/watch'), true, '.js must be bogus');
    assert.strictEqual(isBogus('https://cdn.example.com/assets/style.css', 'https://example.com/watch'), true, '.css must be bogus');
    assert.strictEqual(isBogus('https://cdn.example.com/img/thumb.jpg', 'https://example.com/watch'), true, '.jpg must be bogus');
    assert.strictEqual(isBogus('https://cdn.example.com/fonts/font.woff2', 'https://example.com/watch'), true, '.woff2 must be bogus');

    // 1b. Expanded CDN whitelist without explicit .mp4/.m3u8 extension
    const cdnUrls = [
      'https://v16.tiktokcdn-us.com/obj/tos-useast5-pve-0068-tx/abc123456',
      'https://v16.tiktokcdn-eu.com/obj/tos-no1a-pve-0068/abc123456',
      'https://v3-web.douyinvod.com/abc123456/video_id',
      'https://v26.zjcdn.com/stream/abc123456',
      'https://v9.bytevd.com/stream/abc123456',
      'https://pull-f5.bytedance.net/live/stream123',
      'https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/12/34/56789',
      'https://xy123x.mcdn.bilivideo.cn.hdslb.com/stream/12345',
      'https://api.biliapi.net/stream/playurl123',
      'https://sns-video-bd.xhscdn.com/stream/110/258/01e5b2c',
      'https://f.video.weibocdn.com/001abcXYZ',
      'https://skyfire.vimeocdn.com/12345/sep/video/67890',
      'https://vod-progressive.akamaized.net/exp=123/vimeo-prod-skyfire-std-us/01/1234',
      'https://proxy-01.dmcdn.net/sec(abc)/video/123/456',
      'https://vd123.mycdn.me/?expires=123&srcIp=1.2.3.4&type=3',
      'https://psv4.vkusercontents.com/c12345/u67890/videos/abc',
      'https://cf-media.sndcdn.com/abc123xyz',
      'https://mp3-s1-zmp3.zadn.vn/abc12345/67890',
      'https://vnso-zn-15-tf-mp3-s1-zmp3.zmdcdn.me/abc123/456',
      'https://stream.nixcdn.com/NhacCuaTui1024/SongName',
      'https://vod.fptplay.net/manifest/12345',
      'https://cdn.vieon.vn/stream/12345',
      'https://video.twimg.com/ext_tw_video/12345/pu/pl/abc'
    ];
    for (const u of cdnUrls) {
      assert.strictEqual(isBogus(u, 'https://example.com/watch/123'), false, `CDN stream URL must be accepted: ${u}`);
    }

    // 1c. Cross-tab stream contamination eliminated (Step 4 removed)
    registerSniffed(10, 'https://tab-one.com/video/1', 'https://cdn.tab-one.com/real_stream.m3u8', 'M3U8', 'Tab 1 Video');
    const resolvedUnrelated = resolveReal('https://tab-two.com/video/999', 'https://tab-two.com/video/999', 20);
    assert.strictEqual(
      resolvedUnrelated,
      'https://tab-two.com/video/999',
      'resolveRealStreamForDownload must NOT return sniffed stream from unrelated Tab 1'
    );

    // Same-page sniffed stream resolution still works
    const resolvedSamePage = resolveReal('https://tab-one.com/video/1', 'https://tab-one.com/video/1', 10);
    assert.strictEqual(
      resolvedSamePage,
      'https://cdn.tab-one.com/real_stream.m3u8',
      'resolveRealStreamForDownload must resolve sniffed stream for matching page/tab'
    );

    sw.destroy();
    console.log('✓ Feature 1 verified.');
  }

  // =========================================================================
  // FEATURE 2: In-Memory Playlists (play_list / options.playList)
  // =========================================================================
  console.log('[Feature 2] Testing in-memory playlists (play_list / playList) pipeline...');
  {
    const sw = createSandboxedSW();
    const isBogus = sw.eval('isBogusStreamUrl');
    const handler = sw.getRuntimeHandler();

    const sampleM3u8 = '#EXTM3U\n#EXT-X-VERSION:3\n#EXTINF:10.0,\nhttps://cdn.fptplay.net/seg1.ts\n#EXT-X-ENDLIST';

    // 2a. isBogusStreamUrl exempts dummy google.com when play_list/playList is provided
    assert.strictEqual(
      isBogus('https://www.google.com', 'https://fptplay.vn/xem-video/123', { play_list: sampleM3u8 }),
      false,
      'isBogusStreamUrl must return false when options.play_list is present'
    );
    assert.strictEqual(
      isBogus('https://google.com', 'https://vieon.vn/video', { playList: sampleM3u8 }),
      false,
      'isBogusStreamUrl must return false when options.playList is present'
    );

    // 2b. End-to-end onMessage 'download' with play_list and dummy URL https://www.google.com
    let resp = null;
    handler(
      {
        action: 'download',
        data: {
          params: {
            url: 'https://www.google.com',
            play_list: sampleM3u8,
            title: 'FPT_Play_Movie',
            ext: 'mp4',
            referrer: 'https://fptplay.vn/xem-video/123'
          }
        }
      },
      { tab: { id: 5, url: 'https://fptplay.vn/xem-video/123' } },
      (r) => { resp = r; }
    );

    assert.strictEqual(resp && resp.success, true, 'Download with play_list must succeed');
    assert.strictEqual(sw.postedNativeMessages.length, 1, 'Native host must receive download message');
    assert.strictEqual(sw.postedNativeMessages[0].play_list, sampleM3u8, 'play_list manifest must be forwarded to native host');
    assert.strictEqual(sw.postedNativeMessages[0].convertToMp3, false, 'convertToMp3 boolean must be forwarded');

    sw.destroy();
    console.log('✓ Feature 2 verified.');
  }

  // =========================================================================
  // FEATURE 3: Dual onMessage Listeners & Combined Streams
  // =========================================================================
  console.log('[Feature 3] Testing dual onMessage listener isolation & combined stream unpacking...');
  {
    const sw = createSandboxedSW();
    const handler = sw.getRuntimeHandler();

    // 3a. Unhandled actions (handled by service-worker-entry.js) must NOT call sendResponse
    for (const action of ['FETCH', 'YOUTUBE.GET_INFO', 'GET_URL', 'GET_COOKIES']) {
      let called = false;
      const ret = handler({ action }, {}, () => { called = true; });
      assert.strictEqual(ret, false, `Unhandled action ${action} must return false`);
      assert.strictEqual(called, false, `Unhandled action ${action} must NOT call sendResponse synchronously`);
    }

    // 3b. Combined stream object { url: { videoUrl, audioUrl } } unpacking
    let dlResp = null;
    handler(
      {
        action: 'download',
        url: {
          videoUrl: 'https://upos-sz.bilivideo.com/upgcxcode/video_1080p.m4s',
          audioUrl: 'https://upos-sz.bilivideo.com/upgcxcode/audio_128k.m4s'
        },
        title: 'Bilibili_Combined_1080p'
      },
      { tab: { id: 7, url: 'https://www.bilibili.com/video/BV1xx411c7mD' } },
      (r) => { dlResp = r; }
    );

    assert.strictEqual(dlResp && dlResp.success, true, 'Combined stream download must start');
    assert.strictEqual(sw.postedNativeMessages.length, 1, 'Combined stream must post to native host');
    assert.strictEqual(
      sw.postedNativeMessages[0].videoUrl,
      'https://upos-sz.bilivideo.com/upgcxcode/video_1080p.m4s',
      'videoUrl must be unpacked cleanly as a string'
    );
    assert.strictEqual(
      sw.postedNativeMessages[0].audioUrl,
      'https://upos-sz.bilivideo.com/upgcxcode/audio_128k.m4s',
      'audioUrl must be unpacked cleanly as a string'
    );

    sw.destroy();
    console.log('✓ Feature 3 verified.');
  }

  // =========================================================================
  // FEATURE 5: Fallback Behavior When Native Host Is Unavailable
  // =========================================================================
  console.log('[Feature 5] Testing NATIVE_HOST_REQUIRED guard when Native Host is unavailable...');
  {
    const sw = createSandboxedSW({ connectNative: () => null });
    // Force probe settled with nativeHelperAvailable = false
    sw.eval('nativeProbeSettled = true; nativeHelperAvailable = false;');

    const requiresNative = sw.eval('requiresNativeHelper');
    assert.strictEqual(requiresNative({ url: 'https://cdn.example.com/manifest.mpd' }), true, '.mpd requires native helper');
    assert.strictEqual(requiresNative({ url: 'https://cdn.example.com/dash/stream' }), true, '/dash/ requires native helper');
    assert.strictEqual(requiresNative({ url: 'https://www.google.com', play_list: '#EXTM3U' }), true, 'play_list requires native helper');

    // Attempt HLS download via chrome.downloads.download when native host is unavailable
    let cbResult = 'unset';
    sw.eval('chrome.downloads.download')(
      {
        url: 'https://cdn.example.com/live/master.m3u8',
        title: 'HLS_Movie',
        filename: 'HLS_Movie.mp4',
        pageUrl: 'https://example.com/watch'
      },
      (id) => { cbResult = id; }
    );

    await new Promise(r => setTimeout(r, 30));

    assert.strictEqual(cbResult, null, 'Callback must receive null when native host is absent for HLS');
    assert.strictEqual(sw.browserDownloadCalls.length, 0, 'Must NOT fall back to browser download for HLS');
    const histEntry = sw.storageState.downloadHistory.find(h => h.title === 'HLS_Movie');
    assert.ok(histEntry, 'History entry must be recorded');
    assert.strictEqual(histEntry.state, 'error', 'History entry state must be error');
    assert.strictEqual(histEntry.error, 'NATIVE_HOST_REQUIRED', 'History entry error code must be NATIVE_HOST_REQUIRED');

    // Direct startBrowserDownload call with DASH manifest must also be blocked
    const directBrowserStarted = sw.eval('startBrowserDownload')({
      url: 'https://cdn.example.com/video/manifest.mpd',
      filename: 'dash.mp4'
    });
    assert.strictEqual(directBrowserStarted, false, 'startBrowserDownload must reject streams requiring native helper');
    assert.strictEqual(sw.browserDownloadCalls.length, 0, 'Browser download must not be invoked');

    sw.destroy();
    console.log('✓ Feature 5 verified.');
  }

  // =========================================================================
  // FEATURE 6: Stream Relay & DeclarativeNetRequest Anti-403 Rules
  // =========================================================================
  console.log('[Feature 6] Testing Anti-403 DNR rules & Stream Relay Range 200 OK fallback...');
  {
    const fetchCalls = [];
    const fullPayload = new Uint8Array(64 * 1024);
    for (let i = 0; i < fullPayload.length; i++) fullPayload[i] = i & 0xff;

    const customFetch = async (url, opts = {}) => {
      fetchCalls.push({ url, opts });
      const rangeHdr = opts.headers && opts.headers.Range;
      if (rangeHdr === 'bytes=0-0') {
        // Pretend server supports 206 on 1-byte probe with 4MB total
        return {
          ok: true,
          status: 206,
          headers: {
            get: (k) => {
              if (k.toLowerCase() === 'content-type') return 'video/mp4';
              if (k.toLowerCase() === 'content-range') return 'bytes 0-0/4194304';
              return '';
            }
          },
          body: { cancel: async () => {} }
        };
      }
      if (rangeHdr && rangeHdr.startsWith('bytes=')) {
        // Server ignores Range header on worker requests and returns 200 OK!
        return {
          ok: true,
          status: 200,
          headers: {
            get: (k) => (k.toLowerCase() === 'content-type' ? 'video/mp4' : String(fullPayload.length))
          },
          body: {
            getReader: () => {
              let sent = false;
              return {
                read: async () => {
                  if (sent) return { done: true, value: undefined };
                  sent = true;
                  return { done: false, value: fullPayload };
                }
              };
            }
          }
        };
      }
      // Single-stream fallback request (no Range header)
      return {
        ok: true,
        status: 200,
        headers: {
          get: (k) => {
            if (k.toLowerCase() === 'content-type') return 'video/mp4';
            if (k.toLowerCase() === 'content-length') return String(fullPayload.length);
            return '';
          }
        },
        body: {
          getReader: () => {
            let sent = false;
            return {
              read: async () => {
                if (sent) return { done: true, value: undefined };
                sent = true;
                return { done: false, value: fullPayload };
              }
            };
          }
        }
      };
    };

    const sw = createSandboxedSW({ fetch: customFetch });
    const dnr = sw.getSessionRulesConfig();
    assert.ok(dnr && Array.isArray(dnr.addRules), 'setupAnti403Rules must configure session rules');

    const byId = new Map(dnr.addRules.map(r => [r.id, r]));
    // Rule 1001 scoped to facebook.com
    assert.deepStrictEqual(Array.from(byId.get(1001).condition.initiatorDomains), ['facebook.com'], 'Rule 1001 must scope fbcdn.net to facebook.com');
    // Rule 1011 scoped to instagram.com
    assert.ok(byId.has(1011), 'Rule 1011 must exist for Instagram on fbcdn.net');
    assert.deepStrictEqual(Array.from(byId.get(1011).condition.initiatorDomains), ['instagram.com'], 'Rule 1011 must scope fbcdn.net to instagram.com');
    // Rules 1012-1023 coverage
    for (let id = 1012; id <= 1023; id++) {
      assert.ok(byId.has(id), `Anti-403 DNR rule ${id} must be registered`);
    }

    // Test Stream Relay with 200 OK fallback on Range worker
    fetchCalls.length = 0;
    const relayStarted = sw.eval('startStreamRelayDownload')({
      url: 'https://v16.tiktokcdn-us.com/video/tos/useast5/12345/?mime_type=video_mp4',
      filename: 'tiktok_us.mp4',
      referrer: 'https://www.tiktok.com/@user/video/12345',
      pageUrl: 'https://www.tiktok.com/@user/video/12345'
    });
    assert.strictEqual(relayStarted, true, 'Stream Relay must start for TikTok US CDN');

    await new Promise(r => setTimeout(r, 80));

    // Verify no fetch call set a forbidden Referer header and all used credentials: 'include'
    assert.ok(fetchCalls.length >= 2, 'Should perform probe, worker attempt, and single-stream fallback');
    for (const call of fetchCalls) {
      assert.strictEqual(call.opts.credentials, 'include', 'Stream Relay fetch must use credentials: include');
      assert.strictEqual(call.opts.headers && call.opts.headers.Referer, undefined, 'Stream Relay fetch must NOT set forbidden Referer header');
    }

    // Verify single-stream fallback completed and sent streamChunk at offset 0 followed by streamEnd
    const chunkMsgs = sw.postedNativeMessages.filter(m => m.action === 'streamChunk');
    const endMsgs = sw.postedNativeMessages.filter(m => m.action === 'streamEnd');
    assert.strictEqual(chunkMsgs.length, 1, 'Fallback single-stream must send exactly 1 chunk for 64KB payload');
    assert.strictEqual(chunkMsgs[0].offset, 0, 'Fallback single-stream chunk must start at offset 0');
    assert.strictEqual(endMsgs.length, 1, 'Fallback single-stream must send streamEnd');

    sw.destroy();
    console.log('✓ Feature 6 verified.');
  }

  // =========================================================================
  // FEATURE 7: SW Wakeup Probe, Queue Deadlock & UI Status Sync
  // =========================================================================
  console.log('[Feature 7] Testing queue deadlock recovery on synchronous start failure & UI sync...');
  {
    const sw = createSandboxedSW();
    const startNative = sw.eval('startNativeDownload');
    const processNext = sw.eval('processNextQueuedNativeDownload');
    const activeDownloads = sw.eval('activeDownloads');
    const queue = sw.eval('nativeDownloadQueue');

    // Start Job 1 (valid)
    let job1Id = null;
    startNative({
      videoUrl: 'https://cdn.example.com/v1.mp4',
      audioUrl: 'https://cdn.example.com/a1.mp4',
      filename: 'v1.mp4'
    }, id => { job1Id = id; });

    // Queue Job 2 (will be corrupted before dequeue so startNativeDownload returns false synchronously)
    let job2Id = null;
    startNative({
      videoUrl: 'https://cdn.example.com/v2.mp4',
      audioUrl: 'https://cdn.example.com/a2.mp4',
      filename: 'v2.mp4'
    }, id => { job2Id = id; });

    // Queue Job 3 (valid)
    let job3Id = null;
    startNative({
      videoUrl: 'https://cdn.example.com/v3.mp4',
      audioUrl: 'https://cdn.example.com/a3.mp4',
      filename: 'v3.mp4'
    }, id => { job3Id = id; });

    assert.strictEqual(queue.length, 2, 'Two jobs queued behind Job 1');
    // Corrupt Job 2's URL in queue so startNativeDownload returns false synchronously when dequeued
    queue[0].params.url = 'about:blank';
    queue[0].params.videoUrl = 'about:blank';

    // Complete Job 1 and trigger queue
    activeDownloads.delete(job1Id);
    processNext();

    // Wait 80ms for the 50ms setTimeout(processNextQueuedNativeDownload, 50) to advance to Job 3
    await new Promise(r => setTimeout(r, 80));

    assert.strictEqual(activeDownloads.has(job2Id), false, 'Failed Job 2 must be removed from activeDownloads');
    assert.ok(activeDownloads.has(job3Id), 'Job 3 must remain in activeDownloads');
    assert.strictEqual(activeDownloads.get(job3Id).state, 'downloading', 'Job 3 must advance to downloading after Job 2 fails synchronously');
    assert.strictEqual(queue.length, 0, 'Queue must be completely drained');

    // Verify popup.js and downloads.js UI status sync & retry cleanup
    assert.ok(
      !popupCode.includes('if (item.outputFile || item.outputPath || isFinished)'),
      'popup.js must not mark inactive downloading task as completed based on outputFile/outputPath'
    );
    assert.ok(
      !downloadsCode.includes('if (item.outputFile || item.outputPath || item.percent === \'100%\')'),
      'downloads.js must not mark inactive downloading task as completed based on outputFile/outputPath'
    );
    assert.ok(
      popupCode.includes('delete item.outputFile;') && popupCode.includes('delete found.outputFile;'),
      'popup.js retryRecentItem must clear outputFile/outputPath'
    );
    assert.ok(
      downloadsCode.includes('delete item.outputFile;') && downloadsCode.includes('delete found.outputFile;'),
      'downloads.js retryDownload must clear outputFile/outputPath'
    );

    sw.destroy();
    console.log('✓ Feature 7 verified.');
  }

  console.log('\n================================================================');
  console.log('ALL MILESTONE 1 PIPELINE TESTS PASSED 100%! 🎉');
  console.log('================================================================\n');
}

runAllTests().catch(err => {
  console.error('\n❌ MILESTONE 1 TEST FAILED:', err);
  process.exit(1);
});
