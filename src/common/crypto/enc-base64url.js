// Module 53 [crypto] - CryptoJS cryptographic component (enc-base64url)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  var_o = (var_r = var_i).lib.WordArray;
  var_r.enc.Base64url = {
  stringify: function (param_e, param_t = true) {
  var var_n = param_e.words;
  var var_r_1 = param_e.sigBytes;
  var var_o_1 = param_t ? this._safe_map : this._map;
  param_e.clamp();
  var list_i = [];
  for (var num_a = 0;
  num_a < var_r_1;
  num_a += 3) {
  var var_s = (var_n[num_a >>> 2] >>> 24 - num_a % 4 * 8 & 255) << 16 | (var_n[num_a + 1 >>> 2] >>> 24 - (
  num_a + 1) % 4 * 8 & 255) << 8 | var_n[num_a + 2 >>> 2] >>> 24 - (num_a + 2) % 4 * 8 & 255;
  for (var num_c = 0;
  num_c < 4 && num_a + num_c * 0.75 < var_r_1;
  num_c++) {
  list_i.push(var_o_1.charAt(var_s >>> (3 - num_c) * 6 & 63));
  }
  }
  var var_l = var_o_1.charAt(64);
  if (var_l) {
  while (list_i.length % 4) {
  list_i.push(var_l);
  }
  }
  return list_i.join("");
  }
  ,
  parse: function (param_e, param_t = true) {
  var var_n = param_e.length;
  var var_r_1 = param_t ? this._safe_map : this._map;
  var var_i_1 = this._reverseMap;
  if (!var_i_1) {
  var_i_1 = this._reverseMap = [];
  for (var num_a = 0;
  num_a < var_r_1.length;
  num_a++) {
  var_i_1[var_r_1.charCodeAt(num_a)] = num_a;
  }
  }
  var var_s = var_r_1.charAt(64);
  if (var_s) {
  var var_c = param_e.indexOf(var_s);
  if (var_c !== -1) {
  var_n = var_c;
  }
  }
  return function (param_e_1, param_t_1, param_n) {
  var list_r = [];
  var num_i = 0;
  for (var num_a_1 = 0;
  num_a_1 < param_t_1;
  num_a_1++) {
  if (num_a_1 % 4) {
  var var_s_1 = param_n[param_e_1.charCodeAt(num_a_1 - 1)] << num_a_1 % 4 * 2;
  var var_c_1 = param_n[param_e_1.charCodeAt(num_a_1)] >>> 6 - num_a_1 % 4 * 2;
  var var_l = var_s_1 | var_c_1;
  list_r[num_i >>> 2] |= var_l << 24 - num_i % 4 * 8;
  num_i++;
  }
  }
  return var_o.create(list_r, num_i);
  }
  (param_e, var_n, var_i_1);
  }
  ,
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  };
  moduleObj.exports = var_i.enc.Base64url;
  };
