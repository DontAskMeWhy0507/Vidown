/**
 * scripts/package_release.js
 * 
 * Packages the Chrome extension for Chrome Web Store (CWS) release into:
 *   dist/savior-extension-v<version>.zip
 * 
 * Strict Exclusion Rules:
 *  - native/bin/ (ffmpeg.exe, yt-dlp.exe, and any binary executables)
 *  - *.exe, *.bat, *.sh, *.cmd (all executables and shell scripts)
 *  - *.log (e.g. host_activity.log)
 *  - tests/
 *  - docs/
 *  - .superpowers/
 *  - .git*
 *  - dist/
 *  - package*.json
 *  - scripts/
 *  - Orphan root popup.html, popup.js
 *  - common.js, README.md, CONTRIBUTING.md, NOTICE.md, types/, audit_bundle.txt
 * 
 * Verifications:
 *  - Zero executables (.exe, .bat, .sh, .cmd)
 *  - Zero log files (*.log)
 *  - Size well below 15MB limit
 *  - Manifest and critical extension files present
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const child_process = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT_DIR, 'manifest.json');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Read extension version from manifest.json
if (!fs.existsSync(MANIFEST_PATH)) {
  console.error('Error: manifest.json not found in project root!');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
const version = manifest.version || '3.1.0';
const ZIP_NAME = `savior-extension-v${version}.zip`;
const ZIP_PATH = path.join(DIST_DIR, ZIP_NAME);

// Ensure clean production bundles if sourcemaps are present
function ensureCleanProductionBundles() {
  const csPath = path.join(ROOT_DIR, 'content-script.js');
  const bgPath = path.join(ROOT_DIR, 'background.js');
  const mapRegex = /\/\/#\s*sourceMappingURL=/m;
  const csHasMap = fs.existsSync(csPath) && mapRegex.test(fs.readFileSync(csPath, 'utf8'));
  const bgHasMap = fs.existsSync(bgPath) && mapRegex.test(fs.readFileSync(bgPath, 'utf8'));

  if (csHasMap || bgHasMap) {
    console.log('Detected development sourcemap directive in content-script.js or background.js. Rebuilding production bundles...');
    child_process.execFileSync(process.execPath, [path.join(ROOT_DIR, 'scripts', 'build_common.js')], { stdio: 'inherit' });
    child_process.execFileSync(process.execPath, [path.join(ROOT_DIR, 'scripts', 'build_background.js')], { stdio: 'inherit' });
    child_process.execFileSync(process.execPath, [path.join(ROOT_DIR, 'scripts', 'build_content_script.js')], { stdio: 'inherit' });
    child_process.execFileSync(process.execPath, [path.join(ROOT_DIR, 'scripts', 'build_inject.js')], { stdio: 'inherit' });
  }
}
ensureCleanProductionBundles();

// Ensure dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// Exclusion rules
const EXCLUDED_DIRS = new Set([
  'src',
  'node_modules',
  'tests',
  'docs',
  '.superpowers',
  '.git',
  '.github',
  'dist',
  'scripts',
  'bin', // matches native/bin
  'core', // experimental Universal Media Core — unwired, excluded from build per release plan
  'native', // native messaging helper ships separately (host.js, installers, manifests)
  '.zcode', // local agent session data
  'types'
]);

const EXCLUDED_EXTENSIONS = new Set([
  '.exe',
  '.bat',
  '.sh',
  '.cmd',
  '.log'
]);

const EXCLUDED_FILES = new Set([
  'package.json',
  'package-lock.json',
  '.gitignore',
  '.DS_Store',
  'Thumbs.db',
  'common.js',
  'README.md',
  'CONTRIBUTING.md',
  'NOTICE.md',
  // Disabled SERP/onboarding stubs (22-byte placeholders, zero references)
  'fb-scrapper.js',
  'gads-scrapper.js',
  'gserp-scrapper.js',
  'yserp-scrapper.js',
  'promote-ccserp.js',
  'onboarding.js',
  // Legacy DNR rule redirecting to a non-existent /app.js — unreferenced
  'rules.json',
  '_sec_scan.js', // dev scratch utility
  'options-banner-with-skip-video.jpg', // banner variant of the removed skip-video feature
  '.env',
  'audit_bundle.txt',
  'audit_report.txt'
]);

function shouldExclude(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  const segments = normalized.split('/');
  const fileName = segments[segments.length - 1];
  const ext = path.extname(fileName).toLowerCase();
  if (fileName.startsWith('.env') || fileName === 'audit_bundle.txt' || fileName === 'audit_report.txt' || fileName.endsWith('.bak') || fileName.endsWith('.tmp')) {
    return true;
  }

  // Specifically exclude orphan root popup files
  if (normalized === 'popup.html' || normalized === 'popup.js') {
    return true;
  }

  // Check excluded directory names in path
  for (const seg of segments.slice(0, -1)) {
    if (EXCLUDED_DIRS.has(seg)) {
      return true;
    }
  }

  // Check specifically native/bin
  if (normalized.startsWith('native/bin/') || normalized === 'native/bin') {
    return true;
  }

  // Check excluded extensions
  if (EXCLUDED_EXTENSIONS.has(ext)) {
    return true;
  }

  // Check excluded exact filenames
  if (EXCLUDED_FILES.has(fileName)) {
    return true;
  }

  // Check package*.json pattern
  if (/^package.*\.json$/i.test(fileName)) {
    return true;
  }

  // Check git files
  if (fileName.startsWith('.git')) {
    return true;
  }

  return false;
}

function collectFiles(dir, baseDir = ROOT_DIR) {
  let fileList = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      const normalizedRel = relPath.replace(/\\/g, '/');
      const dirName = entry.name;
      if (EXCLUDED_DIRS.has(dirName) || normalizedRel === 'native/bin') {
        continue;
      }
      fileList = fileList.concat(collectFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      if (!shouldExclude(relPath)) {
        fileList.push({
          fullPath,
          relPath: relPath.replace(/\\/g, '/')
        });
      }
    }
  }

  fileList.sort((a, b) => a.relPath.localeCompare(b.relPath));
  return fileList;
}

function dosDateTime(d) {
  let dateObj;
  if (process.env.SOURCE_DATE_EPOCH) {
    dateObj = new Date(parseInt(process.env.SOURCE_DATE_EPOCH, 10) * 1000);
  } else if (d instanceof Date) {
    dateObj = d;
  } else {
    // Deterministic timestamp: 1980-01-01 00:00:00 UTC
    dateObj = new Date(Date.UTC(1980, 0, 1, 0, 0, 0));
  }
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();
  const seconds = Math.floor(dateObj.getUTCSeconds() / 2);

  const time = (hours << 11) | (minutes << 5) | seconds;
  const date = ((year - 1980) << 9) | (month << 5) | day;
  return { time, date };
}

// Precomputed CRC32 table (IEEE 802.3) for backward-compatible packaging on Node < 20.15 / Node 18
const CRC_TABLE = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  CRC_TABLE[i] = c >>> 0;
}

function calculateCRC32(buf) {
  if (typeof zlib.crc32 === 'function') {
    return (zlib.crc32(buf)) >>> 0;
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function buildZip(files, outputPath) {
  const localChunks = [];
  const cdChunks = [];
  let offset = 0;
  const dt = dosDateTime();

  for (const f of files) {
    const nameBuf = Buffer.from(f.relPath, 'utf8');
    const content = fs.readFileSync(f.fullPath);
    const uncompressedSize = content.length;
    const crc = calculateCRC32(content);

    let method = 8; // Deflate
    let compressed = zlib.deflateRawSync(content, { level: 9 });
    let compressedSize = compressed.length;

    // If deflate doesn't reduce size (e.g. already compressed images), store uncompressed
    if (compressedSize >= uncompressedSize) {
      method = 0; // Stored
      compressed = content;
      compressedSize = uncompressedSize;
    }

    // Local file header (30 bytes + name)
    const lh = Buffer.alloc(30 + nameBuf.length);
    lh.writeUInt32LE(0x04034b50, 0);       // Signature
    lh.writeUInt16LE(20, 4);                // Version needed (2.0)
    lh.writeUInt16LE(0x0800, 6);            // Flags (bit 11 = UTF-8)
    lh.writeUInt16LE(method, 8);            // Compression method
    lh.writeUInt16LE(dt.time, 10);          // Mod time
    lh.writeUInt16LE(dt.date, 12);          // Mod date
    lh.writeUInt32LE(crc, 14);              // CRC32
    lh.writeUInt32LE(compressedSize, 18);   // Compressed size
    lh.writeUInt32LE(uncompressedSize, 22); // Uncompressed size
    lh.writeUInt16LE(nameBuf.length, 26);   // Filename length
    lh.writeUInt16LE(0, 28);                // Extra field length
    nameBuf.copy(lh, 30);

    // Central directory header (46 bytes + name)
    const cdh = Buffer.alloc(46 + nameBuf.length);
    cdh.writeUInt32LE(0x02014b50, 0);       // Signature
    cdh.writeUInt16LE(20, 4);               // Version made by (2.0)
    cdh.writeUInt16LE(20, 6);               // Version needed (2.0)
    cdh.writeUInt16LE(0x0800, 8);           // Flags (bit 11 = UTF-8)
    cdh.writeUInt16LE(method, 10);          // Compression method
    cdh.writeUInt16LE(dt.time, 12);         // Mod time
    cdh.writeUInt16LE(dt.date, 14);         // Mod date
    cdh.writeUInt32LE(crc, 16);             // CRC32
    cdh.writeUInt32LE(compressedSize, 20);  // Compressed size
    cdh.writeUInt32LE(uncompressedSize, 24);// Uncompressed size
    cdh.writeUInt16LE(nameBuf.length, 28);  // Filename length
    cdh.writeUInt16LE(0, 30);               // Extra field length
    cdh.writeUInt16LE(0, 32);               // Comment length
    cdh.writeUInt16LE(0, 34);               // Disk number start
    cdh.writeUInt16LE(0, 36);               // Internal file attributes
    cdh.writeUInt32LE((0o100644 * 65536) >>> 0, 38); // External file attributes
    cdh.writeUInt32LE(offset, 42);          // Relative offset of local header
    nameBuf.copy(cdh, 46);

    localChunks.push(lh, compressed);
    cdChunks.push(cdh);
    offset += lh.length + compressed.length;
  }

  const cdOffset = offset;
  let cdSize = 0;
  for (const cdh of cdChunks) {
    cdSize += cdh.length;
  }

  // End of Central Directory record (22 bytes)
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);        // Signature
  eocd.writeUInt16LE(0, 4);                 // Disk number
  eocd.writeUInt16LE(0, 6);                 // Start disk
  eocd.writeUInt16LE(files.length, 8);      // Total entries on this disk
  eocd.writeUInt16LE(files.length, 10);     // Total entries
  eocd.writeUInt32LE(cdSize, 12);           // Central directory size
  eocd.writeUInt32LE(cdOffset, 16);         // Central directory offset
  eocd.writeUInt16LE(0, 20);                // Comment length

  const finalBuffer = Buffer.concat([...localChunks, ...cdChunks, eocd]);
  fs.writeFileSync(outputPath, finalBuffer);
  return finalBuffer.length;
}

function validateZip(zipPath) {
  const buf = fs.readFileSync(zipPath);
  let eocdOffset = -1;
  for (let i = buf.length - 22; i >= 0; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) {
      eocdOffset = i;
      break;
    }
  }
  if (eocdOffset === -1) {
    throw new Error('Packaging validation error: EOCD record not found!');
  }

  const totalEntries = buf.readUInt16LE(eocdOffset + 10);
  const cdOffset = buf.readUInt32LE(eocdOffset + 16);

  const entryNames = [];
  let curr = cdOffset;
  for (let i = 0; i < totalEntries; i++) {
    const sig = buf.readUInt32LE(curr);
    if (sig !== 0x02014b50) break;
    const nameLen = buf.readUInt16LE(curr + 28);
    const extraLen = buf.readUInt16LE(curr + 30);
    const commentLen = buf.readUInt16LE(curr + 32);
    const name = buf.toString('utf8', curr + 46, curr + 46 + nameLen);
    entryNames.push(name.replace(/\\/g, '/'));
    curr += 46 + nameLen + extraLen + commentLen;
  }

  // Check forbidden extensions
  for (const entry of entryNames) {
    const ext = path.extname(entry).toLowerCase();
    if (EXCLUDED_EXTENSIONS.has(ext)) {
      throw new Error(`Packaging validation failed: forbidden file found in zip: ${entry}`);
    }
    if (entry.startsWith('native/bin/') || entry.startsWith('tests/') || entry.startsWith('docs/')) {
      throw new Error(`Packaging validation failed: forbidden directory in zip: ${entry}`);
    }
    if (entry === 'popup.html' || entry === 'popup.js') {
      throw new Error(`Packaging validation failed: orphan root popup file found in zip: ${entry}`);
    }
  }

  // Check required files
  const required = ['manifest.json', 'background.chrome.js', 'popup/popup.html', 'popup/popup.js'];
  for (const req of required) {
    if (!entryNames.includes(req)) {
      throw new Error(`Packaging validation failed: missing critical file ${req}`);
    }
  }

  return entryNames;
}

// Execute packaging
console.log(`Packaging VidManager Extension v${version} for Chrome Web Store...`);
const filesToPackage = collectFiles(ROOT_DIR);
console.log(`Collected ${filesToPackage.length} clean extension files.`);

// A previous zip may be held open by Explorer/7-Zip/antivirus (EBUSY on write).
// Clear it when possible; if it stays locked, fall back to a standby name so
// the build never dies mid-run.
let zipPath = ZIP_PATH;
try {
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
} catch (e) {
  zipPath = path.join(DIST_DIR, ZIP_NAME.replace(/\.zip$/, '') + '-new.zip');
  console.warn(`WARNING: ${ZIP_NAME} is locked by another program (close the zip viewer).`);
  console.warn(`         Writing to ${path.basename(zipPath)} instead.`);
  try { if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath); } catch (_) {}
}

const zipSizeBytes = buildZip(filesToPackage, zipPath);
const zipSizeMB = (zipSizeBytes / (1024 * 1024)).toFixed(2);
console.log(`Successfully generated: ${path.relative(ROOT_DIR, zipPath)} (${zipSizeBytes} bytes / ${zipSizeMB} MB)`);

// Validate size
const MAX_ALLOWED_BYTES = 15 * 1024 * 1024; // 15MB
if (zipSizeBytes > MAX_ALLOWED_BYTES) {
  console.error(`ERROR: Package size ${zipSizeMB} MB exceeds 15MB limit!`);
  process.exit(1);
}

// Validate package cleanliness
const verifiedEntries = validateZip(zipPath);
console.log(`Validated ${verifiedEntries.length} entries inside release zip:`);
console.log(` - Executables: 0`);
console.log(` - Log files: 0`);
console.log(` - Package size: ${zipSizeMB} MB (limit: 15 MB)`);
console.log(`Package ready for Chrome Web Store distribution!`);
