/**
 * YouTube yt-dlp Compatibility Decipherer (Main World)
 * Executes base.js signature and n-parameter challenge functions for yt-dlp challenges.
 */

{
  try {
    window.trustedTypes.createPolicy('default', {
      createScript: function (script) {
        return script;
      }
    });
  } catch {
    // Policy may already exist
  }

  const resultFunctions = {
    n: null,
    sig: null
  };

  try {
    const rawFunctions = document.body.getAttribute('savior-functions');
    const decodeRequests = JSON.parse(document.body.getAttribute('savior-decode-requests') || '[]');

    const runner = Function(
      '_result',
      window.trustedTypes.defaultPolicy ? window.trustedTypes.defaultPolicy.createScript(rawFunctions) : rawFunctions
    );
    runner(resultFunctions);

    const results = decodeRequests.map((req) => {
      const type = req.type;
      if (!['n', 'sig'].includes(type)) {
        return {
          type: 'error',
          error: 'Unknown request type: ' + type
        };
      }

      const fn = resultFunctions[type];
      if (!fn) {
        return {
          type: 'error',
          error: `Failed to extract ${type} function`
        };
      }

      try {
        return {
          type: 'result',
          data: Object.fromEntries(req.challenges.map((c) => [c, fn(c)]))
        };
      } catch (err) {
        return {
          type: 'error',
          error: err instanceof Error ? `${err.message}\n${err.stack}` : String(err)
        };
      }
    });

    document.body.setAttribute('savior-decoded-result', JSON.stringify(results));
  } catch (error) {
    console.error('[Vidown] yt-dlp decode error:', error);
    document.body.setAttribute('savior-decoded-result', JSON.stringify([]));
  } finally {
    console.groupEnd();
  }
}
