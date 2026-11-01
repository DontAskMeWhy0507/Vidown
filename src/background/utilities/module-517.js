// Module 517 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(140);
  var o = r(151);
  var i = r(175);
  var a = r(115);
  var s = n("%Map%", true);
  var c = o("Map.prototype.get", true);
  var u = o("Map.prototype.set", true);
  var l = o("Map.prototype.has", true);
  var d = o("Map.prototype.delete", true);
  var p = o("Map.prototype.size", true);
  e.exports = !!s && function () {
    var e;
    var t = {
      assert: function (e) {
        if (!t.has(e)) {
          throw new a("Side channel does not contain " + i(e));
        }
      },
      delete: function (t) {
        if (e) {
          var r = d(e, t);
          if (p(e) === 0) {
            e = undefined;
          }
          return r;
        }
        return false;
      },
      get: function (t) {
        if (e) {
          return c(e, t);
        }
      },
      has: function (t) {
        return !!e && l(e, t);
      },
      set: function (t, r) {
        e ||= new s();
        u(e, t, r);
      }
    };
    return t;
  };
};
