const assert = require('assert');

// 1. Test progress parsing logic as implemented in host.js
function parseProgressLine(line, targetUrl) {
  if (line.includes('UVD_PROG::')) {
    const parts = line.split('UVD_PROG::')[1].split('::');
    const percent = (parts[0] || '').trim();
    const speed = (parts[1] || '').trim();
    const eta = (parts[2] || '').trim();
    const size = (parts[3] || '').trim();
    if (percent && percent !== 'NA%') {
      return {
        percent,
        speed: speed && speed !== 'NA' ? speed : '',
        eta: eta && eta !== 'NA' ? eta : '',
        size: size && size !== 'NA' ? size : ''
      };
    }
  }

  const progMatch = line.match(/\[download\]\s+([\d.]+)%\s+of\s+~?([\d.]+\w+)(?:\s+at\s+([\d.]+\w+\/s))?(?:\s+ETA\s+([\d:]+))?/);
  if (progMatch) {
    return {
      percent: `${Math.round(parseFloat(progMatch[1]))}%`,
      size: progMatch[2] || '',
      speed: progMatch[3] || '',
      eta: progMatch[4] || ''
    };
  }
  return null;
}

// 2. Test YouTube ID extractor logic as implemented in host.js
function extractYouTubeUrl(candidates) {
  for (const c of candidates) {
    if (c && typeof c === 'string') {
      const vMatch = c.match(/(?:[?&]v=|\/shorts\/|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (vMatch && vMatch[1]) {
        return `https://www.youtube.com/watch?v=${vMatch[1]}`;
      }
    }
  }
  return null;
}

// TEST 1: Custom template progress
const line1 = 'download:UVD_PROG::45.5%::12.5MiB/s::00:03::25.0MiB';
const p1 = parseProgressLine(line1, 'https://youtube.com');
assert.strictEqual(p1.percent, '45.5%');
assert.strictEqual(p1.speed, '12.5MiB/s');
assert.strictEqual(p1.eta, '00:03');
assert.strictEqual(p1.size, '25.0MiB');
console.log('✓ Test 1: Custom template parsed successfully');

// TEST 2: Fallback standard yt-dlp progress
const line2 = '[download]  85.2% of  100.00MiB at  25.40MiB/s ETA 00:01';
const p2 = parseProgressLine(line2, 'https://youtube.com');
assert.strictEqual(p2.percent, '85%');
assert.strictEqual(p2.size, '100.00MiB');
assert.strictEqual(p2.speed, '25.40MiB/s');
assert.strictEqual(p2.eta, '00:01');
console.log('✓ Test 2: Standard yt-dlp fallback parsed successfully');

// TEST 3: YouTube URL extraction from various URL patterns
const yt1 = extractYouTubeUrl(['https://www.youtube.com/watch?v=dQw4w9WgXcQ']);
assert.strictEqual(yt1, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const yt2 = extractYouTubeUrl(['https://youtu.be/dQw4w9WgXcQ?t=10']);
assert.strictEqual(yt2, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const yt3 = extractYouTubeUrl(['https://www.youtube.com/shorts/dQw4w9WgXcQ']);
assert.strictEqual(yt3, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const yt4 = extractYouTubeUrl(['https://www.youtube.com/embed/dQw4w9WgXcQ']);
assert.strictEqual(yt4, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

// Fallback from candidates: candidate 0 is googlevideo stream, candidate 1 is referer watch page
const yt5 = extractYouTubeUrl([
  'https://rr2---sn-4g5ednks.googlevideo.com/videoplayback?expire=123',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
]);
assert.strictEqual(yt5, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
console.log('✓ Test 3: YouTube URL canonicalization passed for all patterns');

console.log('\nAll host acceleration tests passed! 🚀');
