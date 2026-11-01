// Module 26 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    c = n(4);
    o = (r = c).lib;
    i = o.Base;
    a = o.WordArray;
    (s = r.x64 = {}).Word = i.extend({
      init: function (e, t) {
        this.high = e;
        this.low = t;
      }
    });
    s.WordArray = i.extend({
      init: function (e, t) {
        e = this.words = e || [];
        this.sigBytes = t ?? e.length * 8;
      },
      toX32: function () {
        var e = this.words;
        for (var t = e.length, n = [], r = 0; r < t; r++) {
          var o = e[r];
          n.push(o.high);
          n.push(o.low);
        }
        return a.create(n, this.sigBytes);
      },
      clone: function () {
        var e = i.clone.call(this);
        var t = e.words = this.words.slice(0);
        for (var n = t.length, r = 0; r < n; r++) {
          t[r] = t[r].clone();
        }
        return e;
      }
    });
    e.exports = c;
  };
