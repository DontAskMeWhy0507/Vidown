const assert = require('assert');

// ============================================================
// Test 1: Duration extraction from FFmpeg stderr when req has no duration/size
// ============================================================
function parseDurationFromStderr(stderr) {
  if (!stderr) return 0;
  const match = stderr.match(/Duration:\s*(\d+):(\d+):([0-9.]+)/);
  if (!match) return 0;
  return parseInt(match[1], 10) * 3600 + parseInt(match[2], 10) * 60 + parseFloat(match[3]);
}

function computeProgress(totalBytes, currentSec, totalSizeEstimated, totalDuration) {
  let percent = '';
  if (totalSizeEstimated > 0 && totalBytes > 0) {
    const pct = Math.min(99, Math.max(1, Math.round((totalBytes / totalSizeEstimated) * 100)));
    percent = `${pct}%`;
  } else if (totalDuration > 0 && currentSec > 0) {
    const pct = Math.min(99, Math.max(1, Math.round((currentSec / totalDuration) * 100)));
    percent = `${pct}%`;
  }
  return percent;
}

// ============================================================
// Test 2: Handling native port disconnect cleanly
// ============================================================
function handleNativeDisconnect(activeDownloads, updateHistoryFn, dispatchChangeFn, sendMsgFn, errorMsg) {
  const err = errorMsg || 'Native host disconnected';
  for (const [id, task] of activeDownloads.entries()) {
    task.state = 'error';
    task.error = err;
    if (typeof updateHistoryFn === 'function') {
      updateHistoryFn({
        id,
        state: 'error',
        error: err,
        speed: 'Mất kết nối'
      });
    }
    if (typeof dispatchChangeFn === 'function') {
      dispatchChangeFn({
        id,
        error: { current: 'SERVER_BAD_CONTENT' },
        state: { current: 'interrupted' }
      });
    }
    if (typeof sendMsgFn === 'function') {
      sendMsgFn({
        action: 'nativeError',
        taskId: id,
        error: err
      });
    }
  }
  activeDownloads.clear();
}

// -------------------------------------------------------------
// Test Execution
// -------------------------------------------------------------
console.log('[TDD] Running test_download_progress_and_disconnect...');

// Case 1: FFmpeg duration parsing
const sampleFfmpegStderr = `
ffmpeg version 8.1.2 Copyright (c) 2000-2026 the FFmpeg developers
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'https://rr3---sn-8pxuuxa-i5o66.googlevideo.com/...':
  Metadata:
    major_brand     : mp42
  Duration: 00:04:12.35, start: 0.000000, bitrate: 785 kb/s
  Stream #0:0[0x1](und): Video: vp9
`;
const dur = parseDurationFromStderr(sampleFfmpegStderr);
assert.strictEqual(Math.round(dur), 252, 'Duration should be ~252 seconds (4m 12s)');

// Case 2: Progress computation with parsed duration
const pct1 = computeProgress(1024 * 1024 * 5, 50.4, 0, dur);
assert.strictEqual(pct1, '20%', 'At 50.4s out of 252s, progress should be 20%');

const pct2 = computeProgress(1024 * 1024 * 20, 200, 0, dur);
assert.strictEqual(pct2, '79%', 'At 200s out of 252s, progress should be 79%');

// Case 3: Disconnect cleanup
const mockActive = new Map();
mockActive.set(900001, { id: 900001, state: 'downloading', percent: '1%' });
mockActive.set(900002, { id: 900002, state: 'downloading', percent: '15%' });

const updatedHistory = [];
const dispatchedChanges = [];
const sentMessages = [];

handleNativeDisconnect(
  mockActive,
  (rec) => updatedHistory.push(rec),
  (ch) => dispatchedChanges.push(ch),
  (msg) => sentMessages.push(msg),
  'Specified native messaging host not found.'
);

assert.strictEqual(mockActive.size, 0, 'activeDownloads Map should be cleared after disconnect');
assert.strictEqual(updatedHistory.length, 2, 'Both active tasks should be marked in history as error');
assert.strictEqual(updatedHistory[0].state, 'error');
assert.strictEqual(dispatchedChanges.length, 2, 'Both active tasks should dispatch download changed error');
assert.strictEqual(sentMessages.length, 2, 'nativeError message should be dispatched for both tasks');

console.log('✓ All TDD unit tests passed successfully!');
