/**
 * Vidown Core Semantic Utilities
 * Reconstructed from module-0.js with clean identifiers and explicit types
 */

import { MEDIA_TYPES, isHlsOrZip } from './constants.js';
import cryptoRollup from '../crypto/crypto-rollup.js';

export function query(selector, root) {
  return (root || (typeof document !== 'undefined' ? document : null))?.querySelector(selector) || null;
}

export function queryAll(selector, root) {
  const doc = root || (typeof document !== 'undefined' ? document : null);
  if (!doc || !doc.querySelectorAll) return [];
  return Array.prototype.slice.call(doc.querySelectorAll(selector));
}

export function findParent(node, className) {
  let curr = node;
  while (curr && curr.classList && !curr.classList.contains(className)) {
    curr = curr.parentNode;
  }
  return curr;
}

export function nearestParent(node, selector) {
  let curr = node;
  const docRoot = typeof document !== 'undefined' ? document.body?.parentNode?.parentNode : null;
  while (curr && curr !== docRoot && !curr.matches?.(selector)) {
    curr = curr.parentElement;
  }
  return curr === docRoot ? null : curr;
}

export function getNodePropOrEmptyString(node, prop) {
  return (node && node[prop]) || '';
}

export function stripTagsExcept(html) {
  return (html || '').replace(/<(?!\/?(?:b|em))[^>]+>/g, '');
}

export function toArray(list) {
  return Array.prototype.slice.call(list || []);
}

export function unique(arr) {
  return Array.from(new Set(arr || []));
}

export function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return typeof btoa !== 'undefined' ? btoa(binary) : Buffer.from(binary, 'binary').toString('base64');
}

export function base64ToArrayBuffer(base64) {
  const binary = typeof atob !== 'undefined' ? atob(base64) : Buffer.from(base64, 'base64').toString('binary');
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export function cleanSymbols(text) {
  if (!text) return '';
  return text
    .replaceAll(/[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g, '')
    .replaceAll(/\s+/g, ' ');
}

export function beautifyFileSize(bytes, roundKb = false) {
  if (!bytes) return '';
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const isWin = typeof window !== 'undefined' && window.navigator?.appVersion?.includes('Win');
  const base = isWin ? 1024 : 1000;
  
  let val = bytes;
  let idx = 0;
  while (idx < units.length && val >= base) {
    val /= base;
    idx++;
  }
  
  const unit = units[idx];
  let formatted = Math.round(10 * val) / 10;
  if (roundKb && unit?.toLowerCase() === 'kb') {
    formatted = formatted.toFixed(0);
  }
  return `${formatted}${unit}`;
}

export function getFileNameFromContentDisposition(header) {
  return header?.match(/filename=["']([^"']+)["']/i)?.[1];
}

export function getMediaType(contentType, candidateExts = []) {
  for (const [typeKey, mediaMeta] of Object.entries(MEDIA_TYPES)) {
    if (contentType && contentType.match(mediaMeta.rgxp)) {
      return typeKey;
    }
    if (Array.isArray(candidateExts)) {
      for (const ext of candidateExts) {
        if (mediaMeta.extensions.includes(ext)) {
          return typeKey;
        }
      }
    } else if (mediaMeta.extensions.includes(candidateExts)) {
      return typeKey;
    }
  }
  return null;
}

export function detectMediaTypeAndExt(mediaItem, contentType = '', disposition = '') {
  const mimeLower = (contentType || '').toLowerCase();
  
  if (mimeLower.includes('application/x-mpegurl') || mimeLower.includes('application/vnd.apple.mpegurl')) {
    mediaItem.type = 'video';
    mediaItem.ext = 'm3u8';
    return mediaItem;
  }
  
  if (mimeLower.includes('application/dash+xml')) {
    mediaItem.type = 'video';
    mediaItem.ext = 'mpd';
    return mediaItem;
  }
  
  const detectedType = getMediaType(contentType, mediaItem.exts || []);
  if (detectedType) {
    mediaItem.type = detectedType;
    const match = contentType.match(/mp4|webm/g);
    if (!mediaItem.exts?.length && match && match[0]) {
      mediaItem.ext = match[0];
    }
  }
  
  if (isHlsOrZip(mediaItem.ext)) {
    mediaItem.type = 'video';
  }
  
  return mediaItem;
}

export function parseLinkPhimmoiChillee(hexString) {
  const secretKey = 'sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ';
  const base64Cipher = cryptoRollup.enc.Hex.parse(hexString).toString(cryptoRollup.enc.Base64);
  return cryptoRollup.AES.decrypt(base64Cipher, secretKey).toString(cryptoRollup.enc.Utf8);
}

export function fetchWithTimeout(url, options = {}, abortController = null) {
  const timeoutMs = options.timeout;
  const opts = { ...options };
  delete opts.timeout;
  
  if (timeoutMs) {
    const controller = abortController || new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    return fetch(url, { ...opts, signal: controller.signal })
      .finally(() => clearTimeout(timer));
  }
  
  return fetch(url, opts);
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function debounce(fn, delay = 100, immediate = false) {
  let timer = null;
  let destroyed = false;
  
  function debounced(...args) {
    if (destroyed) return;
    const context = this;
    
    if (timer) clearTimeout(timer);
    else if (immediate) fn.apply(context, args);
    
    timer = setTimeout(() => {
      if (!immediate) fn.apply(context, args);
      timer = null;
    }, delay);
  }
  
  debounced.destroy = () => {
    if (timer) clearTimeout(timer);
    destroyed = true;
  };
  
  return debounced;
}

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    query,
    queryAll,
    findParent,
    nearestParent,
    getNodePropOrEmptyString,
    stripTagsExcept,
    toArray,
    unique,
    arrayBufferToBase64,
    base64ToArrayBuffer,
    cleanSymbols,
    beautifyFileSize,
    getFileNameFromContentDisposition,
    getMediaType,
    detectMediaTypeAndExt,
    parseLinkPhimmoiChillee,
    fetchWithTimeout,
    sleep,
    debounce
  };
}
