// Module 41 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  r(26);
  (function () {
    var e = n;
    var t = e.lib.Hasher;
    var r = e.x64;
    var o = r.Word;
    var i = r.WordArray;
    var a = e.algo;
    function s() {
      return o.create.apply(o, arguments);
    }
    var c = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)];
    var u = [];
    (function () {
      for (var e = 0; e < 80; e++) {
        u[e] = s();
      }
    })();
    var l = a.SHA512 = t.extend({
      _doReset: function () {
        this._hash = new i.init([new o.init(1779033703, 4089235720), new o.init(3144134277, 2227873595), new o.init(1013904242, 4271175723), new o.init(2773480762, 1595750129), new o.init(1359893119, 2917565137), new o.init(2600822924, 725511199), new o.init(528734635, 4215389547), new o.init(1541459225, 327033209)]);
      },
      _doProcessBlock: function (e, t) {
        var r = this._hash.words;
        var n = r[0];
        var o = r[1];
        var i = r[2];
        var a = r[3];
        var s = r[4];
        var l = r[5];
        var d = r[6];
        var p = r[7];
        var f = n.high;
        var h = n.low;
        var m = o.high;
        var g = o.low;
        var v = i.high;
        var y = i.low;
        var _ = a.high;
        var b = a.low;
        var w = s.high;
        var E = s.low;
        var D = l.high;
        var T = l.low;
        var k = d.high;
        var A = d.low;
        var C = p.high;
        var x = p.low;
        var S = f;
        var O = h;
        var I = m;
        var L = g;
        var R = v;
        var P = y;
        var B = _;
        var M = b;
        var F = w;
        var U = E;
        var N = D;
        var j = T;
        var q = k;
        var H = A;
        var V = C;
        var W = x;
        for (var z = 0; z < 80; z++) {
          var Y;
          var G;
          var Q = u[z];
          if (z < 16) {
            G = Q.high = e[t + z * 2] | 0;
            Y = Q.low = e[t + z * 2 + 1] | 0;
          } else {
            var $ = u[z - 15];
            var K = $.high;
            var X = $.low;
            var Z = (K >>> 1 | X << 31) ^ (K >>> 8 | X << 24) ^ K >>> 7;
            var J = (X >>> 1 | K << 31) ^ (X >>> 8 | K << 24) ^ (X >>> 7 | K << 25);
            var ee = u[z - 2];
            var te = ee.high;
            var re = ee.low;
            var ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6;
            var oe = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26);
            var ie = u[z - 7];
            var ae = ie.high;
            var se = ie.low;
            var ce = u[z - 16];
            var ue = ce.high;
            var le = ce.low;
            G = (G = (G = Z + ae + ((Y = J + se) >>> 0 < J >>> 0 ? 1 : 0)) + ne + ((Y += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + ue + ((Y += le) >>> 0 < le >>> 0 ? 1 : 0);
            Q.high = G;
            Q.low = Y;
          }
          var de;
          var pe = F & N ^ ~F & q;
          var fe = U & j ^ ~U & H;
          var he = S & I ^ S & R ^ I & R;
          var me = O & L ^ O & P ^ L & P;
          var ge = (S >>> 28 | O << 4) ^ (S << 30 | O >>> 2) ^ (S << 25 | O >>> 7);
          var ve = (O >>> 28 | S << 4) ^ (O << 30 | S >>> 2) ^ (O << 25 | S >>> 7);
          var ye = (F >>> 14 | U << 18) ^ (F >>> 18 | U << 14) ^ (F << 23 | U >>> 9);
          var _e = (U >>> 14 | F << 18) ^ (U >>> 18 | F << 14) ^ (U << 23 | F >>> 9);
          var be = c[z];
          var we = be.high;
          var Ee = be.low;
          var De = V + ye + ((de = W + _e) >>> 0 < W >>> 0 ? 1 : 0);
          var Te = ve + me;
          V = q;
          W = H;
          q = N;
          H = j;
          N = F;
          j = U;
          F = B + (De = (De = (De = De + pe + ((de += fe) >>> 0 < fe >>> 0 ? 1 : 0)) + we + ((de += Ee) >>> 0 < Ee >>> 0 ? 1 : 0)) + G + ((de += Y) >>> 0 < Y >>> 0 ? 1 : 0)) + ((U = M + de | 0) >>> 0 < M >>> 0 ? 1 : 0) | 0;
          B = R;
          M = P;
          R = I;
          P = L;
          I = S;
          L = O;
          S = De + (ge + he + (Te >>> 0 < ve >>> 0 ? 1 : 0)) + ((O = de + Te | 0) >>> 0 < de >>> 0 ? 1 : 0) | 0;
        }
        h = n.low = h + O;
        n.high = f + S + (h >>> 0 < O >>> 0 ? 1 : 0);
        g = o.low = g + L;
        o.high = m + I + (g >>> 0 < L >>> 0 ? 1 : 0);
        y = i.low = y + P;
        i.high = v + R + (y >>> 0 < P >>> 0 ? 1 : 0);
        b = a.low = b + M;
        a.high = _ + B + (b >>> 0 < M >>> 0 ? 1 : 0);
        E = s.low = E + U;
        s.high = w + F + (E >>> 0 < U >>> 0 ? 1 : 0);
        T = l.low = T + j;
        l.high = D + N + (T >>> 0 < j >>> 0 ? 1 : 0);
        A = d.low = A + H;
        d.high = k + q + (A >>> 0 < H >>> 0 ? 1 : 0);
        x = p.low = x + W;
        p.high = C + V + (x >>> 0 < W >>> 0 ? 1 : 0);
      },
      _doFinalize: function () {
        var e = this._data;
        var t = e.words;
        var r = this._nDataBytes * 8;
        var n = e.sigBytes * 8;
        t[n >>> 5] |= 128 << 24 - n % 32;
        t[30 + (n + 128 >>> 10 << 5)] = Math.floor(r / 4294967296);
        t[31 + (n + 128 >>> 10 << 5)] = r;
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
    e.SHA512 = t._createHelper(l);
    e.HmacSHA512 = t._createHmacHelper(l);
  })();
  e.exports = n.SHA512;
};
