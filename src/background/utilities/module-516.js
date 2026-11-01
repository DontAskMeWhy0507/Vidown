// Module 516 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(115);
  var o = r(175);
  var i = r(721);
  var a = r(517);
  var s = r(722) || a || i;
  e.exports = function () {
    var e;
    var t = {
      assert: function (e) {
        if (!t.has(e)) {
          var r = e && Object(e) === e ? "the given object key" : o(e);
          throw new n("Side channel does not contain " + r);
        }
      },
      delete: function (t) {
        return !!e && e.delete(t);
      },
      get: function (t) {
        return e && e.get(t);
      },
      has: function (t) {
        return !!e && e.has(t);
      },
      set: function (t, r) {
        e ||= s();
        e.set(t, r);
      }
    };
    return t;
  };
};
