// Module 174 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (t) {
    var n = this && this.__importDefault || function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    };
    const o = n(r(506));
    const i = n(r(724));
    const a = r(83);
    const s = {
      "http:": o.default,
      "https:": i.default
    };
    const c = new Set([301, 302, 303, 307, 308]);
    const u = new Set([429, 503]);
    const l = ["connect", "continue", "information", "socket", "timeout", "upgrade"];
    const d = ["aborted"];
    function p(e, r = {}) {
      const o = Object.assign({}, p.defaultOptions, r);
      const i = new a.PassThrough({
        highWaterMark: o.highWaterMark
      });
      let f;
      let h;
      let m;
      i.destroyed = i.aborted = false;
      let g;
      let v;
      let y;
      let _ = 0;
      let b = 0;
      let w = 0;
      let E = false;
      let D = 0;
      let T = 0;
      if (o.headers?.Range) {
        let e = /bytes=(\d+)-(\d+)?/.exec("" + o.headers.Range);
        if (e) {
          D = parseInt(e[1], 10);
          y = parseInt(e[2], 10);
        }
      }
      if (o.acceptEncoding) {
        o.headers = Object.assign({
          "Accept-Encoding": Object.keys(o.acceptEncoding).join(", ")
        }, o.headers);
      }
      const k = e => r.method !== "HEAD" && !!E && T !== v && !!(w++ < o.maxReconnects) && ((e => {
        m = null;
        b = 0;
        let t = o.backoff.inc;
        let r = Math.min(t, o.backoff.max);
        g = setTimeout(x, r);
        i.emit("reconnect", w, e);
      })(e), true);
      const A = e => {
        if (i.destroyed) {
          return false;
        }
        if (m && T > 0) {
          return k(e.err);
        }
        if ((!e.err || e.err.message === "ENOTFOUND") && b++ < o.maxRetries) {
          let t = e.retryAfter || Math.min(b * o.backoff.inc, o.backoff.max);
          g = setTimeout(x, t);
          i.emit("retry", b, e.err);
          return true;
        }
        return false;
      };
      const C = (e, t) => {
        for (let r of t) {
          e.on(r, i.emit.bind(i, r));
        }
      };
      const x = () => {
        let t;
        let r = {};
        try {
          let n = typeof e == "string" ? new URL(e) : e;
          r = Object.assign({}, {
            host: n.host,
            hostname: n.hostname,
            path: n.pathname + n.search + n.hash,
            port: n.port,
            protocol: n.protocol
          });
          if (n.username) {
            r.auth = `${n.username}:${n.password}`;
          }
          t = s[String(r.protocol)];
        } catch (e) {}
        if (!t) {
          i.emit("error", new p.MinigetError("Invalid URL: " + e));
          return;
        }
        Object.assign(r, o);
        if (E && T > 0) {
          let e = T + D;
          let t = y || "";
          r.headers = Object.assign({}, r.headers, {
            Range: `bytes=${e}-${t}`
          });
        }
        if (o.transform) {
          try {
            r = o.transform(r);
          } catch (e) {
            i.emit("error", e);
            return;
          }
          if ((!r || r.protocol) && (t = s[String(r == null ? undefined : r.protocol)], !t)) {
            i.emit("error", new p.MinigetError("Invalid URL object from `transform` function"));
            return;
          }
        }
        const n = e => {
          if (!i.destroyed && !i.readableEnded) {
            g();
            if (A({
              err: e
            })) {
              f.removeListener("close", a);
            } else {
              i.emit("error", e);
            }
          }
        };
        const a = () => {
          g();
          A({});
        };
        const g = () => {
          f.removeListener("close", a);
          if (h != null) {
            h.removeListener("data", b);
          }
          if (m != null) {
            m.removeListener("end", w);
          }
        };
        const b = e => {
          T += e.length;
        };
        const w = () => {
          g();
          if (!k()) {
            i.end();
          }
        };
        f = t.request(r, t => {
          if (!i.destroyed) {
            if (c.has(t.statusCode)) {
              if (_++ >= o.maxRedirects) {
                i.emit("error", new p.MinigetError("Too many redirects"));
              } else {
                if (!t.headers.location) {
                  let e = new p.MinigetError("Redirect status code given with no location", t.statusCode);
                  i.emit("error", e);
                  g();
                  return;
                }
                e = t.headers.location;
                setTimeout(x, parseInt(t.headers["retry-after"] || "0", 10) * 1000);
                i.emit("redirect", e);
              }
              g();
            } else if (u.has(t.statusCode)) {
              if (!A({
                retryAfter: parseInt(t.headers["retry-after"] || "0", 10)
              })) {
                let e = new p.MinigetError("Status code: " + t.statusCode, t.statusCode);
                i.emit("error", e);
              }
              g();
            } else {
              if (t.statusCode && (t.statusCode < 200 || t.statusCode >= 400)) {
                let e = new p.MinigetError("Status code: " + t.statusCode, t.statusCode);
                if (t.statusCode >= 500) {
                  n(e);
                } else {
                  i.emit("error", e);
                }
                g();
                return;
              }
              m = t;
              if (o.acceptEncoding && t.headers["content-encoding"]) {
                for (let e of t.headers["content-encoding"].split(", ").reverse()) {
                  let t = o.acceptEncoding[e];
                  if (t) {
                    m = m.pipe(t());
                    m.on("error", n);
                  }
                }
              }
              if (!v) {
                v = parseInt("" + t.headers["content-length"], 10);
                E = t.headers["accept-ranges"] === "bytes" && v > 0 && o.maxReconnects > 0;
              }
              t.on("data", b);
              m.on("end", w);
              m.pipe(i, {
                end: !E
              });
              h = t;
              i.emit("response", t);
              t.on("error", n);
              C(t, d);
            }
          }
        });
        f.on("error", n);
        f.on("close", a);
        C(f, l);
        if (i.destroyed) {
          O(...S);
        }
        i.emit("request", f);
        f.end();
      };
      i.abort = e => {
        console.warn("`MinigetStream#abort()` has been deprecated in favor of `MinigetStream#destroy()`");
        i.aborted = true;
        i.emit("abort");
        i.destroy(e);
      };
      let S = [];
      const O = e => {
        f.destroy(e);
        if (m != null) {
          m.unpipe(i);
        }
        if (m != null) {
          m.destroy();
        }
        clearTimeout(g);
      };
      i._destroy = (...e) => {
        i.destroyed = true;
        if (f) {
          O(...e);
        } else {
          S = e;
        }
      };
      i.text = () => new Promise((e, t) => {
        let r = "";
        i.setEncoding("utf8");
        i.on("data", e => r += e);
        i.on("end", () => e(r));
        i.on("error", t);
      });
      t.nextTick(x);
      return i;
    }
    p.MinigetError = class extends Error {
      constructor(e, t) {
        super(e);
        this.statusCode = t;
      }
    };
    p.defaultOptions = {
      maxRedirects: 10,
      maxRetries: 2,
      maxReconnects: 0,
      backoff: {
        inc: 100,
        max: 10000
      }
    };
    e.exports = p;
  }).call(this, r(32));
};
