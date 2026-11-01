// Module 17 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    u = n(4);
    n(40);
    n(35);
    o = (r = u).lib;
    i = o.Base;
    a = o.WordArray;
    s = r.algo;
    c = s.MD5;
    l = s.EvpKDF = i.extend({
      cfg: i.extend({
        keySize: 4,
        hasher: c,
        iterations: 1
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var n;
        var r = this.cfg;
        var o = r.hasher.create();
        var i = a.create();
        for (var s = i.words, c = r.keySize, l = r.iterations; s.length < c;) {
          if (n) {
            o.update(n);
          }
          n = o.update(e).finalize(t);
          o.reset();
          for (var u = 1; u < l; u++) {
            n = o.finalize(n);
            o.reset();
          }
          i.concat(n);
        }
        i.sigBytes = c * 4;
        return i;
      }
    });
    r.EvpKDF = function (e, t, n) {
      return l.create(n).compute(e, t);
    };
    e.exports = u.EvpKDF;
  };
