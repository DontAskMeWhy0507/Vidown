/**
 * Vidown DOM Scanner
 * Observes DOM mutations and scans for video elements and media changes
 */

import { getEventBus } from '../core/events.js';
import { getProviderForUrl } from '../providers/index.js';

export class DomScanner {
  constructor(options = {}) {
    this.bus = options.bus || getEventBus();
    this.knownNodes = new WeakSet();
    this.observer = null;
  }

  start() {
    this.scan();
    if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
      this.observer = new MutationObserver(() => {
        this.scan();
      });
      this.observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'savior-vid', 'savior-video-detail']
      });
    }
    this.bus.emit('dom-scanner.load');
  }

  stop() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  scan() {
    if (typeof document === 'undefined') return;
    const videos = Array.from(document.querySelectorAll('video'));
    const newlyDetected = [];

    for (const v of videos) {
      if (!this.knownNodes.has(v)) {
        this.knownNodes.add(v);
        newlyDetected.push(v);
      }
    }

    if (newlyDetected.length > 0) {
      this.bus.emit('widget.node-changed', newlyDetected);
    }
  }
}

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DomScanner
  };
}
