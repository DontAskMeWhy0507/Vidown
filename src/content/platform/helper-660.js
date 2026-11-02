// Module 660 - Savior Helper 660
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_15 = requireFn(15),
  var_i = requireFn(27).Buffer,
  dep_helper_499 = requireFn(499);
  function var_a(param_t) {
  dep_helper_499.call(this, param_t), this.enc = "pem";
  }
  dep_module_15(var_a, dep_helper_499), moduleObj.exports = var_a, var_a.prototype.decode = function (
  param_t, param_e) {
  for (var var_r = param_t.toString().split(/[\r\n]+/g), var_n = param_e.label.toUpperCase(
  ), regex_a = /^-----(BEGIN|END) ([^-]+)-----$/, var_s = -1, var_u = -1, num_c = 0;
  num_c < var_r.length;
  num_c++) {
  var var_l = var_r[num_c].match(regex_a);
  if (null !== var_l && var_l[2] === var_n) {
  if (-1 !== var_s) {
  if ("END" !== var_l[1]) break;
  var_u = num_c;
  break;
  }
  if ("BEGIN" !== var_l[1]) break;
  var_s = num_c;
  }
  }
  if (-1 === var_s || -1 === var_u) throw new Error("PEM section not found for: " + var_n);
  var var_f = var_r.slice(var_s + 1, var_u).join("");
  var_f.replace(/[^a-z0-9\+\/=]+/gi, "");
  var var_d = new var_i(var_f, "base64");
  return dep_helper_499.prototype.decode.call(this, var_d, param_e);
  };
  };
