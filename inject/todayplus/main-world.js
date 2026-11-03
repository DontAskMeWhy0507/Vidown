(() => {
/**
 * TodayPlus DRM Key Decryptor (Main World)
 * Bridges encrypted HLS AES key bytes with the page's Emscripten WebAssembly module (window.Module.ccall).
 */

function base64ToArrayBuffer(base64String) {
  const binary = atob(base64String);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function hexStringToBuffer(hexString) {
  if (typeof hexString !== 'string') {
    throw new TypeError('Expected input to be a string');
  }
  if (hexString.length % 2 !== 0) {
    throw new RangeError('Expected string to have an even number of characters');
  }
  const bytes = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    bytes[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
  }
  return bytes.buffer;
}

const keyElements = Array.from(document.querySelectorAll('[savior-key-bytes]'));
keyElements.forEach((el) => {
  try {
    const rawKeyBytes = el.getAttribute('savior-key-bytes');
    if (!rawKeyBytes || !window.Module) return;

    const keyBuffer = base64ToArrayBuffer(rawKeyBytes);
    const keyArray = new Uint8Array(keyBuffer);
    const byteLength = keyArray.length * keyArray.BYTES_PER_ELEMENT;

    // Allocate memory in Emscripten heap
    const heapPtr = window.Module._malloc(byteLength);
    const heapView = new Uint8Array(window.Module.HEAPU8.buffer, heapPtr, byteLength);
    heapView.set(keyArray);

    // Call Emscripten compiled decryption function
    const decryptedHex = window.Module.ccall('emcc', 'string', ['number', 'number'], [heapView.byteOffset, heapView.byteLength]);
    window.Module._free(heapView.byteOffset);

    // Convert decrypted hex to formatted key
    const decryptedBuffer = hexStringToBuffer(decryptedHex);
    const dataView = new DataView(decryptedBuffer);
    const uint32Words = new Uint32Array([
      dataView.getUint32(0),
      dataView.getUint32(4),
      dataView.getUint32(8),
      dataView.getUint32(12)
    ]);

    const processedKeyHex = [...new Uint8Array(uint32Words.buffer)]
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    el.setAttribute('savior-key-processed', processedKeyHex);
  } catch (error) {
    console.error('[Vidown] Error processing TodayPlus DRM key:', error);
  }
});
})();
