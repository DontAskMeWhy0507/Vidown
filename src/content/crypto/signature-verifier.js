// Module 170 - Savior Signature Verifier
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(25).Buffer;
  function var_i(param_t) {
  var_n.isBuffer(param_t) || (param_t = var_n.from(param_t));
  for (var var_e = param_t.length / 4 | 0, var_r = new Array(var_e), num_i = 0;
  num_i < var_e;
  num_i++) var_r[num_i] = param_t.readUInt32BE(4 * num_i);
  return var_r;
  }
  function var_o(param_t) {
  for (;
  0 < param_t.length;
  param_t++) param_t[0] = 0;
  }
  function var_a(param_t, param_e, param_r, param_n, param_i) {
  for (var var_o_1, var_a_1, var_s, var_u_1, var_c_1 = param_r[0], var_l = param_r[1],
  var_f = param_r[2], var_d = param_r[3], var_h = param_t[0] ^ param_e[0], var_p = param_t[1] ^ param_e[1],
  var_v = param_t[2] ^ param_e[2], var_m = param_t[3] ^ param_e[3], num_y = 4, num_g = 1;
  num_g < param_i;
  num_g++) var_o_1 = var_c_1[var_h >>> 24] ^ var_l[var_p >>> 16 & 255] ^ var_f[var_v >>> 8 & 255] ^ var_d[255 & var_m] ^ param_e[num_y++],
  var_a_1 = var_c_1[var_p >>> 24] ^ var_l[var_v >>> 16 & 255] ^ var_f[var_m >>> 8 & 255] ^ var_d[255 & var_h] ^ param_e[num_y++],
  var_s = var_c_1[var_v >>> 24] ^ var_l[var_m >>> 16 & 255] ^ var_f[var_h >>> 8 & 255] ^ var_d[255 & var_p] ^ param_e[num_y++],
  var_u_1 = var_c_1[var_m >>> 24] ^ var_l[var_h >>> 16 & 255] ^ var_f[var_p >>> 8 & 255] ^ var_d[255 & var_v] ^ param_e[num_y++],
  var_h = var_o_1, var_p = var_a_1, var_v = var_s, var_m = var_u_1;
  return var_o_1 = (param_n[var_h >>> 24] << 24 | param_n[var_p >>> 16 & 255] << 16 | param_n[var_v >>> 8 & 255] << 8 | param_n[255 & var_m]) ^ param_e[num_y++],
  var_a_1 = (param_n[var_p >>> 24] << 24 | param_n[var_v >>> 16 & 255] << 16 | param_n[var_m >>> 8 & 255] << 8 | param_n[255 & var_h]) ^ param_e[num_y++],
  var_s = (param_n[var_v >>> 24] << 24 | param_n[var_m >>> 16 & 255] << 16 | param_n[var_h >>> 8 & 255] << 8 | param_n[255 & var_p]) ^ param_e[num_y++],
  var_u_1 = (param_n[var_m >>> 24] << 24 | param_n[var_h >>> 16 & 255] << 16 | param_n[var_p >>> 8 & 255] << 8 | param_n[255 & var_v]) ^ param_e[num_y++],
  [var_o_1 >>>= 0, var_a_1 >>>= 0, var_s >>>= 0, var_u_1 >>>= 0];
  }
  var list_s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
  var_u = function () {
  for (var var_t = new Array(256), num_e = 0;
  num_e < 256;
  num_e++) var_t[num_e] = num_e < 128 ? num_e << 1 : num_e << 1 ^ 283;
  for (var list_r = [], list_n = [], list_i = [[], [], [], []], list_o = [[], [],
  [], []], num_a = 0, num_s = 0, num_u = 0;
  num_u < 256;
  ++num_u) {
  var var_c_1 = num_s ^ num_s << 1 ^ num_s << 2 ^ num_s << 3 ^ num_s << 4;
  var_c_1 = var_c_1 >>> 8 ^ 255 & var_c_1 ^ 99, list_r[num_a] = var_c_1, list_n[var_c_1] = num_a;
  var var_l = var_t[num_a],
  var_f = var_t[var_l],
  var_d = var_t[var_f],
  var_h = 257 * var_t[var_c_1] ^ 16843008 * var_c_1;
  list_i[0][num_a] = var_h << 24 | var_h >>> 8, list_i[1][num_a] = var_h << 16 | var_h >>> 16,
  list_i[2][num_a] = var_h << 8 | var_h >>> 24, list_i[3][num_a] = var_h, var_h = 16843009 * var_d ^ 65537 * var_f ^ 257 * var_l ^ 16843008 * num_a,
  list_o[0][var_c_1] = var_h << 24 | var_h >>> 8, list_o[1][var_c_1] = var_h << 16 | var_h >>> 16,
  list_o[2][var_c_1] = var_h << 8 | var_h >>> 24, list_o[3][var_c_1] = var_h, 0 === num_a ?
  num_a = num_s = 1 : (num_a = var_l ^ var_t[var_t[var_t[var_d ^ var_l]]], num_s ^= var_t[var_t[num_s]]);
  }
  return {
  SBOX: list_r,
  INV_SBOX: list_n,
  SUB_MIX: list_i,
  INV_SUB_MIX: list_o
  };
  }
  ();
  function var_c(param_t) {
  this._key = var_i(param_t), this._reset();
  }
  var_c.blockSize = 16, var_c.keySize = 32, var_c.prototype.blockSize = var_c.blockSize,
  var_c.prototype.keySize = var_c.keySize, var_c.prototype._reset = function () {
  for (var var_t = this._key, var_e = var_t.length, var_r = var_e + 6, var_n_1 = 4 * (
  var_r + 1), list_i = [], num_o = 0;
  num_o < var_e;
  num_o++) list_i[num_o] = var_t[num_o];
  for (num_o = var_e;
  num_o < var_n_1;
  num_o++) {
  var var_a_1 = list_i[num_o - 1];
  num_o % var_e == 0 ? (var_a_1 = var_a_1 << 8 | var_a_1 >>> 24, var_a_1 = var_u.SBOX[var_a_1 >>> 24] << 24 | var_u.SBOX[var_a_1 >>> 16 & 255] << 16 | var_u.SBOX[var_a_1 >>> 8 & 255] << 8 | var_u.SBOX[255 & var_a_1],
  var_a_1 ^= list_s[num_o / var_e | 0] << 24) : var_e > 6 &&
  num_o % var_e == 4 && (var_a_1 = var_u.SBOX[var_a_1 >>> 24] << 24 | var_u.SBOX[var_a_1 >>> 16 & 255] << 16 | var_u.SBOX[var_a_1 >>> 8 & 255] << 8 | var_u.SBOX[255 & var_a_1]),
  list_i[num_o] = list_i[num_o - var_e] ^ var_a_1;
  }
  for (var list_c = [], num_l = 0;
  num_l < var_n_1;
  num_l++) {
  var var_f = var_n_1 - num_l,
  var_d = list_i[var_f - (num_l % 4 ? 0 : 4)];
  list_c[num_l] = num_l < 4 || var_f <= 4 ? var_d : var_u.INV_SUB_MIX[0][var_u.SBOX[var_d >>> 24]] ^ var_u.INV_SUB_MIX[1][var_u.SBOX[var_d >>> 16 & 255]] ^ var_u.INV_SUB_MIX[2][var_u.SBOX[var_d >>> 8 & 255]] ^ var_u.INV_SUB_MIX[3][var_u.SBOX[255 & var_d]];
  }
  this._nRounds = var_r, this._keySchedule = list_i, this._invKeySchedule = list_c;
  }
  , var_c.prototype.encryptBlockRaw = function (param_t) {
  return var_a(param_t = var_i(param_t), this._keySchedule, var_u.SUB_MIX, var_u.SBOX,
  this._nRounds);
  }
  , var_c.prototype.encryptBlock = function (param_t) {
  var var_e = this.encryptBlockRaw(param_t),
  var_r = var_n.allocUnsafe(16);
  return var_r.writeUInt32BE(var_e[0], 0), var_r.writeUInt32BE(var_e[1], 4), var_r.writeUInt32BE(
  var_e[2], 8), var_r.writeUInt32BE(var_e[3], 12), var_r;
  }
  , var_c.prototype.decryptBlock = function (param_t) {
  var var_e = (param_t = var_i(param_t))[1];
  param_t[1] = param_t[3], param_t[3] = var_e;
  var var_r = var_a(param_t, this._invKeySchedule, var_u.INV_SUB_MIX, var_u.INV_SBOX,
  this._nRounds),
  var_o_1 = var_n.allocUnsafe(16);
  return var_o_1.writeUInt32BE(var_r[0], 0), var_o_1.writeUInt32BE(var_r[3], 4),
  var_o_1.writeUInt32BE(var_r[2], 8), var_o_1.writeUInt32BE(var_r[1], 12), var_o_1;
  }
  , var_c.prototype.scrub = function () {
  var_o(this._keySchedule), var_o(this._invKeySchedule), var_o(this._key);
  }
  , moduleObj.exports.AES = var_c;
  };
