// Module 57 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  /** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
    	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
  (function (e) {
    var t = n;
    var r = t.lib;
    var o = r.WordArray;
    var i = r.Hasher;
    var a = t.algo;
    var s = o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
    var c = o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
    var u = o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
    var l = o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
    var d = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
    var p = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
    var f = a.RIPEMD160 = i.extend({
      _doReset: function () {
        this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        for (var r = 0; r < 16; r++) {
          var n = t + r;
          var o = e[n];
          e[n] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
        }
        var i;
        var a;
        var f;
        var b;
        var w;
        var E;
        var D;
        var T;
        var k;
        var A;
        var C;
        var x = this._hash.words;
        var S = d.words;
        var O = p.words;
        var I = s.words;
        var L = c.words;
        var R = u.words;
        var P = l.words;
        E = i = x[0];
        D = a = x[1];
        T = f = x[2];
        k = b = x[3];
        A = w = x[4];
        r = 0;
        for (; r < 80; r += 1) {
          C = i + e[t + I[r]] | 0;
          C += r < 16 ? h(a, f, b) + S[0] : r < 32 ? m(a, f, b) + S[1] : r < 48 ? g(a, f, b) + S[2] : r < 64 ? v(a, f, b) + S[3] : y(a, f, b) + S[4];
          C = (C = _(C |= 0, R[r])) + w | 0;
          i = w;
          w = b;
          b = _(f, 10);
          f = a;
          a = C;
          C = E + e[t + L[r]] | 0;
          C += r < 16 ? y(D, T, k) + O[0] : r < 32 ? v(D, T, k) + O[1] : r < 48 ? g(D, T, k) + O[2] : r < 64 ? m(D, T, k) + O[3] : h(D, T, k) + O[4];
          C = (C = _(C |= 0, P[r])) + A | 0;
          E = A;
          A = k;
          k = _(T, 10);
          T = D;
          D = C;
        }
        C = x[1] + f + k | 0;
        x[1] = x[2] + b + A | 0;
        x[2] = x[3] + w + E | 0;
        x[3] = x[4] + i + D | 0;
        x[4] = x[0] + a + T | 0;
        x[0] = C;
      },
      _doFinalize: function () {
        var e = this._data;
        var t = e.words;
        var r = this._nDataBytes * 8;
        var n = e.sigBytes * 8;
        t[n >>> 5] |= 128 << 24 - n % 32;
        t[14 + (n + 64 >>> 9 << 4)] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & -16711936;
        e.sigBytes = (t.length + 1) * 4;
        this._process();
        var o = this._hash;
        var i = o.words;
        for (var a = 0; a < 5; a++) {
          var s = i[a];
          i[a] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & -16711936;
        }
        return o;
      },
      clone: function () {
        var e = i.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    function h(e, t, r) {
      return e ^ t ^ r;
    }
    function m(e, t, r) {
      return e & t | ~e & r;
    }
    function g(e, t, r) {
      return (e | ~t) ^ r;
    }
    function v(e, t, r) {
      return e & r | t & ~r;
    }
    function y(e, t, r) {
      return e ^ (t | ~r);
    }
    function _(e, t) {
      return e << t | e >>> 32 - t;
    }
    t.RIPEMD160 = i._createHelper(f);
    t.HmacRIPEMD160 = i._createHmacHelper(f);
  })(Math);
  e.exports = n.RIPEMD160;
};
