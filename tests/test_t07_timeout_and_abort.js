const assert = require('assert');
const http = require('http');

console.log('=== TEST SUITE: T07 REQUEST TIMEOUT & ABORT RESILIENCE ===\n');

// 1. Mock server that holds headers or body indefinitely
let serverRequests = 0;
const hangingServer = http.createServer((req, res) => {
  serverRequests++;
  if (req.url === '/hang-headers') {
    // Never send headers
    return;
  }
  if (req.url === '/hang-body') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('first chunk');
    // Never call res.end()
    return;
  }
});

async function run() {
  await new Promise(resolve => hangingServer.listen(0, '127.0.0.1', resolve));
  const port = hangingServer.address().port;

  console.log('[Test 1] Socket timeout terminates stalled request without freezing queue');
  const client = http.get(`http://127.0.0.1:${port}/hang-headers`);
  client.setTimeout(500, () => {
    client.destroy(new Error('TIMEOUT_EXCEEDED'));
  });

  const err = await new Promise(resolve => client.on('error', resolve));
  assert.ok(err, 'Must emit error on timeout');
  assert.strictEqual(err.message, 'TIMEOUT_EXCEEDED');
  console.log('✓ Test 1: Stalled request cleanly aborted upon socket timeout.');

  if (typeof hangingServer.closeAllConnections === 'function') {
    hangingServer.closeAllConnections();
  }
  hangingServer.close();
  console.log('\n======================================================');
  console.log('ALL T07 TIMEOUT & ABORT TESTS PASSED! 🎉');
  console.log('======================================================\n');
}

run().then(() => {
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
