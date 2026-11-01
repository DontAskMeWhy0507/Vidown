// Module 14 - Savior Media format resolver, resolution ranker, and manifest stream selector
export default function(t, e, r) {
  "use strict";
  r.d(e, "m", (function() {
    return h;
  })), r.d(e, "f", (function() {
    return p;
  })), r.d(e, "e", (function() {
    return m;
  })), r.d(e, "c", (function() {
    return y;
  })), r.d(e, "d", (function() {
    return g;
  })), r.d(e, "i", (function() {
    return A;
  })), r.d(e, "h", (function() {
    return _;
  })), r.d(e, "l", (function() {
    return E;
  })), r.d(e, "k", (function() {
    return S;
  })), r.d(e, "a", (function() {
    return k;
  })), r.d(e, "j", (function() {
    return T;
  })), r.d(e, "b", (function() {
    return B;
  })), r.d(e, "g", (function() {
    return U;
  }));
  var n = r(0), i = r(3), o = r(1), a = r(9);
  function s() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var t2, e2, r2 = "function" == typeof Symbol ? Symbol : {}, n2 = r2.iterator || "@@iterator", i2 = r2.toStringTag || "@@toStringTag";
    function o2(r3, n3, i3, o3) {
      var s2 = n3 && n3.prototype instanceof c2 ? n3 : c2, l3 = Object.create(s2.prototype);
      return u(l3, "_invoke", (function(r4, n4, i4) {
        var o4, s3, u2, c3 = 0, l4 = i4 || [], f3 = false, d3 = { p: 0, n: 0, v: t2, a: h3, f: h3.bind(t2, 4), d: function(e3, r5) {
          return o4 = e3, s3 = 0, u2 = t2, d3.n = r5, a2;
        } };
        function h3(r5, n5) {
          for (s3 = r5, u2 = n5, e2 = 0; !f3 && c3 && !i5 && e2 < l4.length; e2++) {
            var i5, o5 = l4[e2], h4 = d3.p, p3 = o5[2];
            r5 > 3 ? (i5 = p3 === n5) && (u2 = o5[(s3 = o5[4]) ? 5 : (s3 = 3, 3)], o5[4] = o5[5] = t2) : o5[0] <= h4 && ((i5 = r5 < 2 && h4 < o5[1]) ? (s3 = 0, d3.v = n5, d3.n = o5[1]) : h4 < p3 && (i5 = r5 < 3 || o5[0] > n5 || n5 > p3) && (o5[4] = r5, o5[5] = n5, d3.n = p3, s3 = 0));
          }
          if (i5 || r5 > 1) return a2;
          throw f3 = true, n5;
        }
        return function(i5, l5, p3) {
          if (c3 > 1) throw TypeError("Generator is already running");
          for (f3 && 1 === l5 && h3(l5, p3), s3 = l5, u2 = p3; (e2 = s3 < 2 ? t2 : u2) || !f3; ) {
            o4 || (s3 ? s3 < 3 ? (s3 > 1 && (d3.n = -1), h3(s3, u2)) : d3.n = u2 : d3.v = u2);
            try {
              if (c3 = 2, o4) {
                if (s3 || (i5 = "next"), e2 = o4[i5]) {
                  if (!(e2 = e2.call(o4, u2))) throw TypeError("iterator result is not an object");
                  if (!e2.done) return e2;
                  u2 = e2.value, s3 < 2 && (s3 = 0);
                } else 1 === s3 && (e2 = o4.return) && e2.call(o4), s3 < 2 && (u2 = TypeError("The iterator does not provide a '" + i5 + "' method"), s3 = 1);
                o4 = t2;
              } else if ((e2 = (f3 = d3.n < 0) ? u2 : r4.call(n4, d3)) !== a2) break;
            } catch (e3) {
              o4 = t2, s3 = 1, u2 = e3;
            } finally {
              c3 = 1;
            }
          }
          return { value: e2, done: f3 };
        };
      })(r3, i3, o3), true), l3;
    }
    var a2 = {};
    function c2() {
    }
    function l2() {
    }
    function f2() {
    }
    e2 = Object.getPrototypeOf;
    var d2 = [][n2] ? e2(e2([][n2]())) : (u(e2 = {}, n2, (function() {
      return this;
    })), e2), h2 = f2.prototype = c2.prototype = Object.create(d2);
    function p2(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, f2) : (t3.__proto__ = f2, u(t3, i2, "GeneratorFunction")), t3.prototype = Object.create(h2), t3;
    }
    return l2.prototype = f2, u(h2, "constructor", f2), u(f2, "constructor", l2), l2.displayName = "GeneratorFunction", u(f2, i2, "GeneratorFunction"), u(h2), u(h2, i2, "Generator"), u(h2, n2, (function() {
      return this;
    })), u(h2, "toString", (function() {
      return "[object Generator]";
    })), (s = function() {
      return { w: o2, m: p2 };
    })();
  }
  function u(t2, e2, r2, n2) {
    var i2 = Object.defineProperty;
    try {
      i2({}, "", {});
    } catch (t3) {
      i2 = 0;
    }
    (u = function(t3, e3, r3, n3) {
      function o2(e4, r4) {
        u(t3, e4, (function(t4) {
          return this._invoke(e4, r4, t4);
        }));
      }
      e3 ? i2 ? i2(t3, e3, { value: r3, enumerable: !n3, configurable: !n3, writable: !n3 }) : t3[e3] = r3 : (o2("next", 0), o2("throw", 1), o2("return", 2));
    })(t2, e2, r2, n2);
  }
  function c(t2, e2) {
    return (function(t3) {
      if (Array.isArray(t3)) return t3;
    })(t2) || (function(t3, e3) {
      var r2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (null != r2) {
        var n2, i2, o2, a2, s2 = [], u2 = true, c2 = false;
        try {
          if (o2 = (r2 = r2.call(t3)).next, 0 === e3) {
            if (Object(r2) !== r2) return;
            u2 = false;
          } else for (; !(u2 = (n2 = o2.call(r2)).done) && (s2.push(n2.value), s2.length !== e3); u2 = true) ;
        } catch (t4) {
          c2 = true, i2 = t4;
        } finally {
          try {
            if (!u2 && null != r2.return && (a2 = r2.return(), Object(a2) !== a2)) return;
          } finally {
            if (c2) throw i2;
          }
        }
        return s2;
      }
    })(t2, e2) || l(t2, e2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function l(t2, e2) {
    if (t2) {
      if ("string" == typeof t2) return f(t2, e2);
      var r2 = {}.toString.call(t2).slice(8, -1);
      return "Object" === r2 && t2.constructor && (r2 = t2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? f(t2, e2) : void 0;
    }
  }
  function f(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, n2 = Array(e2); r2 < e2; r2++) n2[r2] = t2[r2];
    return n2;
  }
  var d = function(t2, e2, r2, n2) {
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
  }, h = new window.DOMParser();
  function p(t2) {
    return new Promise((e2, r2) => {
      Object(n.send)("GET", t2).then((t3) => {
        var r3 = JSON.parse(t3.responseText);
        e2(r3);
      }).catch((t3) => {
        r2();
      });
    });
  }
  var v = (t2) => {
    var e2, r2 = window.atob(t2).split(""), n2 = "IFYOUWANTTHEARTISTSTOGETPAIDDONOTDOWNLOADFROMMIXCLOUD", i2 = 0, o2 = n2.length, a2 = "", s2 = (function(t3, e3) {
      var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (!r3) {
        if (Array.isArray(t3) || (r3 = l(t3)) || e3 && t3 && "number" == typeof t3.length) {
          r3 && (t3 = r3);
          var n3 = 0, i3 = function() {
          };
          return { s: i3, n: function() {
            return n3 >= t3.length ? { done: true } : { done: false, value: t3[n3++] };
          }, e: function(t4) {
            throw t4;
          }, f: i3 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o3, a3 = true, s3 = false;
      return { s: function() {
        r3 = r3.call(t3);
      }, n: function() {
        var t4 = r3.next();
        return a3 = t4.done, t4;
      }, e: function(t4) {
        s3 = true, o3 = t4;
      }, f: function() {
        try {
          a3 || null == r3.return || r3.return();
        } finally {
          if (s3) throw o3;
        }
      } };
    })(r2);
    try {
      for (s2.s(); !(e2 = s2.n()).done; ) {
        var u2 = e2.value;
        a2 += String.fromCharCode(u2.charCodeAt(0) ^ n2[i2 % o2].charCodeAt(0)), i2 += 1;
      }
    } catch (t3) {
      s2.e(t3);
    } finally {
      s2.f();
    }
    return a2;
  }, m = (t2) => {
    var e2, r2, n2 = { query: `
	{
		cloudcastLookup(lookup: {username: "${t2.username}", slug: "${t2.slug}"}) {
			name
			owner {
				url
				username
			}
			streamInfo {
				url
			}
		}
	}
	` }, i2 = (e2 = "csrftoken", (r2 = document.cookie.match("(^|[^;]+)\\s*" + e2 + "\\s*=\\s*([^;]+)")) ? r2.pop() : "");
    return i2 ? new Promise((t3, e3) => {
      fetch("https://www.mixcloud.com/graphql", { headers: { "content-type": "application/json", "x-csrftoken": i2 }, body: JSON.stringify(n2), method: "POST" }).then((t4) => t4.json()).then((r3) => {
        if (r3 && r3.data && r3.data.cloudcastLookup) {
          var n3 = r3.data.cloudcastLookup, i3 = n3.name, o2 = void 0 === i3 ? "" : i3, a2 = n3.streamInfo, s2 = (void 0 === a2 ? {} : a2).url, u2 = void 0 === s2 ? "" : s2;
          if (u2) return void t3({ url: v(u2), name: o2 });
        }
        e3();
      }).catch((t4) => e3(t4));
    }) : Promise.reject();
  }, y = (t2) => {
    var e2;
    return e2 = (e2 = (e2 = t2.indexOf("//") > -1 ? t2.split("/")[2] : t2.split("/")[0]).split(":")[0]).split("?")[0], t2.indexOf("https://") >= 0 ? "https://" + e2 : "http://" + e2;
  };
  var g = (t2, e2) => {
    t2 = b(t2);
    var r2 = [...new DOMParser().parseFromString(t2, "text/xml").getElementsByTagName("Representation")], i2 = r2.filter((t3, e3) => {
      if ("audio/mp4" === t3.getAttribute("mimeType")) return r2.splice(e3, 1), t3;
    });
    return r2.slice().map((t3) => {
      var r3 = t3.getAttribute("FBQualityClass"), a2 = t3.getAttribute("FBQualityLabel") || t3.getAttribute("height") + "p";
      return !r3 && o.r[a2] && (r3 = Object(n.i18n)(o.r[a2].i18n_label)), w(i2[0] ? { videoUrl: t3.getElementsByTagName("BaseURL")[0].childNodes[0].nodeValue,
        audioUrl: i2[0].getElementsByTagName("BaseURL")[0].childNodes[0].nodeValue } : t3.getElementsByTagName("BaseURL")[0].childNodes[0].nodeValue, e2, r3, a2);
    });
  }, b = (t2) => t2.replace(/\\u[\dA-F]{4}/gi, (function(t3) {
    return String.fromCharCode(parseInt(t3.replace(/\\u/g, ""), 16));
  })).replace(/\\</g, "<").replace(/\\+\//g, "/").replace(/\\+"/g, '"').replace(/\\+n/g, "");
  function w(t2, e2, r2, a2) {
    var s2, u2, c2 = Object(i.f)(t2);
    c2.type = "video", c2.title = e2 || c2.title, c2.filename = c2.title;
    var l2 = a2;
    c2.quality = (null === (s2 = o.r[l2]) || void 0 === s2 ? void 0 : s2.label) || (null == r2 ? void 0 : r2.toUpperCase());
    try {
      c2.i18n_quality = Object(n.i18n)(null === (u2 = o.r[l2]) || void 0 === u2 ? void 0 : u2.i18n_label) || c2.quality;
    } catch (t3) {
      c2.i18n_quality = c2.quality;
    }
    return c2.resolution = l2, "Source" == a2 && (c2.quality = "Original", c2.sortValues = { qualityValue: 1700 }), c2;
  }
  function A(t2) {
    var e2 = 0;
    t2 = t2.substring(1);
    var r2 = { D: 86400, H: 3600, M: 60, S: 1 };
    for (var n2 in r2) {
      var i2 = t2.split(n2);
      if (i2[1] || "" == i2[1]) {
        t2 = i2[1];
        var o2 = i2[0];
        o2.includes("T") && (o2 = o2.substring(1)), e2 += parseFloat(o2) * r2[n2];
      }
    }
    return e2;
  }
  var _ = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<MPD id="f08e80da-bf1d-4e3d-8899-f0f6155f6efa" profiles="urn:mpeg:dash:profile:isoff-main:2011" type="static" availabilityStartTime="2015-08-04T09:33:14.000Z" publishTime="2015-08-04T10:47:32.000Z" mediaPresentationDuration="P0Y0M0DT0H3M30.000S" minBufferTime="P0Y0M0DT0H0M1.000S" bitmovin:version="1.6.0" xmlns:ns2="http://www.w3.org/1999/xlink" xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:bitmovin="http://www.bitmovin.net/mpd/2015">\n    <Period>\n        <AdaptationSet mimeType="video/mp4" codecs="avc1.42c00d">\n			<Representation mimeType="video/mp4" frameRate="24" bandwidth="1558322" codecs="avc1.4d401f" width="1277" height="544">\n				<SegmentList duration="10">';
  function E(t2) {
    var e2 = [];
    for (var r2 in t2) t2[r2] > 32 && t2[r2] < 128 && e2.push(t2[r2]);
    return new Uint8Array(e2);
  }
  function S(t2, e2) {
    return /^data:/i.test(t2) ? (function(t3) {
      var e3 = (t3 = t3.replace(/\r?\n/g, "")).indexOf(",");
      if (-1 === e3 || e3 <= 4) throw new TypeError("malformed data-URI");
      for (var r2 = "US-ASCII", n2 = t3.substring(5, e3).split(";"), i2 = false, o2 = 0; o2 < n2.length; o2++) "base64" == n2[o2] ? i2 = true : 0 == n2[o2].indexOf("charset=") && (r2 = n2[o2].substring(8));
      var a2 = unescape(t3.substring(e3 + 1));
      i2 && (a2 = x(a2));
      var s2 = O(a2);
      return s2.type = n2[0] || "text/plain", s2.charset = r2, s2;
    })(t2) : ("utf8" === e2 || (function(t3, e3) {
      e3 instanceof Object || (e3 = {});
      var r2 = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/gi;
      return false === e3.paddingRequired && (r2 = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/gi), r2.test(t3);
    })(t2) && (t2 = x(t2)), O(t2));
  }
  function O(t2) {
    for (var e2 = new Uint8Array(t2.length), r2 = 0; r2 < t2.length; r2++) e2[r2] = t2.charCodeAt(r2);
    return e2.buffer;
  }
  var x = (t2) => atob(t2);
  function k(t2, e2) {
    null == e2 && (e2 = "utf8");
    var r2 = new Uint8Array(t2);
    if ("hex" === e2) {
      for (var n2 = "", i2 = 0, o2 = r2.byteLength; i2 < o2; ++i2) n2 += M(r2[i2]);
      return n2;
    }
    if ("base64" === e2) {
      var a2 = String.fromCharCode.apply(null, Array.from(r2));
      return btoa(a2);
    }
    return "binary" !== e2 && "latin1" !== e2 && window.TextDecoder ? ("utf16le" === e2 && (e2 = "utf-16le"), new TextDecoder(e2).decode(r2)) : String.fromCharCode.apply(null, Array.from(r2));
  }
  function M(t2) {
    return t2 < 16 ? "0" + t2.toString(16) : t2.toString(16);
  }
  function T(t2) {
    for (var e2 = "", r2 = t2.length - 1; r2 >= 0; r2--) e2 += t2[r2];
    return e2;
  }
  function I(t2, e2) {
    if (!t2) return t2;
    var r2 = t2;
    try {
      Object.entries(e2).forEach((t3) => {
        var e3 = c(t3, 2), n2 = e3[0], i2 = e3[1];
        r2 = (function(t4, e4, r3) {
          return t4 && r3 ? t4.replace(`$${e4}$`, r3) : t4;
        })(r2, n2, i2);
      });
    } catch (t3) {
      Object(n.devLog)(t3);
    }
    return r2;
  }
  function j(t2, e2, r2) {
    var n2 = ['<SegmentList duration="10">'], i2 = (parseInt(t2.getAttribute("timescale") || "0"), parseInt(t2.getAttribute("startNumber") || "0")), o2 = I(t2.getAttribute("initialization"), { Bandwidth: e2, RepresentationID: r2 }), a2 = t2.getAttribute("media");
    o2 && n2.push(`<Initialization sourceURL="${o2}"/>`);
    var s2 = [...t2.getElementsByTagName("S")], u2 = 0;
    return s2.forEach((t3) => {
      for (var o3 = parseInt(t3.getAttribute("r") || "1"), s3 = parseInt(t3.getAttribute("d") || "0"), c2 = parseInt(t3.getAttribute("t") || "0") || u2, l2 = 0; l2 < o3; l2++) {
        var f2 = I(a2, { Number: String(i2), Time: String(l2 * s3 + c2), Bandwidth: e2, RepresentationID: r2 });
        n2.push(`<SegmentURL media="${f2}"/>`), i2++;
      }
      u2 += o3 * s3 + c2;
    }), n2.push("</SegmentList>"), n2;
  }
  function C(t2) {
    return Array.from(t2.querySelectorAll("AdaptationSet:not(:has(Representation))")).forEach((t3) => {
      t3.remove();
    }), t2;
  }
  var B = (t2, e2, r2, s2) => {
    for (var u2, c2, l2 = (function(t3) {
      t3 = b(t3);
      var e3 = new DOMParser().parseFromString(t3, "text/xml");
      return e3.querySelector("AdaptationSet>Representation>SegmentTemplate") ? ([...e3.getElementsByTagName("AdaptationSet")].forEach((t4) => {
        var e4 = t4.getAttribute("codecs"), r3 = t4.getAttribute("mimeType");
        [...t4.getElementsByTagName("Representation")].forEach((t5) => {
          var n2 = t5.querySelector("SegmentTemplate"), i2 = t5.getAttribute("bandwidth");
          if (e4 && !t5.hasAttribute("codecs") && t5.setAttribute("codecs", e4), r3 && !t5.hasAttribute("mimeType") && t5.setAttribute("mimeType", r3), n2) {
            var o2 = j(n2, i2);
            t5.innerHTML = o2.join("");
          }
        });
      }), C(e3)) : e3.querySelector("AdaptationSet SegmentTemplate + Representation") ? ([...e3.getElementsByTagName("AdaptationSet")].forEach((t4) => {
        var e4 = t4.getAttribute("codecs"), r3 = t4.getAttribute("mimeType"), n2 = t4.querySelector("Label, label"), i2 = t4.querySelector("SegmentTemplate");
        [...t4.getElementsByTagName("Representation")].forEach((t5) => {
          var n3 = t5.getAttribute("bandwidth");
          if (e4 && !t5.hasAttribute("codecs") && t5.setAttribute("codecs", e4), r3 && !t5.hasAttribute("mimeType") && t5.setAttribute("mimeType", r3), i2) {
            var o2 = j(i2, n3);
            t5.innerHTML = o2.join("");
          }
        }), null == n2 || n2.remove(), null == i2 || i2.remove();
      }), C(e3)) : ([...e3.getElementsByTagName("Representation")].forEach((t4) => {
        [...t4.getElementsByTagName("SegmentTemplate")].forEach((t5) => {
          var e4 = ['<SegmentList duration="10">'], r3 = parseInt(t5.getAttribute("timescale") || "0"), n2 = parseInt(t5.getAttribute("startNumber") || "0"), i2 = t5.getAttribute("initialization"), o2 = t5.getAttribute("media");
          i2 && e4.push(`<Initialization sourceURL="${i2}"/>`), [...t5.getElementsByTagName("S")].forEach((t6) => {
            for (var i3, a2 = parseInt(t6.getAttribute("r") || "1"), s3 = parseInt(t6.getAttribute("d") || "0"), u3 = parseInt(t6.getAttribute("t") || "0"), c3 = 0; c3 < a2; c3++) {
              var l3 = null === (i3 = null == o2 ? void 0 : o2.replace("$Number$", String(c3 + n2))) || void 0 === i3 ? void 0 : i3.replace("$Time$", String(c3 * (s3 / r3) + u3));
              e4.push(`<SegmentURL media="${l3}"/>`);
            }
          }), e4.push("</SegmentList>"), t5.outerHTML = e4.join("");
        });
      }), C(e3));
    })(t2), f2 = [...l2.getElementsByTagName("Representation")].filter((t3) => {
      var e3 = t3.getAttribute("mimeType");
      return !e3 || !!e3.match(/(video|audio|text)\//i);
    }), d2 = [], h2 = 0; h2 < f2.length; h2++) (null === (u2 = f2[h2].getAttribute("mimeType") || f2[h2].parentElement.getAttribute("mimeType")) || void 0 === u2 ? void 0 : u2.includes("audio/")) && (d2.push(f2[h2]), f2.splice(h2, 1), h2--);
    for (var p2 = [], v2 = 0; v2 < f2.length; v2++) (null === (c2 = f2[v2].getAttribute("mimeType") || f2[v2].parentElement.getAttribute("mimeType")) || void 0 === c2 ? void 0 : c2.includes("text/")) && (p2.push(f2[v2]), f2.splice(v2, 1), v2--);
    var m2 = f2.slice(), y2 = void 0;
    return s2 && (y2 = new URL(s2)), (null == r2 ? void 0 : r2.includes("://")) || (s2 ? (r2 || (r2 = y2.hostname), r2 = `${y2.protocol}//${r2}`) : r2 = "https://" + r2), m2.map((t3) => {
      var u3, c3, f3 = t3.getAttribute("height") || "", h3 = Object(n.getBestFitResolution)(parseInt(f3)) + "p", p3 = a.b.getQualityBySize(f3);
      !p3 && o.r[h3] && (p3 = Object(n.i18n)(o.r[h3].i18n_label));
      var v3 = "";
      if (r2 && !r2.includes("://")) try {
        var m3 = new URL(s2);
        r2 = `${m3.protocol}//${r2}`;
      } catch (t4) {
        r2 = "https//" + r2;
      }
      try {
        var g2 = t3.getElementsByTagName("BaseURL")[0].childNodes[0].nodeValue;
        if (d2[0]) {
          var b2 = d2[0].getElementsByTagName("BaseURL")[0].childNodes[0].nodeValue;
          try {
            c3 = { videoUrl: Object(i.a)(y2, g2, true), audioUrl: Object(i.a)(y2, b2, true) };
          } catch (t4) {
            c3 = { videoUrl: r2 ? `${r2}/${g2}` : g2, audioUrl: r2 ? `${r2}/${b2}` : b2 };
          }
        } else try {
          c3 = Object(i.a)(y2, g2, true);
        } catch (t4) {
          c3 = r2 ? `${r2}/${g2}` : g2;
        }
      } catch (e3) {
        console.warn("Cought", e3), c3 = s2;
        var A2 = l2.cloneNode(true);
        [...A2.getElementsByTagName("Representation")].filter((e4) => ("audio/mp4" !== e4.getAttribute("mimeType") || e4.id != d2[0].id) && e4.id != t3.id).forEach((t4) => t4.remove()), v3 = A2.documentElement.outerHTML;
      }
      var _2 = w(c3, e2, p3, h3);
      return v3 && (_2.play_list = v3, _2._isDashMPD = true), _2.ext = (null === (u3 = t3.getAttribute("mimeType")) || void 0 === u3 ? void 0 : u3.split("/")[1]) || "mp4", _2;
    }).concat(...p2.map((t3) => {
      var n2 = new URL(t3.querySelector("BaseURL").textContent.trim(), s2 || r2).href, i2 = t3.getAttribute("lang") || t3.id.split("/").at(-1), o2 = w(n2, e2, i2);
      return o2.filename = e2, o2.type = "subtitles", o2;
    }));
  };
  function U(t2, e2) {
    return d(this, void 0, void 0, s().m((function r2() {
      var n2, i2, o2, a2, u2, c2, l2, f2, d2, h2, p2, v2;
      return s().w((function(r3) {
        for (; ; ) switch (r3.n) {
          case 0:
            return n2 = new TextEncoder().encode(t2), i2 = new TextEncoder().encode("salt"), r3.n = 1, crypto.subtle.importKey("raw", n2, { name: "PBKDF2" }, false, ["deriveKey"]);
          case 1:
            return o2 = r3.v, r3.n = 2, crypto.subtle.deriveKey({ name: "PBKDF2", salt: i2, iterations: 1e5, hash: "SHA-256" }, o2, { name: "AES-CBC", length: 256 }, false, ["decrypt"]);
          case 2:
            if (a2 = r3.v, u2 = e2.split(":"), c2 = u2.shift(), l2 = u2.join(":"), f2 = c2.match(/.{1,2}/g)) {
              r3.n = 3;
              break;
            }
            throw new Error("Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c th\xF4ng tin phim");
          case 3:
            if (d2 = l2.match(/.{1,2}/g)) {
              r3.n = 4;
              break;
            }
            throw new Error("Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c th\xF4ng tin phim");
          case 4:
            return h2 = new Uint8Array(d2.map((t3) => parseInt(t3, 16))), p2 = new Uint8Array(f2.map((t3) => parseInt(t3, 16))), r3.n = 5, crypto.subtle.decrypt({ name: "AES-CBC", iv: p2 }, a2, h2);
          case 5:
            return v2 = r3.v, r3.a(2, new TextDecoder().decode(v2));
        }
      }), r2);
    })));
  }
}
