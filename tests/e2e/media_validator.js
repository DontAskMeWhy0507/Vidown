/**
 * tests/e2e/media_validator.js
 *
 * 4-Stage Media Integrity Validation Engine:
 *   Stage 1: Magic byte validation (rejection of HTML/XML/JSON error responses)
 *   Stage 2: FFprobe JSON schema validation (duration, resolution, codecs, A/V sync)
 *   Stage 3: FFmpeg bitstream full decode verification (-xerror)
 *   Stage 4: Image dimension and decode verification
 */

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

// Determine FFmpeg and FFprobe binary paths
function resolveBinary(name) {
  // 1. Env override
  if (name === 'ffmpeg' && process.env.FFMPEG_PATH && fs.existsSync(process.env.FFMPEG_PATH)) {
    return process.env.FFMPEG_PATH;
  }
  if (name === 'ffprobe' && process.env.FFPROBE_PATH && fs.existsSync(process.env.FFPROBE_PATH)) {
    return process.env.FFPROBE_PATH;
  }

  // 2. Bundled native helper bin
  const bundled = path.resolve(__dirname, `../../native/bin/${name}.exe`);
  if (fs.existsSync(bundled)) {
    return bundled;
  }

  // 3. Fallback to system PATH
  return name;
}

const FFMPEG_BIN = resolveBinary('ffmpeg');
const FFPROBE_BIN = resolveBinary('ffprobe');

/**
 * Stage 1: Magic Byte and Header Validation
 */
function validateMagicBytes(filePath) {
  if (!fs.existsSync(filePath)) {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `File does not exist on disk: ${filePath}`
    };
  }

  const stat = fs.statSync(filePath);
  if (stat.size === 0) {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `File is completely empty (0 bytes): ${filePath}`
    };
  }

  const bufferSize = Math.min(stat.size, 1024);
  const buffer = Buffer.alloc(bufferSize);
  const fd = fs.openSync(filePath, 'r');
  try {
    fs.readSync(fd, buffer, 0, bufferSize, 0);
  } finally {
    fs.closeSync(fd);
  }

  const textHeader = buffer.toString('utf8', 0, Math.min(bufferSize, 256)).trim().toLowerCase();

  // Rejection checks: HTML, XML, JSON errors, HTTP error bodies
  if (
    textHeader.startsWith('<!doctype') ||
    textHeader.startsWith('<html') ||
    textHeader.startsWith('<!--') ||
    textHeader.includes('<head>') ||
    textHeader.includes('<body>')
  ) {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `Rejected HTML error document: ${textHeader.slice(0, 120)}`
    };
  }

  if (textHeader.startsWith('<?xml') || textHeader.includes('<error>') || textHeader.includes('<accessdenied>')) {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `Rejected XML error response: ${textHeader.slice(0, 120)}`
    };
  }

  if (textHeader.startsWith('{') && (textHeader.includes('"error"') || textHeader.includes('"message"'))) {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `Rejected JSON error response: ${textHeader.slice(0, 120)}`
    };
  }

  if (
    textHeader.includes('403 forbidden') ||
    textHeader.includes('404 not found') ||
    textHeader.includes('access denied') ||
    textHeader.includes('unauthorized')
  ) {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `Rejected text error page: ${textHeader.slice(0, 120)}`
    };
  }

  // Accepted multimedia signatures:
  // MP4 / MOV: 'ftyp' at offset 4
  const isMp4 = bufferSize >= 8 && buffer.toString('ascii', 4, 8) === 'ftyp';
  // WebM / MKV: EBML header 0x1A 0x45 0xDF 0xA3
  const isWebm = bufferSize >= 4 && buffer[0] === 0x1A && buffer[1] === 0x45 && buffer[2] === 0xDF && buffer[3] === 0xA3;
  // MPEG-TS: Sync byte 0x47
  const isMpegTs = bufferSize >= 188 && buffer[0] === 0x47 && buffer[188] === 0x47;
  // MP3: 'ID3' or sync frame 0xFF 0xFB / 0xFF 0xF3 / 0xFF 0xF2
  const isMp3 = (bufferSize >= 3 && buffer.toString('ascii', 0, 3) === 'ID3') ||
                (bufferSize >= 2 && buffer[0] === 0xFF && (buffer[1] & 0xE0) === 0xE0);
  // AAC ADTS: 0xFF 0xF1 or 0xFF 0xF9
  const isAac = bufferSize >= 2 && buffer[0] === 0xFF && (buffer[1] & 0xF6) === 0xF0;
  // Ogg / Opus / Vorbis: 'OggS'
  const isOgg = bufferSize >= 4 && buffer.toString('ascii', 0, 4) === 'OggS';
  // FLAC: 'fLaC'
  const isFlac = bufferSize >= 4 && buffer.toString('ascii', 0, 4) === 'fLaC';
  // JPEG: 0xFF 0xD8 0xFF
  const isJpeg = bufferSize >= 3 && buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
  // PNG: 0x89 0x50 0x4E 0x47 0x0D 0x0A 0x1A 0x0A
  const isPng = bufferSize >= 8 &&
                buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47 &&
                buffer[4] === 0x0D && buffer[5] === 0x0A && buffer[6] === 0x1A && buffer[7] === 0x0A;
  // WebP: 'RIFF' .... 'WEBP'
  const isWebp = bufferSize >= 12 &&
                 buffer.toString('ascii', 0, 4) === 'RIFF' &&
                 buffer.toString('ascii', 8, 12) === 'WEBP';
  // Subtitles: WebVTT or SRT
  const isVtt = buffer.toString('utf8', 0, Math.min(bufferSize, 8)).startsWith('WEBVTT');
  const isSrt = /^1\r?\n\d\d:\d\d:\d\d/.test(buffer.toString('utf8', 0, Math.min(bufferSize, 32)));

  let detectedType = 'unknown';
  if (isMp4) detectedType = 'mp4';
  else if (isWebm) detectedType = 'webm';
  else if (isMpegTs) detectedType = 'mpegts';
  else if (isMp3) detectedType = 'mp3';
  else if (isAac) detectedType = 'aac';
  else if (isOgg) detectedType = 'ogg';
  else if (isFlac) detectedType = 'flac';
  else if (isJpeg) detectedType = 'jpeg';
  else if (isPng) detectedType = 'png';
  else if (isWebp) detectedType = 'webp';
  else if (isVtt) detectedType = 'vtt';
  else if (isSrt) detectedType = 'srt';

  if (detectedType === 'unknown') {
    return {
      valid: false,
      stage: 'magic_bytes',
      error: `Unrecognized binary header: ${buffer.slice(0, 16).toString('hex')}`
    };
  }

  return {
    valid: true,
    stage: 'magic_bytes',
    detectedType,
    fileSize: stat.size
  };
}

