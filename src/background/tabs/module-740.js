// Module 740 [tabs] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(0);
  var o = r(3);
  var i = r(11);
  var a = r(33);
  var s = r(7);
  var c = r(1);
  var u = new class {
    constructor() {
      this._cache = new Map();
      this._timeCache = new Map();
      this._saveUrl = new Map();
      this.setListener();
    }
    report(e, t, r) {
      var n = this._cache.has(e) && this._cache.get(e) || [];
      n.push({
        name: t,
        result: r
      });
      this._cache.set(e, n);
      this.autoClean(e, t, r);
      EE.emit("request.matched", {
        tabId: e,
        data: {
          type: "request.matched",
          name: t,
          result: r
        }
      });
    }
    fbSetTime(e, t) {
      this._timeCache.set(e, t);
    }
    reportFbUrl(e, t) {
      var r = this._saveUrl.has(e) && this._saveUrl.get(e) || [];
      r.push(t);
      this._saveUrl.set(e, r);
      this.cleanFbUrl(e, t.name);
      EE.emit("request.fb", {
        tabId: e,
        data: {
          type: "request.fb"
        }
      });
    }
    removeFbUrl(e, t) {
      var r = this._cache.get(e);
      if (r && r.length) {
        if ((r = r.filter(e => e.name !== t)).length !== 0) {
          this._cache.set(e, r);
        } else {
          this._cache.delete(e);
        }
      }
    }
    cleanFbUrl(e, t) {
      setTimeout(() => {
        this.cleanFbUrl(e, t);
      }, 15000);
    }
    removeTask(e, t, r) {
      var n = this._cache.get(e);
      if (n && n.length) {
        if ((n = n.filter(e => e.name !== t && e.result !== r)).length !== 0) {
          this._cache.set(e, n);
        } else {
          this._cache.delete(e);
        }
      }
    }
    autoClean(e, t, r) {
      setTimeout(() => {
        this.removeTask(e, t, r);
      }, 15000);
    }
    setListener() {
      EE.on("request_cache.get_matched_requests", e => {
        var t;
        if (e.id) {
          var r = (t = this._cache.get(e.id)) === null || t === undefined ? undefined : t.map(e => e.result);
          EE.emit("request_cache.return_matched_requests", {
            id: e.id,
            tasks: r
          });
          this._cache.delete(e.id);
        }
      });
      EE.on("request_cache.get_server_time", e => {
        if (e.id) {
          var t = this._timeCache.get(e.id);
          EE.emit("request_cache.return_server_time", {
            id: e.id,
            msgId: e.msgId,
            serverTime: t
          });
        }
      });
      EE.on("request_cache.get_fb_saved_url", e => {
        if (e.id) {
          var t = this._saveUrl.has(e.id) ? this._saveUrl.get(e.id) : [];
          var r = t == null ? undefined : t.find(t => t.name.includes(e.name));
          EE.emit("request_cache.return_fb_saved_url", {
            id: e.id,
            msgId: e.msgId,
            url: r
          });
        }
      });
      chrome.tabs.onRemoved.addListener(e => {
        this._cache.delete(e);
      });
      chrome.tabs.onUpdated.addListener((e, t) => {
        if (t.status === "loading") {
          this._cache.delete(e);
        }
      });
    }
  }();
  var l = ["unicornmedia.com", "plist.vn-hd.com", "content-aaps1.uplynk.com", "playlist-free.vieon.vn", "watch.asiaplayer.site"];
  class d {
    constructor() {
      this.name = "default";
    }
    match(e, t, r) {
      var o;
      var i;
      if ((!(e => a.a.check(e.url, "requests") || a.a.check(e.url))(t) || e.initiator && e.initiator.includes("//vuighe.net") && t.url.match(/playlist[\s\S]*\.m3u8/g) || ((o = e.initiator) === null || o === undefined ? undefined : o.match(/tvzingvn\.net|play\.play[\s\S]*(xyz|net)/g)) && t.url.includes(".m3u8") || Object(n.isSpecialUrls)(t.url)) && !e.url.match(/https:\/[\s\S]*phim18hd\.net\/link\/[\s\S]*\.m3u/g)) {
        var u = t;
        if (!((i = u.filename) === null || i === undefined ? undefined : i.trim())) {
          u.filename = "noname_" + Date.now();
        }
        if (l.some(e => {
          var t;
          if ((t = u.host) === null || t === undefined) {
            return undefined;
          } else {
            return t.includes(e);
          }
        }) && (Object(c.B)(u.ext) || u.ext == "mpd")) {
          u.type = "video";
        } else {
          u = Object(n.detectMediaTypeAndExt)(u, r["content-type"], r["content-disposition"]);
          if ((!!Object(c.B)(u.ext) || u.ext == "mpd") && !u.type) {
            u.type = "video";
          }
        }
        if (Object(n.isValidData)(u) && !function (e, t) {
          var r;
          var n;
          if ((r = e.host) === null || r === undefined ? undefined : r.includes("vlive-hls.akamaized.net")) {
            return true;
          }
          if (e.ext !== "flv" && e.host !== "musicmd1.keeng.net") {
            return false;
          }
          if ((n = e.host) === null || n === undefined ? undefined : n.includes("flv.nimo.tv")) {
            return true;
          }
          var o = t.server;
          return o && o.indexOf("icecast") !== -1;
        }(u, r) && u.type !== "image" || Object(n.isSpecialUrls)(u.url)) {
          var d = this._removeByteRequestFromUrl(e.url);
          u.url = d.url;
          if (e.statusCode === 302 || function (e, t, r) {
            if (!t || Object(c.B)(e.ext) || Object(n.isSpecialUrls)(e.url)) {
              return true;
            }
            if (e.host === "vhosting.vcmedia.vn") {
              return true;
            }
            var o = +t;
            if (Number.isNaN(o)) {
              o = null;
            }
            if (e.ext === "m3u8" || e.exts && e.exts.includes("m3u8")) {
              return true;
            }
            var i = s.a.get("min_stream_size");
            if (o !== null && o < i && !r && e.ext != "mpd") {
              return false;
            }
            if (r && r.match(/^bytes\s[1-9]\d+-\d+\/\d+/g)) {
              var a = r.split("/");
              if (a && a.length) {
                e.size = parseInt(a.pop() || "");
                return true;
              }
            }
            e.size = o || undefined;
            return true;
          }(u, r["content-length"], r["content-range"])) {
            if (d.hasChanged) {
              delete u.size;
            }
            if (e.statusCode === 302 && e.redirectUrl) {
              u.altUrl = this._removeByteRequestFromUrl(e.redirectUrl);
            }
            this._reportNewMedia(e, u);
          }
        }
      }
    }
    _reportNewMedia(e, t) {
      var r = this;
      var n = e.tabId || -1;
      function i(e, n, i) {
        var a = Object(o.f)(e);
        if ((!a.protocol || !!a.protocol.match(/^http|^ftp/)) && (a.host !== "coccoc.com" || a.pathname !== "/webhp")) {
          t.referrer = i || e;
          (function (e, t, r) {
            u.report(e, t, r);
          })(n, r.name, t);
        }
      }
      function a(t) {
        return i(t, n, e.initiator);
      }
      if (e.parentFrameId === -1 || e.initiator && e.initiator.match(/zingmp3\.vn|www\.twitch\.tv/)) {
        if (n === -1) {
          chrome.tabs.query({
            url: e.initiator + "/*"
          }).then(e => {
            var t = e.find(e => e.active);
            if (t) {
              i(t.url, t.id, t.url);
            } else {
              e.forEach(e => {
                i(e.url, e.id, e.url);
              });
            }
          });
          return;
        }
        chrome.tabs.get(n, e => {
          if (e) {
            a(e.url || "");
          } else {
            console.log(chrome.runtime.lastError);
          }
        });
      } else {
        try {
          if (e.url == "about:blank") {
            return;
          }
          a(e.url);
        } catch (e) {
          console.log(e);
        }
      }
    }
    _removeByteRequestFromUrl(e) {
      var t = false;
      if (e.match(/(googlevideo\.com)|(mycdn\.me)/g)) {
        if (e !== (e = e.replace(/[&?]begin=\d+/g, "").replace(/&bytes=\d+-\d+/g, "").replace(/&range=\d+-\d+/g, "").replace(/&rn=\d+/g, "").replace(/&rbuf=\d+/g, ""))) {
          t = true;
        }
      }
      return {
        url: e,
        hasChanged: t
      };
    }
  }
  new class {
    constructor() {
      this._listener = new d();
      this._init();
      this._saveData = {};
    }
    _init() {
      var e = this._onResponseStarted.bind(this);
      var t = ["xmlhttprequest", "object", "other", "script", "image", "sub_frame"];
      if (i.a.MEDIA_WEB_REQUEST) {
        t.push("media");
      }
      var r = {
        urls: ["*://*/*"],
        types: t
      };
      if (i.a.WEB_REQUEST_EXTRA_HEADERS) {
        ["requestHeaders"].push("extraHeaders");
      }
      chrome.webRequest.onBeforeRequest.addListener(this._onBeforeRequest.bind(this), r, ["requestBody"]);
      chrome.webRequest.onBeforeRedirect.addListener(e, r, ["responseHeaders", "extraHeaders"]);
      chrome.webRequest.onResponseStarted.addListener(e, r, ["responseHeaders", "extraHeaders"]);
    }
    _onBeforeRequest(e) {
      var c;
      var d;
      var f;
      var y;
      var T;
      var k;
      try {
        if (e.url.match(/https:\/\/www.facebook.com\/ajax\/bulk-route-definitions/) && (e == null ? undefined : e.requestBody)?.raw?.[0]?.bytes) {
          var x = /route_urls\[\d+\]\s*=\s*(.+?)&/;
          var S = decodeURIComponent(String.fromCharCode.apply(null, new Uint8Array(e.requestBody.raw[0].bytes))).match(/route_urls\[\d+\]\s*=\s*(.+?)&/g);
          var O = "";
          if (S && S.some(e => e.match(/reel\/\d+/) && !e.includes("?comment_id"), false) && S.length > 1) {
            for (var I = 0; I < S.length; ++I) {
              var L = x.exec(S[I])?.[1];
              if (L) {
                if (!L.match(/reel\/\d+/) || L.includes("?comment_id")) {
                  O += decodeURIComponent(L);
                } else {
                  u.reportFbUrl(e.tabId, {
                    url: L,
                    name: O
                  });
                  O = "";
                }
              }
            }
          }
        }
        if (e.url.includes("cdn-s.hoolacdn.com")) {
          this._listener.match(e, Object.assign(Object.assign({}, Object(o.f)(e.url)), {
            type: "video",
            ext: "m3u8",
            exts: ["m3u8"]
          }), {});
        }
        if (e.url.includes("/avcaption.v1.StreamingService/GetPlaylist") && e.tabId !== -1) {
          var R = new Uint8Array(((c = e.requestBody?.raw) === null || c === undefined ? undefined : c[0].bytes) || []);
          fetch(e.url, {
            method: "POST",
            body: R,
            headers: {
              "Content-Type": "application/grpc-web+proto",
              "x-grpc-web": "1"
            }
          }).then(e => e.text()).then(t => {
            var r = t.indexOf("#EXTM3U");
            t = t.slice(r);
            this._listener.match(e, Object.assign(Object.assign({}, Object(o.f)(e.url)), {
              type: "video",
              ext: "m3u8",
              exts: ["m3u8"],
              realRes: t
            }), {});
          });
        }
        if (e.url.includes("https://video.nimo.tv/v1/liveVideo/aggregateVideos")) {
          this._listener.match(e, Object.assign(Object.assign({}, Object(o.f)(e.url)), {
            type: "video",
            ext: "m3u8",
            exts: ["m3u8"],
            requestBodyFormData: [["keyType", ((d = e.requestBody?.formData) === null || d === undefined ? undefined : d.keyType[0]) || ""], ["body", ((f = e.requestBody?.formData) === null || f === undefined ? undefined : f.body[0]) || ""]]
          }), {});
        }
        if (e.url.includes("https://wsapi.nimo.tv/") && e.requestBody?.raw?.[0]?.bytes) {
          var P = e.requestBody.raw[0].bytes;
          var B = new TextDecoder().decode(P);
          if (B.includes("getLiveVideoInfo") || B.includes("GetLiveRoomInfo")) {
            this._listener.match(e, Object.assign(Object.assign({}, Object(o.f)(e.url)), {
              type: "video",
              ext: "m3u8",
              exts: ["m3u8"],
              requestBody: Object(n.arrayBufferToBase64)(P)
            }), {});
          }
        }
        if (e.url.match(/youtube\.com\/.+\/GenerateIT/i)) {
          var M = Object(o.f)(e.url);
          var F = new TextDecoder().decode((y = e.requestBody?.raw) === null || y === undefined ? undefined : y[0].bytes);
          var U = JSON.parse(F);
          this._listener.match(e, Object.assign(Object.assign({}, M), {
            url: M.url,
            ext: "m3u8",
            exts: ["m3u8"],
            params: U,
            requestMethod: e.method,
            identifier: Date.now().toString()
          }), {});
        }
        if (e.url.match(/:\/\/v\.douyu\.com\/.+\/stream\/getStreamUrl/i) && e.initiator === "https://v.douyu.com") {
          var N = Object(o.f)(e.url);
          this._listener.match(e, Object.assign(Object.assign({}, N), {
            url: N.url,
            ext: "m3u8",
            exts: ["m3u8"],
            params: e.requestBody?.formData,
            requestMethod: e.method,
            identifier: e.requestBody?.formData?.vid?.[0]
          }), {});
        }
        if (e.url.match(/[a-z0-9\-_]+\.l\.qq\.com\/proxyhttp/i)) {
          try {
            var j = new TextDecoder().decode((T = e.requestBody?.raw) === null || T === undefined ? undefined : T[0].bytes);
            if (j) {
              var q = JSON.parse(j);
              if (q.vinfoparam || q.build == "vinfoad") {
                var H = Date.now().toString();
                if (q.adparam) {
                  var V = new URLSearchParams(q.adparam);
                  if (V && V.has("vid")) {
                    H = V.get("vid");
                  }
                }
                var W = Object(o.f)(e.url);
                this._listener.match(e, Object.assign(Object.assign({}, W), {
                  url: W.url,
                  ext: "m3u8",
                  exts: ["m3u8"],
                  params: q,
                  paramType: "JSON",
                  requestMethod: e.method,
                  identifier: H
                }), {});
              }
            }
          } catch (e) {}
        }
        if (e.url.match(/\/videos\//i) && /https?:\/\/(www\.)?ecostream\.[a-z]+/i.test(e.initiator || "")) {
          var z = Object(o.f)(e.url);
          this._listener.match(e, Object.assign(Object.assign({}, z), {
            url: z.url,
            ext: "m3u8",
            exts: ["m3u8"]
          }), {});
        }
        if (e.url.match(/\/\/api-.+\.(play|plhq).+\.(xyz|net|site|click|cfd|com)\/api(\/.+)?\/(playiframe|getblob).+/i) && ((k = e.initiator) === null || k === undefined ? undefined : k.match(/\/\/play\.(play|plhq).+\.(xyz|net|site|click|cfd|com)/i))) {
          var Y = Object(o.f)(e.url);
          this._listener.match(e, Object.assign(Object.assign({}, Y), {
            url: Y.url,
            ext: Y.ext || "",
            exts: Y.exts,
            params: e.requestBody?.formData,
            requestMethod: e.method,
            identifier: e.requestId
          }), {});
        }
        try {
          if (e.url.match(/nhaccuatui\.com\/api(\/media\/info)/i)) {
            var G = Object(o.f)(e.url);
            this._listener.match(e, Object.assign(Object.assign({}, G), {
              url: G.url,
              ext: "m3u8",
              exts: ["m3u8"],
              params: e.requestBody?.formData,
              requestMethod: e.method,
              identifier: e.requestId,
              type: "video"
            }), {});
          }
        } catch (e) {
          console.log(e);
        }
        if (e.initiator && e.initiator.includes("bschool.vn") && /\.mp4.+?\.ts\?nimblesessionid=/.test(e.url)) {
          var Q = {};
          chrome.tabs.get(e.tabId, t => {
            Q["" + t.url] = e.url.split("?")[1];
            chrome.storage.local.set(Q);
          });
        }
        if (e.url.match(/\.(mpd|m3u8)$/i)) {
          var $ = Object(o.f)(e.url);
          this._listener.match(e, Object.assign(Object.assign({}, $), {
            url: $.url,
            ext: $.ext || "",
            exts: $.exts
          }), {});
        }
      } catch (e) {
        console.log(e);
      }
    }
    _onResponseStarted(e) {
      try {
        if (e.tabId < 0 || e.statusCode > 399) {
          return;
        }
        var t = this._parseHeaders(e.responseHeaders || []);
        if (e.url.includes("graphql")) {
          u.fbSetTime(e.tabId, Date.parse(t.date || ""));
        }
        var r = Object(o.f)(e.url);
        this._listener.match(e, r, t);
      } catch (e) {
        console.log(e);
      }
    }
    _parseHeaders(e) {
      var t = {};
      if (e.length) {
        e.forEach(e => {
          var r;
          t[e.name.toLowerCase()] = (r = e.value) === null || r === undefined ? undefined : r.toLowerCase();
        });
        return t;
      } else {
        return {};
      }
    }
  }();
};
