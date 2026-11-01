// Module 541 [widget] - Savior Widget Manager
export default function(module, exports, r) {
  "use strict";
  r.d(exports, "a", () => SaviorWidgetController);
  r.d(exports, "b", () => initSaviorWidget);
  r(743), r(759);
  var domHelper = r(12), coreUtils = r(0), urlMatcher = r(33), lodashPkg = r(39), lodash = r.n(lodashPkg), settingsManager = r(7), overlayCssPkg = r(138), overlayCss = r.n(overlayCssPkg), urlUtils = r(3), saviorConstants = r(1), filenameSanitizer = r(80), qualityHelper = r(9), eventBus = r(6), siteDataExtractor = r(92), detectorHelper = r(14);
  function g(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return b(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(b(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,b(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,b(f,"constructor",c),b(c,"constructor",u),u.displayName="GeneratorFunction",b(c,i,"GeneratorFunction"),b(f),b(f,i,"Generator"),b(f,n,(function(){return this})),b(f,"toString",(function(){return"[object Generator]"})),(g=function(){return{w:o,m:d}})()}
  function b(t, e, r2, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (t2) {
      i = 0;
    }
    (b = function(t2, e2, r3, n2) {
      function o(e3, r4) {
        b(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? i ? i(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (o("next", 0), o("throw", 1), o("return", 2));
    })(t, e, r2, n);
  }
  function w(target) {
    var it = target && target[Symbol.iterator] ? target[Symbol.iterator]() : Array.from(target || [])[Symbol.iterator]();
    return { s: function() {
    }, n: function() {
      return it.next();
    }, e: function(err) {
      throw err;
    }, f: function() {
    } };
  }
  function A(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r2 = 0, n = Array(e); r2 < e; r2++) n[r2] = t[r2];
    return n;
  }
  var _ = function(t, e, r2, n) {
    return new (r2 || (r2 = Promise))((function(i, o) {
      function a(t2) {
        try {
          u(n.next(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function s(t2) {
        try {
          u(n.throw(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function u(t2) {
        var e2;
        t2.done ? i(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    }));
  };
  var mediaNameCache = {}, MediaHelper = { makeParams: function(t) {
    var e = {};
    if (t.params) for (var r2 in t.params) e[r2] = t.params[r2];
    return e;
  }, makeUrl: function(t) {
    return Object(saviorConstants.B)(t.ext) || "mpd" === t.ext ? t.url : null;
  }, makeMethod: function(t) {
    return t.requestMethod || "GET";
  }, makeHeaders: function(t) {
    return document.location.host.includes("phim7z.tv") && t.url.includes("proxy.php") ? { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0", Accept: "application/json, text/javascript, */*; q=0.01", "Accept-Language": "en-US,en;q=0.5", "X-Requested-With": "XMLHttpRequest" } : t.headers;
  }, makeCredentials: function(t) {
    return t.includeCredentials;
  }, parse: function(t, e) {
    var r2, n, o, a;
    return _(this, void 0, void 0, g().m((function lodash2() {
      var u, c, l, h, b2, A2, _2, S, O, x, k;
      return g().w((function(s) {
        for (; ; ) switch (s.p = s.n) {
          case 0:
            if (u = t, "string" == typeof t && (u = Object(urlUtils.f)(t)), (null === (n = null === (r2 = u.filename) || void 0 === r2 ? void 0 : r2.trim()) || void 0 === n ? void 0 : n.length) || (u.filename = "noname"), mediaNameCache[u.url] && (u.fixName = mediaNameCache[u.url]), !(c = Object(siteDataExtractor.getSiteData)(location.host, u.cacheUrl)) || !c.parse) {
              s.n = 10;
              break;
            }
            return l = (null === (a = null === (o = c.parse.sources) || void 0 === o ? void 0 : o.find((t2) => t2.checkSource(u))) || void 0 === a ? void 0 : a.parse) || c.parse.default, s.n = 1, null == l ? void 0 : l({ media: u, response: e });
          case 1:
            if (!(h = s.v)) {
              s.n = 10;
              break;
            }
            b2 = w(h), s.p = 2, b2.s();
          case 3:
            if ((A2 = b2.n()).done) {
              s.n = 6;
              break;
            }
            if ("image" != (_2 = A2.value).type) {
              s.n = 5;
              break;
            }
            return s.n = 4, Object(coreUtils.createImageInfo)(_2.url);
          case 4:
            _2.imageInfo = s.v;
          case 5:
            s.n = 3;
            break;
          case 6:
            s.n = 8;
            break;
          case 7:
            s.p = 7, x = s.v, b2.e(x);
          case 8:
            return s.p = 8, b2.f(), s.f(8);
          case 9:
            return s.a(2, h);
          case 10:
            if ("object" != typeof (S = u.url)) {
              s.n = 11;
              break;
            }
            return s.a(2, [u]);
          case 11:
            if (S && S.includes("videoplayback") && S.includes("mp4") && (u.ext = "mp4", u.skipReferrer = true), "mpd" != u.ext) {
              s.n = 16;
              break;
            }
            if (O = u.fixName || u.filename || document.title, s.p = 12, !u.realRes) {
              s.n = 13;
              break;
            }
            return s.a(2, Object(detectorHelper.b)(u.realRes, O, u.host, u.url));
          case 13:
            if (!e) {
              s.n = 14;
              break;
            }
            return s.a(2, Object(detectorHelper.b)(e, O, u.host, u.url));
          case 14:
            s.n = 16;
            break;
          case 15:
            s.p = 15, k = s.v, Object(coreUtils.devLog)(k);
          case 16:
            if (!Object(saviorConstants.B)(u.ext) && !Object(coreUtils.isSpecialUrls)(u.url)) {
              s.n = 18;
              break;
            }
            if (!u.realRes) {
              s.n = 17;
              break;
            }
            return s.a(2, Object(eventBus.e)(u.realRes, u));
          case 17:
            if (!e) {
              s.n = 18;
              break;
            }
            return s.a(2, Object(eventBus.e)(e, u));
          case 18:
            return u.quality || (u.quality = qualityHelper.b.DEFAULT_QUALITY_TYPE), "number" == typeof u.size && (u.size = Object(coreUtils.beautifyFileSize)(u.size)), s.a(2, [u]);
        }
      }), lodash2, null, [[12, 15], [2, 7, 8, 9]]);
    })));
  }, getPlaylist(t) {
    return Promise.all([this.makeMethod(t), this.makeUrl(t), this.makeParams(t), this.makeHeaders(t), this.makeCredentials(t)]).then((e) => e[1] ? Object(coreUtils.send)(e[0], e[1], e[2], e[3], e[4], t.paramType) : Promise.reject()).then((e) => {
      e.redirected && !t.skipRedirect && (t.url = e.url);
      var r2 = this.parse(t, e.responseText);
      if (!r2) return Promise.reject();
      var n = r2;
      return Array.isArray(r2) || (n = [r2]), Promise.all(n);
    }).catch(() => {
      try {
        return Promise.resolve(this.parse(t));
      } catch (t2) {
        return [];
      }
    });
  } };
  var LazyMediaTracker = { _ids: [], getMediaObjectsFromNode(t) {
    var e, r2, n, o, a, s, u;
    return _(this, void 0, void 0, g().m((function overlayCssPkg2() {
      var l, d, v, y, b2, w2, A2, _2, E, S, O, x, k;
      return g().w((function(c) {
        for (; ; ) switch (c.n) {
          case 0:
            return l = location.host, null == (d = t.src || t.href || (null === (e = t.querySelector("source")) || void 0 === e ? void 0 : e.src)) || d.replace(/^\/+/, ""), (null == d ? void 0 : d.includes("blob:")) && (d = (null === (r2 = t.querySelector("source")) || void 0 === r2 ? void 0 : r2.src) || d), v = Object(siteDataExtractor.getSiteData)(l, d), c.n = 1, null === (n = null == v ? void 0 : v.beforeGetUrl) || void 0 === n ? void 0 : n.call(v);
          case 1:
            return y = t.hasAttribute("savior-scanned-img"), b2 = y ? null === (o = null == v ? void 0 : v.imageUrls) || void 0 === o ? void 0 : o.find((e2) => e2.checkUrl({ url: d || "", node: t })) : (null === (a = null == v ? void 0 : v.urls) || void 0 === a ? void 0 : a.find((e2) => e2.checkUrl({ url: d || "", node: t }))) || (null == v ? void 0 : v.default), c.n = 2, null === (s = null == b2 ? void 0 : b2.getUrl) || void 0 === s ? void 0 : s.call(b2, { url: d, node: t, ids: this._ids });
          case 2:
            if (w2 = c.v, !Array.isArray(w2)) {
              c.n = 3;
              break;
            }
            return c.a(2, w2);
          case 3:
            if (A2 = w2 || d) {
              c.n = 4;
              break;
            }
            return c.a(2);
          case 4:
            if (!y) {
              c.n = 6;
              break;
            }
            return c.n = 5, Object(urlUtils.g)({ url: A2, node: t });
          case 5:
            return _2 = c.v, c.a(2, [_2]);
          case 6:
            return E = Object(urlUtils.f)(A2), S = Object(urlUtils.e)(A2), c.n = 7, null === (u = null == b2 ? void 0 : b2.mediaObjectChange) || void 0 === u ? void 0 : u.call(b2, { mediaObject: E, node: t });
          case 7:
            if (k = c.v) {
              c.n = 8;
              break;
            }
            k = S;
          case 8:
            if (S = k, E.thumbnail = Object(coreUtils.getVideoPoster)(t), E.type = S, Object(coreUtils.isValidData)(E)) {
              c.n = 9;
              break;
            }
            if (!this._ids.length && typeof window !== "undefined" && window.__saviorSniffedMedia && window.__saviorSniffedMedia.length) {
              try {
                this.processRequest(window.__saviorSniffedMedia);
              } catch (_3) {
              }
            }
            for (O = this._ids.length - 1; O >= 0; O--) x = this._ids[O], (null == v ? void 0 : v.idsProcess) && v.idsProcess({ defaultIds: this._ids, id: x, index: O });
            return c.a(2, this._ids);
          case 9:
            return E.filename = Object(filenameSanitizer.a)(E.filename), E.quality = qualityHelper.b.DEFAULT_QUALITY_TYPE, c.a(2, [E]);
        }
      }), overlayCssPkg2, this);
    })));
  }, getDownloadsByMediaObjects: (t) => Promise.all(t.map((t2) => {
    var e = "object" != typeof t2.url ? `${location.href}_${t2.originalUrl || t2.url}` : `${location.href}_${t2.url.videoUrl}`;
    return t2.identifier && (e += "_" + t2.identifier), t2.extraData ? t2.extraData.some((t3) => "tab_url" == t3.name) || t2.extraData.push({ name: "tab_url", value: location.href }) : t2.extraData = [{ name: "tab_url", value: location.href }], new Promise((t3, r2) => {
      var n = Object(coreUtils.generateId)();
      function o(e2, i) {
        e2 === n && (EE.off("media-provider.cache.hit", o), EE.off("media-provider.cache.miss", o), i ? t3(i) : r2());
      }
      EE.emit("media-provider.cache.get", n, e), EE.on("media-provider.cache.hit", o), EE.on("media-provider.cache.miss", o);
    }).catch(() => MediaHelper.getPlaylist(t2).then((r2) => {
      var n, o;
      return (null === (o = null === (n = Object(siteDataExtractor.getSiteData)(location.host)) || void 0 === n ? void 0 : n.shouldNotCacheParsedMedia) || void 0 === o ? void 0 : o.call(n, { id: t2, medias: r2 })) || EE.emit("media-provider.cache.put", Object(coreUtils.generateId)(), e, r2), r2;
    }).catch(() => (t2 && Object(coreUtils.logDownloadError)({ url: JSON.stringify(t2.url), referrer: document.referrer || JSON.stringify(t2.referrer) || location.host || t2.url, error: "Error: Cannot get media size or media url is wrong" }), [])));
  })).then((t2) => Object(coreUtils.flatten)(t2)).then((e) => t.some((t2) => t2.noAudio) ? e : e.concat(Object(coreUtils.createMP3Resources)(e))), processRequest(t) {
    var e, r2 = this, n = false, i = w(t);
    try {
      var o = function() {
        var t2 = e.value, i2 = Object(siteDataExtractor.getSiteData)(location.host);
        return (null == i2 ? void 0 : i2.processRequestIds) && i2.processRequestIds(t2) ? (n = true, 0) : Object(eventBus.f)(r2._ids) ? ((function(t3, e2) {
          var r3, n2;
          if (t3 && t3.host && t3.host.match(/scontent-sin\d+-\d+-xx\.fbcdn\.cloud/) && "m3u8" == t3.ext) return true;
          if (t3 && t3.host && t3.host.includes("vnecdn.net") && "m3u8" === t3.ext && "master" === t3.filename) return true;
          if (t3 && (null === (r3 = t3.host) || void 0 === r3 ? void 0 : r3.match(/s1.tuyensinh247.com\:\d+/)) && "m3u8" === t3.ext && "playlist" === t3.filename) return true;
          if (t3 && (null === (n2 = t3.host) || void 0 === n2 ? void 0 : n2.match(/s1.truyentot.com/)) && "m3u8" === t3.ext) return true;
          if (t3 && t3.host && t3.host.match(/vod\d+-cdn\.fptplay\.net/) && "m3u8" === t3.ext) return true;
          if (t3.url.match(/\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i)) return true;
          if (t3 && t3.host && t3.host.match(/online\.tiengtrung\.vn/) && "m3u8" === t3.ext) return true;
          if (["motchilll.tv", "phim.vkool8.net", "motchill20"].some((t4) => location.href.includes(t4))) {
            var i3 = e2 && e2.find((t4) => t4 && t4.url && t4.url.includes("m3u8"));
            if (i3 && i3.pathname && t3 && t3.pathname && t3.pathname.length > i3.pathname.length) return true;
          }
          return false;
        })(t2, r2._ids) && Object(eventBus.g)(r2._ids, t2), n = true, 0) : r2._ids.some((e2) => e2.url.includes(t2.url)) ? 0 : (n = true, t2.filename = Object(filenameSanitizer.a)(t2.filename, document.title), void r2._ids.push(t2));
      };
      for (i.s(); !(e = i.n()).done; ) o();
    } catch (t2) {
      i.e(t2);
    } finally {
      i.f();
    }
    return n;
  }, refreshIds() {
    this._ids = [];
  } };
  function getPageTitle() {
    var t, e;
    return document.title || (null === (t = document.querySelector('meta[property="og:title"]')) || void 0 === t ? void 0 : t.content) || (null === (e = document.querySelector('meta[name="twitter:title"]')) || void 0 === e ? void 0 : e.content) || "";
  }
  function getPageThumbnail() {
    var t, e;
    return (null === (t = document.querySelector('meta[property="og:image"]')) || void 0 === t ? void 0 : t.content) || (null === (e = document.querySelector('meta[name="twitter:image"]')) || void 0 === e ? void 0 : e.content) || void 0;
  }
  function enrichMediaMeta(t) {
    if (!(null == t ? void 0 : t.length)) return t || [];
    var e = getPageTitle(), r2 = getPageThumbnail();
    return t.map((t2) => {
      var n = t2.title || t2.filename || e;
      return Object.assign(Object.assign({}, t2), { title: n, filename: t2.filename || n, thumbnail: t2.thumbnail || r2 });
    });
  }
  function getMediaProvider() {
    var t, e, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.host, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href, i = null === (t = Object(siteDataExtractor.getSiteData)(r2, n)) || void 0 === t ? void 0 : t.lazyBulkDownload;
    if (null === (e = null == i ? void 0 : i.isActive) || void 0 === e ? void 0 : e.call(i)) return i;
  }
  function formatLazyItem(t, e) {
    var r2 = (null == e ? void 0 : e.lazyItemId) || t.id, n = t.title || getPageTitle(), o = t.thumbnail || getPageThumbnail();
    return { id: t.id, url: t.url || location.href, type: t.type || "video", ext: t.ext || "mp4", exts: t.exts || ["mp4"], filename: n, title: n, thumbnail: o, i18n_quality: Object(coreUtils.i18n)("sidepanel_quality_auto"), quality: void 0, widgetID: null == e ? void 0 : e.widgetId, _qualityPending: true, _sourceWidgetId: null == e ? void 0 : e.widgetId, _lazyItemId: r2 };
  }
  function normalizeItems(t, e) {
    return t.map((t2) => {
      var r2;
      return Object.assign(Object.assign({}, t2), { ext: t2.ext || "mp4", widgetID: null !== (r2 = null == e ? void 0 : e.widgetId) && void 0 !== r2 ? r2 : t2.widgetID, _sourceWidgetId: null == e ? void 0 : e.widgetId, _lazyItemId: null == e ? void 0 : e.lazyItemId, _qualityPending: false });
    });
  }
  var styleInjectorPkg = r(79), styleInjector = r.n(styleInjectorPkg);
  class CompositeComponent {
    constructor() {
      this._components = {}, this._initialized = false;
    }
    constructed() {
      return !!this._initialized || (this._initialized = true, false);
    }
    get components() {
      return this._components;
    }
    set components(t) {
      this.constructed() || (this._components = t);
    }
    _bindListener(t) {
      this.runChilds((e) => {
        e.bindListener(t);
      });
    }
    _destroy() {
      this.runChilds((t) => {
        t.destroy();
      });
    }
    getComponent(t) {
      return this.components.hasOwnProperty(t) ? this.components[t] : null;
    }
    render() {
      var t;
      this.$el && ((null === (t = this.$el) || void 0 === t ? void 0 : t.innerHTML) || (this.firstPaint(this.$el), this.runChilds((t2) => {
        t2.firstPaint(this.$el);
      })), this.runChilds((t2) => t2.componentUpdate(this.$el)));
    }
    runChilds(t) {
      Object.values(this.components).forEach(t);
    }
  }
  class StateComponent extends CompositeComponent {
    constructor(t, e, r2, n) {
      super(), this.deps = /* @__PURE__ */ new Map();
      var i = this.getDefaultState();
      this.previousState = void 0;
      var o = this;
      this.state = new Proxy(Object.assign(Object.assign({}, i), r2), { set(t2, e2, r3) {
        var n2 = o.deps.get(e2);
        return t2[e2] = r3, null == n2 || n2.forEach((t3) => {
          null == t3 || t3(r3);
        }), Reflect.set(t2, e2, r3);
      } }), this.el = t, this.parent = e, "object" == typeof n && Object.keys(n).forEach((t2) => {
        "state" != t2 && (this[t2] = n[t2]);
      }), Reflect.defineProperty(this, "watch", { configurable: false, writable: false, value: this._watch });
    }
    defaultSetState(t) {
      var e = this.componentShouldUpdate(t);
      return this.previousState = Object.assign({}, this.state), Object.keys(t).forEach((e2) => {
        this.state[e2] = t[e2];
      }), e;
    }
    setState(t) {
      this.defaultSetState(t) && this.componentUpdate();
    }
    updateParent() {
    }
    componentShouldUpdate(t) {
      return Object.keys(t).some((e) => t[e] !== this.state[e]);
    }
    componentUpdate(t) {
      this.componentWillUpdate(), this.render(t), this.componentDidUpdate();
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
    watch(t, e) {
      this._watch(t, e);
    }
    _watch(t, e) {
      this.deps.has(t) ? this.deps.get(t).push(e) : this.deps.set(t, [e]);
    }
    unwatch(t, e) {
      if (this.deps.has(t)) if ("all" != e) {
        var r2 = this.deps.get(t).indexOf((t2) => t2 == e);
        r2 > -1 && this.deps.get(t).splice(r2, 1);
      } else this.deps.delete(t);
    }
    nextTick(t) {
      Object(coreUtils.nextTick)(t);
    }
  }
  var pipSize, detectorLogger = r(5), pipDomModule = r(525);
  pipSize = { width: 640, height: 480 }, location.host.match(/^(?:[\w\d_-]+\.)*coccoc.com$/) && document.addEventListener("click", (function(t) {
    if (t.target && t.target.matches("a[x-coccoc-pip-url]")) {
      var e, r2 = t.target, n = r2.getAttribute("x-coccoc-pip-url"), o = r2.getAttribute("x-coccoc-pip-size"), a = r2.hasAttribute("x-coccoc-keep-size"), s = o && /^(\d+)x(\d+)/.exec(o), u = { url: n, width: (e = s ? { width: +s[1], height: +s[2] } : pipSize).width, height: e.height };
      a && (u.isAds = true), coreUtils.sendMessage({ type: saviorConstants.b.PIP.REQUEST, method: "pipUrl", params: u }), t.preventDefault(), t.stopPropagation();
    }
  }));
  var widgetConfig = r(11);
  var pipController = new class {
    constructor() {
      this.handlers = {}, this.pipDOM = new pipDomModule.a();
    }
    bindListener(t, e, r2) {
      var n = (t || {}).node || t, o = (t2) => {
        var a = (t3) => {
          n.removeEventListener("enterpictureinpicture", o), n.removeEventListener("leavepictureinpicture", a), null == r2 || r2(t3), Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.ON.LEAVE, params: { src: n.src } });
        };
        n.addEventListener("leavepictureinpicture", a, false), null == e || e(t2), Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.ON.ENTER, params: { src: n.src } });
      };
      n.addEventListener("enterpictureinpicture", o, false);
    }
    detachPlayerOrNode(t) {
      var e = t.node, r2 = t.media, n = e;
      if (document.pictureInPictureEnabled && widgetConfig.a.NATIVE_PIP) if (n && "video" !== n.tagName.toLowerCase() && (n = n.querySelector("video")), n && "function" == typeof n.requestPictureInPicture) try {
        var o = n;
        n && this.bindListener(o, this.handlers.afterEnter, this.handlers.afterLeave), o.requestPictureInPicture().catch((t2) => {
          t2.toString().includes("disablePictureInPicture") ? (o.disablePictureInPicture = false, o.requestPictureInPicture()) : Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: o.src } });
        }), detectorLogger.a.log("Pip", detectorLogger.a.PIP_DETACH_CLICK);
        var a = Object(urlUtils.c)(n.src);
        if (detectorLogger.a.log("RefrPin", a), widgetConfig.a.CUSTOM_METRICS_JSON) {
          var s = { timestamp_ms: Date.now(), page_url: location.href };
          detectorLogger.a.log("recordCustomData", [{ key: "savior_pip_action", value: JSON.stringify(s) }]);
        }
      } catch (t2) {
        0, Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == e ? void 0 : e.src } });
      }
      else e && "OBJECT" === e.nodeName ? this.classicDetach({ node: e, media: r2 }) : this.recursivePip(e.contentDocument, r2, null == e ? void 0 : e.src);
      else this.recursivePip(e.contentDocument, r2, null == e ? void 0 : e.src);
    }
    recursivePip(t, e, r2) {
      var n = null == t ? void 0 : t.querySelector("video");
      try {
        if (!n) throw new Error();
        this.detachPlayerOrNode({ node: n, media: e });
      } catch (n2) {
        var a = Array.from((t || document).querySelectorAll("iframe")).filter((t2) => !urlMatcher.a.check(t2.src)), s = a.find((t2) => t2.src == r2) || a[0], u = s.contentDocument;
        if (u) return void this.recursivePip(u, e, r2);
        Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: s.src } });
      }
    }
    exitPiP(t) {
      var e = t.node;
      t.media;
      document.pictureInPictureElement && widgetConfig.a.NATIVE_PIP ? this.exitNative(e) : Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == e ? void 0 : e.src, exit: true } });
    }
    exitNative(t, e) {
      var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      try {
        r2.pictureInPictureElement && r2.exitPictureInPicture().catch((e2) => {
          Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: t.src, exit: true } });
        });
      } catch (e2) {
        0, Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == t ? void 0 : t.src, exit: true } });
      }
    }
    pipNative(t, e) {
      if (!document.pictureInPictureEnabled) return;
      t && this.bindListener(t, this.handlers.afterEnter, this.handlers.afterLeave), null == t || t.requestPictureInPicture().catch((e2) => {
        e2.toString().includes("disablePictureInPicture") ? (t.disablePictureInPicture = false, t.requestPictureInPicture()) : Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: t.src } });
      }), detectorLogger.a.log("Pip", detectorLogger.a.PIP_DETACH_CLICK);
      var r2 = Object(urlUtils.c)(e || (null == t ? void 0 : t.src));
      if (detectorLogger.a.log("RefrPin", r2), widgetConfig.a.CUSTOM_METRICS_JSON) {
        var n = { timestamp_ms: Date.now(), page_url: location.href };
        detectorLogger.a.log("recordCustomData", [{ key: "savior_pip_action", value: JSON.stringify(n) }]);
      }
    }
    classicDetach(t, e) {
      var r2 = t.node, n = t.media, o = this.pipDOM.pin(r2, e) || {};
      (null == r2 ? void 0 : r2.src) && (o.url = r2.src), n && (o.url = n.url), o.url && !r2.data || (o.url = location.href), chrome.extension.inIncognitoContext && (o.incognito = true), Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.REQUEST, method: "detachTab", params: o });
    }
    restore() {
      this.pipDOM.restore();
    }
    get isPanelMode() {
      return this.pipDOM.isPanelMode;
    }
  }();
  EE.on("inner_pip", (t) => {
    t.exit ? (function t2(e, r2) {
      var n = e.querySelector("iframe");
      try {
        if (!e.pictureInPictureElement) throw new Error();
        pipController.exitNative(n, r2.requestUrl, e);
      } catch (e2) {
        if (!n) return;
        var o = null == n ? void 0 : n.contentDocument;
        if (o) return void t2(o, r2);
        Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == n ? void 0 : n.src, exit: true } });
      }
    })(document, t) : (function t2(e, r2) {
      var n = e.querySelector("video");
      try {
        if (!n) throw new Error();
        pipController.pipNative(n, r2.requestUrl);
      } catch (e2) {
        var o = document.querySelector("iframe"), a = o.contentDocument;
        if (a) return void t2(a, r2);
        Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: o.src } });
      }
    })(document, t);
  });
  var pipControllerRef = pipController;
  function G(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return Q(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(Q(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,Q(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,Q(f,"constructor",c),Q(c,"constructor",u),u.displayName="GeneratorFunction",Q(c,i,"GeneratorFunction"),Q(f),Q(f,i,"Generator"),Q(f,n,(function(){return this})),Q(f,"toString",(function(){return"[object Generator]"})),(G=function(){return{w:o,m:d}})()}
  function Q(t, e, r2, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (t2) {
      i = 0;
    }
    (Q = function(t2, e2, r3, n2) {
      function o(e3, r4) {
        Q(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? i ? i(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (o("next", 0), o("throw", 1), o("return", 2));
    })(t, e, r2, n);
  }
  var z = function(t, e, r2, n) {
    return new (r2 || (r2 = Promise))((function(i, o) {
      function a(t2) {
        try {
          u(n.next(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function s(t2) {
        try {
          u(n.throw(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function u(t2) {
        var e2;
        t2.done ? i(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    }));
  };
  class PipComponent extends StateComponent {
    getDefaultState() {
      return { opening: false, disabled: false };
    }
    bind() {
      this.openPiP = this.openPiP.bind(this), this.handlePipStateChange = this.handlePipStateChange.bind(this);
    }
    firstPaint(t) {
      var e;
      this.$el = t.querySelector(this.el), null === (e = this.$el) || void 0 === e || e.addEventListener("click", this.openPiP);
    }
    render(t) {
      this.$el && (Object(coreUtils.devLog)("PinButton rendered"), this.$el.setAttribute("data-svg-control", this.state.opening ? "on" : "off"), this.$el.querySelector(".tooltip").innerText = Object(coreUtils.i18n)(this.state.opening ? "popup_unpip_button" : "popup_pip_button"), this.state.opening ? this.$el.classList.add("is-active") : this.$el.classList.remove("is-active"), this.shouldDisable() ? this.$el.setAttribute("disabled", "") : this.$el.removeAttribute("disabled"));
    }
    bindListener(t) {
      if ("IFRAME" != t.tagName) return t.addEventListener("enterpictureinpicture", () => {
        this.setState({ opening: true });
      }), void t.addEventListener("leavepictureinpicture", () => {
        this.setState({ opening: false });
      });
      this.assignPiPHandler(), EE.on("pip.on_state_change", this.handlePipStateChange);
    }
    destroy() {
      EE.off("pip.on_state_change", this.handlePipStateChange);
    }
    handlePipStateChange(t) {
      "enterpictureinpicture" == t.name && this.setState({ opening: true }), "leavepictureinpicture" == t.name && this.setState({ opening: false });
    }
    assignPiPHandler() {
      pipControllerRef.handlers.afterEnter = () => {
        this.setState({ opening: true });
      }, pipControllerRef.handlers.afterLeave = () => {
        this.setState({ opening: false });
      };
    }
    openPiP() {
      var t, e, r2, n, i, o;
      return z(this, void 0, void 0, G().m((function lodashPkg2() {
        var s, u;
        return G().w((function(a) {
          for (; ; ) switch (a.n) {
            case 0:
              if (detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_DETACH), (s = "IFRAME" == this.parent.$node.tagName) && this.assignPiPHandler(), u = (null === (e = null === (t = this.parent.getSiteData()) || void 0 === t ? void 0 : t.getCustomPipControlElement) || void 0 === e ? void 0 : e.call(t, this.parent.$node)) || this.parent.$node, this.state.opening) {
                a.n = 1;
                break;
              }
              pipControllerRef.detachPlayerOrNode({ node: u, media: null === (n = null === (r2 = this.parent.getDownloadState()) || void 0 === r2 ? void 0 : r2.mediaObjects) || void 0 === n ? void 0 : n[0] }), a.n = 3;
              break;
            case 1:
              if (!s) {
                a.n = 2;
                break;
              }
              return this.setState({ opening: false }), pipControllerRef.exitPiP({ node: u, media: null === (o = null === (i = this.parent.getDownloadState()) || void 0 === i ? void 0 : i.mediaObjects) || void 0 === o ? void 0 : o[0] }), a.a(2);
            case 2:
              document.exitPictureInPicture().catch((t2) => {
                0;
              });
            case 3:
              return a.a(2);
          }
        }), lodashPkg2, this);
      })));
    }
    shouldDisable() {
      var t, e, r2, i;
      return this.state.disabled || !document.pictureInPictureEnabled || !(Object(domHelper.m)(this.parent.$node) || (null === (e = null === (t = this.parent.getSiteData()) || void 0 === t ? void 0 : t.shouldDisablePip) || void 0 === e ? void 0 : e.call(t, this.parent.$node, this)) || (null === (i = null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.isValidVideoNode) || void 0 === i ? void 0 : i.call(r2, this.parent.$node))) || !settingsManager.a.get("detach_enabled") || urlMatcher.a.checkRegex(location.href, "disallow-pip");
    }
  }
  function V(target) {
    var it = target && target[Symbol.iterator] ? target[Symbol.iterator]() : Array.from(target || [])[Symbol.iterator]();
    return { s: function() {
    }, n: function() {
      return it.next();
    }, e: function(err) {
      throw err;
    }, f: function() {
    } };
  }
  function $(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r2 = 0, n = Array(e); r2 < e; r2++) n[r2] = t[r2];
    return n;
  }
  var resetClasses = ["--savior-overlay-transform-reset", "--savior-overlay-z-index-top", "--savior-overlay-position-relative", "--savior-overlay-overflow-hidden", "--savior-overlay-overflow-x-visible", "--savior-overlay-overflow-y-visible", "--savior-overlay-z-index-reset", "--savior-overlay-display-none", "--savior-overlay-clearfix", "--savior-overlay-reset-filter", "--savior-overlay-position-static"];
  class CinemaModeComponent extends StateComponent {
    constructor() {
      super(...arguments), this.previousZIndex = null;
    }
    getDefaultState() {
      return { isLightOff: false, isHidden: false };
    }
    bind() {
      this.toggleLight = this.toggleLight.bind(this), this.fullscreenChanged = this.fullscreenChanged.bind(this), this.$backupParent = null, this.$backdrop = Object(domHelper.a)("savior-backdrop", "--savior-backdrop"), this.$backdrop.setAttribute("data-widget-id", this.parent.id || "undefined"), this.mutationObserver = new MutationObserver((t, e) => {
        var r2, n = false, o = Object(coreUtils.useDebounce)(() => {
          n = true;
        }), a = V(t);
        try {
          for (a.s(); !(r2 = a.n()).done; ) {
            var s = r2.value;
            if ("childList" !== s.type) {
              o();
              break;
            }
            if ([...s.addedNodes, ...s.removedNodes].some((t2) => {
              var e2;
              return !(null === (e2 = t2.classList) || void 0 === e2 ? void 0 : e2.contains("--savior-backdrop"));
            })) {
              o();
              break;
            }
          }
        } catch (t2) {
          a.e(t2);
        } finally {
          a.f();
        }
        n && this.state.isLightOff && (this.render(), this.handleLightOnOff(true));
      });
    }
    firstPaint(t) {
      var e;
      this.$el = t.querySelector(this.el), null === (e = this.$el) || void 0 === e || e.addEventListener("click", this.toggleLight);
    }
    render(t) {
      var e, r2, n, o;
      this.$el || (this.$el = Object(coreUtils.query)(this.el, this.parent.$el)), Object(coreUtils.devLog)("ToggleLightButton rendered"), this.$el && (this.$el.setAttribute("data-svg-control", this.state.isLightOff ? "on" : "off"), this.$el.querySelector(".tooltip, span").innerText = Object(coreUtils.i18n)(this.state.isLightOff ? "turn_on_light" : "turn_off_light"), this.state.isLightOff ? this.$el.classList.add("is-active") : this.$el.classList.remove("is-active")), this.shouldHide() ? null === (e = this.$el) || void 0 === e || e.setAttribute("hidden", "") : null === (r2 = this.$el) || void 0 === r2 || r2.removeAttribute("hidden"), this.shouldDisable() ? null === (n = this.$el) || void 0 === n || n.setAttribute("disabled", "") : null === (o = this.$el) || void 0 === o || o.removeAttribute("disabled");
    }
    bindListener(t) {
      console.log("WidgetId", this.parent.id), this.$backdrop.addEventListener("click", () => {
        this.parent.updateSharedState({ viewedWidgetId: null, isLightOffGlobal: false }), this.setState({ isLightOff: false }), this.handleLightOnOff(false);
      }), document.addEventListener("webkitfullscreenchange", this.fullscreenChanged), document.addEventListener("fullscreenchange", this.fullscreenChanged);
    }
    destroy() {
      this.mutationObserver.disconnect(), this.setState({ isLightOff: false }), document.removeEventListener("webkitfullscreenchange", this.fullscreenChanged), document.removeEventListener("fullscreenchange", this.fullscreenChanged);
    }
    setState(t) {
      var e, r2, n;
      t.isLightOff || this.mutationObserver.disconnect(), t.hasOwnProperty("isLightOff") && t.isLightOff != this.parent.sharedState.isLightOffGlobal && (/youtube\.com\/((shorts\/.+)|(watch\?v=)|(watch?.+list=))/i.test(location.href) || location.href.includes("vnexpress.net") && "Shorts" == (null === (r2 = null === (e = document.querySelector(".open")) || void 0 === e ? void 0 : e.querySelector("span")) || void 0 === r2 ? void 0 : r2.textContent) || location.href.includes("tiktok") || (this.parent.updateSharedState({ isLightOffGlobal: t.isLightOff }), this.handleLightOnOff(t.isLightOff || false)));
      var i = this.defaultSetState(t), o = null === (n = this.parent.$parent) || void 0 === n ? void 0 : n.closest("body");
      if (this.state.isLightOff && o) {
        this.mutationObserver.observe(o, { attributes: false, childList: true, subtree: true });
      }
      i && this.componentUpdate();
    }
    toggleLight() {
      if (!this.shouldDisable()) {
        var t = !this.state.isLightOff;
        detectorLogger.a.log("LightOff", t ? 1 : 0), this.parent.updateSharedState({ viewedWidgetId: t ? this.parent.id : null, isLightOffGlobal: t }), this.setState({ isLightOff: t }), this.handleLightOnOff(t);
      }
    }
    handleLightOnOff(t) {
      var e, r2, n, i, o, a, s, u = null === (e = this.parent.getSiteData()) || void 0 === e ? void 0 : e.toggleLight, c = /https:\/\/twitter\.com\/.*\/video\/[^\/]*/.test(location.href);
      if ("function" != typeof u) {
        var l = null == u ? void 0 : u.turnOn, f = null == u ? void 0 : u.turnOff, d = null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.changeZIndexLightOff;
        if (t && this.parent.id == this.parent.sharedState.viewedWidgetId) {
          if ("function" == typeof f) return void f(this.parent);
          var h = null == f ? void 0 : f.parentUpdate, p = null == f ? void 0 : f.updated;
          this.parent.$parent.classList.add("--savior-overlay-z-index-top"), d && (this.previousZIndex = this.parent.$parent.style.zIndex, this.parent.$parent.style.setProperty("z-index", "2147483643", "important")), "static" === getComputedStyle(this.parent.$parent).position && (null === (n = this.parent.$parent) || void 0 === n || n.classList.add("--savior-overlay-position-relative"));
          var v = null === (i = this.parent.$parent) || void 0 === i ? void 0 : i.parentElement, m = ["0px", "0px", "0px"];
          this.$backdrop.style.top = m[0], this.$backdrop.style.left = m[1], this.$backdrop.style.height = m[2], null == v || v.prepend(this.$backdrop);
          for (var y = v.scrollHeight; (null == v ? void 0 : v.parentElement) && "BODY" !== v.parentElement.nodeName && !v.parentElement.querySelector("head"); ) if ("function" != typeof h) {
            v.classList.contains("--savior-overlay-z-index-top") || c || v.classList.add("--savior-overlay-z-index-reset");
            var g2 = getComputedStyle(v), b2 = g2.overflowX, w2 = g2.overflowY;
            "hidden" === b2 && v.classList.add("--savior-overlay-overflow-x-visible"), "hidden" === w2 && v.classList.add("--savior-overlay-overflow-y-visible"), v = v.parentElement, y = Math.max(v.scrollHeight, y);
          } else h(v, this), v = v.parentElement, y = Math.max(v.scrollHeight, y);
          y = Math.max(document.body.scrollHeight, y);
          var A2 = document.body.getBoundingClientRect(), _2 = A2.top, E = A2.left, S = this.$backdrop.getBoundingClientRect(), O = [_2 - S.top + "px", E - S.left + "px", y + "px"];
          if (this.$backdrop.style.top = O[0], this.$backdrop.style.left = O[1], this.$backdrop.style.height = O[2], v == document.body && (null === (o = v.getBoundingClientRect()) || void 0 === o ? void 0 : o.left) > 0) {
            var x = ["0px", "0px"];
            this.$backdrop.style.top = x[0], this.$backdrop.style.left = x[1];
          }
          "function" == typeof p && p(v, this);
        } else if (!t) {
          if ("function" == typeof l) return void l();
          var k = null == l ? void 0 : l.parentUpdate, M = null == l ? void 0 : l.updated;
          if (null === (a = this.$backdrop.parentElement) || void 0 === a || a.removeChild(this.$backdrop), document.querySelectorAll(".--savior-backdrop").forEach((t2) => t2.remove()), this.parent.$parent) {
            d && (this.previousZIndex ? this.parent.$parent.style.zIndex = this.previousZIndex : this.parent.$parent.style.removeProperty("z-index")), this.parent.$parent.classList.remove(...resetClasses);
            for (var T = this.parent.$parent; T.parentElement && T; ) "function" != typeof k ? (T.classList.remove(...resetClasses), T = T.parentElement) : (k(T, this), T = T.parentElement);
          }
          null === (s = document.querySelectorAll('[class~="--savior-overlay"], [class^="--savior-overlay"], [class*="--savior-overlay"]')) || void 0 === s || s.forEach((t2) => t2.classList.remove(...resetClasses)), "function" == typeof M && M(this.parent.$parent, this);
        }
      } else u(this.parent, t);
    }
    fullscreenChanged(t) {
      var e, r2, i, o, a, s, u, c, l, f, d;
      try {
        d = ((null === (i = null === (r2 = null === (e = this.parent.$node) || void 0 === e ? void 0 : e.src) || void 0 === r2 ? void 0 : r2.match(/youtube.com\/embed/i)) || void 0 === i ? void 0 : i.length) || 0) > 0;
      } catch (t2) {
        d = false;
      }
      try {
        Object(domHelper.h)() ? (null === (o = this.$el.parentElement) || void 0 === o || o.setAttribute("hidden", "true"), this.state.isLightOff && d && (this.$backupParent = this.$backdrop.parentNode, null === (a = this.$backdrop.parentNode) || void 0 === a || a.removeChild(this.$backdrop)), null === (u = null === (s = this.parent.getSiteData()) || void 0 === s ? void 0 : s.onFullscreenChanged) || void 0 === u || u.call(s, true, this)) : (null === (c = this.$el.parentElement) || void 0 === c || c.removeAttribute("hidden"), this.state.isLightOff && d && setTimeout(() => {
          var t2;
          null === (t2 = this.$backupParent) || void 0 === t2 || t2.prepend(this.$backdrop), this.$backupParent = null;
        }, 50), null === (f = null === (l = this.parent.getSiteData()) || void 0 === l ? void 0 : l.onFullscreenChanged) || void 0 === f || f.call(l, false, this));
      } catch (t2) {
        console.warn(t2);
      }
    }
    shouldDisable() {
      return Boolean(location.href.match(/(www\.)netflix\.com/i));
    }
    shouldHide() {
      return this.state.isHidden;
    }
  }
  var domConstants = r(21);
  function K(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return J(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(J(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,J(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,J(f,"constructor",c),J(c,"constructor",u),u.displayName="GeneratorFunction",J(c,i,"GeneratorFunction"),J(f),J(f,i,"Generator"),J(f,n,(function(){return this})),J(f,"toString",(function(){return"[object Generator]"})),(K=function(){return{w:o,m:d}})()}
  function J(t, e, r2, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (t2) {
      i = 0;
    }
    (J = function(t2, e2, r3, n2) {
      function o(e3, r4) {
        J(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? i ? i(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (o("next", 0), o("throw", 1), o("return", 2));
    })(t, e, r2, n);
  }
  var Z = function(t, e, r2, n) {
    return new (r2 || (r2 = Promise))((function(i, o) {
      function a(t2) {
        try {
          u(n.next(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function s(t2) {
        try {
          u(n.throw(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function u(t2) {
        var e2;
        t2.done ? i(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    }));
  };
  class WidgetContainer extends StateComponent {
    constructor() {
      super(...arguments), this.isDestroyed = false;
    }
    getDefaultState() {
      return { opening: false };
    }
    bind() {
      this.showWidget = this.showWidget.bind(this), this.hideWidget = this.hideWidget.bind(this), this.onFocused = this.onFocused.bind(this), this.onWidgetFocused = this.onWidgetFocused.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onBlur = this.onBlur.bind(this), this.updateParent = this.updateParent.bind(this), this.debouncedUpdateParent = Object(coreUtils.debounce)(this.updateParent), this.debouncedLogShow = Object(coreUtils.debounce)(this.logShow), this.$parent = this.parent.$parent, this.isDismissed = this.parent.sharedState.isDismissed, this.isVertical = false, this.resizeObserver = new ResizeObserver((t) => t.forEach(() => this.debouncedUpdateParent())), this.resizeObserver.observe(this.parent.$node);
    }
    firstPaint(t) {
      this.$el = this.parent.$el;
      var e = Object(coreUtils.query)("#hide-widget", this.$el), r2 = Object(coreUtils.query)("#hide-on-site", this.$el);
      null == e || e.addEventListener("click", () => Z(this, void 0, void 0, K().m((function t2() {
        return K().w((function(t3) {
          for (; ; ) switch (t3.n) {
            case 0:
              this.hasImage ? detectorLogger.a.log("ButtonClickedWithImage", detectorLogger.a.BUTTON_HIDE_WITH_IMAGE) : detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_HIDE), SaviorWidgetController.unmountCurrentWidget(), EE.emit("widget.toast.open", { message: Object(coreUtils.i18n)("widget_panel_hidden") }), this.destroy();
            case 1:
              return t3.a(2);
          }
        }), t2, this);
      })))), null == r2 || r2.addEventListener("click", () => {
        this.hasImage ? detectorLogger.a.log("ButtonClickedWithImage", detectorLogger.a.BUTTON_HIDE_PERMANENT_WITH_IMAGE) : detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_HIDE_PERMANENT), SaviorWidgetController.unmountCurrentWidget(), this.isDismissed = true, EE.emit("widget.toast.open", { message: Object(coreUtils.i18n)("widget_panel_hidden_on_site", Object(coreUtils.formatDomain)(location.host)), duration: 6500, closable: true, onAttached: (t2, e2) => {
          var r3;
          null === (r3 = document.querySelector(`#${t2} [data-action='openSettings']`) || e2) || void 0 === r3 || r3.addEventListener("click", () => {
            Object(coreUtils.sendMessage)({ type: saviorConstants.b.OPEN_SETTINGS }), detectorLogger.a.log("OpenSettings", detectorLogger.a.OPEN_SETTING_CONTENT);
          });
        } }), SaviorWidgetController.dismissAllWidget(), this.destroy();
      });
    }
    render(t) {
      this.parent.shouldHideWidget() || this.isDismissed || this.isDestroyed || (Object(coreUtils.devLog)("Behavior render"), this.updateParent());
    }
    bindListener(t) {
      var e, r2, n, o, a, s, u;
      null === (e = this.$parent) || void 0 === e || e.addEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseOver)), this.parent && this.parent.$node && this.parent.$node !== this.$parent && (this.parent.$node.addEventListener("mouseover", this.onFocused, true), this.parent.$node.addEventListener("mouseout", this.onBlur, true)), this.$el.addEventListener("mouseover", this.onWidgetFocused), null === (n = this.$parent) || void 0 === n || n.addEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (o = this.parent.getSiteData()) || void 0 === o ? void 0 : o.useCaptureOnMouseOut)), this.$el.addEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (a = this.parent.getSiteData()) || void 0 === a ? void 0 : a.useCaptureOnMouseOut)), null === (u = null === (s = this.parent.siteData) || void 0 === s ? void 0 : s.onBehaviorBined) || void 0 === u || u.call(s, this);
    }
    destroy() {
      var t, e, r2, n, o, a;
      this.isDestroyed = true, clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), clearTimeout(this.mouseStayTimeout), this.parent && this.parent.$node && this.parent.$node !== this.$parent && (this.parent.$node.removeEventListener("mouseover", this.onFocused, true), this.parent.$node.removeEventListener("mouseout", this.onBlur, true)), this.$parent && this.$el && (this.$parent.removeEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (t = this.parent.getSiteData()) || void 0 === t ? void 0 : t.useCaptureOnMouseOver)), this.$el.removeEventListener("mouseover", this.onWidgetFocused), null === (e = this.$parent) || void 0 === e || e.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseMove)), this.mouseMoveActive = false, this.$el.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (n = this.parent.getSiteData()) || void 0 === n ? void 0 : n.useCaptureOnMouseMove)), this.$parent.removeEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (o = this.parent.getSiteData()) || void 0 === o ? void 0 : o.useCaptureOnMouseOut)), this.$el.removeEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (a = this.parent.getSiteData()) || void 0 === a ? void 0 : a.useCaptureOnMouseOut))), this.debouncedUpdateParent.destroy();
    }
    getSiteWidgetConfig() {
      return domConstants.f.find((t) => {
        var e = t.rx, r2 = t.closest, n = t.matcher;
        return !!location.href.match(e) && (!(r2 && !this.parent.$node.closest(r2)) && !(n && !n(this.parent.$node)));
      });
    }
    elementHasControl() {
      return !!this.getSiteWidgetConfig();
    }
    getWidgetVerticalMove() {
      var t = this.getSiteWidgetConfig();
      return "number" == typeof (null == t ? void 0 : t.y) ? t.y : domConstants.d;
    }
    getWidgetHorizontalMove() {
      var t = this.getSiteWidgetConfig();
      return "number" == typeof (null == t ? void 0 : t.x) ? t.x : domConstants.c;
    }
    updateParent() {
      var t, e, r2, o, a, s, u, c, l, f, d, h, p, v, m, y = null !== (r2 = null === (e = null === (t = this.parent.siteData) || void 0 === t ? void 0 : t.getCustomParent) || void 0 === e ? void 0 : e.call(t, this.parent.$node)) && void 0 !== r2 ? r2 : Object(domHelper.d)(this.parent.$node);
      null === (o = this.$parent) || void 0 === o || o.removeEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (a = this.parent.getSiteData()) || void 0 === a ? void 0 : a.useCaptureOnMouseOver)), null === (s = this.$parent) || void 0 === s || s.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (u = this.parent.getSiteData()) || void 0 === u ? void 0 : u.useCaptureOnMouseMove)), null === (c = this.$parent) || void 0 === c || c.removeEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (l = this.parent.getSiteData()) || void 0 === l ? void 0 : l.useCaptureOnMouseOut)), this.parent.$parent = y, this.$parent = y, this.parent.shouldHideWidget() || this.isDismissed || this.isDestroyed || (null === (f = this.$parent) || void 0 === f || f.addEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (d = this.parent.getSiteData()) || void 0 === d ? void 0 : d.useCaptureOnMouseOver)), this.mouseMoveActive && (null === (h = this.$parent) || void 0 === h || h.addEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (p = this.parent.getSiteData()) || void 0 === p ? void 0 : p.useCaptureOnMouseMove))), null === (v = this.$parent) || void 0 === v || v.addEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (m = this.parent.getSiteData()) || void 0 === m ? void 0 : m.useCaptureOnMouseOut)), this.updatePosition());
    }
    logShow() {
      detectorLogger.a.log("PageShown", detectorLogger.a.PAGE_CONTENT_SHOW_CONTROLS);
    }
    onWidgetFocused() {
      clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), clearTimeout(this.mouseStayTimeout), this.showWidget();
    }
    onFocused(t) {
      var e, r2, n, o, a, s;
      !settingsManager.a.get("on_page_buttons") || this.parent.shouldHideWidget() || this.isDismissed || this.isDestroyed || (this.mouseMoveActive || (null === (e = this.$parent) || void 0 === e || e.addEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseMove)), null === (n = this.$el) || void 0 === n || n.addEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (o = this.parent.getSiteData()) || void 0 === o ? void 0 : o.useCaptureOnMouseMove))), this.mouseMoveActive = true, this.showWidget(), clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), this.debouncedLogShow(), SaviorWidgetController.mountWidget(this.parent), this.updatePosition() && this.updateParent(), t && this.onMouseMove(t), null === (s = null === (a = this.parent.getSiteData()) || void 0 === a ? void 0 : a.onFocused) || void 0 === s || s.call(a, this));
    }
    onMouseMove(t) {
      var e;
      clearTimeout(this.mouseStayTimeout), clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), this.showWidget(), !t || (null === (e = t.path) || void 0 === e ? void 0 : e.slice(0, t.path.length - 2).some((t2) => {
        var e2;
        return null === (e2 = null == t2 ? void 0 : t2.matches) || void 0 === e2 ? void 0 : e2.call(t2, this.el);
      })) || t.target == SaviorWidgetController.$host || t.currentTarget == this.parent.$el || this.parent.$el.querySelector("#onboard-nmp:not([hidden]") || (this.mouseStayTimeout = setTimeout(this.hideWidget, 3e3));
    }
    onBlur(t) {
      var e, r2, n, o, a;
      clearTimeout(this.mouseStayTimeout), clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), t && null != t.target && t.relatedTarget != SaviorWidgetController.$host && !this.parent.$el.querySelector("#onboard-nmp:not([hidden]") && (Object(coreUtils.beDefinedOr)(false)(null === (e = this.parent.getSiteData()) || void 0 === e ? void 0 : e.stopPropagationOnMouseOut) && (null == t || t.stopImmediatePropagation(), null == t || t.stopPropagation()), this.mouseMoveActive && (null === (r2 = this.$parent) || void 0 === r2 || r2.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (n = this.parent.getSiteData()) || void 0 === n ? void 0 : n.useCaptureOnMouseMove)), null === (o = this.$el) || void 0 === o || o.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (a = this.parent.getSiteData()) || void 0 === a ? void 0 : a.useCaptureOnMouseMove))), this.mouseMoveActive = false, this.timeout = setTimeout(this.hideWidget, 500));
    }
    showWidget() {
      var t, e, r2, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return Z(this, void 0, void 0, K().m((function urlMatcher2() {
        return K().w((function(o) {
          for (; ; ) switch (o.n) {
            case 0:
              if (this.$el) {
                o.n = 1;
                break;
              }
              return o.a(2);
            case 1:
              if (null === (t = this.$el) || void 0 === t || t.removeAttribute("hidden"), !n) {
                o.n = 2;
                break;
              }
              return o.n = 2, Object(coreUtils.sleep)(1);
            case 2:
              null === (r2 = null === (e = this.$el) || void 0 === e ? void 0 : e.firstElementChild) || void 0 === r2 || r2.classList.remove("hidden");
            case 3:
              return o.a(2);
          }
        }), urlMatcher2, this);
      })));
    }
    hideWidget() {
      var t, e;
      return Z(this, void 0, void 0, K().m((function r2() {
        return K().w((function(r3) {
          for (; ; ) switch (r3.n) {
            case 0:
              if (this.$el) {
                r3.n = 1;
                break;
              }
              return r3.a(2);
            case 1:
              null === (e = null === (t = this.$el) || void 0 === t ? void 0 : t.firstElementChild) || void 0 === e || e.classList.add("hidden"), this.timeoutAnimation = setTimeout(() => {
                var t2;
                null === (t2 = this.$el) || void 0 === t2 || t2.setAttribute("hidden", "true");
              }, 150);
            case 2:
              return r3.a(2);
          }
        }), r2, this);
      })));
    }
    updatePosition() {
      var t, e, r2, i, a, s, u, c;
      if (this.$el) {
        var l, f = urlMatcher.a.shouldWidgetAttachToParentNode(location.hostname) || (null === (e = null === (t = this.parent.getSiteData()) || void 0 === t ? void 0 : t.shouldWidgetAttachToParentNode) || void 0 === e ? void 0 : e.call(t, this.parent.$node)) ? this.$parent.getBoundingClientRect() : this.parent.$node.getBoundingClientRect(), d = f.top, h = f.left, p = f.right, v = d - this.$el.clientHeight, m = this.isVertical ? p - this.$el.clientWidth : h, y = Object(domHelper.j)(this.parent.$node);
        if (y) l = "fixed", v < 0 && (v = 0);
        else {
          l = "absolute", location.href.includes("https://hk-ancillaries.s3.amazonaws.com/") && (m += (null === (a = null === (i = null === (r2 = this.parent.$node.ownerDocument) || void 0 === r2 ? void 0 : r2.defaultView) || void 0 === i ? void 0 : i.frameElement) || void 0 === a ? void 0 : a.getBoundingClientRect().x) || 0, v += (null === (c = null === (u = null === (s = this.parent.$node.ownerDocument) || void 0 === s ? void 0 : s.defaultView) || void 0 === u ? void 0 : u.frameElement) || void 0 === c ? void 0 : c.getBoundingClientRect().y) || 0), v += window.pageYOffset, m += window.pageXOffset;
          var g2 = ["#cinematics-full-bleed-container", "#player-full-bleed-container", "#full-bleed-container"].join(","), b2 = this.parent.$node.closest(g2);
          (v < 0 || b2) && (v = d + window.pageYOffset);
        }
        return this.$el.style = `position: ${l}; top: ${v}px; left: ${m}px`, y;
      }
    }
  }
  var shortener = new class {
    constructor() {
      this._cache = /* @__PURE__ */ new Map();
    }
    shorten(t, e) {
      var r2, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = "", a = "";
      "string" == typeof t ? o = t : "object" == typeof t && (o = t.videoUrl, a = t.audioUrl), r2 = o + a + "_" + e;
      var s = this._cache.get(r2);
      if (s) return s instanceof Promise ? s : Promise.resolve(s);
      var u = "https://s.coccoc.com/api/v1/shorten-url", c = { full_url: t ? encodeURIComponent(o) : null }, l = { Authorization: c.full_url ? "Bearer b59df0256819b112511f92795fbfa127f851c068420b5b016da9228889d1a90d6356f2c770e778b4c262a3807058004be1826bba45a40c1c926f88fe2c985fe4" : "" }, f = encodeURIComponent(e), d = new Promise((t2) => {
        coreUtils.send("POST", u, c, l, true).then((e2) => {
          var s2;
          try {
            s2 = JSON.parse(e2.responseText);
            var c2 = "http://onelink.to/mbbyrq?", d2 = s2.full_url ? s2.full_url[0].split("/").pop() : s2.shorten_url.split("/").pop(), h = "";
            if (!o) return h = `${c2}ccvd=r/${d2}&title=${f}`, this._cache.set(r2, h), t2(h);
            if (n || !a) return h = `${c2}ccvd=r/${d2}&title=${f}`, this._cache.set(r2, h), t2(h);
            var p = { full_url: encodeURIComponent(a) };
            setTimeout(() => {
              coreUtils.send("POST", u, p, l, true).then((e3) => {
                var n2;
                try {
                  n2 = JSON.parse(e3.responseText);
                } catch (e4) {
                  return t2(null);
                }
                if (n2.error || n2.error) return t2(null);
                var i = n2.full_url ? n2.full_url[0].split("/").pop() : n2.shorten_url.split("/").pop();
                return h = `${c2}ccvd=r/${d2}&ccad=r/${i}&title=${f}`, this._cache.set(r2, h), t2(h);
              });
            }, 100);
          } catch (e3) {
            return t2(null);
          }
        });
      });
      return this._cache.set(r2, d), d;
    }
  }(), qrCodeHelper = r(526), qrCanvasHelper = r.n(qrCodeHelper);
  var transferGifUrl = chrome.runtime.getURL("/images/transfer-to-mobile.gif"), transferDarkGifUrl = chrome.runtime.getURL("/images/transfer-to-mobile-dark.gif");
  var MobileSync = class {
    constructor(t) {
      this.EE = t, this._node = null, this._currentUrl = "", this._hostNode = null, this._filename = "", this._urlSources = {}, this._qrBox = null, this._tutorialImage = null, this._lastSentMode = "video", this._audioLogSent = false, this.onClickAway = this.onClickAway.bind(this), this._init();
    }
    get _isShown() {
      return !!this._node && !this._node.classList.contains("hidden");
    }
    _showImage() {
      var t;
      this._tutorialImage = null === (t = this._node) || void 0 === t ? void 0 : t.querySelector("#mobile-instruction-image"), this._tutorialImage && (this._tutorialImage.src = chrome.runtime.getURL("images/download-placeholder.png"));
    }
    _loadTutorial() {
      var t;
      this._tutorialImage && (this._tutorialImage.classList.add("instruction-image"), this._tutorialImage.src = transferGifUrl);
      var e = null === (t = this._node) || void 0 === t ? void 0 : t.querySelector("#mobile-instruction-image-dark");
      e && (e.srcset = transferDarkGifUrl);
    }
    _init() {
      if (!this._node && !location.href.includes(".svg")) {
        var t = document.createElement("div");
        t.innerHTML = lodash.a.render(settingsManager.a.get("template-mobile-transfer-panel"), { i18n_mobile_header_title: coreUtils.i18n("mobile_panel_header"), i18n_mobile_instruction_1: coreUtils.i18n("mobile_instruction_1"), i18n_mobile_instruction_2: coreUtils.i18n("mobile_instruction_2"), i18n_mobile_panel_footer: coreUtils.i18n("mobile_panel_footer"), i18n_mobile_video: coreUtils.i18n("media_fields_type_video"), i18n_mobile_audio: coreUtils.i18n("media_fields_type_audio") }), this._node = t.firstElementChild, this._addListener();
      }
    }
    _reset() {
      if (this.hide(), this._hostNode = null, this._currentUrl = "", this._node) {
        var t = this._node.querySelector(".qrcode");
        t.innerHTML = "", t.classList.add("loading"), this._urlSources = {}, this._lastSentMode = "video", Array.from(this._node.querySelectorAll('input[name="send-type"]')).forEach((t2) => {
          t2.checked = "video" === t2.value;
        });
      }
    }
    attach(t, e) {
      this._reset(), this._hostNode = t, this.onClose = e, t.appendChild(this._node), detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_SHOW);
    }
    _addListener() {
      var t, e;
      null === (t = this._node) || void 0 === t || t.addEventListener("click", (t2) => {
        var e2;
        switch (t2.stopPropagation(), t2.target.id) {
          case "google-play":
            window.open("https://play.google.com/store/apps/details?id=com.coccoc.trinhduyet&hl=en", "_blank"), detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_CLICK_G);
            break;
          case "app-store":
            window.open("https://itunes.apple.com/us/app/c%E1%BB%91cc%E1%BB%91c-browser/id1170593919?mt=8", "_blank"), detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_CLICK_A);
            break;
          case "mobile-transfer-closer":
            this.hide(), null === (e2 = this.onClose) || void 0 === e2 || e2.call(this);
        }
      });
      var r2 = this;
      Array.from((null === (e = this._node) || void 0 === e ? void 0 : e.querySelectorAll('input[name="send-type"]')) || []).forEach((t2) => {
        t2.addEventListener("change", (function() {
          var t3 = this.value;
          r2._qrBox && (r2._qrBox.innerHTML = "", r2._qrBox.classList.add("loading")), r2._lastSentMode = t3, r2.showQrCode(r2._lastSentMode), "audio" !== t3 || r2._audioLogSent || (detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_CLICK_AUDIO), r2._audioLogSent = true);
        }));
      }), this.EE.on("mobile-transfer-panel.loadQrCode", this.loadQrCode.bind(this));
    }
    loadQrCode(t) {
      var e;
      this._qrBox = (null === (e = this._node) || void 0 === e ? void 0 : e.querySelector(".qrcode")) || null, this._qrBox && (this._qrBox.innerHTML = "", this._qrBox.classList.remove("error"), this._qrBox.classList.add("loading"), this._qrBox.innerText = "", null !== t ? (this._filename = t.filename, this._urlSources = t, this.showQrCode(this._lastSentMode)) : this.showError(this._qrBox));
    }
    showQrCode(t) {
      var e = "audio" === t ? this._urlSources.audioUrl : { audioUrl: this._urlSources.audioUrl, videoUrl: this._urlSources.videoUrl };
      shortener.shorten(e, this._filename, this._urlSources.videoHasAudio).then(this._updateQrCode.bind(this));
    }
    _updateQrCode(t) {
      var e, r2;
      (null === (e = this._qrBox) || void 0 === e || e.classList.remove("loading"), t) ? t !== this._currentUrl && (r2 = t, qrCanvasHelper.a.toDataURL(r2, { errorCorrectionLevel: "M", margin: 0 })).then((t2) => {
        var e2, r3, n = null === (e2 = this._qrBox) || void 0 === e2 ? void 0 : e2.querySelector("img");
        if (n) n.src = t2;
        else {
          var i = document.createElement("img");
          i.src = t2, null === (r3 = this._qrBox) || void 0 === r3 || r3.appendChild(i);
        }
      }) : this.showError(this._qrBox || void 0);
    }
    show() {
      var t;
      null === (t = this._node) || void 0 === t || t.classList.remove("hidden"), this._showImage(), this._loadTutorial(), detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_CLICK), coreUtils.nextTick(() => {
        window.addEventListener("click", this.onClickAway);
      });
    }
    onClickAway(t) {
      var e;
      this.hide(), null === (e = this.onClose) || void 0 === e || e.call(this);
    }
    showError(t) {
      if (null == t || t.classList.remove("loading"), null == t || t.classList.add("error"), t) {
        t.innerHTML = "";
        var e = Object(domHelper.a)("img", "error-img");
        e.src = chrome.runtime.getURL("images/transfer-file-not-available.svg");
        var r2 = Object(domHelper.a)("p", "error-text");
        r2.innerText = coreUtils.i18n("mobile_error_text"), t.append(e, r2);
      }
      detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_ERROR);
    }
    hide() {
      var t;
      null === (t = this._node) || void 0 === t || t.classList.add("hidden"), window.removeEventListener("click", this.onClickAway);
    }
  };
  class MobileLogoHelper {
    constructor(t) {
      var e = (t.getAttribute("data-src") || "").replace(/^\/+/, "");
      var r2 = e.includes("logo_cc.svg") ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='vidm_grad' x1='2' y1='2' x2='22' y2='22' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%2310B981'/%3E%3Cstop offset='100%25' stop-color='%23059669'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='20' height='20' rx='5.5' fill='url(%23vidm_grad)'/%3E%3Cpath d='M8.5 7.5V13.5L13.5 10.5L8.5 7.5Z' fill='%23FFFFFF' opacity='0.95'/%3E%3Cpath d='M15.5 8V14M15.5 14L13 11.5M15.5 14L18 11.5' stroke='%23FFFFFF' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7 17.5H17' stroke='%23FFFFFF' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E" : chrome.runtime.getURL(e);
      var n = document.createElement("img");
      n.src = r2;
      n.setAttribute("savior-rendered", "");
      t.replaceWith(n);
    }
  }
  var transferDomHelper = r(28);
  function ct(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return lt(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(lt(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,lt(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,lt(f,"constructor",c),lt(c,"constructor",u),u.displayName="GeneratorFunction",lt(c,i,"GeneratorFunction"),lt(f),lt(f,i,"Generator"),lt(f,n,(function(){return this})),lt(f,"toString",(function(){return"[object Generator]"})),(ct=function(){return{w:o,m:d}})()}
  function lt(t, e, r2, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (t2) {
      i = 0;
    }
    (lt = function(t2, e2, r3, n2) {
      function o(e3, r4) {
        lt(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? i ? i(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (o("next", 0), o("throw", 1), o("return", 2));
    })(t, e, r2, n);
  }
  var ft = function(t, e, r2, n) {
    return new (r2 || (r2 = Promise))((function(i, o) {
      function a(t2) {
        try {
          u(n.next(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function s(t2) {
        try {
          u(n.throw(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function u(t2) {
        var e2;
        t2.done ? i(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    }));
  };
  class TransferComp extends StateComponent {
    getDefaultState() {
      return { opening: false, disabled: false };
    }
    bind() {
      this.mobileTransferPanel = this.shouldEnable() ? new MobileSync(this.parent.EE) : null, this.parent.EE.once("download-list.first-scope", (t) => {
        var e = t.scopeDownloads;
        return ft(this, void 0, void 0, ct().m((function t2() {
          var r2, n, o, a, s, u, c, l, f, d, h, p, v, m, y, g2, b2, w2, A2;
          return ct().w((function(t3) {
            for (; ; ) switch (t3.n) {
              case 0:
                if (!this.mobileTransferPanel) {
                  t3.n = 5;
                  break;
                }
                return u = (null === (o = null === (n = null === (r2 = this.parent.getComponent("download")) || void 0 === r2 ? void 0 : r2.state.mediaObjects) || void 0 === n ? void 0 : n[0]) || void 0 === o ? void 0 : o.url) || location.href, t3.n = 1, Object(transferDomHelper.b)(u);
              case 1:
                if (!(c = t3.v)) {
                  t3.n = 3;
                  break;
                }
                if (l = c.formats.filter((t4) => t4.mimeType.startsWith("video/mp4")).sort((t4, e2) => e2.height - t4.height), f = c.formats.filter((t4) => t4.mimeType.startsWith("audio/mp4")).sort((t4, e2) => e2.audioBitrate - t4.audioBitrate), d = l.find((t4) => 17 == t4.itag) || l.find((t4) => 18 == t4.itag), h = f[0], !d) {
                  t3.n = 2;
                  break;
                }
                return this.parent.EE.emit("mobile-transfer-panel.loadQrCode", { filename: c.title, videoUrl: d.url, audioUrl: h.url, videoHasAudio: true }), t3.a(2);
              case 2:
                if (!(p = l.find((t4) => !t4.audioQuality) || l[0]) || !h) {
                  t3.n = 3;
                  break;
                }
                return this.parent.EE.emit("mobile-transfer-panel.loadQrCode", { filename: c.title, videoUrl: p.url, audioUrl: h.url }), t3.a(2);
              case 3:
                if (v = e.filter((t4) => {
                  var e2;
                  return "video" === t4.type && ((null === (e2 = t4.url) || void 0 === e2 ? void 0 : e2.videoUrl) || t4.url);
                }), m = [...e].sort((t4, e2) => "mp3" === t4.ext ? -1 : "mp3" === e2.ext ? 1 : "mp4" === t4.ext ? -1 : "mp4" === e2.ext ? 1 : 0).filter((t4) => {
                  var e2;
                  return "video" === t4.type && (null === (e2 = t4.url) || void 0 === e2 ? void 0 : e2.audioUrl) || "audio" === t4.type && t4.url;
                }), y = v.find((t4) => "mp4" == t4.ext) || v[0], g2 = m[0], b2 = encodeURIComponent(Object(coreUtils.cleanSymbols)(y.filename)), w2 = (null === (a = null == y ? void 0 : y.url) || void 0 === a ? void 0 : a.videoUrl) || (null == y ? void 0 : y.url), A2 = (null === (s = null == g2 ? void 0 : g2.url) || void 0 === s ? void 0 : s.audioUrl) || (null == g2 ? void 0 : g2.url), w2 || A2) {
                  t3.n = 4;
                  break;
                }
                return t3.a(2, null);
              case 4:
                this.parent.EE.emit("mobile-transfer-panel.loadQrCode", { videoUrl: w2, audioUrl: A2, filename: b2 });
              case 5:
                return t3.a(2);
            }
          }), t2, this);
        })));
      });
    }
    firstPaint(t) {
      var e, r2;
      this.$el = Object(coreUtils.query)(this.el, t);
      var n = Object(coreUtils.query)("#open-mobile", t);
      this.mobileTransferPanel ? (this.mobileTransferPanel.attach(this.$el, () => {
        this.setState({ opening: false });
      }), Array.from((null === (e = this.mobileTransferPanel._node) || void 0 === e ? void 0 : e.querySelectorAll("savior-image")) || []).forEach((t2) => {
        new MobileLogoHelper(t2);
      }), null == n || n.addEventListener("click", () => {
        this.parent.fetchDownloads(), this.setState({ opening: !this.state.opening });
      }), null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("click", (t2) => {
        var e2;
        (null === (e2 = t2.target) || void 0 === e2 ? void 0 : e2.matches(this.el)) && this.setState({ opening: false });
      })) : null == n || n.setAttribute("hidden", "true");
    }
    render(t) {
      var e, r2, n, o;
      if (this.$el) {
        Object(coreUtils.devLog)("MobileTransferButton render");
        var a = Object(coreUtils.query)(domConstants.h.OtherFeatureButton, this.parent.$el);
        if (this.mobileTransferPanel && (this.state.opening ? (this.mobileTransferPanel.show(), null === (e = this.$el) || void 0 === e || e.removeAttribute("hidden")) : (this.mobileTransferPanel.hide(), null === (r2 = this.$el) || void 0 === r2 || r2.setAttribute("hidden", "true"))), this.state.opening ? (null == a || a.setAttribute("hidden", "true"), null === (n = this.$el) || void 0 === n || n.removeAttribute("hidden")) : (null == a || a.removeAttribute("hidden"), null === (o = this.$el) || void 0 === o || o.setAttribute("hidden", "true")), a) {
          var s = Object(coreUtils.query)("#open-mobile", a);
          this.state.disabled ? null == s || s.setAttribute("hidden", "true") : this.shouldEnable() && (null == s || s.removeAttribute("hidden"));
        }
      }
    }
    bindListener(t) {
    }
    destroy() {
    }
    shouldEnable() {
      return "www.youtube.com" === location.host;
    }
  }
  class DownloadBtnComp extends StateComponent {
    getDefaultState() {
      return { opening: false };
    }
    bind() {
      this.close = this.close.bind(this), this.onClick = this.onClick.bind(this);
    }
    firstPaint(t) {
      var e;
      this.$el = t.querySelector(this.el), null === (e = this.$el) || void 0 === e || e.addEventListener("click", this.onClick);
      var r2 = Object(coreUtils.query)("#open-settings", this.$el);
      null == r2 || r2.addEventListener("click", () => {
        detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_OPEN_SETTINGS), Object(coreUtils.sendMessage)({ type: saviorConstants.b.OPEN_SETTINGS }), this.destroy();
      });
    }
    render(t) {
      if (this.$el) {
        Object(coreUtils.devLog)("ExpandFeatureButton render");
        var e = Object(coreUtils.query)("#expansion", this.$el), r2 = Object(coreUtils.query)(".tooltip", this.$el);
        this.state.opening ? (null == e || e.removeAttribute("hidden"), this.$el.classList.add("is-active"), null == r2 || r2.setAttribute("hidden", "true"), this.nextTick(() => {
          window.addEventListener("click", this.close);
        })) : (null == e || e.setAttribute("hidden", "true"), null == r2 || r2.removeAttribute("hidden"), window.removeEventListener("click", this.close), this.$el.classList.remove("is-active"));
      }
    }
    bindListener(t) {
    }
    destroy() {
    }
    onClick(t) {
      var e, r2, n;
      (null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.disabled) || (null === (r2 = null == t ? void 0 : t.target) || void 0 === r2 ? void 0 : r2.hasAttribute("disabled")) || (null === (n = null == t ? void 0 : t.target) || void 0 === n ? void 0 : n.classList.contains("disabled")) || false || (this.setState({ opening: !this.state.opening }), t.target.closest("#expansion") || detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_MORE_OPTIONS));
    }
    close(t) {
      this.setState({ opening: false });
    }
  }
  var downloadListModule = r(164), dropdownHelper = r(176);
  function mt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return yt(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(yt(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,yt(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,yt(f,"constructor",c),yt(c,"constructor",u),u.displayName="GeneratorFunction",yt(c,i,"GeneratorFunction"),yt(f),yt(f,i,"Generator"),yt(f,n,(function(){return this})),yt(f,"toString",(function(){return"[object Generator]"})),(mt=function(){return{w:o,m:d}})()}
  function yt(t, e, r2, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (t2) {
      i = 0;
    }
    (yt = function(t2, e2, r3, n2) {
      function o(e3, r4) {
        yt(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? i ? i(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (o("next", 0), o("throw", 1), o("return", 2));
    })(t, e, r2, n);
  }
  function gt(target) {
    var it = target && target[Symbol.iterator] ? target[Symbol.iterator]() : Array.from(target || [])[Symbol.iterator]();
    return { s: function() {
    }, n: function() {
      return it.next();
    }, e: function(err) {
      throw err;
    }, f: function() {
    } };
  }
  function bt(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r2 = 0, n = Array(e); r2 < e; r2++) n[r2] = t[r2];
    return n;
  }
  var wt = function(t, e, r2, n) {
    return new (r2 || (r2 = Promise))((function(i, o) {
      function a(t2) {
        try {
          u(n.next(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function s(t2) {
        try {
          u(n.throw(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function u(t2) {
        var e2;
        t2.done ? i(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    }));
  };
  function countWords(t) {
    return t.trim() ? t.trim().split(/\s+/).length : 0;
  }
  function parseTranscriptXml(t) {
    var e = new DOMParser().parseFromString(t, "text/xml"), r2 = e.documentElement;
    switch (r2.tagName) {
      case "transcript":
        return (function(t2) {
          return Array.from(t2.getElementsByTagName("text")).map((t3) => {
            var e2, r3, n, i = 1e3 * Number(null !== (e2 = t3.getAttribute("start")) && void 0 !== e2 ? e2 : 0);
            return { start: i, end: i + 1e3 * Number(null !== (r3 = t3.getAttribute("dur")) && void 0 !== r3 ? r3 : 0), text: decodeHtml(null !== (n = t3.textContent) && void 0 !== n ? n : "") };
          });
        })(e);
      case "timedtext":
        return (function(t2) {
          return Array.from(t2.getElementsByTagName("p")).map((t3) => {
            var e2, r3, n, i = Number(null !== (e2 = t3.getAttribute("t")) && void 0 !== e2 ? e2 : 0), o = Number(null !== (r3 = t3.getAttribute("d")) && void 0 !== r3 ? r3 : 0), a = Array.from(t3.getElementsByTagName("s"));
            return { start: i, end: i + o, text: decodeHtml((a.length > 0 ? a.map((t4) => {
              var e3;
              return null !== (e3 = t4.textContent) && void 0 !== e3 ? e3 : "";
            }).join("") : null !== (n = t3.textContent) && void 0 !== n ? n : "").trim()) };
          });
        })(e);
      default:
        throw new Error(`Unsupported XML format: <${r2.tagName}>`);
    }
  }
  function decodeHtml(t) {
    return t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  }
  function splitSentences(t) {
    return (function(t2) {
      var e, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, n = [], i = null, o = gt(t2);
      try {
        for (o.s(); !(e = o.n()).done; ) {
          var a = e.value;
          i ? i.text += " " + a.text : i = Object.assign({}, a), countWords(i.text) >= r2 && (n.push(i), i = null);
        }
      } catch (t3) {
        o.e(t3);
      } finally {
        o.f();
      }
      return i && (n.length > 0 ? n[n.length - 1].text += " " + i.text : n.push(i)), n;
    })(t).map((t2, e) => {
      return "" == t2.text ? "" : `
${r2 = t2.start, n = Math.floor(r2 / 36e5), i = Math.floor(r2 / 6e4) % 60, o = Math.floor(r2 / 1e3) % 60, `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}:${o.toString().padStart(2, "0")}`}
${t2.text}`;
      var r2, n, i, o;
    }).filter((t2) => "" !== t2).join("\n");
  }
  class QualityMenuDropdown extends downloadListModule.a {
    constructor(t, e, r2, n, i) {
      super(t, e, false, n, i), this._checkFileSize = () => {
      }, this.getEventRegistry();
    }
    getEventRegistry() {
      return this.eventRegistry || (this.eventRegistry = /* @__PURE__ */ new Map()), this.eventRegistry;
    }
    render() {
      var t, e, r2 = { i18n_select_audio_channel_title: Object(coreUtils.i18n)("select_audio_channel_title"), media_list: (null === (t = this.state.renderDownloads[0]) || void 0 === t ? void 0 : t.media) || [], audio_channel: null === (e = this.state.renderDownloads[0]) || void 0 === e ? void 0 : e.audio_channel }, n = settingsManager.a.get("template-media") || "", o = document.createElement("div");
      o.innerHTML = lodash.a.render(n, r2), this.$el = o.firstElementChild;
    }
    _eventListener() {
      var t, e, r2, n, i, o, a, s = this;
      try {
        this.EE.emit("download-list.videos-count", null === (t = this.state.downloadScopes) || void 0 === t ? void 0 : t.length), (null === (n = null === (r2 = null === (e = this.state.downloadScopes) || void 0 === e ? void 0 : e[0]) || void 0 === r2 ? void 0 : r2.scopeDownloads) || void 0 === n ? void 0 : n.length) > 0 && this.EE.emit("download-list.first-scope", this.state.downloadScopes[0]);
        var c = this.getEventRegistry(), l = this.state.renderDownloads[0];
        Array.from(this.$el.querySelectorAll(".extension-box")).forEach((t2, e2) => {
          var r3 = l.media[e2];
          Array.from(t2.querySelectorAll(".j-quality")).forEach((n2, i2) => {
            var o2 = r3.media[i2];
            if ("image" !== o2.type) {
              var a2 = ((t3) => wt(this, void 0, void 0, mt().m((function t4() {
                var r4, i3;
                return mt().w((function(t5) {
                  for (; ; ) switch (t5.n) {
                    case 0:
                      try {
                        settingsManager.a.get("prefer_last_quality") && (i3 = qualityHelper.b.getQualityLevelByQualityType(o2.quality), settingsManager.a.set("preferred_quality_level", i3), EE.emit("preferred-quality-level.changed"));
                      } catch (t6) {
                        console.warn(t6);
                      }
                      return t5.n = 1, null === (r4 = this.onItemClick) || void 0 === r4 ? void 0 : r4.call(this, o2, n2);
                    case 1:
                      this._download(o2, e2);
                    case 2:
                      return t5.a(2);
                  }
                }), t4, this);
              })))).bind(this);
              c.set(n2, a2), n2.addEventListener("click", a2);
            } else {
              var s2 = () => wt(this, void 0, void 0, mt().m((function t3() {
                var e3;
                return mt().w((function(t4) {
                  for (; ; ) switch (t4.n) {
                    case 0:
                      return detectorLogger.a.log("DownloadImage", detectorLogger.a.DOWNLOAD_CURRENT_IMAGE), t4.n = 1, null === (e3 = this.onItemClick) || void 0 === e3 ? void 0 : e3.call(this, o2, n2);
                    case 1:
                      EE.emit("download", { method: "download", params: Object.assign({}, o2) });
                    case 2:
                      return t4.a(2);
                  }
                }), t3, this);
              })));
              c.set(n2, s2), n2.addEventListener("click", s2);
              var l2 = t2.querySelector(".extra-images"), f2 = () => wt(this, void 0, void 0, mt().m((function t3() {
                var e3, r4, i3;
                return mt().w((function(t4) {
                  for (; ; ) switch (t4.n) {
                    case 0:
                      return detectorLogger.a.log("DownloadImage", detectorLogger.a.DOWNLOAD_ALL_IMAGES), t4.n = 1, null === (e3 = this.onItemClick) || void 0 === e3 ? void 0 : e3.call(this, o2, n2);
                    case 1:
                      null === (i3 = null === (r4 = o2.extraImages) || void 0 === r4 ? void 0 : r4.urls) || void 0 === i3 || i3.forEach((t5) => {
                        EE.emit("download", { method: "download", params: { url: t5, filename: o2.filename } });
                      });
                    case 2:
                      return t4.a(2);
                  }
                }), t3, this);
              })));
              l2 && (c.set(l2, f2), l2.addEventListener("click", f2));
            }
          });
        });
        var f = this.$el.querySelector(".j-audio-drawer-toggle"), h = this.$el.querySelector(".audio-drawer-wrapper"), v = this.$el.querySelector(".audio-drawer"), m = this.$el.querySelector(".audio-drawer-header-back-button");
        if (f && h && v) {
          var y = v.parentElement;
          y && "static" === getComputedStyle(y).position && (y.style.position = "relative"), v.style.position = "absolute", v.style.top = "0", v.style.right = "0", v.style.bottom = "0", v.style.width = "100%", v.style.transform = "translateX(100%)", v.style.transition = "transform 0.2s ease", v.hidden = true;
          var g2 = (t2) => {
            t2.stopPropagation(), v.setAttribute("data-open", "false"), v.style.transform = "translateX(100%)", setTimeout(() => {
              h.hidden = true, v.hidden = true;
            }, 200);
          }, b2 = (t2) => {
            t2.stopPropagation(), "true" === v.getAttribute("data-open") ? g2(t2) : (detectorLogger.a.log(saviorConstants.v, detectorLogger.a.YOUTUBE_AUDIO_CHANNEL_WIDGET_SHOW), h.hidden = false, v.hidden = false, v.setAttribute("data-open", "true"), requestAnimationFrame(() => {
              v.style.transform = "translateX(0)";
            }));
          };
          c.set(f, b2), f.addEventListener("click", b2), m && (c.set(m, g2), m.addEventListener("click", g2));
          var w2 = v.querySelector(".j-audio-drawer-closer");
          if (w2) {
            var A2 = (t2) => {
              var e2;
              t2.stopPropagation(), null === (e2 = this.onClose) || void 0 === e2 || e2.call(this, t2), g2(t2);
            };
            c.set(w2, A2), w2.addEventListener("click", A2);
          }
          for (var _2 = this.$el.querySelector(".audio-list"), E = Array.from((null == _2 ? void 0 : _2.children) || []), S = function() {
            var t2 = x[O], e2 = t2.getAttribute("data-id"), r3 = null === (i = l.audio_channel) || void 0 === i ? void 0 : i.media.find((t3) => t3.id === e2);
            (null === (a = null === (o = s.state.renderDownloads[0].audio_channel) || void 0 === o ? void 0 : o.selected_audio) || void 0 === a ? void 0 : a.id) === e2 && t2.classList.add("checked");
            t2.addEventListener("click", (e3) => {
              var n2;
              if (detectorLogger.a.log(saviorConstants.v, detectorLogger.a.YOUTUBE_AUDIO_CHANNEL_WIDGET_CHANGE), r3) {
                null === (n2 = l.media.find((t3) => "video" === t3.type)) || void 0 === n2 || n2.media.forEach((t3) => {
                  "object" == typeof t3.url && (t3.url.audioUrl = String(r3.url));
                });
                var i2 = l.media.find((t3) => "audio" === t3.type);
                if (i2) {
                  var o2 = i2.media[0], a2 = s.$el.querySelector(`.extension-box [data-id="${o2.id}"]`);
                  if (i2.media = [r3], a2) {
                    a2.removeEventListener("click", c.get(a2));
                    var f2 = ((t3) => wt(s, void 0, void 0, mt().m((function t4() {
                      var e4, n3;
                      return mt().w((function(t5) {
                        for (; ; ) switch (t5.n) {
                          case 0:
                            try {
                              settingsManager.a.get("prefer_last_quality") && (n3 = qualityHelper.b.getQualityLevelByQualityType(r3.quality), settingsManager.a.set("preferred_quality_level", n3), EE.emit("preferred-quality-level.changed"));
                            } catch (t6) {
                              console.warn(t6);
                            }
                            return t5.n = 1, null === (e4 = this.onItemClick) || void 0 === e4 ? void 0 : e4.call(this, r3, a2);
                          case 1:
                            this._download(r3, 1);
                          case 2:
                            return t5.a(2);
                        }
                      }), t4, this);
                    })))).bind(s);
                    a2.addEventListener("click", f2), c.set(a2, f2), a2.id = "media_" + r3.id, a2.setAttribute("data-id", r3.id), a2.setAttribute("data-quality-value", r3.ext + "/" + r3.quality), a2.setAttribute("title", r3.i18n_quality || r3.quality || "");
                    var h2 = a2.querySelector(".media-name.audio");
                    h2 && (h2.innerText = r3.i18n_quality || r3.quality || "");
                    var v2 = a2.querySelector(".media-sub-info.info-resolution");
                    v2 && (v2.innerText = r3.resolution || "");
                    var m2 = a2.querySelector(".media-sub-info.info-ext");
                    m2 && (m2.innerText = r3.i18n_ext || r3.ext || "");
                  }
                }
                l.audio_channel && (l.audio_channel.selected_audio = r3);
                var y2 = s.$el.querySelector(".audio-selected .media-name.audio");
                y2 && r3.i18n_quality && (y2.innerText = r3.i18n_quality), E.forEach((t3) => {
                  t3.classList.remove("checked");
                }), t2.classList.add("checked");
              }
              g2(e3);
            });
          }, O = 0, x = E; O < x.length; O++) S();
        }
      } catch (t2) {
        console.warn(t2);
      }
    }
    destroy() {
      this.getEventRegistry().forEach((t, e) => {
        e.removeEventListener("click", t);
      });
    }
    setOnItemClick(t) {
      this.onItemClick = t;
    }
    setOnClose(t) {
      this.onClose = t;
    }
  }
  class MainDownloadComponent extends StateComponent {
    constructor() {
      super(...arguments), this.found = false, this.enoughTime = false;
    }
    repeatWhileEnabled(t, e) {
      var r2 = () => {
        this.enoughTime ? this.found || Object(coreUtils.logDownloadError)({ url: location.href, error: "Error: Cannot get media from node" }) : (t(), setTimeout(r2, e));
      };
      setTimeout(r2, e);
    }
    getDefaultState() {
      return { isGettingDownloads: false, mediaObjects: null, downloads: null, download: false, buttonClicked: false, opening: false };
    }
    bind() {
      this.parent;
      this.fetchDownloads = this.fetchDownloads.bind(this), this.onClick = this.onClick.bind(this), this.close = this.close.bind(this), this.onUpdateMedia = this.onUpdateMedia.bind(this), this.onUpdateMedia(), EE.on("widget.updateMedia", this.onUpdateMedia), EE.on("widget.fbUpdate", this.onFbUpdate.bind(this)), EE.on("mediaEnoughTime", () => this.enoughTime = true), EE.on("get_transcript", (t) => {
        var e, r2;
        location.href.includes(null === (r2 = null === (e = this.state.mediaObjects) || void 0 === e ? void 0 : e[0]) || void 0 === r2 ? void 0 : r2.url) && this.fetchDownloads().then((e2) => {
          (function(t2, e3) {
            return wt(this, void 0, void 0, mt().m((function r3() {
              var n, o, a;
              return mt().w((function(r4) {
                for (; ; ) switch (r4.p = r4.n) {
                  case 0:
                    if ((n = t2.find((t3) => "subtitles" === t3.type && t3.quality === Object(coreUtils.i18n)("subtitles_lang_" + e3))) || (n = t2.find((t3) => "subtitles" === t3.type && t3.quality === Object(coreUtils.i18n)("subtitles_lang_vi"))), n || (n = t2.find((t3) => "subtitles" === t3.type && t3.quality === Object(coreUtils.i18n)("subtitles_lang_en"))), n || (n = t2.find((t3) => "subtitles" === t3.type)), n && n.url) {
                      r4.n = 1;
                      break;
                    }
                    return r4.a(2, null);
                  case 1:
                    return r4.n = 2, fetch(n.url);
                  case 2:
                    if ((o = r4.v).ok) {
                      r4.n = 3;
                      break;
                    }
                    throw new Error("HTTP error! status: " + o.status);
                  case 3:
                    return r4.n = 4, o.text();
                  case 4:
                    return a = r4.v, r4.p = 5, a = splitSentences(parseTranscriptXml(a || "")), r4.a(2, a);
                  case 6:
                    return r4.p = 6, r4.v, r4.a(2, a);
                }
              }), r3, null, [[5, 6]]);
            })));
          })(this.state.downloads || [], t.data.language).then((e3) => {
            Object(coreUtils.sendMessage)({ type: saviorConstants.b.RETURN_TRANSCRIPT, data: { requestId: t.data.requestId, transcript: e3 } });
          });
        });
      });
    }
    firstPaint(t) {
      var e, r2, n;
      try {
        Object(dropdownHelper.b)(document, this.parent.$node);
      } catch (_2) {
      }
      this.repeatWhileEnabled(() => {
        Object(dropdownHelper.b)(document, this.parent.$node);
      }, 1e3), this.$el = Object(coreUtils.query)(this.el, t), null === (e = this.$el) || void 0 === e || e.addEventListener("click", this.fetchDownloads, { once: true }), null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("click", this.onClick);
      var o = Object(coreUtils.query)("dropdown-box", this.$el);
      o && (null === (n = Object(coreUtils.query)("#mobile-transfer-closer", o)) || void 0 === n || n.addEventListener("click", this.close)), null == o || o.addEventListener("click", (t2) => {
        t2.stopPropagation();
      });
    }
    render(t) {
      var e, r2;
      if (this.$el) {
        Object(coreUtils.devLog)("DownloadButton render");
        var n = this.parent, o = n.getComponent("transferMobile"), a = Object(coreUtils.query)("#downloads", this.$el), s = Object(coreUtils.query)("dropdown-box", this.$el), u = Object(coreUtils.query)(".tooltip", this.$el), c = Object(coreUtils.query)("#downloads-media", this.$el);
        if (this.state.isGettingDownloads) null == a || a.setAttribute("data-panel", "loading");
        else if (this.state.downloads && this.state.downloads.length > 0) {
          if (null == a || a.setAttribute("data-panel", "media"), (null === (e = this.previousState) || void 0 === e ? void 0 : e.downloads) != this.state.downloads) {
            this.selection && this.selection.destroy();
            var l = JSON.parse(JSON.stringify(this.state.downloads)), f = new QualityMenuDropdown(n.EE, l, false, false, this.state.buttonClicked);
            f.setOnItemClick((t2, e2) => wt(this, void 0, void 0, mt().m((function r3() {
              var n2, i;
              return mt().w((function(r4) {
                for (; ; ) switch (r4.n) {
                  case 0:
                    if ("image" !== t2.type && detectorLogger.a.log("VideoQualityChanged", qualityHelper.b.getVideoQualityIndex(t2.quality)), this.setState({ opening: false }), !(i = null === (n2 = this.parent.getSiteData()) || void 0 === n2 ? void 0 : n2.beforeDownload)) {
                      r4.n = 1;
                      break;
                    }
                    return r4.n = 1, null == i ? void 0 : i({ item: t2, $el: e2, widget: this.parent, ctx: this });
                  case 1:
                    return r4.a(2);
                }
              }), r3, this);
            })))), f.setOnClose(this.close.bind(this)), this.selection = f, f.$el.id = "downloads-media", f.$el.setAttribute("id", "downloads-media"), null == c || c.replaceWith(f.$el);
            var d = f.state.renderDownloads.length;
            this.$el.setAttribute("data-media-count", d + "");
          }
        } else null == a || a.setAttribute("data-panel", "no-media");
        if (this.state.opening ? (null == s || s.removeAttribute("hidden"), this.$el.classList.add("active"), null == u || u.setAttribute("hidden", "true"), this.nextTick(() => {
          window.addEventListener("click", this.close);
        })) : (null == s || s.setAttribute("hidden", "true"), null == u || u.removeAttribute("hidden"), window.removeEventListener("click", this.close), this.$el.classList.remove("active")), this.state.mediaObjects && this.state.mediaObjects.length) {
          if (!this.state.isGettingDownloads) {
            if (this.$el.removeAttribute("disabled"), u && (u.innerText = Object(coreUtils.i18n)("widget_download_tooltip")), u) {
              var h = false, v = false;
              this.state.mediaObjects.forEach((t2) => {
                "image" == t2.type ? h = true : v = true;
              }), u.innerText = h ? v ? Object(coreUtils.i18n)("widget_download_tooltip_image_and_video") : Object(coreUtils.i18n)("widget_download_tooltip_only_image") : Object(coreUtils.i18n)("widget_download_tooltip");
            }
            null == o || o.setState({ disabled: false });
          }
        } else if (this.state.mediaObjects === null) {
          if (this.$el.removeAttribute("disabled"), u) u.innerText = Object(coreUtils.i18n)("widget_download_tooltip");
          null == o || o.setState({ disabled: false });
        } else this.$el.setAttribute("disabled", ""), u && (u.innerText = Object(coreUtils.i18n)("widget_no_media_found")), null == o || o.setState({ opening: false, disabled: true });
        Array.from((null === (r2 = this.$el) || void 0 === r2 ? void 0 : r2.querySelectorAll("savior-image")) || []).forEach((t2) => {
          new MobileLogoHelper(t2);
        });
      }
    }
    bindListener(t) {
    }
    destroy() {
      EE.off("widget.updateMedia", this.onUpdateMedia), EE.off("widget.fbUpdate", this.onFbUpdate);
    }
    onUpdateMedia() {
      if (typeof window !== "undefined" && window.__saviorSniffedMedia && window.__saviorSniffedMedia.length) {
        try {
          LazyMediaTracker.processRequest(window.__saviorSniffedMedia);
        } catch (_2) {
        }
      }
      LazyMediaTracker.getMediaObjectsFromNode(this.parent.$node).then((t) => {
        t && 0 != t.length && (this.found = true), t = enrichMediaMeta((null == t ? void 0 : t.filter((t2) => !!t2)) || []), this.setState({ mediaObjects: t }), this.parent.activeOmnibox(t);
      });
    }
    onFbUpdate() {
      var t, e;
      (null === (t = this.state.mediaObjects) || void 0 === t ? void 0 : t.length) && (null === (e = this.state.mediaObjects) || void 0 === e ? void 0 : e.length) > 0 || LazyMediaTracker.getMediaObjectsFromNode(this.parent.$node).then((t2) => {
        t2 && 0 != t2.length && (this.found = true), t2 = enrichMediaMeta((null == t2 ? void 0 : t2.filter((t3) => !!t3)) || []), this.setState({ mediaObjects: t2 }), this.parent.activeOmnibox(t2);
      });
    }
    fetchDownloads(t) {
      var e, r2, n, o, a, s, u, c;
      return wt(this, void 0, void 0, mt().m((function overlayCss2() {
        var f, h, p, v, m, y, g2, b2, w2, A2, _2;
        return mt().w((function(l) {
          for (; ; ) switch (l.p = l.n) {
            case 0:
              if (this.state.downloads && this.state.downloads.length || this.state.isGettingDownloads || !(null === (e = this.state.mediaObjects) || void 0 === e ? void 0 : e.length)) {
                l.n = 7;
                break;
              }
              if (detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_FAKE_QUALITY), this.setState({ isGettingDownloads: true }), f = getMediaProvider(), !(null === (r2 = null == f ? void 0 : f.findItemRoot) || void 0 === r2 ? void 0 : r2.call(f, this.parent.$node)) || !f.resolveItemFromNode) {
                l.n = 5;
                break;
              }
              return l.p = 1, l.n = 2, f.resolveItemFromNode(this.parent.$node);
            case 2:
              if (!(h = l.v).length) {
                l.n = 3;
                break;
              }
              p = h.filter((t2) => Object(coreUtils.isValidData)(t2)), v = gt(p);
              try {
                for (v.s(); !(m = v.n()).done; ) y = m.value, (null === (o = null === (n = this.state.mediaObjects) || void 0 === n ? void 0 : n[0]) || void 0 === o ? void 0 : o.thumbnail) && !y.thumbnail && (y.thumbnail = this.state.mediaObjects[0].thumbnail);
              } catch (t2) {
                v.e(t2);
              } finally {
                v.f();
              }
              return this.setState({ mediaObjects: h, downloads: p, isGettingDownloads: false, download: false, buttonClicked: !!(null == t ? void 0 : t.target) }), l.a(2);
            case 3:
              l.n = 5;
              break;
            case 4:
              l.p = 4, l.v;
            case 5:
              return l.n = 6, LazyMediaTracker.getDownloadsByMediaObjects(this.state.mediaObjects);
            case 6:
              g2 = (g2 = l.v).filter((t2) => Object(coreUtils.isValidData)(t2)), b2 = gt(g2);
              try {
                for (b2.s(); !(w2 = b2.n()).done; ) A2 = w2.value, (null === (s = null === (a = this.state.mediaObjects) || void 0 === a ? void 0 : a[0]) || void 0 === s ? void 0 : s.thumbnail) && (A2.thumbnail = null === (u = this.state.mediaObjects) || void 0 === u ? void 0 : u[0].thumbnail), Object(saviorConstants.B)(A2.ext) && ("audio" === A2.type ? A2.ext = "mp3" : "subtitles" === A2.type ? (_2 = (null === (c = A2.quality) || void 0 === c ? void 0 : c.split(".").pop()) || "srt", A2.ext = _2) : A2.ext = "mp4", A2.hasOwnProperty("_hls") || (A2._hls = true));
              } catch (t2) {
                b2.e(t2);
              } finally {
                b2.f();
              }
              0 === g2.length && detectorLogger.a.log("PageShown", detectorLogger.a.PAGE_CONTENT_NO_MEDIA), this.setState({ downloads: g2, isGettingDownloads: false, download: false, buttonClicked: !!(null == t ? void 0 : t.target) });
            case 7:
              return l.a(2);
          }
        }), overlayCss2, this, [[1, 4]]);
      })));
    }
    onClick(t) {
      var e, r2, n;
      (null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.disabled) || (null === (r2 = null == t ? void 0 : t.target) || void 0 === r2 ? void 0 : r2.hasAttribute("disabled")) || (null === (n = null == t ? void 0 : t.target) || void 0 === n ? void 0 : n.classList.contains("disabled")) || false || this.setState({ opening: !this.state.opening });
    }
    close(t) {
      this.setState({ opening: false });
    }
  }
  var onboardNmpState, onboardNmpHelper;
  !(function(t) {
    t.Abort = "#onboard-nmp-abort", t.Next = "#onboard-nmp-next", t.Complete = "#onboard-nmp-complete", t.Indicator = "#onboard-nmp-indicator";
  })(onboardNmpState || (onboardNmpState = {})), (function(t) {
    t.Show = "show", t.ShowStep = "show_step", t.Abort = "skip", t.Next = "next", t.Complete = "got_it";
  })(onboardNmpHelper || (onboardNmpHelper = {}));
  class ToastNotification {
    constructor(t) {
      var e = t.message, r2 = t.closable, i = void 0 !== r2 && r2, o = t.duration, a = void 0 === o ? 2e3 : o, s = t.onAttached, u = t.onDetached;
      this.message = e, this.closable = i, this.duration = a, this.id = "toast_" + Date.now(), this.onAttached = s, this.onDetached = u;
      var c = Object(domHelper.a)("toast", "toast");
      c.id = this.id, c.innerHTML = `<toast-message>${e}</toast-message>${i ? '<toast-closer><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33333 15.5448L4.45514 14.6666L9.12181 9.99993L4.45514 5.33327L5.33333 4.45508L9.99999 9.12174L14.6667 4.45508L15.5448 5.33327L10.8782 9.99993L15.5448 14.6666L14.6667 15.5448L9.99999 10.8781L5.33333 15.5448Z" fill="currentColor"/></svg></toast-closer>' : ""}`, this.$el = c;
    }
    attach() {
      var t;
      return clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.detach();
      }, this.duration), null === (t = this.onAttached) || void 0 === t || t.call(this, this.id, this.$el), this.$el;
    }
    detach() {
      var t;
      this.$el.parentElement && (this.$el.remove(), null === (t = this.onDetached) || void 0 === t || t.call(this, this.id));
    }
  }
  var onboardYaaStep;
  r(775);
  function getYaaStorageKey(t) {
    return "onboard_youtube_antiadblocker_" + t;
  }
  !(function(t) {
    t.Close = "#onboard-yaa-close", t.Next = "#onboard-yaa-next";
  })(onboardYaaStep || (onboardYaaStep = {}));
  class YoutubeAdblockOnboarder extends StateComponent {
    constructor(t) {
      super(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document), this.destroyed = false, this.bind(), this.render(), this.bindListener();
    }
    getDefaultState() {
      return { disabled: false };
    }
    bind() {
      this.shouldDisable() && this.destroy();
    }
    firstPaint() {
      var t;
      if (this.$el = this.parent.querySelector(this.el), !this.$parent || !this.$shadow) {
        var e = Object(domHelper.a)("div");
        e.style.position = "absolute", e.style.top = "0", e.style.right = "0", e.style.height = "0", e.style.zIndex = "99999999999999", e.style.setProperty("display", "block", "important"), this.$parent = e, this.$shadow = Object(domHelper.b)(e);
        var o = (null === (t = chrome.runtime.getManifest().web_accessible_resources) || void 0 === t ? void 0 : t[0]).resources || chrome.runtime.getManifest().web_accessible_resources || [];
        o.forEach(function(t2) {
          if (typeof t2 === "string" && t2.endsWith(".css")) {
            _injectSaviorCss(this.$shadow, t2);
          }
        }.bind(this));
        try {
          (document.body || document.documentElement) && (document.body || document.documentElement).appendChild(this.$parent);
        } catch (_2) {
        }
      }
      this.$el || (this.$el = Object(domHelper.a)("div", "savior-onboarding-youtube-anti-adblocker"), this.$el.id = this.el.replace("#", ""), this.$shadow.appendChild(this.$el));
      var c = Object(domHelper.a)("div");
      c.innerHTML = lodash.a.render(settingsManager.a.get("template-onboard-youtube-anti-adblocker"), { i18n_onboard_header: Object(coreUtils.i18n)(getYaaStorageKey("title")), i18n_onboard_desc: Object(coreUtils.i18n)(getYaaStorageKey("desc")), i18n_close: Object(coreUtils.i18n)(getYaaStorageKey("close")), image_source: chrome.runtime.getURL("/images/onboard-youtube-anti-adblocker.jpg") });
      var l = c.firstElementChild;
      l.setAttribute("savior-rendered", ""), this.$el.replaceWith(l), this.$el = l;
    }
    render() {
      var t;
      this.shouldDisable() || (this.$el && (null === (t = this.$el) || void 0 === t ? void 0 : t.innerHTML) || this.firstPaint(), this.$el && (Object(coreUtils.devLog)("OnboardingYoutubeAntiAdblocker rendered"), this.$el.removeAttribute("hidden"), this.sendMetric("YtdAntiAdblockerOnboard", 0)));
    }
    bindListener() {
      var t;
      this.$el && (null === (t = Object(coreUtils.query)(onboardYaaStep.Close, this.$el)) || void 0 === t || t.addEventListener("click", this.onClickClose.bind(this)));
    }
    destroy() {
      var t, e, r2, n;
      this.destroyed = true, null === (t = this.$el) || void 0 === t || t.remove(), null === (e = this.$parent) || void 0 === e || e.remove(), this.$el ? null === (n = Object(coreUtils.query)(onboardYaaStep.Close, this.$el)) || void 0 === n || n.removeEventListener("click", this.onClickClose.bind(this)) : null === (r2 = this.parent.querySelector(this.el)) || void 0 === r2 || r2.remove();
    }
    static get closeCount() {
      return settingsManager.a.get("youtube_anti_adblocker_onboarding_shown_count") || 0;
    }
    static shouldInit() {
      return false;
    }
    shouldDisable() {
      return this.state.disabled;
    }
    onClickClose() {
      var t = YoutubeAdblockOnboarder.closeCount + 1;
      this.sendMetric("YtdAntiAdblockerOnboardClose", t), this.setState({ disabled: true }), settingsManager.a.set("youtube_anti_adblocker_onboarding_shown_count", t), this.destroy();
    }
    sendMetric(t, e) {
      detectorLogger.a.log(t, e);
    }
  }
  var parserModule89 = r(89);
  class SettingsMenuComp extends StateComponent {
    getDefaultState() {
      return { opening: false };
    }
    bind() {
      this.close = this.close.bind(this), this.onClick = this.onClick.bind(this);
    }
    firstPaint(t) {
      var e, r2;
      this.$el = t.querySelector(this.el), null === (e = this.$el) || void 0 === e || e.addEventListener("click", this.onClick), null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("change", this.onChange), this.$el && (this.$el.value = parserModule89.a.client);
    }
    render(t) {
      this.$el && Object(coreUtils.devLog)("ChangeYoutubeClientButton render");
    }
    bindListener(t) {
    }
    destroy() {
    }
    onClick(t) {
      var e, r2, n;
      (null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.disabled) || (null === (r2 = null == t ? void 0 : t.target) || void 0 === r2 ? void 0 : r2.hasAttribute("disabled")) || (null === (n = null == t ? void 0 : t.target) || void 0 === n ? void 0 : n.classList.contains("disabled")) || false || (this.setState({ opening: !this.state.opening }), t.target.closest("#expansion"));
    }
    onChange(t) {
      parserModule89.a.client = t.target.value, EE.emit("widget.forceUpdate");
    }
    close(t) {
      this.setState({ opening: false });
    }
  }
  var settingsModule90 = r(90);
  function Nt(target) {
    var it = target && target[Symbol.iterator] ? target[Symbol.iterator]() : Array.from(target || [])[Symbol.iterator]();
    return { s: function() {
    }, n: function() {
      return it.next();
    }, e: function(err) {
      throw err;
    }, f: function() {
    } };
  }
  function Dt(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r2 = 0, n = Array(e); r2 < e; r2++) n[r2] = t[r2];
    return n;
  }
  class SkipVideoAdComponent extends StateComponent {
    getDefaultState() {
      return { isHovered: settingsManager.a.get("skip_video_hovered"), isHidden: false };
    }
    bind() {
      this.skipVideo = this.skipVideo.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    firstPaint(t) {
      var e, r2;
      this.$el = t.querySelector(this.el), null === (e = this.$el) || void 0 === e || e.addEventListener("click", this.skipVideo), !this.state.isHovered && (null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("mouseenter", this.onMouseEnter));
    }
    render() {
      var t, e, r2, n;
      this.state.isHovered && (null === (e = null === (t = this.$el) || void 0 === t ? void 0 : t.querySelector(".red-dot")) || void 0 === e || e.remove()), this.shouldHide() ? null === (r2 = this.$el) || void 0 === r2 || r2.setAttribute("hidden", "") : null === (n = this.$el) || void 0 === n || n.removeAttribute("hidden");
    }
    bindListener() {
    }
    destroy() {
      var t, e;
      null === (t = this.$el) || void 0 === t || t.removeEventListener("click", this.skipVideo), !this.state.isHovered && (null === (e = this.$el) || void 0 === e || e.removeEventListener("mouseenter", this.onMouseEnter));
    }
    skipVideo() {
      var t = this.parent.$node, e = "VIDEO" === t.tagName ? t : this.findVideoDeep(t);
      e ? e.currentTime = e.duration - 0.1 : t.src && Object(coreUtils.sendMessage)({ type: saviorConstants.b.SKIP_VIDEO, params: { url: t.src } }), detectorLogger.a.log("SkipVideo", detectorLogger.a.SKIP_VIDEO);
    }
    onMouseEnter() {
      this.setState({ isHovered: true }), settingsManager.a.set("skip_video_hovered", true);
    }
    findVideoDeep(t) {
      var e = t.querySelector("video");
      if (e) return e;
      var r2, n = Nt(t.querySelectorAll("*"));
      try {
        for (n.s(); !(r2 = n.n()).done; ) {
          var i = r2.value;
          if (i.shadowRoot) {
            var o = this.findVideoDeep(i.shadowRoot);
            if (o) return o;
          }
        }
      } catch (t2) {
        n.e(t2);
      } finally {
        n.f();
      }
      return null;
    }
    shouldHide() {
      return this.state.isHidden;
    }
  }
  function destructureArray(arr, len) {
    if (!arr) return [];
    return Array.isArray(arr) ? arr.slice(0, len) : Array.from(arr).slice(0, len);
  }
  function qt(target) {
    var it = target && target[Symbol.iterator] ? target[Symbol.iterator]() : Array.from(target || [])[Symbol.iterator]();
    return { s: function() {
    }, n: function() {
      return it.next();
    }, e: function(err) {
      throw err;
    }, f: function() {
    } };
  }
  function iteratorUnpackHelper(arr, len) {
    return destructureArray(arr, len);
  }
  function arraySliceHelper(arr, len) {
    return (arr || []).slice(0, len);
  }
  function Qt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return zt(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var l=[][n]?e(e([][n]())):(zt(e={},n,(function(){return this})),e),f=c.prototype=s.prototype=Object.create(l);function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,zt(t,i,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=c,zt(f,"constructor",c),zt(c,"constructor",u),u.displayName="GeneratorFunction",zt(c,i,"GeneratorFunction"),zt(f),zt(f,i,"Generator"),zt(f,n,(function(){return this})),zt(f,"toString",(function(){return"[object Generator]"})),(Qt=function(){return{w:o,m:d}})()}
  function zt(t, e, r2, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (t2) {
      i = 0;
    }
    (zt = function(t2, e2, r3, n2) {
      function o(e3, r4) {
        zt(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? i ? i(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (o("next", 0), o("throw", 1), o("return", 2));
    })(t, e, r2, n);
  }
  var SaviorWidgetController, Vt = function(t, e, r2, n) {
    return new (r2 || (r2 = Promise))((function(i, o) {
      function a(t2) {
        try {
          u(n.next(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function s(t2) {
        try {
          u(n.throw(t2));
        } catch (t3) {
          o(t3);
        }
      }
      function u(t2) {
        var e2;
        t2.done ? i(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    }));
  }, widgetConfigOptions = "www.youtube.com" === location.host && false;
  function isGenericFilename(t) {
    if (!(null == t ? void 0 : t.trim())) return true;
    var e = t.trim();
    return !/\s/.test(e) && (!!/^(playlist|master|index|chunklist|manifest|video|videoplayback|noname|watch)$/i.test(e) || /^[\w.-]+$/.test(e) && e.length <= 80);
  }
  function getBestMediaTitle(t, e) {
    for (var r2 = 0, n = [t.fileName, t.title, t.filename]; r2 < n.length; r2++) {
      var o = n[r2];
      if (o && !isGenericFilename(o)) return o;
    }
    return (function(t2) {
      var e2 = t2.closest("article");
      if (e2) {
        var r3 = Object(coreUtils.queryAll)('[dir="auto"]', e2).map((t3) => {
          var e3;
          return (null === (e3 = t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
        }).filter((t3) => t3.length > 2 && !t3.startsWith("@"));
        if (r3.length) {
          var n2 = r3.slice().sort((t3, e3) => e3.length - t3.length)[0];
          return n2.length > 40 ? n2.slice(0, 40) + "..." : n2;
        }
      }
    })(e) || document.title || "video";
  }
  class SaviorVideoWidget extends CompositeComponent {
    constructor(t, e, r2, a) {
      var s, c, l, f, h, p, v, m, y, g2, b2;
      super(), this.isSkipVideoEnabled = false, this.autoHideWidget = false, this.isImage = false, this.id = t, this.EE = new styleInjector.a(), this.$el = Object(domHelper.a)("div", domConstants.h.WrapperClassName), this.$node = e, this.sharedState = r2, this.updateSharedState = a, EE.emit("onboarding-popup.refresh_popup"), this.getSiteData(), this.$parent = null !== (l = null === (c = null === (s = this.siteData) || void 0 === s ? void 0 : s.getCustomParent) || void 0 === c ? void 0 : c.call(s, this.$node)) && void 0 !== l ? l : Object(domHelper.d)(this.$node);
      var w2 = (Object(domHelper.m)(this.$node) || (null === (h = null === (f = this.getSiteData()) || void 0 === f ? void 0 : f.isValidVideoNode) || void 0 === h ? void 0 : h.call(f, this.$node))) && settingsManager.a.get("detach_enabled") && !urlMatcher.a.checkRegex(location.href, "disallow-pip");
      this.isImage = this.$node.hasAttribute("savior-scanned-img");
      var A2 = { behavior: new WidgetContainer(domConstants.h.Savior, this, void 0, { hasImage: this.isImage }), toggleLight: new CinemaModeComponent(domConstants.h.ToggleLightButton, this, { isLightOff: this.sharedState.isLightOffGlobal, isHidden: this.isImage }), otherFeature: new DownloadBtnComp(domConstants.h.OtherFeatureButton, this), download: new MainDownloadComponent(domConstants.h.DownloadButton, this), skipVideo: new SkipVideoAdComponent(domConstants.h.SkipVideoButton, this, { isHidden: this.$node.hasAttribute("savior-scanned-img") }) };
      SaviorWidgetController.siteDismissed() ? (null === (p = this.getComponent("behavior")) || void 0 === p || p.destroy(), null === (v = this.getComponent("otherFeature")) || void 0 === v || v.destroy(), null === (m = this.getComponent("toggleLight")) || void 0 === m || m.destroy(), null === (y = this.getComponent("pin")) || void 0 === y || y.destroy(), null === (g2 = this.getComponent("transferMobile")) || void 0 === g2 || g2.destroy()) : A2.transferMobile = new TransferComp(domConstants.h.TransferMobileWrapper, this), w2 && (A2.pin = new PipComponent(domConstants.h.PinButton, this, { opening: document.pictureInPictureElement == this.$node })), widgetConfigOptions && (A2.clientChooser = new SettingsMenuComp(domConstants.h.ChangeYoutubeClientButton, this)), super.components = A2, this.fetchDownloads = this.fetchDownloads.bind(this), this.onForceUpdate = this.onForceUpdate.bind(this), this.runChilds((t2) => {
        t2.bind();
      }), this.isWindow = "Windows" === (null === (b2 = window.navigator.userAgentData) || void 0 === b2 ? void 0 : b2.platform), this.state = {}, EE.on("widget.forceUpdate", this.onForceUpdate), settingsManager.a.has("image_download_enabled") && "IMG" == this.$node.nodeName && (this.autoHideWidget = !settingsManager.a.get("image_download_enabled")), this.shouldHideWidget(true) || Object(coreUtils.sendMessage)({ type: saviorConstants.b.GET_ABTEST, testName: "skipVideo" }).then((t2) => {
        this.isSkipVideoEnabled = false, this.render(), super._bindListener(this.$node);
      });
    }
    firstPaint(t) {
      var e, r2, a = (Object(domHelper.m)(this.$node) || (null === (r2 = null === (e = this.getSiteData()) || void 0 === e ? void 0 : e.isValidVideoNode) || void 0 === r2 ? void 0 : r2.call(e, this.$node))) && settingsManager.a.get("detach_enabled") && !urlMatcher.a.checkRegex(location.href, "disallow-pip");
      this.$el.innerHTML = lodash.a.render(settingsManager.a.get("template-widget"), { i18n_close_tooltip: Object(coreUtils.i18n)("widget_hide_panel"), i18n_download_tooltip: Object(coreUtils.i18n)("widget_no_media_found"), i18n_download_box_header_title: Object(coreUtils.i18n)("widget_download_box_title"), i18n_no_media_found_widget: Object(coreUtils.i18n)("widget_no_media_found"), i18n_downloading_media: Object(coreUtils.i18n)("widget_downloading_media"), i18n_mobile_button: Object(coreUtils.i18n)("mobile_button"), i18n_pip_button: Object(coreUtils.i18n)("popup_pip_button"), i18n_switch: Object(coreUtils.i18n)(this.sharedState.isLightOffGlobal ? "turn_on_light" : "turn_off_light"), i18n_other_feature: Object(coreUtils.i18n)("widget_other_options"), i18n_hide_panel: Object(coreUtils.i18n)("widget_hide_panel"), i18n_hide_panel_on_site: Object(coreUtils.i18n)("widget_hide_panel_on_site", location.host), i18n_go_to_settings: Object(coreUtils.i18n)("widget_go_to_settings"), has_pip: a, no_downloads: true, has_mobile: false, has_client_chooser: widgetConfigOptions, youtube_clients: widgetConfigOptions ? Object.keys(settingsModule90.a) : void 0, current_youtube_client: parserModule89.a.client, has_skip_video: this.isSkipVideoEnabled, skip_video_title: Object(coreUtils.i18n)("skip_video"), skip_video_description: Object(coreUtils.i18n)("skip_video_description") });
    }
    onForceUpdate() {
      LazyMediaTracker.getMediaObjectsFromNode(this.$node).then((t) => {
        var e;
        this.$el.innerHTML = "", t = enrichMediaMeta((null == t ? void 0 : t.filter((t2) => !!t2)) || []), this.setState({}), null === (e = this.getComponent("download")) || void 0 === e || e.setState({ mediaObjects: t, downloads: null, opening: false });
      });
    }
    updateParent() {
      super.runChilds((t) => {
        var e;
        null === (e = t.updateParent) || void 0 === e || e.call(t);
      });
    }
    getSiteData() {
      return this.siteData || (this.siteData = Object(siteDataExtractor.getSiteData)(location.host)), this.siteData;
    }
    activeOmnibox(t) {
      SaviorWidgetController.toggleOmniBox(this, t);
    }
    shouldHideWidget() {
      var t, e, r2, i, a, s, u, c, l, f, d, h, p, v = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (this.autoHideWidget) return true;
      if (Object(domHelper.h)()) return true;
      if (urlMatcher.a.check(this.$node, "hide-widget")) return true;
      if (this.isImage && !(null === (e = null === (t = this.getSiteData()) || void 0 === t ? void 0 : t.shouldShowWidgetForImage) || void 0 === e ? void 0 : e.call(t, this.$node))) return true;
      this.$parent || (this.$parent = null !== (a = null === (i = null === (r2 = this.siteData) || void 0 === r2 ? void 0 : r2.getCustomParent) || void 0 === i ? void 0 : i.call(r2, this.$node)) && void 0 !== a ? a : Object(domHelper.d)(this.$node));
      var m = urlMatcher.a.shouldWidgetAttachToParentNode(location.hostname) || (null === (u = null === (s = this.getSiteData()) || void 0 === s ? void 0 : s.shouldWidgetAttachToParentNode) || void 0 === u ? void 0 : u.call(s, this.$node)) ? this.$parent : this.$node, y = m.offsetWidth, g2 = false;
      m.offsetHeight > y && y < domConstants.b && (this.getComponent("behavior").isVertical = true, g2 = true);
      var b2 = this.$node;
      "none" == this.$parent.style.display && (b2 = this.$parent.parentElement || this.$parent);
      var w2 = getComputedStyle(b2);
      0 == y && (y = parseInt(w2.width));
      var A2 = domConstants.a.find((t2) => location.href.match(t2.rx));
      if (A2 || this.getSiteData()) {
        var _2 = "number" == typeof (null == A2 ? void 0 : A2.width) ? A2.width : domConstants.b;
        if (A2) {
          if ((null == A2 ? void 0 : A2.closest) && this.$node.closest(A2.closest)) return true;
          if (null === (c = null == A2 ? void 0 : A2.isMiniPlayerNode) || void 0 === c ? void 0 : c.call(A2, this.$node, this.$parent)) return true;
          if (null === (l = null == A2 ? void 0 : A2.notMiniPlayerNode) || void 0 === l ? void 0 : l.call(A2, this.$node, this.$parent)) return false;
        }
        if (null === (d = null === (f = this.getSiteData()) || void 0 === f ? void 0 : f.isMiniPlayerNode) || void 0 === d ? void 0 : d.call(f, this.$node, this.$parent)) return true;
        if (null === (p = null === (h = this.getSiteData()) || void 0 === h ? void 0 : h.notMiniPlayerNode) || void 0 === p ? void 0 : p.call(h, this.$node, this.$parent)) return false;
        if (!g2 && y < _2 && !v) return true;
      }
      return false;
    }
    destroy() {
      EE.off("widget.forceUpdate", this.onForceUpdate), super._destroy();
    }
    getDownloadState() {
      var t = this.getComponent("download");
      return (null == t ? void 0 : t.state) || null;
    }
    getDownloads() {
      var t;
      return (null === (t = this.getDownloadState()) || void 0 === t ? void 0 : t.downloads) || [];
    }
    getMediaObjects() {
      var t;
      return (null === (t = this.getDownloadState()) || void 0 === t ? void 0 : t.mediaObjects) || [];
    }
    fetchDownloads(t) {
      return Vt(this, void 0, void 0, Qt().m((function e() {
        var r2;
        return Qt().w((function(e2) {
          for (; ; ) switch (e2.n) {
            case 0:
              if (!(r2 = this.getComponent("download"))) {
                e2.n = 1;
                break;
              }
              return e2.a(2, null == r2 ? void 0 : r2.fetchDownloads(t));
            case 1:
              return e2.a(2);
          }
        }), e, this);
      })));
    }
    createPendingDownloads() {
      var t, e, r2 = getMediaProvider(), n = (null === (t = null == r2 ? void 0 : r2.getPreviewFromNode) || void 0 === t ? void 0 : t.call(r2, this.$node)) || null, o = this.getMediaObjects(), a = (null == o ? void 0 : o[0]) || n;
      if (!a) return [];
      var s = (null == n ? void 0 : n.id) || (null === (e = null == r2 ? void 0 : r2.getItemIdFromNode) || void 0 === e ? void 0 : e.call(r2, this.$node));
      if (n) return [formatLazyItem(n, { widgetId: this.id, lazyItemId: s })];
      var u = getBestMediaTitle(a, this.$node), c = a.thumbnail || Object(coreUtils.getVideoPoster)(this.$node) || void 0, l = "string" == typeof a.url ? a.url : location.href;
      return [formatLazyItem({ id: String(a.id || "pending-" + this.id), url: l, type: a.type || "video", ext: a.ext || "mp4", exts: a.exts || ["mp4"], title: u, thumbnail: c }, { widgetId: this.id, lazyItemId: s })];
    }
    setState(t) {
      this.state = Object.assign(Object.assign({}, this.state), t), this.render();
    }
  }
  function initSaviorWidget() {
    SaviorWidgetController = { $host: null, $body: null, $toast: null, nodeWidgetMap: /* @__PURE__ */ new Map(), widget: null, widgetCount: 0, sharedState: { isLightOffGlobal: false, viewedWidgetId: null, isDismissed: false, onboardingNewMPClient: null }, toasts: [], widgetDownloadsMap: /* @__PURE__ */ new Map(), mountDirectly: urlMatcher.a.check(location.host, "mount-directly"), load() {
      var t, e = Object(domHelper.c)();
      this.$host = e;
      var r2 = Object(domHelper.b)(e), o = (null === (t = chrome.runtime.getManifest().web_accessible_resources) || void 0 === t ? void 0 : t[0]).resources || chrome.runtime.getManifest().web_accessible_resources || [];
      o.forEach((function(t2) {
        if (typeof t2 === "string" && t2.endsWith(".css")) {
          _injectSaviorCss(r2, t2);
        }
      }));
      var s = Object(domHelper.a)("div", "body");
      this.$body = s;
      var u = Object(domHelper.a)("div", "turn-lights-overlay");
      s.appendChild(u), this.$toast = Object(domHelper.a)("toasts"), this.$toast.id = "toasts-container", s.appendChild(this.$toast), r2.appendChild(s), document.documentElement.appendChild(e);
      var c = Object(domHelper.a)("style");
      c.innerHTML = overlayCss.a, document.head.appendChild(c), this.sharedState.isDismissed = this.siteDismissed(), EE.on("widget.node-changed", this.handleNodeChanged.bind(this)), EE.on("widget.get_shadow_dom", () => {
        EE.emit("widget.shadow_dom_result", this.$body);
      }), EE.on("widget.request_matched", (t2) => {
        LazyMediaTracker.processRequest(t2) && EE.emit("widget.updateMedia");
      }), EE.on("location.href.changed", () => {
        LazyMediaTracker.refreshIds();
      }), EE.on("widget.toast.open", (t2) => {
        var e2 = new ToastNotification({ message: t2.message, closable: t2.closable, duration: t2.duration, onAttached: t2.onAttached, onDetached: (t3) => {
          var e3 = this.toasts.findIndex((e4) => e4.id == t3);
          this.toasts.splice(e3, 1);
        } });
        this.toasts.push(e2), this.$toast.appendChild(e2.attach());
      });
    }, updateSharedState(t) {
      for (var e in t) {
        var r2 = e;
        this.sharedState[r2] = t[r2];
      }
      var n, i = qt(this.nodeWidgetMap.values());
      try {
        for (i.s(); !(n = i.n()).done; ) {
          var o = n.value;
          t.hasOwnProperty("isLightOffGlobal") && o.getComponent("toggleLight").setState({ isLightOff: t.isLightOffGlobal });
        }
      } catch (t2) {
        i.e(t2);
      } finally {
        i.f();
      }
    }, dismissAllWidget() {
      this.updateSharedState({ isDismissed: true });
      var t = settingsManager.a.get(saviorConstants.o) || [];
      t.push(location.host.replace("www.", "")), settingsManager.a.set(saviorConstants.o, t);
      var e, r2 = qt(this.nodeWidgetMap.values());
      try {
        for (r2.s(); !(e = r2.n()).done; ) {
          e.value.destroy();
        }
      } catch (t2) {
        r2.e(t2);
      } finally {
        r2.f();
      }
    }, siteDismissed() {
      var t = settingsManager.a.get(saviorConstants.o);
      return !(!t || !t.length) && t.includes(location.hostname.replace("www.", ""));
    }, handleNodeChanged(t) {
      var e, r2, n, i = qt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []);
      try {
        for (i.s(); !(n = i.n()).done; ) {
          var o = n.value, a = this.nodeWidgetMap.get(o);
          (null === (r2 = null === (e = this.widget) || void 0 === e ? void 0 : e.$parent) || void 0 === r2 ? void 0 : r2.contains(null == a ? void 0 : a.$parent)) && this.unmountCurrentWidget(), null == a || a.destroy(), this.nodeWidgetMap.delete(o);
        }
      } catch (t2) {
        i.e(t2);
      } finally {
        i.f();
      }
      var s, u = qt(t);
      try {
        for (u.s(); !(s = u.n()).done; ) {
          var c = s.value;
          this.nodeWidgetMap.get(c) || (this.widgetCount++, this.nodeWidgetMap.set(c, new SaviorVideoWidget(this.widgetCount, c, this.sharedState, this.updateSharedState.bind(this))));
        }
      } catch (t2) {
        u.e(t2);
      } finally {
        u.f();
      }
      clearTimeout(this._timeoutCleanup), this._timeoutCleanup = setTimeout(() => {
        this.nodeWidgetMap.forEach((t2, e2) => {
          e2.hasAttribute("savior-scanned-img") && e2.getAttribute("savior-scanned-img") === location.href || e2.isConnected || (this.nodeWidgetMap.delete(e2), t2.destroy());
        });
      }, 42);
    }, mountWidget(t) {
      var e, r2, i, o, a, s, u, c, l, f, d, h, p, v;
      if (!(null === (r2 = null === (e = this.widget) || void 0 === e ? void 0 : e.$parent) || void 0 === r2 ? void 0 : r2.contains(t.$node)) && !this.sharedState.isDismissed) {
        if (this.unmountCurrentWidget(), this.widget = t, this.mountDirectly) {
          var m = Object(domHelper.a)("style"), y = (null === (i = chrome.runtime.getManifest().web_accessible_resources) || void 0 === i ? void 0 : i[0]).resources || chrome.runtime.getManifest().web_accessible_resources || [];
          m.innerHTML = '\n					:not(:defined){display:flex;}\n					.info-ext{max-width:100px;overflow:hidden;text-overflow:ellipsis;}\n					dropdown-box-body{margin:auto;width:100%;}\n					panel[value="loading"]{margin:auto;}\n					.download-box dropdown-box-header img{width:auto}\n				', null === (a = null === (o = this.widget) || void 0 === o ? void 0 : o.$parent) || void 0 === a || (a.appendChild(m), y.forEach((function(t2) {
            if (typeof t2 === "string" && t2.endsWith(".css")) {
              _injectSaviorCss(a, t2);
            }
          }))), null === (u = null === (s = this.widget) || void 0 === s ? void 0 : s.$parent) || void 0 === u || u.appendChild(this.widget.$el);
        } else null === (c = this.$body) || void 0 === c || c.appendChild(this.widget.$el);
        window.location.host.match(/youtube\.com/i) && (Object(domHelper.h)() ? null === (d = null === (f = null === (l = this.widget) || void 0 === l ? void 0 : l.$el) || void 0 === f ? void 0 : f.parentElement) || void 0 === d || d.setAttribute("hidden", "true") : null === (v = null === (p = null === (h = this.widget) || void 0 === h ? void 0 : h.$el) || void 0 === p ? void 0 : p.parentElement) || void 0 === v || v.removeAttribute("hidden"));
      }
    }, unmountCurrentWidget() {
      this.widget && (this.widget.$el.remove(), this.widget = null);
    }, getAllDownloads(t) {
      return Vt(this, void 0, void 0, Qt().m((function e() {
        var r2, n, o, a, s, u, c, l, f;
        return Qt().w((function(e2) {
          for (; ; ) switch (e2.n) {
            case 0:
              if (r2 = false !== (null == t ? void 0 : t.resolveQuality), n = Array.from(this.nodeWidgetMap.values()), o = getMediaProvider(), r2 || !o) {
                e2.n = 1;
                break;
              }
              if (!(a = o.collectPendingItems()).length) {
                e2.n = 1;
                break;
              }
              return e2.a(2, a.map((t2) => {
                var e3, r3, n2, i, a2, s2 = qt(this.nodeWidgetMap.entries());
                try {
                  for (s2.s(); !(a2 = s2.n()).done; ) {
                    var u2 = destructureArray(a2.value, 2), c2 = u2[0], l2 = u2[1], f2 = null === (e3 = o.getItemIdFromNode) || void 0 === e3 ? void 0 : e3.call(o, c2);
                    if (f2 && f2 === t2.id) {
                      i = l2.id;
                      break;
                    }
                    var d = null === (r3 = o.findItemRoot) || void 0 === r3 ? void 0 : r3.call(o, c2);
                    if (d && (null === (n2 = o.getItemIdFromNode) || void 0 === n2 ? void 0 : n2.call(o, d)) === t2.id) {
                      i = l2.id;
                      break;
                    }
                  }
                } catch (t3) {
                  s2.e(t3);
                } finally {
                  s2.f();
                }
                return formatLazyItem(t2, { widgetId: i, lazyItemId: t2.id });
              }));
            case 1:
              if (!r2) {
                e2.n = 3;
                break;
              }
              return e2.n = 2, Promise.allSettled(n.map((t2) => t2.fetchDownloads()));
            case 2:
              return e2.a(2, Object(coreUtils.flatten)(n.map((t2) => {
                var e3;
                return normalizeItems(null !== (e3 = null == t2 ? void 0 : t2.getDownloads()) && void 0 !== e3 ? e3 : [], { widgetId: t2.id });
              })));
            case 3:
              s = [], u = 0, c = n;
            case 4:
              if (!(u < c.length)) {
                e2.n = 7;
                break;
              }
              if (l = c[u], !(null == (f = l.getDownloads()) ? void 0 : f.length)) {
                e2.n = 5;
                break;
              }
              return s.push(...normalizeItems(f, { widgetId: l.id })), e2.a(3, 6);
            case 5:
              s.push(...l.createPendingDownloads());
            case 6:
              u++, e2.n = 4;
              break;
            case 7:
              return e2.a(2, s);
          }
        }), e, this);
      })));
    }, resolveDownloadsForWidget(t) {
      var e, r2;
      return Vt(this, void 0, void 0, Qt().m((function domHelper2() {
        var i, o, a, s, u, c, l, f, d;
        return Qt().w((function(n) {
          for (; ; ) switch (n.n) {
            case 0:
              if (i = Array.from(this.nodeWidgetMap.values()), o = i.find((e2) => e2.id === t)) {
                n.n = 1;
                break;
              }
              return n.a(2, []);
            case 1:
              if (a = getMediaProvider(), s = !!(null === (e = null == a ? void 0 : a.findItemRoot) || void 0 === e ? void 0 : e.call(a, o.$node)), !(a && s && a.resolveItemFromNode)) {
                n.n = 4;
                break;
              }
              return n.n = 2, a.resolveItemFromNode(o.$node);
            case 2:
              if (u = n.v, c = o.getComponent("download"), u.length) {
                n.n = 3;
                break;
              }
              return null == c || c.setState({ downloads: [], isGettingDownloads: false }), n.a(2, []);
            case 3:
              return l = null === (r2 = a.getItemIdFromNode) || void 0 === r2 ? void 0 : r2.call(a, o.$node), f = normalizeItems(u, { widgetId: o.id, lazyItemId: l }), null == c || c.setState({ mediaObjects: u, downloads: f, isGettingDownloads: false }), n.a(2, f);
            case 4:
              return n.n = 5, o.fetchDownloads();
            case 5:
              return d = o.getDownloads() || [], n.a(2, normalizeItems(d, { widgetId: o.id }));
          }
        }), domHelper2, this);
      })));
    }, resolveDownloadsForLazyItem(t) {
      return Vt(this, void 0, void 0, Qt().m((function e() {
        var r2, n, i, o;
        return Qt().w((function(e2) {
          for (; ; ) switch (e2.n) {
            case 0:
              if (r2 = getMediaProvider()) {
                e2.n = 1;
                break;
              }
              return e2.a(2, []);
            case 1:
              if (n = Array.from(this.nodeWidgetMap.values()), !(i = n.find((e3) => {
                var n2;
                return (null === (n2 = r2.getItemIdFromNode) || void 0 === n2 ? void 0 : n2.call(r2, e3.$node)) === t;
              }))) {
                e2.n = 2;
                break;
              }
              return e2.a(2, this.resolveDownloadsForWidget(i.id));
            case 2:
              return e2.n = 3, r2.resolveItemById(t);
            case 3:
              if ((o = e2.v).length) {
                e2.n = 4;
                break;
              }
              return e2.a(2, []);
            case 4:
              return e2.a(2, normalizeItems(o, { lazyItemId: t }));
          }
        }), e, this);
      })));
    }, toggleOmniBox(t, e) {
      return Vt(this, void 0, void 0, Qt().m((function r2() {
        return Qt().w((function(r3) {
          for (; ; ) switch (r3.n) {
            case 0:
              if (this.widgetDownloadsMap.set(t, e || []), !(Array.from(this.widgetDownloadsMap.entries()).reduce((t2, e2) => {
                var r4 = destructureArray(e2, 2)[1];
                return t2 += (null == r4 ? void 0 : r4.length) || 0;
              }, 0) > 0)) {
                r3.n = 1;
                break;
              }
              return EE.emit("message.background.send", { type: "active_sidepanel_onboard" }), EE.emit("message.background.send", { type: "active_omnibox" }), r3.a(2, true);
            case 1:
              return EE.emit("message.background.send", { type: "deactive_omnibox" }), r3.a(2, false);
          }
        }), r2, this);
      })));
    } }, EE.on("widget.load", () => SaviorWidgetController.load()), EE.on("widget.downloads.get", (t) => Vt(this, void 0, void 0, Qt().m((function e() {
      var r2, n, i;
      return Qt().w((function(e2) {
        for (; ; ) switch (e2.n) {
          case 0:
            return r2 = EE, e2.n = 1, SaviorWidgetController.getAllDownloads({ resolveQuality: !(null == t ? void 0 : t.onDemand) });
          case 1:
            n = e2.v, i = location.href, r2.emit.call(r2, "widget.downloads.get.success", { downloads: n, href: i });
          case 2:
            return e2.a(2);
        }
      }), e);
    })))), EE.on("widget.downloads.resolveQuality", (t) => Vt(this, void 0, void 0, Qt().m((function e() {
      var r2;
      return Qt().w((function(e2) {
        for (; ; ) switch (e2.p = e2.n) {
          case 0:
            if (e2.p = 0, r2 = [], null == t.widgetId) {
              e2.n = 2;
              break;
            }
            return e2.n = 1, SaviorWidgetController.resolveDownloadsForWidget(t.widgetId);
          case 1:
            r2 = e2.v, e2.n = 4;
            break;
          case 2:
            if (!t.lazyItemId) {
              e2.n = 4;
              break;
            }
            return e2.n = 3, SaviorWidgetController.resolveDownloadsForLazyItem(t.lazyItemId);
          case 3:
            r2 = e2.v;
          case 4:
            EE.emit("widget.downloads.resolveQuality.success", { widgetId: t.widgetId, lazyItemId: t.lazyItemId, requestId: t.requestId, downloads: r2, href: location.href, error: !(null == r2 ? void 0 : r2.length) }), e2.n = 6;
            break;
          case 5:
            e2.p = 5, e2.v, EE.emit("widget.downloads.resolveQuality.success", { widgetId: t.widgetId, lazyItemId: t.lazyItemId, requestId: t.requestId, downloads: [], href: location.href, error: true });
          case 6:
            return e2.a(2);
        }
      }), e, null, [[0, 5]]);
    })))), EE.on("widget-controller.destroy", () => {
      SaviorWidgetController.unmountCurrentWidget();
    });
  }
  var yaaInstance = void 0;
  EE.on("widget.onboard_yaa.activate", () => {
    true ? Object(coreUtils.sendMessage)({ type: saviorConstants.b.TURN_OFF_ADBLOCK_ON_YOUTUBE }) : YoutubeAdblockOnboarder.shouldInit() && (yaaInstance || (yaaInstance = new YoutubeAdblockOnboarder(domConstants.h.OnboardYoutubeAntiAdblocker)));
  }), widgetConfig.a.DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER || EE.on("widget.onboard_yaa.deactivate", () => {
    yaaInstance && (yaaInstance.destroy(), yaaInstance = void 0);
  });
}
