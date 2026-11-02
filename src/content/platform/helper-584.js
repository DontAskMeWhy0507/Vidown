// Module 584 - Savior Helper 584
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_136 = requireFn(136),
  dep_helper_166 = requireFn(166),
  dep_helper_115 = requireFn(115),
  dep_helper_129 = requireFn(129);
  moduleObj.exports = function (param_t, param_e, param_r) {
  if (!param_t || "object" != typeof param_t && "function" != typeof param_t) throw new dep_helper_115(
  "`obj` must be an object or a function`");
  if ("string" != typeof param_e && "symbol" != typeof param_e) throw new dep_helper_115(
  "`property` must be a string or a symbol`");
  if (arguments.length > 3 && "boolean" != typeof arguments[3] &&
  null !== arguments[3]) throw new dep_helper_115("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && "boolean" != typeof arguments[4] &&
  null !== arguments[4]) throw new dep_helper_115("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && "boolean" != typeof arguments[5] &&
  null !== arguments[5]) throw new dep_helper_115("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new dep_helper_115(
  "`loose`, if provided, must be a boolean");
  var var_s = arguments.length > 3 ? arguments[3] : null,
  var_u = arguments.length > 4 ? arguments[4] : null,
  var_c = arguments.length > 5 ? arguments[5] : null,
  var_l = arguments.length > 6 && arguments[6],
  var_f = !!dep_helper_129 && dep_helper_129(param_t, param_e);
  if (dep_helper_136) dep_helper_136(param_t, param_e, {
  configurable: null === var_c && var_f ? var_f.configurable :
  !var_c,
  enumerable: null === var_s && var_f ? var_f.enumerable : !var_s,
  value: param_r,
  writable: null === var_u && var_f ? var_f.writable : !var_u
  }
  );
  else {
  if (!var_l && (var_s || var_u || var_c)) throw new dep_helper_166("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  param_t[param_e] = param_r;
  }
  };
  };
