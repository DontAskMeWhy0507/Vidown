// Module 76 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(15);
  var o = r(98);
  var i = r(25).Buffer;
  var a = new Array(16);
  function s() {
    o.call(this, 64);
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
  }
  function c(e, t) {
    return e << t | e >>> 32 - t;
  }
  function u(e, t, r, n, o, i, a) {
    return c(e + (t & r | ~t & n) + o + i | 0, a) + t | 0;
  }
  function l(e, t, r, n, o, i, a) {
    return c(e + (t & n | r & ~n) + o + i | 0, a) + t | 0;
  }
  function d(e, t, r, n, o, i, a) {
    return c(e + (t ^ r ^ n) + o + i | 0, a) + t | 0;
  }
  function p(e, t, r, n, o, i, a) {
    return c(e + (r ^ (t | ~n)) + o + i | 0, a) + t | 0;
  }
  n(s, o);
  s.prototype._update = function () {
    var e = a;
    for (var t = 0; t < 16; ++t) {
      e[t] = this._block.readInt32LE(t * 4);
    }
    var r = this._a;
    var n = this._b;
    var o = this._c;
    var i = this._d;
    r = u(r, n, o, i, e[0], 3614090360, 7);
    i = u(i, r, n, o, e[1], 3905402710, 12);
    o = u(o, i, r, n, e[2], 606105819, 17);
    n = u(n, o, i, r, e[3], 3250441966, 22);
    r = u(r, n, o, i, e[4], 4118548399, 7);
    i = u(i, r, n, o, e[5], 1200080426, 12);
    o = u(o, i, r, n, e[6], 2821735955, 17);
    n = u(n, o, i, r, e[7], 4249261313, 22);
    r = u(r, n, o, i, e[8], 1770035416, 7);
    i = u(i, r, n, o, e[9], 2336552879, 12);
    o = u(o, i, r, n, e[10], 4294925233, 17);
    n = u(n, o, i, r, e[11], 2304563134, 22);
    r = u(r, n, o, i, e[12], 1804603682, 7);
    i = u(i, r, n, o, e[13], 4254626195, 12);
    o = u(o, i, r, n, e[14], 2792965006, 17);
    r = l(r, n = u(n, o, i, r, e[15], 1236535329, 22), o, i, e[1], 4129170786, 5);
    i = l(i, r, n, o, e[6], 3225465664, 9);
    o = l(o, i, r, n, e[11], 643717713, 14);
    n = l(n, o, i, r, e[0], 3921069994, 20);
    r = l(r, n, o, i, e[5], 3593408605, 5);
    i = l(i, r, n, o, e[10], 38016083, 9);
    o = l(o, i, r, n, e[15], 3634488961, 14);
    n = l(n, o, i, r, e[4], 3889429448, 20);
    r = l(r, n, o, i, e[9], 568446438, 5);
    i = l(i, r, n, o, e[14], 3275163606, 9);
    o = l(o, i, r, n, e[3], 4107603335, 14);
    n = l(n, o, i, r, e[8], 1163531501, 20);
    r = l(r, n, o, i, e[13], 2850285829, 5);
    i = l(i, r, n, o, e[2], 4243563512, 9);
    o = l(o, i, r, n, e[7], 1735328473, 14);
    r = d(r, n = l(n, o, i, r, e[12], 2368359562, 20), o, i, e[5], 4294588738, 4);
    i = d(i, r, n, o, e[8], 2272392833, 11);
    o = d(o, i, r, n, e[11], 1839030562, 16);
    n = d(n, o, i, r, e[14], 4259657740, 23);
    r = d(r, n, o, i, e[1], 2763975236, 4);
    i = d(i, r, n, o, e[4], 1272893353, 11);
    o = d(o, i, r, n, e[7], 4139469664, 16);
    n = d(n, o, i, r, e[10], 3200236656, 23);
    r = d(r, n, o, i, e[13], 681279174, 4);
    i = d(i, r, n, o, e[0], 3936430074, 11);
    o = d(o, i, r, n, e[3], 3572445317, 16);
    n = d(n, o, i, r, e[6], 76029189, 23);
    r = d(r, n, o, i, e[9], 3654602809, 4);
    i = d(i, r, n, o, e[12], 3873151461, 11);
    o = d(o, i, r, n, e[15], 530742520, 16);
    r = p(r, n = d(n, o, i, r, e[2], 3299628645, 23), o, i, e[0], 4096336452, 6);
    i = p(i, r, n, o, e[7], 1126891415, 10);
    o = p(o, i, r, n, e[14], 2878612391, 15);
    n = p(n, o, i, r, e[5], 4237533241, 21);
    r = p(r, n, o, i, e[12], 1700485571, 6);
    i = p(i, r, n, o, e[3], 2399980690, 10);
    o = p(o, i, r, n, e[10], 4293915773, 15);
    n = p(n, o, i, r, e[1], 2240044497, 21);
    r = p(r, n, o, i, e[8], 1873313359, 6);
    i = p(i, r, n, o, e[15], 4264355552, 10);
    o = p(o, i, r, n, e[6], 2734768916, 15);
    n = p(n, o, i, r, e[13], 1309151649, 21);
    r = p(r, n, o, i, e[4], 4149444226, 6);
    i = p(i, r, n, o, e[11], 3174756917, 10);
    o = p(o, i, r, n, e[2], 718787259, 15);
    n = p(n, o, i, r, e[9], 3951481745, 21);
    this._a = this._a + r | 0;
    this._b = this._b + n | 0;
    this._c = this._c + o | 0;
    this._d = this._d + i | 0;
  };
  s.prototype._digest = function () {
    this._block[this._blockOffset++] = 128;
    if (this._blockOffset > 56) {
      this._block.fill(0, this._blockOffset, 64);
      this._update();
      this._blockOffset = 0;
    }
    this._block.fill(0, this._blockOffset, 56);
    this._block.writeUInt32LE(this._length[0], 56);
    this._block.writeUInt32LE(this._length[1], 60);
    this._update();
    var e = i.allocUnsafe(16);
    e.writeInt32LE(this._a, 0);
    e.writeInt32LE(this._b, 4);
    e.writeInt32LE(this._c, 8);
    e.writeInt32LE(this._d, 12);
    return e;
  };
  e.exports = s;
};
