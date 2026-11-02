// Module 27 [utilities] - Stream / runtime utility component (ieee754-buffer)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
  var dep_helper_99 = requireFn(99);
  var dep_helper_100 = requireFn(100);
  var dep_helper_101 = requireFn(101);
  function var_a() {
  if (var_c.TYPED_ARRAY_SUPPORT) {
  return 2147483647;
  }
  else {
  return 1073741823;
  }
  }
  function var_s(param_e_1, param_t) {
  if (var_a() < param_t) {
  throw new RangeError("Invalid typed array length");
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  (param_e_1 = new Uint8Array(param_t)).__proto__ = var_c.prototype;
  }
  else {
  if (param_e_1 === null) {
  param_e_1 = new var_c(param_t);
  }
  param_e_1.length = param_t;
  }
  return param_e_1;
  }
  function var_c(param_e_1, param_t, param_r) {
  if (!var_c.TYPED_ARRAY_SUPPORT && !(this instanceof var_c)) {
  return new var_c(param_e_1, param_t, param_r);
  }
  if (typeof param_e_1 == "number") {
  if (typeof param_t == "string") {
  throw new Error("If encoding is specified then the first argument must be a string");
  }
  return var_d(this, param_e_1);
  }
  return var_u(this, param_e_1, param_t, param_r);
  }
  function var_u(param_e_1, param_t, param_r, param_n) {
  if (typeof param_t == "number") {
  throw new TypeError("\"value\" argument must not be a number");
  }
  if (typeof ArrayBuffer != "undefined" && param_t instanceof ArrayBuffer) {
  return function (param_e_2, param_t_1, param_r_1, param_n_1) {
  param_t_1.byteLength;
  if (param_r_1 < 0 || param_t_1.byteLength < param_r_1) {
  throw new RangeError("'offset' is out of bounds");
  }
  if (param_t_1.byteLength < param_r_1 + (param_n_1 || 0)) {
  throw new RangeError("'length' is out of bounds");
  }
  param_t_1 = param_r_1 === undefined && param_n_1 === undefined ?
  new Uint8Array(param_t_1) : param_n_1 === undefined ? new Uint8Array(param_t_1,
  param_r_1) : new Uint8Array(param_t_1, param_r_1, param_n_1);
  if (var_c.TYPED_ARRAY_SUPPORT) {
  (param_e_2 = param_t_1).__proto__ = var_c.prototype;
  }
  else {
  param_e_2 = var_p(param_e_2, param_t_1);
  }
  return param_e_2;
  }
  (param_e_1, param_t, param_r, param_n);
  }
  else if (typeof param_t == "string") {
  return function (param_e_2, param_t_1, param_r_1) {
  if (typeof param_r_1 != "string" || param_r_1 === "") {
  param_r_1 = "utf8";
  }
  if (!var_c.isEncoding(param_r_1)) {
  throw new TypeError("\"encoding\" must be a valid string encoding");
  }
  var var_n = var_h(param_t_1, param_r_1) | 0;
  var var_o = (param_e_2 = var_s(param_e_2, var_n)).write(param_t_1, param_r_1);
  if (var_o !== var_n) {
  param_e_2 = param_e_2.slice(0, var_o);
  }
  return param_e_2;
  }
  (param_e_1, param_t, param_r);
  }
  else {
  return function (param_e_2, param_t_1) {
  if (var_c.isBuffer(param_t_1)) {
  var var_r = var_f(param_t_1.length) | 0;
  if ((param_e_2 = var_s(param_e_2, var_r)).length !== 0) {
  param_t_1.copy(param_e_2, 0, 0, var_r);
  }
  return param_e_2;
  }
  if (param_t_1) {
  if (typeof ArrayBuffer != "undefined" && param_t_1.buffer instanceof ArrayBuffer ||
  "length" in param_t_1) {
  if (typeof param_t_1.length != "number" || (var_n = param_t_1.length) != var_n) {
  return var_s(param_e_2, 0);
  }
  else {
  return var_p(param_e_2, param_t_1);
  }
  }
  if (param_t_1.type === "Buffer" && dep_helper_101(param_t_1.data)) {
  return var_p(param_e_2, param_t_1.data);
  }
  }
  var var_n;
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }
  (param_e_1, param_t);
  }
  }
  function var_l(param_e_1) {
  if (typeof param_e_1 != "number") {
  throw new TypeError("\"size\" argument must be a number");
  }
  if (param_e_1 < 0) {
  throw new RangeError("\"size\" argument must not be negative");
  }
  }
  function var_d(param_e_1, param_t) {
  var_l(param_t);
  param_e_1 = var_s(param_e_1, param_t < 0 ? 0 : var_f(param_t) | 0);
  if (!var_c.TYPED_ARRAY_SUPPORT) {
  for (var num_r = 0;
  num_r < param_t;
  ++num_r) {
  param_e_1[num_r] = 0;
  }
  }
  return param_e_1;
  }
  function var_p(param_e_1, param_t) {
  var var_r = param_t.length < 0 ? 0 : var_f(param_t.length) | 0;
  param_e_1 = var_s(param_e_1, var_r);
  for (var num_n = 0;
  num_n < var_r;
  num_n += 1) {
  param_e_1[num_n] = param_t[num_n] & 255;
  }
  return param_e_1;
  }
  function var_f(param_e_1) {
  if (param_e_1 >= var_a()) {
  throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + var_a(
  ).toString(16) + " bytes");
  }
  return param_e_1 | 0;
  }
  function var_h(param_e_1, param_t) {
  if (var_c.isBuffer(param_e_1)) {
  return param_e_1.length;
  }
  if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" &&
  (ArrayBuffer.isView(param_e_1) || param_e_1 instanceof ArrayBuffer)) {
  return param_e_1.byteLength;
  }
  if (typeof param_e_1 != "string") {
  param_e_1 = "" + param_e_1;
  }
  var var_r = param_e_1.length;
  if (var_r === 0) {
  return 0;
  }
  var flag_n = false;
  while (true) {
  switch (param_t) {
  case "ascii":
  case "latin1":
  case "binary":
  return var_r;
  case "utf8":
  case "utf-8":
  case undefined:
  return var_j(param_e_1).length;
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return var_r * 2;
  case "hex":
  return var_r >>> 1;
  case "base64":
  return var_q(param_e_1).length;
  default:
  if (flag_n) {
  return var_j(param_e_1).length;
  }
  param_t = ("" + param_t).toLowerCase();
  flag_n = true;
  }
  }
  }
  function var_m(param_e_1, param_t, param_r) {
  var flag_n = false;
  if (param_t === undefined || param_t < 0) {
  param_t = 0;
  }
  if (param_t > this.length) {
  return "";
  }
  if (param_r === undefined || param_r > this.length) {
  param_r = this.length;
  }
  if (param_r <= 0) {
  return "";
  }
  if ((param_r >>>= 0) <= (param_t >>>= 0)) {
  return "";
  }
  for (param_e_1 ||= "utf8";;
  ) {
  switch (param_e_1) {
  case "hex":
  return var_S(this, param_t, param_r);
  case "utf8":
  case "utf-8":
  return var_A(this, param_t, param_r);
  case "ascii":
  return var_C(this, param_t, param_r);
  case "latin1":
  case "binary":
  return var_x(this, param_t, param_r);
  case "base64":
  return var_k(this, param_t, param_r);
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return var_O(this, param_t, param_r);
  default:
  if (flag_n) {
  throw new TypeError("Unknown encoding: " + param_e_1);
  }
  param_e_1 = (param_e_1 + "").toLowerCase();
  flag_n = true;
  }
  }
  }
  function var_g(param_e_1, param_t, param_r) {
  var var_n = param_e_1[param_t];
  param_e_1[param_t] = param_e_1[param_r];
  param_e_1[param_r] = var_n;
  }
  function var_v(param_e_1, param_t, param_r, param_n, param_o) {
  if (param_e_1.length === 0) {
  return -1;
  }
  if (typeof param_r == "string") {
  param_n = param_r;
  param_r = 0;
  }
  else if (param_r > 2147483647) {
  param_r = 2147483647;
  }
  else if (param_r < -2147483648) {
  param_r = -2147483648;
  }
  param_r = +param_r;
  if (isNaN(param_r)) {
  param_r = param_o ? 0 : param_e_1.length - 1;
  }
  if (param_r < 0) {
  param_r = param_e_1.length + param_r;
  }
  if (param_r >= param_e_1.length) {
  if (param_o) {
  return -1;
  }
  param_r = param_e_1.length - 1;
  }
  else if (param_r < 0) {
  if (!param_o) {
  return -1;
  }
  param_r = 0;
  }
  if (typeof param_t == "string") {
  param_t = var_c.from(param_t, param_n);
  }
  if (var_c.isBuffer(param_t)) {
  if (param_t.length === 0) {
  return -1;
  }
  else {
  return var_y(param_e_1, param_t, param_r, param_n, param_o);
  }
  }
  if (typeof param_t == "number") {
  param_t &= 255;
  if (var_c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
  if (param_o) {
  return Uint8Array.prototype.indexOf.call(param_e_1, param_t, param_r);
  }
  else {
  return Uint8Array.prototype.lastIndexOf.call(param_e_1, param_t, param_r);
  }
  }
  else {
  return var_y(param_e_1, [param_t], param_r, param_n, param_o);
  }
  }
  throw new TypeError("val must be string, number or Buffer");
  }
  function var_y(param_e_1, param_t, param_r, param_n, param_o) {
  var var_i;
  var num_a = 1;
  var var_s_1 = param_e_1.length;
  var var_c_1 = param_t.length;
  if (param_n !== undefined && ((param_n = String(param_n).toLowerCase()) === "ucs2" ||
  param_n === "ucs-2" || param_n === "utf16le" || param_n === "utf-16le")) {
  if (param_e_1.length < 2 || param_t.length < 2) {
  return -1;
  }
  num_a = 2;
  var_s_1 /= 2;
  var_c_1 /= 2;
  param_r /= 2;
  }
  function var_u_1(param_e_2, param_t_1) {
  if (num_a === 1) {
  return param_e_2[param_t_1];
  }
  else {
  return param_e_2.readUInt16BE(param_t_1 * num_a);
  }
  }
  if (param_o) {
  var var_l_1 = -1;
  for (var_i = param_r;
  var_i < var_s_1;
  var_i++) {
  if (var_u_1(param_e_1, var_i) === var_u_1(param_t, var_l_1 === -1 ?
  0 : var_i - var_l_1)) {
  if (var_l_1 === -1) {
  var_l_1 = var_i;
  }
  if (var_i - var_l_1 + 1 === var_c_1) {
  return var_l_1 * num_a;
  }
  }
  else {
  if (var_l_1 !== -1) {
  var_i -= var_i - var_l_1;
  }
  var_l_1 = -1;
  }
  }
  }
  else {
  if (param_r + var_c_1 > var_s_1) {
  param_r = var_s_1 - var_c_1;
  }
  var_i = param_r;
  for (;
  var_i >= 0;
  var_i--) {
  var flag_d = true;
  for (var num_p = 0;
  num_p < var_c_1;
  num_p++) {
  if (var_u_1(param_e_1, var_i + num_p) !== var_u_1(param_t, num_p)) {
  flag_d = false;
  break;
  }
  }
  if (flag_d) {
  return var_i;
  }
  }
  }
  return -1;
  }
  function var__(param_e_1, param_t, param_r, param_n) {
  param_r = Number(param_r) || 0;
  var var_o = param_e_1.length - param_r;
  if (param_n) {
  if ((param_n = Number(param_n)) > var_o) {
  param_n = var_o;
  }
  }
  else {
  param_n = var_o;
  }
  var var_i = param_t.length;
  if (var_i % 2 != 0) {
  throw new TypeError("Invalid hex string");
  }
  if (param_n > var_i / 2) {
  param_n = var_i / 2;
  }
  for (var num_a = 0;
  num_a < param_n;
  ++num_a) {
  var var_s_1 = parseInt(param_t.substr(num_a * 2, 2), 16);
  if (isNaN(var_s_1)) {
  return num_a;
  }
  param_e_1[param_r + num_a] = var_s_1;
  }
  return num_a;
  }
  function var_b(param_e_1, param_t, param_r, param_n) {
  return var_H(var_j(param_t, param_e_1.length - param_r), param_e_1, param_r, param_n);
  }
  function var_w(param_e_1, param_t, param_r, param_n) {
  return var_H(function (param_e_2) {
  var list_t = [];
  for (var num_r = 0;
  num_r < param_e_2.length;
  ++num_r) {
  list_t.push(param_e_2.charCodeAt(num_r) & 255);
  }
  return list_t;
  }
  (param_t), param_e_1, param_r, param_n);
  }
  function var_E(param_e_1, param_t, param_r, param_n) {
  return var_w(param_e_1, param_t, param_r, param_n);
  }
  function var_D(param_e_1, param_t, param_r, param_n) {
  return var_H(var_q(param_t), param_e_1, param_r, param_n);
  }
  function var_T(param_e_1, param_t, param_r, param_n) {
  return var_H(function (param_e_2, param_t_1) {
  var var_r;
  var var_n;
  var var_o;
  var list_i = [];
  for (var num_a = 0;
  num_a < param_e_2.length && !((param_t_1 -= 2) < 0);
  ++num_a) {
  var_r = param_e_2.charCodeAt(num_a);
  var_n = var_r >> 8;
  var_o = var_r % 256;
  list_i.push(var_o);
  list_i.push(var_n);
  }
  return list_i;
  }
  (param_t, param_e_1.length - param_r), param_e_1, param_r, param_n);
  }
  function var_k(param_e_1, param_t, param_r) {
  if (param_t === 0 && param_r === param_e_1.length) {
  return dep_helper_99.fromByteArray(param_e_1);
  }
  else {
  return dep_helper_99.fromByteArray(param_e_1.slice(param_t, param_r));
  }
  }
  function var_A(param_e_1, param_t, param_r) {
  param_r = Math.min(param_e_1.length, param_r);
  var list_n = [];
  for (var var_o = param_t;
  var_o < param_r;
  ) {
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_c_1;
  var var_u_1 = param_e_1[var_o];
  var var_l_1 = null;
  var var_d_1 = var_u_1 > 239 ? 4 : var_u_1 > 223 ? 3 : var_u_1 > 191 ?
  2 : 1;
  if (var_o + var_d_1 <= param_r) {
  switch (var_d_1) {
  case 1:
  if (var_u_1 < 128) {
  var_l_1 = var_u_1;
  }
  break;
  case 2:
  if (((var_i = param_e_1[var_o + 1]) & 192) == 128 && (var_c_1 = (var_u_1 & 31) << 6 | var_i & 63) > 127) {
  var_l_1 = var_c_1;
  }
  break;
  case 3:
  var_i = param_e_1[var_o + 1];
  var_a_1 = param_e_1[var_o + 2];
  if ((var_i & 192) == 128 && (var_a_1 & 192) == 128 && (var_c_1 = (var_u_1 & 15) << 12 | (
  var_i & 63) << 6 | var_a_1 & 63) > 2047 && (var_c_1 < 55296 ||
  var_c_1 > 57343)) {
  var_l_1 = var_c_1;
  }
  break;
  case 4:
  var_i = param_e_1[var_o + 1];
  var_a_1 = param_e_1[var_o + 2];
  var_s_1 = param_e_1[var_o + 3];
  if ((var_i & 192) == 128 && (var_a_1 & 192) == 128 && (var_s_1 & 192) == 128 &&
  (var_c_1 = (var_u_1 & 15) << 18 | (var_i & 63) << 12 | (var_a_1 & 63) << 6 | var_s_1 & 63) > 65535 &&
  var_c_1 < 1114112) {
  var_l_1 = var_c_1;
  }
  }
  }
  if (var_l_1 === null) {
  var_l_1 = 65533;
  var_d_1 = 1;
  }
  else if (var_l_1 > 65535) {
  var_l_1 -= 65536;
  list_n.push(var_l_1 >>> 10 & 1023 | 55296);
  var_l_1 = var_l_1 & 1023 | 56320;
  }
  list_n.push(var_l_1);
  var_o += var_d_1;
  }
  return function (param_e_2) {
  var var_t = param_e_2.length;
  if (var_t <= 4096) {
  return String.fromCharCode.apply(String, param_e_2);
  }
  var str_r = "";
  var num_n = 0;
  while (num_n < var_t) {
  str_r += String.fromCharCode.apply(String, param_e_2.slice(num_n, num_n += 4096));
  }
  return str_r;
  }
  (list_n);
  }
  exportsObj.Buffer = var_c;
  exportsObj.SlowBuffer = function (param_e_1) {
  if (+param_e_1 != param_e_1) {
  param_e_1 = 0;
  }
  return var_c.alloc(+param_e_1);
  };
  exportsObj.INSPECT_MAX_BYTES = 50;
  var_c.TYPED_ARRAY_SUPPORT = param_e.TYPED_ARRAY_SUPPORT !== undefined ?
  param_e.TYPED_ARRAY_SUPPORT : function () {
  try {
  var var_e = new Uint8Array(1);
  var_e.__proto__ = {
  __proto__: Uint8Array.prototype,
  foo: function () {
  return 42;
  }
  };
  return var_e.foo() === 42 && typeof var_e.subarray == "function" &&
  var_e.subarray(1, 1).byteLength === 0;
  }
  catch (var_e_1) {
  return false;
  }
  }
  ();
  exportsObj.kMaxLength = var_a();
  var_c.poolSize = 8192;
  var_c._augment = function (param_e_1) {
  param_e_1.__proto__ = var_c.prototype;
  return param_e_1;
  };
  var_c.from = function (param_e_1, param_t, param_r) {
  return var_u(null, param_e_1, param_t, param_r);
  };
  if (var_c.TYPED_ARRAY_SUPPORT) {
  var_c.prototype.__proto__ = Uint8Array.prototype;
  var_c.__proto__ = Uint8Array;
  if (typeof Symbol != "undefined" && Symbol.species && var_c[Symbol.species] === var_c) {
  Object.defineProperty(var_c, Symbol.species, {
  value: null,
  configurable: true
  }
  );
  }
  }
  var_c.alloc = function (param_e_1, param_t, param_r) {
  return function (param_e_2, param_t_1, param_r_1, param_n) {
  var_l(param_t_1);
  if (param_t_1 <= 0) {
  return var_s(param_e_2, param_t_1);
  }
  else if (param_r_1 !== undefined) {
  if (typeof param_n == "string") {
  return var_s(param_e_2, param_t_1).fill(param_r_1, param_n);
  }
  else {
  return var_s(param_e_2, param_t_1).fill(param_r_1);
  }
  }
  else {
  return var_s(param_e_2, param_t_1);
  }
  }
  (null, param_e_1, param_t, param_r);
  };
  var_c.allocUnsafe = function (param_e_1) {
  return var_d(null, param_e_1);
  };
  var_c.allocUnsafeSlow = function (param_e_1) {
  return var_d(null, param_e_1);
  };
  var_c.isBuffer = function (param_e_1) {
  return param_e_1 != null && !!param_e_1._isBuffer;
  };
  var_c.compare = function (param_e_1, param_t) {
  if (!var_c.isBuffer(param_e_1) || !var_c.isBuffer(param_t)) {
  throw new TypeError("Arguments must be Buffers");
  }
  if (param_e_1 === param_t) {
  return 0;
  }
  var var_r = param_e_1.length;
  var var_n = param_t.length;
  for (var num_o = 0, var_i = Math.min(var_r, var_n);
  num_o < var_i;
  ++num_o) {
  if (param_e_1[num_o] !== param_t[num_o]) {
  var_r = param_e_1[num_o];
  var_n = param_t[num_o];
  break;
  }
  }
  if (var_r < var_n) {
  return -1;
  }
  else if (var_n < var_r) {
  return 1;
  }
  else {
  return 0;
  }
  };
  var_c.isEncoding = function (param_e_1) {
  switch (String(param_e_1).toLowerCase()) {
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
  return true;
  default:
  return false;
  }
  };
  var_c.concat = function (param_e_1, param_t) {
  if (!dep_helper_101(param_e_1)) {
  throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (param_e_1.length === 0) {
  return var_c.alloc(0);
  }
  var var_r;
  if (param_t === undefined) {
  param_t = 0;
  var_r = 0;
  for (;
  var_r < param_e_1.length;
  ++var_r) {
  param_t += param_e_1[var_r].length;
  }
  }
  var var_n = var_c.allocUnsafe(param_t);
  var num_o = 0;
  for (var_r = 0;
  var_r < param_e_1.length;
  ++var_r) {
  var var_a_1 = param_e_1[var_r];
  if (!var_c.isBuffer(var_a_1)) {
  throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  var_a_1.copy(var_n, num_o);
  num_o += var_a_1.length;
  }
  return var_n;
  };
  var_c.byteLength = var_h;
  var_c.prototype._isBuffer = true;
  var_c.prototype.swap16 = function () {
  var var_e = this.length;
  if (var_e % 2 != 0) {
  throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var num_t = 0;
  num_t < var_e;
  num_t += 2) {
  var_g(this, num_t, num_t + 1);
  }
  return this;
  };
  var_c.prototype.swap32 = function () {
  var var_e = this.length;
  if (var_e % 4 != 0) {
  throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var num_t = 0;
  num_t < var_e;
  num_t += 4) {
  var_g(this, num_t, num_t + 3);
  var_g(this, num_t + 1, num_t + 2);
  }
  return this;
  };
  var_c.prototype.swap64 = function () {
  var var_e = this.length;
  if (var_e % 8 != 0) {
  throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var num_t = 0;
  num_t < var_e;
  num_t += 8) {
  var_g(this, num_t, num_t + 7);
  var_g(this, num_t + 1, num_t + 6);
  var_g(this, num_t + 2, num_t + 5);
  var_g(this, num_t + 3, num_t + 4);
  }
  return this;
  };
  var_c.prototype.toString = function () {
  var var_e = this.length | 0;
  if (var_e === 0) {
  return "";
  }
  else if (arguments.length === 0) {
  return var_A(this, 0, var_e);
  }
  else {
  return var_m.apply(this, arguments);
  }
  };
  var_c.prototype.equals = function (param_e_1) {
  if (!var_c.isBuffer(param_e_1)) {
  throw new TypeError("Argument must be a Buffer");
  }
  return this === param_e_1 || var_c.compare(this, param_e_1) === 0;
  };
  var_c.prototype.inspect = function () {
  var str_e = "";
  var var_r = exportsObj.INSPECT_MAX_BYTES;
  if (this.length > 0) {
  str_e = this.toString("hex", 0, var_r).match(/.{2}/g).join(" ");
  if (this.length > var_r) {
  str_e += " ... ";
  }
  }
  return "<Buffer " + str_e + ">";
  };
  var_c.prototype.compare = function (param_e_1, param_t, param_r, param_n, param_o) {
  if (!var_c.isBuffer(param_e_1)) {
  throw new TypeError("Argument must be a Buffer");
  }
  if (param_t === undefined) {
  param_t = 0;
  }
  if (param_r === undefined) {
  param_r = param_e_1 ? param_e_1.length : 0;
  }
  if (param_n === undefined) {
  param_n = 0;
  }
  if (param_o === undefined) {
  param_o = this.length;
  }
  if (param_t < 0 || param_r > param_e_1.length || param_n < 0 ||
  param_o > this.length) {
  throw new RangeError("out of range index");
  }
  if (param_n >= param_o && param_t >= param_r) {
  return 0;
  }
  if (param_n >= param_o) {
  return -1;
  }
  if (param_t >= param_r) {
  return 1;
  }
  if (this === param_e_1) {
  return 0;
  }
  var var_i = (param_o >>>= 0) - (param_n >>>= 0);
  var var_a_1 = (param_r >>>= 0) - (param_t >>>= 0);
  for (var var_s_1 = Math.min(var_i, var_a_1), var_u_1 = this.slice(param_n, param_o),
  var_l_1 = param_e_1.slice(param_t, param_r), num_d = 0;
  num_d < var_s_1;
  ++num_d) {
  if (var_u_1[num_d] !== var_l_1[num_d]) {
  var_i = var_u_1[num_d];
  var_a_1 = var_l_1[num_d];
  break;
  }
  }
  if (var_i < var_a_1) {
  return -1;
  }
  else if (var_a_1 < var_i) {
  return 1;
  }
  else {
  return 0;
  }
  };
  var_c.prototype.includes = function (param_e_1, param_t, param_r) {
  return this.indexOf(param_e_1, param_t, param_r) !== -1;
  };
  var_c.prototype.indexOf = function (param_e_1, param_t, param_r) {
  return var_v(this, param_e_1, param_t, param_r, true);
  };
  var_c.prototype.lastIndexOf = function (param_e_1, param_t, param_r) {
  return var_v(this, param_e_1, param_t, param_r, false);
  };
  var_c.prototype.write = function (param_e_1, param_t, param_r, param_n) {
  if (param_t === undefined) {
  param_n = "utf8";
  param_r = this.length;
  param_t = 0;
  }
  else if (param_r === undefined && typeof param_t == "string") {
  param_n = param_t;
  param_r = this.length;
  param_t = 0;
  }
  else {
  if (!isFinite(param_t)) {
  throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  }
  param_t |= 0;
  if (isFinite(param_r)) {
  param_r |= 0;
  if (param_n === undefined) {
  param_n = "utf8";
  }
  }
  else {
  param_n = param_r;
  param_r = undefined;
  }
  }
  var var_o = this.length - param_t;
  if (param_r === undefined || param_r > var_o) {
  param_r = var_o;
  }
  if (param_e_1.length > 0 && (param_r < 0 || param_t < 0) ||
  param_t > this.length) {
  throw new RangeError("Attempt to write outside buffer bounds");
  }
  param_n ||= "utf8";
  var flag_i = false;
  while (true) {
  switch (param_n) {
  case "hex":
  return var__(this, param_e_1, param_t, param_r);
  case "utf8":
  case "utf-8":
  return var_b(this, param_e_1, param_t, param_r);
  case "ascii":
  return var_w(this, param_e_1, param_t, param_r);
  case "latin1":
  case "binary":
  return var_E(this, param_e_1, param_t, param_r);
  case "base64":
  return var_D(this, param_e_1, param_t, param_r);
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return var_T(this, param_e_1, param_t, param_r);
  default:
  if (flag_i) {
  throw new TypeError("Unknown encoding: " + param_n);
  }
  param_n = ("" + param_n).toLowerCase();
  flag_i = true;
  }
  }
  };
  var_c.prototype.toJSON = function () {
  return {
  type: "Buffer",
  data: Array.prototype.slice.call(this._arr || this, 0)
  };
  };
  function var_C(param_e_1, param_t, param_r) {
  var str_n = "";
  param_r = Math.min(param_e_1.length, param_r);
  for (var var_o = param_t;
  var_o < param_r;
  ++var_o) {
  str_n += String.fromCharCode(param_e_1[var_o] & 127);
  }
  return str_n;
  }
  function var_x(param_e_1, param_t, param_r) {
  var str_n = "";
  param_r = Math.min(param_e_1.length, param_r);
  for (var var_o = param_t;
  var_o < param_r;
  ++var_o) {
  str_n += String.fromCharCode(param_e_1[var_o]);
  }
  return str_n;
  }
  function var_S(param_e_1, param_t, param_r) {
  var var_n = param_e_1.length;
  if (!param_t || param_t < 0) {
  param_t = 0;
  }
  if (!param_r || param_r < 0 || param_r > var_n) {
  param_r = var_n;
  }
  var str_o = "";
  for (var var_i = param_t;
  var_i < param_r;
  ++var_i) {
  str_o += var_N(param_e_1[var_i]);
  }
  return str_o;
  }
  function var_O(param_e_1, param_t, param_r) {
  for (var var_n = param_e_1.slice(param_t, param_r), str_o = "", num_i = 0;
  num_i < var_n.length;
  num_i += 2) {
  str_o += String.fromCharCode(var_n[num_i] + var_n[num_i + 1] * 256);
  }
  return str_o;
  }
  function var_I(param_e_1, param_t, param_r) {
  if (param_e_1 % 1 != 0 || param_e_1 < 0) {
  throw new RangeError("offset is not uint");
  }
  if (param_e_1 + param_t > param_r) {
  throw new RangeError("Trying to access beyond buffer length");
  }
  }
  function var_L(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  if (!var_c.isBuffer(param_e_1)) {
  throw new TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (param_t > param_o || param_t < param_i) {
  throw new RangeError("\"value\" argument is out of bounds");
  }
  if (param_r + param_n > param_e_1.length) {
  throw new RangeError("Index out of range");
  }
  }
  function var_R(param_e_1, param_t, param_r, param_n) {
  if (param_t < 0) {
  param_t = 65535 + param_t + 1;
  }
  for (var num_o = 0, var_i = Math.min(param_e_1.length - param_r, 2);
  num_o < var_i;
  ++num_o) {
  param_e_1[param_r + num_o] = (param_t & 255 << (param_n ? num_o :
  1 - num_o) * 8) >>> (param_n ? num_o : 1 - num_o) * 8;
  }
  }
  function var_P(param_e_1, param_t, param_r, param_n) {
  if (param_t < 0) {
  param_t = 4294967295 + param_t + 1;
  }
  for (var num_o = 0, var_i = Math.min(param_e_1.length - param_r, 4);
  num_o < var_i;
  ++num_o) {
  param_e_1[param_r + num_o] = param_t >>> (param_n ? num_o :
  3 - num_o) * 8 & 255;
  }
  }
  function var_B(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  if (param_r + param_n > param_e_1.length) {
  throw new RangeError("Index out of range");
  }
  if (param_r < 0) {
  throw new RangeError("Index out of range");
  }
  }
  function var_M(param_e_1, param_t, param_r, param_n, param_i) {
  if (!param_i) {
  var_B(param_e_1, 0, param_r, 4);
  }
  dep_helper_100.write(param_e_1, param_t, param_r, param_n, 23, 4);
  return param_r + 4;
  }
  function var_F(param_e_1, param_t, param_r, param_n, param_i) {
  if (!param_i) {
  var_B(param_e_1, 0, param_r, 8);
  }
  dep_helper_100.write(param_e_1, param_t, param_r, param_n, 52, 8);
  return param_r + 8;
  }
  var_c.prototype.slice = function (param_e_1, param_t) {
  var var_r;
  var var_n = this.length;
  if ((param_e_1 = ~~param_e_1) < 0) {
  if ((param_e_1 += var_n) < 0) {
  param_e_1 = 0;
  }
  }
  else if (param_e_1 > var_n) {
  param_e_1 = var_n;
  }
  if ((param_t = param_t === undefined ? var_n : ~~param_t) < 0) {
  if ((param_t += var_n) < 0) {
  param_t = 0;
  }
  }
  else if (param_t > var_n) {
  param_t = var_n;
  }
  if (param_t < param_e_1) {
  param_t = param_e_1;
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  (var_r = this.subarray(param_e_1, param_t)).__proto__ = var_c.prototype;
  }
  else {
  var var_o = param_t - param_e_1;
  var_r = new var_c(var_o, undefined);
  for (var num_i = 0;
  num_i < var_o;
  ++num_i) {
  var_r[num_i] = this[num_i + param_e_1];
  }
  }
  return var_r;
  };
  var_c.prototype.readUIntLE = function (param_e_1, param_t, param_r) {
  param_e_1 |= 0;
  param_t |= 0;
  if (!param_r) {
  var_I(param_e_1, param_t, this.length);
  }
  var var_n = this[param_e_1];
  for (var num_o = 1, num_i = 0;
  ++num_i < param_t && (num_o *= 256);
  ) {
  var_n += this[param_e_1 + num_i] * num_o;
  }
  return var_n;
  };
  var_c.prototype.readUIntBE = function (param_e_1, param_t, param_r) {
  param_e_1 |= 0;
  param_t |= 0;
  if (!param_r) {
  var_I(param_e_1, param_t, this.length);
  }
  var var_n = this[param_e_1 + --param_t];
  for (var num_o = 1;
  param_t > 0 && (num_o *= 256);
  ) {
  var_n += this[param_e_1 + --param_t] * num_o;
  }
  return var_n;
  };
  var_c.prototype.readUInt8 = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 1, this.length);
  }
  return this[param_e_1];
  };
  var_c.prototype.readUInt16LE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 2, this.length);
  }
  return this[param_e_1] | this[param_e_1 + 1] << 8;
  };
  var_c.prototype.readUInt16BE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 2, this.length);
  }
  return this[param_e_1] << 8 | this[param_e_1 + 1];
  };
  var_c.prototype.readUInt32LE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 4, this.length);
  }
  return (this[param_e_1] | this[param_e_1 + 1] << 8 | this[param_e_1 + 2] << 16) + this[param_e_1 + 3] * 16777216;
  };
  var_c.prototype.readUInt32BE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 4, this.length);
  }
  return this[param_e_1] * 16777216 + (this[param_e_1 + 1] << 16 | this[param_e_1 + 2] << 8 | this[param_e_1 + 3]);
  };
  var_c.prototype.readIntLE = function (param_e_1, param_t, param_r) {
  param_e_1 |= 0;
  param_t |= 0;
  if (!param_r) {
  var_I(param_e_1, param_t, this.length);
  }
  var var_n = this[param_e_1];
  for (var num_o = 1, num_i = 0;
  ++num_i < param_t && (num_o *= 256);
  ) {
  var_n += this[param_e_1 + num_i] * num_o;
  }
  if (var_n >= (num_o *= 128)) {
  var_n -= Math.pow(2, param_t * 8);
  }
  return var_n;
  };
  var_c.prototype.readIntBE = function (param_e_1, param_t, param_r) {
  param_e_1 |= 0;
  param_t |= 0;
  if (!param_r) {
  var_I(param_e_1, param_t, this.length);
  }
  for (var var_n = param_t, num_o = 1, var_i = this[param_e_1 + --var_n];
  var_n > 0 && (num_o *= 256);
  ) {
  var_i += this[param_e_1 + --var_n] * num_o;
  }
  if (var_i >= (num_o *= 128)) {
  var_i -= Math.pow(2, param_t * 8);
  }
  return var_i;
  };
  var_c.prototype.readInt8 = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 1, this.length);
  }
  if (this[param_e_1] & 128) {
  return (255 - this[param_e_1] + 1) * -1;
  }
  else {
  return this[param_e_1];
  }
  };
  var_c.prototype.readInt16LE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 2, this.length);
  }
  var var_r = this[param_e_1] | this[param_e_1 + 1] << 8;
  if (var_r & 32768) {
  return var_r | -65536;
  }
  else {
  return var_r;
  }
  };
  var_c.prototype.readInt16BE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 2, this.length);
  }
  var var_r = this[param_e_1 + 1] | this[param_e_1] << 8;
  if (var_r & 32768) {
  return var_r | -65536;
  }
  else {
  return var_r;
  }
  };
  var_c.prototype.readInt32LE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 4, this.length);
  }
  return this[param_e_1] | this[param_e_1 + 1] << 8 | this[param_e_1 + 2] << 16 | this[param_e_1 + 3] << 24;
  };
  var_c.prototype.readInt32BE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 4, this.length);
  }
  return this[param_e_1] << 24 | this[param_e_1 + 1] << 16 | this[param_e_1 + 2] << 8 | this[param_e_1 + 3];
  };
  var_c.prototype.readFloatLE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 4, this.length);
  }
  return dep_helper_100.read(this, param_e_1, true, 23, 4);
  };
  var_c.prototype.readFloatBE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 4, this.length);
  }
  return dep_helper_100.read(this, param_e_1, false, 23, 4);
  };
  var_c.prototype.readDoubleLE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 8, this.length);
  }
  return dep_helper_100.read(this, param_e_1, true, 52, 8);
  };
  var_c.prototype.readDoubleBE = function (param_e_1, param_t) {
  if (!param_t) {
  var_I(param_e_1, 8, this.length);
  }
  return dep_helper_100.read(this, param_e_1, false, 52, 8);
  };
  var_c.prototype.writeUIntLE = function (param_e_1, param_t, param_r, param_n) {
  if (!(param_e_1 = +param_e_1, param_t |= 0, param_r |= 0, param_n)) {
  var_L(this, param_e_1, param_t, param_r, Math.pow(2, param_r * 8) - 1, 0);
  }
  var num_o = 1;
  var num_i = 0;
  for (this[param_t] = param_e_1 & 255;
  ++num_i < param_r && (num_o *= 256);
  ) {
  this[param_t + num_i] = param_e_1 / num_o & 255;
  }
  return param_t + param_r;
  };
  var_c.prototype.writeUIntBE = function (param_e_1, param_t, param_r, param_n) {
  if (!(param_e_1 = +param_e_1, param_t |= 0, param_r |= 0, param_n)) {
  var_L(this, param_e_1, param_t, param_r, Math.pow(2, param_r * 8) - 1, 0);
  }
  var var_o = param_r - 1;
  var num_i = 1;
  for (this[param_t + var_o] = param_e_1 & 255;
  --var_o >= 0 && (num_i *= 256);
  ) {
  this[param_t + var_o] = param_e_1 / num_i & 255;
  }
  return param_t + param_r;
  };
  var_c.prototype.writeUInt8 = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 1, 255, 0);
  }
  if (!var_c.TYPED_ARRAY_SUPPORT) {
  param_e_1 = Math.floor(param_e_1);
  }
  this[param_t] = param_e_1 & 255;
  return param_t + 1;
  };
  var_c.prototype.writeUInt16LE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 2, 65535, 0);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 & 255;
  this[param_t + 1] = param_e_1 >>> 8;
  }
  else {
  var_R(this, param_e_1, param_t, true);
  }
  return param_t + 2;
  };
  var_c.prototype.writeUInt16BE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 2, 65535, 0);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 >>> 8;
  this[param_t + 1] = param_e_1 & 255;
  }
  else {
  var_R(this, param_e_1, param_t, false);
  }
  return param_t + 2;
  };
  var_c.prototype.writeUInt32LE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 4, 4294967295, 0);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t + 3] = param_e_1 >>> 24;
  this[param_t + 2] = param_e_1 >>> 16;
  this[param_t + 1] = param_e_1 >>> 8;
  this[param_t] = param_e_1 & 255;
  }
  else {
  var_P(this, param_e_1, param_t, true);
  }
  return param_t + 4;
  };
  var_c.prototype.writeUInt32BE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 4, 4294967295, 0);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 >>> 24;
  this[param_t + 1] = param_e_1 >>> 16;
  this[param_t + 2] = param_e_1 >>> 8;
  this[param_t + 3] = param_e_1 & 255;
  }
  else {
  var_P(this, param_e_1, param_t, false);
  }
  return param_t + 4;
  };
  var_c.prototype.writeIntLE = function (param_e_1, param_t, param_r, param_n) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_n) {
  var var_o = Math.pow(2, param_r * 8 - 1);
  var_L(this, param_e_1, param_t, param_r, var_o - 1, -var_o);
  }
  var num_i = 0;
  var num_a = 1;
  var num_s = 0;
  for (this[param_t] = param_e_1 & 255;
  ++num_i < param_r && (num_a *= 256);
  ) {
  if (param_e_1 < 0 && num_s === 0 && this[param_t + num_i - 1] !== 0) {
  num_s = 1;
  }
  this[param_t + num_i] = (param_e_1 / num_a >> 0) - num_s & 255;
  }
  return param_t + param_r;
  };
  var_c.prototype.writeIntBE = function (param_e_1, param_t, param_r, param_n) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_n) {
  var var_o = Math.pow(2, param_r * 8 - 1);
  var_L(this, param_e_1, param_t, param_r, var_o - 1, -var_o);
  }
  var var_i = param_r - 1;
  var num_a = 1;
  var num_s = 0;
  for (this[param_t + var_i] = param_e_1 & 255;
  --var_i >= 0 && (num_a *= 256);
  ) {
  if (param_e_1 < 0 && num_s === 0 && this[param_t + var_i + 1] !== 0) {
  num_s = 1;
  }
  this[param_t + var_i] = (param_e_1 / num_a >> 0) - num_s & 255;
  }
  return param_t + param_r;
  };
  var_c.prototype.writeInt8 = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 1, 127, -128);
  }
  if (!var_c.TYPED_ARRAY_SUPPORT) {
  param_e_1 = Math.floor(param_e_1);
  }
  if (param_e_1 < 0) {
  param_e_1 = 255 + param_e_1 + 1;
  }
  this[param_t] = param_e_1 & 255;
  return param_t + 1;
  };
  var_c.prototype.writeInt16LE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 2, 32767, -32768);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 & 255;
  this[param_t + 1] = param_e_1 >>> 8;
  }
  else {
  var_R(this, param_e_1, param_t, true);
  }
  return param_t + 2;
  };
  var_c.prototype.writeInt16BE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 2, 32767, -32768);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 >>> 8;
  this[param_t + 1] = param_e_1 & 255;
  }
  else {
  var_R(this, param_e_1, param_t, false);
  }
  return param_t + 2;
  };
  var_c.prototype.writeInt32LE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 4, 2147483647, -2147483648);
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 & 255;
  this[param_t + 1] = param_e_1 >>> 8;
  this[param_t + 2] = param_e_1 >>> 16;
  this[param_t + 3] = param_e_1 >>> 24;
  }
  else {
  var_P(this, param_e_1, param_t, true);
  }
  return param_t + 4;
  };
  var_c.prototype.writeInt32BE = function (param_e_1, param_t, param_r) {
  param_e_1 = +param_e_1;
  param_t |= 0;
  if (!param_r) {
  var_L(this, param_e_1, param_t, 4, 2147483647, -2147483648);
  }
  if (param_e_1 < 0) {
  param_e_1 = 4294967295 + param_e_1 + 1;
  }
  if (var_c.TYPED_ARRAY_SUPPORT) {
  this[param_t] = param_e_1 >>> 24;
  this[param_t + 1] = param_e_1 >>> 16;
  this[param_t + 2] = param_e_1 >>> 8;
  this[param_t + 3] = param_e_1 & 255;
  }
  else {
  var_P(this, param_e_1, param_t, false);
  }
  return param_t + 4;
  };
  var_c.prototype.writeFloatLE = function (param_e_1, param_t, param_r) {
  return var_M(this, param_e_1, param_t, true, param_r);
  };
  var_c.prototype.writeFloatBE = function (param_e_1, param_t, param_r) {
  return var_M(this, param_e_1, param_t, false, param_r);
  };
  var_c.prototype.writeDoubleLE = function (param_e_1, param_t, param_r) {
  return var_F(this, param_e_1, param_t, true, param_r);
  };
  var_c.prototype.writeDoubleBE = function (param_e_1, param_t, param_r) {
  return var_F(this, param_e_1, param_t, false, param_r);
  };
  var_c.prototype.copy = function (param_e_1, param_t, param_r, param_n) {
  param_r ||= 0;
  if (!param_n && param_n !== 0) {
  param_n = this.length;
  }
  if (param_t >= param_e_1.length) {
  param_t = param_e_1.length;
  }
  param_t ||= 0;
  if (param_n > 0 && param_n < param_r) {
  param_n = param_r;
  }
  if (param_n === param_r) {
  return 0;
  }
  if (param_e_1.length === 0 || this.length === 0) {
  return 0;
  }
  if (param_t < 0) {
  throw new RangeError("targetStart out of bounds");
  }
  if (param_r < 0 || param_r >= this.length) {
  throw new RangeError("sourceStart out of bounds");
  }
  if (param_n < 0) {
  throw new RangeError("sourceEnd out of bounds");
  }
  if (param_n > this.length) {
  param_n = this.length;
  }
  if (param_e_1.length - param_t < param_n - param_r) {
  param_n = param_e_1.length - param_t + param_r;
  }
  var var_o;
  var var_i = param_n - param_r;
  if (this === param_e_1 && param_r < param_t && param_t < param_n) {
  for (var_o = var_i - 1;
  var_o >= 0;
  --var_o) {
  param_e_1[var_o + param_t] = this[var_o + param_r];
  }
  }
  else if (var_i < 1000 || !var_c.TYPED_ARRAY_SUPPORT) {
  for (var_o = 0;
  var_o < var_i;
  ++var_o) {
  param_e_1[var_o + param_t] = this[var_o + param_r];
  }
  }
  else {
  Uint8Array.prototype.set.call(param_e_1, this.subarray(param_r, param_r + var_i),
  param_t);
  }
  return var_i;
  };
  var_c.prototype.fill = function (param_e_1, param_t, param_r, param_n) {
  if (typeof param_e_1 == "string") {
  if (typeof param_t == "string") {
  param_n = param_t;
  param_t = 0;
  param_r = this.length;
  }
  else if (typeof param_r == "string") {
  param_n = param_r;
  param_r = this.length;
  }
  if (param_e_1.length === 1) {
  var var_o = param_e_1.charCodeAt(0);
  if (var_o < 256) {
  param_e_1 = var_o;
  }
  }
  if (param_n !== undefined && typeof param_n != "string") {
  throw new TypeError("encoding must be a string");
  }
  if (typeof param_n == "string" && !var_c.isEncoding(param_n)) {
  throw new TypeError("Unknown encoding: " + param_n);
  }
  }
  else if (typeof param_e_1 == "number") {
  param_e_1 &= 255;
  }
  if (param_t < 0 || this.length < param_t || this.length < param_r) {
  throw new RangeError("Out of range index");
  }
  if (param_r <= param_t) {
  return this;
  }
  var var_i;
  param_t >>>= 0;
  param_r = param_r === undefined ? this.length : param_r >>> 0;
  param_e_1 ||= 0;
  if (typeof param_e_1 == "number") {
  for (var_i = param_t;
  var_i < param_r;
  ++var_i) {
  this[var_i] = param_e_1;
  }
  }
  else {
  var var_a_1 = var_c.isBuffer(param_e_1) ? param_e_1 : var_j(new var_c(param_e_1,
  param_n).toString());
  var var_s_1 = var_a_1.length;
  for (var_i = 0;
  var_i < param_r - param_t;
  ++var_i) {
  this[var_i + param_t] = var_a_1[var_i % var_s_1];
  }
  }
  return this;
  };
  var regex_U = /[^+\/0-9A-Za-z-_]/g;
  function var_N(param_e_1) {
  if (param_e_1 < 16) {
  return "0" + param_e_1.toString(16);
  }
  else {
  return param_e_1.toString(16);
  }
  }
  function var_j(param_e_1, param_t) {
  var var_r;
  param_t = param_t || Infinity;
  for (var var_n = param_e_1.length, var_o = null, list_i = [], num_a = 0;
  num_a < var_n;
  ++num_a) {
  if ((var_r = param_e_1.charCodeAt(num_a)) > 55295 && var_r < 57344) {
  if (!var_o) {
  if (var_r > 56319) {
  if ((param_t -= 3) > -1) {
  list_i.push(239, 191, 189);
  }
  continue;
  }
  if (num_a + 1 === var_n) {
  if ((param_t -= 3) > -1) {
  list_i.push(239, 191, 189);
  }
  continue;
  }
  var_o = var_r;
  continue;
  }
  if (var_r < 56320) {
  if ((param_t -= 3) > -1) {
  list_i.push(239, 191, 189);
  }
  var_o = var_r;
  continue;
  }
  var_r = 65536 + (var_o - 55296 << 10 | var_r - 56320);
  }
  else if (var_o && (param_t -= 3) > -1) {
  list_i.push(239, 191, 189);
  }
  var_o = null;
  if (var_r < 128) {
  if ((param_t -= 1) < 0) {
  break;
  }
  list_i.push(var_r);
  }
  else if (var_r < 2048) {
  if ((param_t -= 2) < 0) {
  break;
  }
  list_i.push(var_r >> 6 | 192, var_r & 63 | 128);
  }
  else if (var_r < 65536) {
  if ((param_t -= 3) < 0) {
  break;
  }
  list_i.push(var_r >> 12 | 224, var_r >> 6 & 63 | 128, var_r & 63 | 128);
  }
  else {
  if (!(var_r < 1114112)) {
  throw new Error("Invalid code point");
  }
  if ((param_t -= 4) < 0) {
  break;
  }
  list_i.push(var_r >> 18 | 240, var_r >> 12 & 63 | 128, var_r >> 6 & 63 | 128, var_r & 63 | 128);
  }
  }
  return list_i;
  }
  function var_q(param_e_1) {
  return dep_helper_99.toByteArray(function (param_e_2) {
  if ((param_e_2 = function (param_e_3) {
  if (param_e_3.trim) {
  return param_e_3.trim();
  }
  else {
  return param_e_3.replace(/^\s+|\s+$/g, "");
  }
  }
  (param_e_2).replace(regex_U, "")).length < 2) {
  return "";
  }
  while (param_e_2.length % 4 != 0) {
  param_e_2 += "=";
  }
  return param_e_2;
  }
  (param_e_1));
  }
  function var_H(param_e_1, param_t, param_r, param_n) {
  for (var num_o = 0;
  num_o < param_n && !(num_o + param_r >= param_t.length) &&
  !(num_o >= param_e_1.length);
  ++num_o) {
  param_t[num_o + param_r] = param_e_1[num_o];
  }
  return num_o;
  }
  }
  ).call(this, requireFn(13));
  };
