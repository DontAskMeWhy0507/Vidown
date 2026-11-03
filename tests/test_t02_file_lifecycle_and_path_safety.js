const assert = require('assert');
const fs = require('fs');
const path = require('path');
const os = require('os');
const {
  sanitizeFilename,
  resolveOutputDir,
  createJobFileContext,
  findAvailableOutputPath,
  publishJobFile,
  cleanupJobStaging
} = require('../native/lib/output-files');

console.log('=== TEST SUITE: T02 FILE LIFECYCLE & PATH SAFETY ===\n');

// 1. Filename sanitization and path traversal prevention
console.log('[Test 1] Filename sanitization & path traversal boundary');
assert.strictEqual(sanitizeFilename('../../../escaped.mp4'), 'escaped.mp4');
assert.strictEqual(sanitizeFilename('..\\..\\windows_escaped.mp4'), 'windows_escaped.mp4');
assert.strictEqual(sanitizeFilename('C:\\Windows\\System32\\calc.exe'), 'calc.exe');
assert.strictEqual(sanitizeFilename('CON.mp4'), 'File_CON.mp4');
assert.strictEqual(sanitizeFilename('NUL'), 'File_NUL.mp4');
assert.strictEqual(sanitizeFilename('trailing_dots...'), 'trailing_dots.mp4');
assert.strictEqual(sanitizeFilename('video:stream.mp4'), 'video_stream.mp4');
assert.strictEqual(sanitizeFilename('Phim Hay Tiếng Việt 2026 ⭐.mp4'), 'Phim Hay Tiếng Việt 2026 ⭐.mp4');
console.log('✓ Test 1: Filename sanitization rejects path traversal, ADS, and Windows reserved names.');

// 2. Pre-existing file preservation across Cancel, Error, and Collisions
console.log('\n[Test 2] Pre-existing file preservation & collision protection');
const tmpDir = path.join(os.tmpdir(), `vidown_t02_test_${Date.now()}`);
fs.mkdirSync(tmpDir, { recursive: true });

try {
  const existingFilePath = path.join(tmpDir, 'my_video.mp4');
  const originalContent = 'ORIGINAL_USER_FILE_CONTENT_DO_NOT_TOUCH';
  fs.writeFileSync(existingFilePath, originalContent);

  // Job 1 tries to download to same name 'my_video.mp4'
  const job1 = createJobFileContext({
    taskId: 'task-101',
    outputDir: tmpDir,
    filename: 'my_video.mp4'
  });

  // Staging file created
  fs.writeFileSync(job1.partPath, 'JOB1_DOWNLOADED_BYTES');
  assert.ok(fs.existsSync(job1.partPath), 'Staging file must exist');

  // Cancel Job 1
  cleanupJobStaging(job1);
  assert.strictEqual(fs.existsSync(job1.partPath), false, 'Job 1 staging must be cleaned up on cancel');
  assert.strictEqual(fs.existsSync(existingFilePath), true, 'Original file must still exist after cancel');
  assert.strictEqual(fs.readFileSync(existingFilePath, 'utf8'), originalContent, 'Original file content must be unmodified');

  // Job 2 completes download to same name 'my_video.mp4'
  const job2 = createJobFileContext({
    taskId: 'task-102',
    outputDir: tmpDir,
    filename: 'my_video.mp4'
  });
  fs.writeFileSync(job2.partPath, 'JOB2_NEW_VIDEO_BYTES');
  const publishedPath2 = publishJobFile(job2);

  // Job 2 must be published as my_video (1).mp4 without overwriting my_video.mp4
  assert.strictEqual(publishedPath2, path.join(tmpDir, 'my_video (1).mp4'));
  assert.strictEqual(fs.readFileSync(existingFilePath, 'utf8'), originalContent, 'Original file still intact');
  assert.strictEqual(fs.readFileSync(publishedPath2, 'utf8'), 'JOB2_NEW_VIDEO_BYTES', 'New file published with suffix');

  // Job 3 completes download to same name again
  const job3 = createJobFileContext({
    taskId: 'task-103',
    outputDir: tmpDir,
    filename: 'my_video.mp4'
  });
  fs.writeFileSync(job3.partPath, 'JOB3_THIRD_VIDEO_BYTES');
  const publishedPath3 = publishJobFile(job3);
  assert.strictEqual(publishedPath3, path.join(tmpDir, 'my_video (2).mp4'));
  assert.strictEqual(fs.readFileSync(publishedPath3, 'utf8'), 'JOB3_THIRD_VIDEO_BYTES');

  console.log('✓ Test 2: Existing files never overwritten; safe suffix applied atomically.');
} finally {
  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch (_) {}
}

console.log('\n======================================================');
console.log('ALL T02 FILE LIFECYCLE & PATH SAFETY TESTS PASSED! 🎉');
console.log('======================================================\n');
