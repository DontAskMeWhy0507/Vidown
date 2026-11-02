// Module 475 - Savior Helper 475
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_470 = requireFn(470),
  dep_helper_405 = requireFn(405),
  dep_helper_426 = requireFn(426),
  var_a = requireFn(25).Buffer,
  dep_helper_473 = requireFn(473),
  dep_helper_474 = requireFn(474),
  dep_helper_476 = requireFn(476),
  var_l = var_a.alloc(128),
  obj_f = {
  __proto__: null,
  md5: 16,
  sha1: 20,
  sha224: 28,
  sha256: 32,
  sha384: 48,
  sha512: 64,
  "sha512-256": 32,
  ripemd160: 20,
  rmd160: 20
  }
  ,
  obj_d = {
  __proto__: null,
  "sha-1": "sha1",
  "sha-224": "sha224",
  "sha-256": "sha256",
  "sha-384": "sha384",
  "sha-512": "sha512",
  "ripemd-160": "ripemd160"
  };
  function var_h(param_t) {
  return new dep_helper_405().update(param_t).digest();
  }
  function var_p(param_t, param_e, param_r) {
  var var_i = function (param_t_1) {
  return "rmd160" === param_t_1 || "ripemd160" === param_t_1 ?
  var_h : "md5" === param_t_1 ? dep_helper_470 : function (param_e_1) {
  return dep_helper_426(param_t_1).update(param_e_1).digest();
  };
  }
  (param_t),
  var_s = "sha512" === param_t || "sha384" === param_t ? 128 :
  64;
  param_e.length > var_s ? param_e = var_i(param_e) : param_e.length < var_s &&
  (param_e = var_a.concat([param_e, var_l], var_s));
  for (var var_u = var_a.allocUnsafe(var_s + obj_f[param_t]), var_c = var_a.allocUnsafe(
  var_s + obj_f[param_t]), num_d = 0;
  num_d < var_s;
  num_d++) var_u[num_d] = 54 ^ param_e[num_d], var_c[num_d] = 92 ^ param_e[num_d];
  var var_p_1 = var_a.allocUnsafe(var_s + param_r + 4);
  var_u.copy(var_p_1, 0, 0, var_s), this.ipad1 = var_p_1, this.ipad2 = var_u, this.opad = var_c,
  this.alg = param_t, this.blocksize = var_s, this.hash = var_i, this.size = obj_f[param_t];
  }
  var_p.prototype.run = function (param_t, param_e) {
  return param_t.copy(param_e, this.blocksize), this.hash(param_e).copy(this.opad,
  this.blocksize), this.hash(this.opad);
  }
  , moduleObj.exports = function (param_t, param_e, param_r, param_n, param_i) {
  param_n = dep_helper_473(param_r, param_n), param_t = dep_helper_476(param_t, dep_helper_474,
  "Password"), param_e = dep_helper_476(param_e, dep_helper_474, "Salt");
  var var_o = (param_i || "sha1").toLowerCase(),
  var_l_1 = obj_d[var_o] || var_o,
  var_h_1 = obj_f[var_l_1];
  if ("number" != typeof var_h_1 || !var_h_1) throw new TypeError("Digest algorithm not supported: " + param_i);
  var var_v = new var_p(var_l_1, param_t, param_e.length),
  var_m = var_a.allocUnsafe(param_n),
  var_y = var_a.allocUnsafe(param_e.length + 4);
  param_e.copy(var_y, 0, 0, param_e.length);
  for (var num_g = 0, var_b = var_h_1, var_w = Math.ceil(param_n / var_b), num_A = 1;
  num_A <= var_w;
  num_A++) {
  var_y.writeUInt32BE(num_A, param_e.length);
  for (var var__ = var_v.run(var_y, var_v.ipad1), var_E = var__, num_S = 1;
  num_S < param_r;
  num_S++) {
  var_E = var_v.run(var_E, var_v.ipad2);
  for (var num_O = 0;
  num_O < var_b;
  num_O++) var__[num_O] ^= var_E[num_O];
  }
  var__.copy(var_m, num_g), num_g += var_b;
  }
  return var_m;
  };
  };
