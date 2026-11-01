// Module 57 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    r = n(4);
    /** @preserve
      (c) 2012 by Cédric Mesnil. All rights reserved.
      	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
          - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
    (function (e) {
      var t = r;
      var n = t.lib;
      var o = n.WordArray;
      var i = n.Hasher;
      var a = t.algo;
      var s = o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
      var c = o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
      var l = o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
      var u = o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
      var d = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
      var f = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
      var p = a.RIPEMD160 = i.extend({
        _doReset: function () {
          this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function (e, t) {
          for (var n = 0; n < 16; n++) {
            var r = t + n;
            var o = e[r];
            e[r] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
          }
          var i;
          var a;
          var p;
          var b;
          var _;
          var T;
          var S;
          var x;
          var w;
          var E;
          var A;
          var C = this._hash.words;
          var O = d.words;
          var I = f.words;
          var N = s.words;
          var D = c.words;
          var R = l.words;
          var L = u.words;
          T = i = C[0];
          S = a = C[1];
          x = p = C[2];
          w = b = C[3];
          E = _ = C[4];
          n = 0;
          for (; n < 80; n += 1) {
            A = i + e[t + N[n]] | 0;
            A += n < 16 ? h(a, p, b) + O[0] : n < 32 ? g(a, p, b) + O[1] : n < 48 ? m(a, p, b) + O[2] : n < 64 ? v(a, p, b) + O[3] : y(a, p, b) + O[4];
            A = (A = k(A |= 0, R[n])) + _ | 0;
            i = _;
            _ = b;
            b = k(p, 10);
            p = a;
            a = A;
            A = T + e[t + D[n]] | 0;
            A += n < 16 ? y(S, x, w) + I[0] : n < 32 ? v(S, x, w) + I[1] : n < 48 ? m(S, x, w) + I[2] : n < 64 ? g(S, x, w) + I[3] : h(S, x, w) + I[4];
            A = (A = k(A |= 0, L[n])) + E | 0;
            T = E;
            E = w;
            w = k(x, 10);
            x = S;
            S = A;
          }
          A = C[1] + p + w | 0;
          C[1] = C[2] + b + E | 0;
          C[2] = C[3] + _ + T | 0;
          C[3] = C[4] + i + S | 0;
          C[4] = C[0] + a + x | 0;
          C[0] = A;
        },
        _doFinalize: function () {
          var e = this._data;
          var t = e.words;
          var n = this._nDataBytes * 8;
          var r = e.sigBytes * 8;
          t[r >>> 5] |= 128 << 24 - r % 32;
          t[14 + (r + 64 >>> 9 << 4)] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & -16711936;
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
      function h(e, t, n) {
        return e ^ t ^ n;
      }
      function g(e, t, n) {
        return e & t | ~e & n;
      }
      function m(e, t, n) {
        return (e | ~t) ^ n;
      }
      function v(e, t, n) {
        return e & n | t & ~n;
      }
      function y(e, t, n) {
        return e ^ (t | ~n);
      }
      function k(e, t) {
        return e << t | e >>> 32 - t;
      }
      t.RIPEMD160 = i._createHelper(p);
      t.HmacRIPEMD160 = i._createHmacHelper(p);
    })(Math);
    e.exports = r.RIPEMD160;
  };
