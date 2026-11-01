// Module 729 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.Queue = undefined;
  t.Queue = class {
    constructor(e, t = {}) {
      this._worker = e;
      this._concurrency = t.concurrency || 1;
      this.tasks = [];
      this.total = 0;
      this.active = 0;
    }
    push(e, t) {
      this.tasks.push({
        item: e,
        callback: t
      });
      this.total++;
      this._next();
    }
    _next() {
      if (this.active >= this._concurrency || !this.tasks.length) {
        return;
      }
      const {
        item: e,
        callback: t
      } = this.tasks.shift();
      let r = false;
      this.active++;
      this._worker(e, (e, n) => {
        if (!r) {
          this.active--;
          r = true;
          if (t != null) {
            t(e, n);
          }
          this._next();
        }
      });
    }
    die() {
      this.tasks = [];
    }
  };
};
