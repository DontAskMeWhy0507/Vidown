// Module 17 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  var u;
  var l;
  l = r(4);
  r(40);
  r(35);
  o = (n = l).lib;
  i = o.Base;
  a = o.WordArray;
  s = n.algo;
  c = s.MD5;
  u = s.EvpKDF = i.extend({
    cfg: i.extend({
      keySize: 4,
      hasher: c,
      iterations: 1
    }),
    init: function (e) {
      this.cfg = this.cfg.extend(e);
    },
    compute: function (e, t) {
      var r;
      var n = this.cfg;
      var o = n.hasher.create();
      var i = a.create();
      for (var s = i.words, c = n.keySize, u = n.iterations; s.length < c;) {
        if (r) {
          o.update(r);
        }
        r = o.update(e).finalize(t);
        o.reset();
        for (var l = 1; l < u; l++) {
          r = o.finalize(r);
          o.reset();
        }
        i.concat(r);
      }
      i.sigBytes = c * 4;
      return i;
    }
  });
  n.EvpKDF = function (e, t, r) {
    return u.create(r).compute(e, t);
  };
  e.exports = l.EvpKDF;
};
