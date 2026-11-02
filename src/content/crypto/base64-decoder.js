// Module 161 - Savior Base64 Decoder
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_t) {
  requireFn.d(exportsObj, "a", function () {
  return Ut;
  }
  );
  for (var fn_n = function (param_t_1) {
  var var_e = var_d(param_t_1),
  var_r = var_e[0],
  var_n = var_e[1];
  return 3 * (var_r + var_n) / 4 - var_n;
  }
  , fn_i = function (param_t_1) {
  var var_e,
  var_r,
  var_n = var_d(param_t_1),
  var_i = var_n[0],
  var_o = var_n[1],
  var_a = new var_u(function (param_t_2, param_e, param_r) {
  return 3 * (param_e + param_r) / 4 - param_r;
  }
  (0, var_i, var_o)),
  num_c = 0,
  var_l = var_o > 0 ? var_i - 4 : var_i;
  for (var_r = 0;
  var_r < var_l;
  var_r += 4) var_e = list_s[param_t_1.charCodeAt(var_r)] << 18 | list_s[param_t_1.charCodeAt(
  var_r + 1)] << 12 | list_s[param_t_1.charCodeAt(var_r + 2)] << 6 | list_s[param_t_1.charCodeAt(
  var_r + 3)], var_a[num_c++] = var_e >> 16 & 255, var_a[num_c++] = var_e >> 8 & 255,
  var_a[num_c++] = 255 & var_e;
  2 === var_o && (var_e = list_s[param_t_1.charCodeAt(var_r)] << 2 | list_s[param_t_1.charCodeAt(
  var_r + 1)] >> 4, var_a[num_c++] = 255 & var_e);
  1 === var_o && (var_e = list_s[param_t_1.charCodeAt(var_r)] << 10 | list_s[param_t_1.charCodeAt(
  var_r + 1)] << 4 | list_s[param_t_1.charCodeAt(var_r + 2)] >> 2, var_a[num_c++] = var_e >> 8 & 255,
  var_a[num_c++] = 255 & var_e);
  return var_a;
  }
  , fn_o = function (param_t_1) {
  for (var var_e, var_r = param_t_1.length, var_n = var_r % 3, list_i = [], num_o = 0,
  var_s = var_r - var_n;
  num_o < var_s;
  num_o += 16383) list_i.push(var_h(param_t_1, num_o, num_o + 16383 > var_s ?
  var_s : num_o + 16383));
  1 === var_n ? (var_e = param_t_1[var_r - 1], list_i.push(list_a[var_e >> 2] + list_a[var_e << 4 & 63] + "==")) :
  2 === var_n && (var_e = (param_t_1[var_r - 2] << 8) + param_t_1[var_r - 1], list_i.push(
  list_a[var_e >> 10] + list_a[var_e >> 4 & 63] + list_a[var_e << 2 & 63] + "="));
  return list_i.join("");
  }
  , list_a = [], list_s = [], var_u = "undefined" != typeof Uint8Array ?
  Uint8Array : Array, str_c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  num_l = 0, var_f = str_c.length;
  num_l < var_f;
  ++num_l) list_a[num_l] = str_c[num_l], list_s[str_c.charCodeAt(num_l)] = num_l;
  function var_d(param_t_1) {
  var var_e = param_t_1.length;
  if (var_e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var var_r = param_t_1.indexOf("=");
  return -1 === var_r && (var_r = var_e), [var_r, var_r === var_e ?
  0 : 4 - var_r % 4];
  }
  function var_h(param_t_1, param_e, param_r) {
  for (var var_n, var_i, list_o = [], var_s = param_e;
  var_s < param_r;
  var_s += 3) var_n = (param_t_1[var_s] << 16 & 16711680) + (param_t_1[var_s + 1] << 8 & 65280) + (
  255 & param_t_1[var_s + 2]), list_o.push(list_a[(var_i = var_n) >> 18 & 63] + list_a[var_i >> 12 & 63] + list_a[var_i >> 6 & 63] + list_a[63 & var_i]);
  return list_o.join("");
  }
  list_s["-".charCodeAt(0)] = 62, list_s["_".charCodeAt(0)] = 63;
  var obj_p = {
  byteLength: fn_n,
  toByteArray: fn_i,
  fromByteArray: fn_o
  }
  ,
  fn_v = function (param_t_1, param_e, param_r, param_n, param_i) {
  var var_o,
  var_a,
  var_s = 8 * param_i - param_n - 1,
  var_u_1 = (1 << var_s) - 1,
  var_c = var_u_1 >> 1,
  var_l = -7,
  var_f_1 = param_r ? param_i - 1 : 0,
  var_d_1 = param_r ? -1 : 1,
  var_h_1 = param_t_1[param_e + var_f_1];
  for (var_f_1 += var_d_1, var_o = var_h_1 & (1 << -var_l) - 1, var_h_1 >>= -var_l,
  var_l += var_s;
  var_l > 0;
  var_o = 256 * var_o + param_t_1[param_e + var_f_1], var_f_1 += var_d_1, var_l -= 8);
  for (var_a = var_o & (1 << -var_l) - 1, var_o >>= -var_l, var_l += param_n;
  var_l > 0;
  var_a = 256 * var_a + param_t_1[param_e + var_f_1], var_f_1 += var_d_1, var_l -= 8);
  if (0 === var_o) var_o = 1 - var_c;
  else {
  if (var_o === var_u_1) return var_a ? NaN : 1 / 0 * (var_h_1 ?
  -1 : 1);
  var_a += Math.pow(2, param_n), var_o -= var_c;
  }
  return (var_h_1 ? -1 : 1) * var_a * Math.pow(2, var_o - param_n);
  }
  ,
  fn_m = function (param_t_1, param_e, param_r, param_n, param_i, param_o) {
  var var_a,
  var_s,
  var_u_1,
  var_c = 8 * param_o - param_i - 1,
  var_l = (1 << var_c) - 1,
  var_f_1 = var_l >> 1,
  var_d_1 = 23 === param_i ? Math.pow(2, -24) - Math.pow(2, -77) :
  0,
  var_h_1 = param_n ? 0 : param_o - 1,
  var_p = param_n ? 1 : -1,
  var_v = param_e < 0 || 0 === param_e && 1 / param_e < 0 ? 1 :
  0;
  for (param_e = Math.abs(param_e), isNaN(param_e) || param_e === 1 / 0 ?
  (var_s = isNaN(param_e) ? 1 : 0, var_a = var_l) : (var_a = Math.floor(Math.log(
  param_e) / Math.LN2), param_e * (var_u_1 = Math.pow(2, -var_a)) < 1 &&
  (var_a--, var_u_1 *= 2), (param_e += var_a + var_f_1 >= 1 ?
  var_d_1 / var_u_1 : var_d_1 * Math.pow(2, 1 - var_f_1)) * var_u_1 >= 2 &&
  (var_a++, var_u_1 /= 2), var_a + var_f_1 >= var_l ? (var_s = 0, var_a = var_l) :
  var_a + var_f_1 >= 1 ? (var_s = (param_e * var_u_1 - 1) * Math.pow(2, param_i),
  var_a += var_f_1) : (var_s = param_e * Math.pow(2, var_f_1 - 1) * Math.pow(2, param_i),
  var_a = 0));
  param_i >= 8;
  param_t_1[param_r + var_h_1] = 255 & var_s, var_h_1 += var_p, var_s /= 256, param_i -= 8);
  for (var_a = var_a << param_i | var_s, var_c += param_i;
  var_c > 0;
  param_t_1[param_r + var_h_1] = 255 & var_a, var_h_1 += var_p, var_a /= 256, var_c -= 8);
  param_t_1[param_r + var_h_1 - var_p] |= 128 * var_v;
  }
  ,
  var_y = function (param_t_1, param_e) {
  return param_t_1(param_e = {
  exports: {
  }
  }
  , param_e.exports), param_e.exports;
  }
  (function (param_t_1, param_e) {
  var var_r = "function" == typeof Symbol && "function" == typeof Symbol.for ?
  Symbol.for("nodejs.util.inspect.custom") : null;
  param_e.Buffer = var_i, param_e.SlowBuffer = function (param_t_2) {
  +param_t_2 != param_t_2 && (param_t_2 = 0);
  return var_i.alloc(+param_t_2);
  }
  , param_e.INSPECT_MAX_BYTES = 50;
  function var_n(param_t_2) {
  if (param_t_2 > 2147483647) throw new RangeError('The value "' + param_t_2 + '" is invalid for option "size"');
  var var_e = new Uint8Array(param_t_2);
  return Object.setPrototypeOf(var_e, var_i.prototype), var_e;
  }
  function var_i(param_t_2, param_e_1, param_r) {
  if ("number" == typeof param_t_2) {
  if ("string" == typeof param_e_1) throw new TypeError('The "string" argument must be of type string. Received type number');
  return var_s(param_t_2);
  }
  return var_o(param_t_2, param_e_1, param_r);
  }
  function var_o(param_t_2, param_e_1, param_r) {
  if ("string" == typeof param_t_2) return function (param_t_3, param_e_2) {
  "string" == typeof param_e_2 && "" !== param_e_2 || (param_e_2 = "utf8");
  if (!var_i.isEncoding(param_e_2)) throw new TypeError("Unknown encoding: " + param_e_2);
  var var_r_1 = 0 | var_f_1(param_t_3, param_e_2),
  var_o_2 = var_n(var_r_1),
  var_a_2 = var_o_2.write(param_t_3, param_e_2);
  var_a_2 !== var_r_1 && (var_o_2 = var_o_2.slice(0, var_a_2));
  return var_o_2;
  }
  (param_t_2, param_e_1);
  if (ArrayBuffer.isView(param_t_2)) return function (param_t_3) {
  if (var_L_1(param_t_3, Uint8Array)) {
  var var_e = new Uint8Array(param_t_3);
  return var_c(var_e.buffer, var_e.byteOffset, var_e.byteLength);
  }
  return var_u_1(param_t_3);
  }
  (param_t_2);
  if (null == param_t_2) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers.typeof(
  param_t_2));
  if (var_L_1(param_t_2, ArrayBuffer) || param_t_2 && var_L_1(param_t_2.buffer, ArrayBuffer)) return var_c(
  param_t_2, param_e_1, param_r);
  if ("undefined" != typeof SharedArrayBuffer && (var_L_1(param_t_2, SharedArrayBuffer) ||
  param_t_2 && var_L_1(param_t_2.buffer, SharedArrayBuffer))) return var_c(param_t_2,
  param_e_1, param_r);
  if ("number" == typeof param_t_2) throw new TypeError('The "value" argument must not be of type number. Received type number');
  var var_o_1 = param_t_2.valueOf && param_t_2.valueOf();
  if (null != var_o_1 && var_o_1 !== param_t_2) return var_i.from(var_o_1, param_e_1,
  param_r);
  var var_a_1 = function (param_t_3) {
  if (var_i.isBuffer(param_t_3)) {
  var var_e = 0 | var_l(param_t_3.length),
  var_r_1 = var_n(var_e);
  return 0 === var_r_1.length || param_t_3.copy(var_r_1, 0, 0, var_e), var_r_1;
  }
  if (void 0 !== param_t_3.length) return "number" != typeof param_t_3.length ||
  var_q_1(param_t_3.length) ? var_n(0) : var_u_1(param_t_3);
  if ("Buffer" === param_t_3.type && Array.isArray(param_t_3.data)) return var_u_1(
  param_t_3.data);
  }
  (param_t_2);
  if (var_a_1) return var_a_1;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive &&
  "function" == typeof param_t_2[Symbol.toPrimitive]) return var_i.from(param_t_2[Symbol.toPrimitive](
  "string"), param_e_1, param_r);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers.typeof(
  param_t_2));
  }
  function var_a(param_t_2) {
  if ("number" != typeof param_t_2) throw new TypeError('"size" argument must be of type number');
  if (param_t_2 < 0) throw new RangeError('The value "' + param_t_2 + '" is invalid for option "size"');
  }
  function var_s(param_t_2) {
  return var_a(param_t_2), var_n(param_t_2 < 0 ? 0 : 0 | var_l(param_t_2));
  }
  function var_u_1(param_t_2) {
  for (var var_e = param_t_2.length < 0 ? 0 : 0 | var_l(param_t_2.length), var_r_1 = var_n(
  var_e), num_i = 0;
  num_i < var_e;
  num_i += 1) var_r_1[num_i] = 255 & param_t_2[num_i];
  return var_r_1;
  }
  function var_c(param_t_2, param_e_1, param_r) {
  if (param_e_1 < 0 || param_t_2.byteLength < param_e_1) throw new RangeError('"offset" is outside of buffer bounds');
  if (param_t_2.byteLength < param_e_1 + (param_r || 0)) throw new RangeError('"length" is outside of buffer bounds');
  var var_n_1;
  return var_n_1 = void 0 === param_e_1 && void 0 === param_r ?
  new Uint8Array(param_t_2) : void 0 === param_r ? new Uint8Array(param_t_2, param_e_1) :
  new Uint8Array(param_t_2, param_e_1, param_r), Object.setPrototypeOf(var_n_1, var_i.prototype),
  var_n_1;
  }
  function var_l(param_t_2) {
  if (param_t_2 >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(
  16) + " bytes");
  return 0 | param_t_2;
  }
  function var_f_1(param_t_2, param_e_1) {
  if (var_i.isBuffer(param_t_2)) return param_t_2.length;
  if (ArrayBuffer.isView(param_t_2) || var_L_1(param_t_2, ArrayBuffer)) return param_t_2.byteLength;
  if ("string" != typeof param_t_2) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + babelHelpers.typeof(
  param_t_2));
  var var_r_1 = param_t_2.length,
  var_n_1 = arguments.length > 2 && !0 === arguments[2];
  if (!var_n_1 && 0 === var_r_1) return 0;
  for (var flag_o = !1;;
  ) switch (param_e_1) {
  case "ascii":
  case "latin1":
  case "binary":
  return var_r_1;
  case "utf8":
  case "utf-8":
  return var_N(param_t_2).length;
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return 2 * var_r_1;
  case "hex":
  return var_r_1 >>> 1;
  case "base64":
  return var_D(param_t_2).length;
  default:
  if (flag_o) return var_n_1 ? -1 : var_N(param_t_2).length;
  param_e_1 = ("" + param_e_1).toLowerCase(), flag_o = !0;
  }
  }
  function var_d_1(param_t_2, param_e_1, param_r) {
  var flag_n = !1;
  if ((void 0 === param_e_1 || param_e_1 < 0) && (param_e_1 = 0), param_e_1 > this.length) return "";
  if ((void 0 === param_r || param_r > this.length) && (param_r = this.length), param_r <= 0) return "";
  if ((param_r >>>= 0) <= (param_e_1 >>>= 0)) return "";
  for (param_t_2 || (param_t_2 = "utf8");;
  ) switch (param_t_2) {
  case "hex":
  return var_M_1(this, param_e_1, param_r);
  case "utf8":
  case "utf-8":
  return var_O_1(this, param_e_1, param_r);
  case "ascii":
  return var_x(this, param_e_1, param_r);
  case "latin1":
  case "binary":
  return var_k_1(this, param_e_1, param_r);
  case "base64":
  return var_S_1(this, param_e_1, param_r);
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return var_T_1(this, param_e_1, param_r);
  default:
  if (flag_n) throw new TypeError("Unknown encoding: " + param_t_2);
  param_t_2 = (param_t_2 + "").toLowerCase(), flag_n = !0;
  }
  }
  function var_h_1(param_t_2, param_e_1, param_r) {
  var var_n_1 = param_t_2[param_e_1];
  param_t_2[param_e_1] = param_t_2[param_r], param_t_2[param_r] = var_n_1;
  }
  function var_y_1(param_t_2, param_e_1, param_r, param_n, param_o) {
  if (0 === param_t_2.length) return -1;
  if ("string" == typeof param_r ? (param_n = param_r, param_r = 0) :
  param_r > 2147483647 ? param_r = 2147483647 : param_r < -2147483648 &&
  (param_r = -2147483648), var_q_1(param_r = +param_r) && (param_r = param_o ?
  0 : param_t_2.length - 1), param_r < 0 && (param_r = param_t_2.length + param_r),
  param_r >= param_t_2.length) {
  if (param_o) return -1;
  param_r = param_t_2.length - 1;
  }
  else if (param_r < 0) {
  if (!param_o) return -1;
  param_r = 0;
  }
  if ("string" == typeof param_e_1 && (param_e_1 = var_i.from(param_e_1, param_n)),
  var_i.isBuffer(param_e_1)) return 0 === param_e_1.length ?
  -1 : var_g_1(param_t_2, param_e_1, param_r, param_n, param_o);
  if ("number" == typeof param_e_1) return param_e_1 &= 255, "function" == typeof Uint8Array.prototype.indexOf ?
  param_o ? Uint8Array.prototype.indexOf.call(param_t_2, param_e_1, param_r) :
  Uint8Array.prototype.lastIndexOf.call(param_t_2, param_e_1, param_r) :
  var_g_1(param_t_2, [param_e_1], param_r, param_n, param_o);
  throw new TypeError("val must be string, number or Buffer");
  }
  function var_g_1(param_t_2, param_e_1, param_r, param_n, param_i) {
  var var_o_1,
  num_a = 1,
  var_s_1 = param_t_2.length,
  var_u_2 = param_e_1.length;
  if (void 0 !== param_n && ("ucs2" === (param_n = String(param_n).toLowerCase()) ||
  "ucs-2" === param_n || "utf16le" === param_n || "utf-16le" === param_n)) {
  if (param_t_2.length < 2 || param_e_1.length < 2) return -1;
  num_a = 2, var_s_1 /= 2, var_u_2 /= 2, param_r /= 2;
  }
  function var_c_1(param_t_3, param_e_2) {
  return 1 === num_a ? param_t_3[param_e_2] : param_t_3.readUInt16BE(param_e_2 * num_a);
  }
  if (param_i) {
  var var_l_1 = -1;
  for (var_o_1 = param_r;
  var_o_1 < var_s_1;
  var_o_1++) if (var_c_1(param_t_2, var_o_1) === var_c_1(param_e_1, -1 === var_l_1 ?
  0 : var_o_1 - var_l_1)) {
  if (-1 === var_l_1 && (var_l_1 = var_o_1), var_o_1 - var_l_1 + 1 === var_u_2) return var_l_1 * num_a;
  }
  else -1 !== var_l_1 && (var_o_1 -= var_o_1 - var_l_1), var_l_1 = -1;
  }
  else for (param_r + var_u_2 > var_s_1 && (param_r = var_s_1 - var_u_2), var_o_1 = param_r;
  var_o_1 >= 0;
  var_o_1--) {
  for (var flag_f = !0, num_d = 0;
  num_d < var_u_2;
  num_d++) if (var_c_1(param_t_2, var_o_1 + num_d) !== var_c_1(param_e_1, num_d)) {
  flag_f = !1;
  break;
  }
  if (flag_f) return var_o_1;
  }
  return -1;
  }
  function var_b(param_t_2, param_e_1, param_r, param_n) {
  param_r = Number(param_r) || 0;
  var var_i_1 = param_t_2.length - param_r;
  param_n ? (param_n = Number(param_n)) > var_i_1 && (param_n = var_i_1) :
  param_n = var_i_1;
  var var_o_1 = param_e_1.length;
  param_n > var_o_1 / 2 && (param_n = var_o_1 / 2);
  for (var num_a = 0;
  num_a < param_n;
  ++num_a) {
  var var_s_1 = parseInt(param_e_1.substr(2 * num_a, 2), 16);
  if (var_q_1(var_s_1)) return num_a;
  param_t_2[param_r + num_a] = var_s_1;
  }
  return num_a;
  }
  function var_w_1(param_t_2, param_e_1, param_r, param_n) {
  return var_R(var_N(param_e_1, param_t_2.length - param_r), param_t_2, param_r,
  param_n);
  }
  function var_A(param_t_2, param_e_1, param_r, param_n) {
  return var_R(function (param_t_3) {
  for (var list_e = [], num_r = 0;
  num_r < param_t_3.length;
  ++num_r) list_e.push(255 & param_t_3.charCodeAt(num_r));
  return list_e;
  }
  (param_e_1), param_t_2, param_r, param_n);
  }
  function var___1(param_t_2, param_e_1, param_r, param_n) {
  return var_R(var_D(param_e_1), param_t_2, param_r, param_n);
  }
  function var_E_1(param_t_2, param_e_1, param_r, param_n) {
  return var_R(function (param_t_3, param_e_2) {
  for (var var_r_1, var_n_1, var_i_1, list_o = [], num_a = 0;
  num_a < param_t_3.length && !((param_e_2 -= 2) < 0);
  ++num_a) var_r_1 = param_t_3.charCodeAt(num_a), var_n_1 = var_r_1 >> 8, var_i_1 = var_r_1 % 256,
  list_o.push(var_i_1), list_o.push(var_n_1);
  return list_o;
  }
  (param_e_1, param_t_2.length - param_r), param_t_2, param_r, param_n);
  }
  function var_S_1(param_t_2, param_e_1, param_r) {
  return 0 === param_e_1 && param_r === param_t_2.length ? obj_p.fromByteArray(param_t_2) :
  obj_p.fromByteArray(param_t_2.slice(param_e_1, param_r));
  }
  function var_O_1(param_t_2, param_e_1, param_r) {
  param_r = Math.min(param_t_2.length, param_r);
  for (var list_n = [], var_i_1 = param_e_1;
  var_i_1 < param_r;
  ) {
  var var_o_1,
  var_a_1,
  var_s_1,
  var_u_2,
  var_c_1 = param_t_2[var_i_1],
  var_l_1 = null,
  var_f_2 = var_c_1 > 239 ? 4 : var_c_1 > 223 ? 3 : var_c_1 > 191 ?
  2 : 1;
  if (var_i_1 + var_f_2 <= param_r) switch (var_f_2) {
  case 1:
  var_c_1 < 128 && (var_l_1 = var_c_1);
  break;
  case 2:
  128 == (192 & (var_o_1 = param_t_2[var_i_1 + 1])) && (var_u_2 = (31 & var_c_1) << 6 | 63 & var_o_1) > 127 &&
  (var_l_1 = var_u_2);
  break;
  case 3:
  var_o_1 = param_t_2[var_i_1 + 1], var_a_1 = param_t_2[var_i_1 + 2], 128 == (192 & var_o_1) &&
  128 == (192 & var_a_1) && (var_u_2 = (15 & var_c_1) << 12 | (63 & var_o_1) << 6 | 63 & var_a_1) > 2047 &&
  (var_u_2 < 55296 || var_u_2 > 57343) && (var_l_1 = var_u_2);
  break;
  case 4:
  var_o_1 = param_t_2[var_i_1 + 1], var_a_1 = param_t_2[var_i_1 + 2], var_s_1 = param_t_2[var_i_1 + 3],
  128 == (192 & var_o_1) && 128 == (192 & var_a_1) && 128 == (192 & var_s_1) &&
  (var_u_2 = (15 & var_c_1) << 18 | (63 & var_o_1) << 12 | (63 & var_a_1) << 6 | 63 & var_s_1) > 65535 &&
  var_u_2 < 1114112 && (var_l_1 = var_u_2);
  }
  null === var_l_1 ? (var_l_1 = 65533, var_f_2 = 1) : var_l_1 > 65535 &&
  (var_l_1 -= 65536, list_n.push(var_l_1 >>> 10 & 1023 | 55296), var_l_1 = 56320 | 1023 & var_l_1),
  list_n.push(var_l_1), var_i_1 += var_f_2;
  }
  return function (param_t_3) {
  var var_e = param_t_3.length;
  if (var_e <= 4096) return String.fromCharCode.apply(String, param_t_3);
  var str_r = "",
  num_n = 0;
  for (;
  num_n < var_e;
  ) str_r += String.fromCharCode.apply(String, param_t_3.slice(num_n, num_n += 4096));
  return str_r;
  }
  (list_n);
  }
  param_e.kMaxLength = 2147483647, var_i.TYPED_ARRAY_SUPPORT = function () {
  try {
  var var_t = new Uint8Array(1),
  obj_e = {
  foo: function () {
  return 42;
  }
  };
  return Object.setPrototypeOf(obj_e, Uint8Array.prototype), Object.setPrototypeOf(
  var_t, obj_e), 42 === var_t.foo();
  }
  catch (var_t_1) {
  return !1;
  }
  }
  (), var_i.TYPED_ARRAY_SUPPORT || "undefined" == typeof console ||
  "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
  Object.defineProperty(var_i.prototype, "parent", {
  enumerable: !0,
  get: function () {
  if (var_i.isBuffer(this)) return this.buffer;
  }
  }
  ), Object.defineProperty(var_i.prototype, "offset", {
  enumerable: !0,
  get: function () {
  if (var_i.isBuffer(this)) return this.byteOffset;
  }
  }
  ), var_i.poolSize = 8192, var_i.from = function (param_t_2, param_e_1, param_r) {
  return var_o(param_t_2, param_e_1, param_r);
  }
  , Object.setPrototypeOf(var_i.prototype, Uint8Array.prototype), Object.setPrototypeOf(
  var_i, Uint8Array), var_i.alloc = function (param_t_2, param_e_1, param_r) {
  return function (param_t_3, param_e_2, param_r_1) {
  return var_a(param_t_3), param_t_3 <= 0 ? var_n(param_t_3) :
  void 0 !== param_e_2 ? "string" == typeof param_r_1 ? var_n(param_t_3).fill(param_e_2,
  param_r_1) : var_n(param_t_3).fill(param_e_2) : var_n(param_t_3);
  }
  (param_t_2, param_e_1, param_r);
  }
  , var_i.allocUnsafe = function (param_t_2) {
  return var_s(param_t_2);
  }
  , var_i.allocUnsafeSlow = function (param_t_2) {
  return var_s(param_t_2);
  }
  , var_i.isBuffer = function (param_t_2) {
  return null != param_t_2 && !0 === param_t_2._isBuffer && param_t_2 !== var_i.prototype;
  }
  , var_i.compare = function (param_t_2, param_e_1) {
  if (var_L_1(param_t_2, Uint8Array) && (param_t_2 = var_i.from(param_t_2, param_t_2.offset,
  param_t_2.byteLength)), var_L_1(param_e_1, Uint8Array) && (param_e_1 = var_i.from(
  param_e_1, param_e_1.offset, param_e_1.byteLength)), !var_i.isBuffer(param_t_2) ||
  !var_i.isBuffer(param_e_1)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (param_t_2 === param_e_1) return 0;
  for (var var_r_1 = param_t_2.length, var_n_1 = param_e_1.length, num_o = 0, var_a_1 = Math.min(
  var_r_1, var_n_1);
  num_o < var_a_1;
  ++num_o) if (param_t_2[num_o] !== param_e_1[num_o]) {
  var_r_1 = param_t_2[num_o], var_n_1 = param_e_1[num_o];
  break;
  }
  return var_r_1 < var_n_1 ? -1 : var_n_1 < var_r_1 ? 1 : 0;
  }
  , var_i.isEncoding = function (param_t_2) {
  switch (String(param_t_2).toLowerCase()) {
  case "hex":
  case "utf8":
  case "utf-8":
  case "ascii":
  case "latin1":
  case "binary":
  case "base64":
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return !0;
  default:
  return !1;
  }
  }
  , var_i.concat = function (param_t_2, param_e_1) {
  if (!Array.isArray(param_t_2)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === param_t_2.length) return var_i.alloc(0);
  var var_r_1;
  if (void 0 === param_e_1) for (param_e_1 = 0, var_r_1 = 0;
  var_r_1 < param_t_2.length;
  ++var_r_1) param_e_1 += param_t_2[var_r_1].length;
  var var_n_1 = var_i.allocUnsafe(param_e_1),
  num_o = 0;
  for (var_r_1 = 0;
  var_r_1 < param_t_2.length;
  ++var_r_1) {
  var var_a_1 = param_t_2[var_r_1];
  if (var_L_1(var_a_1, Uint8Array)) num_o + var_a_1.length > var_n_1.length ?
  var_i.from(var_a_1).copy(var_n_1, num_o) : Uint8Array.prototype.set.call(var_n_1,
  var_a_1, num_o);
  else {
  if (!var_i.isBuffer(var_a_1)) throw new TypeError('"list" argument must be an Array of Buffers');
  var_a_1.copy(var_n_1, num_o);
  }
  num_o += var_a_1.length;
  }
  return var_n_1;
  }
  , var_i.byteLength = var_f_1, var_i.prototype._isBuffer = !0, var_i.prototype.swap16 = function (
  ) {
  var var_t = this.length;
  if (var_t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var num_e = 0;
  num_e < var_t;
  num_e += 2) var_h_1(this, num_e, num_e + 1);
  return this;
  }
  , var_i.prototype.swap32 = function () {
  var var_t = this.length;
  if (var_t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var num_e = 0;
  num_e < var_t;
  num_e += 4) var_h_1(this, num_e, num_e + 3), var_h_1(this, num_e + 1, num_e + 2);
  return this;
  }
  , var_i.prototype.swap64 = function () {
  var var_t = this.length;
  if (var_t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var num_e = 0;
  num_e < var_t;
  num_e += 8) var_h_1(this, num_e, num_e + 7), var_h_1(this, num_e + 1, num_e + 6),
  var_h_1(this, num_e + 2, num_e + 5), var_h_1(this, num_e + 3, num_e + 4);
  return this;
  }
  , var_i.prototype.toString = function () {
  var var_t = this.length;
  return 0 === var_t ? "" : 0 === arguments.length ? var_O_1(this, 0, var_t) :
  var_d_1.apply(this, arguments);
  }
  , var_i.prototype.toLocaleString = var_i.prototype.toString, var_i.prototype.equals = function (
  param_t_2) {
  if (!var_i.isBuffer(param_t_2)) throw new TypeError("Argument must be a Buffer");
  return this === param_t_2 || 0 === var_i.compare(this, param_t_2);
  }
  , var_i.prototype.inspect = function () {
  var str_t = "",
  var_r_1 = param_e.INSPECT_MAX_BYTES;
  return str_t = this.toString("hex", 0, var_r_1).replace(/(.{2})/g, "$1 ").trim(
  ), this.length > var_r_1 && (str_t += " ... "), "<Buffer " + str_t + ">";
  }
  , var_r && (var_i.prototype[var_r] = var_i.prototype.inspect), var_i.prototype.compare = function (
  param_t_2, param_e_1, param_r, param_n, param_o) {
  if (var_L_1(param_t_2, Uint8Array) && (param_t_2 = var_i.from(param_t_2, param_t_2.offset,
  param_t_2.byteLength)), !var_i.isBuffer(param_t_2)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + babelHelpers.typeof(
  param_t_2));
  if (void 0 === param_e_1 && (param_e_1 = 0), void 0 === param_r &&
  (param_r = param_t_2 ? param_t_2.length : 0), void 0 === param_n &&
  (param_n = 0), void 0 === param_o && (param_o = this.length), param_e_1 < 0 ||
  param_r > param_t_2.length || param_n < 0 || param_o > this.length) throw new RangeError(
  "out of range index");
  if (param_n >= param_o && param_e_1 >= param_r) return 0;
  if (param_n >= param_o) return -1;
  if (param_e_1 >= param_r) return 1;
  if (this === param_t_2) return 0;
  for (var var_a_1 = (param_o >>>= 0) - (param_n >>>= 0), var_s_1 = (param_r >>>= 0) - (
  param_e_1 >>>= 0), var_u_2 = Math.min(var_a_1, var_s_1), var_c_1 = this.slice(
  param_n, param_o), var_l_1 = param_t_2.slice(param_e_1, param_r), num_f = 0;
  num_f < var_u_2;
  ++num_f) if (var_c_1[num_f] !== var_l_1[num_f]) {
  var_a_1 = var_c_1[num_f], var_s_1 = var_l_1[num_f];
  break;
  }
  return var_a_1 < var_s_1 ? -1 : var_s_1 < var_a_1 ? 1 : 0;
  }
  , var_i.prototype.includes = function (param_t_2, param_e_1, param_r) {
  return -1 !== this.indexOf(param_t_2, param_e_1, param_r);
  }
  , var_i.prototype.indexOf = function (param_t_2, param_e_1, param_r) {
  return var_y_1(this, param_t_2, param_e_1, param_r, !0);
  }
  , var_i.prototype.lastIndexOf = function (param_t_2, param_e_1, param_r) {
  return var_y_1(this, param_t_2, param_e_1, param_r, !1);
  }
  , var_i.prototype.write = function (param_t_2, param_e_1, param_r, param_n) {
  if (void 0 === param_e_1) param_n = "utf8", param_r = this.length, param_e_1 = 0;
  else if (void 0 === param_r && "string" == typeof param_e_1) param_n = param_e_1,
  param_r = this.length, param_e_1 = 0;
  else {
  if (!isFinite(param_e_1)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  param_e_1 >>>= 0, isFinite(param_r) ? (param_r >>>= 0, void 0 === param_n &&
  (param_n = "utf8")) : (param_n = param_r, param_r = void 0);
  }
  var var_i_1 = this.length - param_e_1;
  if ((void 0 === param_r || param_r > var_i_1) && (param_r = var_i_1), param_t_2.length > 0 &&
  (param_r < 0 || param_e_1 < 0) || param_e_1 > this.length) throw new RangeError(
  "Attempt to write outside buffer bounds");
  param_n || (param_n = "utf8");
  for (var flag_o = !1;;
  ) switch (param_n) {
  case "hex":
  return var_b(this, param_t_2, param_e_1, param_r);
  case "utf8":
  case "utf-8":
  return var_w_1(this, param_t_2, param_e_1, param_r);
  case "ascii":
  case "latin1":
  case "binary":
  return var_A(this, param_t_2, param_e_1, param_r);
  case "base64":
  return var___1(this, param_t_2, param_e_1, param_r);
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return var_E_1(this, param_t_2, param_e_1, param_r);
  default:
  if (flag_o) throw new TypeError("Unknown encoding: " + param_n);
  param_n = ("" + param_n).toLowerCase(), flag_o = !0;
  }
  }
  , var_i.prototype.toJSON = function () {
  return {
  type: "Buffer",
  data: Array.prototype.slice.call(this._arr || this, 0)
  };
  };
  function var_x(param_t_2, param_e_1, param_r) {
  var str_n = "";
  param_r = Math.min(param_t_2.length, param_r);
  for (var var_i_1 = param_e_1;
  var_i_1 < param_r;
  ++var_i_1) str_n += String.fromCharCode(127 & param_t_2[var_i_1]);
  return str_n;
  }
  function var_k_1(param_t_2, param_e_1, param_r) {
  var str_n = "";
  param_r = Math.min(param_t_2.length, param_r);
  for (var var_i_1 = param_e_1;
  var_i_1 < param_r;
  ++var_i_1) str_n += String.fromCharCode(param_t_2[var_i_1]);
  return str_n;
  }
  function var_M_1(param_t_2, param_e_1, param_r) {
  var var_n_1 = param_t_2.length;
  (!param_e_1 || param_e_1 < 0) && (param_e_1 = 0), (!param_r ||
  param_r < 0 || param_r > var_n_1) && (param_r = var_n_1);
  for (var str_i = "", var_o_1 = param_e_1;
  var_o_1 < param_r;
  ++var_o_1) str_i += var_F_1[param_t_2[var_o_1]];
  return str_i;
  }
  function var_T_1(param_t_2, param_e_1, param_r) {
  for (var var_n_1 = param_t_2.slice(param_e_1, param_r), str_i = "", num_o = 0;
  num_o < var_n_1.length - 1;
  num_o += 2) str_i += String.fromCharCode(var_n_1[num_o] + 256 * var_n_1[num_o + 1]);
  return str_i;
  }
  function var_I_1(param_t_2, param_e_1, param_r) {
  if (param_t_2 % 1 != 0 || param_t_2 < 0) throw new RangeError("offset is not uint");
  if (param_t_2 + param_e_1 > param_r) throw new RangeError("Trying to access beyond buffer length");
  }
  function var_j_1(param_t_2, param_e_1, param_r, param_n, param_o, param_a) {
  if (!var_i.isBuffer(param_t_2)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (param_e_1 > param_o || param_e_1 < param_a) throw new RangeError('"value" argument is out of bounds');
  if (param_r + param_n > param_t_2.length) throw new RangeError("Index out of range");
  }
  function var_C_1(param_t_2, param_e_1, param_r, param_n, param_i, param_o) {
  if (param_r + param_n > param_t_2.length) throw new RangeError("Index out of range");
  if (param_r < 0) throw new RangeError("Index out of range");
  }
  function var_B_1(param_t_2, param_e_1, param_r, param_n, param_i) {
  return param_e_1 = +param_e_1, param_r >>>= 0, param_i || var_C_1(param_t_2, 0,
  param_r, 4), fn_m(param_t_2, param_e_1, param_r, param_n, 23, 4), param_r + 4;
  }
  function var_U_1(param_t_2, param_e_1, param_r, param_n, param_i) {
  return param_e_1 = +param_e_1, param_r >>>= 0, param_i || var_C_1(param_t_2, 0,
  param_r, 8), fn_m(param_t_2, param_e_1, param_r, param_n, 52, 8), param_r + 8;
  }
  var_i.prototype.slice = function (param_t_2, param_e_1) {
  var var_r_1 = this.length;
  (param_t_2 = ~~param_t_2) < 0 ? (param_t_2 += var_r_1) < 0 &&
  (param_t_2 = 0) : param_t_2 > var_r_1 && (param_t_2 = var_r_1), (param_e_1 = void 0 === param_e_1 ?
  var_r_1 : ~~param_e_1) < 0 ? (param_e_1 += var_r_1) < 0 &&
  (param_e_1 = 0) : param_e_1 > var_r_1 && (param_e_1 = var_r_1), param_e_1 < param_t_2 &&
  (param_e_1 = param_t_2);
  var var_n_1 = this.subarray(param_t_2, param_e_1);
  return Object.setPrototypeOf(var_n_1, var_i.prototype), var_n_1;
  }
  , var_i.prototype.readUintLE = var_i.prototype.readUIntLE = function (param_t_2,
  param_e_1, param_r) {
  param_t_2 >>>= 0, param_e_1 >>>= 0, param_r || var_I_1(param_t_2, param_e_1, this.length);
  for (var var_n_1 = this[param_t_2], num_i = 1, num_o = 0;
  ++num_o < param_e_1 && (num_i *= 256);
  ) var_n_1 += this[param_t_2 + num_o] * num_i;
  return var_n_1;
  }
  , var_i.prototype.readUintBE = var_i.prototype.readUIntBE = function (param_t_2,
  param_e_1, param_r) {
  param_t_2 >>>= 0, param_e_1 >>>= 0, param_r || var_I_1(param_t_2, param_e_1, this.length);
  for (var var_n_1 = this[param_t_2 + --param_e_1], num_i = 1;
  param_e_1 > 0 && (num_i *= 256);
  ) var_n_1 += this[param_t_2 + --param_e_1] * num_i;
  return var_n_1;
  }
  , var_i.prototype.readUint8 = var_i.prototype.readUInt8 = function (param_t_2,
  param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 1, this.length), this[param_t_2];
  }
  , var_i.prototype.readUint16LE = var_i.prototype.readUInt16LE = function (param_t_2,
  param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 2, this.length), this[param_t_2] | this[param_t_2 + 1] << 8;
  }
  , var_i.prototype.readUint16BE = var_i.prototype.readUInt16BE = function (param_t_2,
  param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 2, this.length), this[param_t_2] << 8 | this[param_t_2 + 1];
  }
  , var_i.prototype.readUint32LE = var_i.prototype.readUInt32LE = function (param_t_2,
  param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 4, this.length), (this[param_t_2] | this[param_t_2 + 1] << 8 | this[param_t_2 + 2] << 16) + 16777216 * this[param_t_2 + 3];
  }
  , var_i.prototype.readUint32BE = var_i.prototype.readUInt32BE = function (param_t_2,
  param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 4, this.length), 16777216 * this[param_t_2] + (
  this[param_t_2 + 1] << 16 | this[param_t_2 + 2] << 8 | this[param_t_2 + 3]);
  }
  , var_i.prototype.readIntLE = function (param_t_2, param_e_1, param_r) {
  param_t_2 >>>= 0, param_e_1 >>>= 0, param_r || var_I_1(param_t_2, param_e_1, this.length);
  for (var var_n_1 = this[param_t_2], num_i = 1, num_o = 0;
  ++num_o < param_e_1 && (num_i *= 256);
  ) var_n_1 += this[param_t_2 + num_o] * num_i;
  return var_n_1 >= (num_i *= 128) && (var_n_1 -= Math.pow(2, 8 * param_e_1)), var_n_1;
  }
  , var_i.prototype.readIntBE = function (param_t_2, param_e_1, param_r) {
  param_t_2 >>>= 0, param_e_1 >>>= 0, param_r || var_I_1(param_t_2, param_e_1, this.length);
  for (var var_n_1 = param_e_1, num_i = 1, var_o_1 = this[param_t_2 + --var_n_1];
  var_n_1 > 0 && (num_i *= 256);
  ) var_o_1 += this[param_t_2 + --var_n_1] * num_i;
  return var_o_1 >= (num_i *= 128) && (var_o_1 -= Math.pow(2, 8 * param_e_1)), var_o_1;
  }
  , var_i.prototype.readInt8 = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 1, this.length), 128 & this[param_t_2] ?
  -1 * (255 - this[param_t_2] + 1) : this[param_t_2];
  }
  , var_i.prototype.readInt16LE = function (param_t_2, param_e_1) {
  param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 2, this.length);
  var var_r_1 = this[param_t_2] | this[param_t_2 + 1] << 8;
  return 32768 & var_r_1 ? 4294901760 | var_r_1 : var_r_1;
  }
  , var_i.prototype.readInt16BE = function (param_t_2, param_e_1) {
  param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 2, this.length);
  var var_r_1 = this[param_t_2 + 1] | this[param_t_2] << 8;
  return 32768 & var_r_1 ? 4294901760 | var_r_1 : var_r_1;
  }
  , var_i.prototype.readInt32LE = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 4, this.length), this[param_t_2] | this[param_t_2 + 1] << 8 | this[param_t_2 + 2] << 16 | this[param_t_2 + 3] << 24;
  }
  , var_i.prototype.readInt32BE = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 4, this.length), this[param_t_2] << 24 | this[param_t_2 + 1] << 16 | this[param_t_2 + 2] << 8 | this[param_t_2 + 3];
  }
  , var_i.prototype.readFloatLE = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 4, this.length), fn_v(
  this, param_t_2, !0, 23, 4);
  }
  , var_i.prototype.readFloatBE = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 4, this.length), fn_v(
  this, param_t_2, !1, 23, 4);
  }
  , var_i.prototype.readDoubleLE = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 8, this.length), fn_v(
  this, param_t_2, !0, 52, 8);
  }
  , var_i.prototype.readDoubleBE = function (param_t_2, param_e_1) {
  return param_t_2 >>>= 0, param_e_1 || var_I_1(param_t_2, 8, this.length), fn_v(
  this, param_t_2, !1, 52, 8);
  }
  , var_i.prototype.writeUintLE = var_i.prototype.writeUIntLE = function (param_t_2,
  param_e_1, param_r, param_n) {
  (param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r >>>= 0, param_n) ||
  var_j_1(this, param_t_2, param_e_1, param_r, Math.pow(2, 8 * param_r) - 1, 0);
  var num_i = 1,
  num_o = 0;
  for (this[param_e_1] = 255 & param_t_2;
  ++num_o < param_r && (num_i *= 256);
  ) this[param_e_1 + num_o] = param_t_2 / num_i & 255;
  return param_e_1 + param_r;
  }
  , var_i.prototype.writeUintBE = var_i.prototype.writeUIntBE = function (param_t_2,
  param_e_1, param_r, param_n) {
  (param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r >>>= 0, param_n) ||
  var_j_1(this, param_t_2, param_e_1, param_r, Math.pow(2, 8 * param_r) - 1, 0);
  var var_i_1 = param_r - 1,
  num_o = 1;
  for (this[param_e_1 + var_i_1] = 255 & param_t_2;
  --var_i_1 >= 0 && (num_o *= 256);
  ) this[param_e_1 + var_i_1] = param_t_2 / num_o & 255;
  return param_e_1 + param_r;
  }
  , var_i.prototype.writeUint8 = var_i.prototype.writeUInt8 = function (param_t_2,
  param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 1, 255, 0), this[param_e_1] = 255 & param_t_2,
  param_e_1 + 1;
  }
  , var_i.prototype.writeUint16LE = var_i.prototype.writeUInt16LE = function (param_t_2,
  param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 2, 65535, 0), this[param_e_1] = 255 & param_t_2,
  this[param_e_1 + 1] = param_t_2 >>> 8, param_e_1 + 2;
  }
  , var_i.prototype.writeUint16BE = var_i.prototype.writeUInt16BE = function (param_t_2,
  param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 2, 65535, 0), this[param_e_1] = param_t_2 >>> 8,
  this[param_e_1 + 1] = 255 & param_t_2, param_e_1 + 2;
  }
  , var_i.prototype.writeUint32LE = var_i.prototype.writeUInt32LE = function (param_t_2,
  param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 4, 4294967295, 0), this[param_e_1 + 3] = param_t_2 >>> 24,
  this[param_e_1 + 2] = param_t_2 >>> 16, this[param_e_1 + 1] = param_t_2 >>> 8,
  this[param_e_1] = 255 & param_t_2, param_e_1 + 4;
  }
  , var_i.prototype.writeUint32BE = var_i.prototype.writeUInt32BE = function (param_t_2,
  param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 4, 4294967295, 0), this[param_e_1] = param_t_2 >>> 24,
  this[param_e_1 + 1] = param_t_2 >>> 16, this[param_e_1 + 2] = param_t_2 >>> 8,
  this[param_e_1 + 3] = 255 & param_t_2, param_e_1 + 4;
  }
  , var_i.prototype.writeIntLE = function (param_t_2, param_e_1, param_r, param_n) {
  if (param_t_2 = +param_t_2, param_e_1 >>>= 0, !param_n) {
  var var_i_1 = Math.pow(2, 8 * param_r - 1);
  var_j_1(this, param_t_2, param_e_1, param_r, var_i_1 - 1, -var_i_1);
  }
  var num_o = 0,
  num_a = 1,
  num_s = 0;
  for (this[param_e_1] = 255 & param_t_2;
  ++num_o < param_r && (num_a *= 256);
  ) param_t_2 < 0 && 0 === num_s && 0 !== this[param_e_1 + num_o - 1] &&
  (num_s = 1), this[param_e_1 + num_o] = (param_t_2 / num_a >> 0) - num_s & 255;
  return param_e_1 + param_r;
  }
  , var_i.prototype.writeIntBE = function (param_t_2, param_e_1, param_r, param_n) {
  if (param_t_2 = +param_t_2, param_e_1 >>>= 0, !param_n) {
  var var_i_1 = Math.pow(2, 8 * param_r - 1);
  var_j_1(this, param_t_2, param_e_1, param_r, var_i_1 - 1, -var_i_1);
  }
  var var_o_1 = param_r - 1,
  num_a = 1,
  num_s = 0;
  for (this[param_e_1 + var_o_1] = 255 & param_t_2;
  --var_o_1 >= 0 && (num_a *= 256);
  ) param_t_2 < 0 && 0 === num_s && 0 !== this[param_e_1 + var_o_1 + 1] &&
  (num_s = 1), this[param_e_1 + var_o_1] = (param_t_2 / num_a >> 0) - num_s & 255;
  return param_e_1 + param_r;
  }
  , var_i.prototype.writeInt8 = function (param_t_2, param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 1, 127, -128), param_t_2 < 0 &&
  (param_t_2 = 255 + param_t_2 + 1), this[param_e_1] = 255 & param_t_2, param_e_1 + 1;
  }
  , var_i.prototype.writeInt16LE = function (param_t_2, param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 2, 32767, -32768), this[param_e_1] = 255 & param_t_2,
  this[param_e_1 + 1] = param_t_2 >>> 8, param_e_1 + 2;
  }
  , var_i.prototype.writeInt16BE = function (param_t_2, param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 2, 32767, -32768), this[param_e_1] = param_t_2 >>> 8,
  this[param_e_1 + 1] = 255 & param_t_2, param_e_1 + 2;
  }
  , var_i.prototype.writeInt32LE = function (param_t_2, param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 4, 2147483647, -2147483648), this[param_e_1] = 255 & param_t_2,
  this[param_e_1 + 1] = param_t_2 >>> 8, this[param_e_1 + 2] = param_t_2 >>> 16,
  this[param_e_1 + 3] = param_t_2 >>> 24, param_e_1 + 4;
  }
  , var_i.prototype.writeInt32BE = function (param_t_2, param_e_1, param_r) {
  return param_t_2 = +param_t_2, param_e_1 >>>= 0, param_r ||
  var_j_1(this, param_t_2, param_e_1, 4, 2147483647, -2147483648), param_t_2 < 0 &&
  (param_t_2 = 4294967295 + param_t_2 + 1), this[param_e_1] = param_t_2 >>> 24, this[param_e_1 + 1] = param_t_2 >>> 16,
  this[param_e_1 + 2] = param_t_2 >>> 8, this[param_e_1 + 3] = 255 & param_t_2, param_e_1 + 4;
  }
  , var_i.prototype.writeFloatLE = function (param_t_2, param_e_1, param_r) {
  return var_B_1(this, param_t_2, param_e_1, !0, param_r);
  }
  , var_i.prototype.writeFloatBE = function (param_t_2, param_e_1, param_r) {
  return var_B_1(this, param_t_2, param_e_1, !1, param_r);
  }
  , var_i.prototype.writeDoubleLE = function (param_t_2, param_e_1, param_r) {
  return var_U_1(this, param_t_2, param_e_1, !0, param_r);
  }
  , var_i.prototype.writeDoubleBE = function (param_t_2, param_e_1, param_r) {
  return var_U_1(this, param_t_2, param_e_1, !1, param_r);
  }
  , var_i.prototype.copy = function (param_t_2, param_e_1, param_r, param_n) {
  if (!var_i.isBuffer(param_t_2)) throw new TypeError("argument should be a Buffer");
  if (param_r || (param_r = 0), param_n || 0 === param_n || (param_n = this.length),
  param_e_1 >= param_t_2.length && (param_e_1 = param_t_2.length), param_e_1 ||
  (param_e_1 = 0), param_n > 0 && param_n < param_r && (param_n = param_r), param_n === param_r) return 0;
  if (0 === param_t_2.length || 0 === this.length) return 0;
  if (param_e_1 < 0) throw new RangeError("targetStart out of bounds");
  if (param_r < 0 || param_r >= this.length) throw new RangeError("Index out of range");
  if (param_n < 0) throw new RangeError("sourceEnd out of bounds");
  param_n > this.length && (param_n = this.length), param_t_2.length - param_e_1 < param_n - param_r &&
  (param_n = param_t_2.length - param_e_1 + param_r);
  var var_o_1 = param_n - param_r;
  return this === param_t_2 && "function" == typeof Uint8Array.prototype.copyWithin ?
  this.copyWithin(param_e_1, param_r, param_n) : Uint8Array.prototype.set.call(param_t_2,
  this.subarray(param_r, param_n), param_e_1), var_o_1;
  }
  , var_i.prototype.fill = function (param_t_2, param_e_1, param_r, param_n) {
  if ("string" == typeof param_t_2) {
  if ("string" == typeof param_e_1 ? (param_n = param_e_1, param_e_1 = 0, param_r = this.length) :
  "string" == typeof param_r && (param_n = param_r, param_r = this.length), void 0 !== param_n &&
  "string" != typeof param_n) throw new TypeError("encoding must be a string");
  if ("string" == typeof param_n && !var_i.isEncoding(param_n)) throw new TypeError(
  "Unknown encoding: " + param_n);
  if (1 === param_t_2.length) {
  var var_o_1 = param_t_2.charCodeAt(0);
  ("utf8" === param_n && var_o_1 < 128 || "latin1" === param_n) &&
  (param_t_2 = var_o_1);
  }
  }
  else "number" == typeof param_t_2 ? param_t_2 &= 255 : "boolean" == typeof param_t_2 &&
  (param_t_2 = Number(param_t_2));
  if (param_e_1 < 0 || this.length < param_e_1 || this.length < param_r) throw new RangeError(
  "Out of range index");
  if (param_r <= param_e_1) return this;
  var var_a_1;
  if (param_e_1 >>>= 0, param_r = void 0 === param_r ? this.length :
  param_r >>> 0, param_t_2 || (param_t_2 = 0), "number" == typeof param_t_2) for (
  var_a_1 = param_e_1;
  var_a_1 < param_r;
  ++var_a_1) this[var_a_1] = param_t_2;
  else {
  var var_s_1 = var_i.isBuffer(param_t_2) ? param_t_2 : var_i.from(param_t_2, param_n),
  var_u_2 = var_s_1.length;
  if (0 === var_u_2) throw new TypeError('The value "' + param_t_2 + '" is invalid for argument "value"');
  for (var_a_1 = 0;
  var_a_1 < param_r - param_e_1;
  ++var_a_1) this[var_a_1 + param_e_1] = var_s_1[var_a_1 % var_u_2];
  }
  return this;
  };
  var regex_P_1 = /[^+/0-9A-Za-z-_]/g;
  function var_N(param_t_2, param_e_1) {
  var var_r_1;
  param_e_1 = param_e_1 || 1 / 0;
  for (var var_n_1 = param_t_2.length, var_i_1 = null, list_o = [], num_a = 0;
  num_a < var_n_1;
  ++num_a) {
  if ((var_r_1 = param_t_2.charCodeAt(num_a)) > 55295 && var_r_1 < 57344) {
  if (!var_i_1) {
  if (var_r_1 > 56319) {
  (param_e_1 -= 3) > -1 && list_o.push(239, 191, 189);
  continue;
  }
  if (num_a + 1 === var_n_1) {
  (param_e_1 -= 3) > -1 && list_o.push(239, 191, 189);
  continue;
  }
  var_i_1 = var_r_1;
  continue;
  }
  if (var_r_1 < 56320) {
  (param_e_1 -= 3) > -1 && list_o.push(239, 191, 189), var_i_1 = var_r_1;
  continue;
  }
  var_r_1 = 65536 + (var_i_1 - 55296 << 10 | var_r_1 - 56320);
  }
  else var_i_1 && (param_e_1 -= 3) > -1 && list_o.push(239, 191, 189);
  if (var_i_1 = null, var_r_1 < 128) {
  if ((param_e_1 -= 1) < 0) break;
  list_o.push(var_r_1);
  }
  else if (var_r_1 < 2048) {
  if ((param_e_1 -= 2) < 0) break;
  list_o.push(var_r_1 >> 6 | 192, 63 & var_r_1 | 128);
  }
  else if (var_r_1 < 65536) {
  if ((param_e_1 -= 3) < 0) break;
  list_o.push(var_r_1 >> 12 | 224, var_r_1 >> 6 & 63 | 128, 63 & var_r_1 | 128);
  }
  else {
  if (!(var_r_1 < 1114112)) throw new Error("Invalid code point");
  if ((param_e_1 -= 4) < 0) break;
  list_o.push(var_r_1 >> 18 | 240, var_r_1 >> 12 & 63 | 128, var_r_1 >> 6 & 63 | 128,
  63 & var_r_1 | 128);
  }
  }
  return list_o;
  }
  function var_D(param_t_2) {
  return obj_p.toByteArray(function (param_t_3) {
  if ((param_t_3 = (param_t_3 = param_t_3.split("=")[0]).trim().replace(regex_P_1,
  "")).length < 2) return "";
  for (;
  param_t_3.length % 4 != 0;
  ) param_t_3 += "=";
  return param_t_3;
  }
  (param_t_2));
  }
  function var_R(param_t_2, param_e_1, param_r, param_n) {
  for (var num_i = 0;
  num_i < param_n && !(num_i + param_r >= param_e_1.length ||
  num_i >= param_t_2.length);
  ++num_i) param_e_1[num_i + param_r] = param_t_2[num_i];
  return num_i;
  }
  function var_L_1(param_t_2, param_e_1) {
  return param_t_2 instanceof param_e_1 || null != param_t_2 &&
  null != param_t_2.constructor && null != param_t_2.constructor.name &&
  param_t_2.constructor.name === param_e_1.name;
  }
  function var_q_1(param_t_2) {
  return param_t_2 != param_t_2;
  }
  var var_F_1 = function () {
  for (var var_t = new Array(256), num_e = 0;
  num_e < 16;
  ++num_e) for (var var_r_1 = 16 * num_e, num_n = 0;
  num_n < 16;
  ++num_n) var_t[var_r_1 + num_n] = "0123456789abcdef"[num_e] + "0123456789abcdef"[num_n];
  return var_t;
  }
  ();
  }
  ),
  var_g = var_y.Buffer;
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var_y.SlowBuffer, var_y.INSPECT_MAX_BYTES, var_y.kMaxLength;
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  var fn_b = function (param_t_1, param_e) {
  return (fn_b = Object.setPrototypeOf || {
  __proto__: []
  }
  instanceof Array && function (param_t_2, param_e_1) {
  param_t_2.__proto__ = param_e_1;
  }
  || function (param_t_2, param_e_1) {
  for (var var_r in param_e_1) param_e_1.hasOwnProperty(var_r) &&
  (param_t_2[var_r] = param_e_1[var_r]);
  }
  )(param_t_1, param_e);
  };
  function var_w(param_t_1, param_e) {
  function var_r() {
  this.constructor = param_t_1;
  }
  fn_b(param_t_1, param_e), param_t_1.prototype = null === param_e ?
  Object.create(param_e) : (var_r.prototype = param_e.prototype, new var_r());
  }
  var fn_A = function () {
  return (fn_A = Object.assign || function (param_t_1) {
  for (var var_e, num_r = 1, var_n = arguments.length;
  num_r < var_n;
  num_r++) for (var var_i in var_e = arguments[num_r]) Object.prototype.hasOwnProperty.call(
  var_e, var_i) && (param_t_1[var_i] = var_e[var_i]);
  return param_t_1;
  }
  ).apply(this, arguments);
  }
  ,
  var__ = function (param_t_1) {
  function var_e(param_r) {
  var var_n = param_t_1.call(this, param_r) || this;
  return Object.setPrototypeOf(var_n, var_e.prototype), var_n;
  }
  return var_w(var_e, param_t_1), Object.defineProperty(var_e.prototype, "name",
  {
  get: function () {
  return "BSONError";
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  ), var_e;
  }
  (Error),
  var_E = function (param_t_1) {
  function var_e(param_r) {
  var var_n = param_t_1.call(this, param_r) || this;
  return Object.setPrototypeOf(var_n, var_e.prototype), var_n;
  }
  return var_w(var_e, param_t_1), Object.defineProperty(var_e.prototype, "name",
  {
  get: function () {
  return "BSONTypeError";
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  ), var_e;
  }
  (TypeError);
  function var_S(param_t_1) {
  return param_t_1 && param_t_1.Math == Math && param_t_1;
  }
  function var_O() {
  return var_S("object" == typeof globalThis && globalThis) ||
  var_S("object" == typeof window && window) || var_S("object" == typeof self &&
  self) || var_S("object" == typeof param_t && param_t) || Function("return this")(
  );
  }
  var fn_x = function (param_t_1) {
  var var_e,
  var_r = "object" == typeof (var_e = var_O()).navigator && "ReactNative" === var_e.navigator.product ?
  "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values." :
  "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
  console.warn(var_r);
  for (var var_n = var_g.alloc(param_t_1), num_i = 0;
  num_i < param_t_1;
  ++num_i) var_n[num_i] = Math.floor(256 * Math.random());
  return var_n;
  }
  ,
  var_k = function () {
  if ("undefined" != typeof window) {
  var var_e = window.crypto || window.msCrypto;
  if (var_e && var_e.getRandomValues) return function (param_t_1) {
  return var_e.getRandomValues(var_g.alloc(param_t_1));
  };
  }
  return void 0 !== param_t && param_t.crypto && param_t.crypto.getRandomValues ?
  function (param_e) {
  return param_t.crypto.getRandomValues(var_g.alloc(param_e));
  }
  : fn_x;
  }
  ();
  function var_M(param_t_1) {
  return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(Object.prototype.toString.call(
  param_t_1));
  }
  function var_T(param_t_1) {
  return "[object Uint8Array]" === Object.prototype.toString.call(param_t_1);
  }
  function var_I(param_t_1) {
  return "[object RegExp]" === Object.prototype.toString.call(param_t_1);
  }
  function var_j(param_t_1) {
  return var_C(param_t_1) && "[object Date]" === Object.prototype.toString.call(
  param_t_1);
  }
  function var_C(param_t_1) {
  return "object" == typeof param_t_1 && null !== param_t_1;
  }
  function var_B(param_t_1, param_e) {
  var flag_r = !1;
  return function () {
  for (var list_n = [], num_i = 0;
  num_i < arguments.length;
  num_i++) list_n[num_i] = arguments[num_i];
  return flag_r || (console.warn(param_e), flag_r = !0), param_t_1.apply(this, list_n);
  };
  }
  function var_U(param_t_1) {
  if (ArrayBuffer.isView(param_t_1)) return var_g.from(param_t_1.buffer, param_t_1.byteOffset,
  param_t_1.byteLength);
  if (var_M(param_t_1)) return var_g.from(param_t_1);
  throw new var_E("Must use either Buffer or TypedArray");
  }
  var regex_P = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
  fn_N = function (param_t_1) {
  return "string" == typeof param_t_1 && regex_P.test(param_t_1);
  }
  ,
  fn_D = function (param_t_1) {
  if (!fn_N(param_t_1)) throw new var_E('UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".');
  var var_e = param_t_1.replace(/-/g, "");
  return var_g.from(var_e, "hex");
  }
  ,
  fn_R = function (param_t_1, param_e) {
  return void 0 === param_e && (param_e = !0), param_e ? param_t_1.toString("hex",
  0, 4) + "-" + param_t_1.toString("hex", 4, 6) + "-" + param_t_1.toString("hex",
  6, 8) + "-" + param_t_1.toString("hex", 8, 10) + "-" + param_t_1.toString("hex",
  10, 16) : param_t_1.toString("hex");
  }
  ,
  var_L = (Math.pow(2, 63), Math.pow(2, 63), Math.pow(2, 53)),
  var_q = -Math.pow(2, 53),
  var_F = function () {
  function var_t(param_e, param_r) {
  if (!(this instanceof var_t)) return new var_t(param_e, param_r);
  if (!(null == param_e || "string" == typeof param_e || ArrayBuffer.isView(param_e) ||
  param_e instanceof ArrayBuffer || Array.isArray(param_e))) throw new var_E("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
  this.sub_type = null != param_r ? param_r : var_t.BSON_BINARY_SUBTYPE_DEFAULT,
  null == param_e ? (this.buffer = var_g.alloc(var_t.BUFFER_SIZE), this.position = 0) :
  ("string" == typeof param_e ? this.buffer = var_g.from(param_e, "binary") :
  Array.isArray(param_e) ? this.buffer = var_g.from(param_e) :
  this.buffer = var_U(param_e), this.position = this.buffer.byteLength);
  }
  return var_t.prototype.put = function (param_e) {
  if ("string" == typeof param_e && 1 !== param_e.length) throw new var_E("only accepts single character String");
  if ("number" != typeof param_e && 1 !== param_e.length) throw new var_E("only accepts single character Uint8Array or Array");
  var var_r;
  if ((var_r = "string" == typeof param_e ? param_e.charCodeAt(0) :
  "number" == typeof param_e ? param_e : param_e[0]) < 0 || var_r > 255) throw new var_E(
  "only accepts number in a valid unsigned byte range 0-255");
  if (this.buffer.length > this.position) this.buffer[this.position++] = var_r;
  else {
  var var_n = var_g.alloc(var_t.BUFFER_SIZE + this.buffer.length);
  this.buffer.copy(var_n, 0, 0, this.buffer.length), this.buffer = var_n, this.buffer[this.position++] = var_r;
  }
  }
  , var_t.prototype.write = function (param_t_1, param_e) {
  if (param_e = "number" == typeof param_e ? param_e : this.position, this.buffer.length < param_e + param_t_1.length) {
  var var_r = var_g.alloc(this.buffer.length + param_t_1.length);
  this.buffer.copy(var_r, 0, 0, this.buffer.length), this.buffer = var_r;
  }
  ArrayBuffer.isView(param_t_1) ? (this.buffer.set(var_U(param_t_1), param_e), this.position = param_e + param_t_1.byteLength > this.position ?
  param_e + param_t_1.length : this.position) : "string" == typeof param_t_1 &&
  (this.buffer.write(param_t_1, param_e, param_t_1.length, "binary"), this.position = param_e + param_t_1.length > this.position ?
  param_e + param_t_1.length : this.position);
  }
  , var_t.prototype.read = function (param_t_1, param_e) {
  return param_e = param_e && param_e > 0 ? param_e : this.position, this.buffer.slice(
  param_t_1, param_t_1 + param_e);
  }
  , var_t.prototype.value = function (param_t_1) {
  return (param_t_1 = !!param_t_1) && this.buffer.length === this.position ?
  this.buffer : param_t_1 ? this.buffer.slice(0, this.position) :
  this.buffer.toString("binary", 0, this.position);
  }
  , var_t.prototype.length = function () {
  return this.position;
  }
  , var_t.prototype.toJSON = function () {
  return this.buffer.toString("base64");
  }
  , var_t.prototype.toString = function (param_t_1) {
  return this.buffer.toString(param_t_1);
  }
  , var_t.prototype.toExtendedJSON = function (param_t_1) {
  param_t_1 = param_t_1 || {
  };
  var var_e = this.buffer.toString("base64"),
  var_r = Number(this.sub_type).toString(16);
  return param_t_1.legacy ? {
  $binary: var_e,
  $type: 1 === var_r.length ? "0" + var_r : var_r
  }
  : {
  $binary: {
  base64: var_e,
  subType: 1 === var_r.length ? "0" + var_r : var_r
  }
  };
  }
  , var_t.prototype.toUUID = function () {
  if (this.sub_type === var_t.SUBTYPE_UUID) return new var_G(this.buffer.slice(0,
  this.position));
  throw new var__('Binary sub_type "'.concat(this.sub_type, '" is not supported for converting to UUID. Only "').concat(
  var_t.SUBTYPE_UUID, '" is currently supported.'));
  }
  , var_t.fromExtendedJSON = function (param_e, param_r) {
  var var_n, var_i;
  if (param_r = param_r || {
  }
  , "$binary" in param_e ? param_r.legacy && "string" == typeof param_e.$binary &&
  "$type" in param_e ? (var_i = param_e.$type ? parseInt(param_e.$type, 16) :
  0, var_n = var_g.from(param_e.$binary, "base64")) : "string" != typeof param_e.$binary &&
  (var_i = param_e.$binary.subType ? parseInt(param_e.$binary.subType, 16) :
  0, var_n = var_g.from(param_e.$binary.base64, "base64")) :
  "$uuid" in param_e && (var_i = 4, var_n = fn_D(param_e.$uuid)), !var_n) throw new var_E(
  "Unexpected Binary Extended JSON format ".concat(JSON.stringify(param_e)));
  return 4 === var_i ? new var_G(var_n) : new var_t(var_n, var_i);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  var var_t_1 = this.value(!0);
  return 'new Binary(Buffer.from("'.concat(var_t_1.toString("hex"), '", "hex"), ').concat(
  this.sub_type, ")");
  }
  , var_t.BSON_BINARY_SUBTYPE_DEFAULT = 0, var_t.BUFFER_SIZE = 256, var_t.SUBTYPE_DEFAULT = 0,
  var_t.SUBTYPE_FUNCTION = 1, var_t.SUBTYPE_BYTE_ARRAY = 2, var_t.SUBTYPE_UUID_OLD = 3,
  var_t.SUBTYPE_UUID = 4, var_t.SUBTYPE_MD5 = 5, var_t.SUBTYPE_ENCRYPTED = 6, var_t.SUBTYPE_COLUMN = 7,
  var_t.SUBTYPE_USER_DEFINED = 128, var_t;
  }
  ();
  Object.defineProperty(var_F.prototype, "_bsontype", {
  value: "Binary"
  }
  );
  var var_G = function (param_t_1) {
  function var_e(param_r) {
  var var_n,
  var_i,
  var_o = this;
  if (null == param_r) var_n = var_e.generate();
  else if (param_r instanceof var_e) var_n = var_g.from(param_r.buffer), var_i = param_r.__id;
  else if (ArrayBuffer.isView(param_r) && 16 === param_r.byteLength) var_n = var_U(
  param_r);
  else {
  if ("string" != typeof param_r) throw new var_E("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
  var_n = fn_D(param_r);
  }
  return (var_o = param_t_1.call(this, var_n, 4) || this).__id = var_i, var_o;
  }
  return var_w(var_e, param_t_1), Object.defineProperty(var_e.prototype, "id", {
  get: function () {
  return this.buffer;
  }
  ,
  set: function (param_t_2) {
  this.buffer = param_t_2, var_e.cacheHexString && (this.__id = fn_R(param_t_2));
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  ), var_e.prototype.toHexString = function (param_t_2) {
  if (void 0 === param_t_2 && (param_t_2 = !0), var_e.cacheHexString &&
  this.__id) return this.__id;
  var var_r = fn_R(this.id, param_t_2);
  return var_e.cacheHexString && (this.__id = var_r), var_r;
  }
  , var_e.prototype.toString = function (param_t_2) {
  return param_t_2 ? this.id.toString(param_t_2) : this.toHexString();
  }
  , var_e.prototype.toJSON = function () {
  return this.toHexString();
  }
  , var_e.prototype.equals = function (param_t_2) {
  if (!param_t_2) return !1;
  if (param_t_2 instanceof var_e) return param_t_2.id.equals(this.id);
  try {
  return new var_e(param_t_2).id.equals(this.id);
  }
  catch (var_t) {
  return !1;
  }
  }
  , var_e.prototype.toBinary = function () {
  return new var_F(this.id, var_F.SUBTYPE_UUID);
  }
  , var_e.generate = function () {
  var var_t = var_k(16);
  return var_t[6] = 15 & var_t[6] | 64, var_t[8] = 63 & var_t[8] | 128, var_g.from(
  var_t);
  }
  , var_e.isValid = function (param_t_2) {
  return !!param_t_2 && (param_t_2 instanceof var_e || ("string" == typeof param_t_2 ?
  fn_N(param_t_2) : !!var_T(param_t_2) && 16 === param_t_2.length &&
  64 == (240 & param_t_2[6]) && 128 == (128 & param_t_2[8])));
  }
  , var_e.createFromHexString = function (param_t_2) {
  return new var_e(fn_D(param_t_2));
  }
  , var_e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_e.prototype.inspect = function () {
  return 'new UUID("'.concat(this.toHexString(), '")');
  }
  , var_e;
  }
  (var_F),
  var_Q = function () {
  function var_t(param_e, param_r) {
  if (!(this instanceof var_t)) return new var_t(param_e, param_r);
  this.code = param_e, this.scope = param_r;
  }
  return var_t.prototype.toJSON = function () {
  return {
  code: this.code,
  scope: this.scope
  };
  }
  , var_t.prototype.toExtendedJSON = function () {
  return this.scope ? {
  $code: this.code,
  $scope: this.scope
  }
  : {
  $code: this.code
  };
  }
  , var_t.fromExtendedJSON = function (param_e) {
  return new var_t(param_e.$code, param_e.$scope);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  var var_t_1 = this.toJSON();
  return 'new Code("'.concat(String(var_t_1.code), '"').concat(var_t_1.scope ?
  ", ".concat(JSON.stringify(var_t_1.scope)) : "", ")");
  }
  , var_t;
  }
  ();
  function var_z(param_t_1) {
  return var_C(param_t_1) && null != param_t_1.$id && "string" == typeof param_t_1.$ref &&
  (null == param_t_1.$db || "string" == typeof param_t_1.$db);
  }
  Object.defineProperty(var_Q.prototype, "_bsontype", {
  value: "Code"
  }
  );
  var var_H = function () {
  function var_t(param_e, param_r, param_n, param_i) {
  if (!(this instanceof var_t)) return new var_t(param_e, param_r, param_n, param_i);
  var var_o = param_e.split(".");
  2 === var_o.length && (param_n = var_o.shift(), param_e = var_o.shift()), this.collection = param_e,
  this.oid = param_r, this.db = param_n, this.fields = param_i ||
  {
  };
  }
  return Object.defineProperty(var_t.prototype, "namespace", {
  get: function () {
  return this.collection;
  }
  ,
  set: function (param_t_1) {
  this.collection = param_t_1;
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  ), var_t.prototype.toJSON = function () {
  var var_t_1 = Object.assign({
  $ref: this.collection,
  $id: this.oid
  }
  , this.fields);
  return null != this.db && (var_t_1.$db = this.db), var_t_1;
  }
  , var_t.prototype.toExtendedJSON = function (param_t_1) {
  param_t_1 = param_t_1 || {
  };
  var obj_e = {
  $ref: this.collection,
  $id: this.oid
  };
  return param_t_1.legacy ? obj_e : (this.db && (obj_e.$db = this.db), obj_e = Object.assign(
  obj_e, this.fields));
  }
  , var_t.fromExtendedJSON = function (param_e) {
  var var_r = Object.assign({
  }
  , param_e);
  return delete var_r.$ref, delete var_r.$id, delete var_r.$db, new var_t(param_e.$ref,
  param_e.$id, param_e.$db, var_r);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  var var_t_1 = void 0 === this.oid || void 0 === this.oid.toString ?
  this.oid : this.oid.toString();
  return 'new DBRef("'.concat(this.namespace, '", new ObjectId("').concat(String(
  var_t_1), '")').concat(this.db ? ', "'.concat(this.db, '"') :
  "", ")");
  }
  , var_t;
  }
  ();
  Object.defineProperty(var_H.prototype, "_bsontype", {
  value: "DBRef"
  }
  );
  var var_V = void 0;
  try {
  var_V = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97,
  115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127,
  3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108,
  0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114,
  101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95,
  104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0,
  173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126,
  34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32,
  1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4,
  66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
  66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32,
  135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32,
  134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167,
  36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
  32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0,
  32, 4, 167, 11])), {
  }
  ).exports;
  }
  catch (var_t) {
  }
  var obj_$ = {
  }
  ,
  obj_Y = {
  }
  ,
  var_W = function () {
  function var_t(param_e, param_r, param_n) {
  if (void 0 === param_e && (param_e = 0), !(this instanceof var_t)) return new var_t(
  param_e, param_r, param_n);
  "bigint" == typeof param_e ? Object.assign(this, var_t.fromBigInt(param_e, !!param_r)) :
  "string" == typeof param_e ? Object.assign(this, var_t.fromString(param_e, !!param_r)) :
  (this.low = 0 | param_e, this.high = 0 | param_r, this.unsigned = !!param_n), Object.defineProperty(
  this, "__isLong__", {
  value: !0,
  configurable: !1,
  writable: !1,
  enumerable: !1
  }
  );
  }
  return var_t.fromBits = function (param_e, param_r, param_n) {
  return new var_t(param_e, param_r, param_n);
  }
  , var_t.fromInt = function (param_e, param_r) {
  var var_n, var_i, var_o;
  return param_r ? (var_o = 0 <= (param_e >>>= 0) && param_e < 256) &&
  (var_i = obj_Y[param_e]) ? var_i : (var_n = var_t.fromBits(param_e, (0 | param_e) < 0 ?
  -1 : 0, !0), var_o && (obj_Y[param_e] = var_n), var_n) : (var_o = -128 <= (param_e |= 0) &&
  param_e < 128) && (var_i = obj_$[param_e]) ? var_i : (var_n = var_t.fromBits(param_e,
  param_e < 0 ? -1 : 0, !1), var_o && (obj_$[param_e] = var_n), var_n);
  }
  , var_t.fromNumber = function (param_e, param_r) {
  if (isNaN(param_e)) return param_r ? var_t.UZERO : var_t.ZERO;
  if (param_r) {
  if (param_e < 0) return var_t.UZERO;
  if (param_e >= 0x10000000000000000) return var_t.MAX_UNSIGNED_VALUE;
  }
  else {
  if (param_e <= -0x8000000000000000) return var_t.MIN_VALUE;
  if (param_e + 1 >= 0x8000000000000000) return var_t.MAX_VALUE;
  }
  return param_e < 0 ? var_t.fromNumber(-param_e, param_r).neg() :
  var_t.fromBits(param_e % 4294967296 | 0, param_e / 4294967296 | 0, param_r);
  }
  , var_t.fromBigInt = function (param_e, param_r) {
  return var_t.fromString(param_e.toString(), param_r);
  }
  , var_t.fromString = function (param_e, param_r, param_n) {
  if (0 === param_e.length) throw Error("empty string");
  if ("NaN" === param_e || "Infinity" === param_e || "+Infinity" === param_e ||
  "-Infinity" === param_e) return var_t.ZERO;
  if ("number" == typeof param_r ? (param_n = param_r, param_r = !1) :
  param_r = !!param_r, (param_n = param_n || 10) < 2 || 36 < param_n) throw RangeError(
  "radix");
  var var_i;
  if ((var_i = param_e.indexOf("-")) > 0) throw Error("interior hyphen");
  if (0 === var_i) return var_t.fromString(param_e.substring(1), param_r, param_n).neg(
  );
  for (var var_o = var_t.fromNumber(Math.pow(param_n, 8)), var_a = var_t.ZERO, num_s = 0;
  num_s < param_e.length;
  num_s += 8) {
  var var_u_1 = Math.min(8, param_e.length - num_s),
  var_c = parseInt(param_e.substring(num_s, num_s + var_u_1), param_n);
  if (var_u_1 < 8) {
  var var_l = var_t.fromNumber(Math.pow(param_n, var_u_1));
  var_a = var_a.mul(var_l).add(var_t.fromNumber(var_c));
  }
  else var_a = (var_a = var_a.mul(var_o)).add(var_t.fromNumber(var_c));
  }
  return var_a.unsigned = param_r, var_a;
  }
  , var_t.fromBytes = function (param_e, param_r, param_n) {
  return param_n ? var_t.fromBytesLE(param_e, param_r) : var_t.fromBytesBE(param_e,
  param_r);
  }
  , var_t.fromBytesLE = function (param_e, param_r) {
  return new var_t(param_e[0] | param_e[1] << 8 | param_e[2] << 16 | param_e[3] << 24,
  param_e[4] | param_e[5] << 8 | param_e[6] << 16 | param_e[7] << 24, param_r);
  }
  , var_t.fromBytesBE = function (param_e, param_r) {
  return new var_t(param_e[4] << 24 | param_e[5] << 16 | param_e[6] << 8 | param_e[7],
  param_e[0] << 24 | param_e[1] << 16 | param_e[2] << 8 | param_e[3], param_r);
  }
  , var_t.isLong = function (param_t_1) {
  return var_C(param_t_1) && !0 === param_t_1.__isLong__;
  }
  , var_t.fromValue = function (param_e, param_r) {
  return "number" == typeof param_e ? var_t.fromNumber(param_e, param_r) :
  "string" == typeof param_e ? var_t.fromString(param_e, param_r) :
  var_t.fromBits(param_e.low, param_e.high, "boolean" == typeof param_r ?
  param_r : param_e.unsigned);
  }
  , var_t.prototype.add = function (param_e) {
  var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e));
  var var_r = this.high >>> 16,
  var_n = 65535 & this.high,
  var_i = this.low >>> 16,
  var_o = 65535 & this.low,
  var_a = param_e.high >>> 16,
  var_s = 65535 & param_e.high,
  var_u_1 = param_e.low >>> 16,
  num_c = 0,
  num_l_1 = 0,
  num_f = 0,
  num_d = 0;
  return num_f += (num_d += var_o + (65535 & param_e.low)) >>> 16, num_d &= 65535,
  num_l_1 += (num_f += var_i + var_u_1) >>> 16, num_f &= 65535, num_c += (num_l_1 += var_n + var_s) >>> 16,
  num_l_1 &= 65535, num_c += var_r + var_a, num_c &= 65535, var_t.fromBits(num_f << 16 | num_d,
  num_c << 16 | num_l_1, this.unsigned);
  }
  , var_t.prototype.and = function (param_e) {
  return var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), var_t.fromBits(
  this.low & param_e.low, this.high & param_e.high, this.unsigned);
  }
  , var_t.prototype.compare = function (param_e) {
  if (var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), this.eq(param_e)) return 0;
  var var_r = this.isNegative(),
  var_n = param_e.isNegative();
  return var_r && !var_n ? -1 : !var_r && var_n ? 1 : this.unsigned ?
  param_e.high >>> 0 > this.high >>> 0 || param_e.high === this.high &&
  param_e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(param_e).isNegative() ?
  -1 : 1;
  }
  , var_t.prototype.comp = function (param_t_1) {
  return this.compare(param_t_1);
  }
  , var_t.prototype.divide = function (param_e) {
  if (var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), param_e.isZero(
  )) throw Error("division by zero");
  if (var_V) {
  if (!this.unsigned && -2147483648 === this.high && -1 === param_e.low &&
  -1 === param_e.high) return this;
  var var_r = (this.unsigned ? var_V.div_u : var_V.div_s)(this.low, this.high, param_e.low,
  param_e.high);
  return var_t.fromBits(var_r, var_V.get_high(), this.unsigned);
  }
  if (this.isZero()) return this.unsigned ? var_t.UZERO : var_t.ZERO;
  var var_n, var_i, var_o;
  if (this.unsigned) {
  if (param_e.unsigned || (param_e = param_e.toUnsigned()), param_e.gt(this)) return var_t.UZERO;
  if (param_e.gt(this.shru(1))) return var_t.UONE;
  var_o = var_t.UZERO;
  }
  else {
  if (this.eq(var_t.MIN_VALUE)) return param_e.eq(var_t.ONE) ||
  param_e.eq(var_t.NEG_ONE) ? var_t.MIN_VALUE : param_e.eq(var_t.MIN_VALUE) ?
  var_t.ONE : (var_n = this.shr(1).div(param_e).shl(1)).eq(var_t.ZERO) ?
  param_e.isNegative() ? var_t.ONE : var_t.NEG_ONE : (var_i = this.sub(param_e.mul(
  var_n)), var_o = var_n.add(var_i.div(param_e)));
  if (param_e.eq(var_t.MIN_VALUE)) return this.unsigned ? var_t.UZERO :
  var_t.ZERO;
  if (this.isNegative()) return param_e.isNegative() ? this.neg().div(param_e.neg(
  )) : this.neg().div(param_e).neg();
  if (param_e.isNegative()) return this.div(param_e.neg()).neg();
  var_o = var_t.ZERO;
  }
  for (var_i = this;
  var_i.gte(param_e);
  ) {
  var_n = Math.max(1, Math.floor(var_i.toNumber() / param_e.toNumber()));
  for (var var_a = Math.ceil(Math.log(var_n) / Math.LN2), var_s = var_a <= 48 ?
  1 : Math.pow(2, var_a - 48), var_u_1 = var_t.fromNumber(var_n), var_c = var_u_1.mul(
  param_e);
  var_c.isNegative() || var_c.gt(var_i);
  ) var_n -= var_s, var_c = (var_u_1 = var_t.fromNumber(var_n, this.unsigned)).mul(
  param_e);
  var_u_1.isZero() && (var_u_1 = var_t.ONE), var_o = var_o.add(var_u_1), var_i = var_i.sub(
  var_c);
  }
  return var_o;
  }
  , var_t.prototype.div = function (param_t_1) {
  return this.divide(param_t_1);
  }
  , var_t.prototype.equals = function (param_e) {
  return var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), (this.unsigned === param_e.unsigned ||
  this.high >>> 31 != 1 || param_e.high >>> 31 != 1) && this.high === param_e.high &&
  this.low === param_e.low;
  }
  , var_t.prototype.eq = function (param_t_1) {
  return this.equals(param_t_1);
  }
  , var_t.prototype.getHighBits = function () {
  return this.high;
  }
  , var_t.prototype.getHighBitsUnsigned = function () {
  return this.high >>> 0;
  }
  , var_t.prototype.getLowBits = function () {
  return this.low;
  }
  , var_t.prototype.getLowBitsUnsigned = function () {
  return this.low >>> 0;
  }
  , var_t.prototype.getNumBitsAbs = function () {
  if (this.isNegative()) return this.eq(var_t.MIN_VALUE) ? 64 :
  this.neg().getNumBitsAbs();
  var var_e,
  var_r = 0 !== this.high ? this.high : this.low;
  for (var_e = 31;
  var_e > 0 && 0 == (var_r & 1 << var_e);
  var_e--);
  return 0 !== this.high ? var_e + 33 : var_e + 1;
  }
  , var_t.prototype.greaterThan = function (param_t_1) {
  return this.comp(param_t_1) > 0;
  }
  , var_t.prototype.gt = function (param_t_1) {
  return this.greaterThan(param_t_1);
  }
  , var_t.prototype.greaterThanOrEqual = function (param_t_1) {
  return this.comp(param_t_1) >= 0;
  }
  , var_t.prototype.gte = function (param_t_1) {
  return this.greaterThanOrEqual(param_t_1);
  }
  , var_t.prototype.ge = function (param_t_1) {
  return this.greaterThanOrEqual(param_t_1);
  }
  , var_t.prototype.isEven = function () {
  return 0 == (1 & this.low);
  }
  , var_t.prototype.isNegative = function () {
  return !this.unsigned && this.high < 0;
  }
  , var_t.prototype.isOdd = function () {
  return 1 == (1 & this.low);
  }
  , var_t.prototype.isPositive = function () {
  return this.unsigned || this.high >= 0;
  }
  , var_t.prototype.isZero = function () {
  return 0 === this.high && 0 === this.low;
  }
  , var_t.prototype.lessThan = function (param_t_1) {
  return this.comp(param_t_1) < 0;
  }
  , var_t.prototype.lt = function (param_t_1) {
  return this.lessThan(param_t_1);
  }
  , var_t.prototype.lessThanOrEqual = function (param_t_1) {
  return this.comp(param_t_1) <= 0;
  }
  , var_t.prototype.lte = function (param_t_1) {
  return this.lessThanOrEqual(param_t_1);
  }
  , var_t.prototype.modulo = function (param_e) {
  if (var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), var_V) {
  var var_r = (this.unsigned ? var_V.rem_u : var_V.rem_s)(this.low, this.high, param_e.low,
  param_e.high);
  return var_t.fromBits(var_r, var_V.get_high(), this.unsigned);
  }
  return this.sub(this.div(param_e).mul(param_e));
  }
  , var_t.prototype.mod = function (param_t_1) {
  return this.modulo(param_t_1);
  }
  , var_t.prototype.rem = function (param_t_1) {
  return this.modulo(param_t_1);
  }
  , var_t.prototype.multiply = function (param_e) {
  if (this.isZero()) return var_t.ZERO;
  if (var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), var_V) {
  var var_r = var_V.mul(this.low, this.high, param_e.low, param_e.high);
  return var_t.fromBits(var_r, var_V.get_high(), this.unsigned);
  }
  if (param_e.isZero()) return var_t.ZERO;
  if (this.eq(var_t.MIN_VALUE)) return param_e.isOdd() ? var_t.MIN_VALUE :
  var_t.ZERO;
  if (param_e.eq(var_t.MIN_VALUE)) return this.isOdd() ? var_t.MIN_VALUE :
  var_t.ZERO;
  if (this.isNegative()) return param_e.isNegative() ? this.neg().mul(param_e.neg(
  )) : this.neg().mul(param_e).neg();
  if (param_e.isNegative()) return this.mul(param_e.neg()).neg();
  if (this.lt(var_t.TWO_PWR_24) && param_e.lt(var_t.TWO_PWR_24)) return var_t.fromNumber(
  this.toNumber() * param_e.toNumber(), this.unsigned);
  var var_n = this.high >>> 16,
  var_i = 65535 & this.high,
  var_o = this.low >>> 16,
  var_a = 65535 & this.low,
  var_s = param_e.high >>> 16,
  var_u_1 = 65535 & param_e.high,
  var_c = param_e.low >>> 16,
  var_l = 65535 & param_e.low,
  num_f = 0,
  num_d = 0,
  num_h = 0,
  num_p = 0;
  return num_h += (num_p += var_a * var_l) >>> 16, num_p &= 65535, num_d += (num_h += var_o * var_l) >>> 16,
  num_h &= 65535, num_d += (num_h += var_a * var_c) >>> 16, num_h &= 65535, num_f += (
  num_d += var_i * var_l) >>> 16, num_d &= 65535, num_f += (num_d += var_o * var_c) >>> 16,
  num_d &= 65535, num_f += (num_d += var_a * var_u_1) >>> 16, num_d &= 65535, num_f += var_n * var_l + var_i * var_c + var_o * var_u_1 + var_a * var_s,
  num_f &= 65535, var_t.fromBits(num_h << 16 | num_p, num_f << 16 | num_d, this.unsigned);
  }
  , var_t.prototype.mul = function (param_t_1) {
  return this.multiply(param_t_1);
  }
  , var_t.prototype.negate = function () {
  return !this.unsigned && this.eq(var_t.MIN_VALUE) ? var_t.MIN_VALUE :
  this.not().add(var_t.ONE);
  }
  , var_t.prototype.neg = function () {
  return this.negate();
  }
  , var_t.prototype.not = function () {
  return var_t.fromBits(~this.low, ~this.high, this.unsigned);
  }
  , var_t.prototype.notEquals = function (param_t_1) {
  return !this.equals(param_t_1);
  }
  , var_t.prototype.neq = function (param_t_1) {
  return this.notEquals(param_t_1);
  }
  , var_t.prototype.ne = function (param_t_1) {
  return this.notEquals(param_t_1);
  }
  , var_t.prototype.or = function (param_e) {
  return var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), var_t.fromBits(
  this.low | param_e.low, this.high | param_e.high, this.unsigned);
  }
  , var_t.prototype.shiftLeft = function (param_e) {
  return var_t.isLong(param_e) && (param_e = param_e.toInt()), 0 == (param_e &= 63) ?
  this : param_e < 32 ? var_t.fromBits(this.low << param_e, this.high << param_e | this.low >>> 32 - param_e,
  this.unsigned) : var_t.fromBits(0, this.low << param_e - 32, this.unsigned);
  }
  , var_t.prototype.shl = function (param_t_1) {
  return this.shiftLeft(param_t_1);
  }
  , var_t.prototype.shiftRight = function (param_e) {
  return var_t.isLong(param_e) && (param_e = param_e.toInt()), 0 == (param_e &= 63) ?
  this : param_e < 32 ? var_t.fromBits(this.low >>> param_e | this.high << 32 - param_e,
  this.high >> param_e, this.unsigned) : var_t.fromBits(this.high >> param_e - 32,
  this.high >= 0 ? 0 : -1, this.unsigned);
  }
  , var_t.prototype.shr = function (param_t_1) {
  return this.shiftRight(param_t_1);
  }
  , var_t.prototype.shiftRightUnsigned = function (param_e) {
  if (var_t.isLong(param_e) && (param_e = param_e.toInt()), 0 === (param_e &= 63)) return this;
  var var_r = this.high;
  if (param_e < 32) {
  var var_n = this.low;
  return var_t.fromBits(var_n >>> param_e | var_r << 32 - param_e, var_r >>> param_e,
  this.unsigned);
  }
  return 32 === param_e ? var_t.fromBits(var_r, 0, this.unsigned) :
  var_t.fromBits(var_r >>> param_e - 32, 0, this.unsigned);
  }
  , var_t.prototype.shr_u = function (param_t_1) {
  return this.shiftRightUnsigned(param_t_1);
  }
  , var_t.prototype.shru = function (param_t_1) {
  return this.shiftRightUnsigned(param_t_1);
  }
  , var_t.prototype.subtract = function (param_e) {
  return var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), this.add(
  param_e.neg());
  }
  , var_t.prototype.sub = function (param_t_1) {
  return this.subtract(param_t_1);
  }
  , var_t.prototype.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
  }
  , var_t.prototype.toNumber = function () {
  return this.unsigned ? 4294967296 * (this.high >>> 0) + (this.low >>> 0) :
  4294967296 * this.high + (this.low >>> 0);
  }
  , var_t.prototype.toBigInt = function () {
  return BigInt(this.toString());
  }
  , var_t.prototype.toBytes = function (param_t_1) {
  return param_t_1 ? this.toBytesLE() : this.toBytesBE();
  }
  , var_t.prototype.toBytesLE = function () {
  var var_t_1 = this.high,
  var_e = this.low;
  return [255 & var_e, var_e >>> 8 & 255, var_e >>> 16 & 255, var_e >>> 24, 255 & var_t_1,
  var_t_1 >>> 8 & 255, var_t_1 >>> 16 & 255, var_t_1 >>> 24];
  }
  , var_t.prototype.toBytesBE = function () {
  var var_t_1 = this.high,
  var_e = this.low;
  return [var_t_1 >>> 24, var_t_1 >>> 16 & 255, var_t_1 >>> 8 & 255, 255 & var_t_1,
  var_e >>> 24, var_e >>> 16 & 255, var_e >>> 8 & 255, 255 & var_e];
  }
  , var_t.prototype.toSigned = function () {
  return this.unsigned ? var_t.fromBits(this.low, this.high, !1) :
  this;
  }
  , var_t.prototype.toString = function (param_e) {
  if ((param_e = param_e || 10) < 2 || 36 < param_e) throw RangeError("radix");
  if (this.isZero()) return "0";
  if (this.isNegative()) {
  if (this.eq(var_t.MIN_VALUE)) {
  var var_r = var_t.fromNumber(param_e),
  var_n = this.div(var_r),
  var_i = var_n.mul(var_r).sub(this);
  return var_n.toString(param_e) + var_i.toInt().toString(param_e);
  }
  return "-" + this.neg().toString(param_e);
  }
  for (var var_o = var_t.fromNumber(Math.pow(param_e, 6), this.unsigned), var_a = this,
  str_s = "";;
  ) {
  var var_u_1 = var_a.div(var_o),
  var_c = (var_a.sub(var_u_1.mul(var_o)).toInt() >>> 0).toString(param_e);
  if ((var_a = var_u_1).isZero()) return var_c + str_s;
  for (;
  var_c.length < 6;
  ) var_c = "0" + var_c;
  str_s = "" + var_c + str_s;
  }
  }
  , var_t.prototype.toUnsigned = function () {
  return this.unsigned ? this : var_t.fromBits(this.low, this.high, !0);
  }
  , var_t.prototype.xor = function (param_e) {
  return var_t.isLong(param_e) || (param_e = var_t.fromValue(param_e)), var_t.fromBits(
  this.low ^ param_e.low, this.high ^ param_e.high, this.unsigned);
  }
  , var_t.prototype.eqz = function () {
  return this.isZero();
  }
  , var_t.prototype.le = function (param_t_1) {
  return this.lessThanOrEqual(param_t_1);
  }
  , var_t.prototype.toExtendedJSON = function (param_t_1) {
  return param_t_1 && param_t_1.relaxed ? this.toNumber() : {
  $numberLong: this.toString()
  };
  }
  , var_t.fromExtendedJSON = function (param_e, param_r) {
  var var_n = var_t.fromString(param_e.$numberLong);
  return param_r && param_r.relaxed ? var_n.toNumber() : var_n;
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  return 'new Long("'.concat(this.toString(), '"').concat(this.unsigned ?
  ", true" : "", ")");
  }
  , var_t.TWO_PWR_24 = var_t.fromInt(1 << 24), var_t.MAX_UNSIGNED_VALUE = var_t.fromBits(
  -1, -1, !0), var_t.ZERO = var_t.fromInt(0), var_t.UZERO = var_t.fromInt(0, !0),
  var_t.ONE = var_t.fromInt(1), var_t.UONE = var_t.fromInt(1, !0), var_t.NEG_ONE = var_t.fromInt(
  -1), var_t.MAX_VALUE = var_t.fromBits(-1, 2147483647, !1), var_t.MIN_VALUE = var_t.fromBits(
  0, -2147483648, !1), var_t;
  }
  ();
  Object.defineProperty(var_W.prototype, "__isLong__", {
  value: !0
  }
  ), Object.defineProperty(var_W.prototype, "_bsontype", {
  value: "Long"
  }
  );
  var regex_X = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
  regex_K = /^(\+|-)?(Infinity|inf)$/i,
  regex_J = /^(\+|-)?NaN$/i,
  var_Z = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
  tt = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
  et = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
  rt = /^([-+])?(\d+)?$/;
  function nt(param_t_1) {
  return !isNaN(parseInt(param_t_1, 10));
  }
  function it(param_t_1) {
  var var_e = var_W.fromNumber(1e9),
  var_r = var_W.fromNumber(0);
  if (!(param_t_1.parts[0] || param_t_1.parts[1] || param_t_1.parts[2] ||
  param_t_1.parts[3])) return {
  quotient: param_t_1,
  rem: var_r
  };
  for (var num_n = 0;
  num_n <= 3;
  num_n++) var_r = (var_r = var_r.shiftLeft(32)).add(new var_W(param_t_1.parts[num_n],
  0)), param_t_1.parts[num_n] = var_r.div(var_e).low, var_r = var_r.modulo(var_e);
  return {
  quotient: param_t_1,
  rem: var_r
  };
  }
  function ot(param_t_1, param_e) {
  throw new var_E('"'.concat(param_t_1, '" is not a valid Decimal128 string - ').concat(
  param_e));
  }
  var at = function () {
  function var_t(param_e) {
  if (!(this instanceof var_t)) return new var_t(param_e);
  if ("string" == typeof param_e) this.bytes = var_t.fromString(param_e).bytes;
  else {
  if (!var_T(param_e)) throw new var_E("Decimal128 must take a Buffer or string");
  if (16 !== param_e.byteLength) throw new var_E("Decimal128 must take a Buffer of 16 bytes");
  this.bytes = param_e;
  }
  }
  return var_t.fromString = function (param_e) {
  var var_r,
  flag_n = !1,
  flag_i = !1,
  flag_o = !1,
  num_a = 0,
  num_s = 0,
  num_u = 0,
  num_c = 0,
  num_l_1 = 0,
  list_f = [0],
  num_d = 0,
  num_h = 0,
  num_p = 0,
  num_v = 0,
  num_m = 0,
  num_y = 0,
  var_b = new var_W(0, 0),
  var_w_1 = new var_W(0, 0),
  num_A = 0;
  if (param_e.length >= 7e3) throw new var_E(param_e + " not a valid Decimal128 string");
  var var___1 = param_e.match(regex_X),
  var_S_1 = param_e.match(regex_K),
  var_O_1 = param_e.match(regex_J);
  if (!var___1 && !var_S_1 && !var_O_1 || 0 === param_e.length) throw new var_E(
  param_e + " not a valid Decimal128 string");
  if (var___1) {
  var var_x = var___1[2],
  var_k_1 = var___1[4],
  var_M_1 = var___1[5],
  var_T_1 = var___1[6];
  var_k_1 && void 0 === var_T_1 && ot(param_e, "missing exponent power"), var_k_1 &&
  void 0 === var_x && ot(param_e, "missing exponent base"), void 0 === var_k_1 &&
  (var_M_1 || var_T_1) && ot(param_e, "missing e before exponent");
  }
  if ("+" !== param_e[num_A] && "-" !== param_e[num_A] || (flag_n = "-" === param_e[num_A++]),
  !nt(param_e[num_A]) && "." !== param_e[num_A]) {
  if ("i" === param_e[num_A] || "I" === param_e[num_A]) return new var_t(var_g.from(
  flag_n ? tt : et));
  if ("N" === param_e[num_A]) return new var_t(var_g.from(var_Z));
  }
  for (;
  nt(param_e[num_A]) || "." === param_e[num_A];
  ) "." !== param_e[num_A] ? (num_d < 34 && ("0" !== param_e[num_A] ||
  flag_o) && (flag_o || (num_l_1 = num_s), flag_o = !0, list_f[num_h++] = parseInt(
  param_e[num_A], 10), num_d += 1), flag_o && (num_u += 1), flag_i &&
  (num_c += 1), num_s += 1, num_A += 1) : (flag_i && ot(param_e, "contains multiple periods"),
  flag_i = !0, num_A += 1);
  if (flag_i && !num_s) throw new var_E(param_e + " not a valid Decimal128 string");
  if ("e" === param_e[num_A] || "E" === param_e[num_A]) {
  var var_I_1 = param_e.substr(++num_A).match(rt);
  if (!var_I_1 || !var_I_1[2]) return new var_t(var_g.from(var_Z));
  num_m = parseInt(var_I_1[0], 10), num_A += var_I_1[0].length;
  }
  if (param_e[num_A]) return new var_t(var_g.from(var_Z));
  if (num_p = 0, num_d) {
  if (num_v = num_d - 1, 1 !== (num_a = num_u)) for (;
  0 === list_f[num_l_1 + num_a - 1];
  ) num_a -= 1;
  }
  else num_p = 0, num_v = 0, list_f[0] = 0, num_u = 1, num_d = 1, num_a = 0;
  for (num_m <= num_c && num_c - num_m > 16384 ? num_m = -6176 :
  num_m -= num_c;
  num_m > 6111;
  ) {
  if ((num_v += 1) - num_p > 34) {
  if (list_f.join("").match(/^0+$/)) {
  num_m = 6111;
  break;
  }
  ot(param_e, "overflow");
  }
  num_m -= 1;
  }
  for (;
  num_m < -6176 || num_d < num_u;
  ) {
  if (0 === num_v && num_a < num_d) {
  num_m = -6176, num_a = 0;
  break;
  }
  if (num_d < num_u ? num_u -= 1 : num_v -= 1, num_m < 6111) num_m += 1;
  else {
  if (list_f.join("").match(/^0+$/)) {
  num_m = 6111;
  break;
  }
  ot(param_e, "overflow");
  }
  }
  if (num_v - num_p + 1 < num_a) {
  var var_j_1 = num_s;
  flag_i && (num_l_1 += 1, var_j_1 += 1), flag_n && (num_l_1 += 1, var_j_1 += 1);
  var var_C_1 = parseInt(param_e[num_l_1 + num_v + 1], 10),
  num_B = 0;
  if (var_C_1 >= 5 && (num_B = 1, 5 === var_C_1)) for (num_B = list_f[num_v] % 2 == 1 ?
  1 : 0, num_y = num_l_1 + num_v + 2;
  num_y < var_j_1;
  num_y++) if (parseInt(param_e[num_y], 10)) {
  num_B = 1;
  break;
  }
  if (num_B) for (var var_U_1 = num_v;
  var_U_1 >= 0;
  var_U_1--) if (++list_f[var_U_1] > 9 && (list_f[var_U_1] = 0, 0 === var_U_1)) {
  if (!(num_m < 6111)) return new var_t(var_g.from(flag_n ? tt :
  et));
  num_m += 1, list_f[var_U_1] = 1;
  }
  }
  if (var_b = var_W.fromNumber(0), var_w_1 = var_W.fromNumber(0), 0 === num_a) var_b = var_W.fromNumber(
  0), var_w_1 = var_W.fromNumber(0);
  else if (num_v - num_p < 17) {
  var_U_1 = num_p;
  for (var_w_1 = var_W.fromNumber(list_f[var_U_1++]), var_b = new var_W(0, 0);
  var_U_1 <= num_v;
  var_U_1++) var_w_1 = (var_w_1 = var_w_1.multiply(var_W.fromNumber(10))).add(var_W.fromNumber(
  list_f[var_U_1]));
  }
  else {
  var_U_1 = num_p;
  for (var_b = var_W.fromNumber(list_f[var_U_1++]);
  var_U_1 <= num_v - 17;
  var_U_1++) var_b = (var_b = var_b.multiply(var_W.fromNumber(10))).add(var_W.fromNumber(
  list_f[var_U_1]));
  for (var_w_1 = var_W.fromNumber(list_f[var_U_1++]);
  var_U_1 <= num_v;
  var_U_1++) var_w_1 = (var_w_1 = var_w_1.multiply(var_W.fromNumber(10))).add(var_W.fromNumber(
  list_f[var_U_1]));
  }
  var var_P,
  var_N,
  var_D,
  var_R,
  var_L_1 = function (param_t_1, param_e_1) {
  if (!param_t_1 && !param_e_1) return {
  high: var_W.fromNumber(0),
  low: var_W.fromNumber(0)
  };
  var var_r_1 = param_t_1.shiftRightUnsigned(32),
  var_n = new var_W(param_t_1.getLowBits(), 0),
  var_i = param_e_1.shiftRightUnsigned(32),
  var_o = new var_W(param_e_1.getLowBits(), 0),
  var_a = var_r_1.multiply(var_i),
  var_s = var_r_1.multiply(var_o),
  var_u_1 = var_n.multiply(var_i),
  var_c = var_n.multiply(var_o);
  return var_a = var_a.add(var_s.shiftRightUnsigned(32)), var_s = new var_W(var_s.getLowBits(
  ), 0).add(var_u_1).add(var_c.shiftRightUnsigned(32)), {
  high: var_a = var_a.add(var_s.shiftRightUnsigned(32)),
  low: var_c = var_s.shiftLeft(32).add(new var_W(var_c.getLowBits(), 0))
  };
  }
  (var_b, var_W.fromString("100000000000000000"));
  var_L_1.low = var_L_1.low.add(var_w_1), var_P = var_L_1.low, var_N = var_w_1, var_D = var_P.high >>> 0,
  var_R = var_N.high >>> 0, (var_D < var_R || var_D === var_R &&
  var_P.low >>> 0 < var_N.low >>> 0) && (var_L_1.high = var_L_1.high.add(var_W.fromNumber(
  1))), var_r = num_m + 6176;
  var obj_q = {
  low: var_W.fromNumber(0),
  high: var_W.fromNumber(0)
  };
  var_L_1.high.shiftRightUnsigned(49).and(var_W.fromNumber(1)).equals(var_W.fromNumber(
  1)) ? (obj_q.high = obj_q.high.or(var_W.fromNumber(3).shiftLeft(61)), obj_q.high = obj_q.high.or(
  var_W.fromNumber(var_r).and(var_W.fromNumber(16383).shiftLeft(47))), obj_q.high = obj_q.high.or(
  var_L_1.high.and(var_W.fromNumber(0x7fffffffffff)))) : (obj_q.high = obj_q.high.or(
  var_W.fromNumber(16383 & var_r).shiftLeft(49)), obj_q.high = obj_q.high.or(var_L_1.high.and(
  var_W.fromNumber(562949953421311)))), obj_q.low = var_L_1.low, flag_n &&
  (obj_q.high = obj_q.high.or(var_W.fromString("9223372036854775808")));
  var var_F_1 = var_g.alloc(16);
  return num_A = 0, var_F_1[num_A++] = 255 & obj_q.low.low, var_F_1[num_A++] = obj_q.low.low >> 8 & 255,
  var_F_1[num_A++] = obj_q.low.low >> 16 & 255, var_F_1[num_A++] = obj_q.low.low >> 24 & 255,
  var_F_1[num_A++] = 255 & obj_q.low.high, var_F_1[num_A++] = obj_q.low.high >> 8 & 255,
  var_F_1[num_A++] = obj_q.low.high >> 16 & 255, var_F_1[num_A++] = obj_q.low.high >> 24 & 255,
  var_F_1[num_A++] = 255 & obj_q.high.low, var_F_1[num_A++] = obj_q.high.low >> 8 & 255,
  var_F_1[num_A++] = obj_q.high.low >> 16 & 255, var_F_1[num_A++] = obj_q.high.low >> 24 & 255,
  var_F_1[num_A++] = 255 & obj_q.high.high, var_F_1[num_A++] = obj_q.high.high >> 8 & 255,
  var_F_1[num_A++] = obj_q.high.high >> 16 & 255, var_F_1[num_A++] = obj_q.high.high >> 24 & 255,
  new var_t(var_F_1);
  }
  , var_t.prototype.toString = function () {
  for (var var_t_1, num_e = 0, var_r = new Array(36), num_n = 0;
  num_n < var_r.length;
  num_n++) var_r[num_n] = 0;
  var var_i,
  var_o,
  var_a,
  num_s = 0,
  flag_u = !1,
  obj_c = {
  parts: [0, 0, 0, 0]
  }
  ,
  list_l = [];
  num_s = 0;
  var var_f_1 = this.bytes,
  var_d_1 = var_f_1[num_s++] | var_f_1[num_s++] << 8 | var_f_1[num_s++] << 16 | var_f_1[num_s++] << 24,
  var_h_1 = var_f_1[num_s++] | var_f_1[num_s++] << 8 | var_f_1[num_s++] << 16 | var_f_1[num_s++] << 24,
  var_p = var_f_1[num_s++] | var_f_1[num_s++] << 8 | var_f_1[num_s++] << 16 | var_f_1[num_s++] << 24,
  var_v = var_f_1[num_s++] | var_f_1[num_s++] << 8 | var_f_1[num_s++] << 16 | var_f_1[num_s++] << 24;
  num_s = 0, {
  low: new var_W(var_d_1, var_h_1),
  high: new var_W(var_p, var_v)
  }
  .high.lessThan(var_W.ZERO) && list_l.push("-");
  var var_m = var_v >> 26 & 31;
  if (var_m >> 3 == 3) {
  if (30 === var_m) return list_l.join("") + "Infinity";
  if (31 === var_m) return "NaN";
  var_t_1 = var_v >> 15 & 16383, var_i = 8 + (var_v >> 14 & 1);
  }
  else var_i = var_v >> 14 & 7, var_t_1 = var_v >> 17 & 16383;
  var var_y_1 = var_t_1 - 6176;
  if (obj_c.parts[0] = (16383 & var_v) + ((15 & var_i) << 14), obj_c.parts[1] = var_p,
  obj_c.parts[2] = var_h_1, obj_c.parts[3] = var_d_1, 0 === obj_c.parts[0] &&
  0 === obj_c.parts[1] && 0 === obj_c.parts[2] && 0 === obj_c.parts[3]) flag_u = !0;
  else for (var_a = 3;
  var_a >= 0;
  var_a--) {
  var num_g = 0,
  var_b = it(obj_c);
  if (obj_c = var_b.quotient, num_g = var_b.rem.low) for (var_o = 8;
  var_o >= 0;
  var_o--) var_r[9 * var_a + var_o] = num_g % 10, num_g = Math.floor(num_g / 10);
  }
  if (flag_u) num_e = 1, var_r[num_s] = 0;
  else for (num_e = 36;
  !var_r[num_s];
  ) num_e -= 1, num_s += 1;
  var var_w_1 = num_e - 1 + var_y_1;
  if (var_w_1 >= 34 || var_w_1 <= -7 || var_y_1 > 0) {
  if (num_e > 34) return list_l.push("".concat(0)), var_y_1 > 0 ?
  list_l.push("E+".concat(var_y_1)) : var_y_1 < 0 && list_l.push("E".concat(var_y_1)),
  list_l.join("");
  list_l.push("".concat(var_r[num_s++])), (num_e -= 1) && list_l.push(".");
  for (num_n = 0;
  num_n < num_e;
  num_n++) list_l.push("".concat(var_r[num_s++]));
  list_l.push("E"), var_w_1 > 0 ? list_l.push("+".concat(var_w_1)) :
  list_l.push("".concat(var_w_1));
  }
  else if (var_y_1 >= 0) for (num_n = 0;
  num_n < num_e;
  num_n++) list_l.push("".concat(var_r[num_s++]));
  else {
  var var_A = num_e + var_y_1;
  if (var_A > 0) for (num_n = 0;
  num_n < var_A;
  num_n++) list_l.push("".concat(var_r[num_s++]));
  else list_l.push("0");
  for (list_l.push(".");
  var_A++ < 0;
  ) list_l.push("0");
  for (num_n = 0;
  num_n < num_e - Math.max(var_A - 1, 0);
  num_n++) list_l.push("".concat(var_r[num_s++]));
  }
  return list_l.join("");
  }
  , var_t.prototype.toJSON = function () {
  return {
  $numberDecimal: this.toString()
  };
  }
  , var_t.prototype.toExtendedJSON = function () {
  return {
  $numberDecimal: this.toString()
  };
  }
  , var_t.fromExtendedJSON = function (param_e) {
  return var_t.fromString(param_e.$numberDecimal);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  return 'new Decimal128("'.concat(this.toString(), '")');
  }
  , var_t;
  }
  ();
  Object.defineProperty(at.prototype, "_bsontype", {
  value: "Decimal128"
  }
  );
  var st = function () {
  function var_t(param_e) {
  if (!(this instanceof var_t)) return new var_t(param_e);
  param_e instanceof Number && (param_e = param_e.valueOf()), this.value = +param_e;
  }
  return var_t.prototype.valueOf = function () {
  return this.value;
  }
  , var_t.prototype.toJSON = function () {
  return this.value;
  }
  , var_t.prototype.toString = function (param_t_1) {
  return this.value.toString(param_t_1);
  }
  , var_t.prototype.toExtendedJSON = function (param_t_1) {
  return param_t_1 && (param_t_1.legacy || param_t_1.relaxed &&
  isFinite(this.value)) ? this.value : Object.is(Math.sign(this.value), -0) ?
  {
  $numberDouble: "-".concat(this.value.toFixed(1))
  }
  : {
  $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) :
  this.value.toString()
  };
  }
  , var_t.fromExtendedJSON = function (param_e, param_r) {
  var var_n = parseFloat(param_e.$numberDouble);
  return param_r && param_r.relaxed ? var_n : new var_t(var_n);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  var var_t_1 = this.toExtendedJSON();
  return "new Double(".concat(var_t_1.$numberDouble, ")");
  }
  , var_t;
  }
  ();
  Object.defineProperty(st.prototype, "_bsontype", {
  value: "Double"
  }
  );
  var ut = function () {
  function var_t(param_e) {
  if (!(this instanceof var_t)) return new var_t(param_e);
  param_e instanceof Number && (param_e = param_e.valueOf()), this.value = 0 | +param_e;
  }
  return var_t.prototype.valueOf = function () {
  return this.value;
  }
  , var_t.prototype.toString = function (param_t_1) {
  return this.value.toString(param_t_1);
  }
  , var_t.prototype.toJSON = function () {
  return this.value;
  }
  , var_t.prototype.toExtendedJSON = function (param_t_1) {
  return param_t_1 && (param_t_1.relaxed || param_t_1.legacy) ?
  this.value : {
  $numberInt: this.value.toString()
  };
  }
  , var_t.fromExtendedJSON = function (param_e, param_r) {
  return param_r && param_r.relaxed ? parseInt(param_e.$numberInt, 10) :
  new var_t(param_e.$numberInt);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  return "new Int32(".concat(this.valueOf(), ")");
  }
  , var_t;
  }
  ();
  Object.defineProperty(ut.prototype, "_bsontype", {
  value: "Int32"
  }
  );
  var ct = function () {
  function var_t() {
  if (!(this instanceof var_t)) return new var_t();
  }
  return var_t.prototype.toExtendedJSON = function () {
  return {
  $maxKey: 1
  };
  }
  , var_t.fromExtendedJSON = function () {
  return new var_t();
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  return "new MaxKey()";
  }
  , var_t;
  }
  ();
  Object.defineProperty(ct.prototype, "_bsontype", {
  value: "MaxKey"
  }
  );
  var lt = function () {
  function var_t() {
  if (!(this instanceof var_t)) return new var_t();
  }
  return var_t.prototype.toExtendedJSON = function () {
  return {
  $minKey: 1
  };
  }
  , var_t.fromExtendedJSON = function () {
  return new var_t();
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  return "new MinKey()";
  }
  , var_t;
  }
  ();
  Object.defineProperty(lt.prototype, "_bsontype", {
  value: "MinKey"
  }
  );
  var ft = new RegExp("^[0-9a-fA-F]{24}$"),
  dt = null,
  ht = Symbol("id"),
  pt = function () {
  function var_t(param_e) {
  if (!(this instanceof var_t)) return new var_t(param_e);
  var var_r;
  if ("object" == typeof param_e && param_e && "id" in param_e) {
  if ("string" != typeof param_e.id && !ArrayBuffer.isView(param_e.id)) throw new var_E(
  "Argument passed in must have an id that is of type string or Buffer");
  var_r = "toHexString" in param_e && "function" == typeof param_e.toHexString ?
  var_g.from(param_e.toHexString(), "hex") : param_e.id;
  }
  else var_r = param_e;
  if (null == var_r || "number" == typeof var_r) this[ht] = var_t.generate("number" == typeof var_r ?
  var_r : void 0);
  else if (ArrayBuffer.isView(var_r) && 12 === var_r.byteLength) this[ht] = var_r instanceof var_g ?
  var_r : var_U(var_r);
  else {
  if ("string" != typeof var_r) throw new var_E("Argument passed in does not match the accepted types");
  if (12 === var_r.length) {
  var var_n = var_g.from(var_r);
  if (12 !== var_n.byteLength) throw new var_E("Argument passed in must be a string of 12 bytes");
  this[ht] = var_n;
  }
  else {
  if (24 !== var_r.length || !ft.test(var_r)) throw new var_E("Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer");
  this[ht] = var_g.from(var_r, "hex");
  }
  }
  var_t.cacheHexString && (this.__id = this.id.toString("hex"));
  }
  return Object.defineProperty(var_t.prototype, "id", {
  get: function () {
  return this[ht];
  }
  ,
  set: function (param_e) {
  this[ht] = param_e, var_t.cacheHexString && (this.__id = param_e.toString("hex"));
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  ), Object.defineProperty(var_t.prototype, "generationTime", {
  get: function () {
  return this.id.readInt32BE(0);
  }
  ,
  set: function (param_t_1) {
  this.id.writeUInt32BE(param_t_1, 0);
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  ), var_t.prototype.toHexString = function () {
  if (var_t.cacheHexString && this.__id) return this.__id;
  var var_e = this.id.toString("hex");
  return var_t.cacheHexString && !this.__id && (this.__id = var_e), var_e;
  }
  , var_t.getInc = function () {
  return var_t.index = (var_t.index + 1) % 16777215;
  }
  , var_t.generate = function (param_e) {
  "number" != typeof param_e && (param_e = Math.floor(Date.now() / 1e3));
  var var_r = var_t.getInc(),
  var_n = var_g.alloc(12);
  return var_n.writeUInt32BE(param_e, 0), null === dt && (dt = var_k(5)), var_n[4] = dt[0],
  var_n[5] = dt[1], var_n[6] = dt[2], var_n[7] = dt[3], var_n[8] = dt[4], var_n[11] = 255 & var_r,
  var_n[10] = var_r >> 8 & 255, var_n[9] = var_r >> 16 & 255, var_n;
  }
  , var_t.prototype.toString = function (param_t_1) {
  return param_t_1 ? this.id.toString(param_t_1) : this.toHexString();
  }
  , var_t.prototype.toJSON = function () {
  return this.toHexString();
  }
  , var_t.prototype.equals = function (param_e) {
  if (null == param_e) return !1;
  if (param_e instanceof var_t) return this[ht][11] === param_e[ht][11] &&
  this[ht].equals(param_e[ht]);
  if ("string" == typeof param_e && var_t.isValid(param_e) &&
  12 === param_e.length && var_T(this.id)) return param_e === var_g.prototype.toString.call(
  this.id, "latin1");
  if ("string" == typeof param_e && var_t.isValid(param_e) &&
  24 === param_e.length) return param_e.toLowerCase() === this.toHexString();
  if ("string" == typeof param_e && var_t.isValid(param_e) &&
  12 === param_e.length) return var_g.from(param_e).equals(this.id);
  if ("object" == typeof param_e && "toHexString" in param_e &&
  "function" == typeof param_e.toHexString) {
  var var_r = param_e.toHexString(),
  var_n = this.toHexString().toLowerCase();
  return "string" == typeof var_r && var_r.toLowerCase() === var_n;
  }
  return !1;
  }
  , var_t.prototype.getTimestamp = function () {
  var var_t_1 = new Date(),
  var_e = this.id.readUInt32BE(0);
  return var_t_1.setTime(1e3 * Math.floor(var_e)), var_t_1;
  }
  , var_t.createPk = function () {
  return new var_t();
  }
  , var_t.createFromTime = function (param_e) {
  var var_r = var_g.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return var_r.writeUInt32BE(param_e, 0), new var_t(var_r);
  }
  , var_t.createFromHexString = function (param_e) {
  if (void 0 === param_e || null != param_e && 24 !== param_e.length) throw new var_E(
  "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
  return new var_t(var_g.from(param_e, "hex"));
  }
  , var_t.isValid = function (param_e) {
  if (null == param_e) return !1;
  try {
  return new var_t(param_e), !0;
  }
  catch (var_t_1) {
  return !1;
  }
  }
  , var_t.prototype.toExtendedJSON = function () {
  return this.toHexString ? {
  $oid: this.toHexString()
  }
  : {
  $oid: this.toString("hex")
  };
  }
  , var_t.fromExtendedJSON = function (param_e) {
  return new var_t(param_e.$oid);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t.prototype.inspect = function () {
  return 'new ObjectId("'.concat(this.toHexString(), '")');
  }
  , var_t.index = Math.floor(16777215 * Math.random()), var_t;
  }
  ();
  Object.defineProperty(pt.prototype, "generate", {
  value: var_B(function (param_t_1) {
  return pt.generate(param_t_1);
  }
  , "Please use the static `ObjectId.generate(time)` instead")
  }
  ), Object.defineProperty(pt.prototype, "getInc", {
  value: var_B(function () {
  return pt.getInc();
  }
  , "Please use the static `ObjectId.getInc()` instead")
  }
  ), Object.defineProperty(pt.prototype, "get_inc", {
  value: var_B(function () {
  return pt.getInc();
  }
  , "Please use the static `ObjectId.getInc()` instead")
  }
  ), Object.defineProperty(pt, "get_inc", {
  value: var_B(function () {
  return pt.getInc();
  }
  , "Please use the static `ObjectId.getInc()` instead")
  }
  ), Object.defineProperty(pt.prototype, "_bsontype", {
  value: "ObjectID"
  }
  );
  var vt = function () {
  function var_t(param_e, param_r) {
  if (!(this instanceof var_t)) return new var_t(param_e, param_r);
  if (this.pattern = param_e, this.options = (null != param_r ?
  param_r : "").split("").sort().join(""), -1 !== this.pattern.indexOf("\0")) throw new var__(
  "BSON Regex patterns cannot contain null bytes, found: ".concat(JSON.stringify(
  this.pattern)));
  if (-1 !== this.options.indexOf("\0")) throw new var__("BSON Regex options cannot contain null bytes, found: ".concat(
  JSON.stringify(this.options)));
  for (var num_n = 0;
  num_n < this.options.length;
  num_n++) if ("i" !== this.options[num_n] && "m" !== this.options[num_n] &&
  "x" !== this.options[num_n] && "l" !== this.options[num_n] &&
  "s" !== this.options[num_n] && "u" !== this.options[num_n]) throw new var__("The regular expression option [".concat(
  this.options[num_n], "] is not supported"));
  }
  return var_t.parseOptions = function (param_t_1) {
  return param_t_1 ? param_t_1.split("").sort().join("") : "";
  }
  , var_t.prototype.toExtendedJSON = function (param_t_1) {
  return (param_t_1 = param_t_1 || {
  }
  ).legacy ? {
  $regex: this.pattern,
  $options: this.options
  }
  : {
  $regularExpression: {
  pattern: this.pattern,
  options: this.options
  }
  };
  }
  , var_t.fromExtendedJSON = function (param_e) {
  if ("$regex" in param_e) {
  if ("string" == typeof param_e.$regex) return new var_t(param_e.$regex, var_t.parseOptions(
  param_e.$options));
  if ("BSONRegExp" === param_e.$regex._bsontype) return param_e;
  }
  if ("$regularExpression" in param_e) return new var_t(param_e.$regularExpression.pattern,
  var_t.parseOptions(param_e.$regularExpression.options));
  throw new var_E("Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(
  param_e)));
  }
  , var_t;
  }
  ();
  Object.defineProperty(vt.prototype, "_bsontype", {
  value: "BSONRegExp"
  }
  );
  var mt = function () {
  function var_t(param_e) {
  if (!(this instanceof var_t)) return new var_t(param_e);
  this.value = param_e;
  }
  return var_t.prototype.valueOf = function () {
  return this.value;
  }
  , var_t.prototype.toString = function () {
  return this.value;
  }
  , var_t.prototype.inspect = function () {
  return 'new BSONSymbol("'.concat(this.value, '")');
  }
  , var_t.prototype.toJSON = function () {
  return this.value;
  }
  , var_t.prototype.toExtendedJSON = function () {
  return {
  $symbol: this.value
  };
  }
  , var_t.fromExtendedJSON = function (param_e) {
  return new var_t(param_e.$symbol);
  }
  , var_t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_t;
  }
  ();
  Object.defineProperty(mt.prototype, "_bsontype", {
  value: "Symbol"
  }
  );
  var yt = function (param_t_1) {
  function var_e(param_r, param_n) {
  var var_i = this;
  return var_i instanceof var_e ? (var_i = var_W.isLong(param_r) ?
  param_t_1.call(this, param_r.low, param_r.high, !0) || this :
  var_C(param_r) && void 0 !== param_r.t && void 0 !== param_r.i ?
  param_t_1.call(this, param_r.i, param_r.t, !0) || this : param_t_1.call(this, param_r,
  param_n, !0) || this, Object.defineProperty(var_i, "_bsontype", {
  value: "Timestamp",
  writable: !1,
  configurable: !1,
  enumerable: !1
  }
  ), var_i) : new var_e(param_r, param_n);
  }
  return var_w(var_e, param_t_1), var_e.prototype.toJSON = function () {
  return {
  $timestamp: this.toString()
  };
  }
  , var_e.fromInt = function (param_t_2) {
  return new var_e(var_W.fromInt(param_t_2, !0));
  }
  , var_e.fromNumber = function (param_t_2) {
  return new var_e(var_W.fromNumber(param_t_2, !0));
  }
  , var_e.fromBits = function (param_t_2, param_r) {
  return new var_e(param_t_2, param_r);
  }
  , var_e.fromString = function (param_t_2, param_r) {
  return new var_e(var_W.fromString(param_t_2, !0, param_r));
  }
  , var_e.prototype.toExtendedJSON = function () {
  return {
  $timestamp: {
  t: this.high >>> 0,
  i: this.low >>> 0
  }
  };
  }
  , var_e.fromExtendedJSON = function (param_t_2) {
  return new var_e(param_t_2.$timestamp);
  }
  , var_e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
  return this.inspect();
  }
  , var_e.prototype.inspect = function () {
  return "new Timestamp({ t: ".concat(this.getHighBits(), ", i: ").concat(this.getLowBits(
  ), " })");
  }
  , var_e.MAX_VALUE = var_W.MAX_UNSIGNED_VALUE, var_e;
  }
  (var_W);
  function gt(param_t_1) {
  return var_C(param_t_1) && Reflect.has(param_t_1, "_bsontype") &&
  "string" == typeof param_t_1._bsontype;
  }
  var bt = {
  $oid: pt,
  $binary: var_F,
  $uuid: var_F,
  $symbol: mt,
  $numberInt: ut,
  $numberDecimal: at,
  $numberDouble: st,
  $numberLong: var_W,
  $minKey: lt,
  $maxKey: ct,
  $regex: vt,
  $regularExpression: vt,
  $timestamp: yt
  };
  function wt(param_t_1) {
  var var_e = param_t_1.toISOString();
  return 0 !== param_t_1.getUTCMilliseconds() ? var_e : var_e.slice(0, -5) + "Z";
  }
  function At(param_t_1, param_e) {
  if (("object" == typeof param_t_1 || "function" == typeof param_t_1) &&
  null !== param_t_1) {
  var var_r = param_e.seenObjects.findIndex(function (param_e_1) {
  return param_e_1.obj === param_t_1;
  }
  );
  if (-1 !== var_r) {
  var var_n = param_e.seenObjects.map(function (param_t_2) {
  return param_t_2.propertyName;
  }
  ),
  var_i = var_n.slice(0, var_r).map(function (param_t_2) {
  return "".concat(param_t_2, " -> ");
  }
  ).join(""),
  var_o = var_n[var_r],
  var_a = " -> " + var_n.slice(var_r + 1, var_n.length - 1).map(function (param_t_2) {
  return "".concat(param_t_2, " -> ");
  }
  ).join(""),
  var_s = var_n[var_n.length - 1],
  var_u_1 = " ".repeat(var_i.length + var_o.length / 2),
  var_c = "-".repeat(var_a.length + (var_o.length + var_s.length) / 2 - 1);
  throw new var_E("Converting circular structure to EJSON:\n" + "    ".concat(var_i).concat(
  var_o).concat(var_a).concat(var_s, "\n") + "    ".concat(var_u_1, "\\").concat(
  var_c, "/"));
  }
  param_e.seenObjects[param_e.seenObjects.length - 1].obj = param_t_1;
  }
  if (Array.isArray(param_t_1)) return function (param_t_2, param_e_1) {
  return param_t_2.map(function (param_t_3, param_r) {
  param_e_1.seenObjects.push({
  propertyName: "index ".concat(param_r),
  obj: null
  }
  );
  try {
  return At(param_t_3, param_e_1);
  }
  finally {
  param_e_1.seenObjects.pop();
  }
  }
  );
  }
  (param_t_1, param_e);
  if (void 0 === param_t_1) return null;
  if (param_t_1 instanceof Date || var_j(param_t_1)) {
  var var_l = param_t_1.getTime(),
  var_f_1 = var_l > -1 && var_l < 2534023188e5;
  return param_e.legacy ? param_e.relaxed && var_f_1 ? {
  $date: param_t_1.getTime()
  }
  : {
  $date: wt(param_t_1)
  }
  : param_e.relaxed && var_f_1 ? {
  $date: wt(param_t_1)
  }
  : {
  $date: {
  $numberLong: param_t_1.getTime().toString()
  }
  };
  }
  if (!("number" != typeof param_t_1 || param_e.relaxed && isFinite(param_t_1))) {
  if (Math.floor(param_t_1) === param_t_1) {
  var var_d_1 = param_t_1 >= -0x8000000000000000 && param_t_1 <= 0x8000000000000000;
  if (param_t_1 >= -2147483648 && param_t_1 <= 2147483647) return {
  $numberInt: param_t_1.toString()
  };
  if (var_d_1) return {
  $numberLong: param_t_1.toString()
  };
  }
  return {
  $numberDouble: param_t_1.toString()
  };
  }
  if (param_t_1 instanceof RegExp || var_I(param_t_1)) {
  var var_h_1 = param_t_1.flags;
  if (void 0 === var_h_1) {
  var var_p = param_t_1.toString().match(/[gimuy]*$/);
  var_p && (var_h_1 = var_p[0]);
  }
  return new vt(param_t_1.source, var_h_1).toExtendedJSON(param_e);
  }
  return null != param_t_1 && "object" == typeof param_t_1 ?
  function (param_t_2, param_e_1) {
  if (null == param_t_2 || "object" != typeof param_t_2) throw new var__("not an object instance");
  var var_r_1 = param_t_2._bsontype;
  if (void 0 === var_r_1) {
  var obj_n = {
  };
  for (var var_i_1 in param_t_2) {
  param_e_1.seenObjects.push({
  propertyName: var_i_1,
  obj: null
  }
  );
  try {
  var var_o_1 = At(param_t_2[var_i_1], param_e_1);
  "__proto__" === var_i_1 ? Object.defineProperty(obj_n, var_i_1, {
  value: var_o_1,
  writable: !0,
  enumerable: !0,
  configurable: !0
  }
  ) : obj_n[var_i_1] = var_o_1;
  }
  finally {
  param_e_1.seenObjects.pop();
  }
  }
  return obj_n;
  }
  if (gt(param_t_2)) {
  var var_a_1 = param_t_2;
  if ("function" != typeof var_a_1.toExtendedJSON) {
  var var_s_1 = Et[param_t_2._bsontype];
  if (!var_s_1) throw new var_E("Unrecognized or invalid _bsontype: " + param_t_2._bsontype);
  var_a_1 = var_s_1(var_a_1);
  }
  return "Code" === var_r_1 && var_a_1.scope ? var_a_1 = new var_Q(var_a_1.code,
  At(var_a_1.scope, param_e_1)) : "DBRef" === var_r_1 && var_a_1.oid &&
  (var_a_1 = new var_H(At(var_a_1.collection, param_e_1), At(var_a_1.oid, param_e_1),
  At(var_a_1.db, param_e_1), At(var_a_1.fields, param_e_1))), var_a_1.toExtendedJSON(
  param_e_1);
  }
  throw new var__("_bsontype must be a string, but was: " + typeof var_r_1);
  }
  (param_t_1, param_e) : param_t_1;
  }
  var _t,
  Et = {
  Binary: function (param_t_1) {
  return new var_F(param_t_1.value(), param_t_1.sub_type);
  }
  ,
  Code: function (param_t_1) {
  return new var_Q(param_t_1.code, param_t_1.scope);
  }
  ,
  DBRef: function (param_t_1) {
  return new var_H(param_t_1.collection || param_t_1.namespace, param_t_1.oid, param_t_1.db,
  param_t_1.fields);
  }
  ,
  Decimal128: function (param_t_1) {
  return new at(param_t_1.bytes);
  }
  ,
  Double: function (param_t_1) {
  return new st(param_t_1.value);
  }
  ,
  Int32: function (param_t_1) {
  return new ut(param_t_1.value);
  }
  ,
  Long: function (param_t_1) {
  return var_W.fromBits(null != param_t_1.low ? param_t_1.low :
  param_t_1.low_, null != param_t_1.low ? param_t_1.high : param_t_1.high_, null != param_t_1.low ?
  param_t_1.unsigned : param_t_1.unsigned_);
  }
  ,
  MaxKey: function () {
  return new ct();
  }
  ,
  MinKey: function () {
  return new lt();
  }
  ,
  ObjectID: function (param_t_1) {
  return new pt(param_t_1);
  }
  ,
  ObjectId: function (param_t_1) {
  return new pt(param_t_1);
  }
  ,
  BSONRegExp: function (param_t_1) {
  return new vt(param_t_1.pattern, param_t_1.options);
  }
  ,
  Symbol: function (param_t_1) {
  return new mt(param_t_1.value);
  }
  ,
  Timestamp: function (param_t_1) {
  return yt.fromBits(param_t_1.low, param_t_1.high);
  }
  };
  !function (param_t_1) {
  function var_e(param_t_2, param_e) {
  var var_r_1 = Object.assign({
  }
  , {
  relaxed: !0,
  legacy: !1
  }
  , param_e);
  return "boolean" == typeof var_r_1.relaxed && (var_r_1.strict = !var_r_1.relaxed),
  "boolean" == typeof var_r_1.strict && (var_r_1.relaxed = !var_r_1.strict), JSON.parse(
  param_t_2, function (param_t_3, param_e_1) {
  if (-1 !== param_t_3.indexOf("\0")) throw new var__("BSON Document field names cannot contain null bytes, found: ".concat(
  JSON.stringify(param_t_3)));
  return function var_t(param_e_2, param_r) {
  if (void 0 === param_r && (param_r = {
  }
  ), "number" == typeof param_e_2) {
  if (param_r.relaxed || param_r.legacy) return param_e_2;
  if (Math.floor(param_e_2) === param_e_2) {
  if (param_e_2 >= -2147483648 && param_e_2 <= 2147483647) return new ut(param_e_2);
  if (param_e_2 >= -0x8000000000000000 && param_e_2 <= 0x8000000000000000) return var_W.fromNumber(
  param_e_2);
  }
  return new st(param_e_2);
  }
  if (null == param_e_2 || "object" != typeof param_e_2) return param_e_2;
  if (param_e_2.$undefined) return null;
  for (var var_n = Object.keys(param_e_2).filter(function (param_t_4) {
  return param_t_4.startsWith("$") && null != param_e_2[param_t_4];
  }
  ), num_i = 0;
  num_i < var_n.length;
  num_i++) {
  var var_o = bt[var_n[num_i]];
  if (var_o) return var_o.fromExtendedJSON(param_e_2, param_r);
  }
  if (null != param_e_2.$date) {
  var var_a = param_e_2.$date,
  var_s = new Date();
  return param_r.legacy ? "number" == typeof var_a ? var_s.setTime(var_a) :
  "string" == typeof var_a && var_s.setTime(Date.parse(var_a)) :
  "string" == typeof var_a ? var_s.setTime(Date.parse(var_a)) :
  var_W.isLong(var_a) ? var_s.setTime(var_a.toNumber()) : "number" == typeof var_a &&
  param_r.relaxed && var_s.setTime(var_a), var_s;
  }
  if (null != param_e_2.$code) {
  var var_u_1 = Object.assign({
  }
  , param_e_2);
  return param_e_2.$scope && (var_u_1.$scope = var_t(param_e_2.$scope)), var_Q.fromExtendedJSON(
  param_e_2);
  }
  if (var_z(param_e_2) || param_e_2.$dbPointer) {
  var var_c = param_e_2.$ref ? param_e_2 : param_e_2.$dbPointer;
  if (var_c instanceof var_H) return var_c;
  var var_l = Object.keys(var_c).filter(function (param_t_4) {
  return param_t_4.startsWith("$");
  }
  ),
  flag_f = !0;
  if (var_l.forEach(function (param_t_4) {
  -1 === ["$ref", "$id", "$db"].indexOf(param_t_4) && (flag_f = !1);
  }
  ), flag_f) return var_H.fromExtendedJSON(var_c);
  }
  return param_e_2;
  }
  (param_e_1, var_r_1);
  }
  );
  }
  function var_r(param_t_2, param_e, param_r, param_n) {
  null != param_r && "object" == typeof param_r && (param_n = param_r, param_r = 0),
  null == param_e || "object" != typeof param_e || Array.isArray(param_e) ||
  (param_n = param_e, param_e = void 0, param_r = 0);
  var var_i = At(param_t_2, Object.assign({
  relaxed: !0,
  legacy: !1
  }
  , param_n, {
  seenObjects: [{
  propertyName: "(root)",
  obj: null
  }
  ]
  }
  ));
  return JSON.stringify(var_i, param_e, param_r);
  }
  param_t_1.parse = var_e, param_t_1.stringify = var_r, param_t_1.serialize = function (
  param_t_2, param_e) {
  return param_e = param_e || {
  }
  , JSON.parse(var_r(param_t_2, param_e));
  }
  , param_t_1.deserialize = function (param_t_2, param_r) {
  return param_r = param_r || {
  }
  , var_e(JSON.stringify(param_t_2), param_r);
  };
  }
  (_t || (_t = {
  }
  ));
  var St = var_O();
  St.Map ? St.Map : function () {
  function var_t(param_t_1) {
  void 0 === param_t_1 && (param_t_1 = []), this._keys = [], this._values = {
  };
  for (var num_e = 0;
  num_e < param_t_1.length;
  num_e++) if (null != param_t_1[num_e]) {
  var var_r = param_t_1[num_e],
  var_n = var_r[0],
  var_i = var_r[1];
  this._keys.push(var_n), this._values[var_n] = {
  v: var_i,
  i: this._keys.length - 1
  };
  }
  }
  var_t.prototype.clear = function () {
  this._keys = [], this._values = {
  };
  }
  , var_t.prototype.delete = function (param_t_1) {
  var var_e = this._values[param_t_1];
  return null != var_e && (delete this._values[param_t_1], this._keys.splice(var_e.i,
  1), !0);
  }
  , var_t.prototype.entries = function () {
  var var_t_1 = this,
  num_e = 0;
  return {
  next: function () {
  var var_r = var_t_1._keys[num_e++];
  return {
  value: void 0 !== var_r ? [var_r, var_t_1._values[var_r].v] :
  void 0,
  done: void 0 === var_r
  };
  }
  };
  }
  , var_t.prototype.forEach = function (param_t_1, param_e) {
  param_e = param_e || this;
  for (var num_r = 0;
  num_r < this._keys.length;
  num_r++) {
  var var_n = this._keys[num_r];
  param_t_1.call(param_e, this._values[var_n].v, var_n, param_e);
  }
  }
  , var_t.prototype.get = function (param_t_1) {
  return this._values[param_t_1] ? this._values[param_t_1].v :
  void 0;
  }
  , var_t.prototype.has = function (param_t_1) {
  return null != this._values[param_t_1];
  }
  , var_t.prototype.keys = function () {
  var var_t_1 = this,
  num_e = 0;
  return {
  next: function () {
  var var_r = var_t_1._keys[num_e++];
  return {
  value: void 0 !== var_r ? var_r : void 0,
  done: void 0 === var_r
  };
  }
  };
  }
  , var_t.prototype.set = function (param_t_1, param_e) {
  return this._values[param_t_1] ? (this._values[param_t_1].v = param_e, this) :
  (this._keys.push(param_t_1), this._values[param_t_1] = {
  v: param_e,
  i: this._keys.length - 1
  }
  , this);
  }
  , var_t.prototype.values = function () {
  var var_t_1 = this,
  num_e = 0;
  return {
  next: function () {
  var var_r = var_t_1._keys[num_e++];
  return {
  value: void 0 !== var_r ? var_t_1._values[var_r].v : void 0,
  done: void 0 === var_r
  };
  }
  };
  }
  , Object.defineProperty(var_t.prototype, "size", {
  get: function () {
  return this._keys.length;
  }
  ,
  enumerable: !1,
  configurable: !0
  }
  );
  }
  ();
  function Ot(param_t_1, param_e, param_r) {
  for (var num_n = 0, var_i = param_e;
  var_i < param_r;
  var_i += 1) {
  var var_o = param_t_1[var_i];
  if (num_n) {
  if (128 != (192 & var_o)) return !1;
  num_n -= 1;
  }
  else if (128 & var_o) if (192 == (224 & var_o)) num_n = 1;
  else if (224 == (240 & var_o)) num_n = 2;
  else {
  if (240 != (248 & var_o)) return !1;
  num_n = 3;
  }
  }
  return !num_n;
  }
  var xt = var_W.fromNumber(var_L),
  kt = var_W.fromNumber(var_q),
  Mt = {
  };
  function Tt(param_t_1, param_e, param_r) {
  var var_n = (param_e = null == param_e ? {
  }
  : param_e) && param_e.index ? param_e.index : 0,
  var_i = param_t_1[var_n] | param_t_1[var_n + 1] << 8 | param_t_1[var_n + 2] << 16 | param_t_1[var_n + 3] << 24;
  if (var_i < 5) throw new var__("bson size must be >= 5, is ".concat(var_i));
  if (param_e.allowObjectSmallerThanBufferSize && param_t_1.length < var_i) throw new var__(
  "buffer length ".concat(param_t_1.length, " must be >= bson size ").concat(var_i));
  if (!param_e.allowObjectSmallerThanBufferSize && param_t_1.length !== var_i) throw new var__(
  "buffer length ".concat(param_t_1.length, " must === bson size ").concat(var_i));
  if (var_i + var_n > param_t_1.byteLength) throw new var__("(bson size ".concat(
  var_i, " + options.index ").concat(var_n, " must be <= buffer length ").concat(
  param_t_1.byteLength, ")"));
  if (0 !== param_t_1[var_n + var_i - 1]) throw new var__("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  return function var_t(param_e_1, param_r_1, param_n, param_i) {
  void 0 === param_i && (param_i = !1);
  var var_o,
  var_a = null != param_n.evalFunctions && param_n.evalFunctions,
  var_s = null != param_n.cacheFunctions && param_n.cacheFunctions,
  var_u_1 = null == param_n.fieldsAsRaw ? null : param_n.fieldsAsRaw,
  var_c = null != param_n.raw && param_n.raw,
  var_l = "boolean" == typeof param_n.bsonRegExp && param_n.bsonRegExp,
  var_f_1 = null != param_n.promoteBuffers && param_n.promoteBuffers,
  var_d_1 = null == param_n.promoteLongs || param_n.promoteLongs,
  var_h_1 = null == param_n.promoteValues || param_n.promoteValues,
  var_p = null == param_n.validation ? {
  utf8: !0
  }
  : param_n.validation,
  flag_v = !0,
  var_m = new Set(),
  var_y_1 = var_p.utf8;
  if ("boolean" == typeof var_y_1) var_o = var_y_1;
  else {
  flag_v = !1;
  var var_b = Object.keys(var_y_1).map(function (param_t_2) {
  return var_y_1[param_t_2];
  }
  );
  if (0 === var_b.length) throw new var__("UTF-8 validation setting cannot be empty");
  if ("boolean" != typeof var_b[0]) throw new var__("Invalid UTF-8 validation option, must specify boolean values");
  if (var_o = var_b[0], !var_b.every(function (param_t_2) {
  return param_t_2 === var_o;
  }
  )) throw new var__("Invalid UTF-8 validation option - keys must be all true or all false");
  }
  if (!flag_v) for (var num_w = 0, var_E_1 = Object.keys(var_y_1);
  num_w < var_E_1.length;
  num_w++) {
  var var_S_1 = var_E_1[num_w];
  var_m.add(var_S_1);
  }
  var var_O_1 = param_r_1;
  if (param_e_1.length < 5) throw new var__("corrupt bson message < 5 bytes long");
  var var_x = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24;
  if (var_x < 5 || var_x > param_e_1.length) throw new var__("corrupt bson message");
  var var_k_1 = param_i ? [] : {
  }
  ,
  num_M = 0,
  var_T_1 = !param_i && null,
  var_I_1 = new DataView(param_e_1.buffer, param_e_1.byteOffset, param_e_1.byteLength);
  for (;;
  ) {
  var var_j_1 = param_e_1[param_r_1++];
  if (0 === var_j_1) break;
  for (var var_C_1 = param_r_1;
  0 !== param_e_1[var_C_1] && var_C_1 < param_e_1.length;
  ) var_C_1++;
  if (var_C_1 >= param_e_1.byteLength) throw new var__("Bad BSON Document: illegal CString");
  var var_B_1 = param_i ? num_M++ : param_e_1.toString("utf8", param_r_1, var_C_1),
  flag_U = !0;
  flag_U = flag_v || var_m.has(var_B_1) ? var_o : !var_o, !1 !== var_T_1 &&
  "$" === var_B_1[0] && (var_T_1 = It.test(var_B_1));
  var var_P = void 0;
  if (param_r_1 = var_C_1 + 1, 2 === var_j_1) {
  if ((bt = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) <= 0 ||
  bt > param_e_1.length - param_r_1 || 0 !== param_e_1[param_r_1 + bt - 1]) throw new var__(
  "bad string length in bson");
  var_P = Ct(param_e_1, param_r_1, param_r_1 + bt - 1, flag_U), param_r_1 += bt;
  }
  else if (7 === var_j_1) {
  var var_N = var_g.alloc(12);
  param_e_1.copy(var_N, 0, param_r_1, param_r_1 + 12), var_P = new pt(var_N), param_r_1 += 12;
  }
  else if (16 === var_j_1 && !1 === var_h_1) var_P = new ut(param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24);
  else if (16 === var_j_1) var_P = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24;
  else if (1 === var_j_1 && !1 === var_h_1) var_P = new st(var_I_1.getFloat64(param_r_1,
  !0)), param_r_1 += 8;
  else if (1 === var_j_1) var_P = var_I_1.getFloat64(param_r_1, !0), param_r_1 += 8;
  else if (9 === var_j_1) {
  var var_D = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24,
  var_R = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24;
  var_P = new Date(new var_W(var_D, var_R).toNumber());
  }
  else if (8 === var_j_1) {
  if (0 !== param_e_1[param_r_1] && 1 !== param_e_1[param_r_1]) throw new var__(
  "illegal boolean type value");
  var_P = 1 === param_e_1[param_r_1++];
  }
  else if (3 === var_j_1) {
  var var_L_1 = param_r_1;
  if ((var_G_1 = param_e_1[param_r_1] | param_e_1[param_r_1 + 1] << 8 | param_e_1[param_r_1 + 2] << 16 | param_e_1[param_r_1 + 3] << 24) <= 0 ||
  var_G_1 > param_e_1.length - param_r_1) throw new var__("bad embedded document length in bson");
  if (var_c) var_P = param_e_1.slice(param_r_1, param_r_1 + var_G_1);
  else {
  var var_q_1 = param_n;
  flag_v || (var_q_1 = fn_A(fn_A({
  }
  , param_n), {
  validation: {
  utf8: flag_U
  }
  }
  )), var_P = var_t(param_e_1, var_L_1, var_q_1, !1);
  }
  param_r_1 += var_G_1;
  }
  else if (4 === var_j_1) {
  var_L_1 = param_r_1;
  var var_G_1 = param_e_1[param_r_1] | param_e_1[param_r_1 + 1] << 8 | param_e_1[param_r_1 + 2] << 16 | param_e_1[param_r_1 + 3] << 24,
  var_V_1 = param_n,
  var_$ = param_r_1 + var_G_1;
  if (var_u_1 && var_u_1[var_B_1]) {
  for (var var_Y in var_V_1 = {
  }
  , param_n) var_V_1[var_Y] = param_n[var_Y];
  var_V_1.raw = !0;
  }
  if (flag_v || (var_V_1 = fn_A(fn_A({
  }
  , var_V_1), {
  validation: {
  utf8: flag_U
  }
  }
  )), var_P = var_t(param_e_1, var_L_1, var_V_1, !0), 0 !== param_e_1[(param_r_1 += var_G_1) - 1]) throw new var__(
  "invalid array terminator byte");
  if (param_r_1 !== var_$) throw new var__("corrupted array bson");
  }
  else if (6 === var_j_1) var_P = void 0;
  else if (10 === var_j_1) var_P = null;
  else if (18 === var_j_1) {
  var_D = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24,
  var_R = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24;
  var var_X = new var_W(var_D, var_R);
  var_P = var_d_1 && !0 === var_h_1 && var_X.lessThanOrEqual(xt) &&
  var_X.greaterThanOrEqual(kt) ? var_X.toNumber() : var_X;
  }
  else if (19 === var_j_1) {
  var var_K = var_g.alloc(16);
  param_e_1.copy(var_K, 0, param_r_1, param_r_1 + 16), param_r_1 += 16;
  var var_J = new at(var_K);
  var_P = "toObject" in var_J && "function" == typeof var_J.toObject ?
  var_J.toObject() : var_J;
  }
  else if (5 === var_j_1) {
  var var_Z_1 = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24,
  tt = var_Z_1,
  et = param_e_1[param_r_1++];
  if (var_Z_1 < 0) throw new var__("Negative binary type element size found");
  if (var_Z_1 > param_e_1.byteLength) throw new var__("Binary type size larger than document size");
  if (null != param_e_1.slice) {
  if (et === var_F.SUBTYPE_BYTE_ARRAY) {
  if ((var_Z_1 = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) < 0) throw new var__(
  "Negative binary type element size found for subtype 0x02");
  if (var_Z_1 > tt - 4) throw new var__("Binary type with subtype 0x02 contains too long binary size");
  if (var_Z_1 < tt - 4) throw new var__("Binary type with subtype 0x02 contains too short binary size");
  }
  var_f_1 && var_h_1 ? var_P = param_e_1.slice(param_r_1, param_r_1 + var_Z_1) :
  (var_P = new var_F(param_e_1.slice(param_r_1, param_r_1 + var_Z_1), et), 4 === et &&
  (var_P = var_P.toUUID()));
  }
  else {
  var rt = var_g.alloc(var_Z_1);
  if (et === var_F.SUBTYPE_BYTE_ARRAY) {
  if ((var_Z_1 = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) < 0) throw new var__(
  "Negative binary type element size found for subtype 0x02");
  if (var_Z_1 > tt - 4) throw new var__("Binary type with subtype 0x02 contains too long binary size");
  if (var_Z_1 < tt - 4) throw new var__("Binary type with subtype 0x02 contains too short binary size");
  }
  for (var_C_1 = 0;
  var_C_1 < var_Z_1;
  var_C_1++) rt[var_C_1] = param_e_1[param_r_1 + var_C_1];
  var_P = var_f_1 && var_h_1 ? rt : 4 === et ? new var_F(param_e_1.slice(param_r_1,
  param_r_1 + var_Z_1), et).toUUID() : new var_F(param_e_1.slice(param_r_1, param_r_1 + var_Z_1),
  et);
  }
  param_r_1 += var_Z_1;
  }
  else if (11 === var_j_1 && !1 === var_l) {
  for (var_C_1 = param_r_1;
  0 !== param_e_1[var_C_1] && var_C_1 < param_e_1.length;
  ) var_C_1++;
  if (var_C_1 >= param_e_1.length) throw new var__("Bad BSON Document: illegal CString");
  var nt = param_e_1.toString("utf8", param_r_1, var_C_1);
  for (var_C_1 = param_r_1 = var_C_1 + 1;
  0 !== param_e_1[var_C_1] && var_C_1 < param_e_1.length;
  ) var_C_1++;
  if (var_C_1 >= param_e_1.length) throw new var__("Bad BSON Document: illegal CString");
  var it = param_e_1.toString("utf8", param_r_1, var_C_1);
  param_r_1 = var_C_1 + 1;
  var ot = new Array(it.length);
  for (var_C_1 = 0;
  var_C_1 < it.length;
  var_C_1++) switch (it[var_C_1]) {
  case "m":
  ot[var_C_1] = "m";
  break;
  case "s":
  ot[var_C_1] = "g";
  break;
  case "i":
  ot[var_C_1] = "i";
  }
  var_P = new RegExp(nt, ot.join(""));
  }
  else if (11 === var_j_1 && !0 === var_l) {
  for (var_C_1 = param_r_1;
  0 !== param_e_1[var_C_1] && var_C_1 < param_e_1.length;
  ) var_C_1++;
  if (var_C_1 >= param_e_1.length) throw new var__("Bad BSON Document: illegal CString");
  nt = param_e_1.toString("utf8", param_r_1, var_C_1);
  for (var_C_1 = param_r_1 = var_C_1 + 1;
  0 !== param_e_1[var_C_1] && var_C_1 < param_e_1.length;
  ) var_C_1++;
  if (var_C_1 >= param_e_1.length) throw new var__("Bad BSON Document: illegal CString");
  it = param_e_1.toString("utf8", param_r_1, var_C_1);
  param_r_1 = var_C_1 + 1, var_P = new vt(nt, it);
  }
  else if (14 === var_j_1) {
  if ((bt = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) <= 0 ||
  bt > param_e_1.length - param_r_1 || 0 !== param_e_1[param_r_1 + bt - 1]) throw new var__(
  "bad string length in bson");
  var ft = Ct(param_e_1, param_r_1, param_r_1 + bt - 1, flag_U);
  var_P = var_h_1 ? ft : new mt(ft), param_r_1 += bt;
  }
  else if (17 === var_j_1) {
  var_D = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24,
  var_R = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24;
  var_P = new yt(var_D, var_R);
  }
  else if (255 === var_j_1) var_P = new lt();
  else if (127 === var_j_1) var_P = new ct();
  else if (13 === var_j_1) {
  if ((bt = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) <= 0 ||
  bt > param_e_1.length - param_r_1 || 0 !== param_e_1[param_r_1 + bt - 1]) throw new var__(
  "bad string length in bson");
  var dt = Ct(param_e_1, param_r_1, param_r_1 + bt - 1, flag_U);
  var_P = var_a ? var_s ? jt(dt, Mt, var_k_1) : jt(dt) : new var_Q(dt), param_r_1 += bt;
  }
  else if (15 === var_j_1) {
  var ht = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24;
  if (ht < 13) throw new var__("code_w_scope total size shorter minimum expected length");
  if ((bt = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) <= 0 ||
  bt > param_e_1.length - param_r_1 || 0 !== param_e_1[param_r_1 + bt - 1]) throw new var__(
  "bad string length in bson");
  dt = Ct(param_e_1, param_r_1, param_r_1 + bt - 1, flag_U), var_L_1 = param_r_1 += bt,
  var_G_1 = param_e_1[param_r_1] | param_e_1[param_r_1 + 1] << 8 | param_e_1[param_r_1 + 2] << 16 | param_e_1[param_r_1 + 3] << 24;
  var gt = var_t(param_e_1, var_L_1, param_n, !1);
  if (param_r_1 += var_G_1, ht < 8 + var_G_1 + bt) throw new var__("code_w_scope total size is too short, truncating scope");
  if (ht > 8 + var_G_1 + bt) throw new var__("code_w_scope total size is too long, clips outer document");
  var_a ? (var_P = var_s ? jt(dt, Mt, var_k_1) : jt(dt)).scope = gt :
  var_P = new var_Q(dt, gt);
  }
  else {
  if (12 !== var_j_1) throw new var__("Detected unknown BSON type ".concat(var_j_1.toString(
  16), ' for fieldname "').concat(var_B_1, '"'));
  var bt;
  if ((bt = param_e_1[param_r_1++] | param_e_1[param_r_1++] << 8 | param_e_1[param_r_1++] << 16 | param_e_1[param_r_1++] << 24) <= 0 ||
  bt > param_e_1.length - param_r_1 || 0 !== param_e_1[param_r_1 + bt - 1]) throw new var__(
  "bad string length in bson");
  if (null != var_p && var_p.utf8 && !Ot(param_e_1, param_r_1, param_r_1 + bt - 1)) throw new var__(
  "Invalid UTF-8 string in BSON document");
  var wt = param_e_1.toString("utf8", param_r_1, param_r_1 + bt - 1);
  param_r_1 += bt;
  var At = var_g.alloc(12);
  param_e_1.copy(At, 0, param_r_1, param_r_1 + 12);
  var_N = new pt(At);
  param_r_1 += 12, var_P = new var_H(wt, var_N);
  }
  "__proto__" === var_B_1 ? Object.defineProperty(var_k_1, var_B_1, {
  value: var_P,
  writable: !0,
  enumerable: !0,
  configurable: !0
  }
  ) : var_k_1[var_B_1] = var_P;
  }
  if (var_x !== param_r_1 - var_O_1) {
  if (param_i) throw new var__("corrupt array bson");
  throw new var__("corrupt object bson");
  }
  if (!var_T_1) return var_k_1;
  if (var_z(var_k_1)) {
  var _t = Object.assign({
  }
  , var_k_1);
  return delete _t.$ref, delete _t.$id, delete _t.$db, new var_H(var_k_1.$ref, var_k_1.$id,
  var_k_1.$db, _t);
  }
  return var_k_1;
  }
  (param_t_1, var_n, param_e, param_r);
  }
  var It = /^\$ref$|^\$id$|^\$db$/;
  function jt(param_t_1, param_e, param_r) {
  return param_e ? (null == param_e[param_t_1] && (param_e[param_t_1] = new Function(
  param_t_1)), param_e[param_t_1].bind(param_r)) : new Function(param_t_1);
  }
  function Ct(param_t_1, param_e, param_r, param_n) {
  var var_i = param_t_1.toString("utf8", param_e, param_r);
  if (param_n) for (var num_o = 0;
  num_o < var_i.length;
  num_o++) if (65533 === var_i.charCodeAt(num_o)) {
  if (!Ot(param_t_1, param_e, param_r)) throw new var__("Invalid UTF-8 string in BSON document");
  break;
  }
  return var_i;
  }
  new Set(["$db", "$ref", "$id", "$clusterTime"]);
  var Bt = new Uint8Array(8);
  new DataView(Bt.buffer, Bt.byteOffset, Bt.byteLength);
  var_g.alloc(17825792);
  function Ut(param_t_1, param_e) {
  return void 0 === param_e && (param_e = {
  }
  ), Tt(param_t_1 instanceof var_g ? param_t_1 : var_U(param_t_1), param_e);
  }
  }
  ).call(this, requireFn(13));
  };