/**
 * Stage 2: FFprobe JSON Metadata & Stream Schema
 */
function validateFFprobe(filePath, expected = {}) {
  return new Promise((resolve) => {
    const args = [
      '-v', 'error',
      '-show_format',
      '-show_streams',
      '-of', 'json',
      filePath
    ];

    cp.execFile(FFPROBE_BIN, args, { timeout: 30000, maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) {
        return resolve({
          valid: false,
          stage: 'ffprobe',
          error: `FFprobe execution failed: ${err.message}. Stderr: ${stderr}`
        });
      }

      let data;
      try {
        data = JSON.parse(stdout);
      } catch (jsonErr) {
        return resolve({
          valid: false,
          stage: 'ffprobe',
          error: `Failed to parse FFprobe JSON: ${jsonErr.message}. Output was: ${stdout.slice(0, 200)}`
        });
      }

      const format = data.format || {};
      const streams = data.streams || [];
      const videoStreams = streams.filter(s => s.codec_type === 'video');
      const audioStreams = streams.filter(s => s.codec_type === 'audio');

      const duration = parseFloat(format.duration || 0);
      const isImage = expected.mediaType === 'image' || expected.format === 'jpg' || expected.format === 'png' || expected.format === 'webp';
      const isSubtitle = expected.format === 'vtt' || expected.format === 'srt';

      // Duration verification (for media files with expected non-zero duration)
      if (!isImage && !isSubtitle) {
        if (expected.minDuration !== undefined && duration < expected.minDuration) {
          return resolve({
            valid: false,
            stage: 'ffprobe',
            error: `Duration ${duration}s is less than expected minimum ${expected.minDuration}s`,
            format,
            streams
          });
        }
        if (duration <= 0 && !expected.allowZeroDuration) {
          return resolve({
            valid: false,
            stage: 'ffprobe',
            error: `Invalid zero duration reported by FFprobe: ${duration}`,
            format,
            streams
          });
        }
      }

      // Video stream verification
      let videoStream = null;
      if (videoStreams.length > 0) {
        videoStream = videoStreams[0];
        const width = parseInt(videoStream.width || 0, 10);
        const height = parseInt(videoStream.height || 0, 10);

        if (width <= 0 || height <= 0) {
          return resolve({
            valid: false,
            stage: 'ffprobe',
            error: `Invalid video dimensions: ${width}x${height}`,
            format,
            streams
          });
        }

        if (expected.minHeight && height < expected.minHeight && width < expected.minHeight) {
          return resolve({
            valid: false,
            stage: 'ffprobe',
            error: `Resolution ${width}x${height} does not satisfy minimum dimension ${expected.minHeight}`,
            format,
            streams
          });
        }

        if (expected.videoCodec) {
          const expectedCodecs = Array.isArray(expected.videoCodec) ? expected.videoCodec : [expected.videoCodec];
          if (!expectedCodecs.includes(videoStream.codec_name)) {
            return resolve({
              valid: false,
              stage: 'ffprobe',
              error: `Video codec '${videoStream.codec_name}' not in expected list [${expectedCodecs.join(', ')}]`,
              format,
              streams
            });
          }
        }
      } else if (expected.mediaType === 'video' || expected.requireVideo) {
        return resolve({
          valid: false,
          stage: 'ffprobe',
          error: 'Expected video stream but none found',
          format,
          streams
        });
      }

      // Audio stream verification
      let audioStream = null;
      if (audioStreams.length > 0) {
        audioStream = audioStreams[0];
        const channels = parseInt(audioStream.channels || 0, 10);
        if (channels < 1) {
          return resolve({
            valid: false,
            stage: 'ffprobe',
            error: `Invalid audio channels: ${channels}`,
            format,
            streams
          });
        }

        if (expected.audioCodec) {
          const expectedAudioCodecs = Array.isArray(expected.audioCodec) ? expected.audioCodec : [expected.audioCodec];
          if (!expectedAudioCodecs.includes(audioStream.codec_name)) {
            return resolve({
              valid: false,
              stage: 'ffprobe',
              error: `Audio codec '${audioStream.codec_name}' not in expected list [${expectedAudioCodecs.join(', ')}]`,
              format,
              streams
            });
          }
        }
      } else if (expected.hasAudio) {
        return resolve({
          valid: false,
          stage: 'ffprobe',
          error: 'Expected audio stream but none found',
          format,
          streams
        });
      }

      // Audio / Video Synchronization delta check
      let audioSyncDiff = null;
      if (videoStream && audioStream && duration > 0) {
        const vDur = parseFloat(videoStream.duration || duration);
        const aDur = parseFloat(audioStream.duration || duration);
        audioSyncDiff = Math.abs(vDur - aDur);
        const maxSyncDiff = expected.syncToleranceSec || 1.5;

        if (audioSyncDiff > maxSyncDiff) {
          return resolve({
            valid: false,
            stage: 'ffprobe',
            error: `Audio/Video duration discrepancy (${audioSyncDiff.toFixed(2)}s) exceeds tolerance (${maxSyncDiff}s)`,
            format,
            streams
          });
        }
      }

      resolve({
        valid: true,
        stage: 'ffprobe',
        formatName: format.format_name,
        duration,
        size: parseInt(format.size || 0, 10),
        bitrate: parseInt(format.bit_rate || 0, 10),
        resolution: videoStream ? `${videoStream.width}x${videoStream.height}` : null,
        videoCodec: videoStream ? videoStream.codec_name : null,
        audioCodec: audioStream ? audioStream.codec_name : null,
        audioSyncDiffSec: audioSyncDiff !== null ? parseFloat(audioSyncDiff.toFixed(3)) : null,
        streamsCount: streams.length
      });
    });
  });
}

