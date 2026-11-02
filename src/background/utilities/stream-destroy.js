// Module 76 [utilities] - Stream / runtime utility component (stream-destroy)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_util_inherits = requireFn(15);
  var dep_helper_98 = requireFn(98);
  var var_i = requireFn(25).Buffer;
  var var_a = new Array(16);
  function var_s() {
  dep_helper_98.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  }
  function var_c(param_e, param_t) {
  return param_e << param_t | param_e >>> 32 - param_t;
  }
  function var_u(param_e, param_t, param_r, param_n, param_o, param_i, param_a) {
  return var_c(param_e + (param_t & param_r | ~param_t & param_n) + param_o + param_i | 0,
  param_a) + param_t | 0;
  }
  function var_l(param_e, param_t, param_r, param_n, param_o, param_i, param_a) {
  return var_c(param_e + (param_t & param_n | param_r & ~param_n) + param_o + param_i | 0,
  param_a) + param_t | 0;
  }
  function var_d(param_e, param_t, param_r, param_n, param_o, param_i, param_a) {
  return var_c(param_e + (param_t ^ param_r ^ param_n) + param_o + param_i | 0, param_a) + param_t | 0;
  }
  function var_p(param_e, param_t, param_r, param_n, param_o, param_i, param_a) {
  return var_c(param_e + (param_r ^ (param_t | ~param_n)) + param_o + param_i | 0,
  param_a) + param_t | 0;
  }
  dep_util_inherits(var_s, dep_helper_98);
  var_s.prototype._update = function () {
  var var_e = var_a;
  for (var num_t = 0;
  num_t < 16;
  ++num_t) {
  var_e[num_t] = this._block.readInt32LE(num_t * 4);
  }
  var var_r = this._a;
  var var_n = this._b;
  var var_o = this._c;
  var var_i_1 = this._d;
  var_r = var_u(var_r, var_n, var_o, var_i_1, var_e[0], 3614090360, 7);
  var_i_1 = var_u(var_i_1, var_r, var_n, var_o, var_e[1], 3905402710, 12);
  var_o = var_u(var_o, var_i_1, var_r, var_n, var_e[2], 606105819, 17);
  var_n = var_u(var_n, var_o, var_i_1, var_r, var_e[3], 3250441966, 22);
  var_r = var_u(var_r, var_n, var_o, var_i_1, var_e[4], 4118548399, 7);
  var_i_1 = var_u(var_i_1, var_r, var_n, var_o, var_e[5], 1200080426, 12);
  var_o = var_u(var_o, var_i_1, var_r, var_n, var_e[6], 2821735955, 17);
  var_n = var_u(var_n, var_o, var_i_1, var_r, var_e[7], 4249261313, 22);
  var_r = var_u(var_r, var_n, var_o, var_i_1, var_e[8], 1770035416, 7);
  var_i_1 = var_u(var_i_1, var_r, var_n, var_o, var_e[9], 2336552879, 12);
  var_o = var_u(var_o, var_i_1, var_r, var_n, var_e[10], 4294925233, 17);
  var_n = var_u(var_n, var_o, var_i_1, var_r, var_e[11], 2304563134, 22);
  var_r = var_u(var_r, var_n, var_o, var_i_1, var_e[12], 1804603682, 7);
  var_i_1 = var_u(var_i_1, var_r, var_n, var_o, var_e[13], 4254626195, 12);
  var_o = var_u(var_o, var_i_1, var_r, var_n, var_e[14], 2792965006, 17);
  var_r = var_l(var_r, var_n = var_u(var_n, var_o, var_i_1, var_r, var_e[15], 1236535329,
  22), var_o, var_i_1, var_e[1], 4129170786, 5);
  var_i_1 = var_l(var_i_1, var_r, var_n, var_o, var_e[6], 3225465664, 9);
  var_o = var_l(var_o, var_i_1, var_r, var_n, var_e[11], 643717713, 14);
  var_n = var_l(var_n, var_o, var_i_1, var_r, var_e[0], 3921069994, 20);
  var_r = var_l(var_r, var_n, var_o, var_i_1, var_e[5], 3593408605, 5);
  var_i_1 = var_l(var_i_1, var_r, var_n, var_o, var_e[10], 38016083, 9);
  var_o = var_l(var_o, var_i_1, var_r, var_n, var_e[15], 3634488961, 14);
  var_n = var_l(var_n, var_o, var_i_1, var_r, var_e[4], 3889429448, 20);
  var_r = var_l(var_r, var_n, var_o, var_i_1, var_e[9], 568446438, 5);
  var_i_1 = var_l(var_i_1, var_r, var_n, var_o, var_e[14], 3275163606, 9);
  var_o = var_l(var_o, var_i_1, var_r, var_n, var_e[3], 4107603335, 14);
  var_n = var_l(var_n, var_o, var_i_1, var_r, var_e[8], 1163531501, 20);
  var_r = var_l(var_r, var_n, var_o, var_i_1, var_e[13], 2850285829, 5);
  var_i_1 = var_l(var_i_1, var_r, var_n, var_o, var_e[2], 4243563512, 9);
  var_o = var_l(var_o, var_i_1, var_r, var_n, var_e[7], 1735328473, 14);
  var_r = var_d(var_r, var_n = var_l(var_n, var_o, var_i_1, var_r, var_e[12], 2368359562,
  20), var_o, var_i_1, var_e[5], 4294588738, 4);
  var_i_1 = var_d(var_i_1, var_r, var_n, var_o, var_e[8], 2272392833, 11);
  var_o = var_d(var_o, var_i_1, var_r, var_n, var_e[11], 1839030562, 16);
  var_n = var_d(var_n, var_o, var_i_1, var_r, var_e[14], 4259657740, 23);
  var_r = var_d(var_r, var_n, var_o, var_i_1, var_e[1], 2763975236, 4);
  var_i_1 = var_d(var_i_1, var_r, var_n, var_o, var_e[4], 1272893353, 11);
  var_o = var_d(var_o, var_i_1, var_r, var_n, var_e[7], 4139469664, 16);
  var_n = var_d(var_n, var_o, var_i_1, var_r, var_e[10], 3200236656, 23);
  var_r = var_d(var_r, var_n, var_o, var_i_1, var_e[13], 681279174, 4);
  var_i_1 = var_d(var_i_1, var_r, var_n, var_o, var_e[0], 3936430074, 11);
  var_o = var_d(var_o, var_i_1, var_r, var_n, var_e[3], 3572445317, 16);
  var_n = var_d(var_n, var_o, var_i_1, var_r, var_e[6], 76029189, 23);
  var_r = var_d(var_r, var_n, var_o, var_i_1, var_e[9], 3654602809, 4);
  var_i_1 = var_d(var_i_1, var_r, var_n, var_o, var_e[12], 3873151461, 11);
  var_o = var_d(var_o, var_i_1, var_r, var_n, var_e[15], 530742520, 16);
  var_r = var_p(var_r, var_n = var_d(var_n, var_o, var_i_1, var_r, var_e[2], 3299628645,
  23), var_o, var_i_1, var_e[0], 4096336452, 6);
  var_i_1 = var_p(var_i_1, var_r, var_n, var_o, var_e[7], 1126891415, 10);
  var_o = var_p(var_o, var_i_1, var_r, var_n, var_e[14], 2878612391, 15);
  var_n = var_p(var_n, var_o, var_i_1, var_r, var_e[5], 4237533241, 21);
  var_r = var_p(var_r, var_n, var_o, var_i_1, var_e[12], 1700485571, 6);
  var_i_1 = var_p(var_i_1, var_r, var_n, var_o, var_e[3], 2399980690, 10);
  var_o = var_p(var_o, var_i_1, var_r, var_n, var_e[10], 4293915773, 15);
  var_n = var_p(var_n, var_o, var_i_1, var_r, var_e[1], 2240044497, 21);
  var_r = var_p(var_r, var_n, var_o, var_i_1, var_e[8], 1873313359, 6);
  var_i_1 = var_p(var_i_1, var_r, var_n, var_o, var_e[15], 4264355552, 10);
  var_o = var_p(var_o, var_i_1, var_r, var_n, var_e[6], 2734768916, 15);
  var_n = var_p(var_n, var_o, var_i_1, var_r, var_e[13], 1309151649, 21);
  var_r = var_p(var_r, var_n, var_o, var_i_1, var_e[4], 4149444226, 6);
  var_i_1 = var_p(var_i_1, var_r, var_n, var_o, var_e[11], 3174756917, 10);
  var_o = var_p(var_o, var_i_1, var_r, var_n, var_e[2], 718787259, 15);
  var_n = var_p(var_n, var_o, var_i_1, var_r, var_e[9], 3951481745, 21);
  this._a = this._a + var_r | 0;
  this._b = this._b + var_n | 0;
  this._c = this._c + var_o | 0;
  this._d = this._d + var_i_1 | 0;
  };
  var_s.prototype._digest = function () {
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
  var var_e = var_i.allocUnsafe(16);
  var_e.writeInt32LE(this._a, 0);
  var_e.writeInt32LE(this._b, 4);
  var_e.writeInt32LE(this._c, 8);
  var_e.writeInt32LE(this._d, 12);
  return var_e;
  };
  moduleObj.exports = var_s;
  };
