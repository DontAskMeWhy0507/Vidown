// Module 662 - Savior Helper 662
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_15 = requireFn(15),
  dep_helper_500 = requireFn(500);
  function var_o(param_t) {
  dep_helper_500.call(this, param_t), this.enc = "pem";
  }
  dep_module_15(var_o, dep_helper_500), moduleObj.exports = var_o, var_o.prototype.encode = function (
  param_t, param_e) {
  for (var var_r = dep_helper_500.prototype.encode.call(this, param_t).toString(
  "base64"), list_n = ["-----BEGIN " + param_e.label + "-----"], num_o = 0;
  num_o < var_r.length;
  num_o += 64) list_n.push(var_r.slice(num_o, num_o + 64));
  return list_n.push("-----END " + param_e.label + "-----"), list_n.join("\n");
  };
  };