/**
 * Stage 3: FFmpeg Bitstream Full Decode Verification (-xerror)
 */
function validateFFmpegDecode(filePath) {
  return new Promise((resolve) => {
    const args = [
      '-v', 'error',
      '-xerror',
      '-i', filePath,
      '-f', 'null',
      '-'
    ];

    cp.execFile(FFMPEG_BIN, args, { timeout: 60000 }, (err, stdout, stderr) => {
      if (err) {
        return resolve({
          valid: false,
          stage: 'ffmpeg_decode',
          exitCode: err.code || 1,
          error: `FFmpeg full decode failed (code ${err.code}): ${stderr.trim() || err.message}`
        });
      }

      resolve({
        valid: true,
        stage: 'ffmpeg_decode',
        exitCode: 0,
        stderr: stderr.trim()
      });
    });
  });
}

/**
 * Stage 4: Image Validation (Dimensions & Decode)
 */
async function validateImage(filePath, expected = {}) {
  // Validate magic bytes first
  const magic = validateMagicBytes(filePath);
  if (!magic.valid) return magic;

  // Use ffprobe to inspect dimensions
  const probe = await validateFFprobe(filePath, { mediaType: 'image' });
  if (!probe.valid) return probe;

  // Full decode check via FFmpeg
  const decode = await validateFFmpegDecode(filePath);
  if (!decode.valid) return decode;

  const minDimension = expected.minDimension || 100;
  if (probe.resolution) {
    const [w, h] = probe.resolution.split('x').map(Number);
    if (w < minDimension || h < minDimension) {
      return {
        valid: false,
        stage: 'image_validation',
        error: `Image dimensions ${w}x${h} below minimum threshold ${minDimension}x${minDimension}`
      };
    }
  }

  return {
    valid: true,
    stage: 'image_validation',
    format: magic.detectedType,
    resolution: probe.resolution,
    fileSize: magic.fileSize
  };
}

