// Module 439 [utilities] - URL pattern and request rule matcher
export default function (moduleObj, exportsObj, requireFn) {
  var dep_ieee754_buffer = requireFn(27);
  var var_o = dep_ieee754_buffer.Buffer;
  function var_i(param_e, param_t) {
  for (var var_r in param_e) {
  param_t[var_r] = param_e[var_r];
  }
  }
  function var_a(param_e, param_t, param_r) {
  return var_o(param_e, param_t, param_r);
  }
  if (var_o.from && var_o.alloc && var_o.allocUnsafe && var_o.allocUnsafeSlow) {
  moduleObj.exports = dep_ieee754_buffer;
  }
  else {
  var_i(dep_ieee754_buffer, exportsObj);
  exportsObj.Buffer = var_a;
  }
  var_i(var_o, var_a);
  var_a.from = function (param_e, param_t, param_r) {
  if (typeof param_e == "number") {
  throw new TypeError("Argument must not be a number");
  }
  return var_o(param_e, param_t, param_r);
  };
  var_a.alloc = function (param_e, param_t, param_r) {
  if (typeof param_e != "number") {
  throw new TypeError("Argument must be a number");
  }
  var var_n = var_o(param_e);
  if (param_t !== undefined) {
  if (typeof param_r == "string") {
  var_n.fill(param_t, param_r);
  }
  else {
  var_n.fill(param_t);
  }
  }
  else {
  var_n.fill(0);
  }
  return var_n;
  };
  var_a.allocUnsafe = function (param_e) {
  if (typeof param_e != "number") {
  throw new TypeError("Argument must be a number");
  }
  return var_o(param_e);
  };
  var_a.allocUnsafeSlow = function (param_e) {
  if (typeof param_e != "number") {
  throw new TypeError("Argument must be a number");
  }
  return dep_ieee754_buffer.SlowBuffer(param_e);
  };
  };
