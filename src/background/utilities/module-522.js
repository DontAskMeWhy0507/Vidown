// Module 522 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.durationStr = t.humanStr = undefined;
  const n = /^\d+$/;
  const o = /^(?:(?:(\d+):)?(\d{1,2}):)?(\d{1,2})(?:\.(\d{3}))?$/;
  const i = {
    ms: 1,
    s: 1000,
    m: 60000,
    h: 3600000
  };
  t.humanStr = e => {
    if (typeof e == "number") {
      return e;
    }
    if (n.test(e)) {
      return +e;
    }
    const t = o.exec(e);
    if (t) {
      return +(t[1] || 0) * i.h + +(t[2] || 0) * i.m + +t[3] * i.s + +(t[4] || 0);
    }
    {
      let t = 0;
      const r = /(-?\d+)(ms|s|m|h)/g;
      let n;
      while ((n = r.exec(e)) !== null) {
        t += +n[1] * i[n[2]];
      }
      return t;
    }
  };
  t.durationStr = e => {
    let t = 0;
    const r = /(\d+(?:\.\d+)?)(S|M|H)/g;
    let n;
    while ((n = r.exec(e)) !== null) {
      t += +n[1] * i[n[2].toLowerCase()];
    }
    return t;
  };
};