/**
 * Complete 4-Stage Media Validation Pipeline
 */
async function validateMediaFile(filePath, expected = {}) {
  const result = {
    filePath,
    fileName: path.basename(filePath),
    valid: false,
    stage: null,
    details: {}
  };

  // Stage 1: Magic Bytes
  const magic = validateMagicBytes(filePath);
  result.details.magicBytes = magic;
  if (!magic.valid) {
    result.stage = 'magic_bytes';
    result.error = magic.error;
    return result;
  }

  const isImage = ['jpeg', 'png', 'webp'].includes(magic.detectedType);
  const isSubtitle = ['vtt', 'srt'].includes(magic.detectedType);

  if (isSubtitle) {
    result.valid = true;
    result.stage = 'complete';
    result.details.format = magic.detectedType;
    result.details.fileSize = magic.fileSize;
    return result;
  }

  if (isImage) {
    const imgRes = await validateImage(filePath, expected);
    result.details.image = imgRes;
    if (!imgRes.valid) {
      result.stage = 'image_validation';
      result.error = imgRes.error;
      return result;
    }
    result.valid = true;
    result.stage = 'complete';
    result.details.resolution = imgRes.resolution;
    result.details.format = imgRes.format;
    result.details.fileSize = imgRes.fileSize;
    return result;
  }

  // Stage 2: FFprobe Schema
  const probe = await validateFFprobe(filePath, expected);
  result.details.ffprobe = probe;
  if (!probe.valid) {
    result.stage = 'ffprobe';
    result.error = probe.error;
    return result;
  }

  // Stage 3: FFmpeg Full Bitstream Decode
  const decode = await validateFFmpegDecode(filePath);
  result.details.ffmpegDecode = decode;
  if (!decode.valid) {
    result.stage = 'ffmpeg_decode';
    result.error = decode.error;
    return result;
  }

  result.valid = true;
  result.stage = 'complete';
  result.details.format = probe.formatName;
  result.details.duration = probe.duration;
  result.details.resolution = probe.resolution;
  result.details.videoCodec = probe.videoCodec;
  result.details.audioCodec = probe.audioCodec;
  result.details.audioSyncDiffSec = probe.audioSyncDiffSec;
  result.details.fileSize = magic.fileSize;

  return result;
}

module.exports = {
  validateMagicBytes,
  validateFFprobe,
  validateFFmpegDecode,
  validateImage,
  validateMediaFile,
  FFMPEG_BIN,
  FFPROBE_BIN
};
