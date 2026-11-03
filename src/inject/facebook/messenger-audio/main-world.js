(() => {
/**
 * Facebook Messenger Voice Message Interceptor (Main World)
 * Hooks URL.createObjectURL and URL.revokeObjectURL to capture audio blobs and durations.
 */

async function notifyMessengerAudio(blob, blobUrl) {
  let duration = '';
  try {
    duration = await new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => {
        const totalSecs = Math.round(audio.duration);
        const mins = Math.floor(totalSecs / 60);
        const secs = Math.floor(totalSecs % 60);
        resolve(String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0'));
      };
      audio.onerror = () => {
        reject(new Error('Cannot load audio'));
      };
      audio.src = blobUrl;
    });
  } catch {
    duration = '00:00';
  }

  window.postMessage({
    type: 'facebook-messenger-audio',
    url: blobUrl,
    contentType: blob.type,
    contentLength: blob.size,
    contentDuration: duration
  });
}

try {
  const originalCreateObjectURL = URL.createObjectURL;
  const originalRevokeObjectURL = URL.revokeObjectURL;

  URL.createObjectURL = function (blob) {
    const blobUrl = originalCreateObjectURL.call(this, blob);
    if (blob?.type?.includes('audio')) {
      notifyMessengerAudio(blob, blobUrl);
    }
    return blobUrl;
  };

  URL.revokeObjectURL = function (blobUrl) {
    window.postMessage({
      type: 'facebook-messenger-audio-revoked',
      url: blobUrl
    });
    return originalRevokeObjectURL.call(this, blobUrl);
  };
} catch (error) {
  console.error('[Vidown] Messenger audio hook error:', error);
}
})();
