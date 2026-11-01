// Module 524 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  const {
    setTimeout: n
  } = r(78);
  e.exports = class extends Map {
    constructor(e = 1000) {
      super();
      this.timeout = e;
    }
    set(e, t) {
      if (this.has(e)) {
        clearTimeout(super.get(e).tid);
      }
      super.set(e, {
        tid: n(this.delete.bind(this, e), this.timeout).unref(),
        value: t
      });
    }
    get(e) {
      let t = super.get(e);
      if (t) {
        return t.value;
      } else {
        return null;
      }
    }
    getOrSet(e, t) {
      if (this.has(e)) {
        return this.get(e);
      }
      {
        let r = t();
        this.set(e, r);
        (async () => {
          try {
            await r;
          } catch (t) {
            this.delete(e);
          }
        })();
        return r;
      }
    }
    delete(e) {
      let t = super.get(e);
      if (t) {
        clearTimeout(t.tid);
        super.delete(e);
      }
    }
    clear() {
      for (let e of this.values()) {
        clearTimeout(e.tid);
      }
      super.clear();
    }
  };
};
