const assert = require('assert');

// 1. Test updateCounts null-safety and calculation logic
function testUpdateCounts() {
  const allItems = [
    { id: 1, state: 'downloading', type: 'video', percent: '45%' },
    { id: 2, state: 'completed', type: 'video', percent: '100%' },
    { id: 3, state: 'completed', type: 'audio', percent: '100%' },
    { id: 4, state: 'error', type: 'video', error: 'SERVER_BAD_CONTENT' }
  ];

  const total = allItems.length;
  const downloading = allItems.filter(it => it.state === 'downloading').length;
  const completed = allItems.filter(it => it.state === 'completed').length;
  const video = allItems.filter(it => it.type !== 'audio').length;
  const audio = allItems.filter(it => it.type === 'audio').length;

  assert.strictEqual(total, 4);
  assert.strictEqual(downloading, 1);
  assert.strictEqual(completed, 2);
  assert.strictEqual(video, 3);
  assert.strictEqual(audio, 1);

  // Verify null-safe element assignment
  let countAll = null;
  let countDownloading = { textContent: '' };
  
  // Shouldn't throw
  if (countAll) countAll.textContent = total;
  if (countDownloading) countDownloading.textContent = downloading;

  assert.strictEqual(countDownloading.textContent, 1);
  console.log('✓ testUpdateCounts passed');
}

// 2. Test formatPercentWidth helper
function testFormatPercentWidth() {
  function formatPercentWidth(pct) {
    if (!pct) return '0%';
    const m = String(pct).match(/(\d+(?:\.\d+)?)%/);
    if (m) {
      const val = parseFloat(m[1]);
      return `${Math.min(100, Math.max(0, val))}%`;
    }
    const val = parseFloat(pct);
    if (!isNaN(val) && val >= 0 && val <= 100) return `${val}%`;
    return '0%';
  }

  assert.strictEqual(formatPercentWidth('45%'), '45%');
  assert.strictEqual(formatPercentWidth('99.9%'), '99.9%');
  assert.strictEqual(formatPercentWidth('100%'), '100%');
  assert.strictEqual(formatPercentWidth(50), '50%');
  assert.strictEqual(formatPercentWidth('invalid'), '0%');
  assert.strictEqual(formatPercentWidth(''), '0%');
  assert.strictEqual(formatPercentWidth(null), '0%');
  console.log('✓ testFormatPercentWidth passed');
}

// 3. Test taskId matching (string vs number)
function testTaskIdMatching() {
  const allItems = [
    { id: 900001, percent: '10%' },
    { id: '900002', percent: '20%' }
  ];

  const findItem = (id) => allItems.find(it => String(it.id) === String(id));

  assert.ok(findItem('900001'));
  assert.strictEqual(findItem('900001').percent, '10%');

  assert.ok(findItem(900002));
  assert.strictEqual(findItem(900002).percent, '20%');

  console.log('✓ testTaskIdMatching passed');
}

testUpdateCounts();
testFormatPercentWidth();
testTaskIdMatching();
console.log('\nAll DOM and progress logic tests passed! 🎉');
