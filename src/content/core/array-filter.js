// Module 82 - Savior Array filter and comparator helper
export default function(t, e, r) {
  "use strict";
  function n(t2, e2) {
    return (function(t3) {
      if (Array.isArray(t3)) return t3;
    })(t2) || (function(t3, e3) {
      var r2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (null != r2) {
        var n2, i2, o2, a2, s = [], u = true, c = false;
        try {
          if (o2 = (r2 = r2.call(t3)).next, 0 === e3) {
            if (Object(r2) !== r2) return;
            u = false;
          } else for (; !(u = (n2 = o2.call(r2)).done) && (s.push(n2.value), s.length !== e3); u = true) ;
        } catch (t4) {
          c = true, i2 = t4;
        } finally {
          try {
            if (!u && null != r2.return && (a2 = r2.return(), Object(a2) !== a2)) return;
          } finally {
            if (c) throw i2;
          }
        }
        return s;
      }
    })(t2, e2) || (function(t3, e3) {
      if (t3) {
        if ("string" == typeof t3) return i(t3, e3);
        var r2 = {}.toString.call(t3).slice(8, -1);
        return "Object" === r2 && t3.constructor && (r2 = t3.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t3) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? i(t3, e3) : void 0;
      }
    })(t2, e2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function i(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, n2 = Array(e2); r2 < e2; r2++) n2[r2] = t2[r2];
    return n2;
  }
  function o(t2) {
    return t2.split(".");
  }
  r.d(e, "a", (function() {
    return a;
  }));
  var a = { store: /* @__PURE__ */ new Map(), register: function(t2, e2) {
    var r2 = n(o(t2), 1)[0];
    this.store.set(t2, e2), window.addEventListener(r2, e2);
  }, unregister: function(t2) {
    var e2 = n(o(t2), 1)[0], r2 = this.store.get(t2);
    r2 && window.removeEventListener(e2, r2);
  }, registerClickaway: function(t2, e2, r2) {
    this.unregisterClickaway(t2), this.register("click.clickaway_" + t2, (function(t3) {
      var n2 = t3.target, i2 = true;
      e2.forEach((t4) => {
        (t4 == n2 || (null == t4 ? void 0 : t4.contains(n2))) && (i2 = false);
      }), i2 && (null == r2 || r2());
    }));
  }, unregisterClickaway: function(t2) {
    this.unregister("click.clickaway_" + t2);
  } };
}
