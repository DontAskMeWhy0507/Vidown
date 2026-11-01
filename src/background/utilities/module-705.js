// Module 705 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  const n = r(438);
  const o = r(505);
  const i = r(174);
  const a = r(160);
  const {
    setTimeout: s
  } = r(78);
  const c = r(520);
  const u = r(521);
  const l = r(726);
  const d = r(523);
  const p = r(524);
  const f = "https://www.youtube.com/watch?v=";
  t.cache = new p();
  t.cookieCache = new p(86400000);
  t.watchPageCache = new p();
  let h = "2.20210622.10.00";
  class m extends Error {}
  const g = ["support.google.com/youtube/?p=age_restrictions", "youtube.com/t/community_guidelines"];
  t.getBasicInfo = async (e, t) => {
    const r = Object.assign({}, i.defaultOptions, t.requestOptions);
    t.requestOptions = Object.assign({}, t.requestOptions, {});
    t.requestOptions.headers = Object.assign({}, {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"
    }, t.requestOptions.headers);
    let n = await D([e, t], e => {
      let t = a.playError(e.player_response, ["ERROR"], m);
      let r = v(e.player_response);
      if (t || r) {
        throw t || r;
      }
      return e && e.player_response && (e.player_response.streamingData || y(e.player_response) || _(e.player_response));
    }, r, [I, O, L]);
    Object.assign(n, {
      formats: R(n.player_response),
      related_videos: l.getRelatedVideos(n)
    });
    const o = l.getMedia(n);
    const s = {
      author: l.getAuthor(n),
      media: o,
      likes: l.getLikes(n),
      dislikes: l.getDislikes(n),
      age_restricted: !!o && !!o.notice_url && !!g.some(e => o.notice_url.includes(e)),
      video_url: f + e,
      storyboards: l.getStoryboards(n),
      chapters: l.getChapters(n)
    };
    n.videoDetails = l.cleanVideoDetails(Object.assign({}, n.player_response && n.player_response.microformat && n.player_response.microformat.playerMicroformatRenderer, n.player_response && n.player_response.videoDetails, s), n);
    return n;
  };
  const v = e => {
    let t = e && e.playabilityStatus;
    if (t && t.status === "LOGIN_REQUIRED" && t.messages && t.messages.filter(e => /This is a private video/.test(e)).length) {
      return new m(t.reason || t.messages && t.messages[0]);
    } else {
      return null;
    }
  };
  const y = e => {
    let t = e.playabilityStatus;
    return t && t.status === "UNPLAYABLE" && t.errorScreen && t.errorScreen.playerLegacyDesktopYpcOfferRenderer;
  };
  const _ = e => {
    let t = e.playabilityStatus;
    return t && t.status === "LIVE_STREAM_OFFLINE";
  };
  const b = (e, t) => `${f + e}&hl=${t.lang || "en"}`;
  const w = (e, r) => {
    const n = b(e, r);
    return t.watchPageCache.getOrSet(n, () => a.exposedMiniget(n, r).text());
  };
  const E = e => {
    let t = /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/.exec(e);
    if (t) {
      return t[1] || t[2];
    } else {
      return null;
    }
  };
  const D = async (e, t, r, n) => {
    let o;
    for (let i of n) {
      try {
        const n = await k(i, e.concat([o]), r);
        if (n.player_response) {
          n.player_response.videoDetails = T(o && o.player_response && o.player_response.videoDetails, n.player_response.videoDetails);
          n.player_response = T(o && o.player_response, n.player_response);
        }
        o = T(o, n);
        if (t(o, false)) {
          break;
        }
      } catch (e) {
        if (e instanceof m || i === n[n.length - 1]) {
          throw e;
        }
      }
    }
    return o;
  };
  const T = (e, t) => {
    if (!e || !t) {
      return e || t;
    }
    for (let [r, n] of Object.entries(t)) {
      if (n != null) {
        e[r] = n;
      }
    }
    return e;
  };
  const k = async (e, t, r) => {
    let n;
    let o = 0;
    while (o <= r.maxRetries) {
      try {
        n = await e(...t);
        break;
      } catch (e) {
        if (e instanceof m || e instanceof i.MinigetError && e.statusCode < 500 || o >= r.maxRetries) {
          throw e;
        }
        let t = Math.min(++o * r.backoff.inc, r.backoff.max);
        await new Promise(e => s(e, t));
      }
    }
    return n;
  };
  const A = /^[)\]}'\s]+/;
  const C = (e, t, r) => {
    if (!r || typeof r == "object") {
      return r;
    }
    try {
      r = r.replace(A, "");
      return JSON.parse(r);
    } catch (r) {
      throw Error(`Error parsing ${t} in ${e}: ${r.message}`);
    }
  };
  const x = (e, t, r, n, o, i) => {
    let s = a.between(r, n, o);
    if (!s) {
      throw Error(`Could not find ${t} in ${e}`);
    }
    return C(e, t, a.cutAfterJSON(`${i}${s}`));
  };
  const S = (e, t) => {
    const r = t && (t.args && t.args.player_response || t.player_response || t.playerResponse || t.embedded_player_response);
    return C(e, "player_response", r);
  };
  const O = async (e, r) => {
    const n = Object.assign({
      headers: {}
    }, r.requestOptions);
    let o = n.headers.Cookie || n.headers.cookie;
    n.headers = Object.assign({
      "x-youtube-client-name": "1",
      "x-youtube-client-version": h,
      "x-youtube-identity-token": t.cookieCache.get(o || "browser") || ""
    }, n.headers);
    const i = async (o, i) => {
      n.headers["x-youtube-identity-token"] ||= await ((e, r, n, o) => t.cookieCache.getOrSet(n, async () => {
        let t = (await w(e, r)).match(/(["'])ID_TOKEN\1[:,]\s?"([^"]+)"/);
        if (!t && o) {
          throw new m("Cookie header used in request, but unable to find YouTube identity token");
        }
        return t && t[2];
      }))(e, r, o, i);
    };
    if (o) {
      await i(o, true);
    }
    const s = ((e, t) => b(e, t) + "&pbj=1")(e, r);
    const c = await a.exposedMiniget(s, r, n).text();
    let u = C("watch.json", "body", c);
    if (u.reload === "now") {
      await i("browser", false);
    }
    if (u.reload === "now" || !Array.isArray(u)) {
      throw Error("Unable to retrieve video metadata in watch.json");
    }
    let l = u.reduce((e, t) => Object.assign(t, e), {});
    l.player_response = S("watch.json", l);
    l.html5player = l.player && l.player.assets && l.player.assets.js;
    return l;
  };
  const I = async (e, t) => {
    let r = await w(e, t);
    let n = {
      page: "watch"
    };
    try {
      h = a.between(r, "{\"key\":\"cver\",\"value\":\"", "\"}");
      n.player_response = x("watch.html", "player_response", r, /\bytInitialPlayerResponse\s*=\s*\{/i, "</script>", "{");
    } catch (e) {
      let t = x("watch.html", "player_response", r, /\bytplayer\.config\s*=\s*{/, "</script>", "{");
      n.player_response = S("watch.html", t);
    }
    n.response = x("watch.html", "response", r, /\bytInitialData("\])?\s*=\s*\{/i, "</script>", "{");
    n.html5player = E(r);
    return n;
  };
  const L = async (e, t) => {
    const r = new URL("https://www.youtube.com/get_video_info");
    r.searchParams.set("video_id", e);
    r.searchParams.set("c", "TVHTML5");
    r.searchParams.set("cver", "7" + h.substr(1));
    r.searchParams.set("eurl", "https://youtube.googleapis.com/v/" + e);
    r.searchParams.set("ps", "default");
    r.searchParams.set("gl", "US");
    r.searchParams.set("hl", t.lang || "en");
    r.searchParams.set("html5", "1");
    const o = await a.exposedMiniget(r.toString(), t).text();
    let i = n.parse(o);
    i.player_response = S("get_video_info", i);
    return i;
  };
  const R = e => {
    let t = [];
    if (e && e.streamingData) {
      t = t.concat(e.streamingData.formats || []).concat(e.streamingData.adaptiveFormats || []);
    }
    return t;
  };
  t.getInfo = async (e, r) => {
    let n = await t.getBasicInfo(e, r);
    const o = n.player_response && n.player_response.streamingData && (n.player_response.streamingData.dashManifestUrl || n.player_response.streamingData.hlsManifestUrl);
    let i = [];
    if (n.formats.length) {
      n.html5player = n.html5player || E(await w(e, r)) || E(await ((e, t) => {
        const r = `${"https://www.youtube.com/embed/" + e}?hl=${t.lang || "en"}`;
        return a.exposedMiniget(r, t).text();
      })(e, r));
      if (!n.html5player) {
        throw Error("Unable to find html5player file");
      }
      const t = new URL(n.html5player, f).toString();
      i.push(d.decipherFormats(n.formats, t, r));
    }
    if (o && n.player_response.streamingData.dashManifestUrl) {
      let e = n.player_response.streamingData.dashManifestUrl;
      i.push(P(e, r));
    }
    if (o && n.player_response.streamingData.hlsManifestUrl) {
      let e = n.player_response.streamingData.hlsManifestUrl;
      i.push(B(e, r));
    }
    let s = await Promise.all(i);
    n.formats = Object.values(Object.assign({}, ...s));
    n.formats = n.formats.map(c.addFormatMeta);
    n.formats.sort(c.sortFormats);
    n.full = true;
    return n;
  };
  const P = (e, t) => new Promise((r, n) => {
    let i = {};
    const s = o.parser(false);
    let c;
    s.onerror = n;
    s.onopentag = t => {
      if (t.name === "ADAPTATIONSET") {
        c = t.attributes;
      } else if (t.name === "REPRESENTATION") {
        const r = parseInt(t.attributes.ID);
        if (!isNaN(r)) {
          i[e] = Object.assign({
            itag: r,
            url: e,
            bitrate: parseInt(t.attributes.BANDWIDTH),
            mimeType: `${c.MIMETYPE}; codecs="${t.attributes.CODECS}"`
          }, t.attributes.HEIGHT ? {
            width: parseInt(t.attributes.WIDTH),
            height: parseInt(t.attributes.HEIGHT),
            fps: parseInt(t.attributes.FRAMERATE)
          } : {
            audioSampleRate: t.attributes.AUDIOSAMPLINGRATE
          });
        }
      }
    };
    s.onend = () => {
      r(i);
    };
    const u = a.exposedMiniget(new URL(e, f).toString(), t);
    u.setEncoding("utf8");
    u.on("error", n);
    u.on("data", e => {
      s.write(e);
    });
    u.on("end", s.close.bind(s));
  });
  const B = async (e, t) => {
    e = new URL(e, f);
    const r = await a.exposedMiniget(e.toString(), t).text();
    let n = {};
    r.split("\n").filter(e => /^https?:\/\//.test(e)).forEach(e => {
      const t = parseInt(e.match(/\/itag\/(\d+)\//)[1]);
      n[e] = {
        itag: t,
        url: e
      };
    });
    return n;
  };
  for (let e of ["getBasicInfo", "getInfo"]) {
    const r = t[e];
    t[e] = async (n, o = {}) => {
      a.checkForUpdates();
      let i = await u.getVideoID(n);
      const s = [e, i, o.lang].join("-");
      return t.cache.getOrSet(s, () => r(i, o));
    };
  }
  t.validateID = u.validateID;
  t.validateURL = u.validateURL;
  t.getURLVideoID = u.getURLVideoID;
  t.getVideoID = u.getVideoID;
};
