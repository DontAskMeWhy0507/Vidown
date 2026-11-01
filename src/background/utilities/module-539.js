// Module 539 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  t.a = new class {
    constructor() {
      this.DEFAULT_TTL = 1200000;
      this._cache = {};
      this.DEFAULT_TTL = 1200000;
    }
    processRequest(e, t) {
      switch (e) {
        case "get":
          return this.get(t.key);
        case "put":
          this.put(t.key, t.value, t.ttl);
          break;
        case "delete":
          this.delete(t.key);
      }
    }
    get(e) {
      return new Promise((t, r) => {
        if (e in this._cache) {
          t(this._cache[e]);
        } else {
          r(null);
        }
      });
    }
    _get(e) {
      return this._cache[e] || null;
    }
    put(e, t, r = this.DEFAULT_TTL) {
      if (e && t !== undefined) {
        r = r || this.DEFAULT_TTL;
        this._cache[e] = t;
        setTimeout(this.delete.bind(this, e), r);
      }
    }
    delete(e) {
      if (this._cache[e]) {
        delete this._cache[e];
      }
    }
  }();
};
