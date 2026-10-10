const assert = require('assert');

function addRecord(history, newRecord, maxItems = 200) {
  const filtered = history.filter(item => item.id !== newRecord.id);
  const updated = [newRecord, ...filtered];
  if (updated.length > maxItems) updated.length = maxItems;
  return updated;
}

const mockHistory = Array.from({ length: 205 }, (_, i) => ({ id: i, title: `Video ${i}` }));
const res = addRecord(mockHistory, { id: 999, title: 'New Video' });
assert.strictEqual(res.length, 200);
assert.strictEqual(res[0].id, 999);
console.log('Task 1 logic test passed');
