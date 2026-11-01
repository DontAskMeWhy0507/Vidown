// Module 124 [tabs] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  r.d(t, "c", function () {
    return u;
  });
  r.d(t, "a", function () {
    return l;
  });
  r.d(t, "b", function () {
    return d;
  });
  r.d(t, "g", function () {
    return f;
  });
  r.d(t, "e", function () {
    return h;
  });
  r.d(t, "d", function () {
    return m;
  });
  r.d(t, "f", function () {
    return g;
  });
  var n = r(43);
  var o = r(0);
  r(178);
  function i() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e;
    var t;
    var r = typeof Symbol == "function" ? Symbol : {};
    var n = r.iterator || "@@iterator";
    var o = r.toStringTag || "@@toStringTag";
    function s(r, n, o, i) {
      var s = n && n.prototype instanceof u ? n : u;
      var l = Object.create(s.prototype);
      a(l, "_invoke", function (r, n, o) {
        var i;
        var a;
        var s;
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
            a = 0;
            s = e;
            p.n = r;
            return c;
          }
        };
        function f(r, n) {
          a = r;
          s = n;
          t = 0;
          for (; !d && u && !o && t < l.length; t++) {
            var o;
            var i = l[t];
            var f = p.p;
            var h = i[2];
            if (r > 3) {
              if (o = h === n) {
                s = i[(a = i[4]) ? 5 : (a = 3, 3)];
                i[4] = i[5] = e;
              }
            } else if (i[0] <= f) {
              if (o = r < 2 && f < i[1]) {
                a = 0;
                p.v = n;
                p.n = i[1];
              } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                i[4] = r;
                i[5] = n;
                p.n = h;
                a = 0;
              }
            }
          }
          if (o || r > 1) {
            return c;
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
          a = l;
          s = h;
          while ((t = a < 2 ? e : s) || !d) {
            if (!i) {
              if (a) {
                if (a < 3) {
                  if (a > 1) {
                    p.n = -1;
                  }
                  f(a, s);
                } else {
                  p.n = s;
                }
              } else {
                p.v = s;
              }
            }
            try {
              u = 2;
              if (i) {
                if (!a) {
                  o = "next";
                }
                if (t = i[o]) {
                  if (!(t = t.call(i, s))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!t.done) {
                    return t;
                  }
                  s = t.value;
                  if (a < 2) {
                    a = 0;
                  }
                } else {
                  if (a === 1 && (t = i.return)) {
                    t.call(i);
                  }
                  if (a < 2) {
                    s = TypeError("The iterator does not provide a '" + o + "' method");
                    a = 1;
                  }
                }
                i = e;
              } else if ((t = (d = p.n < 0) ? s : r.call(n, p)) !== c) {
                break;
              }
            } catch (t) {
              i = e;
              a = 1;
              s = t;
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
      return l;
    }
    var c = {};
    function u() {}
    function l() {}
    function d() {}
    t = Object.getPrototypeOf;
    var p = [][n] ? t(t([][n]())) : (a(t = {}, n, function () {
      return this;
    }), t);
    var f = d.prototype = u.prototype = Object.create(p);
    function h(e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, d);
      } else {
        e.__proto__ = d;
        a(e, o, "GeneratorFunction");
      }
      e.prototype = Object.create(f);
      return e;
    }
    l.prototype = d;
    a(f, "constructor", d);
    a(d, "constructor", l);
    l.displayName = "GeneratorFunction";
    a(d, o, "GeneratorFunction");
    a(f);
    a(f, o, "Generator");
    a(f, n, function () {
      return this;
    });
    a(f, "toString", function () {
      return "[object Generator]";
    });
    return (i = function () {
      return {
        w: s,
        m: h
      };
    })();
  }
  function a(e, t, r, n) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (e) {
      o = 0;
    }
    (a = function (e, t, r, n) {
      function i(t, r) {
        a(e, t, function (e) {
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
  var s;
  function c(e, t, r, n) {
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
  function u(e, t) {
    return new Promise(r => {
      if (t.frameId > 0) {
        r({
          type: "support_result",
          data: null
        });
      } else if (e.params.testName == "sidepanelonboarding") {
        n.a.processRequest({
          testName: "sidepanelDownload"
        }).then(e => {
          r({
            type: "support_result",
            data: {
              abTestData: e
            }
          });
        });
      } else {
        n.a.processRequest({
          testName: e.params.testName
        }).then(e => {
          r({
            type: "support_result",
            data: {
              abTestData: e
            }
          });
        });
      }
    });
  }
  function l(e, t) {
    var n = e.params;
    n.params.windowId = t.tab?.windowId;
    if (n.activatName) {
      chrome.coccocPrivate.getFeatureState(n.checkName, e => {
        var i;
        if (e.enabled) {
          if (n.checkName == "sidebar" && n.params.predefinedIcons && ((i = e.configurations?.additionalProperties?.active_url) === null || i === undefined ? undefined : i.includes(n.params.predefinedIcons))) {
            return;
          }
          p(n);
        } else {
          chrome.coccocPrivate.actOnFeature({
            action: n.activatName,
            params: {
              windowId: t.tab?.windowId
            }
          }, () => {
            p(n);
          });
        }
      });
    } else {
      p(n);
    }
  }
  function d(e) {
    return new Promise(t => {
      if (!chrome.coccocPrivate?.getFeatureState) {
        t(null);
      }
      chrome.coccocPrivate.getFeatureState(e.feature, e => {
        t(e);
      });
    });
  }
  function p(e) {
    chrome.coccocPrivate.actOnFeature({
      action: e.action,
      params: e.params
    }, () => {});
  }
  function f(e) {
    return c(this, undefined, undefined, i().m(function t() {
      var r;
      return i().w(function (t) {
        while (true) {
          switch (t.n) {
            case 0:
              r = chrome.runtime.getURL(e);
              t.n = 1;
              return chrome.runtime.getContexts({
                contextTypes: ["OFFSCREEN_DOCUMENT"],
                documentUrls: [r]
              });
            case 1:
              if (!(t.v.length > 0)) {
                t.n = 2;
                break;
              }
              return t.a(2);
            case 2:
              if (!s) {
                t.n = 4;
                break;
              }
              t.n = 3;
              return s;
            case 3:
              t.n = 6;
              break;
            case 4:
              s = chrome.offscreen.createDocument({
                url: e,
                reasons: [chrome.offscreen.Reason.CLIPBOARD],
                justification: "reason for needing the document"
              });
              t.n = 5;
              return s;
            case 5:
              s = null;
            case 6:
              return t.a(2);
          }
        }
      }, t);
    }));
  }
  var h = Object(o.useDebounce)(e => {
    chrome.tabs.query({}, t => {
      var r = t.find(t => t.id === e.currentTabId);
      if (r) {
        var n = r.id;
        chrome.tabs.sendMessage(n, {
          type: "open_onboarding",
          data: e.data,
          site: e.onboardingType
        });
      }
    });
  });
  var m = Object(o.useDebounce)(e => {
    chrome.tabs.sendMessage(e.tabId, {
      type: "init_main_frame"
    }, {
      frameId: e.frameId || 0
    });
  }, 500);
  var g = () => {
    chrome.coccoc.setAsDefaultBrowser();
  };
};
