(() => {
/**
 * YouTube Format N-Parameter Decipherer (Main World)
 * Evaluates the n-parameter transform function extracted from YouTube base.js to prevent video throttling.
 */

(() => {
  try {
    window.trustedTypes.createPolicy('default', {
      createScript: function (script) {
        return script;
      }
    });
  } catch {
    // Policy may already exist
  }

  if (!document.body) return;
  const videoId = document.body.getAttribute('savior-meta-video-id');
  if (!videoId) return;
  try {
    const rawFormats = document.body.getAttribute('savior-meta-formats-' + videoId);
    const formats = JSON.parse(rawFormats);

    for (let i = 0; i < formats.length; i++) {
      const { decodeFunc, decodeArgs } = formats[i];
      if (decodeFunc) {
        let decoded;
        const ttPolicy = window.trustedTypes && window.trustedTypes.defaultPolicy;
        decoded = ttPolicy
          ? eval(ttPolicy.createScript(decodeFunc))
          : eval(decodeFunc);

        if (decoded) {
          formats[i].url = formats[i].url.replace(
            'n=' + decodeArgs.c,
            'n=' + encodeURIComponent(decoded)
          );
        }
      }
    }

    document.body.setAttribute('savior-decoded-meta-formats', JSON.stringify({
      videoId,
      formats
    }));
  } catch (error) {
    console.warn('[Vidown] YouTube n-parameter decode error:', error);
    document.body.setAttribute('savior-decoded-meta-formats', JSON.stringify({
      videoId,
      formats: []
    }));
  }
})();
})();
