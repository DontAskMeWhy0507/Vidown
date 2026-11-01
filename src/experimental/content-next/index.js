/**
 * Vidown Content Script - Modern Open Source ES Module Entry Point
 * 
 * Orchestrates:
 * - Shared EventBus (EE)
 * - Provider Registry (TikTok, Facebook, YouTube, HLS/DASH)
 * - DOM Mutation Scanner & Media Detector
 * - Webpack Interop Bridge for UI Widget & Companion Scripts
 */

import { getEventBus } from './core/events.js';
import { getAllProviders, getProviderForUrl } from './providers/index.js';
import { DomScanner } from './detector/dom-scanner.js';
import { stampMediaAttributes, readMediaAttributes } from './detector/attribute-stamper.js';
import * as CoreConstants from './core/constants.js';
import * as CoreUtils from './core/utils.js';

export class VidownContentScript {
  constructor() {
    this.bus = getEventBus();
    this.scanner = new DomScanner({ bus: this.bus });
    this.providers = getAllProviders();
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;

    // Attach to global window if running in browser
    if (typeof window !== 'undefined') {
      window.__VIDOWN_CONTENT_SCRIPT__ = this;
      window.EE = this.bus;
    }

    // Start DOM media scanner
    this.scanner.start();

    // Broadcast content script readiness
    this.bus.emit('vidown.content-script.ready', {
      version: '2.4.65',
      providersCount: this.providers.length
    });
  }

  detectMedia(videoElement, pageUrl = '') {
    const url = pageUrl || (typeof window !== 'undefined' ? window.location.href : '');
    const provider = getProviderForUrl(url);
    if (provider && provider.extract) {
      return provider.extract(videoElement, { url });
    }
    return null;
  }
}

// Auto-initialize when loaded as a browser content script
let defaultInstance = null;
if (typeof window !== 'undefined') {
  defaultInstance = new VidownContentScript();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => defaultInstance.init());
  } else {
    defaultInstance.init();
  }
}

export default defaultInstance || new VidownContentScript();
export {
  CoreConstants,
  CoreUtils,
  stampMediaAttributes,
  readMediaAttributes,
  getProviderForUrl,
  getAllProviders
};

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = defaultInstance || new VidownContentScript();
  module.exports.VidownContentScript = VidownContentScript;
  module.exports.CoreConstants = CoreConstants;
  module.exports.CoreUtils = CoreUtils;
  module.exports.stampMediaAttributes = stampMediaAttributes;
  module.exports.readMediaAttributes = readMediaAttributes;
  module.exports.getProviderForUrl = getProviderForUrl;
  module.exports.getAllProviders = getAllProviders;
}
