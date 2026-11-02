// Module 741 - Savior Hydrax Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0);
  function var_o(param_t, param_e) {
  var var_r = Object.keys(param_t);
  if (Object.getOwnPropertySymbols) {
  var var_n = Object.getOwnPropertySymbols(param_t);
  param_e && (var_n = var_n.filter(function (param_e_1) {
  return Object.getOwnPropertyDescriptor(param_t, param_e_1).enumerable;
  }
  )), var_r.push.apply(var_r, var_n);
  }
  return var_r;
  }
  function var_a(param_t) {
  for (var num_e = 1;
  num_e < arguments.length;
  num_e++) {
  var var_r = null != arguments[num_e] ? arguments[num_e] : {
  };
  num_e % 2 ? var_o(Object(var_r), !0).forEach(function (param_e) {
  var_s(param_t, param_e, var_r[param_e]);
  }
  ) : Object.getOwnPropertyDescriptors ? Object.defineProperties(param_t, Object.getOwnPropertyDescriptors(
  var_r)) : var_o(Object(var_r)).forEach(function (param_e) {
  Object.defineProperty(param_t, param_e, Object.getOwnPropertyDescriptor(var_r,
  param_e));
  }
  );
  }
  return param_t;
  }
  function var_s(param_t, param_e, param_r) {
  return (param_e = function (param_t_1) {
  var var_e = function (param_t_2, param_e_1) {
  if ("object" != typeof param_t_2 || !param_t_2) return param_t_2;
  var var_r = param_t_2[Symbol.toPrimitive];
  if (void 0 !== var_r) {
  var var_n = var_r.call(param_t_2, param_e_1 || "default");
  if ("object" != typeof var_n) return var_n;
  throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === param_e_1 ? String : Number)(param_t_2);
  }
  (param_t_1, "string");
  return "symbol" == typeof var_e ? var_e : var_e + "";
  }
  (param_e)) in param_t ? Object.defineProperty(param_t, param_e, {
  value: param_r,
  enumerable: !0,
  configurable: !0,
  writable: !0
  }
  ) : param_t[param_e] = param_r, param_t;
  }
  function var_u(param_t) {
  return new var_f(param_t, 0);
  }
  function var_c(param_t) {
  return function () {
  return new var_l(param_t.apply(this, arguments));
  };
  }
  function var_l(param_t) {
  var var_e, var_r;
  function var_n(param_e, param_r) {
  try {
  var var_o_1 = param_t[param_e](param_r),
  var_a_1 = var_o_1.value,
  var_s_1 = var_a_1 instanceof var_f;
  Promise.resolve(var_s_1 ? var_a_1.v : var_a_1).then(function (param_r_1) {
  if (var_s_1) {
  var var_u_1 = "return" === param_e && var_a_1.k ? param_e :
  "next";
  if (!var_a_1.k || param_r_1.done) return var_n(var_u_1, param_r_1);
  param_r_1 = param_t[var_u_1](param_r_1).value;
  }
  var_i(!!var_o_1.done, param_r_1);
  }
  , function (param_t_1) {
  var_n("throw", param_t_1);
  }
  );
  }
  catch (var_t) {
  var_i(2, var_t);
  }
  }
  function var_i(param_t_1, param_i) {
  2 === param_t_1 ? var_e.reject(param_i) : var_e.resolve({
  value: param_i,
  done: param_t_1
  }
  ), (var_e = var_e.next) ? var_n(var_e.key, var_e.arg) : var_r = null;
  }
  this._invoke = function (param_t_1, param_i) {
  return new Promise(function (param_o, param_a) {
  var obj_s = {
  key: param_t_1,
  arg: param_i,
  resolve: param_o,
  reject: param_a,
  next: null
  };
  var_r ? var_r = var_r.next = obj_s : (var_e = var_r = obj_s, var_n(param_t_1, param_i));
  }
  );
  }
  , "function" != typeof param_t.return && (this.return = void 0);
  }
  function var_f(param_t, param_e) {
  this.v = param_t, this.k = param_e;
  }
  function var_d() {
  const obj_t = {
  151: (param_t, param_e, param_r) => {
  var obj_n = {
  utf8: {
  stringToBytes: function (param_t_1) {
  return obj_n.bin.stringToBytes(unescape(encodeURIComponent(param_t_1)));
  }
  ,
  bytesToString: function (param_t_1) {
  return decodeURIComponent(escape(obj_n.bin.bytesToString(param_t_1)));
  }
  }
  ,
  bin: {
  stringToBytes: function (param_t_1) {
  for (var list_e = [], num_r = 0;
  num_r < param_t_1.length;
  num_r++) list_e.push(255 & param_t_1.charCodeAt(num_r));
  return list_e;
  }
  ,
  bytesToString: function (param_t_1) {
  for (var list_e = [], num_r = 0;
  num_r < param_t_1.length;
  num_r++) list_e.push(String.fromCharCode(param_t_1[num_r]));
  return list_e.join("");
  }
  }
  };
  param_t.exports = obj_n;
  }
  ,
  206: (param_t, param_e, param_r) => {
  function var_n(param_t_1) {
  return !!param_t_1.constructor && "function" == typeof param_t_1.constructor.isBuffer &&
  param_t_1.constructor.isBuffer(param_t_1);
  }
  param_t.exports = function (param_t_1) {
  return null != param_t_1 && (var_n(param_t_1) || "function" == typeof (var_e = param_t_1).readFloatLE &&
  "function" == typeof var_e.slice && var_n(var_e.slice(0, 0)) ||
  !!param_t_1._isBuffer);
  var var_e;
  };
  }
  ,
  939: (param_t, param_e, param_r) => {
  var var_n, var_i;
  var_n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", var_i = {
  rotl: function (param_t_1, param_e_1) {
  return param_t_1 << param_e_1 | param_t_1 >>> 32 - param_e_1;
  }
  ,
  rotr: function (param_t_1, param_e_1) {
  return param_t_1 << 32 - param_e_1 | param_t_1 >>> param_e_1;
  }
  ,
  endian: function (param_t_1) {
  if (param_t_1.constructor == Number) return 16711935 & var_i.rotl(param_t_1, 8) | -16711936 & var_i.rotl(
  param_t_1, 24);
  for (var num_e = 0;
  num_e < param_t_1.length;
  num_e++) param_t_1[num_e] = var_i.endian(param_t_1[num_e]);
  return param_t_1;
  }
  ,
  randomBytes: function (param_t_1) {
  for (var list_e = [];
  param_t_1 > 0;
  param_t_1--) list_e.push(Math.floor(256 * Math.random()));
  return list_e;
  }
  ,
  bytesToWords: function (param_t_1) {
  for (var list_e = [], num_r = 0, num_n = 0;
  num_r < param_t_1.length;
  num_r++, num_n += 8) list_e[num_n >>> 5] |= param_t_1[num_r] << 24 - num_n % 32;
  return list_e;
  }
  ,
  wordsToBytes: function (param_t_1) {
  for (var list_e = [], num_r = 0;
  num_r < 32 * param_t_1.length;
  num_r += 8) list_e.push(param_t_1[num_r >>> 5] >>> 24 - num_r % 32 & 255);
  return list_e;
  }
  ,
  bytesToHex: function (param_t_1) {
  for (var list_e = [], num_r = 0;
  num_r < param_t_1.length;
  num_r++) list_e.push((param_t_1[num_r] >>> 4).toString(16)), list_e.push((15 & param_t_1[num_r]).toString(
  16));
  return list_e.join("");
  }
  ,
  hexToBytes: function (param_t_1) {
  for (var list_e = [], num_r = 0;
  num_r < param_t_1.length;
  num_r += 2) list_e.push(parseInt(param_t_1.substr(num_r, 2), 16));
  return list_e;
  }
  ,
  bytesToBase64: function (param_t_1) {
  for (var list_e = [], num_r = 0;
  num_r < param_t_1.length;
  num_r += 3) for (var var_i_1 = param_t_1[num_r] << 16 | param_t_1[num_r + 1] << 8 | param_t_1[num_r + 2],
  num_o = 0;
  num_o < 4;
  num_o++) 8 * num_r + 6 * num_o <= 8 * param_t_1.length ? list_e.push(var_n.charAt(
  var_i_1 >>> 6 * (3 - num_o) & 63)) : list_e.push("=");
  return list_e.join("");
  }
  ,
  base64ToBytes: function (param_t_1) {
  param_t_1 = param_t_1.replace(/[^A-Z0-9+\/]/gi, "");
  for (var list_e = [], num_r = 0, num_i = 0;
  num_r < param_t_1.length;
  num_i = ++num_r % 4) 0 != num_i && list_e.push((var_n.indexOf(param_t_1.charAt(
  num_r - 1)) & Math.pow(2, -2 * num_i + 8) - 1) << 2 * num_i | var_n.indexOf(param_t_1.charAt(
  num_r)) >>> 6 - 2 * num_i);
  return list_e;
  }
  }
  , param_t.exports = var_i;
  }
  ,
  503: (param_t, param_e, param_r) => {
  var var_n, var_i, var_o_2, var_a_1, var_s_2;
  var_n = param_r(939), var_i = param_r(151).utf8, var_o_2 = param_r(206), var_a_1 = param_r(
  151).bin, (var_s_2 = function (param_t_1, param_e_1) {
  param_t_1.constructor == String ? param_t_1 = param_e_1 &&
  "binary" === param_e_1.encoding ? var_a_1.stringToBytes(param_t_1) :
  var_i.stringToBytes(param_t_1) : var_o_2(param_t_1) ? param_t_1 = Array.prototype.slice.call(
  param_t_1, 0) : Array.isArray(param_t_1) || param_t_1.constructor === Uint8Array ||
  (param_t_1 = param_t_1.toString());
  for (var var_r_1 = var_n.bytesToWords(param_t_1), var_u_1 = 8 * param_t_1.length,
  num_c = 1732584193, var_l_2 = -271733879, var_f_2 = -1732584194, num_d = 271733878,
  num_h = 0;
  num_h < var_r_1.length;
  num_h++) var_r_1[num_h] = 16711935 & (var_r_1[num_h] << 8 | var_r_1[num_h] >>> 24) | -16711936 & (
  var_r_1[num_h] << 24 | var_r_1[num_h] >>> 8);
  var_r_1[var_u_1 >>> 5] |= 128 << var_u_1 % 32, var_r_1[14 + (var_u_1 + 64 >>> 9 << 4)] = var_u_1;
  var var_p_2 = var_s_2._ff,
  var_v_2 = var_s_2._gg,
  var_m_1 = var_s_2._hh,
  var_y = var_s_2._ii;
  for (num_h = 0;
  num_h < var_r_1.length;
  num_h += 16) {
  var var_g = num_c,
  var_b_1 = var_l_2,
  var_w_1 = var_f_2,
  var_A = num_d;
  num_c = var_p_2(num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 0], 7, -680876936),
  num_d = var_p_2(num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 1], 12, -389564586),
  var_f_2 = var_p_2(var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 2], 17, 606105819),
  var_l_2 = var_p_2(var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 3], 22, -1044525330),
  num_c = var_p_2(num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 4], 7, -176418897),
  num_d = var_p_2(num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 5], 12, 1200080426),
  var_f_2 = var_p_2(var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 6], 17, -1473231341),
  var_l_2 = var_p_2(var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 7], 22, -45705983),
  num_c = var_p_2(num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 8], 7, 1770035416),
  num_d = var_p_2(num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 9], 12, -1958414417),
  var_f_2 = var_p_2(var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 10], 17, -42063),
  var_l_2 = var_p_2(var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 11], 22, -1990404162),
  num_c = var_p_2(num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 12], 7, 1804603682),
  num_d = var_p_2(num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 13], 12, -40341101),
  var_f_2 = var_p_2(var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 14], 17, -1502002290),
  num_c = var_v_2(num_c, var_l_2 = var_p_2(var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 15],
  22, 1236535329), var_f_2, num_d, var_r_1[num_h + 1], 5, -165796510), num_d = var_v_2(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 6], 9, -1069501632), var_f_2 = var_v_2(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 11], 14, 643717713), var_l_2 = var_v_2(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 0], 20, -373897302), num_c = var_v_2(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 5], 5, -701558691), num_d = var_v_2(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 10], 9, 38016083), var_f_2 = var_v_2(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 15], 14, -660478335), var_l_2 = var_v_2(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 4], 20, -405537848), num_c = var_v_2(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 9], 5, 568446438), num_d = var_v_2(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 14], 9, -1019803690), var_f_2 = var_v_2(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 3], 14, -187363961), var_l_2 = var_v_2(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 8], 20, 1163531501), num_c = var_v_2(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 13], 5, -1444681467), num_d = var_v_2(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 2], 9, -51403784), var_f_2 = var_v_2(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 7], 14, 1735328473), num_c = var_m_1(
  num_c, var_l_2 = var_v_2(var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 12], 20,
  -1926607734), var_f_2, num_d, var_r_1[num_h + 5], 4, -378558), num_d = var_m_1(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 8], 11, -2022574463), var_f_2 = var_m_1(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 11], 16, 1839030562), var_l_2 = var_m_1(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 14], 23, -35309556), num_c = var_m_1(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 1], 4, -1530992060), num_d = var_m_1(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 4], 11, 1272893353), var_f_2 = var_m_1(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 7], 16, -155497632), var_l_2 = var_m_1(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 10], 23, -1094730640), num_c = var_m_1(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 13], 4, 681279174), num_d = var_m_1(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 0], 11, -358537222), var_f_2 = var_m_1(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 3], 16, -722521979), var_l_2 = var_m_1(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 6], 23, 76029189), num_c = var_m_1(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 9], 4, -640364487), num_d = var_m_1(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 12], 11, -421815835), var_f_2 = var_m_1(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 15], 16, 530742520), num_c = var_y(
  num_c, var_l_2 = var_m_1(var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 2], 23,
  -995338651), var_f_2, num_d, var_r_1[num_h + 0], 6, -198630844), num_d = var_y(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 7], 10, 1126891415), var_f_2 = var_y(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 14], 15, -1416354905), var_l_2 = var_y(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 5], 21, -57434055), num_c = var_y(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 12], 6, 1700485571), num_d = var_y(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 3], 10, -1894986606), var_f_2 = var_y(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 10], 15, -1051523), var_l_2 = var_y(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 1], 21, -2054922799), num_c = var_y(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 8], 6, 1873313359), num_d = var_y(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 15], 10, -30611744), var_f_2 = var_y(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 6], 15, -1560198380), var_l_2 = var_y(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 13], 21, 1309151649), num_c = var_y(
  num_c, var_l_2, var_f_2, num_d, var_r_1[num_h + 4], 6, -145523070), num_d = var_y(
  num_d, num_c, var_l_2, var_f_2, var_r_1[num_h + 11], 10, -1120210379), var_f_2 = var_y(
  var_f_2, num_d, num_c, var_l_2, var_r_1[num_h + 2], 15, 718787259), var_l_2 = var_y(
  var_l_2, var_f_2, num_d, num_c, var_r_1[num_h + 9], 21, -343485551), num_c = num_c + var_g >>> 0,
  var_l_2 = var_l_2 + var_b_1 >>> 0, var_f_2 = var_f_2 + var_w_1 >>> 0, num_d = num_d + var_A >>> 0;
  }
  return var_n.endian([num_c, var_l_2, var_f_2, num_d]);
  }
  )._ff = function (param_t_1, param_e_1, param_r_1, param_n, param_i, param_o, param_a) {
  var var_s_3 = param_t_1 + (param_e_1 & param_r_1 | ~param_e_1 & param_n) + (param_i >>> 0) + param_a;
  return (var_s_3 << param_o | var_s_3 >>> 32 - param_o) + param_e_1;
  }
  , var_s_2._gg = function (param_t_1, param_e_1, param_r_1, param_n, param_i, param_o,
  param_a) {
  var var_s_3 = param_t_1 + (param_e_1 & param_n | param_r_1 & ~param_n) + (param_i >>> 0) + param_a;
  return (var_s_3 << param_o | var_s_3 >>> 32 - param_o) + param_e_1;
  }
  , var_s_2._hh = function (param_t_1, param_e_1, param_r_1, param_n, param_i, param_o,
  param_a) {
  var var_s_3 = param_t_1 + (param_e_1 ^ param_r_1 ^ param_n) + (param_i >>> 0) + param_a;
  return (var_s_3 << param_o | var_s_3 >>> 32 - param_o) + param_e_1;
  }
  , var_s_2._ii = function (param_t_1, param_e_1, param_r_1, param_n, param_i, param_o,
  param_a) {
  var var_s_3 = param_t_1 + (param_r_1 ^ (param_e_1 | ~param_n)) + (param_i >>> 0) + param_a;
  return (var_s_3 << param_o | var_s_3 >>> 32 - param_o) + param_e_1;
  }
  , var_s_2._blocksize = 16, var_s_2._digestsize = 16, param_t.exports = function (
  param_t_1, param_e_1) {
  if (null == param_t_1) throw new Error("Illegal argument " + param_t_1);
  var var_r_1 = var_n.wordsToBytes(var_s_2(param_t_1, param_e_1));
  return param_e_1 && param_e_1.asBytes ? var_r_1 : param_e_1 &&
  param_e_1.asString ? var_a_1.bytesToString(var_r_1) : var_n.bytesToHex(var_r_1);
  };
  }
  }
  ,
  obj_e = {
  };
  function var_r(param_n) {
  if (obj_e[param_n]) return obj_e[param_n].exports;
  const obj_i = {
  exports: {
  }
  };
  return obj_e[param_n] = obj_i, obj_t[param_n](obj_i, obj_i.exports, var_r), obj_i.exports;
  }
  const fn_n = () => var_r(503),
  fn_i = (param_t, param_e) => param_e.some(param_t_1 => param_t_1 instanceof param_t_1);
  let var_o_1, var_s_1;
  const var_l_1 = new WeakMap(),
  var_f_1 = new WeakMap(),
  var_d_1 = new WeakMap();
  let obj_h = {
  get(param_t, param_e, param_r) {
  if (param_t instanceof IDBTransaction) {
  if ("done" === param_e) return var_l_1.get(param_t);
  if ("store" === param_e) return param_r.objectStoreNames[1] ?
  void 0 : param_r.objectStore(param_r.objectStoreNames[0]);
  }
  return var_v_1(param_t[param_e]);
  }
  ,
  set: (param_t, param_e, param_r) => (param_t[param_e] = param_r, !0),
  has: (param_t, param_e) => param_t instanceof IDBTransaction &&
  ("done" === param_e || "store" === param_e) || param_e in param_t
  };
  function var_p_1(param_t) {
  obj_h = param_t(obj_h);
  }
  function var_v_1(param_t) {
  if (param_t instanceof IDBRequest) return function (param_t_1) {
  const var_e_1 = new Promise((param_e, param_r) => {
  const fn_n_1 = () => {
  param_t_1.removeEventListener("success", fn_i_1), param_t_1.removeEventListener(
  "error", fn_o);
  }
  ,
  fn_i_1 = () => {
  param_e(var_v_1(param_t_1.result)), fn_n_1();
  }
  ,
  fn_o = () => {
  param_r(param_t_1.error), fn_n_1();
  };
  param_t_1.addEventListener("success", fn_i_1), param_t_1.addEventListener("error",
  fn_o);
  }
  );
  return var_d_1.set(var_e_1, param_t_1), var_e_1;
  }
  (param_t);
  if (var_f_1.has(param_t)) return var_f_1.get(param_t);
  const var_e = function (param_t_1) {
  return "function" == typeof param_t_1 ? (var_e_1 = param_t_1, (var_s_1 ||
  (var_s_1 = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(
  var_e_1) ? function (...param_t_2) {
  return param_t_2.apply(fn_m(this), param_t_2), var_v_1(this.request);
  }
  : function (...param_t_2) {
  return var_v_1(param_t_2.apply(fn_m(this), param_t_2));
  }
  ) : (param_t_1 instanceof IDBTransaction && function (param_t_2) {
  if (var_l_1.has(param_t_2)) return;
  const var_e_2 = new Promise((param_e, param_r) => {
  const fn_n_1 = () => {
  param_t_2.removeEventListener("complete", fn_i_1), param_t_2.removeEventListener(
  "error", fn_o), param_t_2.removeEventListener("abort", fn_o);
  }
  ,
  fn_i_1 = () => {
  param_e(), fn_n_1();
  }
  ,
  fn_o = () => {
  param_r(param_t_2.error || new DOMException("AbortError", "AbortError")), fn_n_1(
  );
  };
  param_t_2.addEventListener("complete", fn_i_1), param_t_2.addEventListener("error",
  fn_o), param_t_2.addEventListener("abort", fn_o);
  }
  );
  var_l_1.set(param_t_2, var_e_2);
  }
  (param_t_1), fn_i(0, var_o_1 || (var_o_1 = [IDBDatabase, IDBObjectStore, IDBIndex,
  IDBCursor, IDBTransaction])) ? new Proxy(param_t_1, obj_h) :
  param_t_1);
  var var_e_1;
  }
  (param_t);
  return var_e !== param_t && (var_f_1.set(param_t, var_e), var_d_1.set(var_e, param_t)),
  var_e;
  }
  const fn_m = param_t => var_d_1.get(param_t),
  list_y = ["get", "getKey", "getAll", "getAllKeys", "count"],
  list_g = ["put", "add", "delete", "clear"],
  var_b = new Map();
  function var_w(param_t, param_e) {
  if (!(param_t instanceof IDBDatabase) || param_e in param_t ||
  "string" != typeof param_e) return;
  if (var_b.get(param_e)) return var_b.get(param_e);
  const var_r_1 = param_e.replace(/FromIndex$/, ""),
  var_n = param_e !== var_r_1,
  var_i = list_g.includes(var_r_1);
  if (!(var_r_1 in (var_n ? IDBIndex : IDBObjectStore).prototype) ||
  !var_i && !list_y.includes(var_r_1)) return;
  const fn_o = async function (param_t_1, ...param_e_1) {
  const var_r_2 = this.transaction(param_t_1, var_n_1 ? "readwrite" :
  "readonly");
  let var_n_1 = var_r_2.store;
  return var_r_2 && (var_n_1 = var_n_1.index(param_e_1.shift())), (await Promise.all(
  [var_n_1[param_e_1](...param_e_1), var_n_1 && var_r_2.done]))[0];
  };
  return var_b.set(param_e, fn_o), fn_o;
  }
  var_p_1(param_t => var_a(var_a({
  }
  , param_t), {
  }
  , {
  get: (param_t_1, param_e, param_r) => var_w(param_t_1, param_e) ||
  param_t_1.get(param_t_1, param_e, param_r),
  has: (param_t_1, param_e) => !!var_w(param_t_1, param_e) ||
  param_t_1.has(param_t_1, param_e)
  }
  ));
  const list_A = ["continue", "continuePrimaryKey", "advance"],
  obj__ = {
  }
  ,
  var_E = new WeakMap(),
  var_S = new WeakMap(),
  obj_O = {
  get(param_t, param_e) {
  if (!list_A.includes(param_e)) return param_t[param_e];
  let var_r_1 = obj__[param_e];
  return var_r_1 || (var_r_1 = obj__[param_e] = function (...param_t_1) {
  var_E.set(this, var_S.get(this)[param_e](...param_t_1));
  }
  ), var_r_1;
  }
  };
  function var_x() {
  return var_k.apply(this, arguments);
  }
  function var_k() {
  return (var_k = var_c(function* (...param_t) {
  let var_e = this;
  if (var_e instanceof IDBCursor || (var_e = yield var_u(var_e.openCursor(...param_t))),
  !var_e) return;
  const var_r_1 = new Proxy(var_e, obj_O);
  for (var_S.set(var_r_1, var_e), var_d_1.set(var_r_1, fn_m(var_e));
  var_e;
  ) yield var_r_1, var_e = yield var_u(var_E.get(var_r_1) ||
  var_e.continue()), var_E.delete(var_r_1);
  }
  )).apply(this, arguments);
  }
  function var_M(param_t, param_e) {
  return param_e === Symbol.asyncIterator && fn_i(0, [IDBIndex, IDBObjectStore, IDBCursor]) ||
  "iterate" === param_e && fn_i(0, [IDBIndex, IDBObjectStore]);
  }
  var_p_1(param_t => var_a(var_a({
  }
  , param_t), {
  }
  , {
  get: (param_t_1, param_e, param_r) => var_M(0, param_e) ? var_x :
  param_t_1.get(param_t_1, param_e, param_r),
  has: (param_t_1, param_e) => var_M(0, param_e) || param_t_1.has(param_t_1, param_e)
  }
  ));
  let var_T = null;
  const obj_I = {
  files: ["md5_id", "slug"],
  caches: ["mediaId"],
  errors: ["url", "createdAt"]
  };
  class var_j_1 {
  constructor() {
  this.key = null, this.algorithm = {
  name: "AES-CTR",
  length: 128
  }
  , this.keyUsages = ["encrypt", "decrypt"], this.encoder = new TextEncoder();
  }
  async expandKey(param_t) {
  if (!param_t) return !1;
  var var_e = this.encoder.encode(fn_n()(param_t));
  this.algorithm.counter = new Uint8Array(var_e.slice(0, 16));
  try {
  return this.key = await crypto.subtle.importKey("raw", var_e, this.algorithm, !1,
  this.keyUsages), !0;
  }
  catch (var_t) {
  return !1;
  }
  }
  async encrypt(param_t) {
  if (!param_t || !this.key) return param_t;
  "string" == typeof param_t && (param_t = this.encoder.encode(param_t));
  var var_e = await crypto.subtle.encrypt(this.algorithm, this.key, param_t);
  return Array.from(new Uint8Array(var_e)).map(param_t_1 => String.fromCharCode(
  param_t_1)).join("");
  }
  async decrypt(param_t) {
  if (!param_t || !this.key) return param_t;
  if ("string" == typeof param_t) return this.decryptString(param_t);
  var var_e = await crypto.subtle.decrypt(this.algorithm, this.key, param_t);
  return new Uint8Array(var_e);
  }
  async decryptString(param_t) {
  var var_e = new Uint8Array((param_t.match(/[\s\S]/g) || []).map(param_t_1 => param_t_1.charCodeAt(
  0))),
  var_r_1 = await crypto.subtle.decrypt(this.algorithm, this.key, var_e);
  return new TextDecoder().decode(var_r_1);
  }
  }
  class var_C_1 {
  constructor(param_t = null, param_e = []) {
  this.db = null, this.tableName = param_t, this.indexs = param_e;
  }
  async connect() {
  if (!this.tableName) throw new Error("Table Name not found");
  if (this.db) return this.db;
  const var_t = await (async () => {
  if (var_T) return var_T;
  const var_t_1 = await function (param_t, param_e, {
  blocked: param_r,
  upgrade: param_n,
  blocking: param_i,
  terminated: param_o
  }
  = {
  }
  ) {
  const var_a_1 = null == param_e ? indexedDB.open(param_t) :
  indexedDB.open(param_t, param_e),
  var_s_2 = var_v_1(var_a_1);
  return param_n && var_a_1.addEventListener("upgradeneeded", param_t_1 => {
  param_n(var_v_1(var_a_1.result), param_t_1.oldVersion, param_t_1.newVersion, var_v_1(
  var_a_1.transaction), param_t_1);
  }
  ), param_r && var_a_1.addEventListener("blocked", param_t_1 => param_r(param_t_1.oldVersion,
  param_t_1.newVersion, param_t_1)), var_s_2.then(param_t_1 => {
  param_o && param_t_1.addEventListener("close", () => param_o()), param_i &&
  param_t_1.addEventListener("versionchange", param_t_2 => param_i(param_t_2.oldVersion,
  param_t_2.newVersion, param_t_2));
  }
  ).catch(() => {
  }
  ), var_s_2;
  }
  ("Abyss", void 0, {
  upgrade(param_t) {
  Object.entries(obj_I).forEach(([param_e, param_r]) => {
  if (param_t.objectStoreNames.contains(param_e)) return;
  const var_n = param_t.createObjectStore(param_e, {
  keyPath: "id",
  autoIncrement: !0
  }
  );
  param_r.forEach(param_t_1 => var_n.createIndex(param_t_1, param_t_1));
  }
  );
  }
  }
  );
  return var_T = var_t_1, var_t_1;
  }
  )();
  return this.db = var_t, var_t;
  }
  async create(param_t) {
  if (!this.db) return !1;
  try {
  return await this.db.add(this.tableName, param_t);
  }
  catch (var_t) {
  return !1;
  }
  }
  async findById(param_t) {
  if (!param_t || !this.db) return !1;
  try {
  return await new Promise((param_e, param_r) => {
  const var_n = this.db.transaction(this.tableName, "readonly").objectStore(this.tableName).get(
  param_t);
  var_n.onsuccess = () => {
  param_e(var_n.result);
  }
  , var_n.onerror = () => {
  param_r(var_n.error);
  };
  }
  );
  }
  catch (var_t) {
  return !1;
  }
  }
  async findOneBy(param_t, param_e) {
  if (!param_t || !param_e || !this.db) return !1;
  try {
  return await new Promise((param_r, param_n) => {
  const var_i = this.db.transaction(this.tableName, "readonly").objectStore(this.tableName).getFromIndex(
  param_t, param_e);
  var_i.onsuccess = () => {
  param_r(var_i.result);
  }
  , var_i.onerror = () => {
  param_n(var_i.error);
  };
  }
  );
  }
  catch (var_t) {
  return !1;
  }
  }
  async findByDecrypt(param_t, param_e) {
  var var_r_1;
  if (!(var_r_1 = param_t && param_e ? await this.findOneBy(param_t, param_e) :
  await this.findById(param_t))) return !1;
  if ("object" != typeof var_r_1.media) {
  const var_t = new var_j();
  await var_t.expandKey(var_r_1.user_id + ":" + var_r_1.slug + ":" + var_r_1.md5_id);
  const var_e = await var_t.decrypt(var_r_1.media);
  var_r_1.media = JSON.parse(var_e);
  }
  return var_r_1;
  }
  async update(param_t, param_e = {
  }
  ) {
  if (!param_t || !this.db) return !1;
  try {
  const var_e = this.db.transaction(this.tableName, "readwrite"),
  var_r_1 = var_e.objectStore(this.tableName),
  var_n = await var_r_1.get(param_t);
  if (!var_n) return !1;
  const var_i = var_a(var_a({
  }
  , var_n), var_e);
  return await var_r_1.put(var_i), await var_e.done, var_i;
  }
  catch (var_e) {
  return !1;
  }
  }
  async delete(param_t) {
  if (!param_t || !this.db) return !1;
  try {
  const var_e = this.db.transaction(this.tableName, "readwrite"),
  var_r_1 = var_e.objectStore(this.tableName);
  return await var_r_1.delete(param_t), await var_e.done, !0;
  }
  catch (var_t) {
  return console.error(var_t), !1;
  }
  }
  }
  let var_B = null;
  const fn_U = async (param_t, param_e) => {
  if (!param_t || !param_e) return !1;
  try {
  const var_r_1 = new var_j();
  await var_r_1.expandKey(param_e);
  let var_n = await var_r_1.encrypt(param_t);
  return var_n = btoa(btoa(var_n).replace(/=/g, "")).replace(/=/g, ""), var_n;
  }
  catch (var_t) {
  return !1;
  }
  }
  ,
  regex_P = /^mp4\/chunk\/(\d+)\/(\d+)\/(\d+)\/([^/]+)\/([^/?]+)/;
  function var_N(param_t) {
  const var_e = new URL(param_t);
  let var_r_1,
  str_n = "";
  if (var_e.hash) {
  const var_t = var_e.hash.replace(/^#/, ""),
  var_i_1 = var_t.indexOf("?");
  var_r_1 = var_i_1 >= 0 ? var_t.slice(0, var_i_1) : var_t, str_n = var_i_1 >= 0 ?
  var_t.slice(var_i_1 + 1) : "";
  }
  else var_r_1 = var_e.pathname.replace(/^\//, ""), str_n = var_e.search.replace(
  /^\?/, "");
  const var_i = var_r_1.match(regex_P);
  if (!var_i) return null;
  const var_o_2 = new URLSearchParams(str_n),
  var_a_1 = parseInt(var_i[3], 10);
  return {
  id: parseInt(var_i[1], 10),
  size: parseInt(var_i[2], 10),
  chunkSize: var_a_1,
  label: var_i[4],
  codec: var_i[5],
  maxChunkSize: parseInt(var_o_2.get("maxChunkSize") || String(var_a_1), 10),
  isUseFristData: "0" !== var_o_2.get("isUseFristData"),
  origin: var_e.origin,
  rawUrl: param_t,
  routerUrl: var_e.origin + "/" + var_r_1 + (str_n ? "?" + str_n :
  "")
  };
  }
  const obj_D = {
  "360p": "640x360",
  "480p": "854x480",
  "720p": "1280x720",
  "1080p": "1920x1080",
  "1440p": "2560x1440",
  "2160p": "3840x2160"
  };
  function var_R(param_t, param_e, param_r, param_n = {
  }
  ) {
  var var_i, var_o_2;
  const var_a_1 = new URL(param_t),
  var_s_2 = null !== (var_i = param_e.mediaId) && void 0 !== var_i ?
  var_i : null === (var_o_2 = var_a_1.hash.match(/mp4\/chunk\/(\d+)\//)) ||
  void 0 === var_o_2 ? void 0 : var_o_2[1];
  if (!var_s_2) throw new Error("Cannot infer media id for chunk URL");
  const var_u_1 = new URLSearchParams(param_n);
  !var_u_1.has("maxChunkSize") && param_r && var_u_1.set("maxChunkSize", String(
  param_r));
  const var_c_1 = var_u_1.toString(),
  var_l_2 = "mp4/chunk/" + var_s_2 + "/" + param_e.size + "/" + param_r + "/" + param_e.label + "/" + param_e.codec + (
  var_c_1 ? "?" + var_c_1 : "");
  return var_a_1.origin + (var_a_1.pathname || "") + "#" + var_l_2;
  }
  async function var_L(param_t, param_e, param_r = {
  }
  ) {
  var var_n, var_i, var_o_2, var_a_1, var_s_2;
  const var_u_1 = param_e.size,
  var_c_1 = param_e.label,
  var_l_2 = param_e.codec,
  var_f_2 = null !== (var_n = null !== (var_i = null !== (var_o_2 = param_r.chunkSize) &&
  void 0 !== var_o_2 ? var_o_2 : param_r.maxChunkSize) && void 0 !== var_i ?
  var_i : param_e.chunkSize) && void 0 !== var_n ? var_n : 2097152,
  var_d_2 = !1 === param_r.isUseFristData,
  var_h_1 = param_r.range || null;
  if (var_u_1 <= 0 || var_f_2 > var_u_1 || var_f_2 > 104857600) throw new Error(
  "Invalid size or chunkSize");
  const {
  sources: var_p_2 = [],
  domains: var_v_2 = [],
  fristDatas: var_m_1 = []
  }
  = (null == param_t || null === (var_a_1 = param_t.media) ||
  void 0 === var_a_1 ? void 0 : var_a_1.mp4) || {
  };
  if (!var_p_2.length || !var_v_2.length) throw new Error("No playable sources found");
  const var_y = var_p_2.find(param_t_1 => param_t_1.label == var_c_1 &&
  param_t_1.codec == var_l_2 && param_t_1.size == var_u_1 &&
  (!param_e.sub || param_t_1.sub == param_e.sub)) || var_p_2.find(param_t_1 => param_t_1.label == var_c_1 &&
  param_t_1.codec == var_l_2 && param_t_1.size == var_u_1) ||
  param_e,
  var_g = var_d_2 ? void 0 : var_m_1.find(param_t_1 => param_t_1.size == var_u_1 &&
  param_t_1.res_id == var_y.res_id && param_t_1.codec == var_l_2);
  let var_b_1 = var_v_2.find(param_t_1 => param_t_1.includes(var_y.sub));
  var_b_1 || (var_b_1 = var_v_2[var_u_1 % var_v_2.length]);
  const var_w_1 = "https://" + var_b_1 + "/mp4/" + param_t.md5_id + "/" + var_y.res_id + "/" + var_u_1 + "/" + var_f_2,
  obj_A = {
  start: 0,
  end: var_u_1 - 1
  }
  ,
  var__ = var_h_1 && /^bytes=(\d+)-(\d+)?/.exec(var_h_1);
  var__ && (obj_A.start = Number(var__[1]), var__[2] && (obj_A.end = Number(var__[2])));
  const obj_E = {
  start: Math.floor(obj_A.start / var_f_2) * var_f_2,
  end: obj_A.end
  }
  ,
  var_S_1 = (obj_A.start, {
  url: var_w_1,
  size: var_u_1,
  chunkSize: var_f_2,
  chunkSizeBuffer: 16384,
  start: obj_E.start,
  end: obj_E.end,
  preBufferSize: 10485760,
  maxPartCache: param_t.hasTouch ? 10 : 60
  }
  );
  var_g && !var_d_2 && (var_S_1.fristData = var_g);
  return {
  params: {
  id: param_t.id,
  size: var_u_1,
  chunkSize: var_f_2,
  label: var_c_1,
  codec: var_l_2,
  maxChunkSize: var_f_2,
  isUseFristData: !var_d_2,
  origin: param_r.origin || null,
  rawUrl: param_r.rawUrl || null,
  routerUrl: null
  }
  ,
  mediaRecord: param_t,
  media: param_t.media,
  mp4: null === (var_s_2 = param_t.media) || void 0 === var_s_2 ?
  void 0 : var_s_2.mp4,
  source: var_y,
  fristData: var_g,
  domain: var_b_1,
  downloadUrl: var_w_1,
  range: obj_A,
  streamOptions: var_S_1
  };
  }
  async function var_q(param_t, param_e = {
  }
  ) {
  var var_r_1, var_i;
  const var_o_2 = null == param_t ? void 0 : param_t.streamOptions;
  if (null == var_o_2 || !var_o_2.url) throw new Error("Invalid chunk info: missing streamOptions.url");
  const var_a_1 = var_o_2.size,
  var_s_2 = var_o_2.chunkSize,
  var_u_1 = var_o_2.fristData,
  {
  origin: var_c_1,
  pathname: var_l_2,
  search: var_f_2
  }
  = new URL(var_o_2.url),
  var_d_2 = Math.ceil(var_a_1 / var_s_2),
  var_h_1 = null !== (var_r_1 = param_e.startPart) && void 0 !== var_r_1 ?
  var_r_1 : Math.floor((var_o_2.start || 0) / var_s_2),
  var_p_2 = null !== (var_i = param_e.endPart) && void 0 !== var_i ?
  var_i : null != var_o_2.end && var_o_2.end >= 0 ? Math.min(Math.floor(var_o_2.end / var_s_2),
  var_d_2 - 1) : var_d_2 - 1;
  let num_v = 0;
  var_u_1 && var_u_1.partSize % var_s_2 == 0 && (num_v = Math.ceil(var_u_1.partSize / var_s_2));
  const list_m = [];
  for (let var_t = var_h_1;
  var_t <= var_p_2 && var_t < var_d_2;
  var_t++) {
  let var_e = var_s_2;
  var_t + 1 === var_d_2 && (var_e = var_a_1 % var_s_2, var_e ||
  (var_e = var_a_1));
  const obj_r = {
  key: fn_n()(var_l_2) + "/" + var_t,
  size: var_e,
  url: var_c_1 + "/sora/" + var_a_1 + "/" + (await fn_U(var_l_2 + "/" + var_t + var_f_2,
  var_a_1)),
  partNumber: var_t
  };
  if (var_t < num_v) {
  let var_e_1 = var_t * var_s_2,
  var_n = var_e_1 + var_s_2 - 1;
  var_n > var_u_1.partSize && (var_n = var_u_1.partSize - 1), obj_r.size = var_n - var_e_1 + 1,
  obj_r.key += ".fd", obj_r.range = "bytes=" + var_e_1 + "-" + var_n, obj_r.urlFristData = var_u_1.url;
  }
  list_m.push(obj_r);
  }
  return list_m;
  }
  function var_F(param_t, param_e = {
  }
  ) {
  var var_r_1;
  if ("function" == typeof param_e.segmentDuration) return param_e.segmentDuration(
  param_t);
  if (param_e.bytesPerSecond > 0) return param_t.size / param_e.bytesPerSecond;
  const var_n = param_e.totalSize || 0,
  var_i = param_e.durationSeconds || 0;
  return var_n > 0 && var_i > 0 ? param_t.size / var_n * var_i :
  null !== (var_r_1 = param_e.defaultSegmentDuration) && void 0 !== var_r_1 ?
  var_r_1 : 10;
  }
  function var_G(param_t, param_e = {
  }
  ) {
  var var_r_1, var_n;
  if (null == param_t || !param_t.length) throw new Error("No segments to build playlist");
  const var_i = null !== (var_r_1 = param_e.defaultSegmentDuration) &&
  void 0 !== var_r_1 ? var_r_1 : 10,
  list_o = ["#EXTM3U", "#EXT-X-VERSION:3", "#EXT-X-MEDIA-SEQUENCE:0"];
  "EVENT" !== param_e.playlistType && list_o.push("#EXT-X-PLAYLIST-TYPE:VOD");
  let var_s_2 = var_i;
  const var_u_1 = var_a(var_a({
  }
  , param_e), {
  }
  , {
  defaultSegmentDuration: var_i
  }
  );
  for (const var_e of param_t) {
  const var_t = var_F(var_e, var_u_1);
  var_s_2 = Math.max(var_s_2, var_t);
  const var_r_2 = var_e.urlFristData || var_e.url;
  if (list_o.push("#EXTINF:" + var_t.toFixed(3) + ","), var_e.range &&
  var_e.urlFristData) {
  const var_t_1 = /^bytes=(\d+)-(\d+)/.exec(var_e.range);
  if (var_t_1) {
  const var_e_1 = parseInt(var_t_1[1], 10),
  var_r_3 = parseInt(var_t_1[2], 10) - var_e_1 + 1;
  list_o.push("#EXT-X-BYTERANGE:" + var_r_3 + "@" + var_e_1);
  }
  }
  list_o.push(var_r_2);
  }
  const var_c_1 = Math.max(1, Math.ceil(null !== (var_n = param_e.targetDuration) &&
  void 0 !== var_n ? var_n : var_s_2));
  list_o.splice(2, 0, "#EXT-X-TARGETDURATION:" + var_c_1), !1 !== param_e.includeEndList &&
  list_o.push("#EXT-X-ENDLIST");
  return {
  playlist: list_o.join("\n"),
  mimeType: "application/vnd.apple.mpegurl",
  segmentCount: param_t.length,
  targetDuration: var_c_1
  };
  }
  return {
  createAllQualityChunkPlaylists: async function (param_t, param_e = {
  }
  ) {
  var var_r_1, var_n;
  const var_i = !0 === param_e.includeMaster;
  let var_o_2 = null !== (var_r_1 = param_e.chunkSize) && void 0 !== var_r_1 ?
  var_r_1 : 2097152;
  if ("string" != typeof param_t) return null;
  const var_s_2 = param_t,
  var_u_1 = var_N(param_t);
  if (!var_u_1) return null;
  var_o_2 = null !== (var_n = var_u_1.chunkSize) && void 0 !== var_n ?
  var_n : var_o_2;
  const var_c_1 = await (async () => {
  try {
  if (var_B = null, "undefined" == typeof indexedDB) throw new Error("indexedDB is not available in this context");
  const var_t = new var_C("files", ["md5_id", "slug"]);
  return await var_t.connect(), var_t;
  }
  catch (var_t) {
  return var_B = var_t, console.error("[ExtractedSw] getMediaDatabase failed:", var_t),
  !1;
  }
  }
  )();
  if (!var_c_1) return null;
  const var_l_2 = await var_c_1.findByDecrypt(var_u_1.id);
  if (!var_l_2) return null;
  const var_f_2 = function (param_t_1, param_e_1 = {
  }
  ) {
  var var_r_2;
  const var_n_1 = (null == param_t_1 || null === (var_r_2 = param_t_1.media) ||
  void 0 === var_r_2 || null === (var_r_2 = var_r_2.mp4) || void 0 === var_r_2 ?
  void 0 : var_r_2.sources) || [],
  var_i_1 = new Map();
  for (const var_t of var_n_1) {
  if (!0 !== param_e_1.includeInactive && !1 === var_t.status) continue;
  const var_r_3 = var_t.label;
  if (!var_r_3) continue;
  const var_n_2 = var_i_1.get(var_r_3);
  (!var_n_2 || var_t.size > var_n_2.size) && var_i_1.set(var_r_3, var_a({
  }
  , var_t));
  }
  return Array.from(var_i_1.values()).sort((param_t_2, param_e_2) => param_t_2.size - param_e_2.size);
  }
  (var_l_2, param_e),
  list_d = [];
  for (const var_t of var_f_2) {
  const var_r_2 = var_s_2 ? var_R(var_s_2, var_a(var_a({
  }
  , var_t), {
  }
  , {
  mediaId: var_l_2.id
  }
  ), var_o_2, var_a({
  maxChunkSize: var_o_2
  }
  , !1 === (null == var_u_1 ? void 0 : var_u_1.isUseFristData) ?
  {
  isUseFristData: "0"
  }
  : {
  }
  )) : null,
  var_n_1 = await var_L(var_l_2, var_t, var_a(var_a({
  }
  , param_e), {
  }
  , {
  chunkSize: var_o_2,
  rawUrl: var_r_2 || param_e.rawUrl,
  origin: null == var_u_1 ? void 0 : var_u_1.origin
  }
  ));
  var_r_2 && (var_n_1.params = var_a(var_a({
  }
  , var_N(var_r_2)), {
  }
  , {
  rawUrl: var_r_2
  }
  ));
  const var_i_1 = await var_q(var_n_1, param_e),
  var_c_2 = var_G(var_i_1, {
  totalSize: var_t.size,
  durationSeconds: param_e.durationSeconds,
  bytesPerSecond: param_e.bytesPerSecond,
  defaultSegmentDuration: param_e.defaultSegmentDuration
  }
  );
  let var_f_3 = null;
  !1 !== param_e.createPlaylistBlobUrl && "undefined" != typeof Blob &&
  (var_f_3 = URL.createObjectURL(new Blob([var_c_2.playlist], {
  type: var_c_2.mimeType
  }
  ))), list_d.push({
  label: var_t.label,
  codec: var_t.codec,
  size: var_t.size,
  res_id: var_t.res_id,
  sub: var_t.sub,
  chunkUrl: var_r_2,
  info: var_n_1,
  segments: var_i_1,
  playlist: var_c_2.playlist,
  playlistMeta: var_c_2,
  playlistUri: var_f_3
  }
  );
  }
  const obj_h_1 = {
  id: var_l_2.id,
  chunkSize: var_o_2,
  mediaRecord: var_l_2,
  qualities: list_d,
  master: null
  };
  return var_i && (obj_h_1.master = function (param_t_1, param_e_1 = {
  }
  ) {
  if (null == param_t_1 || !param_t_1.length) throw new Error("No qualities for master playlist");
  const list_r = ["#EXTM3U", "#EXT-X-VERSION:4", "#EXT-X-INDEPENDENT-SEGMENTS", ""];
  for (const var_d_2 of param_t_1) {
  var var_n_1, var_i_1, var_o_3, var_a_1, var_s_3, var_u_2, var_c_2, var_l_3, var_f_3;
  const var_t = null !== (var_n_1 = null === (var_i_1 = param_e_1.bandwidth) ||
  void 0 === var_i_1 ? void 0 : var_i_1.call(param_e_1, var_d_2)) &&
  void 0 !== var_n_1 ? var_n_1 : Math.max(1, Math.floor(8 * var_d_2.size)),
  var_h_1 = null !== (var_o_3 = null !== (var_a_1 = null === (var_s_3 = param_e_1.resolution) ||
  void 0 === var_s_3 ? void 0 : var_s_3.call(param_e_1, var_d_2)) &&
  void 0 !== var_a_1 ? var_a_1 : obj_D[var_d_2.label]) && void 0 !== var_o_3 ?
  var_o_3 : void 0,
  var_p_2 = ["BANDWIDTH=" + var_t, var_h_1 ? "RESOLUTION=" + var_h_1 :
  null, "h264" === var_d_2.codec ? 'CODECS="avc1.4d401f,mp4a.40.2"' :
  'CODECS="' + var_d_2.codec + '"', 'NAME="' + var_d_2.label + '"'].filter(Boolean).join(
  ","),
  var_v_2 = null !== (var_u_2 = null !== (var_c_2 = null !== (var_l_3 = null === (
  var_f_3 = param_e_1.playlistUri) || void 0 === var_f_3 ? void 0 :
  var_f_3.call(param_e_1, var_d_2)) && void 0 !== var_l_3 ? var_l_3 :
  var_d_2.playlistUri) && void 0 !== var_c_2 ? var_c_2 : var_d_2.chunkUrl) &&
  void 0 !== var_u_2 ? var_u_2 : "";
  list_r.push("#EXT-X-STREAM-INF:" + var_p_2), list_r.push(var_v_2);
  }
  return list_r.push(""), {
  playlist: list_r.join("\n"),
  mimeType: "application/vnd.apple.mpegurl",
  variantCount: param_t_1.length
  };
  }
  (list_d, var_a(var_a({
  }
  , param_e), {
  }
  , {
  playlistUri: param_e.playlistUri || (param_t_1 => param_t_1.playlistUri ||
  param_t_1.chunkUrl || "")
  }
  ))), obj_h_1;
  }
  };
  }
  function var_h() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o_1(param_r, param_n, param_i, param_o) {
  var var_u_2 = param_n && param_n.prototype instanceof var_s_1 ?
  param_n : var_s_1,
  var_c_2 = Object.create(var_u_2.prototype);
  return var_p(var_c_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_2,
  var_s_2,
  var_u_3,
  num_c = 0,
  var_l_2 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_2 = param_e, var_s_2 = 0, var_u_3 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_3 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_3 = var_l_2[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_3[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_3 = var_o_3[(var_s_2 = var_o_3[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_3[4] = var_o_3[5] = var_t) : var_o_3[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_3[1]) ? (var_s_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_3[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_3[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_3[4] = param_r_2, var_o_3[5] = param_n_2,
  obj_d.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_3 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_3) || !flag_f;
  ) {
  var_o_2 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d.n = -1), var_h_1(var_s_2,
  var_u_3)) : obj_d.n = var_u_3 : obj_d.v = var_u_3);
  try {
  if (num_c = 2, var_o_2) {
  if (var_s_2 || (param_i_2 = "next"), var_e = var_o_2[param_i_2]) {
  if (!(var_e = var_e.call(var_o_2, var_u_3))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_3 = var_e.value, var_s_2 < 2 && (var_s_2 = 0);
  }
  else 1 === var_s_2 && (var_e = var_o_2.return) && var_e.call(var_o_2), var_s_2 < 2 &&
  (var_u_3 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_2 = 1);
  var_o_2 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_3 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_2 = var_t, var_s_2 = 1, var_u_3 = var_e_1;
  }
  finally {
  num_c = 1;
  }
  }
  return {
  value: var_e,
  done: flag_f
  };
  };
  }
  (param_r, param_i, param_o), !0), var_c_2;
  }
  var obj_a = {
  };
  function var_s_1() {
  }
  function var_u_1() {
  }
  function var_c_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_l_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_p(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_f_1 = var_c_1.prototype = var_s_1.prototype = Object.create(var_l_1);
  function var_d_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c_1) :
  (param_t.__proto__ = var_c_1, var_p(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_f_1), param_t;
  }
  return var_u_1.prototype = var_c_1, var_p(var_f_1, "constructor", var_c_1), var_p(
  var_c_1, "constructor", var_u_1), var_u_1.displayName = "GeneratorFunction", var_p(
  var_c_1, var_i, "GeneratorFunction"), var_p(var_f_1), var_p(var_f_1, var_i, "Generator"),
  var_p(var_f_1, var_n, function () {
  return this;
  }
  ), var_p(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_h = function () {
  return {
  w: var_o_1,
  m: var_d_1
  };
  }
  )();
  }
  function var_p(param_t, param_e, param_r, param_n) {
  var var_i = Object.defineProperty;
  try {
  var_i({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_i = 0;
  }
  (var_p = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o_1(param_e_2, param_r_2) {
  var_p(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_i ? var_i(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_o_1("next", 0), var_o_1("throw", 1),
  var_o_1("return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  function var_v(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_m(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_m(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t)) || param_e && param_t && "number" == typeof param_t.length) {
  var_r && (param_t = var_r);
  var num_n = 0,
  fn_i = function () {
  };
  return {
  s: fn_i,
  n: function () {
  return num_n >= param_t.length ? {
  done: !0
  }
  : {
  done: !1,
  value: param_t[num_n++]
  };
  }
  ,
  e: function (param_t_1) {
  throw param_t_1;
  }
  ,
  f: fn_i
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_o_1,
  flag_a = !0,
  flag_s = !1;
  return {
  s: function () {
  var_r = var_r.call(param_t);
  }
  ,
  n: function () {
  var var_t = var_r.next();
  return flag_a = var_t.done, var_t;
  }
  ,
  e: function (param_t_1) {
  flag_s = !0, var_o_1 = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_a || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_s) throw var_o_1;
  }
  }
  };
  }
  function var_m(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var_l.prototype["function" == typeof Symbol && Symbol.asyncIterator ||
  "@@asyncIterator"] = function () {
  return this;
  }
  , var_l.prototype.next = function (param_t) {
  return this._invoke("next", param_t);
  }
  , var_l.prototype.throw = function (param_t) {
  return this._invoke("throw", param_t);
  }
  , var_l.prototype.return = function (param_t) {
  return this._invoke("return", param_t);
  };
  var fn_y = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
  try {
  var_u_1(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s_1(param_t_1) {
  try {
  var_u_1(param_n.throw(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_u_1(param_t_1) {
  var var_e;
  param_t_1.done ? param_i(param_t_1.value) : (var_e = param_t_1.value, var_e instanceof param_r ?
  var_e : new param_r(function (param_t_2) {
  param_t_2(var_e);
  }
  )).then(var_a_1, var_s_1);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  };
  exportsObj.default = {
  index: 20,
  getUrl(param_t, param_e, param_r, param_o) {
  var var_a_1, var_s_1, var_u_1;
  return fn_y(this, void 0, void 0, var_h().m(function var_e() {
  var var_o_1, var_c_1, var_l_1, var_f_1, var_p_1, var_m_1, var_y, var_g, var_b,
  var_w, var_A, var__, var_E, var_S, var_O, var_x, var_k, var_M;
  return var_h().w(function (param_e_1) {
  for (;;
  ) switch (param_e_1.p = param_e_1.n) {
  case 0:
  if (param_e_1.p = 0, !(var_o_1 = null === (var_a_1 = document.body.querySelector(
  "video")) || void 0 === var_a_1 ? void 0 : var_a_1.src)) {
  param_e_1.n = 2;
  break;
  }
  return var_c_1 = var_d(), param_e_1.n = 1, var_c_1.createAllQualityChunkPlaylists(
  var_o_1);
  case 1:
  if (var_l_1 = param_e_1.v, !(null === (var_s_1 = null == var_l_1 ?
  void 0 : var_l_1.qualities) || void 0 === var_s_1 ? void 0 :
  var_s_1.length)) {
  param_e_1.n = 2;
  break;
  }
  return param_e_1.a(2, {
  return: !0,
  data: {
  qualities: var_l_1.qualities
  }
  }
  );
  case 2:
  param_e_1.n = 4;
  break;
  case 3:
  param_e_1.p = 3, var_k = param_e_1.v, console.error(var_k);
  case 4:
  if (!param_t.match(/(nazarickol\.com)|(playhydrax\.com)|(geoip\.redirect-ads\.com)/i)) {
  param_e_1.n = 14;
  break;
  }
  if (param_e_1.p = 5, var_f_1 = document.querySelector("#player video"), var_p_1 = (
  null == var_f_1 ? void 0 : var_f_1.src) || "", var_m_1 = location.href, var_y = {
  method: "get",
  headers: {
  "X-Requested-With": "XMLHttpRequest",
  Origin: var_m_1,
  Referer: var_m_1
  }
  }
  , !var_p_1.includes("blob:") || !var_p_1.includes("playhydrax.com") &&
  !var_p_1.includes("geoip.redirect-ads.com")) {
  param_e_1.n = 11;
  break;
  }
  if (var_p_1 = (var_p_1 = var_p_1.slice(5)).replace("://geoip-redirect-ads.com",
  "://playhydrax.com"), var_m_1 = var_m_1.replace("://geoip-redirect-ads.com", "://playhydrax.com"),
  param_e_1.p = 6, var_g = var_p_1, -1 !== param_r.requestedUrls.indexOf(var_g)) {
  param_e_1.n = 8;
  break;
  }
  return param_e_1.n = 7, fetch(var_g, var_y).then(param_t_1 => param_t_1.text());
  case 7:
  return var_b = param_e_1.v, param_r.requestedUrls.push(var_g), param_e_1.a(2, {
  return: !0,
  data: {
  url: var_p_1,
  response: var_b
  }
  }
  );
  case 8:
  param_e_1.n = 10;
  break;
  case 9:
  param_e_1.p = 9, param_e_1.v, param_r.requestedUrls.push(var_p_1);
  case 10:
  param_e_1.n = 12;
  break;
  case 11:
  if (!var_p_1.includes("storage.googleapis.com") || !var_p_1.includes("/mediastorage")) {
  param_e_1.n = 12;
  break;
  }
  return param_e_1.a(2, {
  return: !0,
  data: {
  url: var_p_1
  }
  }
  );
  case 12:
  param_e_1.n = 14;
  break;
  case 13:
  param_e_1.p = 13, var_M = param_e_1.v, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CONSOLE_LOG,
  params: {
  url: {
  error: var_M
  }
  }
  }
  );
  case 14:
  if (location.href.includes("/hydra/?slug")) {
  var_w = /HYDRA_SOURCES\s*=\s*('|")*(\[.*?\])('\n|"\n|,|;)*/, var_A = [...document.querySelectorAll(
  "script")].filter(param_t_1 => param_t_1.innerText), var__ = var_v(var_A);
  try {
  for (var__.s();
  !(var_E = var__.n()).done;
  ) var_S = var_E.value, var_O = var_S.innerText, var_w.test(var_O) &&
  (var_x = (null === (var_u_1 = var_w.exec(var_O)) || void 0 === var_u_1 ?
  void 0 : var_u_1[2]) || "null", Object(dep_dom_utils.sendMessage)({
  requestType: "save_url",
  params: {
  url: JSON.parse(var_x)
  }
  }
  ));
  }
  catch (var_t) {
  var__.e(var_t);
  }
  finally {
  var__.f();
  }
  }
  return param_e_1.a(2, {
  return: !1,
  data: null
  }
  );
  }
  }
  , var_e, null, [[6, 9], [5, 13], [0, 3]]);
  }
  ));
  }
  };
  };
