/**
 * Comprehensive Automated Test Suite: Universal Media Detection Core
 * 
 * Verifies Lessons 1, 3, 4, 5 adopted from F:\VideoDownloader:
 * - Lesson 1: Main World Runtime Hook & Isolated World Zero-Trust Security Gate
 * - Lesson 3: 512-byte Stream-Capped Range Probe with immediate cancellation
 * - Lesson 4: Evidence-based causal segment linking via explicit segment Set
 * - Lesson 5: 3-tier identity model, FIFO cap 30 per tab, and debounced storage sync
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');

// Load Core Modules
const MediaTypes = require('../core/media_types');
const MediaRegistry = require('../core/media_registry');
const MagicProbe = require('../core/magic_probe');
const ManifestParser = require('../core/manifest_parse');
const NetworkObserver = require('../core/network_observer');
const SecurityGate = require('../core/security_gate');
const RuntimeHook = require('../core/runtime_hook');

const { MediaState, UnresolvedReason, ProtocolType, TrackType, computeResourceIdentity, sanitizeUrlForLogging } = MediaTypes;

async function runTestSuite() {
  console.log('===============================================================');
  console.log('   UNIVERSAL MEDIA DETECTION CORE - AUTOMATED TEST SUITE       ');
  console.log('===============================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function test(name, fn) {
    totalTests++;
    try {
      fn();
      console.log(`✓ [Test ${totalTests}] ${name}`);
      passedTests++;
    } catch (err) {
      console.error(`✗ [Test ${totalTests}] FAILED: ${name}`);
      console.error(err);
      process.exit(1);
    }
  }

  async function asyncTest(name, fn) {
    totalTests++;
    try {
      await fn();
      console.log(`✓ [Test ${totalTests}] ${name}`);
      passedTests++;
    } catch (err) {
      console.error(`✗ [Test ${totalTests}] FAILED: ${name}`);
      console.error(err);
      process.exit(1);
    }
  }

  // =========================================================================
  // 1. Core Media Types & State Machine Tests
  // =========================================================================
  console.log('--- 1. Media Types, Canonical Hashing & State Machine ---');

  test('Valid MediaState transitions are strictly enforced', () => {
    // Valid transitions
    assert.strictEqual(MediaTypes.canTransition(MediaState.DETECTED, MediaState.RESOLVING), true);
    assert.strictEqual(MediaTypes.canTransition(MediaState.RESOLVING, MediaState.READY), true);
    assert.strictEqual(MediaTypes.canTransition(MediaState.READY, MediaState.DOWNLOADING), true);
    assert.strictEqual(MediaTypes.canTransition(MediaState.DOWNLOADING, MediaState.COMPLETED), true);
    assert.strictEqual(MediaTypes.canTransition(MediaState.DOWNLOADING, MediaState.ERROR), true);
    assert.strictEqual(MediaTypes.canTransition(MediaState.RESOLVING, MediaState.UNRESOLVED), true);

    // Invalid backwards or illegal transitions
    assert.strictEqual(MediaTypes.canTransition(MediaState.COMPLETED, MediaState.DETECTED), false);
    assert.strictEqual(MediaTypes.canTransition(MediaState.COMPLETED, MediaState.RESOLVING), false);
    assert.strictEqual(MediaTypes.canTransition(MediaState.ERROR, MediaState.DETECTED), false);
    assert.strictEqual(MediaTypes.canTransition(MediaState.UNRESOLVED, MediaState.COMPLETED), false);
  });

  test('computeResourceIdentity produces deterministic SHA-256 ignoring volatile tokens', () => {
    const url1 = 'https://cdn.example.com/video.mp4?itag=22&token=abc12345&expire=1730000000&sig=signature1';
    const url2 = 'https://cdn.example.com/video.mp4?itag=22&token=xyz99999&expire=1730099999&sig=signature2';
    const urlDifferentQuality = 'https://cdn.example.com/video.mp4?itag=18&token=abc12345';

    const hash1 = computeResourceIdentity(url1, TrackType.VIDEO);
    const hash2 = computeResourceIdentity(url2, TrackType.VIDEO);
    const hashDiff = computeResourceIdentity(urlDifferentQuality, TrackType.VIDEO);

    assert.strictEqual(hash1, hash2, 'Hashes should match because distinguishing parameter itag=22 is identical and tokens are stripped');
    assert.notStrictEqual(hash1, hashDiff, 'Hashes should differ because itag is different (22 vs 18)');
    assert.strictEqual(hash1.length, 64, 'SHA-256 hash must be 64 hexadecimal characters');
  });

  test('sanitizeUrlForLogging masks sensitive tokens to [REDACTED]', () => {
    const sensitiveUrl = 'https://cdn.example.com/stream.m3u8?token=SECRET_TOKEN_123&sig=SIGNATURE_456&key=KEY_789&track=video';
    const sanitized = sanitizeUrlForLogging(sensitiveUrl);

    assert.ok(!sanitized.includes('SECRET_TOKEN_123'), 'Sensitive token must NOT be in sanitized URL');
    assert.ok(!sanitized.includes('SIGNATURE_456'), 'Signature must NOT be in sanitized URL');
    assert.ok(!sanitized.includes('KEY_789'), 'Key must NOT be in sanitized URL');
    assert.ok(sanitized.includes('token=[REDACTED]'), 'token must be masked to [REDACTED]');
    assert.ok(sanitized.includes('sig=[REDACTED]'), 'sig must be masked to [REDACTED]');
    assert.ok(sanitized.includes('track=video'), 'Non-sensitive parameters must be preserved');
  });

  // =========================================================================
  // 2. Universal Media Registry Tests
  // =========================================================================
  console.log('\n--- 2. Universal Media Registry & MV3 Hydration ---');

  test('UniversalMediaRegistry registers media and maintains 3-tier identity model', () => {
    MediaRegistry.clearAll();
    const tabId = 101;

    const record = MediaRegistry.registerMedia(tabId, {
      mediaInstanceId: 'inst_video_1',
      requestUrl: 'https://cdn.example.com/sample.mp4?itag=137&token=123',
      trackType: TrackType.VIDEO,
      protocol: ProtocolType.DIRECT,
      mimeType: 'video/mp4',
      sizeBytes: 15000000,
      state: MediaState.READY
    });

    assert.ok(record.recordId, 'Record must have unique recordId');
    assert.strictEqual(record.mediaInstanceId, 'inst_video_1');
    assert.ok(record.resourceIdentity, 'Record must have resourceIdentity hash');
    assert.strictEqual(record.state, MediaState.READY);

    const tabMedia = MediaRegistry.getTabMedia(tabId);
    assert.strictEqual(tabMedia.length, 1);
    assert.strictEqual(tabMedia[0].recordId, record.recordId);
  });

  test('UniversalMediaRegistry strictly enforces 30-item FIFO cap per tab', () => {
    MediaRegistry.clearAll();
    const tabId = 202;

    // Register 35 distinct media records
    for (let i = 1; i <= 35; i++) {
      MediaRegistry.registerMedia(tabId, {
        mediaInstanceId: `inst_${i}`,
        requestUrl: `https://cdn.example.com/video_${i}.mp4`,
        trackType: TrackType.VIDEO,
        protocol: ProtocolType.DIRECT
      });
    }

    const items = MediaRegistry.getTabMedia(tabId);
    assert.strictEqual(items.length, 30, 'Tab registry must be capped at exactly 30 items');
    // First 5 items (inst_1 through inst_5) should have been evicted by FIFO
    assert.strictEqual(items[0].mediaInstanceId, 'inst_6', 'First item in queue should now be inst_6 (FIFO)');
    assert.strictEqual(items[29].mediaInstanceId, 'inst_35', 'Last item in queue should be inst_35');
  });

  await asyncTest('UniversalMediaRegistry debounces storage sync and hydrates correctly', async () => {
    MediaRegistry.clearAll();
    const tabId = 303;

    // Mock chrome.storage.session
    const storageStore = {};
    global.chrome = {
      storage: {
        session: {
          set(obj, cb) {
            Object.assign(storageStore, obj);
            if (cb) cb();
          },
          get(keys, cb) {
            const res = {};
            const keyArr = Array.isArray(keys) ? keys : [keys];
            for (const k of keyArr) {
              if (storageStore[k]) res[k] = storageStore[k];
            }
            if (cb) cb(res);
          }
        }
      }
    };
    MediaRegistry.setStorageBackend(global.chrome.storage.session);

    MediaRegistry.registerMedia(tabId, {
      mediaInstanceId: 'inst_sync_test',
      requestUrl: 'https://cdn.example.com/sync.mp4',
      trackType: TrackType.VIDEO,
      protocol: ProtocolType.DIRECT
    });

    // Wait for trailing debounce (500ms + margin)
    await new Promise(resolve => setTimeout(resolve, 600));

    const storageKey = MediaRegistry.STORAGE_KEY_PREFIX + tabId;
    assert.ok(storageStore[storageKey], 'Storage session must contain synchronized tab records');
    assert.strictEqual(storageStore[storageKey].length, 1);
    assert.strictEqual(storageStore[storageKey][0].mediaInstanceId, 'inst_sync_test');

    // Simulate Service Worker cold start / hydration
    MediaRegistry.clearAll();
    assert.strictEqual(MediaRegistry.getTabMedia(tabId).length, 0);

    const hydrated = await MediaRegistry.hydrateTabRegistry(tabId);
    assert.strictEqual(hydrated.length, 1);
    assert.strictEqual(hydrated[0].mediaInstanceId, 'inst_sync_test');
  });

  // =========================================================================
  // 3. Stream-Capped Magic Probe Tests
  // =========================================================================
  console.log('\n--- 3. Stream-Capped Magic Probe (512 Bytes Limit) ---');

  test('MagicProbe correctly detects ISO-BMFF MP4 from ftyp box', () => {
    // Construct 512-byte buffer with ftyp box
    const buf = new Uint8Array(512);
    // Box size: 0x00000018 (24 bytes)
    buf[0] = 0; buf[1] = 0; buf[2] = 0; buf[3] = 24;
    // Box type: 'ftyp'
    buf[4] = 0x66; buf[5] = 0x74; buf[6] = 0x79; buf[7] = 0x70;
    // Major brand: 'isom'
    buf[8] = 0x69; buf[9] = 0x73; buf[10] = 0x6f; buf[11] = 0x6d;

    const result = MagicProbe.inspectMagicBytes(buf);
    assert.strictEqual(result.matched, true);
    assert.strictEqual(result.container, 'mp4');
    assert.strictEqual(result.mimeType, 'video/mp4');
    assert.strictEqual(result.trackType, TrackType.VIDEO);
  });

  test('MagicProbe correctly detects WebM EBML header', () => {
    const buf = new Uint8Array(512);
    // EBML header: 0x1A 0x45 0xDF 0xA3
    buf[0] = 0x1a; buf[1] = 0x45; buf[2] = 0xdf; buf[3] = 0xa3;

    const result = MagicProbe.inspectMagicBytes(buf);
    assert.strictEqual(result.matched, true);
    assert.strictEqual(result.container, 'webm');
    assert.strictEqual(result.mimeType, 'video/webm');
  });

  test('MagicProbe correctly detects MPEG-TS sync bytes', () => {
    const buf = new Uint8Array(512);
    // MPEG-TS packets are 188 bytes, starting with sync byte 0x47
    buf[0] = 0x47;
    buf[188] = 0x47;
    buf[376] = 0x47;

    const result = MagicProbe.inspectMagicBytes(buf);
    assert.strictEqual(result.matched, true);
    assert.strictEqual(result.container, 'mpegts');
    assert.strictEqual(result.protocol, ProtocolType.HLS);
  });

  test('MagicProbe exclusion list skips ad networks, telemetry, and static assets', () => {
    assert.strictEqual(MagicProbe.isExemptFromProbe('https://google-analytics.com/collect'), true);
    assert.strictEqual(MagicProbe.isExemptFromProbe('https://adservice.google.com/ads.js'), true);
    assert.strictEqual(MagicProbe.isExemptFromProbe('https://cdn.example.com/styles.css'), true);
    assert.strictEqual(MagicProbe.isExemptFromProbe('https://cdn.example.com/script.js'), true);
    assert.strictEqual(MagicProbe.isExemptFromProbe('https://cdn.example.com/media/stream_chunk'), false);
  });

  await asyncTest('MagicProbe stream-capping executes reader.cancel() and aborts controller', async () => {
    let cancelCalled = false;
    let abortFired = false;
    let bytesDelivered = 0;

    const mockFetchFn = async (url, init) => {
      if (init.signal) {
        init.signal.addEventListener('abort', () => {
          abortFired = true;
        });
      }
      return {
        ok: true,
        status: 206,
        body: {
          getReader() {
            return {
              async read() {
                // Deliver 256 bytes per read
                if (bytesDelivered < 1024) {
                  bytesDelivered += 256;
                  const chunk = new Uint8Array(256);
                  // Put MP4 magic bytes in first chunk
                  chunk[4] = 0x66; chunk[5] = 0x74; chunk[6] = 0x79; chunk[7] = 0x70;
                  return { done: false, value: chunk };
                }
                return { done: true, value: undefined };
              },
              async cancel() {
                cancelCalled = true;
              }
            };
          }
        }
      };
    };

    const res = await MagicProbe.probeStreamCappedBytes('https://cdn.example.com/ambiguous_video', {
      fetchFn: mockFetchFn
    });

    assert.strictEqual(res.success, true);
    assert.strictEqual(res.container, 'mp4');
    assert.strictEqual(cancelCalled, true, 'reader.cancel() must be called immediately after 512 bytes');
    assert.strictEqual(abortFired, true, 'AbortController signal must fire abort to close socket');
    assert.ok(res.bytesConsumed <= 512, 'Bytes consumed by prober must NOT exceed 512 bytes');
  });

  // =========================================================================
  // 4. Manifest Parser & Resolver Tests
  // =========================================================================
  console.log('\n--- 4. Manifest Parser & Explicit Segment Extraction ---');

  test('ManifestParser parses HLS master playlist variants and segment Sets', () => {
    const m3u8Master = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=4500000,RESOLUTION=1920x1080,CODECS="avc1.64002a,mp4a.40.2"
1080p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2200000,RESOLUTION=1280x720,CODECS="avc1.4d401f,mp4a.40.2"
720p.m3u8
`;
    const parsed = ManifestParser.parseM3u8(m3u8Master, 'https://cdn.example.com/hls/master.m3u8');
    assert.strictEqual(parsed.isMaster, true);
    assert.strictEqual(parsed.variants.length, 2);
    assert.strictEqual(parsed.variants[0].resolution, '1920x1080');
    assert.strictEqual(parsed.variants[0].url, 'https://cdn.example.com/hls/1080p.m3u8');
    assert.strictEqual(parsed.variants[1].resolution, '1280x720');
  });

  test('ManifestParser extracts explicit segment URLs with absolute resolution', () => {
    const m3u8Media = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:6
#EXTINF:6.000,
segment_0.ts
#EXTINF:6.000,
segment_1.ts
#EXTINF:6.000,
https://other-cdn.example.com/segment_2.ts
#EXT-X-ENDLIST
`;
    const segments = ManifestParser.extractManifestSegments(m3u8Media, 'https://cdn.example.com/stream/playlist.m3u8');
    assert.strictEqual(segments.size, 3);
    assert.ok(segments.has('https://cdn.example.com/stream/segment_0.ts'));
    assert.ok(segments.has('https://cdn.example.com/stream/segment_1.ts'));
    assert.ok(segments.has('https://other-cdn.example.com/segment_2.ts'));
  });

  test('ManifestParser parses DASH MPD representations and detects DRM', () => {
    const dashMpd = `<?xml version="1.0"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.5S" type="static">
  <Period>
    <AdaptationSet mimeType="video/mp4" contentType="video">
      <ContentProtection schemeIdUri="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"/>
      <Representation id="v1080" bandwidth="4000000" width="1920" height="1080">
        <BaseURL>video_1080.mp4</BaseURL>
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>`;

    const parsed = ManifestParser.parseMpd(dashMpd, 'https://cdn.example.com/dash/manifest.mpd');
    assert.strictEqual(parsed.drmProtected, true, 'Widevine DRM UUID should be detected');
    assert.strictEqual(parsed.representations.length, 1);
    assert.strictEqual(parsed.representations[0].width, 1920);
    assert.strictEqual(parsed.representations[0].height, 1080);
    assert.ok(parsed.segments.has('https://cdn.example.com/dash/video_1080.mp4'));
  });

  // =========================================================================
  // 5. Evidence-Based Network Observer Tests
  // =========================================================================
  console.log('\n--- 5. Evidence-Based Network Observer & Causal Linking ---');

  test('NetworkObserver classifies responses and ignores static assets with 0 registry overhead', () => {
    const staticCss = {
      url: 'https://site.example.com/app.css',
      statusCode: 200,
      responseHeaders: [{ name: 'Content-Type', value: 'text/css; charset=utf-8' }]
    };
    const staticImg = {
      url: 'https://site.example.com/logo.png',
      statusCode: 200,
      responseHeaders: [{ name: 'Content-Type', value: 'image/png' }]
    };
    const directVideo = {
      url: 'https://site.example.com/movie.mp4',
      statusCode: 200,
      responseHeaders: [{ name: 'Content-Type', value: 'video/mp4' }]
    };

    assert.strictEqual(NetworkObserver.classifyResponse(staticCss).eventType, 'static_asset');
    assert.strictEqual(NetworkObserver.classifyResponse(staticImg).eventType, 'static_asset');
    assert.strictEqual(NetworkObserver.classifyResponse(directVideo).eventType, 'direct_media');
  });

  test('NetworkObserver causal segment linking strictly requires explicit segment inclusion', () => {
    const tabId = 404;
    NetworkObserver.clearTab(tabId);

    // Register a manifest with known segments
    const manifestUrl = 'https://cdn.example.com/media/playlist.m3u8';
    const knownSegments = new Set([
      'https://cdn.example.com/media/seg-001.ts',
      'https://cdn.example.com/media/seg-002.ts'
    ]);
    NetworkObserver.registerManifestWithSegments(tabId, manifestUrl, knownSegments);

    // Test segment matching known segment
    const linked = NetworkObserver.findCausalManifest(tabId, 'https://cdn.example.com/media/seg-001.ts?auth=123');
    assert.ok(linked, 'Segment matching canonical path must link to parent manifest');
    assert.strictEqual(linked.url, manifestUrl);

    // Test segment from same domain/initiator but NOT in the manifest
    const unlinked = NetworkObserver.findCausalManifest(tabId, 'https://cdn.example.com/media/other_video_seg-001.ts');
    assert.strictEqual(unlinked, null, 'Must NOT link segment when exact evidence is missing, even on same CDN');
  });

  // =========================================================================
  // 6. Zero-Trust Security Gate Tests
  // =========================================================================
  console.log('\n--- 6. Zero-Trust Security Gate (Main World Defense) ---');

  test('SecurityGate rejects non-plain objects and invalid prototypes', () => {
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(null).valid, false);
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent('string_detail').valid, false);
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent([1, 2, 3]).valid, false);

    // Object with custom prototype
    const customProto = Object.create({ fake: true });
    customProto.streamUrl = 'https://cdn.example.com/video.mp4';
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(customProto).valid, false);
  });

  test('SecurityGate blocks prototype pollution vectors (__proto__, constructor)', () => {
    const maliciousPayload1 = JSON.parse('{"__proto__": {"admin": true}, "streamUrl": "https://cdn.example.com/video.mp4"}');
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(maliciousPayload1).valid, false);

    const maliciousPayload2 = {
      constructor: function () {},
      streamUrl: 'https://cdn.example.com/video.mp4'
    };
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(maliciousPayload2).valid, false);
  });

  test('SecurityGate blocks accessor descriptors (getters/setters)', () => {
    const maliciousObject = {};
    Object.defineProperty(maliciousObject, 'streamUrl', {
      get() { return 'https://cdn.example.com/exploit.mp4'; },
      enumerable: true
    });
    const res = SecurityGate.validateAndSanitizeEvent(maliciousObject);
    assert.strictEqual(res.valid, false);
    assert.strictEqual(res.reason, 'ACCESSOR_DESCRIPTOR_REJECTED');
  });

  test('SecurityGate enforces 2048-byte payload cap', () => {
    const oversizedPayload = {
      streamUrl: 'https://cdn.example.com/video.mp4',
      mimeType: 'video/mp4',
      detectedType: 'DIRECT_MEDIA',
      initiatorType: 'fetch',
      timestamp: Date.now(),
      extraBloat: 'A'.repeat(3000)
    };
    const res = SecurityGate.validateAndSanitizeEvent(oversizedPayload);
    assert.strictEqual(res.valid, false);
    assert.strictEqual(res.reason, 'PAYLOAD_SIZE_EXCEEDED');
  });

  test('SecurityGate whitelists HTTP/HTTPS and rejects javascript:, data:, and control characters', () => {
    const validHttp = {
      streamUrl: 'https://cdn.example.com/video.mp4',
      detectedType: 'DIRECT_MEDIA',
      mimeType: 'video/mp4'
    };
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(validHttp).valid, true);

    const jsScheme = {
      streamUrl: 'javascript:alert(1)',
      detectedType: 'DIRECT_MEDIA'
    };
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(jsScheme).valid, false);

    const dataScheme = {
      streamUrl: 'data:text/html,<script>alert(1)</script>',
      detectedType: 'DIRECT_MEDIA'
    };
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(dataScheme).valid, false);

    const dangerousChars = {
      streamUrl: 'https://cdn.example.com/video.mp4;rm -rf /',
      detectedType: 'DIRECT_MEDIA'
    };
    assert.strictEqual(SecurityGate.validateAndSanitizeEvent(dangerousChars).valid, false);
  });

  test('SecurityGate rate limiter caps at 20 events per second', () => {
    SecurityGate.resetRateLimiter();
    const startTime = Date.now();

    // First 20 events must be allowed
    for (let i = 0; i < 20; i++) {
      assert.strictEqual(SecurityGate.isRateLimited(startTime), false, `Event ${i+1} should be permitted`);
    }

    // 21st event in same second must be rate-limited
    assert.strictEqual(SecurityGate.isRateLimited(startTime), true, '21st event must be dropped');
    assert.strictEqual(SecurityGate.isRateLimited(startTime), true, '22nd event must be dropped');

    // 1001ms later, new window begins
    assert.strictEqual(SecurityGate.isRateLimited(startTime + 1001), false, 'First event in next second must be permitted');
  });

  // =========================================================================
  // 7. Main World Runtime Hook Tests
  // =========================================================================
  console.log('\n--- 7. Main World Runtime Hook (Fetch, XHR, MSE) ---');

  await asyncTest('RuntimeHook hooks fetch, XHR, and MediaSource without throwing or altering behavior', async () => {
    const dispatchedEvents = [];
    function MockXHR() {}
    MockXHR.prototype.open = function () {};

    function MockMediaSource() {}
    MockMediaSource.prototype.addSourceBuffer = function (mime) { return { mime }; };

    const mockWindow = {
      document: {
        readyState: 'complete',
        dispatchEvent(evt) {
          dispatchedEvents.push(evt);
        }
      },
      CustomEvent: function (type, init) {
        this.type = type;
        this.detail = init ? init.detail : null;
      },
      addEventListener() {},
      removeEventListener() {},
      fetch: async function (input, init) {
        return { ok: true, input, status: 200 };
      },
      XMLHttpRequest: MockXHR,
      MediaSource: MockMediaSource
    };

    // Initialize hooks
    RuntimeHook.initRuntimeHooks(mockWindow);
    assert.strictEqual(RuntimeHook.isHooked(), true);

    // Trigger window.fetch with media URL
    const fetchRes = await mockWindow.fetch('https://cdn.example.com/movie_1080p.m3u8?token=xyz');
    assert.strictEqual(fetchRes.status, 200, 'Original fetch response must be returned transparently');
    assert.strictEqual(dispatchedEvents.length, 1);
    assert.strictEqual(dispatchedEvents[0].detail.detectedType, 'MANIFEST_HLS');
    assert.strictEqual(dispatchedEvents[0].detail.streamUrl, 'https://cdn.example.com/movie_1080p.m3u8?token=xyz');

    // Trigger XMLHttpRequest.open
    const xhr = new mockWindow.XMLHttpRequest();
    xhr.open('GET', 'https://cdn.example.com/video_fragment.mp4');
    assert.strictEqual(dispatchedEvents.length, 2);
    assert.strictEqual(dispatchedEvents[1].detail.detectedType, 'DIRECT_MEDIA');

    // Trigger MediaSource.addSourceBuffer
    const ms = new mockWindow.MediaSource();
    ms.addSourceBuffer('video/mp4; codecs="avc1.640028"');
    assert.strictEqual(dispatchedEvents.length, 3);
    assert.strictEqual(dispatchedEvents[2].detail.detectedType, 'MSE_SOURCE_BUFFER');
    assert.strictEqual(dispatchedEvents[2].detail.mimeType, 'video/mp4; codecs="avc1.640028"');

    // Teardown
    RuntimeHook.teardownRuntimeHooks(mockWindow);
    assert.strictEqual(RuntimeHook.isHooked(), false);
  });

  console.log('\n===============================================================');
  console.log(`   ALL ${passedTests} UNIVERSAL MEDIA DETECTION TESTS PASSED! 🎉    `);
  console.log('===============================================================\n');
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
