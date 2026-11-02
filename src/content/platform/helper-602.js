// Module 602 - Savior Helper 602
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_130 = requireFn(130),
  dep_helper_603 = requireFn(603),
  dep_module_15 = requireFn(15),
  var_a = requireFn(25).Buffer,
  obj_s = {
  "des-ede3-cbc": dep_helper_603.CBC.instantiate(dep_helper_603.EDE),
  "des-ede3": dep_helper_603.EDE,
  "des-ede-cbc": dep_helper_603.CBC.instantiate(dep_helper_603.EDE),
  "des-ede": dep_helper_603.EDE,
  "des-cbc": dep_helper_603.CBC.instantiate(dep_helper_603.DES),
  "des-ecb": dep_helper_603.DES
  };
  function var_u(param_t) {
  dep_helper_130.call(this);
  var var_e,
  var_r = param_t.mode.toLowerCase(),
  var_i = obj_s[var_r];
  var_e = param_t.decrypt ? "decrypt" : "encrypt";
  var var_o = param_t.key;
  var_a.isBuffer(var_o) || (var_o = var_a.from(var_o)), "des-ede" !== var_r &&
  "des-ede-cbc" !== var_r || (var_o = var_a.concat([var_o, var_o.slice(0, 8)]));
  var var_u_1 = param_t.iv;
  var_a.isBuffer(var_u_1) || (var_u_1 = var_a.from(var_u_1)), this._des = var_i.create(
  {
  key: var_o,
  iv: var_u_1,
  type: var_e
  }
  );
  }
  obj_s.des = obj_s["des-cbc"], obj_s.des3 = obj_s["des-ede3-cbc"], moduleObj.exports = var_u,
  dep_module_15(var_u, dep_helper_130), var_u.prototype._update = function (param_t) {
  return var_a.from(this._des.update(param_t));
  }
  , var_u.prototype._final = function () {
  return var_a.from(this._des.final());
  };
  };
