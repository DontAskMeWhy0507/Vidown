/**
 * Vidown Shared EventBus / EventEmitter
 */

class SimpleEventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  on(event, callback) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, []);
    }
    this._listeners.get(event).push(callback);
    return this;
  }

  off(event, callback) {
    if (!this._listeners.has(event)) return this;
    const list = this._listeners.get(event);
    const idx = list.indexOf(callback);
    if (idx !== -1) list.splice(idx, 1);
    return this;
  }

  emit(event, ...args) {
    const list = this._listeners.get(event);
    if (list) {
      for (const cb of list.slice()) {
        try {
          cb(...args);
        } catch (err) {
          console.error(`[EventBus] Error in listener for event "${event}":`, err);
        }
      }
    }
    return this;
  }
}

let defaultBus = null;

export function getEventBus() {
  if (typeof window !== 'undefined' && window.EE) {
    return window.EE;
  }
  if (!defaultBus) {
    defaultBus = new SimpleEventEmitter();
    if (typeof window !== 'undefined') {
      window.EE = defaultBus;
    }
  }
  return defaultBus;
}

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SimpleEventEmitter,
    getEventBus
  };
}
