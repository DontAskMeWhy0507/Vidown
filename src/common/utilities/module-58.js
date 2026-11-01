// Module 58 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    var d;
    d = n(4);
    n(34);
    n(35);
    o = (r = d).lib;
    i = o.Base;
    a = o.WordArray;
    s = r.algo;
    c = s.SHA256;
    l = s.HMAC;
    u = s.PBKDF2 = i.extend({
      cfg: i.extend({
        keySize: 4,
        hasher: c,
        iterations: 250000
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var n = this.cfg;
        var r = l.create(n.hasher, e);
        var o = a.create();
        var i = a.create([1]);
        for (var s = o.words, c = i.words, u = n.keySize, d = n.iterations; s.length < u;) {
          var f = r.update(t).finalize(i);
          r.reset();
          var p = f.words;
          var h = p.length;
          var g = f;
          for (var m = 1; m < d; m++) {
            g = r.finalize(g);
            r.reset();
            var v = g.words;
            for (var y = 0; y < h; y++) {
              p[y] ^= v[y];
            }
          }
          o.concat(f);
          c[0]++;
        }
        o.sigBytes = u * 4;
        return o;
      }
    });
    r.PBKDF2 = function (e, t, n) {
      return u.create(n).compute(e, t);
    };
    e.exports = d.PBKDF2;
  };
