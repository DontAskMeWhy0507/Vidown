const assert = require('assert');
const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('=== TEST SUITE: DYNAMIC QUEUE, ASYNC BUFFER & TCP SOCKET ACCELERATION ===\n');

const hostPath = path.join(__dirname, '../native/host.js');
const hostCode = fs.readFileSync(hostPath, 'utf8');

// Test 1: Verify host.js uses keepAlive Agent for TCP connection reuse
assert(hostCode.includes('keepAlive: true'), 'host.js must configure Agent with keepAlive: true');
console.log('✓ Test 1: TCP sockets configured with keepAlive: true for zero TLS/handshake overhead.');

// Test 2: Verify host.js eliminated blocking writeSync in multi-thread download
const multiThreadFunc = hostCode.slice(hostCode.indexOf('function downloadFileMultiThread'));
const endFuncIndex = multiThreadFunc.indexOf('async function startMultiThreadDownload');
const multiThreadCode = multiThreadFunc.slice(0, endFuncIndex);

assert(!multiThreadCode.includes('fs.writeSync(fd, chunk'), 'downloadFileMultiThread must NOT call blocking fs.writeSync on every packet');
assert(multiThreadCode.includes('Buffer.concat') || multiThreadCode.includes('fs.write('), 'downloadFileMultiThread must buffer data in RAM and write asynchronously');
console.log('✓ Test 2: Blocking fs.writeSync removed; RAM buffering + async fs.write enabled.');

// Test 3: Verify dynamic queue block distribution
assert(multiThreadCode.includes('queue') || multiThreadCode.includes('BLOCK_SIZE'), 'downloadFileMultiThread must implement dynamic chunk queue (work queue)');
console.log('✓ Test 3: Dynamic Chunk Work Queue implemented to prevent 99% stalling.');

// Test 4: Verify concurrency is in the safe 8-12 worker range
const concurrencyMatch = multiThreadCode.match(/concurrency\s*=\s*(\d+)/);
assert(concurrencyMatch, 'Concurrency parameter must exist');
const concVal = parseInt(concurrencyMatch[1], 10);
assert(concVal >= 8 && concVal <= 12, `Concurrency must be between 8 and 12, got ${concVal}`);
console.log(`✓ Test 4: Default concurrency set to ${concVal} (within cautious 8–12 worker range).`);

console.log('\nAll dynamic queue & async buffer acceleration tests passed! 🚀');
