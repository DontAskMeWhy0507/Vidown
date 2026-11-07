/**
 * Vidown Unified Test Runner
 * Executes all test suites (tests/test_*.js) with individual timeout, resource cleanup,
 * and clear stdout/stderr reporting on failures.
 */

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const TESTS_DIR = path.join(__dirname, '..', 'tests');
const SUITE_TIMEOUT_MS = parseInt(process.env.SUITE_TIMEOUT_MS, 10) || 30000;

function getTestFiles() {
  if (!fs.existsSync(TESTS_DIR)) return [];
  return fs.readdirSync(TESTS_DIR)
    .filter(f => f.startsWith('test_') && f.endsWith('.js'))
    .sort();
}

function runSuite(file) {
  const fullPath = path.join(TESTS_DIR, file);
  const startTime = Date.now();
  try {
    const stdout = cp.execFileSync(process.execPath, [fullPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: SUITE_TIMEOUT_MS,
      killSignal: 'SIGKILL',
      windowsHide: true,
      env: { ...process.env, VIDOWN_TEST_RUNNER: '1' }
    });
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    return { file, passed: true, duration, stdout: stdout.toString() };
  } catch (err) {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const timedOut = err.killed || err.signal === 'SIGTERM';
    return {
      file,
      passed: false,
      duration,
      timedOut,
      status: err.status,
      signal: err.signal,
      stdout: err.stdout ? err.stdout.toString() : '',
      stderr: err.stderr ? err.stderr.toString() : err.message
    };
  }
}

function main() {
  const testFiles = getTestFiles();
  console.log(`\n▶ Starting Vidown Test Runner (${testFiles.length} suites found, timeout ${SUITE_TIMEOUT_MS / 1000}s per suite)...\n`);

  let passedCount = 0;
  let failedCount = 0;
  const failures = [];

  for (let i = 0; i < testFiles.length; i++) {
    const file = testFiles[i];
    const res = runSuite(file);
    if (res.passed) {
      passedCount++;
      process.stdout.write(`  ✓ [${i + 1}/${testFiles.length}] ${file} (${res.duration}s)\n`);
    } else {
      failedCount++;
      process.stdout.write(`  ✖ [${i + 1}/${testFiles.length}] ${file} (${res.duration}s) - ${res.timedOut ? 'TIMED OUT' : 'FAILED'}\n`);
      failures.push(res);
    }
  }

  console.log('\n======================================================');
  console.log(`TEST SUMMARY: ${passedCount} passed, ${failedCount} failed of ${testFiles.length} total suites.`);
  console.log('======================================================\n');

  if (failures.length > 0) {
    console.error('FAILURES DETAIL:\n');
    failures.forEach((f, idx) => {
      console.error(`--- [${idx + 1}] ${f.file} (${f.timedOut ? 'TIMED OUT' : `exit code ${f.status}`}) ---`);
      if (f.stderr) console.error(`STDERR:\n${f.stderr.trim()}\n`);
      if (f.stdout) console.error(`STDOUT:\n${f.stdout.trim().slice(-1000)}\n`);
    });
    process.exit(1);
  } else {
    console.log('🎉 ALL TEST SUITES PASSED CLEANLY!\n');
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { runSuite, getTestFiles };
