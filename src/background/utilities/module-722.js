// Module 722 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(140);
  var o = r(151);
  var i = r(175);
  var a = r(517);
  var s = r(115);
  var c = n("%WeakMap%", true);
  var u = o("WeakMap.prototype.get", true);
  var l = o("WeakMap.prototype.set", true);
  var d = o("WeakMap.prototype.has", true);
  var p = o("WeakMap.prototype.delete", true);
  e.exports = c ? function () {
    var e;
    var t;
    var r = {
      assert: function (e) {
        if (!r.has(e)) {
          throw new s("Side channel does not contain " + i(e));
        }
      },
      delete: function (r) {
        if (c && r && (typeof r == "object" || typeof r == "function")) {
          if (e) {
            return p(e, r);
          }
        } else if (a && t) {
          return t.delete(r);
        }
        return false;
      },
      get: function (r) {
        if (c && r && (typeof r == "object" || typeof r == "function") && e) {
          return u(e, r);
        } else {
          return t && t.get(r);
        }
      },
      has: function (r) {
        if (c && r && (typeof r == "object" || typeof r == "function") && e) {
          return d(e, r);
        } else {
          return !!t && t.has(r);
        }
      },
      set: function (r, n) {
        if (c && r && (typeof r == "object" || typeof r == "function")) {
          e ||= new c();
          l(e, r, n);
        } else if (a) {
          t ||= a();
          t.set(r, n);
        }
      }
    };
    return r;
  } : a;
};
