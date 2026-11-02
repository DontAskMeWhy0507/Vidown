// Module 18 [crypto] - CryptoJS cryptographic component (enc-base64)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  var_o = (var_r = var_i).lib.WordArray;
  var_r.enc.Base64 = {
  stringify: function (param_e) {
  var var_t = param_e.words;
  var var_n = param_e.sigBytes;
  var var_r_1 = this._map;
  param_e.clamp();
  var list_o = [];
  for (var num_i = 0;
  num_i < var_n;
  num_i += 3) {
  var var_a = (var_t[num_i >>> 2] >>> 24 - num_i % 4 * 8 & 255) << 16 | (var_t[num_i + 1 >>> 2] >>> 24 - (
  num_i + 1) % 4 * 8 & 255) << 8 | var_t[num_i + 2 >>> 2] >>> 24 - (num_i + 2) % 4 * 8 & 255;
  for (var num_s = 0;
  num_s < 4 && num_i + num_s * 0.75 < var_n;
  num_s++) {
  list_o.push(var_r_1.charAt(var_a >>> (3 - num_s) * 6 & 63));
  }
  }
  var var_c = var_r_1.charAt(64);
  if (var_c) {
  while (list_o.length % 4) {
  list_o.push(var_c);
  }
  }
  return list_o.join("");
  }
  ,
  parse: function (param_e) {
  var var_t = param_e.length;
  var var_n = this._map;
  var var_r_1 = this._reverseMap;
  if (!var_r_1) {
  var_r_1 = this._reverseMap = [];
  for (var num_i = 0;
  num_i < var_n.length;
  num_i++) {
  var_r_1[var_n.charCodeAt(num_i)] = num_i;
  }
  }
  var var_a = var_n.charAt(64);
  if (var_a) {
  var var_s = param_e.indexOf(var_a);
  if (var_s !== -1) {
  var_t = var_s;
  }
  }
  return function (param_e_1, param_t, param_n) {
  var list_r = [];
  var num_i_1 = 0;
  for (var num_a = 0;
  num_a < param_t;
  num_a++) {
  if (num_a % 4) {
  var var_s_1 = param_n[param_e_1.charCodeAt(num_a - 1)] << num_a % 4 * 2;
  var var_c = param_n[param_e_1.charCodeAt(num_a)] >>> 6 - num_a % 4 * 2;
  var var_l = var_s_1 | var_c;
  list_r[num_i_1 >>> 2] |= var_l << 24 - num_i_1 % 4 * 8;
  num_i_1++;
  }
  }
  return var_o.create(list_r, num_i_1);
  }
  (param_e, var_t, var_r_1);
  }
  ,
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  moduleObj.exports = var_i.enc.Base64;
  };
