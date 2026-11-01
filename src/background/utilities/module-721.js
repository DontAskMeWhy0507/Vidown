// Module 721 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(175);
  var o = r(115);
  function i(e, t, r) {
    for (var n, o = e; (n = o.next) != null; o = n) {
      if (n.key === t) {
        o.next = n.next;
        if (!r) {
          n.next = e.next;
          e.next = n;
        }
        return n;
      }
    }
  }
  e.exports = function () {
    var e;
    var t = {
      assert: function (e) {
        if (!t.has(e)) {
          throw new o("Side channel does not contain " + n(e));
        }
      },
      delete: function (t) {
        var r = function (e, t) {
          if (e) {
            return i(e, t, true);
          }
        }(e, t);
        if (r && e && !e.next) {
          e = undefined;
        }
        return !!r;
      },
      get: function (t) {
        return function (e, t) {
          if (e) {
            var r = i(e, t);
            return r && r.value;
          }
        }(e, t);
      },
      has: function (t) {
        return function (e, t) {
          return !!e && !!i(e, t);
        }(e, t);
      },
      set: function (t, r) {
        e ||= {
          next: undefined
        };
        (function (e, t, r) {
          var n = i(e, t);
          if (n) {
            n.value = r;
          } else {
            e.next = {
              key: t,
              next: e.next,
              value: r
            };
          }
        })(e, t, r);
      }
    };
    return t;
  };
};
