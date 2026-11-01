// Module 6 - Savior Universal media sniffer, network request tracking, and media event broadcaster
export default function(t, e, r) {
  "use strict";
  r.d(e, "a", (function() {
    return q;
  })), r.d(e, "c", (function() {
    return R;
  })), r.d(e, "e", (function() {
    return F;
  })), r.d(e, "f", (function() {
    return G;
  })), r.d(e, "g", (function() {
    return Q;
  })), r.d(e, "d", (function() {
    return z;
  })), r.d(e, "b", (function() {
    return L;
  }));
  var n = (function() {
    function t2() {
      this.listeners = {};
    }
    var e2 = t2.prototype;
    return e2.on = function(t3, e3) {
      this.listeners[t3] || (this.listeners[t3] = []), this.listeners[t3].push(e3);
    }, e2.off = function(t3, e3) {
      if (!this.listeners[t3]) return false;
      var r2 = this.listeners[t3].indexOf(e3);
      return this.listeners[t3] = this.listeners[t3].slice(0), this.listeners[t3].splice(r2, 1), r2 > -1;
    }, e2.trigger = function(t3) {
      var e3 = this.listeners[t3];
      if (e3) if (2 === arguments.length) for (var r2 = e3.length, n2 = 0; n2 < r2; ++n2) e3[n2].call(this, arguments[1]);
      else for (var i2 = Array.prototype.slice.call(arguments, 1), o2 = e3.length, a2 = 0; a2 < o2; ++a2) e3[a2].apply(this, i2);
    }, e2.dispose = function() {
      this.listeners = {};
    }, e2.pipe = function(t3) {
      this.on("data", (function(e3) {
        t3.push(e3);
      }));
    }, t2;
  })(), i = r(77), o = r.n(i), a = r(118);
  /*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 */
  class s extends n {
    constructor() {
      super(), this.buffer = "";
    }
    push(t2) {
      let e2;
      for (this.buffer += t2, e2 = this.buffer.indexOf("\n"); e2 > -1; e2 = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e2)), this.buffer = this.buffer.substring(e2 + 1);
    }
  }
  const u = String.fromCharCode(9), c = function(t2) {
    const e2 = /([0-9.]*)?@?([0-9.]*)?/.exec(t2 || ""), r2 = {};
    return e2[1] && (r2.length = parseInt(e2[1], 10)), e2[2] && (r2.offset = parseInt(e2[2], 10)), r2;
  }, l = function(t2) {
    const e2 = {};
    if (!t2) return e2;
    const r2 = t2.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'));
    let n2, i2 = r2.length;
    for (; i2--; ) "" !== r2[i2] && (n2 = /([^=]*)=(.*)/.exec(r2[i2]).slice(1), n2[0] = n2[0].replace(/^\s+|\s+$/g, ""), n2[1] = n2[1].replace(/^\s+|\s+$/g, ""), n2[1] = n2[1].replace(/^['"](.*)['"]$/g, "$1"), e2[n2[0]] = n2[1]);
    return e2;
  }, f = (t2) => {
    const e2 = t2.split("x"), r2 = {};
    return e2[0] && (r2.width = parseInt(e2[0], 10)), e2[1] && (r2.height = parseInt(e2[1], 10)), r2;
  };
  class d extends n {
    constructor() {
      super(), this.customParsers = [], this.tagMappers = [];
    }
    push(t2) {
      let e2, r2;
      if (0 === (t2 = t2.trim()).length) return;
      if ("#" !== t2[0]) return void this.trigger("data", { type: "uri", uri: t2 });
      this.tagMappers.reduce((e3, r3) => {
        const n2 = r3(t2);
        return n2 === t2 ? e3 : e3.concat([n2]);
      }, [t2]).forEach((t3) => {
        for (let e3 = 0; e3 < this.customParsers.length; e3++) if (this.customParsers[e3].call(this, t3)) return;
        if (0 === t3.indexOf("#EXT")) if (t3 = t3.replace("\r", ""), e2 = /^#EXTM3U/.exec(t3), e2) this.trigger("data", { type: "tag", tagType: "m3u" });
        else {
          if (e2 = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(t3), e2) return r2 = { type: "tag", tagType: "inf" }, e2[1] && (r2.duration = parseFloat(e2[1])), e2[2] && (r2.title = e2[2]), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(t3), e2) return r2 = { type: "tag", tagType: "targetduration" }, e2[1] && (r2.duration = parseInt(e2[1], 10)), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-VERSION:([0-9.]*)?/.exec(t3), e2) return r2 = { type: "tag", tagType: "version" }, e2[1] && (r2.version = parseInt(e2[1], 10)), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(t3), e2) return r2 = { type: "tag", tagType: "media-sequence" }, e2[1] && (r2.number = parseInt(e2[1], 10)), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(t3), e2) return r2 = { type: "tag", tagType: "discontinuity-sequence" }, e2[1] && (r2.number = parseInt(e2[1], 10)), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(t3), e2) return r2 = { type: "tag", tagType: "playlist-type" }, e2[1] && (r2.playlistType = e2[1]), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-BYTERANGE:(.*)?$/.exec(t3), e2) return r2 = o()(c(e2[1]), { type: "tag", tagType: "byterange" }), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(t3), e2) return r2 = { type: "tag", tagType: "allow-cache" }, e2[1] && (r2.allowed = !/NO/.test(e2[1])), void this.trigger("data", r2);
          if (e2 = /^#EXT-X-MAP:(.*)$/.exec(t3), e2) {
            if (r2 = { type: "tag", tagType: "map" }, e2[1]) {
              const t4 = l(e2[1]);
              t4.URI && (r2.uri = t4.URI), t4.BYTERANGE && (r2.byterange = c(t4.BYTERANGE));
            }
            this.trigger("data", r2);
          } else {
            if (e2 = /^#EXT-X-STREAM-INF:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "stream-inf" }, e2[1] && (r2.attributes = l(e2[1]), r2.attributes.RESOLUTION && (r2.attributes.RESOLUTION = f(r2.attributes.RESOLUTION)),
              r2.attributes.BANDWIDTH && (r2.attributes.BANDWIDTH = parseInt(r2.attributes.BANDWIDTH, 10)), r2.attributes["FRAME-RATE"] && (r2.attributes["FRAME-RATE"] = parseFloat(r2.attributes["FRAME-RATE"])),
              r2.attributes["PROGRAM-ID"] && (r2.attributes["PROGRAM-ID"] = parseInt(r2.attributes["PROGRAM-ID"], 10))), void this.trigger("data", r2);
            if (e2 = /^#EXT-X-MEDIA:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "media" }, e2[1] && (r2.attributes = l(e2[1])), void this.trigger("data", r2);
            if (e2 = /^#EXT-X-ENDLIST/.exec(t3), e2) this.trigger("data", { type: "tag", tagType: "endlist" });
            else if (e2 = /^#EXT-X-DISCONTINUITY/.exec(t3), e2) this.trigger("data", { type: "tag", tagType: "discontinuity" });
            else {
              if (e2 = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "program-date-time" }, e2[1] && (r2.dateTimeString = e2[1], r2.dateTimeObject = new Date(e2[1])), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-KEY:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "key" }, e2[1] && (r2.attributes = l(e2[1]), r2.attributes.IV && ("0x" === r2.attributes.IV.substring(0,
                2).toLowerCase() && (r2.attributes.IV = r2.attributes.IV.substring(2)), r2.attributes.IV = r2.attributes.IV.match(/.{8}/g), r2.attributes.IV[0] = parseInt(r2.attributes.IV[0], 16), r2.attributes.IV[1] = parseInt(r2.attributes.IV[1], 16),
                r2.attributes.IV[2] = parseInt(r2.attributes.IV[2], 16), r2.attributes.IV[3] = parseInt(r2.attributes.IV[3], 16), r2.attributes.IV = new Uint32Array(r2.attributes.IV))), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-START:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "start" }, e2[1] && (r2.attributes = l(e2[1]), r2.attributes["TIME-OFFSET"] = parseFloat(r2.attributes["TIME-OFFSET"]),
                r2.attributes.PRECISE = /YES/.test(r2.attributes.PRECISE)), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(t3), e2) return r2 = { type: "tag", tagType: "cue-out-cont" }, e2[1] ? r2.data = e2[1] : r2.data = "", void this.trigger("data", r2);
              if (e2 = /^#EXT-X-CUE-OUT:(.*)?$/.exec(t3), e2) return r2 = { type: "tag", tagType: "cue-out" }, e2[1] ? r2.data = e2[1] : r2.data = "", void this.trigger("data", r2);
              if (e2 = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t3), e2) return r2 = { type: "tag", tagType: "cue-in" }, e2[1] ? r2.data = e2[1] : r2.data = "", void this.trigger("data", r2);
              if (e2 = /^#EXT-X-SKIP:(.*)$/.exec(t3), e2 && e2[1]) return r2 = { type: "tag", tagType: "skip" }, r2.attributes = l(e2[1]),
                r2.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (r2.attributes["SKIPPED-SEGMENTS"] = parseInt(r2.attributes["SKIPPED-SEGMENTS"], 10)),
                r2.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (r2.attributes["RECENTLY-REMOVED-DATERANGES"] = r2.attributes["RECENTLY-REMOVED-DATERANGES"].split(u)), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-PART:(.*)$/.exec(t3), e2 && e2[1]) return r2 = { type: "tag", tagType: "part" }, r2.attributes = l(e2[1]), ["DURATION"].forEach((function(t4) {
                r2.attributes.hasOwnProperty(t4) && (r2.attributes[t4] = parseFloat(r2.attributes[t4]));
              })), ["INDEPENDENT", "GAP"].forEach((function(t4) {
                r2.attributes.hasOwnProperty(t4) && (r2.attributes[t4] = /YES/.test(r2.attributes[t4]));
              })), r2.attributes.hasOwnProperty("BYTERANGE") && (r2.attributes.byterange = c(r2.attributes.BYTERANGE)), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t3), e2 && e2[1]) return r2 = { type: "tag", tagType: "server-control" }, r2.attributes = l(e2[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach((function(t4) {
                r2.attributes.hasOwnProperty(t4) && (r2.attributes[t4] = parseFloat(r2.attributes[t4]));
              })), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach((function(t4) {
                r2.attributes.hasOwnProperty(t4) && (r2.attributes[t4] = /YES/.test(r2.attributes[t4]));
              })), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-PART-INF:(.*)$/.exec(t3), e2 && e2[1]) return r2 = { type: "tag", tagType: "part-inf" }, r2.attributes = l(e2[1]), ["PART-TARGET"].forEach((function(t4) {
                r2.attributes.hasOwnProperty(t4) && (r2.attributes[t4] = parseFloat(r2.attributes[t4]));
              })), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t3), e2 && e2[1]) return r2 = { type: "tag", tagType: "preload-hint" }, r2.attributes = l(e2[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach((function(t4) {
                if (r2.attributes.hasOwnProperty(t4)) {
                  r2.attributes[t4] = parseInt(r2.attributes[t4], 10);
                  const e3 = "BYTERANGE-LENGTH" === t4 ? "length" : "offset";
                  r2.attributes.byterange = r2.attributes.byterange || {}, r2.attributes.byterange[e3] = r2.attributes[t4], delete r2.attributes[t4];
                }
              })), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t3), e2 && e2[1]) return r2 = { type: "tag", tagType: "rendition-report" }, r2.attributes = l(e2[1]), ["LAST-MSN", "LAST-PART"].forEach((function(t4) {
                r2.attributes.hasOwnProperty(t4) && (r2.attributes[t4] = parseInt(r2.attributes[t4], 10));
              })), void this.trigger("data", r2);
              if (e2 = /^#EXT-X-DATERANGE:(.*)$/.exec(t3), e2 && e2[1]) {
                r2 = { type: "tag", tagType: "daterange" }, r2.attributes = l(e2[1]), ["ID", "CLASS"].forEach((function(t5) {
                  r2.attributes.hasOwnProperty(t5) && (r2.attributes[t5] = String(r2.attributes[t5]));
                })), ["START-DATE", "END-DATE"].forEach((function(t5) {
                  r2.attributes.hasOwnProperty(t5) && (r2.attributes[t5] = new Date(r2.attributes[t5]));
                })), ["DURATION", "PLANNED-DURATION"].forEach((function(t5) {
                  r2.attributes.hasOwnProperty(t5) && (r2.attributes[t5] = parseFloat(r2.attributes[t5]));
                })), ["END-ON-NEXT"].forEach((function(t5) {
                  r2.attributes.hasOwnProperty(t5) && (r2.attributes[t5] = /YES/i.test(r2.attributes[t5]));
                })), ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach((function(t5) {
                  r2.attributes.hasOwnProperty(t5) && (r2.attributes[t5] = r2.attributes[t5].toString(16));
                }));
                const t4 = /^X-([A-Z]+-)+[A-Z]+$/;
                for (const e3 in r2.attributes) {
                  if (!t4.test(e3)) continue;
                  const n2 = /[0-9A-Fa-f]{6}/g.test(r2.attributes[e3]), i2 = /^\d+(\.\d+)?$/.test(r2.attributes[e3]);
                  r2.attributes[e3] = n2 ? r2.attributes[e3].toString(16) : i2 ? parseFloat(r2.attributes[e3]) : String(r2.attributes[e3]);
                }
                this.trigger("data", r2);
              } else if (e2 = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(t3), e2) this.trigger("data", { type: "tag", tagType: "independent-segments" });
              else if (e2 = /^#EXT-X-I-FRAMES-ONLY/.exec(t3), e2) this.trigger("data", { type: "tag", tagType: "i-frames-only" });
              else {
                if (e2 = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "content-steering" }, r2.attributes = l(e2[1]), void this.trigger("data", r2);
                if (e2 = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "i-frame-playlist" }, r2.attributes = l(e2[1]), r2.attributes.URI && (r2.uri = r2.attributes.URI),
                  r2.attributes.BANDWIDTH && (r2.attributes.BANDWIDTH = parseInt(r2.attributes.BANDWIDTH, 10)), r2.attributes.RESOLUTION && (r2.attributes.RESOLUTION = f(r2.attributes.RESOLUTION)),
                  r2.attributes["AVERAGE-BANDWIDTH"] && (r2.attributes["AVERAGE-BANDWIDTH"] = parseInt(r2.attributes["AVERAGE-BANDWIDTH"], 10)), r2.attributes["FRAME-RATE"] && (r2.attributes["FRAME-RATE"] = parseFloat(r2.attributes["FRAME-RATE"])),
                  void this.trigger("data", r2);
                if (e2 = /^#EXT-X-DEFINE:(.*)$/.exec(t3), e2) return r2 = { type: "tag", tagType: "define" }, r2.attributes = l(e2[1]), void this.trigger("data", r2);
                this.trigger("data", { type: "tag", data: t3.slice(4) });
              }
            }
          }
        }
        else this.trigger("data", { type: "comment", text: t3.slice(1) });
      });
    }
    addParser({ expression: t2, customType: e2, dataParser: r2, segment: n2 }) {
      "function" != typeof r2 && (r2 = (t3) => t3), this.customParsers.push((i2) => {
        if (t2.exec(i2)) return this.trigger("data", { type: "custom", data: r2(i2), customType: e2, segment: n2 }), true;
      });
    }
    addTagMapper({ expression: t2, map: e2 }) {
      this.tagMappers.push((r2) => t2.test(r2) ? e2(r2) : r2);
    }
  }
  const h = function(t2) {
    const e2 = {};
    return Object.keys(t2).forEach((function(r2) {
      var n2;
      e2[n2 = r2, n2.toLowerCase().replace(/-(\w)/g, (t3) => t3[1].toUpperCase())] = t2[r2];
    })), e2;
  }, p = function(t2) {
    const { serverControl: e2, targetDuration: r2, partTargetDuration: n2 } = t2;
    if (!e2) return;
    const i2 = "#EXT-X-SERVER-CONTROL", o2 = "holdBack", a2 = "partHoldBack", s2 = r2 && 3 * r2, u2 = n2 && 2 * n2;
    r2 && !e2.hasOwnProperty(o2) && (e2[o2] = s2, this.trigger("info", { message: `${i2} defaulting HOLD-BACK to targetDuration * 3 (${s2}).` })), s2 && e2[o2] < s2 && (this.trigger("warn",
      { message: `${i2} clamping HOLD-BACK (${e2[o2]}) to targetDuration * 3 (${s2})` }), e2[o2] = s2), n2 && !e2.hasOwnProperty(a2) && (e2[a2] = 3 * n2, this.trigger("info",
      { message: `${i2} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e2[a2]}).` })), n2 && e2[a2] < u2 && (this.trigger("warn", { message: `${i2} clamping PART-HOLD-BACK (${e2[a2]}) to partTargetDuration * 2 (${u2}).` }), e2[a2] = u2);
  };
  class v extends n {
    constructor(t2 = {}) {
      super(), this.lineStream = new s(), this.parseStream = new d(), this.lineStream.pipe(this.parseStream), this.mainDefinitions = t2.mainDefinitions || {}, this.params = new URL(t2.uri, "https://a.com").searchParams, this.lastProgramDateTime = null;
      const e2 = this, r2 = [];
      let n2, i2, u2 = {}, c2 = false;
      const l2 = function() {
      }, f2 = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} };
      let v2 = 0;
      this.manifest = { allowCache: true, discontinuityStarts: [], dateRanges: [], iFramePlaylists: [], segments: [] };
      let m2 = 0, y2 = 0;
      const g2 = {};
      this.on("end", () => {
        u2.uri || !u2.parts && !u2.preloadHints || (!u2.map && n2 && (u2.map = n2), !u2.key && i2 && (u2.key = i2), u2.timeline || "number" != typeof v2 || (u2.timeline = v2), this.manifest.preloadSegment = u2);
      }), this.parseStream.on("data", (function(t3) {
        let s2, d2;
        if (e2.manifest.definitions) {
          for (const r3 in e2.manifest.definitions) if (t3.uri && (t3.uri = t3.uri.replace(`{$${r3}}`, e2.manifest.definitions[r3])),
            t3.attributes) for (const n3 in t3.attributes) "string" == typeof t3.attributes[n3] && (t3.attributes[n3] = t3.attributes[n3].replace(`{$${r3}}`, e2.manifest.definitions[r3]));
        }
        ({ tag() {
          ({ version() {
            t3.version && (this.manifest.version = t3.version);
          }, "allow-cache"() {
            this.manifest.allowCache = t3.allowed, "allowed" in t3 || (this.trigger("info", { message: "defaulting allowCache to YES" }), this.manifest.allowCache = true);
          }, byterange() {
            const e3 = {};
            "length" in t3 && (u2.byterange = e3, e3.length = t3.length, "offset" in t3 || (t3.offset = m2)), "offset" in t3 && (u2.byterange = e3, e3.offset = t3.offset), m2 = e3.offset + e3.length;
          }, endlist() {
            this.manifest.endList = true;
          }, inf() {
            "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", { message: "defaulting media sequence to zero" })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info",
              { message: "defaulting discontinuity sequence to zero" })), t3.title && (u2.title = t3.title), t3.duration > 0 && (u2.duration = t3.duration), 0 === t3.duration && (u2.duration = 0.01, this.trigger("info",
              { message: "updating zero segment duration to a small value" })), this.manifest.segments = r2;
          }, key() {
            if (t3.attributes) if ("NONE" !== t3.attributes.METHOD) if (t3.attributes.URI) {
              if ("com.apple.streamingkeydelivery" === t3.attributes.KEYFORMAT) return this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.apple.fps.1_0"] = { attributes: t3.attributes });
              if ("com.microsoft.playready" === t3.attributes.KEYFORMAT) return this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.microsoft.playready"] = { uri: t3.attributes.URI });
              if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === t3.attributes.KEYFORMAT) {
                return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(t3.attributes.METHOD) ? void this.trigger("warn",
                  { message: "invalid key method provided for Widevine" }) : ("SAMPLE-AES-CENC" === t3.attributes.METHOD && this.trigger("warn", { message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead" }),
                  "data:text/plain;base64," !== t3.attributes.URI.substring(0, 23) ? void this.trigger("warn", { message: "invalid key URI provided for Widevine" }) : t3.attributes.KEYID && "0x" === t3.attributes.KEYID.substring(0,
                  2) ? (this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.widevine.alpha"] = { attributes: { schemeIdUri: t3.attributes.KEYFORMAT, keyId: t3.attributes.KEYID.substring(2) },
                  pssh: Object(a.a)(t3.attributes.URI.split(",")[1]) })) : void this.trigger("warn", { message: "invalid key ID provided for Widevine" }));
              }
              t3.attributes.METHOD || this.trigger("warn", { message: "defaulting key method to AES-128" }), i2 = { method: t3.attributes.METHOD || "AES-128", uri: t3.attributes.URI }, void 0 !== t3.attributes.IV && (i2.iv = t3.attributes.IV);
            } else this.trigger("warn", { message: "ignoring key declaration without URI" });
            else i2 = null;
            else this.trigger("warn", { message: "ignoring key declaration without attribute list" });
          }, "media-sequence"() {
            isFinite(t3.number) ? this.manifest.mediaSequence = t3.number : this.trigger("warn", { message: "ignoring invalid media sequence: " + t3.number });
          }, "discontinuity-sequence"() {
            isFinite(t3.number) ? (this.manifest.discontinuitySequence = t3.number, v2 = t3.number) : this.trigger("warn", { message: "ignoring invalid discontinuity sequence: " + t3.number });
          }, "playlist-type"() {
            /VOD|EVENT/.test(t3.playlistType) ? this.manifest.playlistType = t3.playlistType : this.trigger("warn", { message: "ignoring unknown playlist type: " + t3.playlist });
          }, map() {
            n2 = {}, t3.uri && (n2.uri = t3.uri), t3.byterange && (n2.byterange = t3.byterange), i2 && (n2.key = i2);
          }, "stream-inf"() {
            this.manifest.playlists = r2, this.manifest.mediaGroups = this.manifest.mediaGroups || f2, t3.attributes ? (u2.attributes || (u2.attributes = {}), o()(u2.attributes, t3.attributes)) : this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
          }, media() {
            if (this.manifest.mediaGroups = this.manifest.mediaGroups || f2, !(t3.attributes && t3.attributes.TYPE && t3.attributes["GROUP-ID"] && t3.attributes.NAME)) return void this.trigger("warn", { message: "ignoring incomplete or missing media group" });
            const e3 = this.manifest.mediaGroups[t3.attributes.TYPE];
            e3[t3.attributes["GROUP-ID"]] = e3[t3.attributes["GROUP-ID"]] || {}, s2 = e3[t3.attributes["GROUP-ID"]], d2 = { default: /yes/i.test(t3.attributes.DEFAULT) }, d2.default ? d2.autoselect = true : d2.autoselect = /yes/i.test(t3.attributes.AUTOSELECT),
              t3.attributes.LANGUAGE && (d2.language = t3.attributes.LANGUAGE), t3.attributes.URI && (d2.uri = t3.attributes.URI), t3.attributes["INSTREAM-ID"] && (d2.instreamId = t3.attributes["INSTREAM-ID"]),
              t3.attributes.CHARACTERISTICS && (d2.characteristics = t3.attributes.CHARACTERISTICS), t3.attributes.FORCED && (d2.forced = /yes/i.test(t3.attributes.FORCED)), s2[t3.attributes.NAME] = d2;
          }, discontinuity() {
            v2 += 1, u2.discontinuity = true, this.manifest.discontinuityStarts.push(r2.length);
          }, "program-date-time"() {
            void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = t3.dateTimeString, this.manifest.dateTimeObject = t3.dateTimeObject), u2.dateTimeString = t3.dateTimeString, u2.dateTimeObject = t3.dateTimeObject;
            const { lastProgramDateTime: e3 } = this;
            this.lastProgramDateTime = new Date(t3.dateTimeString).getTime(), null === e3 && this.manifest.segments.reduceRight((t4, e4) => (e4.programDateTime = t4 - 1e3 * e4.duration, e4.programDateTime), this.lastProgramDateTime);
          }, targetduration() {
            !isFinite(t3.duration) || t3.duration < 0 ? this.trigger("warn", { message: "ignoring invalid target duration: " + t3.duration }) : (this.manifest.targetDuration = t3.duration, p.call(this, this.manifest));
          }, start() {
            t3.attributes && !isNaN(t3.attributes["TIME-OFFSET"]) ? this.manifest.start = { timeOffset: t3.attributes["TIME-OFFSET"], precise: t3.attributes.PRECISE } : this.trigger("warn", { message: "ignoring start declaration without appropriate attribute list" });
          }, "cue-out"() {
            u2.cueOut = t3.data;
          }, "cue-out-cont"() {
            u2.cueOutCont = t3.data;
          }, "cue-in"() {
            u2.cueIn = t3.data;
          }, skip() {
            this.manifest.skip = h(t3.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", t3.attributes, ["SKIPPED-SEGMENTS"]);
          }, part() {
            c2 = true;
            const e3 = this.manifest.segments.length, r3 = h(t3.attributes);
            u2.parts = u2.parts || [], u2.parts.push(r3), r3.byterange && (r3.byterange.hasOwnProperty("offset") || (r3.byterange.offset = y2), y2 = r3.byterange.offset + r3.byterange.length);
            const n3 = u2.parts.length - 1;
            this.warnOnMissingAttributes_(`#EXT-X-PART #${n3} for segment #${e3}`, t3.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((t4, e4) => {
              t4.hasOwnProperty("lastPart") || this.trigger("warn", { message: `#EXT-X-RENDITION-REPORT #${e4} lacks required attribute(s): LAST-PART` });
            });
          }, "server-control"() {
            const e3 = this.manifest.serverControl = h(t3.attributes);
            e3.hasOwnProperty("canBlockReload") || (e3.canBlockReload = false, this.trigger("info", { message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false" })), p.call(this, this.manifest),
              e3.canSkipDateranges && !e3.hasOwnProperty("canSkipUntil") && this.trigger("warn", { message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set" });
          }, "preload-hint"() {
            const e3 = this.manifest.segments.length, r3 = h(t3.attributes), n3 = r3.type && "PART" === r3.type;
            u2.preloadHints = u2.preloadHints || [], u2.preloadHints.push(r3), r3.byterange && (r3.byterange.hasOwnProperty("offset") || (r3.byterange.offset = n3 ? y2 : 0, n3 && (y2 = r3.byterange.offset + r3.byterange.length)));
            const i3 = u2.preloadHints.length - 1;
            if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${i3} for segment #${e3}`, t3.attributes, ["TYPE", "URI"]), r3.type) for (let t4 = 0; t4 < u2.preloadHints.length - 1; t4++) {
              const n4 = u2.preloadHints[t4];
              n4.type && (n4.type === r3.type && this.trigger("warn", { message: `#EXT-X-PRELOAD-HINT #${i3} for segment #${e3} has the same TYPE ${r3.type} as preload hint #${t4}` }));
            }
          }, "rendition-report"() {
            const e3 = h(t3.attributes);
            this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(e3);
            const r3 = this.manifest.renditionReports.length - 1, n3 = ["LAST-MSN", "URI"];
            c2 && n3.push("LAST-PART"), this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #" + r3, t3.attributes, n3);
          }, "part-inf"() {
            this.manifest.partInf = h(t3.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", t3.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), p.call(this, this.manifest);
          }, daterange() {
            this.manifest.dateRanges.push(h(t3.attributes));
            const e3 = this.manifest.dateRanges.length - 1;
            this.warnOnMissingAttributes_("#EXT-X-DATERANGE #" + e3, t3.attributes, ["ID", "START-DATE"]);
            const r3 = this.manifest.dateRanges[e3];
            r3.endDate && r3.startDate && new Date(r3.endDate) < new Date(r3.startDate) && this.trigger("warn", { message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE" }),
              r3.duration && r3.duration < 0 && this.trigger("warn", { message: "EXT-X-DATERANGE DURATION must not be negative" }), r3.plannedDuration && r3.plannedDuration < 0 && this.trigger("warn",
              { message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative" });
            const n3 = !!r3.endOnNext;
            if (n3 && !r3.class && this.trigger("warn", { message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute" }), n3 && (r3.duration || r3.endDate) && this.trigger("warn",
              { message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes" }), r3.duration && r3.endDate) {
              const t4 = r3.startDate.getTime() + 1e3 * r3.duration;
              this.manifest.dateRanges[e3].endDate = new Date(t4);
            }
            if (g2[r3.id]) {
              for (const t5 in g2[r3.id]) if (r3[t5] && JSON.stringify(g2[r3.id][t5]) !== JSON.stringify(r3[t5])) {
                this.trigger("warn", { message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values" });
                break;
              }
              const t4 = this.manifest.dateRanges.findIndex((t5) => t5.id === r3.id);
              this.manifest.dateRanges[t4] = o()(this.manifest.dateRanges[t4], r3), g2[r3.id] = o()(g2[r3.id], r3), this.manifest.dateRanges.pop();
            } else g2[r3.id] = r3;
          }, "independent-segments"() {
            this.manifest.independentSegments = true;
          }, "i-frames-only"() {
            this.manifest.iFramesOnly = true, this.requiredCompatibilityversion(this.manifest.version, 4);
          }, "content-steering"() {
            this.manifest.contentSteering = h(t3.attributes), this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", t3.attributes, ["SERVER-URI"]);
          }, define() {
            this.manifest.definitions = this.manifest.definitions || {};
            const e3 = (t4, e4) => {
              t4 in this.manifest.definitions ? this.trigger("error", { message: "EXT-X-DEFINE: Duplicate name " + t4 }) : this.manifest.definitions[t4] = e4;
            };
            if ("QUERYPARAM" in t3.attributes) {
              if ("NAME" in t3.attributes || "IMPORT" in t3.attributes) return void this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
              const r3 = this.params.get(t3.attributes.QUERYPARAM);
              return r3 ? void e3(t3.attributes.QUERYPARAM, decodeURIComponent(r3)) : void this.trigger("error", { message: "EXT-X-DEFINE: No query param " + t3.attributes.QUERYPARAM });
            }
            return "NAME" in t3.attributes ? "IMPORT" in t3.attributes ? void this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" }) : "VALUE" in t3.attributes && "string" == typeof t3.attributes.VALUE ? void e3(t3.attributes.NAME,
              t3.attributes.VALUE) : void this.trigger("error", { message: "EXT-X-DEFINE: No value for " + t3.attributes.NAME }) : "IMPORT" in t3.attributes ? this.mainDefinitions[t3.attributes.IMPORT] ? void e3(t3.attributes.IMPORT,
              this.mainDefinitions[t3.attributes.IMPORT]) : void this.trigger("error", { message: `EXT-X-DEFINE: No value ${t3.attributes.IMPORT} to import, or IMPORT used on main playlist` }) : void this.trigger("error",
              { message: "EXT-X-DEFINE: No attribute" });
          }, "i-frame-playlist"() {
            this.manifest.iFramePlaylists.push({ attributes: t3.attributes, uri: t3.uri, timeline: v2 }), this.warnOnMissingAttributes_("#EXT-X-I-FRAME-STREAM-INF", t3.attributes, ["BANDWIDTH", "URI"]);
          } }[t3.tagType] || l2).call(e2);
        }, uri() {
          u2.uri = t3.uri, r2.push(u2), this.manifest.targetDuration && !("duration" in u2) && (this.trigger("warn", { message: "defaulting segment duration to the target duration" }), u2.duration = this.manifest.targetDuration), i2 && (u2.key = i2),
            u2.timeline = v2, n2 && (u2.map = n2), y2 = 0, null !== this.lastProgramDateTime && (u2.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += 1e3 * u2.duration), u2 = {};
        }, comment() {
        }, custom() {
          t3.segment ? (u2.custom = u2.custom || {}, u2.custom[t3.customType] = t3.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t3.customType] = t3.data);
        } })[t3.type].call(e2);
      }));
    }
    requiredCompatibilityversion(t2, e2) {
      (t2 < e2 || !t2) && this.trigger("warn", { message: "manifest must be at least version " + e2 });
    }
    warnOnMissingAttributes_(t2, e2, r2) {
      const n2 = [];
      r2.forEach((function(t3) {
        e2.hasOwnProperty(t3) || n2.push(t3);
      })), n2.length && this.trigger("warn", { message: `${t2} lacks required attribute(s): ${n2.join(", ")}` });
    }
    push(t2) {
      this.lineStream.push(t2);
    }
    end() {
      this.lineStream.push("\n"), this.manifest.dateRanges.length && null === this.lastProgramDateTime && this.trigger("warn", { message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag" }), this.lastProgramDateTime = null, this.trigger("end");
    }
    addParser(t2) {
      this.parseStream.addParser(t2);
    }
    addTagMapper(t2) {
      this.parseStream.addTagMapper(t2);
    }
  }
  var m = r(9), y = r(3), g = r(0);
  function b(t2, e2, r2, n2) {
    return { match: function(e3) {
      if (t2.filename && t2.filename !== e3.filename) return false;
      var r3 = e3.host;
      if (!r3 || e3.title) return false;
      if (!t2.hosts) return true;
      for (var n3 = t2.hosts.length - 1; n3 >= 0; n3--) if (r3.endsWith(t2.hosts[n3])) return true;
      return false;
    }, location: Array.isArray(e2) ? e2 : [e2], selector: r2, auxSelector: n2 };
  }
  function w(t2, e2, r2) {
    return b({ hosts: [".googlevideo.com", "docs.google.com"], filename: "videoplayback" }, t2, e2, r2);
  }
  function A(t2, e2) {
    return w(t2, "title", e2);
  }
  var _ = [b({ hosts: ["ustream.tv"] }, /^ustream.tv\/recorded\/([0-9]+)/i, "#ViewerContent h2"), b({ hosts: ["yan.vn"] }, /^yan\.vn/i, 'title, [role="complementary"] h3'), b({ hosts: ["vcdn.vn", ".googlevideo.com", "docs.google.com"] }, /^phim22\.com/i,
    "title"), b({ hosts: ["olivia24.com"] }, /^olivia24\.com/, "h1.visible-lg.visible-md"), b({}, /vipphim\.net/, "title"), b({}, /^kenh14\.vn/, "h1.title"), b({}, /vtv\.vn/, "h1.news-title,h1.video-title"), b({}, /dantri\.com\.vn/, "#video-title"),
    b({ hosts: [".memeclip.com"] }, /nguoiduatin\.vn/, "title"), w(/^phim3s.net\/phim/i, "h2.title a", ".serverlist .server li a.active"), w(/^thegioiphim\.eu\/movie-episode-full\.php/i, ".category-main"), w(/^hayghe\.com\/xem-phim/i, "#tit_player"),
    w(/^phim14\.net\/xem-phim/i, ".blocktitle h1 a", ".server_item .active a"), w(/^phimnhanh\.net\/movie/i, "h1 > a", ".epicurrent"), w(/^xemnghe\.com\/phim/i, "h1"), w(/^phimhd\.vn\/xem-phim/i, "h1.title", "a.playing"), A(/^phimmoi\.net\/phim/i,
    ".episode-link.active"), A(/^phimtv\.vn\/xem-phim/i, "a.playing"), A(/^sieukhungz\.net/i, "h1"), b({ hosts: ["203.162.121.25:88", "110.164.180.35", "130.211.247.87"] }, /^m-viet\.com/i, "h1"), b({ hosts: ["memeclip.com"] }, /^meme\.vn/i, "h1"),
    b({ hosts: ["memeclip.com"] }, /^doisongphapluat\.com/, "title"), b({}, /^keeng\.vn\/video\//, "title"), b({}, /^vlxx\.tv\/video/, "title"), b({}, /^keeng\.vn\/video/, ".info-keeng-player"), b({}, /^kickstarter\.com/, "title"), b({}, /^tv\.tuoitre\.vn/,
    ".info h1"), b({}, /video\.vietnamnet\.vn/, "h3.video-main-home-title"), b({}, /thethao247\.vn/, ".thumbblock > p"), b({}, /video\.vnexpress\.net/, "h1.title"), b({}, /video\.kenh14\.vn/, ".video-info_title"), b({ hosts: ["vtvgo.vn"] }, /vtvgo\.vn/,
    ".container .select_program.active h3, .box-vtv-live .select_program.active div:nth-child(2)"), A(/phim/i)], E = /^((xem )?phim)|(video:)/i, S = /(-? picasaweb( \d+)?)|(\| server .*)?$/i, O = /^https?:\/\/(www\.)?/i;
  function x() {
    var t2, e2, r2, n2, i2, o2, a2 = location.href;
    if (!O.test(a2)) return null;
    a2 = a2.replace(O, "");
    for (var s2 = 0; s2 < _.length; ++s2) if (o2 = _[s2], g.isMatches(a2, o2.location)) {
      try {
        var u2 = g.queryAll(o2.selector || "null");
        if (u2.length ? i2 = (null === (t2 = u2.shift()) || void 0 === t2 ? void 0 : t2.textContent) || "" : (i2 = (null === (e2 = g.query("title")) || void 0 === e2 ? void 0 : e2.textContent) || "", o2.selector = "title"),
          "title" === o2.selector && (i2 = i2.replace(E, "").replace(S, "")), o2.auxSelector) {
          var c2 = (null === (n2 = null === (r2 = g.query(o2.auxSelector)) || void 0 === r2 ? void 0 : r2.textContent) || void 0 === n2 ? void 0 : n2.trim()) || "";
          c2 && (i2 += " (" + c2 + ")");
        }
        i2 = i2.replace(/\s+/g, " ").trim();
      } catch (t3) {
        console.log(t3);
      }
      if (i2) return { title: i2, test: o2.match };
    }
    return a2.match(/^fptplay\.net/i) ? { title: null, test: function(t3) {
      var e3 = t3.pathname.split("/"), r3 = e3.length - 1, n3 = e3[r3];
      return "chunklist.m3u8" === n3 && r3 > 0 && (n3 = e3[r3 - 1]), n3 && (this.title = n3), true;
    } } : null;
  }
  var k = r(80), M = r(1);
  function T() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t2, e2, r2 = "function" == typeof Symbol ? Symbol : {}, n2 = r2.iterator || "@@iterator", i2 = r2.toStringTag || "@@toStringTag";
    function o2(r3, n3, i3, o3) {
      var u3 = n3 && n3.prototype instanceof s2 ? n3 : s2, c3 = Object.create(u3.prototype);
      return I(c3, "_invoke", (function(r4, n4, i4) {
        var o4, s3, u4, c4 = 0, l3 = i4 || [], f3 = false, d3 = { p: 0, n: 0, v: t2, a: h2, f: h2.bind(t2, 4), d: function(e3, r5) {
          return o4 = e3, s3 = 0, u4 = t2, d3.n = r5, a2;
        } };
        function h2(r5, n5) {
          for (s3 = r5, u4 = n5, e2 = 0; !f3 && c4 && !i5 && e2 < l3.length; e2++) {
            var i5, o5 = l3[e2], h3 = d3.p, p2 = o5[2];
            r5 > 3 ? (i5 = p2 === n5) && (u4 = o5[(s3 = o5[4]) ? 5 : (s3 = 3, 3)], o5[4] = o5[5] = t2) : o5[0] <= h3 && ((i5 = r5 < 2 && h3 < o5[1]) ? (s3 = 0, d3.v = n5, d3.n = o5[1]) : h3 < p2 && (i5 = r5 < 3 || o5[0] > n5 || n5 > p2) && (o5[4] = r5, o5[5] = n5, d3.n = p2, s3 = 0));
          }
          if (i5 || r5 > 1) return a2;
          throw f3 = true, n5;
        }
        return function(i5, l4, p2) {
          if (c4 > 1) throw TypeError("Generator is already running");
          for (f3 && 1 === l4 && h2(l4, p2), s3 = l4, u4 = p2; (e2 = s3 < 2 ? t2 : u4) || !f3; ) {
            o4 || (s3 ? s3 < 3 ? (s3 > 1 && (d3.n = -1), h2(s3, u4)) : d3.n = u4 : d3.v = u4);
            try {
              if (c4 = 2, o4) {
                if (s3 || (i5 = "next"), e2 = o4[i5]) {
                  if (!(e2 = e2.call(o4, u4))) throw TypeError("iterator result is not an object");
                  if (!e2.done) return e2;
                  u4 = e2.value, s3 < 2 && (s3 = 0);
                } else 1 === s3 && (e2 = o4.return) && e2.call(o4), s3 < 2 && (u4 = TypeError("The iterator does not provide a '" + i5 + "' method"), s3 = 1);
                o4 = t2;
              } else if ((e2 = (f3 = d3.n < 0) ? u4 : r4.call(n4, d3)) !== a2) break;
            } catch (e3) {
              o4 = t2, s3 = 1, u4 = e3;
            } finally {
              c4 = 1;
            }
          }
          return { value: e2, done: f3 };
        };
      })(r3, i3, o3), true), c3;
    }
    var a2 = {};
    function s2() {
    }
    function u2() {
    }
    function c2() {
    }
    e2 = Object.getPrototypeOf;
    var l2 = [][n2] ? e2(e2([][n2]())) : (I(e2 = {}, n2, (function() {
      return this;
    })), e2), f2 = c2.prototype = s2.prototype = Object.create(l2);
    function d2(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, c2) : (t3.__proto__ = c2, I(t3, i2, "GeneratorFunction")), t3.prototype = Object.create(f2), t3;
    }
    return u2.prototype = c2, I(f2, "constructor", c2), I(c2, "constructor", u2), u2.displayName = "GeneratorFunction", I(c2, i2, "GeneratorFunction"), I(f2), I(f2, i2, "Generator"), I(f2, n2, (function() {
      return this;
    })), I(f2, "toString", (function() {
      return "[object Generator]";
    })), (T = function() {
      return { w: o2, m: d2 };
    })();
  }
  function I(t2, e2, r2, n2) {
    var i2 = Object.defineProperty;
    try {
      i2({}, "", {});
    } catch (t3) {
      i2 = 0;
    }
    (I = function(t3, e3, r3, n3) {
      function o2(e4, r4) {
        I(t3, e4, (function(t4) {
          return this._invoke(e4, r4, t4);
        }));
      }
      e3 ? i2 ? i2(t3, e3, { value: r3, enumerable: !n3, configurable: !n3, writable: !n3 }) : t3[e3] = r3 : (o2("next", 0), o2("throw", 1), o2("return", 2));
    })(t2, e2, r2, n2);
  }
  var j = function(t2, e2, r2, n2) {
    return new (r2 || (r2 = Promise))((function(i2, o2) {
      function a2(t3) {
        try {
          u2(n2.next(t3));
        } catch (t4) {
          o2(t4);
        }
      }
      function s2(t3) {
        try {
          u2(n2.throw(t3));
        } catch (t4) {
          o2(t4);
        }
      }
      function u2(t3) {
        var e3;
        t3.done ? i2(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2((function(t4) {
          t4(e3);
        }))).then(a2, s2);
      }
      u2((n2 = n2.apply(t2, e2 || [])).next());
    }));
  }, C = 5e5, B = 1e6, U = 2e6, P = 4e6;
  function N(t2, e2) {
    e2 || (e2 = "application/octet-stream"), window.URL = window.URL || window.webkitURL;
    var r2 = t2;
    if ("application/octet-stream" === e2) {
      var n2 = t2;
      r2 = new Uint8Array(n2.length / 2);
      for (var i2 = 0; i2 < r2.length; i2++) r2[i2] = parseInt(n2.substr(2 * i2, 2), 16);
    }
    return r2;
  }
  function D(t2) {
    return t2 ? Object.keys(t2).map((e2) => Object.keys(t2[e2]).map((r2) => Object.assign(Object.assign({}, t2[e2][r2]), { id: e2, name: r2 }))).flat() : [];
  }
  function R(t2, e2) {
    var r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n2 = new v();
    n2.push(t2), n2.end();
    var i2 = n2.manifest.playlists;
    return i2 || (i2 = [{ attributes: { BANDWIDTH: 0, CODECS: "" }, timeline: 0, uri: null == e2 ? void 0 : e2.url }]), i2 && i2.length ? (r2 && (i2 = i2.sort((t3, e3) => t3.attributes.BANDWIDTH && e3.attributes.BANDWIDTH ? e3.attributes.BANDWIDTH - t3.attributes.BANDWIDTH : 0)), i2) : [];
  }
  function L(t2, e2, r2, n2) {
    var i2 = t2.split("\n").map((t3) => {
      var n3;
      if (t3.trim().startsWith("#") && t3.toLowerCase().includes("uri")) {
        var i3 = (null === (n3 = t3.match(/URI="([^"]+)"/)) || void 0 === n3 ? void 0 : n3[1]) || "", o2 = Object(y.a)(new URL(e2), i3, true);
        return r2 && (o2 = o2 + (o2.includes("?") ? "&" : "?") + r2), t3.replace(/URI="([^"]+)"/, `URI="${o2}"`);
      }
      if (t3.trim().startsWith("#") || !t3.trim()) return t3;
      var a2 = Object(y.a)(new URL(e2), t3, true);
      return r2 ? a2 + (a2.includes("?") ? "&" : "?") + r2 : a2;
    }).join("\n").trim();
    return n2 ? n2(i2) : i2.split("#EXT-X-DISCONTINUITY").filter((t3) => !((t3.match(/^\s*#ext-x-key:method=none/i) || t3.includes("/adjump/")) && !t3.includes("#EXTM3U"))).join("\n");
  }
  function q(t2, e2, r2) {
    var n2, i2;
    return j(this, void 0, void 0, T().m((function o2() {
      var a2, s2, u2, c2, l2, f2, d2;
      return T().w((function(o3) {
        for (; ; ) switch (o3.p = o3.n) {
          case 0:
            if (t2.startsWith("#EXTM3U") && (a2 = t2), a2) {
              o3.n = 16;
              break;
            }
            return o3.p = 1, o3.n = 2, fetch(t2).then((t3) => t3.text());
          case 2:
            if ((a2 = o3.v).includes("#EXTM3U")) {
              o3.n = 3;
              break;
            }
            throw new Error("");
          case 3:
            o3.n = 16;
            break;
          case 4:
            return o3.p = 4, o3.v, o3.p = 5, o3.n = 6, Object(g.get)(t2, {});
          case 6:
            if (u2 = n2 = o3.v, s2 = null === u2) {
              o3.n = 7;
              break;
            }
            s2 = void 0 === n2;
          case 7:
            if (!s2) {
              o3.n = 8;
              break;
            }
            c2 = void 0, o3.n = 9;
            break;
          case 8:
            c2 = n2.responseText;
          case 9:
            if ((a2 = c2).includes("#EXTM3U")) {
              o3.n = 10;
              break;
            }
            throw new Error("");
          case 10:
            o3.n = 16;
            break;
          case 11:
            return o3.p = 11, o3.v, o3.n = 12, Object(g.sendMessage)({ type: M.b.GET_URL, params: { url: t2 } });
          case 12:
            if (f2 = i2 = o3.v, l2 = null === f2) {
              o3.n = 13;
              break;
            }
            l2 = void 0 === i2;
          case 13:
            if (!l2) {
              o3.n = 14;
              break;
            }
            d2 = void 0, o3.n = 15;
            break;
          case 14:
            d2 = i2.url;
          case 15:
            a2 = d2;
          case 16:
            if (!a2) {
              o3.n = 17;
              break;
            }
            return o3.a(2, L(a2, t2, e2, r2));
          case 17:
            return o3.a(2);
        }
      }), o2, null, [[5, 11], [1, 4]]);
    })));
  }
  function F(t2, e2) {
    var r2, n2;
    return j(this, void 0, void 0, T().m((function i2() {
      var o2, a2, s2, u2, c2, l2, f2, d2, h2, p2, b2, w2, A2, _2, E2, S2, O2, M2, I2, F2;
      return T().w((function(i3) {
        for (; ; ) switch (i3.p = i3.n) {
          case 0:
            return (o2 = new v()).push(t2), o2.end(),
              t2.includes("#EXT-X-KEY") && location.href.includes("24h.com.vn") && ((u2 = /"hlsPrefix":\s*"(.+?)"(,|;)*\n*/.exec(Object(g.queryAll)("script").filter((t3) => t3.innerText && t3.innerText.includes("videoAds1Conf"))[0].innerText)) && (s2 = u2[1]),
              c2 = new RegExp((s2 || "keybfa4658f7ae831205709fd307698c661") + "([\\s\\S]+)\\.key"), (l2 = c2.exec(t2)) && (f2 = l2[1], d2 = N(f2), a2 = btoa(String.fromCharCode.apply(null, d2)))), h2 = R(t2, e2, true),
              p2 = (null == h2 ? void 0 : h2.map((t3) => j(this, void 0, void 0, T().m((function r3() {
              var n3, i4, s3, u3, c3, l3, f3, d3, h3, p3, v2, b3, w3, A3, _3, E3, S3, O3, M3, I3, j2, N2, D2;
              return T().w((function(r4) {
                for (; ; ) switch (r4.n) {
                  case 0:
                    return b3 = Object(y.a)(e2 ? new URL(e2.url) : void 0, t3.uri, true), w3 = Object(y.f)(b3), location.href.includes("24h.com.vn") && (w3.dashVideoId = a2),
                      (null === (n3 = w3.host) || void 0 === n3 ? void 0 : n3.includes("vietsubtv.org")) && (t3.uri = "https://player7.vietsubtv.org/jwplayer7/redirect.php?url=" + decodeURIComponent(t3.uri).split("=")[1],
                      (w3 = Object(y.f)(t3.uri)).ext = "m3u8", w3.exts = ["m3u8"]), w3.type = "video", t3.attributes.CODECS && 1 == (A3 = t3.attributes.CODECS.split(",")).length && /^(mp4a)/i.test(A3[0]) && (w3.type = "audio"),
                      t3.attributes && t3.attributes.RESOLUTION && (_3 = t3.attributes.RESOLUTION.height, (E3 = m.b.getQualityNameByResolution(_3)) && (w3.quality = E3), w3.resolution = _3 ? _3 + "p" : ""),
                      w3.quality || (t3.attributes.BANDWIDTH ? w3.quality = (T2 = t3.attributes.BANDWIDTH) < C ? "Low" : T2 < B ? "Medium" : T2 < U ? "Standard" : T2 < P ? "High" : "Highest" : w3.quality = "Standard"),
                      (null == e2 ? void 0 : e2.dashVideoId) && (w3.dashVideoId = e2.dashVideoId), e2 && (e2.referrer && (w3.referrer = e2.referrer),
                      w3.url.match(/https:\/\/master1\.ttstream\.online[\s\S]*\.m3u8/g) && (w3.referrer = "https://ttstream.online/"), w3.url.match(/https:\/\/[\s\S]*\.cdnx\.live[\s\S]*\.m3u8/g) && (w3.referrer = "https://cdnx.live/"),
                      w3.url.match(/https:\/\/[\s\S]*\.phim18hd\.net[\s\S]*\.m3u8/g) && (w3.referrer = "https://phim18hd.net/"), "biphimz.co" === location.host && (w3.referrer = null === (i4 = Object(g.query)("iframe")) || void 0 === i4 ? void 0 : i4.src),
                      location.host.match(/vlxyz\.net/) && (w3.referrer = location.href), location.host.match(/xhvictory\.com/) && !t3.uri.includes("//") && (w3.url = `https://${w3.host}${t3.uri}`, w3.pathname = t3.uri),
                      /master\.(html|php)/i.test(w3.url) && (w3.ext = "m3u8", w3.exts = ["m3u8"]), e2.skipReferrer && (delete w3.referrer, w3.skipReferrer = true)),
                      (null === (s3 = w3.host) || void 0 === s3 ? void 0 : s3.includes("hls.streamphim.xyz")) && (w3.ext = "m3u8", w3.exts = ["m3u8"]), (null === (u3 = w3.host) || void 0 === u3 ? void 0 : u3.includes("sanstream.xyz")) && (w3.ext = "m3u8",
                      w3.exts = ["m3u8"]), location.host.includes("newsiqra.com") && (w3.ext = null == e2 ? void 0 : e2.ext, w3.exts = e2 ? [e2.ext] : void 0, w3.referrer = w3.url), Object(g.isValidData)(w3) || (w3.ext = "m3u8", w3.exts = ["m3u8"]),
                      e2 && e2.fixName ? w3.filename = e2.fixName : location.href.includes("vnexpress.net") && "Shorts" == (null === (l3 = null === (c3 = document.querySelector(".open")) || void 0 === c3 ? void 0 : c3.querySelector("span")) || void 0 === l3 ? void 0 : l3.textContent) || ((S3 = x()) && S3.title ? w3.title = Object(k.a)(S3.title,
                      document.title) : w3.title = document.title.trim(), (null === (f3 = w3.title) || void 0 === f3 ? void 0 : f3.trim()) && (w3.filename = w3.title)),
                      (null === (d3 = w3.filename) || void 0 === d3 ? void 0 : d3.trim()) || (w3.filename = "Noname"), w3._hls = true, r4.n = 1, q(b3);
                  case 1:
                    if (w3.play_list = r4.v, (O3 = null === (p3 = null === (h3 = o2.manifest) || void 0 === h3 ? void 0 : h3.mediaGroups) || void 0 === p3 ? void 0 : p3.AUDIO) && Object.keys(O3).length > 0 && (I3 = Object.keys(O3),
                      M3 = O3[(null === (v2 = t3.attributes) || void 0 === v2 ? void 0 : v2.AUDIO) || I3[0] || "audio-0"]), !M3) {
                      r4.n = 3;
                      break;
                    }
                    return j2 = M3[Object.keys(M3)[Object.keys(M3).length - 1]].uri, M3.English && (j2 = M3.English.uri), N2 = Object(y.a)(e2 ? new URL(e2.url) : void 0, j2, true), w3.url = { audioUrl: N2, videoUrl: w3.url }, w3._hls = true, r4.n = 2, q(N2);
                  case 2:
                    D2 = r4.v, w3.extraData = [{ name: "video_playlist", value: w3.play_list || "" }, { name: "audio_playlist", value: D2 || "" }], delete w3.play_list;
                  case 3:
                    return "string" == typeof w3.url && (w3.url = "https://www.google.com"), r4.a(2, w3);
                }
                var T2;
              }), r3);
            }))))) || [], i3.n = 1, Promise.all(p2);
          case 1:
            return b2 = i3.v, i3.p = 2, w2 = D(null === (r2 = o2.manifest.mediaGroups) || void 0 === r2 ? void 0 : r2.AUDIO).map((t3) => j(this, void 0, void 0, T().m((function r3() {
              var n3, i4, o3;
              return T().w((function(r4) {
                for (; ; ) switch (r4.p = r4.n) {
                  case 0:
                    return n3 = Object(y.a)(e2 ? new URL(e2.url) : void 0, t3.uri, true), i4 = Object.assign(Object.assign({}, Object(y.f)(n3)), { filename: b2[0].filename, type: "audio" }), r4.p = 1, r4.n = 2, q(n3);
                  case 2:
                    i4.play_list = r4.v, i4.url = "https://www.google.com", r4.n = 4;
                    break;
                  case 3:
                    r4.p = 3, o3 = r4.v, console.log(o3);
                  case 4:
                    return r4.a(2, i4);
                }
              }), r3, null, [[1, 3]]);
            })))) || [], A2 = D(null === (n2 = o2.manifest.mediaGroups) || void 0 === n2 ? void 0 : n2.SUBTITLES).map((t3) => j(this, void 0, void 0, T().m((function r3() {
              var n3, i4, o3, a3, s3;
              return T().w((function(r4) {
                for (; ; ) switch (r4.p = r4.n) {
                  case 0:
                    return n3 = Object(y.a)(e2 ? new URL(e2.url) : void 0, t3.uri, true), i4 = Object(y.f)(n3), o3 = Object.assign(Object.assign({}, i4), { filename: b2[0].filename, quality: t3.name, type: "subtitles" }), "m3u8" == i4.ext && (o3._hls = true),
                      "mpd" == i4.ext && (o3._isDashMPD = true), ["srt", "vtt"].includes(i4.ext || "") || (i4.ext = "srt", i4.exts = ["srt"]), r4.p = 1, r4.n = 2, fetch(n3).then((t4) => t4.text());
                  case 2:
                    a3 = r4.v, o3.play_list = a3, r4.n = 4;
                    break;
                  case 3:
                    r4.p = 3, s3 = r4.v, console.log(s3);
                  case 4:
                    return r4.a(2, o3);
                }
              }), r3, null, [[1, 3]]);
            })))) || [], i3.n = 3, Promise.all(w2);
          case 3:
            return _2 = i3.v, i3.n = 4, Promise.all(A2);
          case 4:
            E2 = i3.v, b2.push(..._2), b2.push(...E2), i3.n = 6;
            break;
          case 5:
            i3.p = 5, F2 = i3.v, console.warn(F2);
          case 6:
            if (1 == b2.length && "https://www.google.com" === b2[0].url && !b2[0].play_list && t2.startsWith("#EXTM3U") && (b2[0].play_list = L(t2, null == e2 ? void 0 : e2.url)), 1 != b2.length || b2[0].url != (null == e2 ? void 0 : e2.url) || !(null == t2 ? void 0 : t2.match(/^\s*#EXTM3U/i))) {
              i3.n = 8;
              break;
            }
            if (b2[0].play_list = t2, !/cdn\.linksht\./i.test(e2.url)) {
              i3.n = 7;
              break;
            }
            return i3.a(2, b2);
          case 7:
            try {
              for (S2 = t2.split("\n"), O2 = "", M2 = 1, I2 = S2.length; M2 < I2; M2++) S2[M2].match(/^#extinf:/i) && (O2 = S2[M2 + 1]);
              O2.match(/^([a-z]+:)?\/\//i) && !e2.notReplaceUrlWithGoogle && (b2[0].originalUrl = b2[0].url, b2[0].url = "https://google.com");
            } catch (t3) {
            }
            e2.skipUrlToCombineHls && !e2.notReplaceUrlWithGoogle && (b2[0].originalUrl = b2[0].url, b2[0].url = "https://google.com");
          case 8:
            return i3.a(2, b2);
        }
      }), i2, this, [[2, 5]]);
    })));
  }
  function G(t2) {
    return t2.some((t3) => "string" == typeof t3.url && t3.url.match(/m3u8?/i));
  }
  function Q(t2, e2) {
    return t2.find((r2, n2) => !("string" != typeof r2.url || !r2.url.match(/m3u8?/i)) && (t2[n2] = e2, true));
  }
  function z(t2, e2) {
    var r2 = new v();
    r2.push(t2), r2.end();
    var n2 = r2.manifest.segments;
    return e2 && (n2 = n2.map((t3) => (t3.uri.startsWith("http") || (t3.uri = new URL(t3.uri, e2).href), Object.assign({}, t3)))), n2;
  }
}
