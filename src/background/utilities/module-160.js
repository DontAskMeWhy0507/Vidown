// Module 160 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e) {
    const n = r(174);
    t.between = (e, t, r) => {
      let n;
      if (t instanceof RegExp) {
        const r = e.match(t);
        if (!r) {
          return "";
        }
        n = r.index + r[0].length;
      } else {
        n = e.indexOf(t);
        if (n === -1) {
          return "";
        }
        n += t.length;
      }
      n = (e = e.slice(n)).indexOf(r);
      if (n === -1) {
        return "";
      } else {
        return e = e.slice(0, n);
      }
    };
    t.parseAbbreviatedNumber = e => {
      const t = e.replace(",", ".").replace(" ", "").match(/([\d,.]+)([MK]?)/);
      if (t) {
        let [, e, r] = t;
        e = parseFloat(e);
        return Math.round(r === "M" ? e * 1000000 : r === "K" ? e * 1000 : e);
      }
      return null;
    };
    t.cutAfterJSON = e => {
      let t;
      let r;
      if (e[0] === "[") {
        t = "[";
        r = "]";
      } else if (e[0] === "{") {
        t = "{";
        r = "}";
      }
      if (!t) {
        throw new Error("Can't cut unsupported JSON (need to begin with [ or { ) but got: " + e[0]);
      }
      let n;
      let o = false;
      let i = false;
      let a = 0;
      for (n = 0; n < e.length; n++) {
        if (e[n] !== "\"" || i) {
          i = e[n] === "\\" && !i;
          if (!o && (e[n] === t ? a++ : e[n] === r && a--, a === 0)) {
            return e.substr(0, n + 1);
          }
        } else {
          o = !o;
        }
      }
      throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
    };
    t.playError = (e, t, r = Error) => {
      let n = e && e.playabilityStatus;
      if (n && t.includes(n.status)) {
        return new r(n.reason || n.messages && n.messages[0]);
      } else {
        return null;
      }
    };
    t.exposedMiniget = (e, t = {}, r) => {
      const o = n(e, r || t.requestOptions);
      if (typeof t.requestCallback == "function") {
        t.requestCallback(o);
      }
      return o;
    };
    t.deprecate = (e, t, r, n, o) => {
      Object.defineProperty(e, t, {
        get: () => {
          console.warn(`\`${n}\` will be removed in a near future release, use \`${o}\` instead.`);
          return r;
        }
      });
    };
    const o = r(519);
    t.lastUpdateCheck = 0;
    t.checkForUpdates = () => !e.env.YTDL_NO_UPDATE && !o.version.startsWith("0.0.0-") && Date.now() - t.lastUpdateCheck >= 43200000 ? (t.lastUpdateCheck = Date.now(), n("https://api.github.com/repos/fent/node-ytdl-core/releases/latest", {
      headers: {
        "User-Agent": "ytdl-core"
      }
    }).text().then(e => {
      if (JSON.parse(e).tag_name !== "v" + o.version) {
        console.warn("[33mWARNING:[0m ytdl-core is out of date! Update with \"npm install ytdl-core@latest\".");
      }
    }, e => {
      console.warn("Error checking for updates:", e.message);
      console.warn("You can disable this check by setting the `YTDL_NO_UPDATE` env variable.");
    })) : null;
  }).call(this, r(32));
};
