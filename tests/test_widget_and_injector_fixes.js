'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function readRepo(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

// 1. floating-bar-manager.js: resize listener is stored, guarded by _currentPiP, and removed on restore()
(function testFloatingBarResizeCleanup() {
  const src = readRepo('src/content/widget/floating-bar-manager.js');
  assert.ok(
    src.includes('this._resizeHandler = v;') &&
    src.includes('window.addEventListener("resize", v);'),
    'floating-bar-manager must store _resizeHandler before registering resize listener'
  );
  assert.ok(
    src.includes('if (!this._currentPiP) return;'),
    'floating-bar-manager resize handler must no-op when not in PiP'
  );
  const restoreIdx = src.indexOf('restore() {');
  assert.ok(restoreIdx !== -1, 'restore() method must exist');
  const restoreBlock = src.slice(restoreIdx, restoreIdx + 320);
  assert.ok(
    restoreBlock.includes('window.removeEventListener("resize", this._resizeHandler)') &&
    restoreBlock.includes('this._resizeHandler = null'),
    'restore() must remove _resizeHandler and clear the reference'
  );
})();

// 2. settings-manager.js: duplicate class merged, savior-host hidden on toggle, image_download_enabled dual-key fallback
(function testSettingsManagerFixes() {
  const src = readRepo('src/content/widget/settings-manager.js');
  assert.ok(
    !src.includes('class=\\"audio-item\\" data-id=\\"{{id}}\\" title=\\"{{quality}}\\" data-quality-value=\\"{{ext}}/{{quality}}\\" class=\\"j-audio-item\\"'),
    'settings-manager template must not have duplicate class attribute on audio-item'
  );
  assert.ok(
    src.includes('class=\\"audio-item j-audio-item\\" data-id=\\"{{id}}\\" title=\\"{{quality}}\\" data-quality-value=\\"{{ext}}/{{quality}}\\"'),
    'settings-manager template must merge audio-item and j-audio-item into one class attribute'
  );
  assert.ok(
    src.includes('document.querySelectorAll(".savior-widget, savior-widget, savior-host")'),
    'on_page_buttons storage listener must hide/show Shadow DOM host <savior-host>'
  );
  assert.ok(
    src.includes('if ("image_download_enabled" === key)') &&
    src.includes('this._options.imageDownloadEnabled'),
    'settings-manager.get("image_download_enabled") must fall back to imageDownloadEnabled'
  );
})();

// 3. background.chrome.js: DEFAULT_TEMPLATES merged class and no duplicate title attribute
(function testBackgroundDefaultTemplates() {
  const bg = readRepo('background.chrome.js');
  const distBg = readRepo('dist/unpacked/background.chrome.js');
  assert.strictEqual(bg, distBg, 'dist/unpacked/background.chrome.js must stay synced with background.chrome.js');
  assert.ok(
    !bg.includes('class=\\"audio-item\\" data-id=\\"{{id}}\\" title=\\"{{quality}}\\" data-quality-value=\\"{{ext}}/{{quality}}\\" class=\\"j-audio-item\\"'),
    'background DEFAULT_TEMPLATES must not have duplicate class attribute on audio-item'
  );
  assert.ok(
    !bg.includes('title=\\"{{quality}}\\" title=\\"{{i18n_quality}}\\"'),
    'background DEFAULT_TEMPLATES must not have duplicate title attribute'
  );
})();

// 4. widget-manager.js: recursivePip null iframe guard, Switch Light null parent guard, extraImages mediaType, audio-drawer null guard
(function testWidgetManagerGuards() {
  const src = readRepo('src/content/widget/widget-manager.js');
  assert.ok(
    src.includes('if (!st) return;') && src.includes('try { url = st.contentDocument; } catch (_) {}'),
    'recursivePip must guard against missing iframe and cross-origin contentDocument access'
  );
  assert.ok(
    src.includes('if (!v) return;\n          this.$backdrop.style.top = msg[0]') ||
    src.includes('if (!v) return;\r\n          this.$backdrop.style.top = msg[0]'),
    'Switch Light must return early when parentElement is null before reading scrollHeight'
  );
  assert.ok(
    src.includes('EE.emit("download", { method: "download", params: { url: t5, filename: o2.filename, type: "image", mediaType: "image" } });'),
    'extraImages batch download must pass type: "image" and mediaType: "image"'
  );
  assert.ok(
    src.includes('if (i2 && i2.media && i2.media[0]) {'),
    'audio-drawer switcher must guard against empty i2.media array'
  );
})();

// 5. messenger-audio/main-world.js: targetOrigin on postMessage + Audio metadata timeout/cleanup (behavioral test)
(async function testMessengerAudioInjector() {
  const src = readRepo('src/inject/facebook/messenger-audio/main-world.js');
  const injectCopy = readRepo('inject/facebook/messenger-audio/main-world.js');
  const distCopy = readRepo('dist/unpacked/inject/facebook/messenger-audio/main-world.js');
  assert.strictEqual(src, injectCopy, 'inject/ copy must match src/inject/');
  assert.strictEqual(src, distCopy, 'dist/unpacked/inject/ copy must match src/inject/');

  const posted = [];
  let audioCleanedSrc = null;
  let lastAudioInstance = null;

  class FakeAudio {
    constructor() {
      this._src = '';
      this.duration = 65;
      lastAudioInstance = this;
    }
    set src(val) {
      this._src = val;
      if (val === '') {
        audioCleanedSrc = true;
      } else {
        setTimeout(() => {
          if (typeof this.onloadedmetadata === 'function') this.onloadedmetadata();
        }, 5);
      }
    }
    get src() {
      return this._src;
    }
  }

  class FakeBlob {
    constructor(type, size) {
      this.type = type;
      this.size = size;
    }
  }

  const sandbox = {
    window: {
      location: { origin: 'https://www.messenger.com' },
      postMessage(data, targetOrigin) {
        posted.push({ data, targetOrigin });
      }
    },
    URL: {
      createObjectURL() { return 'blob:https://www.messenger.com/test-audio-1'; },
      revokeObjectURL() {}
    },
    Blob: FakeBlob,
    Audio: FakeAudio,
    setTimeout,
    clearTimeout
  };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);

  const blob = new FakeBlob('audio/mp4', 12345);
  const blobUrl = sandbox.URL.createObjectURL(blob);
  assert.strictEqual(blobUrl, 'blob:https://www.messenger.com/test-audio-1');

  await new Promise((r) => setTimeout(r, 30));

  assert.strictEqual(posted.length, 1, 'Expected 1 postMessage after audio metadata loaded');
  assert.strictEqual(posted[0].targetOrigin, 'https://www.messenger.com', 'postMessage must specify window.location.origin');
  assert.strictEqual(posted[0].data.contentDuration, '01:05');
  assert.strictEqual(audioCleanedSrc, true, 'Audio element src must be cleared after metadata probe');
  assert.strictEqual(lastAudioInstance.onloadedmetadata, null, 'Audio onloadedmetadata handler must be cleared');

  sandbox.URL.revokeObjectURL(blobUrl);
  assert.strictEqual(posted.length, 2, 'Expected revoke postMessage');
  assert.strictEqual(posted[1].targetOrigin, 'https://www.messenger.com', 'revoke postMessage must specify window.location.origin');

  console.log('✓ test_widget_and_injector_fixes.js passed all 5 suites');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
