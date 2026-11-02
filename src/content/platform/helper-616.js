// Module 616 - Savior Helper 616
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  var dep_helper_484 = requireFn(484),
  dep_helper_621 = requireFn(621),
  dep_helper_622 = requireFn(622);
  var obj_a = {
  binary: !0,
  hex: !0,
  base64: !0
  };
  exportsObj.DiffieHellmanGroup = exportsObj.createDiffieHellmanGroup = exportsObj.getDiffieHellman = function (
  param_e) {
  var var_r = new param_t(dep_helper_621[param_e].prime, "hex"),
  var_n = new param_t(dep_helper_621[param_e].gen, "hex");
  return new dep_helper_622(var_r, var_n);
  }
  , exportsObj.createDiffieHellman = exportsObj.DiffieHellman = function var_e(param_r,
  param_i, param_s, param_u) {
  return param_t.isBuffer(param_i) || void 0 === obj_a[param_i] ?
  var_e(param_r, "binary", param_i, param_s) : (param_i = param_i ||
  "binary", param_u = param_u || "binary", param_s = param_s ||
  new param_t([2]), param_t.isBuffer(param_s) || (param_s = new param_t(param_s,
  param_u)), "number" == typeof param_r ? new dep_helper_622(dep_helper_484(param_r,
  param_s), param_s, !0) : (param_t.isBuffer(param_r) || (param_r = new param_t(
  param_r, param_i)), new dep_helper_622(param_r, param_s, !0)));
  };
  }
  ).call(this, requireFn(27).Buffer);
  };
