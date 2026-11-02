// Module 425 - Savior Helper 425
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_27 = requireFn(27),
  var_i = dep_module_27.Buffer;
  function var_o(param_t, param_e) {
  for (var var_r in param_t) param_e[var_r] = param_t[var_r];
  }
  function var_a(param_t, param_e, param_r) {
  return var_i(param_t, param_e, param_r);
  }
  var_i.from && var_i.alloc && var_i.allocUnsafe && var_i.allocUnsafeSlow ?
  moduleObj.exports = dep_module_27 : (var_o(dep_module_27, exportsObj), exportsObj.Buffer = var_a),
  var_o(var_i, var_a), var_a.from = function (param_t, param_e, param_r) {
  if ("number" == typeof param_t) throw new TypeError("Argument must not be a number");
  return var_i(param_t, param_e, param_r);
  }
  , var_a.alloc = function (param_t, param_e, param_r) {
  if ("number" != typeof param_t) throw new TypeError("Argument must be a number");
  var var_n = var_i(param_t);
  return void 0 !== param_e ? "string" == typeof param_r ? var_n.fill(param_e, param_r) :
  var_n.fill(param_e) : var_n.fill(0), var_n;
  }
  , var_a.allocUnsafe = function (param_t) {
  if ("number" != typeof param_t) throw new TypeError("Argument must be a number");
  return var_i(param_t);
  }
  , var_a.allocUnsafeSlow = function (param_t) {
  if ("number" != typeof param_t) throw new TypeError("Argument must be a number");
  return dep_module_27.SlowBuffer(param_t);
  };
  };
