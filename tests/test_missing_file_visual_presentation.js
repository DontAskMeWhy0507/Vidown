const fs = require('fs');
const assert = require('assert');

console.log('=== TEST SUITE: MISSING FILE VISUAL PRESENTATION (DIMMED & RED STRIKETHROUGH) ===\n');

// 1. Verify downloads.css has card-missing-file with opacity & red line-through
const downloadsCss = fs.readFileSync('downloads/downloads.css', 'utf8');
assert.ok(downloadsCss.includes('.download-card.card-missing-file'), 'downloads.css must style .download-card.card-missing-file');
assert.ok(downloadsCss.includes('opacity: 0.58'), 'downloads.css must dim the card opacity');
assert.ok(downloadsCss.includes('text-decoration: line-through !important'), 'downloads.css must strike-through missing file title');
assert.ok(downloadsCss.includes('text-decoration-color: #ef4444 !important'), 'downloads.css must use red line for strikethrough');
console.log('✓ 1. downloads.css card-missing-file styling verified (dimmed + red line-through).');

// 2. Verify popup.css has recent-card-missing
const popupCss = fs.readFileSync('popup/popup.css', 'utf8');
assert.ok(popupCss.includes('.recent-card.recent-card-missing'), 'popup.css must style .recent-card.recent-card-missing');
assert.ok(popupCss.includes('text-decoration: line-through !important'), 'popup.css must strike-through missing title');
assert.ok(popupCss.includes('text-decoration-color: #ef4444 !important'), 'popup.css must use red strikethrough color');
console.log('✓ 2. popup.css recent-card-missing styling verified.');

// 3. Verify downloads.js excludes isDeleted from error banner row
const downloadsJs = fs.readFileSync('downloads/downloads.js', 'utf8');
assert.ok(downloadsJs.includes('if (isCanceled || isError) {'), 'downloads.js must not render technical error banner row for isDeleted items');
assert.ok(downloadsJs.includes("card.classList.add('card-missing-file')"), 'downloads.js must add card-missing-file class for isDeleted');
console.log('✓ 3. downloads.js error row suppression and card-missing-file class addition verified.');

// 4. Verify popup.js adds recent-card-missing
const popupJs = fs.readFileSync('popup/popup.js', 'utf8');
assert.ok(popupJs.includes("card.classList.add('recent-card-missing')"), 'popup.js must add recent-card-missing class');
console.log('✓ 4. popup.js recent-card-missing class addition verified.');

console.log('\n================================================================');
console.log('ALL MISSING FILE VISUAL PRESENTATION TESTS PASSED! 🎉');
console.log('================================================================\n');
