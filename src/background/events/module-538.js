// Module 538 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (t) {
    const n = r(83).PassThrough;
    const o = r(705);
    const i = r(160);
    const a = r(520);
    const s = r(521);
    const c = r(523);
    const u = r(174);
    const l = r(441);
    const {
      parseTimestamp: d
    } = r(441);
    const p = (e, t) => {
      const r = f(t);
      p.getInfo(e, t).then(e => {
        m(r, e, t);
      }, r.emit.bind(r, "error"));
      return r;
    };
    e.exports = p;
    p.getBasicInfo = o.getBasicInfo;
    p.getInfo = o.getInfo;
    p.chooseFormat = a.chooseFormat;
    p.filterFormats = a.filterFormats;
    p.validateID = s.validateID;
    p.validateURL = s.validateURL;
    p.getURLVideoID = s.getURLVideoID;
    p.getVideoID = s.getVideoID;
    p.cache = {
      sig: c.cache,
      info: o.cache,
      watch: o.watchPageCache,
      cookie: o.cookieCache
    };
    p.version = r(519).version;
    const f = e => {
      const t = new n({
        highWaterMark: e && e.highWaterMark || 524288
      });
      t._destroy = () => {
        t.destroyed = true;
      };
      return t;
    };
    const h = (e, t, r) => {
      ["abort", "request", "response", "error", "redirect", "retry", "reconnect"].forEach(r => {
        e.prependListener(r, t.emit.bind(t, r));
      });
      e.pipe(t, {
        end: r
      });
    };
    const m = (e, t, r) => {
      r = r || {};
      let n;
      let o = i.playError(t.player_response, ["UNPLAYABLE", "LIVE_STREAM_OFFLINE", "LOGIN_REQUIRED"]);
      if (o) {
        e.emit("error", o);
        return;
      }
      if (!t.formats.length) {
        e.emit("error", Error("This video is unavailable"));
        return;
      }
      try {
        n = a.chooseFormat(t.formats, r);
      } catch (t) {
        e.emit("error", t);
        return;
      }
      e.emit("info", t, n);
      if (e.destroyed) {
        return;
      }
      let s;
      let c = 0;
      const p = t => {
        c += t.length;
        e.emit("progress", t.length, c, s);
      };
      const f = r.dlChunkSize || 10485760;
      let m;
      let g = true;
      if (n.isHLS || n.isDashMPD) {
        m = l(n.url, {
          chunkReadahead: +t.live_chunk_readahead,
          begin: r.begin || n.isLive && Date.now(),
          liveBuffer: r.liveBuffer,
          requestOptions: r.requestOptions,
          parser: n.isDashMPD ? "dash-mpd" : "m3u8",
          id: n.itag
        });
        m.on("progress", (t, r) => {
          e.emit("progress", t.size, t.num, r);
        });
        h(m, e, g);
      } else {
        const t = Object.assign({}, r.requestOptions, {
          maxReconnects: 6,
          maxRetries: 3,
          backoff: {
            inc: 500,
            max: 10000
          }
        });
        if (f !== 0 && (!n.hasAudio || !n.hasVideo)) {
          let o = r.range && r.range.start || 0;
          let i = o + f;
          const a = r.range && r.range.end;
          s = r.range ? (a ? a + 1 : parseInt(n.contentLength)) - o : parseInt(n.contentLength);
          const c = () => {
            if (!a && i >= s) {
              i = 0;
            }
            if (a && i > a) {
              i = a;
            }
            g = !i || i === a;
            t.headers = Object.assign({}, t.headers, {
              Range: `bytes=${o}-${i || ""}`
            });
            m = u(n.url, t);
            m.on("data", p);
            m.on("end", () => {
              if (!e.destroyed) {
                if (i && i !== a) {
                  o = i + 1;
                  i += f;
                  c();
                }
              }
            });
            h(m, e, g);
          };
          c();
        } else {
          if (r.begin) {
            n.url += "&begin=" + d(r.begin);
          }
          if (r.range && (r.range.start || r.range.end)) {
            t.headers = Object.assign({}, t.headers, {
              Range: `bytes=${r.range.start || "0"}-${r.range.end || ""}`
            });
          }
          m = u(n.url, t);
          m.on("response", t => {
            if (!e.destroyed) {
              s = s || parseInt(t.headers["content-length"]);
            }
          });
          m.on("data", p);
          h(m, e, g);
        }
      }
      e._destroy = () => {
        e.destroyed = true;
        m.destroy();
        m.end();
      };
    };
    p.downloadFromInfo = (e, r) => {
      const n = f(r);
      if (!e.full) {
        throw Error("Cannot use `ytdl.downloadFromInfo()` when called with info from `ytdl.getBasicInfo()`");
      }
      t(() => {
        m(n, e, r);
      });
      return n;
    };
  }).call(this, r(78).setImmediate);
};
