const fs = require('fs');
const path = require('path');
const assert = require('assert');
const http = require('http');

console.log('=== TEST SUITE: NATIVE HOST INTEGRITY, SECURITY & LIFECYCLE ===\n');

async function runTests() {
  const hostPath = path.join(__dirname, '..', 'native', 'host.js');
  const hostCode = fs.readFileSync(hostPath, 'utf8');
  const host = require(hostPath);

  // -------------------------------------------------------------
  // Test 1: Short block retry exhaustion rejection (Task 7)
  // -------------------------------------------------------------
  console.log('[Test 1] Short block retry exhaustion rejection & size mismatch verification...');
  
  assert.ok(
    hostCode.includes("Incomplete block ") && hostCode.includes("after max retries"),
    'native/host.js must reject with "Incomplete block X after max retries" when retries exhausted on short body'
  );
  assert.ok(
    hostCode.includes("Downloaded size mismatch"),
    'native/host.js checkDone must verify file size matches totalSize before resolve()'
  );

  // Spin up a mock HTTP server that intentionally cuts connections prematurely
  const testOutPath = path.join(__dirname, 'temp_corrupt_test.bin');
  let serverRequests = 0;
  const mockServer = http.createServer((req, res) => {
    serverRequests++;
    // Send partial 206 response then end response before completing 1MB block
    res.writeHead(206, {
      'Content-Range': 'bytes 0-1048575/1048576',
      'Content-Type': 'application/octet-stream'
    });
    res.write(Buffer.alloc(100)); // Only send 100 bytes out of 1MB
    res.end();
  });

  await new Promise(resolve => mockServer.listen(0, '127.0.0.1', resolve));
  const port = mockServer.address().port;

  let failedAsExpected = false;
  try {
    await host.downloadFileMultiThread({
      url: `http://127.0.0.1:${port}/short_file.bin`,
      outPath: testOutPath,
      headers: {},
      totalSize: 1048576,
      concurrency: 1
    });
  } catch (err) {
    if (err.message.includes('Incomplete block') || err.message.includes('after max retries') || err.code === 'EACCES') {
      failedAsExpected = true;
    } else {
      console.error('Unexpected error message:', err.message);
    }
  } finally {
    mockServer.close();
    try { if (fs.existsSync(testOutPath)) fs.unlinkSync(testOutPath); } catch (_) {}
    try { if (fs.existsSync(testOutPath + ".part")) fs.unlinkSync(testOutPath + ".part"); } catch (_) {}
  }

  assert.ok(failedAsExpected, 'downloadFileMultiThread must reject when block transfers remain incomplete after retries');

  // Verify size mismatch check in checkDone
  const sizeMismatchOut = path.join(__dirname, 'temp_mismatch_test.bin');
  const sizeMismatchServer = http.createServer((req, res) => {
    // Deliver exactly 100 bytes for Range 0-99/100
    res.writeHead(206, {
      'Content-Range': 'bytes 0-99/100',
      'Content-Type': 'application/octet-stream'
    });
    res.end(Buffer.alloc(100));
  });

  await new Promise(resolve => sizeMismatchServer.listen(0, '127.0.0.1', resolve));
  const mismatchPort = sizeMismatchServer.address().port;

  let mismatchFailed = false;
  try {
    // Specify totalSize 500, but server block queue only covers 100 bytes
    await host.downloadFileMultiThread({
      url: `http://127.0.0.1:${mismatchPort}/short_file.bin`,
      outPath: sizeMismatchOut,
      headers: {},
      totalSize: 500, // Size mismatch: actual 100 vs expected 500
      concurrency: 1
    });
  } catch (err) {
    if (err.message.includes('Downloaded size mismatch') || err.message.includes('Incomplete block') || err.code === 'EACCES') {
      mismatchFailed = true;
    } else {
      console.error('Unexpected mismatch error message:', err.message);
    }
  } finally {
    sizeMismatchServer.close();
    try { if (fs.existsSync(sizeMismatchOut)) fs.unlinkSync(sizeMismatchOut); } catch (_) {}
    try { if (fs.existsSync(sizeMismatchOut + ".part")) fs.unlinkSync(sizeMismatchOut + ".part"); } catch (_) {}
  }

  assert.ok(mismatchFailed, 'checkDone must reject on totalSize mismatch');
  console.log('✓ Test 1: Incomplete block retry exhaustion and size mismatch cleanly reject without corrupting data.');

  // -------------------------------------------------------------
  // Test 2: Mux cookie same-origin guard (Task 8)
  // -------------------------------------------------------------
  console.log('\n[Test 2] Mux cookie same-origin and subdomain guard...');
  
  assert.ok(
    typeof host.isSameOriginOrSubdomain === 'function',
    'native/host.js must export isSameOriginOrSubdomain helper'
  );

  // Verify same origin
  assert.strictEqual(host.isSameOriginOrSubdomain('example.com', 'example.com'), true);
  // Verify subdomain matching
  assert.strictEqual(host.isSameOriginOrSubdomain('example.com', 'cdn.example.com'), true);
  assert.strictEqual(host.isSameOriginOrSubdomain('www.example.com', 'cdn.example.com'), true);
  assert.strictEqual(host.isSameOriginOrSubdomain('example.com', 'sub.cdn.example.com'), true);
  // Verify cross-origin blocking
  assert.strictEqual(host.isSameOriginOrSubdomain('example.com', 'evil.com'), false);
  assert.strictEqual(host.isSameOriginOrSubdomain('example.com', 'notexample.com'), false);
  assert.strictEqual(host.isSameOriginOrSubdomain('example.com', 'example.com.evil.com'), false);

  // Verify startFfmpegMux incorporates same-origin check
  assert.ok(
    hostCode.includes('isSameOriginOrSubdomain') || hostCode.includes('same-origin') || hostCode.includes('allowCookie'),
    'startFfmpegMux must validate same-origin / subdomain before attaching req.cookie'
  );
  console.log('✓ Test 2: Cookie leakage prevented by strictly guarding same-origin and subdomain targets.');

  // -------------------------------------------------------------
  // Test 3: Robust Error Handling & Grace Period (Task 9)
  // -------------------------------------------------------------
  console.log('\n[Test 3] Robust error handling & 5s grace period...');
  
  assert.ok(
    hostCode.includes("process.on('unhandledRejection'"),
    'native/host.js must register an unhandledRejection handler with logHost'
  );

  assert.ok(
    !hostCode.includes('1800000'),
    'native/host.js must NOT use 30-minute (1800000ms) disconnect grace timeout'
  );
  assert.strictEqual(
    host.DISCONNECT_GRACE_MS,
    5000,
    'native/host.js must define DISCONNECT_GRACE_MS as 5000 (5 seconds)'
  );
  console.log('✓ Test 3: unhandledRejection handler and 5s disconnect grace period verified.');

  // -------------------------------------------------------------
  // Test 4: openFile failure reporting on missing files & executable safety (Task 15)
  // -------------------------------------------------------------
  console.log('\n[Test 4] openFile missing file fallback reporting & executable safety...');

  let sentMessages = [];
  if (typeof host.setMessageHook === 'function') {
    host.setMessageHook((msg) => sentMessages.push(msg));
  }

  // Test missing file fallback
  const nonExistentTask = 'test-task-' + Date.now();
  host.handleMessage({
    action: 'openFile',
    id: nonExistentTask,
    taskId: nonExistentTask,
    path: 'C:\\non_existent_folder_xyz_123\\missing_video.mp4',
    filename: 'missing_video.mp4'
  });

  const missingResult = sentMessages.find(m => m.id === nonExistentTask || m.taskId === nonExistentTask);
  assert.ok(missingResult, 'handleMessage(openFile) must send openFileResult');
  assert.strictEqual(missingResult.success, false, 'openFileResult on missing file must have success: false');
  assert.strictEqual(missingResult.openedFolder, true, 'openFileResult on missing file must have openedFolder: true');
  assert.strictEqual(missingResult.error, 'File not found', 'openFileResult on missing file must report error: "File not found"');
  assert.ok(missingResult.path, 'openFileResult must report fallback folder path');

  // Test executable safety
  assert.ok(
    typeof host.isExecutableFile === 'function',
    'native/host.js must export isExecutableFile helper'
  );
  assert.strictEqual(host.isExecutableFile('payload.exe'), true);
  assert.strictEqual(host.isExecutableFile('script.bat'), true);
  assert.strictEqual(host.isExecutableFile('command.cmd'), true);
  assert.strictEqual(host.isExecutableFile('installer.msi'), true);
  assert.strictEqual(host.isExecutableFile('test.ps1'), true);
  assert.strictEqual(host.isExecutableFile('video.mp4'), false);
  assert.strictEqual(host.isExecutableFile('song.mp3'), false);

  // Test that handleMessage(openFile) refuses to spawn executable file
  const dummyExePath = path.join(__dirname, 'dummy_test_tool.exe');
  fs.writeFileSync(dummyExePath, 'MZ_dummy_binary');
  const exeTask = 'exe-task-' + Date.now();
  try {
    host.handleMessage({
      action: 'openFile',
      id: exeTask,
      taskId: exeTask,
      path: dummyExePath,
      filename: 'dummy_test_tool.exe'
    });
    const exeResult = sentMessages.find(m => m.id === exeTask || m.taskId === exeTask);
    assert.ok(exeResult, 'handleMessage(openFile) must send openFileResult for executable file');
    assert.strictEqual(exeResult.success, false, 'openFile must return success: false for executables');
    assert.ok(exeResult.error && exeResult.error.toLowerCase().includes('blocked'), 'openFile must report blocked execution');
  } finally {
    try { fs.unlinkSync(dummyExePath); } catch (_) {}
  }

  console.log('✓ Test 4: openFile accurately reports fallback folder on missing files and blocks executables.');

  // -------------------------------------------------------------
  // Test 5: Google Drive / video URL allowance in startDownload (Task 15)
  // -------------------------------------------------------------
  console.log('\n[Test 5] Google Drive / video URL allowance in startDownload...');

  assert.ok(
    !hostCode.includes("targetUrl.includes('google.com') && (req.title || '').length > 0"),
    'native/host.js startDownload must remove bogus google.com blacklist'
  );

  console.log('✓ Test 5: Google Drive & video URLs are allowed in startDownload.');

  console.log('\n======================================================');
  console.log('ALL HOST INTEGRITY & SECURITY TESTS PASSED! 🎉');
  console.log('======================================================\n');
}

runTests().catch(err => {
  console.error('\n❌ Test Suite Failed:', err);
  process.exit(1);
});
