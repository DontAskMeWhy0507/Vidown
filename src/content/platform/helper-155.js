// Module 155 - Savior Helper 155
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  moduleObj.exports = function (param_t, param_r) {
  for (var var_n = Math.min(param_t.length, param_r.length), var_i = new param_e(
  var_n), num_o = 0;
  num_o < var_n;
  ++num_o) var_i[num_o] = param_t[num_o] ^ param_r[num_o];
  return var_i;
  };
  }
  ).call(this, requireFn(27).Buffer);
  };
