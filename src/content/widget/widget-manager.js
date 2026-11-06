// Module 541 [widget] - Savior Widget Manager
export default function(module, exports, r) {
  "use strict";
  r.d(exports, "a", () => SaviorWidgetController);
  r.d(exports, "b", () => initSaviorWidget);
  r(743), r(759);
  var domHelper = r(12), coreUtils = r(0), urlMatcher = r(33), lodashPkg = r(39), lodash = r.n(lodashPkg), settingsManager = r(7), overlayCssPkg = r(138), overlayCss = r.n(overlayCssPkg), urlUtils = r(3), saviorConstants = r(1), filenameSanitizer = r(80), qualityHelper = r(9), eventBus = r(6), siteDataExtractor = r(92), detectorHelper = r(14);
  function g(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var wrapFn = function(fn) { return fn; }, markFn = function(fn) { return fn; }; (g=function(){return{w:wrapFn,m:markFn}})()}
  function b(el, ev, r2, nd) {
    var idx = Object.defineProperty;
    try {
      idx({}, "", {});
    } catch (t2) {
      idx = 0;
    }
    (b = function(t2, e2, r3, n2) {
      function opt(e3, r4) {
        b(t2, e3, (function(t3) {
          return this._invoke(e3, r4, t3);
        }));
      }
      e2 ? idx ? idx(t2, e2, { value: r3, enumerable: !n2, configurable: !n2, writable: !n2 }) : t2[e2] = r3 : (opt("next", 0), opt("throw", 1), opt("return", 2));
    })(el, ev, r2, nd);
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
  function A(el, e) {
    (null == e || e > el.length) && (e = el.length);
    for (var r2 = 0, nd = Array(e); r2 < e; r2++) nd[r2] = el[r2];
    return nd;
  }
  var _ = function(el, ev, r2, nd) {
    return new (r2 || (r2 = Promise))((function(idx, opt) {
      function arg(t2) {
        try {
          url(nd.next(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function st(t2) {
        try {
          url(nd.throw(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function url(t2) {
        var e2;
        t2.done ? idx(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(arg, st);
      }
      url((nd = nd.apply(el, ev || [])).next());
    }));
  };
  var mediaNameCache = {}, MediaHelper = { makeParams: function(el) {
    var ev = {};
    if (el.params) for (var r2 in el.params) ev[r2] = el.params[r2];
    return ev;
  }, makeUrl: function(el) {
    return Object(saviorConstants.B)(el.ext) || "mpd" === el.ext ? el.url : null;
  }, makeMethod: function(el) {
    return el.requestMethod || "GET";
  }, makeHeaders: function(el) {
    return document.location.host.includes("phim7z.tv") && el.url.includes("proxy.php") ? { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0", Accept: "application/json, text/javascript, */*; q=0.01", "Accept-Language": "en-US,en;q=0.5", "X-Requested-With": "XMLHttpRequest" } : el.headers;
  }, makeCredentials: function(el) {
    return el.includeCredentials;
  }, parse: function(el, e) {
    var r2, nd, opt, arg;
    return _(this, void 0, void 0, g().m((function lodash2() {
      var u, cfg, len, hdr, b2, A2, _2, size, obj, pos, key;
      return g().w((function(s) {
        for (; ; ) switch (s.p = s.n) {
          case 0:
            if (u = el, "string" == typeof el && (u = Object(urlUtils.f)(el)), (null === (nd = null === (r2 = u.filename) || void 0 === r2 ? void 0 : r2.trim()) || void 0 === nd ? void 0 : nd.length) || (u.filename = "noname"), mediaNameCache[u.url] && (u.fixName = mediaNameCache[u.url]), !(cfg = Object(siteDataExtractor.getSiteData)(location.host, u.cacheUrl)) || !cfg.parse) {
              s.n = 10;
              break;
            }
            return len = (null === (arg = null === (opt = cfg.parse.sources) || void 0 === opt ? void 0 : opt.find((t2) => t2.checkSource(u))) || void 0 === arg ? void 0 : arg.parse) || cfg.parse.default, s.n = 1, null == len ? void 0 : len({ media: u, response: e });
          case 1:
            if (!(hdr = s.v)) {
              s.n = 10;
              break;
            }
            b2 = w(hdr), s.p = 2, b2.s();
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
            s.p = 7, pos = s.v, b2.e(pos);
          case 8:
            return s.p = 8, b2.f(), s.f(8);
          case 9:
            return s.a(2, hdr);
          case 10:
            if ("object" != typeof (size = u.url)) {
              s.n = 11;
              break;
            }
            return s.a(2, [u]);
          case 11:
            if (size && size.includes("videoplayback") && size.includes("mp4") && (u.ext = "mp4", u.skipReferrer = true), "mpd" != u.ext) {
              s.n = 16;
              break;
            }
            if (obj = u.fixName || u.filename || document.title, s.p = 12, !u.realRes) {
              s.n = 13;
              break;
            }
            return s.a(2, Object(detectorHelper.b)(u.realRes, obj, u.host, u.url));
          case 13:
            if (!e) {
              s.n = 14;
              break;
            }
            return s.a(2, Object(detectorHelper.b)(e, obj, u.host, u.url));
          case 14:
            s.n = 16;
            break;
          case 15:
            s.p = 15, key = s.v, Object(coreUtils.devLog)(key);
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
    return Promise.all([this.makeMethod(t), this.makeUrl(t), this.makeParams(t), this.makeHeaders(t), this.makeCredentials(t)]).then((e) => e[1] ? Object(coreUtils.send)(e[0], e[1], e[2], e[3], e[4], t.paramType) : Promise.reject()).then((ev) => {
      ev.redirected && !t.skipRedirect && (t.url = ev.url);
      var r2 = this.parse(t, ev.responseText);
      if (!r2) return Promise.reject();
      var nd = r2;
      return Array.isArray(r2) || (nd = [r2]), Promise.all(nd);
    }).catch(() => {
      try {
        return Promise.resolve(this.parse(t));
      } catch (t2) {
        return [];
      }
    });
  } };
  var LazyMediaTracker = { _ids: [], getMediaObjectsFromNode(t) {
    var ev, r2, nd, opt, arg, st, url;
    return _(this, void 0, void 0, g().m((function overlayCssPkg2() {
      var len, d, v, ctx, b2, w2, A2, _2, E, size, O, pos, key;
      return g().w((function(c) {
        for (; ; ) switch (c.n) {
          case 0:
            return len = location.host, null == (d = t.src || t.href || (null === (ev = t.querySelector("source")) || void 0 === ev ? void 0 : ev.src)) || d.replace(/^\/+/, ""), (null == d ? void 0 : d.includes("blob:")) && (d = (null === (r2 = t.querySelector("source")) || void 0 === r2 ? void 0 : r2.src) || d), v = Object(siteDataExtractor.getSiteData)(len, d), c.n = 1, null === (nd = null == v ? void 0 : v.beforeGetUrl) || void 0 === nd ? void 0 : nd.call(v);
          case 1:
            return ctx = t.hasAttribute("savior-scanned-img"), b2 = ctx ? null === (opt = null == v ? void 0 : v.imageUrls) || void 0 === opt ? void 0 : opt.find((e2) => e2.checkUrl({ url: d || "", node: t })) : (null === (arg = null == v ? void 0 : v.urls) || void 0 === arg ? void 0 : arg.find((e2) => e2.checkUrl({ url: d || "", node: t }))) || (null == v ? void 0 : v.default), c.n = 2, null === (st = null == b2 ? void 0 : b2.getUrl) || void 0 === st ? void 0 : st.call(b2, { url: d, node: t, ids: this._ids });
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
            if (!ctx) {
              c.n = 6;
              break;
            }
            return c.n = 5, Object(urlUtils.g)({ url: A2, node: t });
          case 5:
            return _2 = c.v, c.a(2, [_2]);
          case 6:
            return E = Object(urlUtils.f)(A2), size = Object(urlUtils.e)(A2), c.n = 7, null === (url = null == b2 ? void 0 : b2.mediaObjectChange) || void 0 === url ? void 0 : url.call(b2, { mediaObject: E, node: t });
          case 7:
            if (key = c.v) {
              c.n = 8;
              break;
            }
            key = size;
          case 8:
            if (size = key, E.thumbnail = Object(coreUtils.getVideoPoster)(t), E.type = size, Object(coreUtils.isValidData)(E)) {
              c.n = 9;
              break;
            }
            if (!this._ids.length && typeof window !== "undefined" && window.__saviorSniffedMedia && window.__saviorSniffedMedia.length) {
              try {
                this.processRequest(window.__saviorSniffedMedia);
              } catch (_3) {
              }
            }
            for (O = this._ids.length - 1; O >= 0; O--) pos = this._ids[O], (null == v ? void 0 : v.idsProcess) && v.idsProcess({ defaultIds: this._ids, id: pos, index: O });
            return c.a(2, this._ids);
          case 9:
            return E.filename = Object(filenameSanitizer.a)(E.filename), E.quality = qualityHelper.b.DEFAULT_QUALITY_TYPE, c.a(2, [E]);
        }
      }), overlayCssPkg2, this);
    })));
  }, getDownloadsByMediaObjects: (el) => Promise.all(el.map((t2) => {
    var ev = "object" != typeof t2.url ? `${location.href}_${t2.originalUrl || t2.url}` : `${location.href}_${t2.url.videoUrl}`;
    return t2.identifier && (ev += "_" + t2.identifier), t2.extraData ? t2.extraData.some((t3) => "tab_url" == t3.name) || t2.extraData.push({ name: "tab_url", value: location.href }) : t2.extraData = [{ name: "tab_url", value: location.href }], new Promise((t3, r2) => {
      var nd = Object(coreUtils.generateId)();
      function opt(e2, idx) {
        e2 === nd && (EE.off("media-provider.cache.hit", opt), EE.off("media-provider.cache.miss", opt), idx ? t3(idx) : r2());
      }
      EE.emit("media-provider.cache.get", nd, ev), EE.on("media-provider.cache.hit", opt), EE.on("media-provider.cache.miss", opt);
    }).catch(() => MediaHelper.getPlaylist(t2).then((r2) => {
      var nd, opt;
      return (null === (opt = null === (nd = Object(siteDataExtractor.getSiteData)(location.host)) || void 0 === nd ? void 0 : nd.shouldNotCacheParsedMedia) || void 0 === opt ? void 0 : opt.call(nd, { id: t2, medias: r2 })) || EE.emit("media-provider.cache.put", Object(coreUtils.generateId)(), ev, r2), r2;
    }).catch(() => (t2 && Object(coreUtils.logDownloadError)({ url: JSON.stringify(t2.url), referrer: document.referrer || JSON.stringify(t2.referrer) || location.host || t2.url, error: "Error: Cannot get media size or media url is wrong" }), [])));
  })).then((t2) => Object(coreUtils.flatten)(t2)).then((ev) => el.some((t2) => t2.noAudio) ? ev : ev.concat(Object(coreUtils.createMP3Resources)(ev))), processRequest(el) {
    var ev, r2 = this, nd = false, idx = w(el);
    try {
      var opt = function() {
        var t2 = ev.value, i2 = Object(siteDataExtractor.getSiteData)(location.host);
        return (null == i2 ? void 0 : i2.processRequestIds) && i2.processRequestIds(t2) ? (nd = true, 0) : Object(eventBus.f)(r2._ids) ? ((function(t3, e2) {
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
        })(t2, r2._ids) && Object(eventBus.g)(r2._ids, t2), nd = true, 0) : r2._ids.some((e2) => e2.url.includes(t2.url)) ? 0 : (nd = true, t2.filename = Object(filenameSanitizer.a)(t2.filename, document.title), void r2._ids.push(t2));
      };
      for (idx.s(); !(ev = idx.n()).done; ) opt();
    } catch (t2) {
      idx.e(t2);
    } finally {
      idx.f();
    }
    return nd;
  }, refreshIds() {
    this._ids = [];
  } };
  function getPageTitle() {
    var el, ev;
    return document.title || (null === (el = document.querySelector('meta[property="og:title"]')) || void 0 === el ? void 0 : el.content) || (null === (ev = document.querySelector('meta[name="twitter:title"]')) || void 0 === ev ? void 0 : ev.content) || "";
  }
  function getPageThumbnail() {
    var el, ev;
    return (null === (el = document.querySelector('meta[property="og:image"]')) || void 0 === el ? void 0 : el.content) || (null === (ev = document.querySelector('meta[name="twitter:image"]')) || void 0 === ev ? void 0 : ev.content) || void 0;
  }
  function enrichMediaMeta(el) {
    if (!(null == el ? void 0 : el.length)) return el || [];
    var ev = getPageTitle(), r2 = getPageThumbnail();
    return el.map((t2) => {
      var nd = t2.title || t2.filename || ev;
      return Object.assign(Object.assign({}, t2), { title: nd, filename: t2.filename || nd, thumbnail: t2.thumbnail || r2 });
    });
  }
  function getMediaProvider() {
    var el, ev, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.host, nd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href, idx = null === (el = Object(siteDataExtractor.getSiteData)(r2, nd)) || void 0 === el ? void 0 : el.lazyBulkDownload;
    if (null === (ev = null == idx ? void 0 : idx.isActive) || void 0 === ev ? void 0 : ev.call(idx)) return idx;
  }
  function formatLazyItem(t, e) {
    var r2 = (null == e ? void 0 : e.lazyItemId) || t.id, nd = t.title || getPageTitle(), opt = t.thumbnail || getPageThumbnail();
    return { id: t.id, url: t.url || location.href, type: t.type || "video", ext: t.ext || "mp4", exts: t.exts || ["mp4"], filename: nd, title: nd, thumbnail: opt, i18n_quality: Object(coreUtils.i18n)("sidepanel_quality_auto"), quality: void 0, widgetID: null == e ? void 0 : e.widgetId, _qualityPending: true, _sourceWidgetId: null == e ? void 0 : e.widgetId, _lazyItemId: r2 };
  }
  function normalizeItems(el, e) {
    return el.map((t2) => {
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
    set components(el) {
      this.constructed() || (this._components = el);
    }
    _bindListener(el) {
      this.runChilds((ev) => {
        ev.bindListener(el);
      });
    }
    _destroy() {
      this.runChilds((el) => {
        el.destroy();
      });
    }
    getComponent(el) {
      return this.components.hasOwnProperty(el) ? this.components[el] : null;
    }
    render() {
      var el;
      this.$el && ((null === (el = this.$el) || void 0 === el ? void 0 : el.innerHTML) || (this.firstPaint(this.$el), this.runChilds((t2) => {
        t2.firstPaint(this.$el);
      })), this.runChilds((t2) => t2.componentUpdate(this.$el)));
    }
    runChilds(el) {
      Object.values(this.components).forEach(el);
    }
  }
  class StateComponent extends CompositeComponent {
    constructor(el, ev, r2, nd) {
      super(), this.deps = /* @__PURE__ */ new Map();
      var idx = this.getDefaultState();
      this.previousState = void 0;
      var opt = this;
      this.state = new Proxy(Object.assign(Object.assign({}, idx), r2), { set(t2, e2, r3) {
        var n2 = opt.deps.get(e2);
        return t2[e2] = r3, null == n2 || n2.forEach((t3) => {
          null == t3 || t3(r3);
        }), Reflect.set(t2, e2, r3);
      } }), this.el = el, this.parent = ev, "object" == typeof nd && Object.keys(nd).forEach((t2) => {
        "state" != t2 && (this[t2] = nd[t2]);
      }), Reflect.defineProperty(this, "watch", { configurable: false, writable: false, value: this._watch });
    }
    defaultSetState(el) {
      var ev = this.componentShouldUpdate(el);
      return this.previousState = Object.assign({}, this.state), Object.keys(el).forEach((e2) => {
        this.state[e2] = el[e2];
      }), ev;
    }
    setState(el) {
      this.defaultSetState(el) && this.componentUpdate();
    }
    updateParent() {
    }
    componentShouldUpdate(el) {
      return Object.keys(el).some((ev) => el[ev] !== this.state[ev]);
    }
    componentUpdate(el) {
      this.componentWillUpdate(), this.render(el), this.componentDidUpdate();
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
    watch(el, ev) {
      this._watch(el, ev);
    }
    _watch(el, ev) {
      this.deps.has(el) ? this.deps.get(el).push(ev) : this.deps.set(el, [ev]);
    }
    unwatch(el, ev) {
      if (this.deps.has(el)) if ("all" != ev) {
        var r2 = this.deps.get(el).indexOf((t2) => t2 == ev);
        r2 > -1 && this.deps.get(el).splice(r2, 1);
      } else this.deps.delete(el);
    }
    nextTick(el) {
      Object(coreUtils.nextTick)(el);
    }
  }
  var pipSize, detectorLogger = r(5), pipDomModule = r(525);
  pipSize = { width: 640, height: 480 }, location.host.match(/^(?:[\w\d_-]+\.)*coccoc.com$/) && document.addEventListener("click", (function(t) {
    if (t.target && t.target.matches("a[x-coccoc-pip-url]")) {
      var ev, r2 = t.target, nd = r2.getAttribute("x-coccoc-pip-url"), opt = r2.getAttribute("x-coccoc-pip-size"), arg = r2.hasAttribute("x-coccoc-keep-size"), st = opt && /^(\d+)x(\d+)/.exec(opt), url = { url: nd, width: (ev = st ? { width: +st[1], height: +st[2] } : pipSize).width, height: ev.height };
      arg && (url.isAds = true), coreUtils.sendMessage({ type: saviorConstants.b.PIP.REQUEST, method: "pipUrl", params: url }), t.preventDefault(), t.stopPropagation();
    }
  }));
  var widgetConfig = r(11);
  var pipController = new class {
    constructor() {
      this.handlers = {}, this.pipDOM = new pipDomModule.a();
    }
    bindListener(el, ev, r2) {
      var n = (el || {}).node || el, opt = (t2) => {
        var arg = (t3) => {
          n.removeEventListener("enterpictureinpicture", opt), n.removeEventListener("leavepictureinpicture", arg), null == r2 || r2(t3), Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.ON.LEAVE, params: { src: n.src } });
        };
        n.addEventListener("leavepictureinpicture", arg, false), null == ev || ev(t2), Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.ON.ENTER, params: { src: n.src } });
      };
      n.addEventListener("enterpictureinpicture", opt, false);
    }
    detachPlayerOrNode(el) {
      var e = el.node, r2 = el.media, n = e;
      if (document.pictureInPictureEnabled && widgetConfig.a.NATIVE_PIP) if (n && "video" !== n.tagName.toLowerCase() && (n = n.querySelector("video")), n && "function" == typeof n.requestPictureInPicture) try {
        var o = n;
        n && this.bindListener(o, this.handlers.afterEnter, this.handlers.afterLeave), o.requestPictureInPicture().catch((t2) => {
          t2.toString().includes("disablePictureInPicture") ? (o.disablePictureInPicture = false, o.requestPictureInPicture()) : Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: o.src } });
        }), detectorLogger.a.log("Pip", detectorLogger.a.PIP_DETACH_CLICK);
        var arg = Object(urlUtils.c)(n.src);
        if (detectorLogger.a.log("RefrPin", arg), widgetConfig.a.CUSTOM_METRICS_JSON) {
          var st = { timestamp_ms: Date.now(), page_url: location.href };
          detectorLogger.a.log("recordCustomData", [{ key: "savior_pip_action", value: JSON.stringify(st) }]);
        }
      } catch (t2) {
        0, Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == e ? void 0 : e.src } });
      }
      else e && "OBJECT" === e.nodeName ? this.classicDetach({ node: e, media: r2 }) : this.recursivePip(e.contentDocument, r2, null == e ? void 0 : e.src);
      else this.recursivePip(e.contentDocument, r2, null == e ? void 0 : e.src);
    }
    recursivePip(el, ev, r2) {
      var nd = null == el ? void 0 : el.querySelector("video");
      try {
        if (!nd) throw new Error();
        this.detachPlayerOrNode({ node: nd, media: ev });
      } catch (n2) {
        var arg = Array.from((el || document).querySelectorAll("iframe")).filter((t2) => !urlMatcher.a.check(t2.src)), st = arg.find((t2) => t2.src == r2) || arg[0], url = st.contentDocument;
        if (url) return void this.recursivePip(url, ev, r2);
        Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: st.src } });
      }
    }
    exitPiP(el) {
      var ev = el.node;
      el.media;
      document.pictureInPictureElement && widgetConfig.a.NATIVE_PIP ? this.exitNative(ev) : Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == ev ? void 0 : ev.src, exit: true } });
    }
    exitNative(el, ev) {
      var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      try {
        r2.pictureInPictureElement && r2.exitPictureInPicture().catch((e2) => {
          Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: el.src, exit: true } });
        });
      } catch (e2) {
        0, Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == el ? void 0 : el.src, exit: true } });
      }
    }
    pipNative(t, ev) {
      if (!document.pictureInPictureEnabled) return;
      t && this.bindListener(t, this.handlers.afterEnter, this.handlers.afterLeave), null == t || t.requestPictureInPicture().catch((e2) => {
        e2.toString().includes("disablePictureInPicture") ? (t.disablePictureInPicture = false, t.requestPictureInPicture()) : Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: t.src } });
      }), detectorLogger.a.log("Pip", detectorLogger.a.PIP_DETACH_CLICK);
      var r2 = Object(urlUtils.c)(ev || (null == t ? void 0 : t.src));
      if (detectorLogger.a.log("RefrPin", r2), widgetConfig.a.CUSTOM_METRICS_JSON) {
        var nd = { timestamp_ms: Date.now(), page_url: location.href };
        detectorLogger.a.log("recordCustomData", [{ key: "savior_pip_action", value: JSON.stringify(nd) }]);
      }
    }
    classicDetach(el, ev) {
      var r2 = el.node, nd = el.media, o = this.pipDOM.pin(r2, ev) || {};
      (null == r2 ? void 0 : r2.src) && (o.url = r2.src), nd && (o.url = nd.url), o.url && !r2.data || (o.url = location.href), chrome.extension.inIncognitoContext && (o.incognito = true), Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.REQUEST, method: "detachTab", params: o });
    }
    restore() {
      this.pipDOM.restore();
    }
    get isPanelMode() {
      return this.pipDOM.isPanelMode;
    }
  }();
  EE.on("inner_pip", (el) => {
    el.exit ? (function t2(ev, r2) {
      var n = ev.querySelector("iframe");
      try {
        if (!ev.pictureInPictureElement) throw new Error();
        pipController.exitNative(n, r2.requestUrl, ev);
      } catch (e2) {
        if (!n) return;
        var opt = null == n ? void 0 : n.contentDocument;
        if (opt) return void t2(opt, r2);
        Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: null == n ? void 0 : n.src, exit: true } });
      }
    })(document, el) : (function t2(ev, r2) {
      var nd = ev.querySelector("video");
      try {
        if (!nd) throw new Error();
        pipController.pipNative(nd, r2.requestUrl);
      } catch (e2) {
        var opt = document.querySelector("iframe"), arg = opt.contentDocument;
        if (arg) return void t2(arg, r2);
        Object(coreUtils.sendMessage)({ type: saviorConstants.b.PIP.INNER, params: { url: opt.src } });
      }
    })(document, el);
  });
  var pipControllerRef = pipController;
  function G(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var wrapFn = function(fn) { return fn; }, markFn = function(fn) { return fn; }; (G=function(){return{w:wrapFn,m:markFn}})()}
  var Q = b;
  var z = function(el, ev, r2, nd) {
    return new (r2 || (r2 = Promise))((function(idx, opt) {
      function arg(t2) {
        try {
          url(nd.next(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function st(t2) {
        try {
          url(nd.throw(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function url(t2) {
        var e2;
        t2.done ? idx(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(arg, st);
      }
      url((nd = nd.apply(el, ev || [])).next());
    }));
  };
  class PipComponent extends StateComponent {
    getDefaultState() {
      return { opening: false, disabled: false };
    }
    bind() {
      this.openPiP = this.openPiP.bind(this), this.handlePipStateChange = this.handlePipStateChange.bind(this);
    }
    firstPaint(el) {
      var ev;
      this.$el = el.querySelector(this.el), null === (ev = this.$el) || void 0 === ev || ev.addEventListener("click", this.openPiP);
    }
    render(el) {
      this.$el && (Object(coreUtils.devLog)("PinButton rendered"), this.$el.setAttribute("data-svg-control", this.state.opening ? "on" : "off"), this.$el.querySelector(".tooltip").innerText = Object(coreUtils.i18n)(this.state.opening ? "popup_unpip_button" : "popup_pip_button"), this.state.opening ? this.$el.classList.add("is-active") : this.$el.classList.remove("is-active"), this.shouldDisable() ? this.$el.setAttribute("disabled", "") : this.$el.removeAttribute("disabled"));
    }
    bindListener(el) {
      if ("IFRAME" != el.tagName) return el.addEventListener("enterpictureinpicture", () => {
        this.setState({ opening: true });
      }), void el.addEventListener("leavepictureinpicture", () => {
        this.setState({ opening: false });
      });
      this.assignPiPHandler(), EE.on("pip.on_state_change", this.handlePipStateChange);
    }
    destroy() {
      EE.off("pip.on_state_change", this.handlePipStateChange);
    }
    handlePipStateChange(el) {
      "enterpictureinpicture" == el.name && this.setState({ opening: true }), "leavepictureinpicture" == el.name && this.setState({ opening: false });
    }
    assignPiPHandler() {
      pipControllerRef.handlers.afterEnter = () => {
        this.setState({ opening: true });
      }, pipControllerRef.handlers.afterLeave = () => {
        this.setState({ opening: false });
      };
    }
    openPiP() {
      var el, ev, r2, nd, idx, opt;
      return z(this, void 0, void 0, G().m((function lodashPkg2() {
        var st, url;
        return G().w((function(a) {
          for (; ; ) switch (a.n) {
            case 0:
              if (detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_DETACH), (st = "IFRAME" == this.parent.$node.tagName) && this.assignPiPHandler(), url = (null === (ev = null === (el = this.parent.getSiteData()) || void 0 === el ? void 0 : el.getCustomPipControlElement) || void 0 === ev ? void 0 : ev.call(el, this.parent.$node)) || this.parent.$node, this.state.opening) {
                a.n = 1;
                break;
              }
              pipControllerRef.detachPlayerOrNode({ node: url, media: null === (nd = null === (r2 = this.parent.getDownloadState()) || void 0 === r2 ? void 0 : r2.mediaObjects) || void 0 === nd ? void 0 : nd[0] }), a.n = 3;
              break;
            case 1:
              if (!st) {
                a.n = 2;
                break;
              }
              return this.setState({ opening: false }), pipControllerRef.exitPiP({ node: url, media: null === (opt = null === (idx = this.parent.getDownloadState()) || void 0 === idx ? void 0 : idx.mediaObjects) || void 0 === opt ? void 0 : opt[0] }), a.a(2);
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
      var el, ev, r2, idx;
      return this.state.disabled || !document.pictureInPictureEnabled || !(Object(domHelper.m)(this.parent.$node) || (null === (ev = null === (el = this.parent.getSiteData()) || void 0 === el ? void 0 : el.shouldDisablePip) || void 0 === ev ? void 0 : ev.call(el, this.parent.$node, this)) || (null === (idx = null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.isValidVideoNode) || void 0 === idx ? void 0 : idx.call(r2, this.parent.$node))) || !settingsManager.a.get("detach_enabled") || urlMatcher.a.checkRegex(location.href, "disallow-pip");
    }
  }
  var V = w;
  var $ = A;
  var resetClasses = ["--savior-overlay-transform-reset", "--savior-overlay-z-index-top", "--savior-overlay-position-relative", "--savior-overlay-overflow-hidden", "--savior-overlay-overflow-x-visible", "--savior-overlay-overflow-y-visible", "--savior-overlay-z-index-reset", "--savior-overlay-display-none", "--savior-overlay-clearfix", "--savior-overlay-reset-filter", "--savior-overlay-position-static"];
  class CinemaModeComponent extends StateComponent {
    constructor() {
      super(...arguments), this.previousZIndex = null;
    }
    getDefaultState() {
      return { isLightOff: false, isHidden: false };
    }
    bind() {
      this.toggleLight = this.toggleLight.bind(this), this.fullscreenChanged = this.fullscreenChanged.bind(this), this.$backupParent = null, this.$backdrop = Object(domHelper.a)("savior-backdrop", "--savior-backdrop"), this.$backdrop.setAttribute("data-widget-id", this.parent.id || "undefined"), this.mutationObserver = new MutationObserver((el, ev) => {
        var r2, nd = false, opt = Object(coreUtils.useDebounce)(() => {
          nd = true;
        }), arg = V(el);
        try {
          for (arg.s(); !(r2 = arg.n()).done; ) {
            var st = r2.value;
            if ("childList" !== st.type) {
              opt();
              break;
            }
            if ([...st.addedNodes, ...st.removedNodes].some((t2) => {
              var e2;
              return !(null === (e2 = t2.classList) || void 0 === e2 ? void 0 : e2.contains("--savior-backdrop"));
            })) {
              opt();
              break;
            }
          }
        } catch (t2) {
          arg.e(t2);
        } finally {
          arg.f();
        }
        nd && this.state.isLightOff && (this.render(), this.handleLightOnOff(true));
      });
    }
    firstPaint(el) {
      var ev;
      this.$el = el.querySelector(this.el), null === (ev = this.$el) || void 0 === ev || ev.addEventListener("click", this.toggleLight);
    }
    render(el) {
      var ev, r2, nd, opt;
      this.$el || (this.$el = Object(coreUtils.query)(this.el, this.parent.$el)), Object(coreUtils.devLog)("ToggleLightButton rendered"), this.$el && (this.$el.setAttribute("data-svg-control", this.state.isLightOff ? "on" : "off"), this.$el.querySelector(".tooltip, span").innerText = Object(coreUtils.i18n)(this.state.isLightOff ? "turn_on_light" : "turn_off_light"), this.state.isLightOff ? this.$el.classList.add("is-active") : this.$el.classList.remove("is-active")), this.shouldHide() ? null === (ev = this.$el) || void 0 === ev || ev.setAttribute("hidden", "") : null === (r2 = this.$el) || void 0 === r2 || r2.removeAttribute("hidden"), this.shouldDisable() ? null === (nd = this.$el) || void 0 === nd || nd.setAttribute("disabled", "") : null === (opt = this.$el) || void 0 === opt || opt.removeAttribute("disabled");
    }
    bindListener(el) {
      console.log("WidgetId", this.parent.id), this.$backdrop.addEventListener("click", () => {
        this.parent.updateSharedState({ viewedWidgetId: null, isLightOffGlobal: false }), this.setState({ isLightOff: false }), this.handleLightOnOff(false);
      }), document.addEventListener("webkitfullscreenchange", this.fullscreenChanged), document.addEventListener("fullscreenchange", this.fullscreenChanged);
    }
    destroy() {
      this.mutationObserver.disconnect(), this.setState({ isLightOff: false }), document.removeEventListener("webkitfullscreenchange", this.fullscreenChanged), document.removeEventListener("fullscreenchange", this.fullscreenChanged);
    }
    setState(t) {
      var ev, r2, nd;
      t.isLightOff || this.mutationObserver.disconnect(), t.hasOwnProperty("isLightOff") && t.isLightOff != this.parent.sharedState.isLightOffGlobal && (/youtube\.com\/((shorts\/.+)|(watch\?v=)|(watch?.+list=))/i.test(location.href) || location.href.includes("vnexpress.net") && "Shorts" == (null === (r2 = null === (ev = document.querySelector(".open")) || void 0 === ev ? void 0 : ev.querySelector("span")) || void 0 === r2 ? void 0 : r2.textContent) || location.href.includes("tiktok") || (this.parent.updateSharedState({ isLightOffGlobal: t.isLightOff }), this.handleLightOnOff(t.isLightOff || false)));
      var idx = this.defaultSetState(t), opt = null === (nd = this.parent.$parent) || void 0 === nd ? void 0 : nd.closest("body");
      if (this.state.isLightOff && opt) {
        this.mutationObserver.observe(opt, { attributes: false, childList: true, subtree: true });
      }
      idx && this.componentUpdate();
    }
    toggleLight() {
      if (!this.shouldDisable()) {
        var t = !this.state.isLightOff;
        detectorLogger.a.log("LightOff", t ? 1 : 0), this.parent.updateSharedState({ viewedWidgetId: t ? this.parent.id : null, isLightOffGlobal: t }), this.setState({ isLightOff: t }), this.handleLightOnOff(t);
      }
    }
    handleLightOnOff(el) {
      var ev, r2, nd, idx, opt, arg, st, u = null === (ev = this.parent.getSiteData()) || void 0 === ev ? void 0 : ev.toggleLight, cfg = /https:\/\/twitter\.com\/.*\/video\/[^\/]*/.test(location.href);
      if ("function" != typeof u) {
        var l = null == u ? void 0 : u.turnOn, f = null == u ? void 0 : u.turnOff, dom = null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.changeZIndexLightOff;
        if (el && this.parent.id == this.parent.sharedState.viewedWidgetId) {
          if ("function" == typeof f) return void f(this.parent);
          var hdr = null == f ? void 0 : f.parentUpdate, prop = null == f ? void 0 : f.updated;
          this.parent.$parent.classList.add("--savior-overlay-z-index-top"), dom && (this.previousZIndex = this.parent.$parent.style.zIndex, this.parent.$parent.style.setProperty("z-index", "2147483643", "important")), "static" === getComputedStyle(this.parent.$parent).position && (null === (nd = this.parent.$parent) || void 0 === nd || nd.classList.add("--savior-overlay-position-relative"));
          var v = null === (idx = this.parent.$parent) || void 0 === idx ? void 0 : idx.parentElement, msg = ["0px", "0px", "0px"];
          this.$backdrop.style.top = msg[0], this.$backdrop.style.left = msg[1], this.$backdrop.style.height = msg[2], null == v || v.prepend(this.$backdrop);
          for (var y = v.scrollHeight; (null == v ? void 0 : v.parentElement) && "BODY" !== v.parentElement.nodeName && !v.parentElement.querySelector("head"); ) if ("function" != typeof hdr) {
            v.classList.contains("--savior-overlay-z-index-top") || cfg || v.classList.add("--savior-overlay-z-index-reset");
            var g2 = getComputedStyle(v), b2 = g2.overflowX, w2 = g2.overflowY;
            "hidden" === b2 && v.classList.add("--savior-overlay-overflow-x-visible"), "hidden" === w2 && v.classList.add("--savior-overlay-overflow-y-visible"), v = v.parentElement, y = Math.max(v.scrollHeight, y);
          } else hdr(v, this), v = v.parentElement, y = Math.max(v.scrollHeight, y);
          y = Math.max(document.body.scrollHeight, y);
          var A2 = document.body.getBoundingClientRect(), _2 = A2.top, entry = A2.left, size = this.$backdrop.getBoundingClientRect(), obj = [_2 - size.top + "px", entry - size.left + "px", y + "px"];
          if (this.$backdrop.style.top = obj[0], this.$backdrop.style.left = obj[1], this.$backdrop.style.height = obj[2], v == document.body && (null === (opt = v.getBoundingClientRect()) || void 0 === opt ? void 0 : opt.left) > 0) {
            var pos = ["0px", "0px"];
            this.$backdrop.style.top = pos[0], this.$backdrop.style.left = pos[1];
          }
          "function" == typeof prop && prop(v, this);
        } else if (!el) {
          if ("function" == typeof l) return void l();
          var key = null == l ? void 0 : l.parentUpdate, var_M = null == l ? void 0 : l.updated;
          if (null === (arg = this.$backdrop.parentElement) || void 0 === arg || arg.removeChild(this.$backdrop), document.querySelectorAll(".--savior-backdrop").forEach((t2) => t2.remove()), this.parent.$parent) {
            dom && (this.previousZIndex ? this.parent.$parent.style.zIndex = this.previousZIndex : this.parent.$parent.style.removeProperty("z-index")), this.parent.$parent.classList.remove(...resetClasses);
            for (var T = this.parent.$parent; T.parentElement && T; ) "function" != typeof key ? (T.classList.remove(...resetClasses), T = T.parentElement) : (key(T, this), T = T.parentElement);
          }
          null === (st = document.querySelectorAll('[class~="--savior-overlay"], [class^="--savior-overlay"], [class*="--savior-overlay"]')) || void 0 === st || st.forEach((t2) => t2.classList.remove(...resetClasses)), "function" == typeof var_M && var_M(this.parent.$parent, this);
        }
      } else u(this.parent, el);
    }
    fullscreenChanged(el) {
      var ev, r2, idx, opt, arg, st, url, cfg, len, fn, dom;
      try {
        dom = ((null === (idx = null === (r2 = null === (ev = this.parent.$node) || void 0 === ev ? void 0 : ev.src) || void 0 === r2 ? void 0 : r2.match(/youtube.com\/embed/i)) || void 0 === idx ? void 0 : idx.length) || 0) > 0;
      } catch (t2) {
        dom = false;
      }
      try {
        Object(domHelper.h)() ? (null === (opt = this.$el.parentElement) || void 0 === opt || opt.setAttribute("hidden", "true"), this.state.isLightOff && dom && (this.$backupParent = this.$backdrop.parentNode, null === (arg = this.$backdrop.parentNode) || void 0 === arg || arg.removeChild(this.$backdrop)), null === (url = null === (st = this.parent.getSiteData()) || void 0 === st ? void 0 : st.onFullscreenChanged) || void 0 === url || url.call(st, true, this)) : (null === (cfg = this.$el.parentElement) || void 0 === cfg || cfg.removeAttribute("hidden"), this.state.isLightOff && dom && setTimeout(() => {
          var t2;
          null === (t2 = this.$backupParent) || void 0 === t2 || t2.prepend(this.$backdrop), this.$backupParent = null;
        }, 50), null === (fn = null === (len = this.parent.getSiteData()) || void 0 === len ? void 0 : len.onFullscreenChanged) || void 0 === fn || fn.call(len, false, this));
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
  function K(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var wrapFn = function(fn) { return fn; }, markFn = function(fn) { return fn; }; (K=function(){return{w:wrapFn,m:markFn}})()}
  var J = b;
  var Z = function(el, ev, r2, nd) {
    return new (r2 || (r2 = Promise))((function(idx, opt) {
      function arg(t2) {
        try {
          url(nd.next(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function st(t2) {
        try {
          url(nd.throw(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function url(t2) {
        var e2;
        t2.done ? idx(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(arg, st);
      }
      url((nd = nd.apply(el, ev || [])).next());
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
      this.showWidget = this.showWidget.bind(this), this.hideWidget = this.hideWidget.bind(this), this.onFocused = this.onFocused.bind(this), this.onWidgetFocused = this.onWidgetFocused.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onBlur = this.onBlur.bind(this), this.updateParent = this.updateParent.bind(this), this.debouncedUpdateParent = Object(coreUtils.debounce)(this.updateParent), this.debouncedLogShow = Object(coreUtils.debounce)(this.logShow), this.$parent = this.parent.$parent, this.isDismissed = this.parent.sharedState.isDismissed, this.isVertical = false, this.resizeObserver = new ResizeObserver((el) => el.forEach(() => this.debouncedUpdateParent())), this.resizeObserver.observe(this.parent.$node);
      this.onWindowScroll = () => {
        if (this.isDestroyed || this.isDismissed || !this.$el || this.$el.classList.contains("hidden")) return;
        if (this._scrollRafId) return;
        this._scrollRafId = requestAnimationFrame(() => {
          this._scrollRafId = null;
          if (!this.isDestroyed && this.$el && !this.$el.classList.contains("hidden")) {
            this.updatePosition();
          }
        });
      };
      window.addEventListener("scroll", this.onWindowScroll, { passive: true, capture: true });
    }
    firstPaint(el) {
      this.$el = this.parent.$el;
      var ev = Object(coreUtils.query)("#hide-widget", this.$el), r2 = Object(coreUtils.query)("#hide-on-site", this.$el);
      null == ev || ev.addEventListener("click", () => Z(this, void 0, void 0, K().m((function t2() {
        return K().w((function(t3) {
          for (; ; ) switch (t3.n) {
            case 0:
              if (this.parent && this.parent.$node) this.parent.$node.dataset.saviorDismissed = "true";
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
    render(el) {
      this.parent.shouldHideWidget() || this.isDismissed || this.isDestroyed || (Object(coreUtils.devLog)("Behavior render"), this.updateParent());
    }
    bindListener(el) {
      var ev, r2, nd, opt, arg, st, url;
      null === (ev = this.$parent) || void 0 === ev || ev.addEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseOver)), this.parent && this.parent.$node && this.parent.$node !== this.$parent && (this.parent.$node.addEventListener("mouseover", this.onFocused, true), this.parent.$node.addEventListener("mousemove", this.onFocused, { passive: true, capture: true }), this.parent.$node.addEventListener("mouseout", this.onBlur, true)), this.$parent && this.$parent.addEventListener("mousemove", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseMove)), this.$el.addEventListener("mouseover", this.onWidgetFocused), null === (nd = this.$parent) || void 0 === nd || nd.addEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (opt = this.parent.getSiteData()) || void 0 === opt ? void 0 : opt.useCaptureOnMouseOut)), this.$el.addEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (arg = this.parent.getSiteData()) || void 0 === arg ? void 0 : arg.useCaptureOnMouseOut)), null === (url = null === (st = this.parent.siteData) || void 0 === st ? void 0 : st.onBehaviorBined) || void 0 === url || url.call(st, this);
    }
    destroy() {
      var el, ev, r2, nd, opt, arg;
      if (this.onWindowScroll) {
        window.removeEventListener("scroll", this.onWindowScroll, { capture: true });
        if (this._scrollRafId) {
          cancelAnimationFrame(this._scrollRafId);
          this._scrollRafId = null;
        }
      }
      this.isDestroyed = true, clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), clearTimeout(this.mouseStayTimeout), this.parent && this.parent.$node && this.parent.$node !== this.$parent && (this.parent.$node.removeEventListener("mouseover", this.onFocused, true), this.parent.$node.removeEventListener("mousemove", this.onFocused, true), this.parent.$node.removeEventListener("mouseout", this.onBlur, true)), this.$parent && this.$el && (this.$parent.removeEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (el = this.parent.getSiteData()) || void 0 === el ? void 0 : el.useCaptureOnMouseOver)), this.$parent.removeEventListener("mousemove", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (el = this.parent.getSiteData()) || void 0 === el ? void 0 : el.useCaptureOnMouseMove)), this.$el.removeEventListener("mouseover", this.onWidgetFocused), null === (ev = this.$parent) || void 0 === ev || ev.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseMove)), this.mouseMoveActive = false, this.$el.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (nd = this.parent.getSiteData()) || void 0 === nd ? void 0 : nd.useCaptureOnMouseMove)), this.$parent.removeEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (opt = this.parent.getSiteData()) || void 0 === opt ? void 0 : opt.useCaptureOnMouseOut)), this.$el.removeEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (arg = this.parent.getSiteData()) || void 0 === arg ? void 0 : arg.useCaptureOnMouseOut))), this.debouncedUpdateParent.destroy();
    }
    getSiteWidgetConfig() {
      return domConstants.f.find((el) => {
        var ev = el.rx, r2 = el.closest, nd = el.matcher;
        return !!location.href.match(ev) && (!(r2 && !this.parent.$node.closest(r2)) && !(nd && !nd(this.parent.$node)));
      });
    }
    elementHasControl() {
      return !!this.getSiteWidgetConfig();
    }
    getWidgetVerticalMove() {
      var el = this.getSiteWidgetConfig();
      return "number" == typeof (null == el ? void 0 : el.y) ? el.y : domConstants.d;
    }
    getWidgetHorizontalMove() {
      var el = this.getSiteWidgetConfig();
      return "number" == typeof (null == el ? void 0 : el.x) ? el.x : domConstants.c;
    }
    updateParent() {
      var el, ev, r2, opt, arg, st, url, cfg, len, fn, dom, hdr, prop, val, msg, ctx = null !== (r2 = null === (ev = null === (el = this.parent.siteData) || void 0 === el ? void 0 : el.getCustomParent) || void 0 === ev ? void 0 : ev.call(el, this.parent.$node)) && void 0 !== r2 ? r2 : Object(domHelper.d)(this.parent.$node);
      null === (opt = this.$parent) || void 0 === opt || opt.removeEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (arg = this.parent.getSiteData()) || void 0 === arg ? void 0 : arg.useCaptureOnMouseOver)), null === (st = this.$parent) || void 0 === st || st.removeEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (url = this.parent.getSiteData()) || void 0 === url ? void 0 : url.useCaptureOnMouseMove)), null === (cfg = this.$parent) || void 0 === cfg || cfg.removeEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (len = this.parent.getSiteData()) || void 0 === len ? void 0 : len.useCaptureOnMouseOut)), this.parent.$parent = ctx, this.$parent = ctx, this.parent.shouldHideWidget() || this.isDismissed || this.isDestroyed || (null === (fn = this.$parent) || void 0 === fn || fn.addEventListener("mouseover", this.onFocused, Object(coreUtils.beDefinedOr)(true)(null === (dom = this.parent.getSiteData()) || void 0 === dom ? void 0 : dom.useCaptureOnMouseOver)), this.mouseMoveActive && (null === (hdr = this.$parent) || void 0 === hdr || hdr.addEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (prop = this.parent.getSiteData()) || void 0 === prop ? void 0 : prop.useCaptureOnMouseMove))), null === (val = this.$parent) || void 0 === val || val.addEventListener("mouseout", this.onBlur, Object(coreUtils.beDefinedOr)(true)(null === (msg = this.parent.getSiteData()) || void 0 === msg ? void 0 : msg.useCaptureOnMouseOut)), this.updatePosition());
    }
    logShow() {
      detectorLogger.a.log("PageShown", detectorLogger.a.PAGE_CONTENT_SHOW_CONTROLS);
    }
    hasActiveInteraction() {
      var dl = this.parent.getComponent("download");
      var of = this.parent.getComponent("otherFeature");
      var tm = this.parent.getComponent("transferMobile");
      var cc = this.parent.getComponent("clientChooser");
      var isOpening = Boolean(
        (dl && dl.state && dl.state.opening) ||
        (of && of.state && of.state.opening) ||
        (tm && tm.state && tm.state.opening) ||
        (cc && cc.state && cc.state.opening)
      );
      if (isOpening) return true;
      if (!this.$el) return false;
      var hasOpenDom = Boolean(
        this.$el.querySelector("dropdown-box:not([hidden]), .expansion-box:not([hidden])")
      );
      return hasOpenDom;
    }
    onWidgetFocused() {
      clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), clearTimeout(this.mouseStayTimeout), this.showWidget();
    }
    onFocused(el) {
      var ev, r2, nd, opt, arg, st;
      !settingsManager.a.get("on_page_buttons") || this.parent.shouldHideWidget() || this.isDismissed || this.isDestroyed || (this.mouseMoveActive || (null === (ev = this.$parent) || void 0 === ev || ev.addEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (r2 = this.parent.getSiteData()) || void 0 === r2 ? void 0 : r2.useCaptureOnMouseMove)), null === (nd = this.$el) || void 0 === nd || nd.addEventListener("mousemove", this.onMouseMove, Object(coreUtils.beDefinedOr)(true)(null === (opt = this.parent.getSiteData()) || void 0 === opt ? void 0 : opt.useCaptureOnMouseMove))), this.mouseMoveActive = true, this.showWidget(), clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), this.debouncedLogShow(), SaviorWidgetController.mountWidget(this.parent), this.updatePosition() && this.updateParent(), el && this.onMouseMove(el), null === (st = null === (arg = this.parent.getSiteData()) || void 0 === arg ? void 0 : arg.onFocused) || void 0 === st || st.call(arg, this));
    }
    onMouseMove(t) {
      clearTimeout(this.timeout), clearTimeout(this.timeoutAnimation), this.showWidget();
      var isOverWidget = Boolean(
        this.$el && t && (
          t.target === this.$el ||
          this.$el.contains(t.target) ||
          (typeof t.composedPath === "function" && t.composedPath().includes(this.$el))
        )
      );
      if (isOverWidget || this.hasActiveInteraction()) {
        clearTimeout(this.mouseStayTimeout);
        return;
      }
      clearTimeout(this.mouseStayTimeout);
      this.mouseStayTimeout = setTimeout(() => this.hideWidget(), 2000);
    }
    onBlur(t) {
      if (this.hasActiveInteraction()) return;
      var rel = t && (t.relatedTarget || t.toElement);
      if (this.$el && rel && (rel === this.$el || this.$el.contains(rel))) return;
      if (this.$parent && rel && (rel === this.$parent || this.$parent.contains(rel))) {
        clearTimeout(this.timeout);
        clearTimeout(this.timeoutAnimation);
        clearTimeout(this.mouseStayTimeout);
        this.mouseStayTimeout = setTimeout(() => this.hideWidget(), 2000);
        return;
      }
      clearTimeout(this.timeout);
      clearTimeout(this.timeoutAnimation);
      clearTimeout(this.mouseStayTimeout);
      this.timeout = setTimeout(() => this.hideWidget(), 400);
    }
    showWidget() {
      var el, ev, r2, nd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
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
              if (null === (el = this.$el) || void 0 === el || el.removeAttribute("hidden"), !nd) {
                o.n = 2;
                break;
              }
              return o.n = 2, Object(coreUtils.sleep)(1);
            case 2:
              null === (r2 = null === (ev = this.$el) || void 0 === ev ? void 0 : ev.firstElementChild) || void 0 === r2 || r2.classList.remove("hidden");
            case 3:
              return o.a(2);
          }
        }), urlMatcher2, this);
      })));
    }
    hideWidget() {
      var el, ev;
      if (this.hasActiveInteraction()) return Promise.resolve();
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
              null === (ev = null === (el = this.$el) || void 0 === el ? void 0 : el.firstElementChild) || void 0 === ev || ev.classList.add("hidden"), this.timeoutAnimation = setTimeout(() => {
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
      var el, ev, r2, idx, arg, st, url, cfg;
      if (this.$el) {
        var isYt = location.host.includes("youtube.com");
        var len, fn = urlMatcher.a.shouldWidgetAttachToParentNode(location.hostname) || (null === (ev = null === (el = this.parent.getSiteData()) || void 0 === el ? void 0 : el.shouldWidgetAttachToParentNode) || void 0 === ev ? void 0 : ev.call(el, this.parent.$node)) ? this.$parent.getBoundingClientRect() : this.parent.$node.getBoundingClientRect(), dom = fn.top, hdr = fn.left, prop = fn.right, widgetH = this.$el.clientHeight || (this.$el.firstElementChild && this.$el.firstElementChild.clientHeight) || 36, v = dom - widgetH, msg = this.isVertical ? prop - this.$el.clientWidth : hdr, ctx = Object(domHelper.j)(this.parent.$node);
        if (ctx) {
          len = "fixed";
          if (this.elementHasControl()) {
            v = dom + this.getWidgetVerticalMove();
            msg = hdr + this.getWidgetHorizontalMove();
          } else if (v < 0) {
            v = Math.max(0, dom < 0 ? 0 : v);
          }
        } else {
          len = "absolute";
          var xFrameOffset = 0, yFrameOffset = 0;
          location.href.includes("https://hk-ancillaries.s3.amazonaws.com/") && (xFrameOffset = (null === (arg = null === (idx = null === (r2 = this.parent.$node.ownerDocument) || void 0 === r2 ? void 0 : r2.defaultView) || void 0 === idx ? void 0 : idx.frameElement) || void 0 === arg ? void 0 : arg.getBoundingClientRect().x) || 0, yFrameOffset = (null === (cfg = null === (url = null === (st = this.parent.$node.ownerDocument) || void 0 === st ? void 0 : st.defaultView) || void 0 === url ? void 0 : url.frameElement) || void 0 === cfg ? void 0 : cfg.getBoundingClientRect().y) || 0);
          var videoTop = dom + window.pageYOffset + yFrameOffset;
          var aboveTop = videoTop - widgetH;
          if (this.elementHasControl()) {
            v = videoTop + this.getWidgetVerticalMove();
            msg = (this.isVertical ? prop - this.$el.clientWidth : hdr) + window.pageXOffset + xFrameOffset + this.getWidgetHorizontalMove();
          } else {
            v = aboveTop < 0 ? videoTop : aboveTop;
            msg = (this.isVertical ? prop - this.$el.clientWidth : hdr) + window.pageXOffset + xFrameOffset;
          }
        }
        return this.$el.style = `position: ${len}; top: ${v}px; left: ${msg}px`, ctx;
      }
    }
  }
  var shortener = new class {
    constructor() {
      this._cache = /* @__PURE__ */ new Map();
    }
    shorten(t, ev) {
      var r2, nd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = "", arg = "";
      "string" == typeof t ? o = t : "object" == typeof t && (o = t.videoUrl, arg = t.audioUrl), r2 = o + arg + "_" + ev;
      var st = this._cache.get(r2);
      if (st) return st instanceof Promise ? st : Promise.resolve(st);
      var url = "https://s.coccoc.com/api/v1/shorten-url", cfg = { full_url: t ? encodeURIComponent(o) : null }, len = { Authorization: cfg.full_url ? "Bearer b59df0256819b112511f92795fbfa127f851c068420b5b016da9228889d1a90d6356f2c770e778b4c262a3807058004be1826bba45a40c1c926f88fe2c985fe4" : "" }, fn = encodeURIComponent(ev), dom = new Promise((t2) => {
        coreUtils.send("POST", url, cfg, len, true).then((e2) => {
          var s2;
          try {
            s2 = JSON.parse(e2.responseText);
            var c2 = "http://onelink.to/mbbyrq?", d2 = s2.full_url ? s2.full_url[0].split("/").pop() : s2.shorten_url.split("/").pop(), h = "";
            if (!o) return h = `${c2}ccvd=r/${d2}&title=${fn}`, this._cache.set(r2, h), t2(h);
            if (nd || !arg) return h = `${c2}ccvd=r/${d2}&title=${fn}`, this._cache.set(r2, h), t2(h);
            var prop = { full_url: encodeURIComponent(arg) };
            setTimeout(() => {
              coreUtils.send("POST", url, prop, len, true).then((e3) => {
                var n2;
                try {
                  n2 = JSON.parse(e3.responseText);
                } catch (e4) {
                  return t2(null);
                }
                if (n2.error || n2.error) return t2(null);
                var idx = n2.full_url ? n2.full_url[0].split("/").pop() : n2.shorten_url.split("/").pop();
                return h = `${c2}ccvd=r/${d2}&ccad=r/${idx}&title=${fn}`, this._cache.set(r2, h), t2(h);
              });
            }, 100);
          } catch (e3) {
            return t2(null);
          }
        });
      });
      return this._cache.set(r2, dom), dom;
    }
  }(), qrCodeHelper = r(526), qrCanvasHelper = r.n(qrCodeHelper);
  var transferGifUrl = chrome.runtime.getURL("/images/transfer-to-mobile.gif"), transferDarkGifUrl = chrome.runtime.getURL("/images/transfer-to-mobile-dark.gif");
  var MobileSync = class {
    constructor(el) {
      this.EE = el, this._node = null, this._currentUrl = "", this._hostNode = null, this._filename = "", this._urlSources = {}, this._qrBox = null, this._tutorialImage = null, this._lastSentMode = "video", this._audioLogSent = false, this.onClickAway = this.onClickAway.bind(this), this._init();
    }
    get _isShown() {
      return !!this._node && !this._node.classList.contains("hidden");
    }
    _showImage() {
      var el;
      this._tutorialImage = null === (el = this._node) || void 0 === el ? void 0 : el.querySelector("#mobile-instruction-image"), this._tutorialImage && (this._tutorialImage.src = chrome.runtime.getURL("images/download-placeholder.png"));
    }
    _loadTutorial() {
      var el;
      this._tutorialImage && (this._tutorialImage.classList.add("instruction-image"), this._tutorialImage.src = transferGifUrl);
      var ev = null === (el = this._node) || void 0 === el ? void 0 : el.querySelector("#mobile-instruction-image-dark");
      ev && (ev.srcset = transferDarkGifUrl);
    }
    _init() {
      if (!this._node && !location.href.includes(".svg")) {
        var el = document.createElement("div");
        el.innerHTML = lodash.a.render(settingsManager.a.get("template-mobile-transfer-panel"), { i18n_mobile_header_title: coreUtils.i18n("mobile_panel_header"), i18n_mobile_instruction_1: coreUtils.i18n("mobile_instruction_1"), i18n_mobile_instruction_2: coreUtils.i18n("mobile_instruction_2"), i18n_mobile_panel_footer: coreUtils.i18n("mobile_panel_footer"), i18n_mobile_video: coreUtils.i18n("media_fields_type_video"), i18n_mobile_audio: coreUtils.i18n("media_fields_type_audio") }), this._node = el.firstElementChild, this._addListener();
      }
    }
    _reset() {
      if (this.hide(), this._hostNode = null, this._currentUrl = "", this._node) {
        var el = this._node.querySelector(".qrcode");
        el.innerHTML = "", el.classList.add("loading"), this._urlSources = {}, this._lastSentMode = "video", Array.from(this._node.querySelectorAll('input[name="send-type"]')).forEach((t2) => {
          t2.checked = "video" === t2.value;
        });
      }
    }
    attach(el, ev) {
      this._reset(), this._hostNode = el, this.onClose = ev, el.appendChild(this._node), detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_SHOW);
    }
    _addListener() {
      var el, ev;
      null === (el = this._node) || void 0 === el || el.addEventListener("click", (t2) => {
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
      Array.from((null === (ev = this._node) || void 0 === ev ? void 0 : ev.querySelectorAll('input[name="send-type"]')) || []).forEach((t2) => {
        t2.addEventListener("change", (function() {
          var t3 = this.value;
          r2._qrBox && (r2._qrBox.innerHTML = "", r2._qrBox.classList.add("loading")), r2._lastSentMode = t3, r2.showQrCode(r2._lastSentMode), "audio" !== t3 || r2._audioLogSent || (detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_CLICK_AUDIO), r2._audioLogSent = true);
        }));
      }), this.EE.on("mobile-transfer-panel.loadQrCode", this.loadQrCode.bind(this));
    }
    loadQrCode(el) {
      var ev;
      this._qrBox = (null === (ev = this._node) || void 0 === ev ? void 0 : ev.querySelector(".qrcode")) || null, this._qrBox && (this._qrBox.innerHTML = "", this._qrBox.classList.remove("error"), this._qrBox.classList.add("loading"), this._qrBox.innerText = "", null !== el ? (this._filename = el.filename, this._urlSources = el, this.showQrCode(this._lastSentMode)) : this.showError(this._qrBox));
    }
    showQrCode(el) {
      var ev = "audio" === el ? this._urlSources.audioUrl : { audioUrl: this._urlSources.audioUrl, videoUrl: this._urlSources.videoUrl };
      shortener.shorten(ev, this._filename, this._urlSources.videoHasAudio).then(this._updateQrCode.bind(this));
    }
    _updateQrCode(el) {
      var ev, r2;
      (null === (ev = this._qrBox) || void 0 === ev || ev.classList.remove("loading"), el) ? el !== this._currentUrl && (r2 = el, qrCanvasHelper.a.toDataURL(r2, { errorCorrectionLevel: "M", margin: 0 })).then((t2) => {
        var e2, r3, nd = null === (e2 = this._qrBox) || void 0 === e2 ? void 0 : e2.querySelector("img");
        if (nd) nd.src = t2;
        else {
          var idx = document.createElement("img");
          idx.src = t2, null === (r3 = this._qrBox) || void 0 === r3 || r3.appendChild(idx);
        }
      }) : this.showError(this._qrBox || void 0);
    }
    show() {
      var el;
      null === (el = this._node) || void 0 === el || el.classList.remove("hidden"), this._showImage(), this._loadTutorial(), detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_CLICK), coreUtils.nextTick(() => {
        window.addEventListener("click", this.onClickAway);
      });
    }
    onClickAway(el) {
      var ev;
      this.hide(), null === (ev = this.onClose) || void 0 === ev || ev.call(this);
    }
    showError(t) {
      if (null == t || t.classList.remove("loading"), null == t || t.classList.add("error"), t) {
        t.innerHTML = "";
        var ev = Object(domHelper.a)("img", "error-img");
        ev.src = chrome.runtime.getURL("images/transfer-file-not-available.svg");
        var r2 = Object(domHelper.a)("p", "error-text");
        r2.innerText = coreUtils.i18n("mobile_error_text"), t.append(ev, r2);
      }
      detectorLogger.a.logSendMobile(detectorLogger.a.SEND_MOBILE_ERROR);
    }
    hide() {
      var el;
      null === (el = this._node) || void 0 === el || el.classList.add("hidden"), window.removeEventListener("click", this.onClickAway);
    }
  };
  class MobileLogoHelper {
    constructor(el) {
      var ev = (el.getAttribute("data-src") || "").replace(/^\/+/, "");
      var r2 = ev.includes("logo_cc.svg") ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='vidm_grad' x1='2' y1='2' x2='22' y2='22' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%2310B981'/%3E%3Cstop offset='100%25' stop-color='%23059669'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='20' height='20' rx='5.5' fill='url(%23vidm_grad)'/%3E%3Cpath d='M8.5 7.5V13.5L13.5 10.5L8.5 7.5Z' fill='%23FFFFFF' opacity='0.95'/%3E%3Cpath d='M15.5 8V14M15.5 14L13 11.5M15.5 14L18 11.5' stroke='%23FFFFFF' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7 17.5H17' stroke='%23FFFFFF' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E" : chrome.runtime.getURL(ev);
      var nd = document.createElement("img");
      nd.src = r2;
      nd.setAttribute("savior-rendered", "");
      el.replaceWith(nd);
    }
  }
  var transferDomHelper = r(28);
  function ct(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var wrapFn = function(fn) { return fn; }, markFn = function(fn) { return fn; }; (ct=function(){return{w:wrapFn,m:markFn}})()}
  var lt = b;
  var ft = function(el, ev, r2, nd) {
    return new (r2 || (r2 = Promise))((function(idx, opt) {
      function arg(t2) {
        try {
          url(nd.next(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function st(t2) {
        try {
          url(nd.throw(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function url(t2) {
        var e2;
        t2.done ? idx(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(arg, st);
      }
      url((nd = nd.apply(el, ev || [])).next());
    }));
  };
  class TransferComp extends StateComponent {
    getDefaultState() {
      return { opening: false, disabled: false };
    }
    bind() {
      this.mobileTransferPanel = this.shouldEnable() ? new MobileSync(this.parent.EE) : null, this.parent.EE.once("download-list.first-scope", (el) => {
        var ev = el.scopeDownloads;
        return ft(this, void 0, void 0, ct().m((function t2() {
          var r2, nd, opt, arg, st, url, c, l, fn, dom, hdr, prop, val, msg, y, g2, b2, w2, A2;
          return ct().w((function(t3) {
            for (; ; ) switch (t3.n) {
              case 0:
                if (!this.mobileTransferPanel) {
                  t3.n = 5;
                  break;
                }
                return url = (null === (opt = null === (nd = null === (r2 = this.parent.getComponent("download")) || void 0 === r2 ? void 0 : r2.state.mediaObjects) || void 0 === nd ? void 0 : nd[0]) || void 0 === opt ? void 0 : opt.url) || location.href, t3.n = 1, Object(transferDomHelper.b)(url);
              case 1:
                if (!(c = t3.v)) {
                  t3.n = 3;
                  break;
                }
                if (l = c.formats.filter((t4) => t4.mimeType.startsWith("video/mp4")).sort((t4, e2) => e2.height - t4.height), fn = c.formats.filter((t4) => t4.mimeType.startsWith("audio/mp4")).sort((t4, e2) => e2.audioBitrate - t4.audioBitrate), dom = l.find((t4) => 17 == t4.itag) || l.find((t4) => 18 == t4.itag), hdr = fn[0], !dom) {
                  t3.n = 2;
                  break;
                }
                return this.parent.EE.emit("mobile-transfer-panel.loadQrCode", { filename: c.title, videoUrl: dom.url, audioUrl: hdr.url, videoHasAudio: true }), t3.a(2);
              case 2:
                if (!(prop = l.find((t4) => !t4.audioQuality) || l[0]) || !hdr) {
                  t3.n = 3;
                  break;
                }
                return this.parent.EE.emit("mobile-transfer-panel.loadQrCode", { filename: c.title, videoUrl: prop.url, audioUrl: hdr.url }), t3.a(2);
              case 3:
                if (val = ev.filter((t4) => {
                  var e2;
                  return "video" === t4.type && ((null === (e2 = t4.url) || void 0 === e2 ? void 0 : e2.videoUrl) || t4.url);
                }), msg = [...ev].sort((t4, e2) => "mp3" === t4.ext ? -1 : "mp3" === e2.ext ? 1 : "mp4" === t4.ext ? -1 : "mp4" === e2.ext ? 1 : 0).filter((t4) => {
                  var e2;
                  return "video" === t4.type && (null === (e2 = t4.url) || void 0 === e2 ? void 0 : e2.audioUrl) || "audio" === t4.type && t4.url;
                }), y = val.find((t4) => "mp4" == t4.ext) || val[0], g2 = msg[0], b2 = encodeURIComponent(Object(coreUtils.cleanSymbols)(y.filename)), w2 = (null === (arg = null == y ? void 0 : y.url) || void 0 === arg ? void 0 : arg.videoUrl) || (null == y ? void 0 : y.url), A2 = (null === (st = null == g2 ? void 0 : g2.url) || void 0 === st ? void 0 : st.audioUrl) || (null == g2 ? void 0 : g2.url), w2 || A2) {
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
    firstPaint(el) {
      var ev, r2;
      this.$el = Object(coreUtils.query)(this.el, el);
      var nd = Object(coreUtils.query)("#open-mobile", el);
      this.mobileTransferPanel ? (this.mobileTransferPanel.attach(this.$el, () => {
        this.setState({ opening: false });
      }), Array.from((null === (ev = this.mobileTransferPanel._node) || void 0 === ev ? void 0 : ev.querySelectorAll("savior-image")) || []).forEach((t2) => {
        new MobileLogoHelper(t2);
      }), null == nd || nd.addEventListener("click", () => {
        this.parent.fetchDownloads(), this.setState({ opening: !this.state.opening });
      }), null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("click", (t2) => {
        var e2;
        (null === (e2 = t2.target) || void 0 === e2 ? void 0 : e2.matches(this.el)) && this.setState({ opening: false });
      })) : null == nd || nd.setAttribute("hidden", "true");
    }
    render(el) {
      var ev, r2, nd, opt;
      if (this.$el) {
        Object(coreUtils.devLog)("MobileTransferButton render");
        var a = Object(coreUtils.query)(domConstants.h.OtherFeatureButton, this.parent.$el);
        if (this.mobileTransferPanel && (this.state.opening ? (this.mobileTransferPanel.show(), null === (ev = this.$el) || void 0 === ev || ev.removeAttribute("hidden")) : (this.mobileTransferPanel.hide(), null === (r2 = this.$el) || void 0 === r2 || r2.setAttribute("hidden", "true"))), this.state.opening ? (null == a || a.setAttribute("hidden", "true"), null === (nd = this.$el) || void 0 === nd || nd.removeAttribute("hidden")) : (null == a || a.removeAttribute("hidden"), null === (opt = this.$el) || void 0 === opt || opt.setAttribute("hidden", "true")), a) {
          var st = Object(coreUtils.query)("#open-mobile", a);
          this.state.disabled ? null == st || st.setAttribute("hidden", "true") : this.shouldEnable() && (null == st || st.removeAttribute("hidden"));
        }
      }
    }
    bindListener(el) {
    }
    destroy() {
    }
    shouldEnable() {
      return false;
    }
  }
  TransferComp.prototype.shouldEnable = function() { return false; };
  class DownloadBtnComp extends StateComponent {
    getDefaultState() {
      return { opening: false };
    }
    bind() {
      this.close = this.close.bind(this), this.onClick = this.onClick.bind(this);
    }
    firstPaint(el) {
      var ev;
      this.$el = el.querySelector(this.el), null === (ev = this.$el) || void 0 === ev || ev.addEventListener("click", this.onClick);
      var r2 = Object(coreUtils.query)("#open-settings", this.$el);
      null == r2 || r2.addEventListener("click", () => {
        detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_OPEN_SETTINGS), Object(coreUtils.sendMessage)({ type: saviorConstants.b.OPEN_SETTINGS }), this.destroy();
      });
    }
    render(el) {
      if (this.$el) {
        Object(coreUtils.devLog)("ExpandFeatureButton render");
        var ev = Object(coreUtils.query)("#expansion", this.$el), r2 = Object(coreUtils.query)(".tooltip", this.$el);
        this.state.opening ? (null == ev || ev.removeAttribute("hidden"), this.$el.classList.add("is-active"), null == r2 || r2.setAttribute("hidden", "true"), this.nextTick(() => {
          window.addEventListener("click", this.close);
        })) : (null == ev || ev.setAttribute("hidden", "true"), null == r2 || r2.removeAttribute("hidden"), window.removeEventListener("click", this.close), this.$el.classList.remove("is-active"));
      }
    }
    bindListener(el) {
    }
    destroy() {
    }
    onClick(t) {
      var ev, r2, nd;
      (null === (ev = null == t ? void 0 : t.target) || void 0 === ev ? void 0 : ev.disabled) || (null === (r2 = null == t ? void 0 : t.target) || void 0 === r2 ? void 0 : r2.hasAttribute("disabled")) || (null === (nd = null == t ? void 0 : t.target) || void 0 === nd ? void 0 : nd.classList.contains("disabled")) || false || (this.setState({ opening: !this.state.opening }), t.target.closest("#expansion") || detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_MORE_OPTIONS));
    }
    close(el) {
      this.setState({ opening: false });
    }
  }
  var downloadListModule = r(164), dropdownHelper = r(176);
  function mt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var wrapFn = function(fn) { return fn; }, markFn = function(fn) { return fn; }; (mt=function(){return{w:wrapFn,m:markFn}})()}
  var yt = b;
  var gt = w;
  var bt = A;
  var wt = function(el, ev, r2, nd) {
    return new (r2 || (r2 = Promise))((function(idx, opt) {
      function arg(t2) {
        try {
          url(nd.next(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function st(t2) {
        try {
          url(nd.throw(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function url(t2) {
        var e2;
        t2.done ? idx(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(arg, st);
      }
      url((nd = nd.apply(el, ev || [])).next());
    }));
  };
  function countWords(el) {
    return el.trim() ? el.trim().split(/\s+/).length : 0;
  }
  function parseTranscriptXml(el) {
    var ev = new DOMParser().parseFromString(el, "text/xml"), r2 = ev.documentElement;
    switch (r2.tagName) {
      case "transcript":
        return (function(t2) {
          return Array.from(t2.getElementsByTagName("text")).map((t3) => {
            var e2, r3, nd, idx = 1e3 * Number(null !== (e2 = t3.getAttribute("start")) && void 0 !== e2 ? e2 : 0);
            return { start: idx, end: idx + 1e3 * Number(null !== (r3 = t3.getAttribute("dur")) && void 0 !== r3 ? r3 : 0), text: decodeHtml(null !== (nd = t3.textContent) && void 0 !== nd ? nd : "") };
          });
        })(ev);
      case "timedtext":
        return (function(t2) {
          return Array.from(t2.getElementsByTagName("p")).map((t3) => {
            var e2, r3, nd, idx = Number(null !== (e2 = t3.getAttribute("t")) && void 0 !== e2 ? e2 : 0), opt = Number(null !== (r3 = t3.getAttribute("d")) && void 0 !== r3 ? r3 : 0), arg = Array.from(t3.getElementsByTagName("s"));
            return { start: idx, end: idx + opt, text: decodeHtml((arg.length > 0 ? arg.map((t4) => {
              var e3;
              return null !== (e3 = t4.textContent) && void 0 !== e3 ? e3 : "";
            }).join("") : null !== (nd = t3.textContent) && void 0 !== nd ? nd : "").trim()) };
          });
        })(ev);
      default:
        throw new Error(`Unsupported XML format: <${r2.tagName}>`);
    }
  }
  function decodeHtml(el) {
    return el.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  }
  function splitSentences(el) {
    return (function(t2) {
      var ev, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, n = [], i = null, opt = gt(t2);
      try {
        for (opt.s(); !(ev = opt.n()).done; ) {
          var arg = ev.value;
          i ? i.text += " " + arg.text : i = Object.assign({}, arg), countWords(i.text) >= r2 && (n.push(i), i = null);
        }
      } catch (t3) {
        opt.e(t3);
      } finally {
        opt.f();
      }
      return i && (n.length > 0 ? n[n.length - 1].text += " " + i.text : n.push(i)), n;
    })(el).map((t2, ev) => {
      return "" == t2.text ? "" : `
${r2 = t2.start, nd = Math.floor(r2 / 36e5), idx = Math.floor(r2 / 6e4) % 60, opt = Math.floor(r2 / 1e3) % 60, `${nd.toString().padStart(2, "0")}:${idx.toString().padStart(2, "0")}:${opt.toString().padStart(2, "0")}`}
${t2.text}`;
      var r2, nd, idx, opt;
    }).filter((t2) => "" !== t2).join("\n");
  }
  class QualityMenuDropdown extends downloadListModule.a {
    constructor(el, ev, r2, nd, idx) {
      super(el, ev, false, nd, idx), this._checkFileSize = () => {
      }, this.getEventRegistry();
    }
    getEventRegistry() {
      return this.eventRegistry || (this.eventRegistry = /* @__PURE__ */ new Map()), this.eventRegistry;
    }
    render() {
      var el, ev, r2 = { i18n_select_audio_channel_title: Object(coreUtils.i18n)("select_audio_channel_title"), media_list: (null === (el = this.state.renderDownloads[0]) || void 0 === el ? void 0 : el.media) || [], audio_channel: null === (ev = this.state.renderDownloads[0]) || void 0 === ev ? void 0 : ev.audio_channel }, nd = settingsManager.a.get("template-media") || "", opt = document.createElement("div");
      opt.innerHTML = lodash.a.render(nd, r2), this.$el = opt.firstElementChild;
    }
    _eventListener() {
      var el, ev, r2, nd, idx, opt, arg, s = this;
      try {
        this.EE.emit("download-list.videos-count", null === (el = this.state.downloadScopes) || void 0 === el ? void 0 : el.length), (null === (nd = null === (r2 = null === (ev = this.state.downloadScopes) || void 0 === ev ? void 0 : ev[0]) || void 0 === r2 ? void 0 : r2.scopeDownloads) || void 0 === nd ? void 0 : nd.length) > 0 && this.EE.emit("download-list.first-scope", this.state.downloadScopes[0]);
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
        var fn = this.$el.querySelector(".j-audio-drawer-toggle"), hdr = this.$el.querySelector(".audio-drawer-wrapper"), v = this.$el.querySelector(".audio-drawer"), msg = this.$el.querySelector(".audio-drawer-header-back-button");
        if (fn && hdr && v) {
          var ctx = v.parentElement;
          ctx && "static" === getComputedStyle(ctx).position && (ctx.style.position = "relative"), v.style.position = "absolute", v.style.top = "0", v.style.right = "0", v.style.bottom = "0", v.style.width = "100%", v.style.transform = "translateX(100%)", v.style.transition = "transform 0.2s ease", v.hidden = true;
          var g2 = (t2) => {
            t2.stopPropagation(), v.setAttribute("data-open", "false"), v.style.transform = "translateX(100%)", setTimeout(() => {
              hdr.hidden = true, v.hidden = true;
            }, 200);
          }, b2 = (t2) => {
            t2.stopPropagation(), "true" === v.getAttribute("data-open") ? g2(t2) : (detectorLogger.a.log(saviorConstants.v, detectorLogger.a.YOUTUBE_AUDIO_CHANNEL_WIDGET_SHOW), hdr.hidden = false, v.hidden = false, v.setAttribute("data-open", "true"), requestAnimationFrame(() => {
              v.style.transform = "translateX(0)";
            }));
          };
          c.set(fn, b2), fn.addEventListener("click", b2), msg && (c.set(msg, g2), msg.addEventListener("click", g2));
          var w2 = v.querySelector(".j-audio-drawer-closer");
          if (w2) {
            var A2 = (t2) => {
              var e2;
              t2.stopPropagation(), null === (e2 = this.onClose) || void 0 === e2 || e2.call(this, t2), g2(t2);
            };
            c.set(w2, A2), w2.addEventListener("click", A2);
          }
          for (var _2 = this.$el.querySelector(".audio-list"), entry = Array.from((null == _2 ? void 0 : _2.children) || []), size = function() {
            var t2 = pos[obj], e2 = t2.getAttribute("data-id"), r3 = null === (idx = l.audio_channel) || void 0 === idx ? void 0 : idx.media.find((t3) => t3.id === e2);
            (null === (arg = null === (opt = s.state.renderDownloads[0].audio_channel) || void 0 === opt ? void 0 : opt.selected_audio) || void 0 === arg ? void 0 : arg.id) === e2 && t2.classList.add("checked");
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
                y2 && r3.i18n_quality && (y2.innerText = r3.i18n_quality), entry.forEach((t3) => {
                  t3.classList.remove("checked");
                }), t2.classList.add("checked");
              }
              g2(e3);
            });
          }, obj = 0, pos = entry; obj < pos.length; obj++) size();
        }
      } catch (t2) {
        console.warn(t2);
      }
    }
    destroy() {
      this.getEventRegistry().forEach((el, ev) => {
        ev.removeEventListener("click", el);
      });
    }
    setOnItemClick(el) {
      this.onItemClick = el;
    }
    setOnClose(el) {
      this.onClose = el;
    }
  }
  class MainDownloadComponent extends StateComponent {
    constructor() {
      super(...arguments), this.found = false, this.enoughTime = false;
    }
    repeatWhileEnabled(el, ev) {
      var r2 = () => {
        this.enoughTime ? this.found || Object(coreUtils.logDownloadError)({ url: location.href, error: "Error: Cannot get media from node" }) : (el(), setTimeout(r2, ev));
      };
      setTimeout(r2, ev);
    }
    getDefaultState() {
      return { isGettingDownloads: false, mediaObjects: null, downloads: null, download: false, buttonClicked: false, opening: false };
    }
    bind() {
      this.parent;
      this.fetchDownloads = this.fetchDownloads.bind(this), this.onClick = this.onClick.bind(this), this.close = this.close.bind(this), this.onUpdateMedia = this.onUpdateMedia.bind(this), this.onUpdateMedia(), EE.on("widget.updateMedia", this.onUpdateMedia), EE.on("widget.fbUpdate", this.onFbUpdate.bind(this)), EE.on("mediaEnoughTime", () => this.enoughTime = true), EE.on("get_transcript", (el) => {
        var ev, r2;
        location.href.includes(null === (r2 = null === (ev = this.state.mediaObjects) || void 0 === ev ? void 0 : ev[0]) || void 0 === r2 ? void 0 : r2.url) && this.fetchDownloads().then((e2) => {
          (function(t2, e3) {
            return wt(this, void 0, void 0, mt().m((function r3() {
              var n, opt, a;
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
                    if ((opt = r4.v).ok) {
                      r4.n = 3;
                      break;
                    }
                    throw new Error("HTTP error! status: " + opt.status);
                  case 3:
                    return r4.n = 4, opt.text();
                  case 4:
                    return a = r4.v, r4.p = 5, a = splitSentences(parseTranscriptXml(a || "")), r4.a(2, a);
                  case 6:
                    return r4.p = 6, r4.v, r4.a(2, a);
                }
              }), r3, null, [[5, 6]]);
            })));
          })(this.state.downloads || [], el.data.language).then((e3) => {
            Object(coreUtils.sendMessage)({ type: saviorConstants.b.RETURN_TRANSCRIPT, data: { requestId: el.data.requestId, transcript: e3 } });
          });
        });
      });
    }
    firstPaint(el) {
      var ev, r2, nd;
      try {
        Object(dropdownHelper.b)(document, this.parent.$node);
      } catch (_2) {
      }
      this.repeatWhileEnabled(() => {
        Object(dropdownHelper.b)(document, this.parent.$node);
      }, 1e3), this.$el = Object(coreUtils.query)(this.el, el), null === (ev = this.$el) || void 0 === ev || ev.addEventListener("click", this.fetchDownloads, { once: true }), null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("click", this.onClick);
      var opt = Object(coreUtils.query)("dropdown-box", this.$el);
      opt && (null === (nd = Object(coreUtils.query)("#mobile-transfer-closer", opt)) || void 0 === nd || nd.addEventListener("click", this.close)), null == opt || opt.addEventListener("click", (t2) => {
        t2.stopPropagation();
      });
    }
    render(el) {
      var ev, r2;
      if (this.$el) {
        Object(coreUtils.devLog)("DownloadButton render");
        var nd = this.parent, o = nd.getComponent("transferMobile"), a = Object(coreUtils.query)("#downloads", this.$el), st = Object(coreUtils.query)("dropdown-box", this.$el), u = Object(coreUtils.query)(".tooltip", this.$el), cfg = Object(coreUtils.query)("#downloads-media", this.$el);
        if (this.state.isGettingDownloads) null == a || a.setAttribute("data-panel", "loading");
        else if (this.state.downloads && this.state.downloads.length > 0) {
          if (null == a || a.setAttribute("data-panel", "media"), (null === (ev = this.previousState) || void 0 === ev ? void 0 : ev.downloads) != this.state.downloads) {
            this.selection && this.selection.destroy();
            var len = JSON.parse(JSON.stringify(this.state.downloads)), f = new QualityMenuDropdown(nd.EE, len, false, false, this.state.buttonClicked);
            f.setOnItemClick((t2, e2) => wt(this, void 0, void 0, mt().m((function r3() {
              var n2, idx;
              return mt().w((function(r4) {
                for (; ; ) switch (r4.n) {
                  case 0:
                    if ("image" !== t2.type && detectorLogger.a.log("VideoQualityChanged", qualityHelper.b.getVideoQualityIndex(t2.quality)), this.setState({ opening: false }), !(idx = null === (n2 = this.parent.getSiteData()) || void 0 === n2 ? void 0 : n2.beforeDownload)) {
                      r4.n = 1;
                      break;
                    }
                    return r4.n = 1, null == idx ? void 0 : idx({ item: t2, $el: e2, widget: this.parent, ctx: this });
                  case 1:
                    return r4.a(2);
                }
              }), r3, this);
            })))), f.setOnClose(this.close.bind(this)), this.selection = f, f.$el.id = "downloads-media", f.$el.setAttribute("id", "downloads-media"), null == cfg || cfg.replaceWith(f.$el);
            var dom = f.state.renderDownloads.length;
            this.$el.setAttribute("data-media-count", dom + "");
          }
        } else null == a || a.setAttribute("data-panel", "no-media");
        if (this.state.opening ? (null == st || st.removeAttribute("hidden"), this.$el.classList.add("active"), null == u || u.setAttribute("hidden", "true"), this.nextTick(() => {
          window.addEventListener("click", this.close);
        })) : (null == st || st.setAttribute("hidden", "true"), null == u || u.removeAttribute("hidden"), window.removeEventListener("click", this.close), this.$el.classList.remove("active")), this.state.mediaObjects && this.state.mediaObjects.length) {
          if (!this.state.isGettingDownloads) {
            if (this.$el.removeAttribute("disabled"), u && (u.innerText = Object(coreUtils.i18n)("widget_download_tooltip")), u) {
              var hdr = false, val = false;
              this.state.mediaObjects.forEach((t2) => {
                "image" == t2.type ? hdr = true : val = true;
              }), u.innerText = hdr ? val ? Object(coreUtils.i18n)("widget_download_tooltip_image_and_video") : Object(coreUtils.i18n)("widget_download_tooltip_only_image") : Object(coreUtils.i18n)("widget_download_tooltip");
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
    bindListener(el) {
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
      var el, ev;
      (null === (el = this.state.mediaObjects) || void 0 === el ? void 0 : el.length) && (null === (ev = this.state.mediaObjects) || void 0 === ev ? void 0 : ev.length) > 0 || LazyMediaTracker.getMediaObjectsFromNode(this.parent.$node).then((t2) => {
        t2 && 0 != t2.length && (this.found = true), t2 = enrichMediaMeta((null == t2 ? void 0 : t2.filter((t3) => !!t3)) || []), this.setState({ mediaObjects: t2 }), this.parent.activeOmnibox(t2);
      });
    }
    fetchDownloads(el) {
      var ev, r2, nd, opt, arg, st, url, cfg;
      return wt(this, void 0, void 0, mt().m((function overlayCss2() {
        var f, hdr, prop, v, msg, ctx, g2, b2, w2, A2, _2;
        return mt().w((function(l) {
          for (; ; ) switch (l.p = l.n) {
            case 0:
              if (this.state.downloads && this.state.downloads.length || this.state.isGettingDownloads || !(null === (ev = this.state.mediaObjects) || void 0 === ev ? void 0 : ev.length)) {
                l.n = 7;
                break;
              }
              if (detectorLogger.a.log("ButtonClicked", detectorLogger.a.BUTTON_FAKE_QUALITY), this.setState({ isGettingDownloads: true }), f = getMediaProvider(), !(null === (r2 = null == f ? void 0 : f.findItemRoot) || void 0 === r2 ? void 0 : r2.call(f, this.parent.$node)) || !f.resolveItemFromNode) {
                l.n = 5;
                break;
              }
              return l.p = 1, l.n = 2, f.resolveItemFromNode(this.parent.$node);
            case 2:
              if (!(hdr = l.v).length) {
                l.n = 3;
                break;
              }
              prop = hdr.filter((t2) => Object(coreUtils.isValidData)(t2)), v = gt(prop);
              try {
                for (v.s(); !(msg = v.n()).done; ) ctx = msg.value, (null === (opt = null === (nd = this.state.mediaObjects) || void 0 === nd ? void 0 : nd[0]) || void 0 === opt ? void 0 : opt.thumbnail) && !ctx.thumbnail && (ctx.thumbnail = this.state.mediaObjects[0].thumbnail);
              } catch (t2) {
                v.e(t2);
              } finally {
                v.f();
              }
              return this.setState({ mediaObjects: hdr, downloads: prop, isGettingDownloads: false, download: false, buttonClicked: !!(null == el ? void 0 : el.target) }), l.a(2);
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
                for (b2.s(); !(w2 = b2.n()).done; ) A2 = w2.value, (null === (st = null === (arg = this.state.mediaObjects) || void 0 === arg ? void 0 : arg[0]) || void 0 === st ? void 0 : st.thumbnail) && (A2.thumbnail = null === (url = this.state.mediaObjects) || void 0 === url ? void 0 : url[0].thumbnail), Object(saviorConstants.B)(A2.ext) && ("audio" === A2.type ? A2.ext = "mp3" : "subtitles" === A2.type ? (_2 = (null === (cfg = A2.quality) || void 0 === cfg ? void 0 : cfg.split(".").pop()) || "srt", A2.ext = _2) : A2.ext = "mp4", A2.hasOwnProperty("_hls") || (A2._hls = true));
              } catch (t2) {
                b2.e(t2);
              } finally {
                b2.f();
              }
              0 === g2.length && detectorLogger.a.log("PageShown", detectorLogger.a.PAGE_CONTENT_NO_MEDIA), this.setState({ downloads: g2, isGettingDownloads: false, download: false, buttonClicked: !!(null == el ? void 0 : el.target) });
            case 7:
              return l.a(2);
          }
        }), overlayCss2, this, [[1, 4]]);
      })));
    }
    onClick(t) {
      var ev, r2, nd;
      (null === (ev = null == t ? void 0 : t.target) || void 0 === ev ? void 0 : ev.disabled) || (null === (r2 = null == t ? void 0 : t.target) || void 0 === r2 ? void 0 : r2.hasAttribute("disabled")) || (null === (nd = null == t ? void 0 : t.target) || void 0 === nd ? void 0 : nd.classList.contains("disabled")) || false || this.setState({ opening: !this.state.opening });
    }
    close(el) {
      this.setState({ opening: false });
    }
  }
  var onboardNmpState, onboardNmpHelper;
  !(function(el) {
    el.Abort = "#onboard-nmp-abort", el.Next = "#onboard-nmp-next", el.Complete = "#onboard-nmp-complete", el.Indicator = "#onboard-nmp-indicator";
  })(onboardNmpState || (onboardNmpState = {})), (function(t) {
    t.Show = "show", t.ShowStep = "show_step", t.Abort = "skip", t.Next = "next", t.Complete = "got_it";
  })(onboardNmpHelper || (onboardNmpHelper = {}));
  class ToastNotification {
    constructor(t) {
      var ev = t.message, r2 = t.closable, idx = void 0 !== r2 && r2, opt = t.duration, arg = void 0 === opt ? 2e3 : opt, st = t.onAttached, url = t.onDetached;
      this.message = ev, this.closable = idx, this.duration = arg, this.id = "toast_" + Date.now(), this.onAttached = st, this.onDetached = url;
      var cfg = Object(domHelper.a)("toast", "toast");
      cfg.id = this.id;
      var msgEl = document.createElement("toast-message");
      if (typeof ev === "string" && /<[a-z][\s\S]*>/i.test(ev)) {
        var sanitized = ev.replace(/<\/?(?:script|iframe|object|embed|svg|img|style|link|meta)[\s\S]*?>/gi, "");
        msgEl.innerHTML = sanitized;
      } else {
        msgEl.textContent = String(ev == null ? "" : ev);
      }
      cfg.appendChild(msgEl);
      if (idx) {
        var closer = document.createElement("toast-closer");
        closer.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33333 15.5448L4.45514 14.6666L9.12181 9.99993L4.45514 5.33327L5.33333 4.45508L9.99999 9.12174L14.6667 4.45508L15.5448 5.33327L10.8782 9.99993L15.5448 14.6666L14.6667 15.5448L9.99999 10.8781L5.33333 15.5448Z" fill="currentColor"/></svg>';
        cfg.appendChild(closer);
      }
      this.$el = cfg;
    }
    attach() {
      var el;
      return clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.detach();
      }, this.duration), null === (el = this.onAttached) || void 0 === el || el.call(this, this.id, this.$el), this.$el;
    }
    detach() {
      var el;
      this.$el.parentElement && (this.$el.remove(), null === (el = this.onDetached) || void 0 === el || el.call(this, this.id));
    }
  }
  var onboardYaaStep;
  r(775);
  function getYaaStorageKey(el) {
    return "onboard_youtube_antiadblocker_" + el;
  }
  !(function(el) {
    el.Close = "#onboard-yaa-close", el.Next = "#onboard-yaa-next";
  })(onboardYaaStep || (onboardYaaStep = {}));
  class YoutubeAdblockOnboarder extends StateComponent {
    constructor(el) {
      super(el, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document), this.destroyed = false, this.bind(), this.render(), this.bindListener();
    }
    getDefaultState() {
      return { disabled: false };
    }
    bind() {
      this.shouldDisable() && this.destroy();
    }
    firstPaint() {
      var el;
      if (this.$el = this.parent.querySelector(this.el), !this.$parent || !this.$shadow) {
        var e = Object(domHelper.a)("div");
        e.style.position = "absolute", e.style.top = "0", e.style.right = "0", e.style.height = "0", e.style.zIndex = "99999999999999", e.style.setProperty("display", "block", "important"), this.$parent = e, this.$shadow = Object(domHelper.b)(e);
        var opt = (null === (el = chrome.runtime.getManifest().web_accessible_resources) || void 0 === el ? void 0 : el[0]).resources || chrome.runtime.getManifest().web_accessible_resources || [];
        opt.forEach(function(t2) {
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
      var cfg = Object(domHelper.a)("div");
      cfg.innerHTML = lodash.a.render(settingsManager.a.get("template-onboard-youtube-anti-adblocker"), { i18n_onboard_header: Object(coreUtils.i18n)(getYaaStorageKey("title")), i18n_onboard_desc: Object(coreUtils.i18n)(getYaaStorageKey("desc")), i18n_close: Object(coreUtils.i18n)(getYaaStorageKey("close")), image_source: chrome.runtime.getURL("/images/onboard-youtube-anti-adblocker.jpg") });
      var len = cfg.firstElementChild;
      len.setAttribute("savior-rendered", ""), this.$el.replaceWith(len), this.$el = len;
    }
    render() {
      var el;
      this.shouldDisable() || (this.$el && (null === (el = this.$el) || void 0 === el ? void 0 : el.innerHTML) || this.firstPaint(), this.$el && (Object(coreUtils.devLog)("OnboardingYoutubeAntiAdblocker rendered"), this.$el.removeAttribute("hidden"), this.sendMetric("YtdAntiAdblockerOnboard", 0)));
    }
    bindListener() {
      var el;
      this.$el && (null === (el = Object(coreUtils.query)(onboardYaaStep.Close, this.$el)) || void 0 === el || el.addEventListener("click", this.onClickClose.bind(this)));
    }
    destroy() {
      var el, ev, r2, nd;
      this.destroyed = true, null === (el = this.$el) || void 0 === el || el.remove(), null === (ev = this.$parent) || void 0 === ev || ev.remove(), this.$el ? null === (nd = Object(coreUtils.query)(onboardYaaStep.Close, this.$el)) || void 0 === nd || nd.removeEventListener("click", this.onClickClose.bind(this)) : null === (r2 = this.parent.querySelector(this.el)) || void 0 === r2 || r2.remove();
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
      var el = YoutubeAdblockOnboarder.closeCount + 1;
      this.sendMetric("YtdAntiAdblockerOnboardClose", el), this.setState({ disabled: true }), settingsManager.a.set("youtube_anti_adblocker_onboarding_shown_count", el), this.destroy();
    }
    sendMetric(el, ev) {
      detectorLogger.a.log(el, ev);
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
    firstPaint(el) {
      var ev, r2;
      this.$el = el.querySelector(this.el), null === (ev = this.$el) || void 0 === ev || ev.addEventListener("click", this.onClick), null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("change", this.onChange), this.$el && (this.$el.value = parserModule89.a.client);
    }
    render(el) {
      this.$el && Object(coreUtils.devLog)("ChangeYoutubeClientButton render");
    }
    bindListener(el) {
    }
    destroy() {
    }
    onClick(t) {
      var ev, r2, nd;
      (null === (ev = null == t ? void 0 : t.target) || void 0 === ev ? void 0 : ev.disabled) || (null === (r2 = null == t ? void 0 : t.target) || void 0 === r2 ? void 0 : r2.hasAttribute("disabled")) || (null === (nd = null == t ? void 0 : t.target) || void 0 === nd ? void 0 : nd.classList.contains("disabled")) || false || (this.setState({ opening: !this.state.opening }), t.target.closest("#expansion"));
    }
    onChange(el) {
      parserModule89.a.client = el.target.value, EE.emit("widget.forceUpdate");
    }
    close(el) {
      this.setState({ opening: false });
    }
  }
  var settingsModule90 = r(90);
  var Nt = w;
  var Dt = A;
  class SkipVideoAdComponent extends StateComponent {
    getDefaultState() {
      return { isHovered: settingsManager.a.get("skip_video_hovered"), isHidden: false };
    }
    bind() {
      this.skipVideo = this.skipVideo.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    firstPaint(el) {
      var ev, r2;
      this.$el = el.querySelector(this.el), null === (ev = this.$el) || void 0 === ev || ev.addEventListener("click", this.skipVideo), !this.state.isHovered && (null === (r2 = this.$el) || void 0 === r2 || r2.addEventListener("mouseenter", this.onMouseEnter));
    }
    render() {
      var el, ev, r2, nd;
      this.state.isHovered && (null === (ev = null === (el = this.$el) || void 0 === el ? void 0 : el.querySelector(".red-dot")) || void 0 === ev || ev.remove()), this.shouldHide() ? null === (r2 = this.$el) || void 0 === r2 || r2.setAttribute("hidden", "") : null === (nd = this.$el) || void 0 === nd || nd.removeAttribute("hidden");
    }
    bindListener() {
    }
    destroy() {
      var el, ev;
      null === (el = this.$el) || void 0 === el || el.removeEventListener("click", this.skipVideo), !this.state.isHovered && (null === (ev = this.$el) || void 0 === ev || ev.removeEventListener("mouseenter", this.onMouseEnter));
    }
    skipVideo() {
      var t = this.parent.$node, ev = "VIDEO" === t.tagName ? t : this.findVideoDeep(t);
      ev ? ev.currentTime = ev.duration - 0.1 : t.src && Object(coreUtils.sendMessage)({ type: saviorConstants.b.SKIP_VIDEO, params: { url: t.src } }), detectorLogger.a.log("SkipVideo", detectorLogger.a.SKIP_VIDEO);
    }
    onMouseEnter() {
      this.setState({ isHovered: true }), settingsManager.a.set("skip_video_hovered", true);
    }
    findVideoDeep(el) {
      var ev = el.querySelector("video");
      if (ev) return ev;
      var r2, nd = Nt(el.querySelectorAll("*"));
      try {
        for (nd.s(); !(r2 = nd.n()).done; ) {
          var idx = r2.value;
          if (idx.shadowRoot) {
            var opt = this.findVideoDeep(idx.shadowRoot);
            if (opt) return opt;
          }
        }
      } catch (t2) {
        nd.e(t2);
      } finally {
        nd.f();
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
  var qt = w;
  function iteratorUnpackHelper(arr, len) {
    return destructureArray(arr, len);
  }
  function arraySliceHelper(arr, len) {
    return (arr || []).slice(0, len);
  }
  function Qt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var wrapFn = function(fn) { return fn; }, markFn = function(fn) { return fn; }; (Qt=function(){return{w:wrapFn,m:markFn}})()}
  var zt = b;
  var SaviorWidgetController, Vt = function(el, ev, r2, nd) {
    return new (r2 || (r2 = Promise))((function(idx, opt) {
      function arg(t2) {
        try {
          url(nd.next(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function st(t2) {
        try {
          url(nd.throw(t2));
        } catch (t3) {
          opt(t3);
        }
      }
      function url(t2) {
        var e2;
        t2.done ? idx(t2.value) : (e2 = t2.value, e2 instanceof r2 ? e2 : new r2((function(t3) {
          t3(e2);
        }))).then(arg, st);
      }
      url((nd = nd.apply(el, ev || [])).next());
    }));
  }, widgetConfigOptions = "www.youtube.com" === location.host && false;
  function isGenericFilename(el) {
    if (!(null == el ? void 0 : el.trim())) return true;
    var ev = el.trim();
    return !/\s/.test(ev) && (!!/^(playlist|master|index|chunklist|manifest|video|videoplayback|noname|watch)$/i.test(ev) || /^[\w.-]+$/.test(ev) && ev.length <= 80);
  }
  function getBestMediaTitle(el, ev) {
    for (var r2 = 0, nd = [el.fileName, el.title, el.filename]; r2 < nd.length; r2++) {
      var opt = nd[r2];
      if (opt && !isGenericFilename(opt)) return opt;
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
    })(ev) || document.title || "video";
  }
  class SaviorVideoWidget extends CompositeComponent {
    constructor(el, ev, r2, arg) {
      var st, cfg, len, fn, hdr, prop, val, msg, ctx, g2, b2;
      super(), this.isSkipVideoEnabled = false, this.autoHideWidget = false, this.isImage = false, this.id = el, this.EE = new styleInjector.a(), this.$el = Object(domHelper.a)("div", domConstants.h.WrapperClassName), this.$node = ev, this.sharedState = r2, this.updateSharedState = arg, EE.emit("onboarding-popup.refresh_popup"), this.getSiteData(), this.$parent = null !== (len = null === (cfg = null === (st = this.siteData) || void 0 === st ? void 0 : st.getCustomParent) || void 0 === cfg ? void 0 : cfg.call(st, this.$node)) && void 0 !== len ? len : Object(domHelper.d)(this.$node);
      var w2 = (Object(domHelper.m)(this.$node) || (null === (hdr = null === (fn = this.getSiteData()) || void 0 === fn ? void 0 : fn.isValidVideoNode) || void 0 === hdr ? void 0 : hdr.call(fn, this.$node))) && settingsManager.a.get("detach_enabled") && !urlMatcher.a.checkRegex(location.href, "disallow-pip");
      this.isImage = this.$node.hasAttribute("savior-scanned-img");
      var A2 = { behavior: new WidgetContainer(domConstants.h.Savior, this, void 0, { hasImage: this.isImage }), toggleLight: new CinemaModeComponent(domConstants.h.ToggleLightButton, this, { isLightOff: this.sharedState.isLightOffGlobal, isHidden: this.isImage }), otherFeature: new DownloadBtnComp(domConstants.h.OtherFeatureButton, this), download: new MainDownloadComponent(domConstants.h.DownloadButton, this), skipVideo: new SkipVideoAdComponent(domConstants.h.SkipVideoButton, this, { isHidden: this.$node.hasAttribute("savior-scanned-img") }) };
      SaviorWidgetController.siteDismissed() ? (null === (prop = this.getComponent("behavior")) || void 0 === prop || prop.destroy(), null === (val = this.getComponent("otherFeature")) || void 0 === val || val.destroy(), null === (msg = this.getComponent("toggleLight")) || void 0 === msg || msg.destroy(), null === (ctx = this.getComponent("pin")) || void 0 === ctx || ctx.destroy(), null === (g2 = this.getComponent("transferMobile")) || void 0 === g2 || g2.destroy()) : A2.transferMobile = new TransferComp(domConstants.h.TransferMobileWrapper, this), w2 && (A2.pin = new PipComponent(domConstants.h.PinButton, this, { opening: document.pictureInPictureElement == this.$node })), widgetConfigOptions && (A2.clientChooser = new SettingsMenuComp(domConstants.h.ChangeYoutubeClientButton, this)), super.components = A2, this.fetchDownloads = this.fetchDownloads.bind(this), this.onForceUpdate = this.onForceUpdate.bind(this), this.runChilds((t2) => {
        t2.bind();
      }), this.isWindow = "Windows" === (null === (b2 = window.navigator.userAgentData) || void 0 === b2 ? void 0 : b2.platform), this.state = {}, EE.on("widget.forceUpdate", this.onForceUpdate), settingsManager.a.has("image_download_enabled") && "IMG" == this.$node.nodeName && (this.autoHideWidget = !settingsManager.a.get("image_download_enabled")), this.isSkipVideoEnabled = false, this.render(), super._bindListener(this.$node);
      try {
        if (this.$node.matches(":hover") || (this.$parent && this.$parent.matches(":hover"))) {
          var behavior = this.getComponent("behavior");
          null == behavior || behavior.onFocused();
        }
      } catch (_e) {}
    }
    firstPaint(el) {
      var ev, r2, arg = (Object(domHelper.m)(this.$node) || (null === (r2 = null === (ev = this.getSiteData()) || void 0 === ev ? void 0 : ev.isValidVideoNode) || void 0 === r2 ? void 0 : r2.call(ev, this.$node))) && settingsManager.a.get("detach_enabled") && !urlMatcher.a.checkRegex(location.href, "disallow-pip");
      this.$el.innerHTML = lodash.a.render(settingsManager.a.get("template-widget"), { i18n_close_tooltip: Object(coreUtils.i18n)("widget_hide_panel"), i18n_download_tooltip: Object(coreUtils.i18n)("widget_no_media_found"), i18n_download_box_header_title: Object(coreUtils.i18n)("widget_download_box_title"), i18n_no_media_found_widget: Object(coreUtils.i18n)("widget_no_media_found"), i18n_downloading_media: Object(coreUtils.i18n)("widget_downloading_media"), i18n_mobile_button: Object(coreUtils.i18n)("mobile_button"), i18n_pip_button: Object(coreUtils.i18n)("popup_pip_button"), i18n_switch: Object(coreUtils.i18n)(this.sharedState.isLightOffGlobal ? "turn_on_light" : "turn_off_light"), i18n_other_feature: Object(coreUtils.i18n)("widget_other_options"), i18n_hide_panel: Object(coreUtils.i18n)("widget_hide_panel"), i18n_hide_panel_on_site: Object(coreUtils.i18n)("widget_hide_panel_on_site", location.host), i18n_go_to_settings: Object(coreUtils.i18n)("widget_go_to_settings"), has_pip: arg, no_downloads: false, has_mobile: false, has_client_chooser: widgetConfigOptions, youtube_clients: widgetConfigOptions ? Object.keys(settingsModule90.a) : void 0, current_youtube_client: parserModule89.a.client, has_skip_video: this.isSkipVideoEnabled, skip_video_title: Object(coreUtils.i18n)("skip_video"), skip_video_description: Object(coreUtils.i18n)("skip_video_description") });
    }
    onForceUpdate() {
      LazyMediaTracker.getMediaObjectsFromNode(this.$node).then((el) => {
        var ev;
        el = enrichMediaMeta((null == el ? void 0 : el.filter((t2) => !!t2)) || []);
        null === (ev = this.getComponent("download")) || void 0 === ev || ev.setState({ mediaObjects: el, downloads: null, opening: false });
        this.activeOmnibox(el);
        var behavior = this.getComponent("behavior");
        null == behavior || behavior.updateParent();
        try {
          if (this.$node.matches(":hover") || (this.$parent && this.$parent.matches(":hover"))) {
            null == behavior || behavior.onFocused();
          }
        } catch (_e) {}
      });
    }
    updateParent() {
      super.runChilds((el) => {
        var ev;
        null === (ev = el.updateParent) || void 0 === ev || ev.call(el);
      });
    }
    getSiteData() {
      return this.siteData || (this.siteData = Object(siteDataExtractor.getSiteData)(location.host)), this.siteData;
    }
    activeOmnibox(el) {
      SaviorWidgetController.toggleOmniBox(this, el);
    }
    shouldHideWidget() {
      var el, ev, r2, idx, arg, st, url, cfg, len, fn, dom, hdr, prop, val = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (this.autoHideWidget) return true;
      if (Object(domHelper.h)()) return true;
      if (urlMatcher.a.check(this.$node, "hide-widget")) return true;
      if (this.isImage && !(null === (ev = null === (el = this.getSiteData()) || void 0 === el ? void 0 : el.shouldShowWidgetForImage) || void 0 === ev ? void 0 : ev.call(el, this.$node))) return true;
      (!this.$parent || !this.$parent.isConnected) && (this.$parent = null !== (arg = null === (idx = null === (r2 = this.siteData) || void 0 === r2 ? void 0 : r2.getCustomParent) || void 0 === idx ? void 0 : idx.call(r2, this.$node)) && void 0 !== arg ? arg : Object(domHelper.d)(this.$node));
      var msg = urlMatcher.a.shouldWidgetAttachToParentNode(location.hostname) || (null === (url = null === (st = this.getSiteData()) || void 0 === st ? void 0 : st.shouldWidgetAttachToParentNode) || void 0 === url ? void 0 : url.call(st, this.$node)) ? this.$parent : this.$node;
      if ((msg.dataset && msg.dataset.saviorDismissed === "true") || (this.$node && this.$node.dataset && this.$node.dataset.saviorDismissed === "true")) return true;
      if (document.pictureInPictureElement === msg || document.pictureInPictureElement === this.$node) return true;
      var beh = this.getComponent("behavior");
      if (beh) beh.isVertical = false;
      var y = msg.offsetWidth, g2 = false;
      msg.offsetHeight > y && y < domConstants.b && (this.getComponent("behavior").isVertical = true, g2 = true);
      var b2 = this.$node;
      "none" == this.$parent.style.display && (b2 = this.$parent.parentElement || this.$parent);
      var w2 = getComputedStyle(b2);
      0 == y && (y = parseInt(w2.width));
      var A2 = domConstants.a.find((t2) => location.href.match(t2.rx));
      if (A2 || this.getSiteData()) {
        var _2 = "number" == typeof (null == A2 ? void 0 : A2.width) ? A2.width : domConstants.b;
        if (A2) {
          if ((null == A2 ? void 0 : A2.closest) && this.$node.closest(A2.closest)) return true;
          if (null === (cfg = null == A2 ? void 0 : A2.isMiniPlayerNode) || void 0 === cfg ? void 0 : cfg.call(A2, this.$node, this.$parent)) return true;
          if (null === (len = null == A2 ? void 0 : A2.notMiniPlayerNode) || void 0 === len ? void 0 : len.call(A2, this.$node, this.$parent)) return false;
        }
        if (null === (dom = null === (fn = this.getSiteData()) || void 0 === fn ? void 0 : fn.isMiniPlayerNode) || void 0 === dom ? void 0 : dom.call(fn, this.$node, this.$parent)) return true;
        if (null === (prop = null === (hdr = this.getSiteData()) || void 0 === hdr ? void 0 : hdr.notMiniPlayerNode) || void 0 === prop ? void 0 : prop.call(hdr, this.$node, this.$parent)) return false;
        if (!g2 && y < _2 && !val) return true;
      }
      return false;
    }
    destroy() {
      EE.off("widget.forceUpdate", this.onForceUpdate), super._destroy();
    }
    getDownloadState() {
      var el = this.getComponent("download");
      return (null == el ? void 0 : el.state) || null;
    }
    getDownloads() {
      var el;
      return (null === (el = this.getDownloadState()) || void 0 === el ? void 0 : el.downloads) || [];
    }
    getMediaObjects() {
      var el;
      return (null === (el = this.getDownloadState()) || void 0 === el ? void 0 : el.mediaObjects) || [];
    }
    fetchDownloads(el) {
      return Vt(this, void 0, void 0, Qt().m((function ev() {
        var r2;
        return Qt().w((function(e2) {
          for (; ; ) switch (e2.n) {
            case 0:
              if (!(r2 = this.getComponent("download"))) {
                e2.n = 1;
                break;
              }
              return e2.a(2, null == r2 ? void 0 : r2.fetchDownloads(el));
            case 1:
              return e2.a(2);
          }
        }), ev, this);
      })));
    }
    createPendingDownloads() {
      var el, ev, r2 = getMediaProvider(), n = (null === (el = null == r2 ? void 0 : r2.getPreviewFromNode) || void 0 === el ? void 0 : el.call(r2, this.$node)) || null, opt = this.getMediaObjects(), a = (null == opt ? void 0 : opt[0]) || n;
      if (!a) return [];
      var st = (null == n ? void 0 : n.id) || (null === (ev = null == r2 ? void 0 : r2.getItemIdFromNode) || void 0 === ev ? void 0 : ev.call(r2, this.$node));
      if (n) return [formatLazyItem(n, { widgetId: this.id, lazyItemId: st })];
      var url = getBestMediaTitle(a, this.$node), cfg = a.thumbnail || Object(coreUtils.getVideoPoster)(this.$node) || void 0, len = "string" == typeof a.url ? a.url : location.href;
      return [formatLazyItem({ id: String(a.id || "pending-" + this.id), url: len, type: a.type || "video", ext: a.ext || "mp4", exts: a.exts || ["mp4"], title: url, thumbnail: cfg }, { widgetId: this.id, lazyItemId: st })];
    }
    setState(el) {
      this.state = Object.assign(Object.assign({}, this.state), el), this.render();
    }
  }
  function initSaviorWidget() {
    SaviorWidgetController = { $host: null, $body: null, $toast: null, nodeWidgetMap: /* @__PURE__ */ new Map(), widget: null, widgetCount: 0, sharedState: { isLightOffGlobal: false, viewedWidgetId: null, isDismissed: false, onboardingNewMPClient: null }, toasts: [], widgetDownloadsMap: /* @__PURE__ */ new Map(), mountDirectly: urlMatcher.a.check(location.host, "mount-directly"), load() {
      var el, ev = Object(domHelper.c)();
      this.$host = ev;
      var r2 = Object(domHelper.b)(ev), opt = (null === (el = chrome.runtime.getManifest().web_accessible_resources) || void 0 === el ? void 0 : el[0]).resources || chrome.runtime.getManifest().web_accessible_resources || [];
      opt.forEach((function(t2) {
        if (typeof t2 === "string" && t2.endsWith(".css")) {
          _injectSaviorCss(r2, t2);
        }
      }));
      var st = Object(domHelper.a)("div", "body");
      this.$body = st;
      var url = Object(domHelper.a)("div", "turn-lights-overlay");
      st.appendChild(url), this.$toast = Object(domHelper.a)("toasts"), this.$toast.id = "toasts-container", st.appendChild(this.$toast), r2.appendChild(st), document.documentElement.appendChild(ev);
      var cfg = Object(domHelper.a)("style");
      cfg.innerHTML = overlayCss.a, document.head.appendChild(cfg), this.sharedState.isDismissed = this.siteDismissed(), EE.on("widget.node-changed", this.handleNodeChanged.bind(this)), EE.on("widget.get_shadow_dom", () => {
        EE.emit("widget.shadow_dom_result", this.$body);
      }), EE.on("widget.request_matched", (t2) => {
        LazyMediaTracker.processRequest(t2) && EE.emit("widget.updateMedia");
      }), EE.on("location.href.changed", () => {
        LazyMediaTracker.refreshIds();
        EE.emit("widget.forceUpdate");
      }), EE.on("widget.toast.open", (t2) => {
        var e2 = new ToastNotification({ message: t2.message, closable: t2.closable, duration: t2.duration, onAttached: t2.onAttached, onDetached: (t3) => {
          var e3 = this.toasts.findIndex((e4) => e4.id == t3);
          this.toasts.splice(e3, 1);
        } });
        this.toasts.push(e2), this.$toast.appendChild(e2.attach());
      });
    }, updateSharedState(el) {
      for (var ev in el) {
        var r2 = ev;
        this.sharedState[r2] = el[r2];
      }
      var nd, idx = qt(this.nodeWidgetMap.values());
      try {
        for (idx.s(); !(nd = idx.n()).done; ) {
          var opt = nd.value;
          el.hasOwnProperty("isLightOffGlobal") && opt.getComponent("toggleLight").setState({ isLightOff: el.isLightOffGlobal });
        }
      } catch (t2) {
        idx.e(t2);
      } finally {
        idx.f();
      }
    }, dismissAllWidget() {
      this.updateSharedState({ isDismissed: true });
      var el = settingsManager.a.get(saviorConstants.o) || [];
      el.push(location.host.replace("www.", "")), settingsManager.a.set(saviorConstants.o, el);
      var ev, r2 = qt(this.nodeWidgetMap.values());
      try {
        for (r2.s(); !(ev = r2.n()).done; ) {
          ev.value.destroy();
        }
      } catch (t2) {
        r2.e(t2);
      } finally {
        r2.f();
      }
    }, siteDismissed() {
      var el = settingsManager.a.get(saviorConstants.o);
      return !(!el || !el.length) && el.includes(location.hostname.replace("www.", ""));
    }, handleNodeChanged(el) {
      var ev, r2, nd, idx = qt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []);
      try {
        for (idx.s(); !(nd = idx.n()).done; ) {
          var opt = nd.value, arg = this.nodeWidgetMap.get(opt);
          (null === (r2 = null === (ev = this.widget) || void 0 === ev ? void 0 : ev.$parent) || void 0 === r2 ? void 0 : r2.contains(null == arg ? void 0 : arg.$parent)) && this.unmountCurrentWidget(), null == arg || arg.destroy(), this.nodeWidgetMap.delete(opt);
        }
      } catch (t2) {
        idx.e(t2);
      } finally {
        idx.f();
      }
      var st, url = qt(el);
      try {
        for (url.s(); !(st = url.n()).done; ) {
          var cfg = st.value;
          this.nodeWidgetMap.get(cfg) || (this.widgetCount++, this.nodeWidgetMap.set(cfg, new SaviorVideoWidget(this.widgetCount, cfg, this.sharedState, this.updateSharedState.bind(this))));
        }
      } catch (t2) {
        url.e(t2);
      } finally {
        url.f();
      }
      clearTimeout(this._timeoutCleanup), this._timeoutCleanup = setTimeout(() => {
        this.nodeWidgetMap.forEach((t2, e2) => {
          e2.hasAttribute("savior-scanned-img") && e2.getAttribute("savior-scanned-img") === location.href || e2.isConnected || (this.nodeWidgetMap.delete(e2), t2.destroy());
        });
      }, 42);
    }, mountWidget(el) {
      var ev, r2, idx, opt, arg, st, url, cfg, len, fn, dom, hdr, prop, val;
      if (!(null === (r2 = null === (ev = this.widget) || void 0 === ev ? void 0 : ev.$parent) || void 0 === r2 ? void 0 : r2.contains(el.$node)) && !this.sharedState.isDismissed) {
        if (this.unmountCurrentWidget(), this.widget = el, this.mountDirectly) {
          var msg = Object(domHelper.a)("style"), ctx = (null === (idx = chrome.runtime.getManifest().web_accessible_resources) || void 0 === idx ? void 0 : idx[0]).resources || chrome.runtime.getManifest().web_accessible_resources || [];
          msg.innerHTML = '\n					:not(:defined){display:flex;}\n					.info-ext{max-width:100px;overflow:hidden;text-overflow:ellipsis;}\n					dropdown-box-body{margin:auto;width:100%;}\n					panel[value="loading"]{margin:auto;}\n					.download-box dropdown-box-header img{width:auto}\n				', null === (arg = null === (opt = this.widget) || void 0 === opt ? void 0 : opt.$parent) || void 0 === arg || (arg.appendChild(msg), ctx.forEach((function(t2) {
            if (typeof t2 === "string" && t2.endsWith(".css")) {
              _injectSaviorCss(arg, t2);
            }
          }))), null === (url = null === (st = this.widget) || void 0 === st ? void 0 : st.$parent) || void 0 === url || url.appendChild(this.widget.$el);
        } else null === (cfg = this.$body) || void 0 === cfg || cfg.appendChild(this.widget.$el);
        window.location.host.match(/youtube\.com/i) && (Object(domHelper.h)() ? null === (dom = null === (fn = null === (len = this.widget) || void 0 === len ? void 0 : len.$el) || void 0 === fn ? void 0 : fn.parentElement) || void 0 === dom || dom.setAttribute("hidden", "true") : null === (val = null === (prop = null === (hdr = this.widget) || void 0 === hdr ? void 0 : hdr.$el) || void 0 === prop ? void 0 : prop.parentElement) || void 0 === val || val.removeAttribute("hidden"));
      }
    }, unmountCurrentWidget() {
      this.widget && (this.widget.$el.remove(), this.widget = null);
    }, getAllDownloads(el) {
      return Vt(this, void 0, void 0, Qt().m((function ev() {
        var r2, nd, o, arg, st, url, cfg, l, fn;
        return Qt().w((function(e2) {
          for (; ; ) switch (e2.n) {
            case 0:
              if (r2 = false !== (null == el ? void 0 : el.resolveQuality), nd = Array.from(this.nodeWidgetMap.values()), o = getMediaProvider(), r2 || !o) {
                e2.n = 1;
                break;
              }
              if (!(arg = o.collectPendingItems()).length) {
                e2.n = 1;
                break;
              }
              return e2.a(2, arg.map((t2) => {
                var e3, r3, n2, idx, a2, s2 = qt(this.nodeWidgetMap.entries());
                try {
                  for (s2.s(); !(a2 = s2.n()).done; ) {
                    var u2 = destructureArray(a2.value, 2), c2 = u2[0], l2 = u2[1], f2 = null === (e3 = o.getItemIdFromNode) || void 0 === e3 ? void 0 : e3.call(o, c2);
                    if (f2 && f2 === t2.id) {
                      idx = l2.id;
                      break;
                    }
                    var dom = null === (r3 = o.findItemRoot) || void 0 === r3 ? void 0 : r3.call(o, c2);
                    if (dom && (null === (n2 = o.getItemIdFromNode) || void 0 === n2 ? void 0 : n2.call(o, dom)) === t2.id) {
                      idx = l2.id;
                      break;
                    }
                  }
                } catch (t3) {
                  s2.e(t3);
                } finally {
                  s2.f();
                }
                return formatLazyItem(t2, { widgetId: idx, lazyItemId: t2.id });
              }));
            case 1:
              if (!r2) {
                e2.n = 3;
                break;
              }
              return e2.n = 2, Promise.allSettled(nd.map((t2) => t2.fetchDownloads()));
            case 2:
              return e2.a(2, Object(coreUtils.flatten)(nd.map((t2) => {
                var e3;
                return normalizeItems(null !== (e3 = null == t2 ? void 0 : t2.getDownloads()) && void 0 !== e3 ? e3 : [], { widgetId: t2.id });
              })));
            case 3:
              st = [], url = 0, cfg = nd;
            case 4:
              if (!(url < cfg.length)) {
                e2.n = 7;
                break;
              }
              if (l = cfg[url], !(null == (fn = l.getDownloads()) ? void 0 : fn.length)) {
                e2.n = 5;
                break;
              }
              return st.push(...normalizeItems(fn, { widgetId: l.id })), e2.a(3, 6);
            case 5:
              st.push(...l.createPendingDownloads());
            case 6:
              url++, e2.n = 4;
              break;
            case 7:
              return e2.a(2, st);
          }
        }), ev, this);
      })));
    }, resolveDownloadsForWidget(el) {
      var ev, r2;
      return Vt(this, void 0, void 0, Qt().m((function domHelper2() {
        var idx, o, a, st, u, c, len, fn, dom;
        return Qt().w((function(n) {
          for (; ; ) switch (n.n) {
            case 0:
              if (idx = Array.from(this.nodeWidgetMap.values()), o = idx.find((e2) => e2.id === el)) {
                n.n = 1;
                break;
              }
              return n.a(2, []);
            case 1:
              if (a = getMediaProvider(), st = !!(null === (ev = null == a ? void 0 : a.findItemRoot) || void 0 === ev ? void 0 : ev.call(a, o.$node)), !(a && st && a.resolveItemFromNode)) {
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
              return len = null === (r2 = a.getItemIdFromNode) || void 0 === r2 ? void 0 : r2.call(a, o.$node), fn = normalizeItems(u, { widgetId: o.id, lazyItemId: len }), null == c || c.setState({ mediaObjects: u, downloads: fn, isGettingDownloads: false }), n.a(2, fn);
            case 4:
              return n.n = 5, o.fetchDownloads();
            case 5:
              return dom = o.getDownloads() || [], n.a(2, normalizeItems(dom, { widgetId: o.id }));
          }
        }), domHelper2, this);
      })));
    }, resolveDownloadsForLazyItem(el) {
      return Vt(this, void 0, void 0, Qt().m((function ev() {
        var r2, nd, idx, opt;
        return Qt().w((function(e2) {
          for (; ; ) switch (e2.n) {
            case 0:
              if (r2 = getMediaProvider()) {
                e2.n = 1;
                break;
              }
              return e2.a(2, []);
            case 1:
              if (nd = Array.from(this.nodeWidgetMap.values()), !(idx = nd.find((e3) => {
                var n2;
                return (null === (n2 = r2.getItemIdFromNode) || void 0 === n2 ? void 0 : n2.call(r2, e3.$node)) === el;
              }))) {
                e2.n = 2;
                break;
              }
              return e2.a(2, this.resolveDownloadsForWidget(idx.id));
            case 2:
              return e2.n = 3, r2.resolveItemById(el);
            case 3:
              if ((opt = e2.v).length) {
                e2.n = 4;
                break;
              }
              return e2.a(2, []);
            case 4:
              return e2.a(2, normalizeItems(opt, { lazyItemId: el }));
          }
        }), ev, this);
      })));
    }, toggleOmniBox(el, ev) {
      return Vt(this, void 0, void 0, Qt().m((function r2() {
        return Qt().w((function(r3) {
          for (; ; ) switch (r3.n) {
            case 0:
              if (this.widgetDownloadsMap.set(el, ev || []), !(Array.from(this.widgetDownloadsMap.entries()).reduce((t2, e2) => {
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
    } }, EE.on("widget.load", () => SaviorWidgetController.load()), EE.on("widget.downloads.get", (el) => Vt(this, void 0, void 0, Qt().m((function ev() {
      var r2, nd, idx;
      return Qt().w((function(e2) {
        for (; ; ) switch (e2.n) {
          case 0:
            return r2 = EE, e2.n = 1, SaviorWidgetController.getAllDownloads({ resolveQuality: !(null == el ? void 0 : el.onDemand) });
          case 1:
            nd = e2.v, idx = location.href, r2.emit.call(r2, "widget.downloads.get.success", { downloads: nd, href: idx });
          case 2:
            return e2.a(2);
        }
      }), ev);
    })))), EE.on("widget.downloads.resolveQuality", (t) => Vt(this, void 0, void 0, Qt().m((function ev() {
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
      }), ev, null, [[0, 5]]);
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
