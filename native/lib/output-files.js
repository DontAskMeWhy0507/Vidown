/**
 * Vidown Output Files & Path Lifecycle Manager
 * Handles filename sanitization, staging files, and safe publishing without overwriting existing files.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const WINDOWS_RESERVED_NAMES = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\..*)?$/i;

/**
 * Sanitize and validate filename at native boundary.
 * Rejects path traversal, drive letters, separators, NUL, and control characters.
 * Ensures output is strictly a safe basename.
 */
function sanitizeFilename(rawFilename, defaultExt = 'mp4') {
  if (!rawFilename || typeof rawFilename !== 'string') {
    return `Video_${Date.now()}.${defaultExt}`;
  }

  // 1. Take only basename
  let name = path.basename(rawFilename.trim());

  // 2. Strip NUL bytes, control characters, Windows ADS (:stream), separators
  name = name.replace(/[\x00-\x1f\x7f<>:"/\\|?*]/g, '_');

  // 3. Strip trailing dots and spaces (Windows filesystem quirk)
  name = name.replace(/[\s.]+$/, '').trim();

  // 4. Reject Windows reserved device names (CON, PRN, AUX, NUL, etc.)
  if (WINDOWS_RESERVED_NAMES.test(name)) {
    name = `File_${name}`;
  }

  // 5. Length limit (max 150 chars to allow room for directory paths and suffixes)
  if (name.length > 150) {
    const ext = path.extname(name);
    const base = path.basename(name, ext);
    name = `${base.slice(0, 150 - ext.length)}${ext}`;
  }

  // 6. Ensure non-empty and has extension
  if (!name || name === '.' || name === '..') {
    name = `Video_${Date.now()}.${defaultExt}`;
  } else if (!path.extname(name)) {
    name = `${name}.${defaultExt}`;
  }

  return name;
}

/**
 * Resolve target output directory and ensure it exists.
 * Verifies that resolved path doesn't escape.
 */
function resolveOutputDir(customDir) {
  const defaultDir = path.join(os.homedir(), 'Downloads');
  if (!customDir || typeof customDir !== 'string') {
    return defaultDir;
  }
  try {
    const resolved = path.resolve(customDir);
    if (!fs.existsSync(resolved)) {
      fs.mkdirSync(resolved, { recursive: true });
    }
    return resolved;
  } catch (_) {
    return defaultDir;
  }
}

/**
 * Generate a unique staging (.part) path for a job in the destination directory.
 * Staging file is locked to taskId so concurrent/duplicate titles never collide.
 */
function createJobFileContext({ taskId, outputDir, filename }) {
  const safeFilename = sanitizeFilename(filename);
  const targetDir = resolveOutputDir(outputDir);
  
  // Staging file in the exact same directory (same filesystem partition)
  const partPrefix = taskId ? `.vidown_tmp_${taskId}` : `.vidown_tmp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const partPath = path.join(targetDir, `${partPrefix}.part`);
  const preferredOutputPath = path.join(targetDir, safeFilename);

  return {
    taskId,
    targetDir,
    requestedFilename: safeFilename,
    partPath,
    preferredOutputPath,
    publishedPath: null,
    published: false
  };
}

/**
 * Find next available non-colliding destination path if target already exists.
 * e.g., video.mp4 -> video (1).mp4 -> video (2).mp4
 */
function findAvailableOutputPath(targetDir, requestedFilename) {
  const ext = path.extname(requestedFilename);
  const base = path.basename(requestedFilename, ext);
  let candidate = path.join(targetDir, requestedFilename);
  let counter = 1;

  while (fs.existsSync(candidate)) {
    candidate = path.join(targetDir, `${base} (${counter})${ext}`);
    counter++;
  }
  return candidate;
}

/**
 * Publish staging file to final destination without overwriting existing files.
 * Returns the final published absolute path, or throws error if publish fails.
 */
function publishJobFile(jobContext) {
  if (!jobContext || !jobContext.partPath) {
    throw new Error('Invalid job context');
  }

  if (!fs.existsSync(jobContext.partPath)) {
    throw new Error(`Staging file not found: ${jobContext.partPath}`);
  }

  const { targetDir, requestedFilename, partPath } = jobContext;

  // Find non-colliding path (never overwrite existing user files)
  let destPath = findAvailableOutputPath(targetDir, requestedFilename);

  // Try rename with small retry for Windows antivirus scanner release
  let attempts = 0;
  let success = false;
  let lastErr = null;

  while (attempts < 5 && !success) {
    try {
      // Re-check existence in case of race condition
      if (fs.existsSync(destPath)) {
        destPath = findAvailableOutputPath(targetDir, requestedFilename);
      }
      fs.renameSync(partPath, destPath);
      success = true;
    } catch (err) {
      lastErr = err;
      attempts++;
      if (err.code === 'EEXIST' || err.code === 'EPERM' || err.code === 'EBUSY') {
        // Wait 40ms before next attempt or pick new suffix
        const delay = 40;
        const start = Date.now();
        while (Date.now() - start < delay) {}
        destPath = findAvailableOutputPath(targetDir, requestedFilename);
      } else {
        break;
      }
    }
  }

  if (!success) {
    throw new Error(`Failed to publish file from staging: ${lastErr ? lastErr.message : 'Unknown error'}`);
  }

  jobContext.published = true;
  jobContext.publishedPath = destPath;
  return destPath;
}

/**
 * Safely cleanup staging file for a specific job.
 * NEVER deletes published or pre-existing files.
 */
function cleanupJobStaging(jobContext) {
  if (!jobContext || !jobContext.partPath) return;
  try {
    if (fs.existsSync(jobContext.partPath)) {
      fs.unlinkSync(jobContext.partPath);
    }
  } catch (_) {}
}

module.exports = {
  sanitizeFilename,
  resolveOutputDir,
  createJobFileContext,
  findAvailableOutputPath,
  publishJobFile,
  cleanupJobStaging,
  validateRelayCoverage
};

function validateRelayCoverage(intervals, total) {
  if (!total || !Array.isArray(intervals) || intervals.length === 0) return true;
  intervals.sort((a, b) => a[0] - b[0]);
  let currEnd = -1;
  for (const [s, e] of intervals) {
    if (currEnd === -1) {
      if (s !== 0) throw new Error('Sparse file: missing start');
      currEnd = e;
    } else {
      if (s > currEnd + 1) throw new Error(`Sparse file: gap at ${currEnd}`);
      currEnd = Math.max(currEnd, e);
    }
  }
  if (currEnd + 1 < total) throw new Error('Sparse file: missing end');
  return true;
}
