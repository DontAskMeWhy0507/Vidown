// Module 52 [crypto] - CryptoJS cryptographic component (enc-hex)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  (function () {
  var var_e = var_n;
  var var_t = var_e.lib.WordArray;
  var var_r = var_e.enc;
  function var_o(param_e) {
  return param_e << 8 & -16711936 | param_e >>> 8 & 16711935;
  }
  var_r.Utf16 = var_r.Utf16BE = {
  stringify: function (param_e) {
  var var_t_1 = param_e.words;
  for (var var_r_1 = param_e.sigBytes, list_n = [], num_o = 0;
  num_o < var_r_1;
  num_o += 2) {
  var var_i = var_t_1[num_o >>> 2] >>> 16 - num_o % 4 * 8 & 65535;
  list_n.push(String.fromCharCode(var_i));
  }
  return list_n.join("");
  }
  ,
  parse: function (param_e) {
  for (var var_r_1 = param_e.length, list_n = [], num_o = 0;
  num_o < var_r_1;
  num_o++) {
  list_n[num_o >>> 1] |= param_e.charCodeAt(num_o) << 16 - num_o % 2 * 16;
  }
  return var_t.create(list_n, var_r_1 * 2);
  }
  };
  var_r.Utf16LE = {
  stringify: function (param_e) {
  var var_t_1 = param_e.words;
  for (var var_r_1 = param_e.sigBytes, list_n = [], num_i = 0;
  num_i < var_r_1;
  num_i += 2) {
  var var_a = var_o(var_t_1[num_i >>> 2] >>> 16 - num_i % 4 * 8 & 65535);
  list_n.push(String.fromCharCode(var_a));
  }
  return list_n.join("");
  }
  ,
  parse: function (param_e) {
  for (var var_r_1 = param_e.length, list_n = [], num_i = 0;
  num_i < var_r_1;
  num_i++) {
  list_n[num_i >>> 1] |= var_o(param_e.charCodeAt(num_i) << 16 - num_i % 2 * 16);
  }
  return var_t.create(list_n, var_r_1 * 2);
  }
  };
  }
  )();
  moduleObj.exports = var_n.enc.Utf16;
  };
