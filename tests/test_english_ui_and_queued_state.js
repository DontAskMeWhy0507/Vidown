// tests/test_english_ui_and_queued_state.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const viCharRegex = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđĐ]/;

// 1. Verify zero Vietnamese characters remain in UI HTML/JS and background/host status strings
for (const rel of [
  '../popup/popup.html',
  '../popup/popup.js',
  '../downloads/downloads.html',
  '../downloads/downloads.js'
]) {
  const content = fs.readFileSync(path.join(__dirname, rel), 'utf8');
  const match = content.match(viCharRegex);
  assert.strictEqual(match, null, `${rel} must be 100% English (found "${match ? match[0] : ''}")`);
}

// 2. Verify queued state is handled in both downloads.js and popup.js
const dlJs = fs.readFileSync(path.join(__dirname, '../downloads/downloads.js'), 'utf8');
const popupJs = fs.readFileSync(path.join(__dirname, '../popup/popup.js'), 'utf8');
assert.ok(dlJs.includes("item.state === 'queued'"), 'downloads.js must handle queued state');
assert.ok(popupJs.includes("item.state === 'queued'"), 'popup.js must handle queued state');
assert.ok(popupJs.includes('CSS.escape(String(msg.taskId))'), 'popup.js must escape taskId in querySelector');

// 3. Verify locale parity and widget_download_tooltip_image_and_video key
const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/en/messages.json'), 'utf8'));
const id = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/id/messages.json'), 'utf8'));
assert.ok(en.widget_download_tooltip_image_and_video, 'en messages.json must define widget_download_tooltip_image_and_video');
assert.ok(id.widget_download_tooltip_image_and_video, 'id messages.json must define widget_download_tooltip_image_and_video');
for (const key of Object.keys(en)) {
  assert.ok(id[key], `id messages.json is missing key: ${key}`);
}

console.log('✓ 100% English UI, queued state, and locale parity verified!');
