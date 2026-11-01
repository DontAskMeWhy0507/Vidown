// Module 58 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  var u;
  var l;
  var d;
  d = r(4);
  r(34);
  r(35);
  o = (n = d).lib;
  i = o.Base;
  a = o.WordArray;
  s = n.algo;
  c = s.SHA256;
  u = s.HMAC;
  l = s.PBKDF2 = i.extend({
    cfg: i.extend({
      keySize: 4,
      hasher: c,
      iterations: 250000
    }),
    init: function (e) {
      this.cfg = this.cfg.extend(e);
    },
    compute: function (e, t) {
      var r = this.cfg;
      var n = u.create(r.hasher, e);
      var o = a.create();
      var i = a.create([1]);
      for (var s = o.words, c = i.words, l = r.keySize, d = r.iterations; s.length < l;) {
        var p = n.update(t).finalize(i);
        n.reset();
        var f = p.words;
        var h = f.length;
        var m = p;
        for (var g = 1; g < d; g++) {
          m = n.finalize(m);
          n.reset();
          var v = m.words;
          for (var y = 0; y < h; y++) {
            f[y] ^= v[y];
          }
        }
        o.concat(p);
        c[0]++;
      }
      o.sigBytes = l * 4;
      return o;
    }
  });
  n.PBKDF2 = function (e, t, r) {
    return l.create(r).compute(e, t);
  };
  e.exports = d.PBKDF2;
};
