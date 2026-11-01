// Module 41 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    n(26);
    (function () {
      var e = r;
      var t = e.lib.Hasher;
      var n = e.x64;
      var o = n.Word;
      var i = n.WordArray;
      var a = e.algo;
      function s() {
        return o.create.apply(o, arguments);
      }
      var c = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)];
      var l = [];
      (function () {
        for (var e = 0; e < 80; e++) {
          l[e] = s();
        }
      })();
      var u = a.SHA512 = t.extend({
        _doReset: function () {
          this._hash = new i.init([new o.init(1779033703, 4089235720), new o.init(3144134277, 2227873595), new o.init(1013904242, 4271175723), new o.init(2773480762, 1595750129), new o.init(1359893119, 2917565137), new o.init(2600822924, 725511199), new o.init(528734635, 4215389547), new o.init(1541459225, 327033209)]);
        },
        _doProcessBlock: function (e, t) {
          var n = this._hash.words;
          var r = n[0];
          var o = n[1];
          var i = n[2];
          var a = n[3];
          var s = n[4];
          var u = n[5];
          var d = n[6];
          var f = n[7];
          var p = r.high;
          var h = r.low;
          var g = o.high;
          var m = o.low;
          var v = i.high;
          var y = i.low;
          var k = a.high;
          var b = a.low;
          var _ = s.high;
          var T = s.low;
          var S = u.high;
          var x = u.low;
          var w = d.high;
          var E = d.low;
          var A = f.high;
          var C = f.low;
          var O = p;
          var I = h;
          var N = g;
          var D = m;
          var R = v;
          var L = y;
          var P = k;
          var B = b;
          var U = _;
          var M = T;
          var V = S;
          var H = x;
          var j = w;
          var F = E;
          var z = A;
          var G = C;
          for (var W = 0; W < 80; W++) {
            var q;
            var Y;
            var K = l[W];
            if (W < 16) {
              Y = K.high = e[t + W * 2] | 0;
              q = K.low = e[t + W * 2 + 1] | 0;
            } else {
              var X = l[W - 15];
              var $ = X.high;
              var J = X.low;
              var Q = ($ >>> 1 | J << 31) ^ ($ >>> 8 | J << 24) ^ $ >>> 7;
              var Z = (J >>> 1 | $ << 31) ^ (J >>> 8 | $ << 24) ^ (J >>> 7 | $ << 25);
              var ee = l[W - 2];
              var te = ee.high;
              var ne = ee.low;
              var re = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6;
              var oe = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26);
              var ie = l[W - 7];
              var ae = ie.high;
              var se = ie.low;
              var ce = l[W - 16];
              var le = ce.high;
              var ue = ce.low;
              Y = (Y = (Y = Q + ae + ((q = Z + se) >>> 0 < Z >>> 0 ? 1 : 0)) + re + ((q += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + le + ((q += ue) >>> 0 < ue >>> 0 ? 1 : 0);
              K.high = Y;
              K.low = q;
            }
            var de;
            var fe = U & V ^ ~U & j;
            var pe = M & H ^ ~M & F;
            var he = O & N ^ O & R ^ N & R;
            var ge = I & D ^ I & L ^ D & L;
            var me = (O >>> 28 | I << 4) ^ (O << 30 | I >>> 2) ^ (O << 25 | I >>> 7);
            var ve = (I >>> 28 | O << 4) ^ (I << 30 | O >>> 2) ^ (I << 25 | O >>> 7);
            var ye = (U >>> 14 | M << 18) ^ (U >>> 18 | M << 14) ^ (U << 23 | M >>> 9);
            var ke = (M >>> 14 | U << 18) ^ (M >>> 18 | U << 14) ^ (M << 23 | U >>> 9);
            var be = c[W];
            var _e = be.high;
            var Te = be.low;
            var Se = z + ye + ((de = G + ke) >>> 0 < G >>> 0 ? 1 : 0);
            var xe = ve + ge;
            z = j;
            G = F;
            j = V;
            F = H;
            V = U;
            H = M;
            U = P + (Se = (Se = (Se = Se + fe + ((de += pe) >>> 0 < pe >>> 0 ? 1 : 0)) + _e + ((de += Te) >>> 0 < Te >>> 0 ? 1 : 0)) + Y + ((de += q) >>> 0 < q >>> 0 ? 1 : 0)) + ((M = B + de | 0) >>> 0 < B >>> 0 ? 1 : 0) | 0;
            P = R;
            B = L;
            R = N;
            L = D;
            N = O;
            D = I;
            O = Se + (me + he + (xe >>> 0 < ve >>> 0 ? 1 : 0)) + ((I = de + xe | 0) >>> 0 < de >>> 0 ? 1 : 0) | 0;
          }
          h = r.low = h + I;
          r.high = p + O + (h >>> 0 < I >>> 0 ? 1 : 0);
          m = o.low = m + D;
          o.high = g + N + (m >>> 0 < D >>> 0 ? 1 : 0);
          y = i.low = y + L;
          i.high = v + R + (y >>> 0 < L >>> 0 ? 1 : 0);
          b = a.low = b + B;
          a.high = k + P + (b >>> 0 < B >>> 0 ? 1 : 0);
          T = s.low = T + M;
          s.high = _ + U + (T >>> 0 < M >>> 0 ? 1 : 0);
          x = u.low = x + H;
          u.high = S + V + (x >>> 0 < H >>> 0 ? 1 : 0);
          E = d.low = E + F;
          d.high = w + j + (E >>> 0 < F >>> 0 ? 1 : 0);
          C = f.low = C + G;
          f.high = A + z + (C >>> 0 < G >>> 0 ? 1 : 0);
        },
        _doFinalize: function () {
          var e = this._data;
          var t = e.words;
          var n = this._nDataBytes * 8;
          var r = e.sigBytes * 8;
          t[r >>> 5] |= 128 << 24 - r % 32;
          t[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296);
          t[31 + (r + 128 >>> 10 << 5)] = n;
          e.sigBytes = t.length * 4;
          this._process();
          return this._hash.toX32();
        },
        clone: function () {
          var e = t.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        },
        blockSize: 32
      });
      e.SHA512 = t._createHelper(u);
      e.HmacSHA512 = t._createHmacHelper(u);
    })();
    e.exports = r.SHA512;
  };
