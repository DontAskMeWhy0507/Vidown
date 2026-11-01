// Module 441 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = this && this.__importDefault || function (e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  };
  const o = r(83);
  const i = n(r(174));
  const a = n(r(727));
  const s = n(r(728));
  const c = r(729);
  const u = r(522);
  const l = {
    m3u8: a.default,
    "dash-mpd": s.default
  };
  let d = (e, t = {}) => {
    const r = new o.PassThrough({
      highWaterMark: t.highWaterMark
    });
    const n = t.chunkReadahead || 3;
    const a = t.liveBuffer || 20000;
    const s = t.requestOptions;
    const d = l[t.parser || (/\.mpd$/.test(e) ? "dash-mpd" : "m3u8")];
    if (!d) {
      throw TypeError(`parser '${t.parser}' not supported`);
    }
    let p = 0;
    if (t.begin !== undefined) {
      p = typeof t.begin == "string" ? u.humanStr(t.begin) : Math.max(t.begin - a, 0);
    }
    const f = e => {
      for (let t of ["abort", "request", "response", "redirect", "retry", "reconnect"]) {
        e.on(t, r.emit.bind(r, t));
      }
    };
    let h;
    const m = new c.Queue((e, t) => {
      h = e;
      let n = 0;
      e.on("data", e => n += e.length);
      e.pipe(r, {
        end: false
      });
      e.on("end", () => t(null, n));
    }, {
      concurrency: 1
    });
    let g = 0;
    let v = 0;
    const y = new c.Queue((t, n) => {
      let o = Object.assign({}, s);
      if (t.range) {
        o.headers = Object.assign({}, o.headers, {
          Range: `bytes=${t.range.start}-${t.range.end}`
        });
      }
      let a = i.default(new URL(t.url, e).toString(), o);
      a.on("error", n);
      f(a);
      m.push(a, (e, o) => {
        v += +o;
        r.emit("progress", {
          num: ++g,
          size: o,
          duration: t.duration,
          url: t.url
        }, y.total, v);
        n(null);
      });
    }, {
      concurrency: n
    });
    const _ = e => {
      r.emit("error", e);
      r.end();
    };
    let b;
    let w;
    let E;
    let D;
    let T = true;
    let k = false;
    let A = false;
    const C = e => {
      h = null;
      if (e) {
        _(e);
      } else if (!T && !k && !A && y.tasks.length + y.active <= b) {
        let e = Math.max(0, w - (Date.now() - D));
        T = true;
        E = setTimeout(I, e);
      } else if ((!!k || !!A) && !y.tasks.length && !y.active) {
        r.end();
      }
    };
    let x;
    let S;
    let O = 0;
    const I = () => {
      D = Date.now();
      x = i.default(e, s);
      x.on("error", _);
      f(x);
      const r = x.pipe(new d(t.id));
      r.on("starttime", e => {
        if (!O) {
          O = e;
          if (typeof t.begin == "string" && p >= 0) {
            p += O;
          }
        }
      });
      r.on("endlist", () => {
        A = true;
      });
      r.on("endearly", x.unpipe.bind(x, r));
      let n = [];
      const o = e => {
        if (!e.init) {
          if (e.seq <= S) {
            return;
          }
          S = e.seq;
        }
        p = e.time;
        y.push(e, C);
        n.push(e);
      };
      let c = [];
      let u = 0;
      r.on("item", e => {
        let t = Object.assign({
          time: O
        }, e);
        if (p <= t.time) {
          o(t);
        } else {
          c.push(t);
          u += t.duration;
          while (c.length > 1 && u - c[0].duration > a) {
            const e = c.shift();
            u -= e.duration;
          }
        }
        O += t.duration;
      });
      r.on("end", () => {
        x = null;
        if (!n.length && c.length) {
          c.forEach(e => {
            o(e);
          });
        }
        b = Math.max(1, Math.ceil(n.length * 0.01));
        w = n.reduce((e, t) => t.duration + e, 0);
        T = false;
        C(null);
      });
    };
    I();
    r.end = () => {
      k = true;
      m.die();
      y.die();
      clearTimeout(E);
      if (x != null) {
        x.destroy();
      }
      if (h != null) {
        h.destroy();
      }
      o.PassThrough.prototype.end.call(r, null);
      return r;
    };
    return r;
  };
  d.parseTimestamp = u.humanStr;
  e.exports = d;
};
