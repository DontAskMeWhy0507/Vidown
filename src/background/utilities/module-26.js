// Module 26 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  c = r(4);
  o = (n = c).lib;
  i = o.Base;
  a = o.WordArray;
  (s = n.x64 = {}).Word = i.extend({
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
      for (var t = e.length, r = [], n = 0; n < t; n++) {
        var o = e[n];
        r.push(o.high);
        r.push(o.low);
      }
      return a.create(r, this.sigBytes);
    },
    clone: function () {
      var e = i.clone.call(this);
      var t = e.words = this.words.slice(0);
      for (var r = t.length, n = 0; n < r; n++) {
        t[n] = t[n].clone();
      }
      return e;
    }
  });
  e.exports = c;
};
