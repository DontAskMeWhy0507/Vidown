// Module 583 - Savior Helper 583
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_encrypted_stream_decipherer = requireFn(140),
  dep_helper_584 = requireFn(584),
  var_o = requireFn(585)(),
  dep_helper_129 = requireFn(129),
  dep_helper_115 = requireFn(115),
  var_u = dep_encrypted_stream_decipherer("%Math.floor%");
  moduleObj.exports = function (param_t, param_e) {
  if ("function" != typeof param_t) throw new dep_helper_115("`fn` is not a function");
  if ("number" != typeof param_e || param_e < 0 || param_e > 4294967295 ||
  var_u(param_e) !== param_e) throw new dep_helper_115("`length` must be a positive 32-bit integer");
  var var_r = arguments.length > 2 && !!arguments[2],
  flag_n = !0,
  flag_c = !0;
  if ("length" in param_t && dep_helper_129) {
  var var_l = dep_helper_129(param_t, "length");
  var_l && !var_l.configurable && (flag_n = !1), var_l && !var_l.writable &&
  (flag_c = !1);
  }
  return (flag_n || flag_c || !var_r) && (var_o ? dep_helper_584(param_t, "length",
  param_e, !0, !0) : dep_helper_584(param_t, "length", param_e)), param_t;
  };
  };
