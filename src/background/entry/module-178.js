// Module 178 [entry] - Savior Background Script Subsystem
export default function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  (function (global) {
    __webpack_require__.d(__webpack_exports__, "catchError", function () {
      return catchError;
    });
    var _common_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
    var _common_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
    var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(542);
    var _ytdl_ytdl_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(537);
    var _downloads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(456);
    var _common_serp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
    var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
    var _request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(740);
    var _pip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(730);
    var _background_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(124);
    var metrics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
    var utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
    var _common_consts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
    var _ab_testing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43);
    var _common_browser_features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11);
    function _createForOfIteratorHelper(e, t) {
      var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!r) {
        if (Array.isArray(e) || (r = _unsupportedIterableToArray(e)) || t && e && typeof e.length == "number") {
          if (r) {
            e = r;
          }
          var n = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (n >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[n++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          r = r.call(e);
        },
        n: function () {
          var e = r.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && r.return != null) {
              r.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function _unsupportedIterableToArray(e, t) {
      if (e) {
        if (typeof e == "string") {
          return _arrayLikeToArray(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return _arrayLikeToArray(e, t);
        } else {
          return undefined;
        }
      }
    }
    function _arrayLikeToArray(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var r = 0, n = Array(t); r < t; r++) {
        n[r] = e[r];
      }
      return n;
    }
    function _regenerator() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var r = typeof Symbol == "function" ? Symbol : {};
      var n = r.iterator || "@@iterator";
      var o = r.toStringTag || "@@toStringTag";
      function i(r, n, o, i) {
        var c = n && n.prototype instanceof s ? n : s;
        var u = Object.create(c.prototype);
        _regeneratorDefine2(u, "_invoke", function (r, n, o) {
          var i;
          var s;
          var c;
          var u = 0;
          var l = o || [];
          var d = false;
          var p = {
            p: 0,
            n: 0,
            v: e,
            a: f,
            f: f.bind(e, 4),
            d: function (t, r) {
              i = t;
              s = 0;
              c = e;
              p.n = r;
              return a;
            }
          };
          function f(r, n) {
            s = r;
            c = n;
            t = 0;
            for (; !d && u && !o && t < l.length; t++) {
              var o;
              var i = l[t];
              var f = p.p;
              var h = i[2];
              if (r > 3) {
                if (o = h === n) {
                  c = i[(s = i[4]) ? 5 : (s = 3, 3)];
                  i[4] = i[5] = e;
                }
              } else if (i[0] <= f) {
                if (o = r < 2 && f < i[1]) {
                  s = 0;
                  p.v = n;
                  p.n = i[1];
                } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                  i[4] = r;
                  i[5] = n;
                  p.n = h;
                  s = 0;
                }
              }
            }
            if (o || r > 1) {
              return a;
            }
            d = true;
            throw n;
          }
          return function (o, l, h) {
            if (u > 1) {
              throw TypeError("Generator is already running");
            }
            if (d && l === 1) {
              f(l, h);
            }
            s = l;
            c = h;
            while ((t = s < 2 ? e : c) || !d) {
              if (!i) {
                if (s) {
                  if (s < 3) {
                    if (s > 1) {
                      p.n = -1;
                    }
                    f(s, c);
                  } else {
                    p.n = c;
                  }
                } else {
                  p.v = c;
                }
              }
              try {
                u = 2;
                if (i) {
                  if (!s) {
                    o = "next";
                  }
                  if (t = i[o]) {
                    if (!(t = t.call(i, c))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!t.done) {
                      return t;
                    }
                    c = t.value;
                    if (s < 2) {
                      s = 0;
                    }
                  } else {
                    if (s === 1 && (t = i.return)) {
                      t.call(i);
                    }
                    if (s < 2) {
                      c = TypeError("The iterator does not provide a '" + o + "' method");
                      s = 1;
                    }
                  }
                  i = e;
                } else if ((t = (d = p.n < 0) ? c : r.call(n, p)) !== a) {
                  break;
                }
              } catch (t) {
                i = e;
                s = 1;
                c = t;
              } finally {
                u = 1;
              }
            }
            return {
              value: t,
              done: d
            };
          };
        }(r, o, i), true);
        return u;
      }
      var a = {};
      function s() {}
      function c() {}
      function u() {}
      t = Object.getPrototypeOf;
      var l = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
        return this;
      }), t);
      var d = u.prototype = s.prototype = Object.create(l);
      function p(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, u);
        } else {
          e.__proto__ = u;
          _regeneratorDefine2(e, o, "GeneratorFunction");
        }
        e.prototype = Object.create(d);
        return e;
      }
      c.prototype = u;
      _regeneratorDefine2(d, "constructor", u);
      _regeneratorDefine2(u, "constructor", c);
      c.displayName = "GeneratorFunction";
      _regeneratorDefine2(u, o, "GeneratorFunction");
      _regeneratorDefine2(d);
      _regeneratorDefine2(d, o, "Generator");
      _regeneratorDefine2(d, n, function () {
        return this;
      });
      _regeneratorDefine2(d, "toString", function () {
        return "[object Generator]";
      });
      return (_regenerator = function () {
        return {
          w: i,
          m: p
        };
      })();
    }
    function _regeneratorDefine2(e, t, r, n) {
      var o = Object.defineProperty;
      try {
        o({}, "", {});
      } catch (e) {
        o = 0;
      }
      (_regeneratorDefine2 = function (e, t, r, n) {
        function i(t, r) {
          _regeneratorDefine2(e, t, function (e) {
            return this._invoke(t, r, e);
          });
        }
        if (t) {
          if (o) {
            o(e, t, {
              value: r,
              enumerable: !n,
              configurable: !n,
              writable: !n
            });
          } else {
            e[t] = r;
          }
        } else {
          i("next", 0);
          i("throw", 1);
          i("return", 2);
        }
      })(e, t, r, n);
    }
    function __awaiter(e, t, r, n) {
      return new (r ||= Promise)(function (o, i) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          if (e.done) {
            o(e.value);
          } else {
            (t = e.value, t instanceof r ? t : new r(function (e) {
              e(t);
            })).then(a, s);
          }
        }
        c((n = n.apply(e, t || [])).next());
      });
    }
    var _a;
    var _b;
    var offscreenAvailable = chrome.offscreen && typeof chrome.offscreen.createDocument == "function";
    if (offscreenAvailable) {
      Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.g)("offscreen.html");
    }
    global.IS_CONTENT_SCRIPT = false;
    var turnedOff = false;
    var openedPanels = new Set();
    var recentlyClosedTabs = new Map();
    var recentlyClosedWindows = new Map();
    var CLOSE_CLICK_GRACE_MS = 150;
    var SIDEPANEL_PORT = "savior-sidepanel";
    var adsblockPlusTurnedOff;
    function markRecentlyClosed(e, t) {
      var r = Date.now();
      if (e != null) {
        openedPanels.delete(e);
        recentlyClosedTabs.set(e, r);
      }
      if (t != null) {
        recentlyClosedWindows.set(t, r);
      }
    }
    function consumeRecentClose(e, t) {
      var r = Date.now();
      var n = recentlyClosedTabs.get(e);
      var o = recentlyClosedWindows.get(t);
      recentlyClosedTabs.delete(e);
      recentlyClosedWindows.delete(t);
      return n != null && r - n < CLOSE_CLICK_GRACE_MS || o != null && r - o < CLOSE_CLICK_GRACE_MS;
    }
    if ((_a = chrome.sidePanel) !== null && _a !== undefined) {
      _a.setPanelBehavior({
        openPanelOnActionClick: false
      }).catch(e => console.error(e));
    }
    chrome.runtime.onConnect.addListener(e => {
      var t;
      var r;
      if (e.name === SIDEPANEL_PORT) {
        e.onMessage.addListener(e => {
          if ((e == null ? undefined : e.tabId) != null) {
            t = e.tabId;
            openedPanels.add(t);
          }
          if ((e == null ? undefined : e.windowId) != null) {
            r = e.windowId;
          }
        });
        e.onDisconnect.addListener(() => {
          markRecentlyClosed(t, r);
        });
      }
    });
    chrome.action.onClicked.addListener(e => {
      var t;
      var r;
      var n;
      var o = e.id;
      if (o != null) {
        if (consumeRecentClose(o, e.windowId)) {
          openedPanels.delete(o);
        } else {
          if (openedPanels.has(o)) {
            openedPanels.delete(o);
            if ((t = chrome.sidePanel) !== null && t !== undefined) {
              t.close({
                windowId: e.windowId
              }).catch(e => console.error(e));
            }
            return;
          }
          openedPanels.add(o);
          if ((r = chrome.sidePanel) !== null && r !== undefined) {
            r.setOptions({
              tabId: o,
              path: "sidepanel.html",
              enabled: true
            });
          }
          if ((n = chrome.sidePanel) !== null && n !== undefined) {
            n.open({
              tabId: o
            }).catch(e => console.error(e));
          }
        }
      }
    });
    if ((_b = chrome.sidePanel) !== null && _b !== undefined) {
      _b.onClosed.addListener(e => {
        markRecentlyClosed(e.tabId, e.windowId);
      });
    }
    chrome.tabs.onRemoved.addListener(e => {
      openedPanels.delete(e);
      recentlyClosedTabs.delete(e);
    });
    try {
      chrome.coccoc.onGetTranscript.addListener(e => {
        sendMessage(e.tabId, {
          type: "get_transcript",
          data: {
            requestId: e.requestId,
            language: e.language
          }
        });
      });
    } catch (e) {
      console.error(e);
    }
    function sendMessage(e, t, r) {
      return __awaiter(this, undefined, undefined, _regenerator().m(function n() {
        var o;
        return _regenerator().w(function (n) {
          while (true) {
            switch (n.p = n.n) {
              case 0:
                n.p = 0;
                if (!e) {
                  n.n = 4;
                  break;
                }
                if (!r && r !== 0) {
                  n.n = 2;
                  break;
                }
                n.n = 1;
                return chrome.tabs.sendMessage(e, t, {
                  frameId: r
                });
              case 1:
                n.n = 3;
                break;
              case 2:
                n.n = 3;
                return chrome.tabs.sendMessage(e, t);
              case 3:
                n.n = 5;
                break;
              case 4:
                n.n = 5;
                return chrome.runtime.sendMessage(t);
              case 5:
                n.n = 7;
                break;
              case 6:
                n.p = 6;
                o = n.v;
                console.log(o);
              case 7:
                return n.a(2);
            }
          }
        }, n, null, [[0, 6]]);
      }));
    }
    function recordAttempTurnOffAdblock(e) {
      var t;
      var r;
      var i;
      var a;
      if (e && !turnedOff) {
        turnedOff = true;
        if ((r = (t = chrome.coccoc) === null || t === undefined ? undefined : t.mayTurnOffAdblockOnYoutube) !== null && r !== undefined) {
          r.call(t);
        }
        metrics__WEBPACK_IMPORTED_MODULE_10__.a.log("ForceDisableAdblockOnYoutube", 1);
        return;
      }
      if (!e) {
        var s = _common_options__WEBPACK_IMPORTED_MODULE_1__.a.get(_common_consts__WEBPACK_IMPORTED_MODULE_12__.w)?.turn_off_adblock_max_attemp || _common_consts__WEBPACK_IMPORTED_MODULE_12__.g;
        var c = _common_options__WEBPACK_IMPORTED_MODULE_1__.a.get(_common_consts__WEBPACK_IMPORTED_MODULE_12__.w)?.turn_off_adblock_duration || _common_consts__WEBPACK_IMPORTED_MODULE_12__.f;
        var u = _common_options__WEBPACK_IMPORTED_MODULE_1__.a.get(_common_consts__WEBPACK_IMPORTED_MODULE_12__.z);
        if (!u || u.startAt + c * 60 * 1000 < Date.now()) {
          u = {
            retryNo: 0,
            startAt: Date.now()
          };
        }
        u.retryNo++;
        _common_options__WEBPACK_IMPORTED_MODULE_1__.a.set(_common_consts__WEBPACK_IMPORTED_MODULE_12__.z, u);
        if (u.retryNo <= s) {
          if ((a = (i = chrome.coccoc) === null || i === undefined ? undefined : i.mayTurnOffAdblockOnYoutube) !== null && a !== undefined) {
            a.call(i);
          }
        }
      }
    }
    var currentAdguardInfo = null;
    function catchError(e, t = "adguardInject") {
      metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
        action: t,
        error: e.toString()
      });
    }
    function callServer(e) {
      return __awaiter(this, undefined, undefined, _regenerator().m(function t() {
        var r;
        var n;
        return _regenerator().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                r = Date.now();
                n = !(e == null ? undefined : e.ruleVersion);
                if (!e || !e.ruleVersion) {
                  t.n = 1;
                  break;
                }
                t.n = 1;
                return fetch("https://browser.coccoc.com/api/v1/youtube/adguard/rules", {
                  method: "HEAD"
                }).catch(e => {
                  catchError(e, "versionChecking");
                }).then(t => {
                  if (t == null ? undefined : t.ok) {
                    var o = t.headers.get("x-coc-coc-version") || "";
                    if (!e || !e.ruleVersion || o <= e.ruleVersion) {
                      (currentAdguardInfo = e).adguardFetchTime = r;
                    } else {
                      n = true;
                    }
                  }
                });
              case 1:
                if (n) {
                  t.n = 2;
                  break;
                }
                return t.a(2);
              case 2:
                t.n = 3;
                return fetch("https://browser.coccoc.com/api/v1/youtube/adguard/rules").catch(e => {
                  catchError(e, "ruleFetching");
                }).then(e => {
                  if (e == null ? undefined : e.ok) {
                    currentAdguardInfo ||= {};
                    currentAdguardInfo.ruleVersion = e.headers.get("x-coc-coc-version") || "";
                    return e.text();
                  }
                }).then(t => {
                  currentAdguardInfo = Object.assign(Object.assign({}, currentAdguardInfo), {
                    isAdguardEnabled: true,
                    script: t || (e == null ? undefined : e.script),
                    adguardFetchTime: r
                  });
                });
              case 3:
                return t.a(2);
            }
          }
        }, t);
      }));
    }
    function fetchRule(e, t, r) {
      return __awaiter(this, undefined, undefined, _regenerator().m(function n() {
        var o;
        var i;
        return _regenerator().w(function (n) {
          while (true) {
            switch (n.p = n.n) {
              case 0:
                o = (e == null ? undefined : e.isAdguardEnabled) == null || (e == null ? undefined : e.isAdguardEnabled);
                n.p = 1;
                if (!(t > 0)) {
                  n.n = 4;
                  break;
                }
                n.n = 2;
                return utils__WEBPACK_IMPORTED_MODULE_11__.sleep(t);
              case 2:
                n.n = 3;
                return callServer(e);
              case 3:
                return n.a(2);
              case 4:
                n.n = 5;
                return callServer(e);
              case 5:
                n.n = 10;
                break;
              case 6:
                n.p = 6;
                n.v;
                if (!(r >= 3)) {
                  n.n = 9;
                  break;
                }
                if (!e.script) {
                  n.n = 7;
                  break;
                }
                currentAdguardInfo = Object.assign(Object.assign({}, e), {
                  adguardFetchTime: Date.now()
                });
                return n.a(2);
              case 7:
                n.n = 8;
                return fetch(chrome.runtime.getURL("adguard_base_rules.js")).catch(e => {
                  catchError(e, "baseRuleFetching");
                }).then(e => {
                  if (e == null ? undefined : e.ok) {
                    return e.text();
                  }
                }).then(t => {
                  currentAdguardInfo = Object.assign(Object.assign({}, e), {
                    isAdguardEnabled: o,
                    script: t,
                    adguardFetchTime: Date.now()
                  });
                });
              case 8:
                return n.a(2);
              case 9:
                i = t === 0 ? 2000 : t * 2;
                n.n = 10;
                return fetchRule(e, i, r + 1);
              case 10:
                return n.a(2);
            }
          }
        }, n, null, [[1, 6]]);
      }));
    }
    var infoLogged = false;
    function getLogData() {
      return __awaiter(this, undefined, undefined, _regenerator().m(function o() {
        var i;
        var a;
        var s;
        var c;
        var u;
        return _regenerator().w(function (o) {
          while (true) {
            switch (o.n) {
              case 0:
                i = currentAdguardInfo ? Object.assign(Object.assign({}, currentAdguardInfo), {
                  script: currentAdguardInfo.script?.length
                }) : null;
                o.n = 1;
                return chrome.storage.local.get();
              case 1:
                a = o.v;
                s = a.adguardInfo;
                c = a.otherControls?.ab_test_data?.adguard_yt;
                u = s ? Object.assign(Object.assign({}, s), {
                  script: s.script?.length
                }) : null;
                metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                  action: "logDataAguard",
                  current: JSON.stringify(i),
                  ab: JSON.stringify(c),
                  store: JSON.stringify(u)
                });
              case 2:
                return o.a(2);
            }
          }
        }, o);
      }));
    }
    function logAdguardInfo() {
      chrome.runtime.sendMessage({
        type: "check_info_logged"
      }, e => __awaiter(this, undefined, undefined, _regenerator().m(function t() {
        return _regenerator().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                if (!(infoLogged = e.adguardInfoLogged)) {
                  t.n = 1;
                  break;
                }
                return t.a(2);
              case 1:
                getLogData();
                infoLogged = true;
              case 2:
                return t.a(2);
            }
          }
        }, t);
      })));
      setTimeout(() => {
        if (!infoLogged) {
          getLogData();
        }
      }, 3000);
      infoLogged = true;
    }
    function getAdguardStatusOffscreen() {
      return __awaiter(this, undefined, undefined, _regenerator().m(function e() {
        return _regenerator().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                return e.a(2, new Promise(e => {
                  chrome.runtime.sendMessage({
                    type: "update_adguard_status"
                  }, t => {
                    if ((t == null ? undefined : t.isAdguardEnabled) == null) {
                      e(true);
                    } else {
                      e(false);
                    }
                  });
                }));
            }
          }
        }, e);
      }));
    }
    function logAdguardStatus() {
      var e = false;
      chrome.runtime.sendMessage({
        type: "adguard_on_logged"
      }, t => {
        e = true;
        if (!(t == null ? undefined : t.adguardOnLogged)) {
          metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_ON);
        }
      });
      setTimeout(() => {
        if (!e) {
          metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_NO_OFFSCREEN);
        }
      }, 3000);
    }
    _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.processRequest({
      testName: "adguard_yt"
    }).then(e => __awaiter(undefined, undefined, undefined, _regenerator().m(function t() {
      var r;
      return _regenerator().w(function (t) {
        while (true) {
          switch (t.n) {
            case 0:
              r = function (e) {
                var t = utils__WEBPACK_IMPORTED_MODULE_11__.youtubeAdsblockedRules.some(t => {
                  var r;
                  var n = t.regex.test(e.url);
                  var o = t.type == e.type;
                  var i = Array.isArray(t.initiators) ? t.initiators.some(t => {
                    var r;
                    if ((r = e.initiator) === null || r === undefined) {
                      return undefined;
                    } else {
                      return r.includes(t);
                    }
                  }) : (r = e.initiator) === null || r === undefined ? undefined : r.includes(t.initiators);
                  return n && o && i;
                });
                var r = e.tabId;
                if (t && r) {
                  chrome.eyeoFilteringPrivate.addTabBlockedCount(r, 1);
                }
              };
              if (e.groupName && _common_browser_features__WEBPACK_IMPORTED_MODULE_14__.a.ADGUARD_SWITCHER) {
                t.n = 1;
                break;
              }
              return t.a(2);
            case 1:
              if (_common_browser_features__WEBPACK_IMPORTED_MODULE_14__.a.ADGUARD_SWITCHER) {
                chrome.webRequest.onBeforeRequest.addListener(e => {
                  r(e);
                }, {
                  urls: ["<all_urls>"]
                });
                chrome.eyeoFilteringPrivate.onCoccocAllowedDomainsChanged.addListener(function (e, t) {
                  if (currentAdguardInfo && e.includes("youtube.com")) {
                    if (t) {
                      currentAdguardInfo.isAdguardEnabled = false;
                      r(false);
                    } else {
                      currentAdguardInfo.isAdguardEnabled = true;
                      r(true);
                    }
                  }
                  function r(e) {
                    chrome.storage.local.get("adguardInfo", t => {
                      var r = t.adguardInfo || {};
                      var n = Object.assign(Object.assign({}, r), {
                        isAdguardEnabled: e
                      });
                      chrome.storage.local.set({
                        adguardInfo: n
                      });
                    });
                  }
                });
              }
              chrome.storage.local.get("adguardInfo", e => __awaiter(undefined, undefined, undefined, _regenerator().m(function t() {
                var r;
                var n;
                var o;
                var i;
                var a;
                return _regenerator().w(function (t) {
                  while (true) {
                    switch (t.p = t.n) {
                      case 0:
                        t.p = 0;
                        r = e.adguardInfo || {};
                        n = (r == null ? undefined : r.adguardFetchTime) || 0;
                        o = (r == null ? undefined : r.isAdguardEnabled) == null || (r == null ? undefined : r.isAdguardEnabled);
                        i = Date.now();
                        if (!(Math.abs(i - n) > 28800000)) {
                          t.n = 2;
                          break;
                        }
                        t.n = 1;
                        return fetchRule(r, 0, 0);
                      case 1:
                        if (currentAdguardInfo) {
                          chrome.storage.local.set({
                            adguardInfo: currentAdguardInfo
                          });
                        }
                      case 2:
                        currentAdguardInfo ||= r ? Object.assign({}, r) : {
                          isAdguardEnabled: o
                        };
                        t.n = 4;
                        break;
                      case 3:
                        t.p = 3;
                        a = t.v;
                        metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                          action: "adguardInject",
                          error: a == null ? undefined : a.toString()
                        });
                      case 4:
                        return t.a(2);
                    }
                  }
                }, t, null, [[0, 3]]);
              })));
            case 2:
              return t.a(2);
          }
        }
      }, t);
    })));
    var injectedTabs = new Set();
    function executeScript(details) {
      return __awaiter(this, undefined, undefined, _regenerator().m(function _callee9() {
        var tabId;
        var tabs;
        var neededTab;
        var script;
        var _t5;
        return _regenerator().w(function (_context9) {
          while (true) {
            switch (_context9.p = _context9.n) {
              case 0:
                _context9.p = 0;
                tabId = details == null ? undefined : details.tabId;
                if (tabId) {
                  _context9.n = 3;
                  break;
                }
                metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_NO_TAB_ID);
                _context9.n = 1;
                return chrome.tabs.query({
                  currentWindow: true
                });
              case 1:
                tabs = _context9.v;
                neededTab = tabs.find(e => {
                  var t;
                  return ((t = e.url) === null || t === undefined ? undefined : t.includes("youtube.com")) && e.status === "loading" && !injectedTabs.has(e.id);
                });
                if (neededTab) {
                  _context9.n = 2;
                  break;
                }
                return _context9.a(2);
              case 2:
                tabId = neededTab.id;
              case 3:
                injectedTabs.add(tabId);
                if (currentAdguardInfo && currentAdguardInfo.script) {
                  _context9.n = 5;
                  break;
                }
                metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_NO_SCRIPT);
                _context9.n = 4;
                return fetch(chrome.runtime.getURL("adguard_base_rules.js")).then(e => e.text());
              case 4:
                script = _context9.v;
                currentAdguardInfo ||= {};
                currentAdguardInfo.script = script;
              case 5:
                metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_SCRIPTING);
                chrome.scripting.executeScript({
                  target: {
                    tabId: tabId,
                    frameIds: [0]
                  },
                  injectImmediately: true,
                  world: chrome.scripting.ExecutionWorld.MAIN,
                  args: [currentAdguardInfo == null ? undefined : currentAdguardInfo.script],
                  func: args => {
                    try {
                      window.trustedTypes.createPolicy("default", {
                        createScript: function (e) {
                          return e;
                        }
                      });
                    } catch (e) {
                      console.log(e);
                    }
                    var injectCode = window.trustedTypes.defaultPolicy.createScript(args);
                    eval(injectCode);
                  }
                }).then(() => {
                  logAdguardStatus();
                });
                _context9.n = 7;
                break;
              case 6:
                _context9.p = 6;
                _t5 = _context9.v;
                metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                  action: "adguardInject",
                  error: _t5 == null ? undefined : _t5.toString()
                });
              case 7:
                return _context9.a(2);
            }
          }
        }, _callee9, null, [[0, 6]]);
      }));
    }
    function injectScript(details) {
      var promise;
      if (details.frameId === 0 && !_common_consts__WEBPACK_IMPORTED_MODULE_12__.j.some(e => details.url.includes(e)) && !_common_consts__WEBPACK_IMPORTED_MODULE_12__.m.some(e => details.url.includes(e))) {
        if (!currentAdguardInfo) {
          promise = chrome.storage.local.get("adguardInfo");
        }
        _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.processRequest({
          testName: "adguard_yt"
        }).then(abTest => __awaiter(this, undefined, undefined, _regenerator().m(function _callee0() {
          var allowedDomain;
          var adguardStatusOffscreen;
          var _t6;
          var _t7;
          return _regenerator().w(function (_context0) {
            while (true) {
              switch (_context0.p = _context0.n) {
                case 0:
                  _context0.p = 0;
                  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_HAS_EVENT);
                  if (!promise) {
                    _context0.n = 3;
                    break;
                  }
                  _context0.n = 1;
                  return promise;
                case 1:
                  _t6 = _context0.v.adguardInfo;
                  if (_t6) {
                    _context0.n = 2;
                    break;
                  }
                  _t6 = {};
                case 2:
                  currentAdguardInfo = _t6;
                case 3:
                  if (abTest.groupName && chrome.coccoc?.shouldBlockAdsOnYoutubeBySavior && _common_browser_features__WEBPACK_IMPORTED_MODULE_14__.a.ADGUARD_SWITCHER) {
                    _context0.n = 4;
                    break;
                  }
                  return _context0.a(2);
                case 4:
                  try {
                    chrome.scripting.executeScript({
                      target: {
                        tabId: details.tabId,
                        frameIds: [0]
                      },
                      injectImmediately: true,
                      world: chrome.scripting.ExecutionWorld.MAIN,
                      args: [_common_consts__WEBPACK_IMPORTED_MODULE_12__.a],
                      func: args => {
                        try {
                          window.trustedTypes.createPolicy("default", {
                            createScript: function (e) {
                              return e;
                            }
                          });
                        } catch (e) {
                          console.log(e);
                        }
                        var injectCode = window.trustedTypes.defaultPolicy.createScript(args);
                        eval(injectCode);
                      }
                    });
                  } catch (e) {
                    metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                      action: "adguardInject",
                      error: e == null ? undefined : e.toString()
                    });
                  }
                  _context0.n = 5;
                  return chrome.eyeoFilteringPrivate.getAllowedDomains("adblock");
                case 5:
                  allowedDomain = _context0.v;
                  if (!allowedDomain.includes("youtube.com")) {
                    _context0.n = 6;
                    break;
                  }
                  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                    action: "disabledAdblock"
                  });
                  return _context0.a(2);
                case 6:
                  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_IS_GROUP_TEST);
                  if (!currentAdguardInfo || (currentAdguardInfo == null ? undefined : currentAdguardInfo.isAdguardEnabled)) {
                    _context0.n = 8;
                    break;
                  }
                  _context0.n = 7;
                  return getAdguardStatusOffscreen();
                case 7:
                  adguardStatusOffscreen = _context0.v;
                  currentAdguardInfo.isAdguardEnabled = adguardStatusOffscreen;
                  chrome.storage.local.set({
                    adguardInfo: currentAdguardInfo
                  });
                case 8:
                  try {
                    logAdguardInfo();
                  } catch (e) {
                    metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                      action: "adguardInject",
                      error: e == null ? undefined : e.toString()
                    });
                  }
                  if (currentAdguardInfo == null ? undefined : currentAdguardInfo.isAdguardEnabled) {
                    executeScript(details);
                  }
                  chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(e => {
                    var t;
                    var r;
                    try {
                      if (!adsblockPlusTurnedOff) {
                        adsblockPlusTurnedOff = true;
                        if (e == 0) {
                          if ((r = (t = chrome.coccoc) === null || t === undefined ? undefined : t.mayTurnOffAdblockOnYoutube) !== null && r !== undefined) {
                            r.call(t);
                          }
                        }
                        chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(e => {
                          if (!e) {
                            metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_API_ERROR_TURN_OFF_ABP);
                          }
                        });
                      }
                    } catch (e) {
                      metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                        action: "adguardInject",
                        error: e.toString()
                      });
                    }
                  });
                  _context0.n = 10;
                  break;
                case 9:
                  _context0.p = 9;
                  _t7 = _context0.v;
                  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
                    action: "adguardInject",
                    error: _t7 == null ? undefined : _t7.toString()
                  });
                case 10:
                  return _context0.a(2);
              }
            }
          }, _callee0, null, [[0, 9]]);
        })));
      }
    }
    chrome.webNavigation.onCommitted.addListener(e => {
      if (e.url.includes("youtube.com")) {
        injectScript(e);
      }
    });
    chrome.webRequest.onResponseStarted.addListener(e => {
      if (e.type === "main_frame" || e.type === "sub_frame") {
        injectScript(e);
      }
    }, {
      urls: ["https://www.youtube.com/*"]
    });
    chrome.storage.onChanged.addListener((e, t) => {
      if (t == "local") {
        var n = e.adguardInfo?.newValue;
        if (n) {
          currentAdguardInfo = Object.assign(Object.assign({}, currentAdguardInfo), n);
          chrome.runtime.sendMessage({
            type: "update_adguard_status",
            isAdguardEnabled: n.isAdguardEnabled
          });
        }
      }
    });
    var hasDataUserBeforeSidepanel = false;
    function countStreak(e, t) {
      var r;
      chrome.storage.local.get(["onboardTrack"], e => {
        r = e.onboardTrack || {};
      });
      var n = Date.now();
      chrome.storage.local.get(["lastOnlineDay", "streakCount", "onboardTrack", "userBeforeSidepanel"], o => {
        if (!hasDataUserBeforeSidepanel && !o.userBeforeSidepanel) {
          if (o.lastOnlineDay) {
            chrome.storage.local.set({
              userBeforeSidepanel: true
            });
            hasDataUserBeforeSidepanel = true;
          } else {
            chrome.storage.local.set({
              userBeforeSidepanel: false
            });
            hasDataUserBeforeSidepanel = true;
          }
        }
        var i = o.lastOnlineDay || n;
        var a = o.streakCount || 0;
        var s = new Date(n).setHours(0, 0, 0, 0) - new Date(i).setHours(0, 0, 0, 0);
        if (s === 86400000) {
          a++;
        } else if (s !== 0) {
          a = 0;
        }
        var c = (o.onboardTrack || {}).coccocMobileBase || {};
        if ((a >= 4 || c.lastShow) && t == 0) {
          Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.e)({
            data: r.coccocMobileBase,
            onboardingType: "coccocMobileBase",
            currentTabId: e
          });
        }
        chrome.storage.local.set({
          lastOnlineDay: n,
          streakCount: a
        });
      });
    }
    function onExternalRequest(e, t, r) {
      if (!e || t.tab && t.tab.index === -1) {
        console.warn("Empty external request");
        r({
          status: "error",
          error_message: "empty_request"
        });
        return;
      }
      switch (e.action) {
        case "pip_url":
          EE.emit("pipRequest", {
            method: "pipUrl",
            params: e.params
          });
          r({
            status: "ok"
          });
          break;
        case "custom_metrics3":
          if (typeof e.data != "object" || !Object.keys(e.data).length) {
            r({
              status: "error",
              error_message: "bad_data"
            });
            return;
          }
          if (e.key === undefined || typeof e.key != "string") {
            r({
              status: "error",
              error_message: "bad_key"
            });
            return;
          }
          metrics__WEBPACK_IMPORTED_MODULE_10__.a.log("recordCustomData", [{
            key: e.key,
            value: JSON.stringify(e.data)
          }]);
          r({
            status: "ok"
          });
          break;
        case "adguard_injected":
          metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t, metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_REGISTER_INJECT);
          logAdguardStatus();
          break;
        case "get_serp_config":
          chrome.storage.local.get(e => {
            r({
              status: "ok",
              data: {
                gserpSelectors: e.gserpSelectors,
                customControlFromServer: e.otherControls.ab_test_data
              }
            });
          });
          return true;
      }
    }
    _common_options__WEBPACK_IMPORTED_MODULE_1__.a.load().then(() => {
      var e;
      _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.loadTestsFromServer();
      _templates__WEBPACK_IMPORTED_MODULE_2__.a.load();
      chrome.storage.local.get(["onboardTrack"], t => {
        e = t.onboardTrack || {};
      });
      chrome.tabs.onUpdated.addListener((e, t, r) => __awaiter(undefined, undefined, undefined, _regenerator().m(function n() {
        return _regenerator().w(function (n) {
          while (true) {
            switch (n.n) {
              case 0:
                if (_common_serp__WEBPACK_IMPORTED_MODULE_5__.b && _common_serp__WEBPACK_IMPORTED_MODULE_5__.b.isYSERPHref(r.url) && t.status === "complete" && r.active) {
                  EE.emit("yserp_matched", e);
                }
              case 1:
                return n.a(2);
            }
          }
        }, n);
      })));
      chrome.webRequest.onCompleted.addListener(e => __awaiter(undefined, undefined, undefined, _regenerator().m(function t() {
        return _regenerator().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                if (!e.url.startsWith("chrome-extension://" + chrome.runtime.id)) {
                  t.n = 1;
                  break;
                }
                return t.a(2);
              case 1:
                if (!(e.statusCode < 400)) {
                  t.n = 2;
                  break;
                }
                return t.a(2);
              case 2:
                t.n = 3;
                return chrome.tabs.get(e.tabId);
              case 3:
                if (t.v.url === e.url) {
                  t.n = 4;
                  break;
                }
                return t.a(2);
              case 4:
                chrome.scripting.executeScript({
                  target: {
                    tabId: e.tabId
                  },
                  files: ["cleanup.js"]
                });
              case 5:
                return t.a(2);
            }
          }
        }, t);
      })), {
        urls: ["<all_urls>"],
        types: ["main_frame"]
      });
      try {
        chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [999999],
          addRules: []
        });
      } catch (e) {}
      var t = {};
      chrome.webNavigation.onBeforeNavigate.addListener(e => {
        var r = `${e.tabId}_${e.frameId}`;
        t[r] ||= [];
        t[r].push(e.url);
      });
      chrome.tabs.onRemoved.addListener(e => {
        Object.keys(t).forEach(r => {
          if (r.startsWith(e + "_")) {
            delete t[r];
          }
        });
      });
      var r = new Map();
      chrome.runtime.onMessage.addListener(function (n, o, i) {
        var p;
        var b;
        var w;
        var E;
        return __awaiter(this, undefined, undefined, _regenerator().m(function T() {
          var k;
          var A;
          var C;
          var x;
          var S;
          var O;
          var I;
          var L;
          var R;
          var P;
          var B;
          var M;
          var F;
          var U;
          var N;
          var j;
          var q;
          var H;
          var V;
          var W;
          var z;
          var Y;
          var G;
          var Q;
          var $;
          var K;
          var X;
          var Z;
          var J;
          var ee;
          var te;
          var re;
          var ne;
          var oe;
          var ie;
          var ae;
          var se;
          var ce;
          var ue;
          var le;
          return _regenerator().w(function (T) {
            while (true) {
              switch (T.p = T.n) {
                case 0:
                  k = o.tab?.id || 0;
                  oe = n.type;
                  T.n = oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.RETURN_TRANSCRIPT ? 1 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PROMOTE_SERP._ ? 2 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PROMOTE_SERP.GET ? 3 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PROMOTE_SERP.CLOSE ? 4 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.ONBOARD_TRACK.GET ? 5 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.DOWNLOAD ? 6 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PLAY ? 8 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SET_FEATURE ? 9 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_FEATURE ? 10 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.IS_SUPPORTED ? 13 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_ABTEST ? 15 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.ONBOARD_TRACK.SAVE ? 17 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.FRAME_TYPE ? 18 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.YOUTUBE.GET_INFO ? 21 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.FETCH ? 22 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.YOUTUBE.GET_MPD ? 26 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OMNI.ACTIVE ? 30 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OMNI.DEACTIVE ? 31 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_URL ? 32 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.METRICS ? 33 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CACHE ? 34 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.EVENTENOUGHTIME ? 35 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GETVIDTIME ? 36 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.INNER ? 37 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.REQUEST ? 38 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CONSOLE_LOG ? 39 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_MATCHED_REQUESTS ? 40 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_SERVER_TIME ? 41 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_FB_SAVED_URL ? 42 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SCRIPTING.EXEC ? 43 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SCRIPTING.INJECT ? 44 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SCRIPTING.NOTIFY ? 48 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CHECK_URL_CHANGED ? 49 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OPEN_SEARCH_SETTINGS ? 50 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OPEN_SETTINGS ? 51 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.TURN_OFF_ADBLOCK_ON_YOUTUBE ? 52 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.TURN_ON_ADBLOCK_ON_YOUTUBE ? 53 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OPEN_SIDEPANEL ? 54 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_FASTFORWARD_ENABLED ? 55 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_ADBLOCK_STATUS ? 56 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.ON.ENTER ? 63 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.ON.LEAVE ? 64 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SET_AS_DEFAULT_BROWSER ? 65 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CORS_FETCH ? 66 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CHECK_URL ? 75 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_COOKIES ? 80 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SKIP_VIDEO ? 81 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SEND_REQUEST ? 83 : 86;
                  break;
                case 1:
                  try {
                    chrome.coccoc.sendYtVideoTranscript({
                      requestId: n.data.requestId,
                      transcript: n.data.transcript || ""
                    });
                  } catch (e) {
                    console.error(e);
                  }
                  return T.a(3, 86);
                case 2:
                  chrome.cookies.get({
                    url: "https://coccoc.com",
                    name: "coccoc_office"
                  }, e => {
                    var t = {
                      type: "promote_serp_result"
                    };
                    if (e && e.value === "1") {
                      t.data = true;
                    } else {
                      t.data = false;
                    }
                    sendMessage(k, t);
                  });
                  return T.a(3, 86);
                case 3:
                  chrome.storage.local.get(["is_promote_serp_closed"], e => {
                    sendMessage(k, {
                      type: "get_promote_serp_result",
                      data: e.is_promote_serp_closed
                    });
                  });
                  return T.a(3, 86);
                case 4:
                  chrome.storage.local.set({
                    is_promote_serp_closed: 1
                  });
                  return T.a(3, 86);
                case 5:
                  sendMessage(k, {
                    type: "onboard_track_result",
                    data: e[(n == null ? undefined : n.params)?.site || {}]
                  });
                  return T.a(3, 86);
                case 6:
                  T.n = 7;
                  return _downloads__WEBPACK_IMPORTED_MODULE_4__.a.processRequest(o.tab?.id, n.data.method, n.data.params, o.tab);
                case 7:
                  ie = T.v;
                  sendMessage(k, {
                    type: "download.result",
                    data: ie
                  });
                  return T.a(3, 86);
                case 8:
                  _downloads__WEBPACK_IMPORTED_MODULE_4__.a.play(n.id);
                  return T.a(3, 86);
                case 9:
                  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.a)(n, o);
                  return T.a(3, 86);
                case 10:
                  if (e[n.onboardType]?.rendering) {
                    T.n = 12;
                    break;
                  }
                  e[n.onboardType] = {
                    rendering: true
                  };
                  T.n = 11;
                  return Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.b)(n);
                case 11:
                  A = T.v;
                case 12:
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: (A == null ? undefined : A.configurations)?.additionalProperties
                    }
                  });
                  return T.a(3, 86);
                case 13:
                  T.n = 14;
                  return Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.c)(n, o);
                case 14:
                  C = T.v;
                  sendMessage(k, C, o.frameId);
                  return T.a(3, 86);
                case 15:
                  T.n = 16;
                  return _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.processRequest(n);
                case 16:
                  x = T.v;
                  S = {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: x
                    }
                  };
                  sendMessage(k, S, o.frameId || 0);
                  return T.a(3, 86);
                case 17:
                  e[n.params.site] = n.params.data;
                  chrome.storage.local.set({
                    onboardTrack: e
                  });
                  return T.a(3, 86);
                case 18:
                  countStreak(o.tab?.id, o.frameId);
                  O = _common_consts__WEBPACK_IMPORTED_MODULE_12__.p.filter(e => e.constructor.toString().includes("RegExp()"));
                  I = _common_consts__WEBPACK_IMPORTED_MODULE_12__.h.filter(e => e.constructor.toString().includes("RegExp()"));
                  if (O.some(e => {
                    var t;
                    if ((t = o.url) === null || t === undefined) {
                      return undefined;
                    } else {
                      return t.match(e);
                    }
                  }) || o.frameId !== 0 && !I.some(e => {
                    var t;
                    if ((t = o.url) === null || t === undefined) {
                      return undefined;
                    } else {
                      return t.match(e);
                    }
                  })) {
                    T.n = 20;
                    break;
                  }
                  if (!((p = o.origin) === null || p === undefined ? undefined : p.includes("wattpad"))) {
                    T.n = 19;
                    break;
                  }
                  setTimeout(() => {
                    Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.d)({
                      tabId: k,
                      frameId: o.frameId
                    });
                  }, 2000);
                  return T.a(3, 86);
                case 19:
                  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.d)({
                    tabId: k,
                    frameId: o.frameId
                  });
                case 20:
                  return T.a(3, 86);
                case 21:
                  try {
                    chrome.storage.local.get("timeout", e => __awaiter(this, undefined, undefined, _regenerator().m(function e() {
                      var t;
                      var r;
                      return _regenerator().w(function (e) {
                        while (true) {
                          switch (e.n) {
                            case 0:
                              e.n = 1;
                              return Object(_ytdl_ytdl_index__WEBPACK_IMPORTED_MODULE_3__.a)(n.data.url);
                            case 1:
                              t = e.v;
                              (r = {
                                type: "youtube_get_info",
                                data: t
                              }).data.url = n.data.url;
                              sendMessage(k, r);
                            case 2:
                              return e.a(2);
                          }
                        }
                      }, e);
                    })));
                  } catch (e) {
                    console.log("Caught", e);
                    sendMessage(k, {
                      type: "youtube_get_info",
                      data: {
                        url: n.data.url
                      }
                    });
                  }
                  return T.a(3, 86);
                case 22:
                  T.p = 22;
                  T.n = 23;
                  return utils__WEBPACK_IMPORTED_MODULE_11__.send(n.data.method, n.data.url, n.data.params, n.data.headers, n.data.includeCredentials, n.data.paramType);
                case 23:
                  R = T.v;
                  L = {
                    type: "background_request_result",
                    data: {
                      success: "resolve",
                      id: n.data.id,
                      response: R
                    }
                  };
                  T.n = 25;
                  break;
                case 24:
                  T.p = 24;
                  ae = T.v;
                  L = {
                    type: "background_request_result",
                    data: {
                      success: "reject",
                      id: n.data.id,
                      response: ae
                    }
                  };
                case 25:
                  sendMessage(k, L);
                  return T.a(3, 86);
                case 26:
                  T.p = 26;
                  T.n = 27;
                  return utils__WEBPACK_IMPORTED_MODULE_11__.send(n.data.method, n.data.url, n.data.params, n.data.headers, n.data.includeCredentials);
                case 27:
                  B = T.v;
                  M = B.responseText;
                  P = {
                    type: "youtube_set_mpd_info",
                    data: {
                      success: "resolve",
                      response: M
                    }
                  };
                  T.n = 29;
                  break;
                case 28:
                  T.p = 28;
                  se = T.v;
                  P = {
                    type: "youtube_set_mpd_info",
                    data: {
                      success: "reject",
                      response: se
                    }
                  };
                case 29:
                  sendMessage(k, P);
                  return T.a(3, 86);
                case 30:
                  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.e)({
                    data: e.sidepanel,
                    onboardingType: "sidepanel",
                    currentTabId: k
                  });
                  if (chrome.action) {
                    chrome.action.enable(o.tab?.id);
                  } else {
                    chrome.pageAction.show(k);
                  }
                  return T.a(3, 86);
                case 31:
                  if (chrome.action) {
                    chrome.action.disable(o.tab?.id);
                  } else {
                    chrome.pageAction.hide(k);
                  }
                  return T.a(3, 86);
                case 32:
                  chrome.webNavigation.getAllFrames({
                    tabId: k
                  }, e => {
                    var u = e || [];
                    var l = [];
                    if (n.params?.parentTargetUrl) {
                      var d;
                      var p = _createForOfIteratorHelper(u);
                      try {
                        for (p.s(); !(d = p.n()).done;) {
                          var f = d.value;
                          if (f.url == n.params?.parentTargetUrl) {
                            n.params.parentTargetFrame = f.frameId;
                          }
                        }
                      } catch (e) {
                        p.e(e);
                      } finally {
                        p.f();
                      }
                    }
                    var h;
                    var m = _createForOfIteratorHelper(u);
                    try {
                      function g() {
                        var e = h.value;
                        if (e.frameId !== 0) {
                          if ((!n.params?.targetUrl || e.url == n.params?.targetUrl) && (!n.params?.parentTargetFrame || e.parentFrameId == n.params?.parentTargetFrame)) {
                            l.push(new Promise(t => {
                              try {
                                chrome.tabs.sendMessage(k, Object.assign({
                                  type: "get_inner_data",
                                  id: n.id
                                }, (n == null ? undefined : n.params) || {}), {
                                  frameId: e.frameId
                                }, e => t(e));
                              } catch (e) {
                                t(undefined);
                              }
                            }));
                          }
                        }
                      }
                      for (m.s(); !(h = m.n()).done;) {
                        g();
                      }
                    } catch (e) {
                      m.e(e);
                    } finally {
                      m.f();
                    }
                    Promise.all(l).then(e => {
                      var t = e.find(e => e && e.data);
                      if (t) {
                        sendMessage(k, {
                          type: "return_inner_data",
                          data: t
                        }, o.frameId || 0);
                      } else {
                        e[0] = e[0] || {
                          id: n.id
                        };
                        sendMessage(k, {
                          type: "return_inner_data",
                          data: e[0]
                        }, o.frameId || null);
                      }
                    });
                  });
                  return T.a(3, 86);
                case 33:
                  if (n.method === "log") {
                    F = n.params;
                    metrics__WEBPACK_IMPORTED_MODULE_10__.a.logFromContentScript(F.name, F.value);
                  } else if (n.method === "log_request") {
                    metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest(n.params);
                  }
                  return T.a(3, 86);
                case 34:
                  U = _cache__WEBPACK_IMPORTED_MODULE_6__.a.processRequest(n.data.method, n.data.params);
                  if (n.data.method === "get") {
                    if (U != null) {
                      U.then(e => ({
                        type: "cache.background.hit",
                        data: {
                          id: n.data.id,
                          result: e
                        }
                      })).catch(() => ({
                        type: "cache.background.miss",
                        data: {
                          id: n.data.id
                        }
                      })).then(e => sendMessage(k, e));
                    }
                  }
                  return T.a(3, 86);
                case 35:
                  chrome.webNavigation.getAllFrames({
                    tabId: k
                  }, e => {
                    var t;
                    var r = _createForOfIteratorHelper(e || []);
                    try {
                      for (r.s(); !(t = r.n()).done;) {
                        var o = t.value;
                        if (o.parentFrameId == -1) {
                          chrome.tabs.sendMessage(k, Object.assign(Object.assign({}, n.params), {
                            type: "media_enough_time"
                          }), {
                            frameId: o.frameId
                          });
                        }
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  });
                  return T.a(3, 86);
                case 36:
                  chrome.webNavigation.getAllFrames({
                    tabId: k
                  }, e => {
                    var t;
                    var r = e || [];
                    var o = n.params.url;
                    var i = _createForOfIteratorHelper(r);
                    try {
                      for (i.s(); !(t = i.n()).done;) {
                        var a = t.value;
                        try {
                          if (a.parentFrameId != -1 && a.url == o) {
                            chrome.tabs.sendMessage(k, Object.assign(Object.assign({}, n.params), {
                              type: "get_vid_time_in_frame"
                            }), {
                              frameId: a.frameId
                            });
                          }
                        } catch (e) {
                          console.log(e);
                        }
                      }
                    } catch (e) {
                      i.e(e);
                    } finally {
                      i.f();
                    }
                  });
                  return T.a(3, 86);
                case 37:
                  chrome.webNavigation.getAllFrames({
                    tabId: k
                  }, e => {
                    var o;
                    var i;
                    var a = e || [];
                    var s = n.params.url;
                    if (s == "") {
                      s = "about:blank";
                    }
                    var c = false;
                    if (s == null ? undefined : s.startsWith("blob:")) {
                      c = true;
                    }
                    var u;
                    var l = a.find(e => e.parentFrameId == -1)?.url;
                    var d = c && ((s == null ? undefined : s.includes("javhdporn.")) || (s == null ? undefined : s.includes("bestjavporn.")));
                    var p = _createForOfIteratorHelper(a);
                    try {
                      for (p.s(); !(u = p.n()).done;) {
                        var f = u.value;
                        var h = `${k}_${f.frameId}`;
                        var m = s == null ? undefined : s.includes("playhydrax.com");
                        if (s == null ? undefined : s.includes("playhydrax.com")) {
                          var g = new URL(s).search;
                          m = (o = f.url) === null || o === undefined ? undefined : o.includes(g);
                        }
                        try {
                          if (f.parentFrameId != -1 && (f.url == s || m || d) || ((i = t[h]) === null || i === undefined ? undefined : i.some(e => e == s || e.startsWith(s)))) {
                            chrome.tabs.sendMessage(k, Object.assign(Object.assign({}, n.params), {
                              type: "inner_pip",
                              requestUrl: l
                            }), {
                              frameId: f.frameId
                            });
                          }
                        } catch (e) {
                          console.log(e);
                        }
                      }
                    } catch (e) {
                      p.e(e);
                    } finally {
                      p.f();
                    }
                  });
                  return T.a(3, 86);
                case 38:
                  EE.emit("pipRequest", {
                    method: n.method,
                    params: n.params
                  });
                  return T.a(3, 86);
                case 39:
                  console.log(n);
                  return T.a(3, 86);
                case 40:
                  EE.emit("request_cache.get_matched_requests", {
                    id: k
                  });
                  return T.a(3, 86);
                case 41:
                  EE.emit("request_cache.get_server_time", {
                    id: k,
                    msgId: n.id
                  });
                  return T.a(3, 86);
                case 42:
                  EE.emit("request_cache.get_fb_saved_url", {
                    id: k,
                    msgId: n.id,
                    name: n.params.name
                  });
                  return T.a(3, 86);
                case 43:
                  chrome.scripting.executeScript({
                    target: {
                      tabId: k
                    },
                    world: chrome.scripting.ExecutionWorld.MAIN,
                    func: n.func
                  });
                  return T.a(3, 86);
                case 44:
                  N = n.videoId || k;
                  r.set(N, n.id);
                  if (o.frameId) {
                    j = o.frameId;
                  }
                  if (!n.frameUrl) {
                    T.n = 47;
                    break;
                  }
                  T.n = 45;
                  return chrome.webNavigation.getAllFrames({
                    tabId: o.tab?.id || 0
                  });
                case 45:
                  if (!(q = T.v)) {
                    T.n = 47;
                    break;
                  }
                  if (H = q.find(e => e.url === n.frameUrl)) {
                    T.n = 46;
                    break;
                  }
                  return T.a(3, 86);
                case 46:
                  j = (H == null ? undefined : H.frameId) || j;
                case 47:
                  chrome.scripting.executeScript({
                    target: {
                      tabId: k,
                      frameIds: j ? [j] : undefined
                    },
                    world: chrome.scripting.ExecutionWorld.MAIN,
                    files: [`inject/${n.file}/main-world.js`]
                  });
                  chrome.scripting.executeScript({
                    target: {
                      tabId: k,
                      frameIds: j ? [j] : undefined
                    },
                    files: [`inject/${n.file}/index.js`]
                  });
                  return T.a(3, 86);
                case 48:
                  V = n.data?.videoId || k;
                  W = r.get(V);
                  r.delete(V);
                  sendMessage(k, Object.assign(Object.assign({}, n), {
                    type: "return_inner_data",
                    data: {
                      data: n.data?.data,
                      id: W
                    }
                  }));
                  return T.a(3, 86);
                case 49:
                  if (z = n.originalUrl) {
                    Y = function (e) {
                      if (e.url !== z) {
                        chrome.webNavigation.onHistoryStateUpdated.removeListener(Y);
                        sendMessage(k, {
                          type: "return_inner_data",
                          data: {
                            id: n.id
                          }
                        });
                      }
                    };
                    chrome.webNavigation.onHistoryStateUpdated.addListener(Y);
                    setTimeout(() => {
                      if (chrome.webNavigation.onHistoryStateUpdated.hasListener(Y)) {
                        chrome.webNavigation.onHistoryStateUpdated.removeListener(Y);
                        sendMessage(k, {
                          type: "return_inner_data",
                          data: {
                            id: n.id
                          }
                        });
                      }
                    }, 1000);
                  }
                  return T.a(3, 86);
                case 50:
                  chrome.tabs.create({
                    url: "coccoc://settings/searchEngines"
                  });
                  return T.a(3, 86);
                case 51:
                  chrome.runtime.openOptionsPage();
                  return T.a(3, 86);
                case 52:
                  if (chrome.coccoc?.shouldBlockAdsOnYoutubeBySavior) {
                    chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(e => {
                      if (!e) {
                        recordAttempTurnOffAdblock(n.force || n.data?.force);
                      }
                    });
                  } else {
                    recordAttempTurnOffAdblock(n.force || n.data?.force);
                  }
                  return T.a(3, 86);
                case 53:
                  if ((w = (b = chrome.coccoc) === null || b === undefined ? undefined : b.mayTurnOnAdblockOnYoutube) !== null && w !== undefined) {
                    w.call(b);
                  }
                  return T.a(3, 86);
                case 54:
                  if (o.tab && o.tab.id !== undefined) {
                    if ((E = chrome.sidePanel) !== null && E !== undefined) {
                      E.open({
                        tabId: o.tab.id
                      });
                    }
                  }
                  return T.a(3, 86);
                case 55:
                  try {
                    chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(e => {
                      sendMessage(k, {
                        type: "return_inner_data",
                        data: {
                          id: n.id,
                          data: e
                        }
                      });
                    });
                  } catch (e) {
                    sendMessage(k, {
                      type: "return_inner_data",
                      data: {
                        id: n.id,
                        data: null
                      }
                    });
                  }
                  return T.a(3, 86);
                case 56:
                  T.p = 56;
                  T.n = 57;
                  return chrome.eyeoFilteringPrivate.getAllowedDomains("adblock");
                case 57:
                  if (!T.v.includes("youtube.com")) {
                    T.n = 58;
                    break;
                  }
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: {
                        isAdblockTurnedOff: true
                      }
                    }
                  });
                  return T.a(3, 86);
                case 58:
                  T.n = 59;
                  return chrome.eyeoFilteringPrivate.getCustomFilters("adblock");
                case 59:
                  if (!T.v.includes("@@||youtube.com^$document")) {
                    T.n = 60;
                    break;
                  }
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: {
                        isAdblockAutoOff: true
                      }
                    }
                  });
                  return T.a(3, 86);
                case 60:
                  T.n = 62;
                  break;
                case 61:
                  T.p = 61;
                  T.v;
                  try {
                    chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(e => {
                      sendMessage(k, {
                        type: "return_inner_data",
                        data: {
                          id: n.id,
                          data: e
                        }
                      });
                    });
                  } catch (e) {
                    sendMessage(k, {
                      type: "return_inner_data",
                      data: {
                        id: n.id,
                        data: null
                      }
                    });
                  }
                  return T.a(3, 86);
                case 62:
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: null
                    }
                  });
                  return T.a(3, 86);
                case 63:
                  sendMessage(k, {
                    type: "inner_pip_event_fired",
                    data: Object.assign(Object.assign({}, n.params || {}), {
                      name: "enterpictureinpicture"
                    })
                  });
                  return T.a(3, 86);
                case 64:
                  sendMessage(k, {
                    type: "inner_pip_event_fired",
                    data: Object.assign(Object.assign({}, n.params || {}), {
                      name: "leavepictureinpicture"
                    })
                  });
                  return T.a(3, 86);
                case 65:
                  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.f)();
                  return T.a(3, 86);
                case 66:
                  G = n.data;
                  Q = G.url;
                  $ = G.responseType;
                  T.p = 67;
                  T.n = 68;
                  return fetch(Q);
                case 68:
                  K = T.v;
                  X = Object.fromEntries(K.headers);
                  if ($ !== "text") {
                    T.n = 70;
                    break;
                  }
                  T.n = 69;
                  return K.text();
                case 69:
                  ce = T.v;
                  T.n = 72;
                  break;
                case 70:
                  T.n = 71;
                  return K.json();
                case 71:
                  ce = T.v;
                case 72:
                  Z = ce;
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: {
                        data: Z,
                        headers: X
                      }
                    }
                  }, o.frameId);
                  T.n = 74;
                  break;
                case 73:
                  T.p = 73;
                  ue = T.v;
                  console.error(ue);
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: null
                    }
                  });
                case 74:
                  return T.a(3, 86);
                case 75:
                  J = n.data.url;
                  T.p = 76;
                  T.n = 77;
                  return fetch(J, {
                    method: "HEAD"
                  });
                case 77:
                  ee = T.v;
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: {
                        status: ee.status
                      }
                    }
                  }, o.frameId || 0);
                  T.n = 79;
                  break;
                case 78:
                  T.p = 78;
                  le = T.v;
                  console.error(le);
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: null
                    }
                  });
                case 79:
                  return T.a(3, 86);
                case 80:
                  chrome.cookies.getAll({
                    url: "https://www.youtube.com"
                  }, e => {
                    var r;
                    var i = {};
                    var a = _createForOfIteratorHelper(n.cookies);
                    try {
                      function s() {
                        var n = r.value;
                        i[n] = e.find(e => e.name === n)?.value;
                      }
                      for (a.s(); !(r = a.n()).done;) {
                        s();
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                    sendMessage(k, {
                      type: "return_inner_data",
                      data: {
                        id: n.id,
                        data: i
                      }
                    }, o.frameId || 0);
                  });
                  return T.a(3, 86);
                case 81:
                  te = o.tab?.id;
                  re = n.params.url;
                  if (te && re) {
                    T.n = 82;
                    break;
                  }
                  return T.a(3, 86);
                case 82:
                  chrome.webNavigation.getAllFrames({
                    tabId: te
                  }, e => {
                    try {
                      var t = new URL(re);
                      var r = e == null ? undefined : e.find(e => new URL(e.url).hostname === t.hostname);
                      if (!r) {
                        return;
                      }
                      chrome.scripting.executeScript({
                        target: {
                          tabId: te,
                          frameIds: [r.frameId]
                        },
                        injectImmediately: true,
                        world: chrome.scripting.ExecutionWorld.MAIN,
                        func: () => {
                          var e = document.body.querySelector("video");
                          if (e) {
                            e.currentTime = e.duration;
                          }
                        }
                      });
                    } catch (e) {
                      console.error(e);
                    }
                  });
                  return T.a(3, 86);
                case 83:
                  if (chrome.coccoc.sendRequest) {
                    T.n = 84;
                    break;
                  }
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: null
                    }
                  });
                  return T.a(3, 86);
                case 84:
                  T.n = 85;
                  return chrome.coccoc.sendRequest(n.request);
                case 85:
                  ne = T.v;
                  sendMessage(k, {
                    type: "return_inner_data",
                    data: {
                      id: n.id,
                      data: ne
                    }
                  }, o.frameId || 0);
                  return T.a(3, 86);
                case 86:
                  i();
                case 87:
                  return T.a(2);
              }
            }
          }, T, this, [[76, 78], [67, 73], [56, 61], [26, 28], [22, 24]]);
        }));
      });
      EE.on("request.matched", e => sendMessage(e.tabId, e.data, 0));
      EE.on("request.fb", e => sendMessage(e.tabId, e.data, 0));
      EE.on("yserp_matched", e => sendMessage(e, {
        type: "yserp_metrics"
      }));
      EE.on("finish_download", e => sendMessage(e.tabId, e));
      EE.on("download_error", e => sendMessage(e.tabId, e));
      EE.on("request_cache.return_matched_requests", e => sendMessage(e.id, {
        type: "request.matched",
        result: e.tasks
      }, 0));
      EE.on("request_cache.return_fb_saved_url", e => sendMessage(e.id, {
        type: "return_inner_data",
        data: {
          id: e.msgId,
          data: e.url
        }
      }, 0));
      EE.on("request_cache.return_server_time", e => sendMessage(e.id, {
        type: "return_inner_data",
        data: {
          id: e.msgId,
          data: e.serverTime
        }
      }, 0));
    }).catch(e => console.log("Caught", e));
    chrome.runtime.onMessageExternal.addListener(onExternalRequest);
  }).call(this, __webpack_require__(13));
};
