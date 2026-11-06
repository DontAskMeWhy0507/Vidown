/**
 * tests/e2e/test_adversarial_validator.js
 *
 * Adversarial Stress Test Suite for tests/e2e/media_validator.js.
 * Generates corrupt, truncated, spoofed, and error-payload media fixtures
 * to empirically prove that media_validator.js rejects all invalid media across
 * Stage 1 (magic bytes), Stage 2 (ffprobe), Stage 3 (ffmpeg full decode),
 * and Stage 4 (image dimensions & decode).
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const {
  validateMagicBytes,
  validateFFprobe,
  validateFFmpegDecode,
  validateImage,
  validateMediaFile
} = require('./media_validator');

const SCRATCH_DIR = path.resolve(__dirname, 'temp_adversarial_fixtures');

function setupScratch() {
  if (fs.existsSync(SCRATCH_DIR)) {
    fs.rmSync(SCRATCH_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(SCRATCH_DIR, { recursive: true });
}

function cleanupScratch() {
  if (fs.existsSync(SCRATCH_DIR)) {
    fs.rmSync(SCRATCH_DIR, { recursive: true, force: true });
  }
}

async function runAdversarialSuite() {
  console.log('========================================================================');
  console.log('  ADVERSARIAL STRESS TEST SUITE: MEDIA VALIDATOR INTEGRITY ENGINE');
  console.log('========================================================================\n');

  setupScratch();

  let totalTests = 0;
  let passedTests = 0;
  const failureList = [];

  async function testCase(name, runner) {
    totalTests++;
    try {
      await runner();
      passedTests++;
      console.log(`  [PASS] ${name}`);
    } catch (err) {
      console.error(`  [FAIL] ${name}: ${err.message}`);
      failureList.push({ name, error: err.message });
    }
  }

  // --- STAGE 1: MAGIC BYTES & ERROR RESPONSE REJECTION ---

  await testCase('TC-ADV-01: Non-existent file path rejection', async () => {
    const bogusPath = path.join(SCRATCH_DIR, 'non_existent_file.mp4');
    const res = await validateMediaFile(bogusPath);
    assert.strictEqual(res.valid, false, 'Non-existent file must be invalid');
    assert.strictEqual(res.stage, 'magic_bytes', 'Must fail at magic_bytes stage');
    assert.ok(res.error.includes('File does not exist'), `Expected 'File does not exist', got: ${res.error}`);
  });

  await testCase('TC-ADV-02: Zero-byte empty file rejection', async () => {
    const emptyFile = path.join(SCRATCH_DIR, 'zero_byte.mp4');
    fs.writeFileSync(emptyFile, Buffer.alloc(0));
    const res = await validateMediaFile(emptyFile);
    assert.strictEqual(res.valid, false, '0-byte file must be invalid');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('completely empty (0 bytes)'), `Expected 0-byte error, got: ${res.error}`);
  });

  await testCase('TC-ADV-03: HTML 403 Forbidden error response rejection', async () => {
    const html403 = path.join(SCRATCH_DIR, 'error_403.mp4');
    fs.writeFileSync(html403, '<!DOCTYPE html><html><head><title>403 Forbidden</title></head><body><h1>403 Forbidden</h1><p>Access Denied</p></body></html>');
    const res = await validateMediaFile(html403);
    assert.strictEqual(res.valid, false, 'HTML 403 error must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Rejected HTML error document'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-04: HTML 404 Not Found error page rejection', async () => {
    const html404 = path.join(SCRATCH_DIR, 'error_404.mp4');
    fs.writeFileSync(html404, '<html><head><title>404 Not Found</title></head><body>404 Not Found: Media does not exist</body></html>');
    const res = await validateMediaFile(html404);
    assert.strictEqual(res.valid, false, 'HTML 404 error must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Rejected HTML error document'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-05: Plaintext 403 Forbidden response rejection', async () => {
    const text403 = path.join(SCRATCH_DIR, 'text_403.mp4');
    fs.writeFileSync(text403, '403 Forbidden: Cloudflare WAF block. Access Denied to media stream.');
    const res = await validateMediaFile(text403);
    assert.strictEqual(res.valid, false, 'Plaintext 403 error must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Rejected text error page'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-06: Plaintext 404 Not Found response rejection', async () => {
    const text404 = path.join(SCRATCH_DIR, 'text_404.mp4');
    fs.writeFileSync(text404, '404 Not Found: The requested media resource has expired.');
    const res = await validateMediaFile(text404);
    assert.strictEqual(res.valid, false, 'Plaintext 404 error must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Rejected text error page'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-07: XML S3/GCS AccessDenied error rejection', async () => {
    const xmlError = path.join(SCRATCH_DIR, 'error_s3.mp4');
    fs.writeFileSync(xmlError, '<?xml version="1.0" encoding="UTF-8"?><Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>');
    const res = await validateMediaFile(xmlError);
    assert.strictEqual(res.valid, false, 'XML error must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Rejected XML error response'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-08: JSON API error response rejection', async () => {
    const jsonError = path.join(SCRATCH_DIR, 'error_api.mp4');
    fs.writeFileSync(jsonError, JSON.stringify({ error: 'SignatureExpired', message: 'URL signature has expired', code: 403 }));
    const res = await validateMediaFile(jsonError);
    assert.strictEqual(res.valid, false, 'JSON error must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Rejected JSON error response'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-09: Unrecognized random binary noise rejection', async () => {
    const garbageFile = path.join(SCRATCH_DIR, 'garbage.mp4');
    const noise = Buffer.alloc(512);
    for (let i = 0; i < 512; i++) noise[i] = (i * 37 + 11) % 256;
    fs.writeFileSync(garbageFile, noise);
    const res = await validateMediaFile(garbageFile);
    assert.strictEqual(res.valid, false, 'Random noise must be rejected');
    assert.strictEqual(res.stage, 'magic_bytes');
    assert.ok(res.error.includes('Unrecognized binary header'), `Got: ${res.error}`);
  });

  // --- STAGE 2 & 3: TRUNCATED MP4 AND DECODE REJECTION ---

  await testCase('TC-ADV-10: Truncated MP4 header (ftyp box without moov/mdat atoms)', async () => {
    // Has 'ftyp' at offset 4 so passes magic_bytes, but truncated to 32 bytes
    const truncatedMp4 = path.join(SCRATCH_DIR, 'truncated_header.mp4');
    const ftypBuffer = Buffer.from([
      0x00, 0x00, 0x00, 0x20, // box size 32
      0x66, 0x74, 0x79, 0x70, // 'ftyp'
      0x69, 0x73, 0x6f, 0x6d, // 'isom'
      0x00, 0x00, 0x02, 0x00, // minor version
      0x69, 0x73, 0x6f, 0x6d, // compatible brand 1
      0x69, 0x73, 0x6f, 0x32, // compatible brand 2
      0x61, 0x76, 0x63, 0x31, // compatible brand 3
      0x6d, 0x70, 0x34, 0x31  // compatible brand 4
    ]);
    fs.writeFileSync(truncatedMp4, ftypBuffer);

    // Magic bytes will pass because 'ftyp' is detected
    const magic = validateMagicBytes(truncatedMp4);
    assert.strictEqual(magic.valid, true, 'Magic bytes should detect MP4 ftyp');

    // But full validation must reject at ffprobe stage
    const res = await validateMediaFile(truncatedMp4);
    assert.strictEqual(res.valid, false, 'Truncated MP4 header must be rejected');
    assert.strictEqual(res.stage, 'ffprobe', 'Must fail at ffprobe stage');
    assert.ok(res.error.includes('FFprobe execution failed') || res.error.includes('moov atom not found'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-11: Mid-stream truncated MP4 (sliced from real video)', async () => {
    // Copy first 2048 bytes of real test video tc-yt-01
    const sourceVideo = path.resolve('f:\\Vidown\\test_downloads\\tc-yt-01_1793967212513.mp4');
    assert.ok(fs.existsSync(sourceVideo), 'Source test video must exist');
    const partialBuf = Buffer.alloc(2048);
    const fd = fs.openSync(sourceVideo, 'r');
    fs.readSync(fd, partialBuf, 0, 2048, 0);
    fs.closeSync(fd);

    const midTruncatedMp4 = path.join(SCRATCH_DIR, 'mid_truncated.mp4');
    fs.writeFileSync(midTruncatedMp4, partialBuf);

    const res = await validateMediaFile(midTruncatedMp4);
    assert.strictEqual(res.valid, false, 'Mid-stream truncated video must be rejected');
    assert.ok(['ffprobe', 'ffmpeg_decode'].includes(res.stage), `Must fail at ffprobe or ffmpeg_decode, got: ${res.stage}`);
  });

  // --- STAGE 4: CORRUPTED IMAGES ---

  await testCase('TC-ADV-12: Truncated JPEG image (valid header, incomplete data)', async () => {
    const corruptJpg = path.join(SCRATCH_DIR, 'corrupt.jpg');
    // Valid JPEG magic bytes 0xFF, 0xD8, 0xFF followed by truncated bytes
    fs.writeFileSync(corruptJpg, Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46]));
    const res = await validateMediaFile(corruptJpg);
    assert.strictEqual(res.valid, false, 'Corrupted JPEG must be rejected');
    assert.ok(['ffprobe', 'ffmpeg_decode', 'image_validation'].includes(res.stage), `Got stage: ${res.stage}`);
  });

  await testCase('TC-ADV-13: Tiny / below-threshold image rejection', async () => {
    // Find an existing image and require minDimension > actual dimension
    const realImg = path.resolve('f:\\Vidown\\test_downloads\\tc-fb-03_1793967226215.jpg');
    assert.ok(fs.existsSync(realImg), 'Real test image must exist');
    const res = await validateMediaFile(realImg, { minDimension: 4000 });
    assert.strictEqual(res.valid, false, 'Image below minDimension must be rejected');
    assert.strictEqual(res.stage, 'image_validation');
    assert.ok(res.error.includes('below minimum threshold'), `Got: ${res.error}`);
  });

  // --- SCHEMA AND CONSTRAINT STRESS-TESTS ---

  await testCase('TC-ADV-14: Media failing minDuration threshold rejection', async () => {
    const realVideo = path.resolve('f:\\Vidown\\test_downloads\\tc-yt-01_1793967212513.mp4');
    assert.ok(fs.existsSync(realVideo));
    const res = await validateMediaFile(realVideo, { minDuration: 300 }); // Real video is 12s
    assert.strictEqual(res.valid, false, 'Video shorter than minDuration must be rejected');
    assert.strictEqual(res.stage, 'ffprobe');
    assert.ok(res.error.includes('less than expected minimum'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-15: Video failing minHeight resolution threshold rejection', async () => {
    // tc-yt-02 is 1280x720, demand 1440 (2K)
    const video720 = path.resolve('f:\\Vidown\\test_downloads\\tc-yt-02_1793967215110.mp4');
    assert.ok(fs.existsSync(video720));
    const res = await validateMediaFile(video720, { minHeight: 1440 });
    assert.strictEqual(res.valid, false, '720p video demanding 1440p must be rejected');
    assert.strictEqual(res.stage, 'ffprobe');
    assert.ok(res.error.includes('does not satisfy minimum dimension'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-16: Video failing expected videoCodec rejection', async () => {
    const videoH264 = path.resolve('f:\\Vidown\\test_downloads\\tc-yt-01_1793967212513.mp4');
    assert.ok(fs.existsSync(videoH264));
    const res = await validateMediaFile(videoH264, { videoCodec: 'vp9' }); // Real codec is h264
    assert.strictEqual(res.valid, false, 'Video with codec mismatch must be rejected');
    assert.strictEqual(res.stage, 'ffprobe');
    assert.ok(res.error.includes('not in expected list'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-17: Video failing expected audioCodec rejection', async () => {
    const videoAac = path.resolve('f:\\Vidown\\test_downloads\\tc-yt-01_1793967212513.mp4');
    assert.ok(fs.existsSync(videoAac));
    const res = await validateMediaFile(videoAac, { audioCodec: 'flac' }); // Real codec is aac
    assert.strictEqual(res.valid, false, 'Video with audio codec mismatch must be rejected');
    assert.strictEqual(res.stage, 'ffprobe');
    assert.ok(res.error.includes('not in expected list'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-18: Audio-only file when video stream is strictly required', async () => {
    const audioMp3 = path.resolve('f:\\Vidown\\test_downloads\\tc-yt-07_1793967220004.mp3');
    assert.ok(fs.existsSync(audioMp3));
    const res = await validateMediaFile(audioMp3, { requireVideo: true });
    assert.strictEqual(res.valid, false, 'Audio file demanding video stream must be rejected');
    assert.strictEqual(res.stage, 'ffprobe');
    assert.ok(res.error.includes('Expected video stream but none found'), `Got: ${res.error}`);
  });

  await testCase('TC-ADV-19: Video with missing audio stream when hasAudio is required', async () => {
    // tc-pn-01 is silent video (no audio stream)
    const silentVideo = path.resolve('f:\\Vidown\\test_downloads\\tc-pn-01_1793967251503.mp4');
    assert.ok(fs.existsSync(silentVideo));
    const res = await validateMediaFile(silentVideo, { hasAudio: true });
    assert.strictEqual(res.valid, false, 'Silent video demanding audio stream must be rejected');
    assert.strictEqual(res.stage, 'ffprobe');
    assert.ok(res.error.includes('Expected audio stream but none found'), `Got: ${res.error}`);
  });

  cleanupScratch();

  console.log('\n========================================================================');
  console.log(`  ADVERSARIAL STRESS TEST RESULTS: ${passedTests}/${totalTests} Passed`);
  console.log('========================================================================\n');

  if (failureList.length > 0) {
    console.error('Adversarial Failures:');
    console.error(JSON.stringify(failureList, null, 2));
    process.exit(1);
  } else {
    console.log('🎉 ALL ADVERSARIAL STRESS TESTS PASSED: Media validator reliably rejects all invalid media!');
    process.exit(0);
  }
}

runAdversarialSuite().catch(err => {
  console.error('Fatal test runner error:', err);
  cleanupScratch();
  process.exit(1);
});
