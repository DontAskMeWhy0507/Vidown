/**
 * src/content/events/bus.js
 * Lightweight clean Event Emitter bus for Content Script internal communication.
 */

class EventBus {
  constructor() {
    this._listeners = new Map();
  }

  on(event, handler) {
    if (typeof handler !== 'function') return this;
    if (!this._listeners.has(event)) {
      this._listeners.set(event, []);
    }
    this._listeners.get(event).push(handler);
    return this;
  }

  once(event, handler) {
    if (typeof handler !== 'function') return this;
    const wrapper = (...args) => {
      this.off(event, wrapper);
      handler.apply(this, args);
    };
    wrapper._original = handler;
    return this.on(event, wrapper);
  }

  off(event, handler) {
    if (!this._listeners.has(event)) return this;
    if (!handler) {
      this._listeners.delete(event);
      return this;
    }
    const list = this._listeners.get(event);
    const filtered = list.filter(fn => fn !== handler && fn._original !== handler);
    if (filtered.length > 0) {
      this._listeners.set(event, filtered);
    } else {
      this._listeners.delete(event);
    }
    return this;
  }

  emit(event, ...args) {
    if (!this._listeners.has(event)) return false;
    const list = this._listeners.get(event).slice();
    for (const fn of list) {
      try {
        fn.apply(this, args);
      } catch (err) {
        console.error(`[EventBus] Error in listener for "${event}":`, err);
      }
    }
    return true;
  }

  clear() {
    this._listeners.clear();
  }
}

const defaultBus = new EventBus();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EventBus, bus: defaultBus };
}
