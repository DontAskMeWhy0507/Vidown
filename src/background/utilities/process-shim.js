// Module 32 [utilities] - Stream / runtime utility component (process-shim)
export default function (moduleObj, exportsObj) {
  var var_r;
  var var_n;
  var var_o = moduleObj.exports = {
  };
  function var_i() {
  throw new Error("setTimeout has not been defined");
  }
  function var_a() {
  throw new Error("clearTimeout has not been defined");
  }
  function var_s(param_e) {
  if (var_r === setTimeout) {
  return setTimeout(param_e, 0);
  }
  if ((var_r === var_i || !var_r) && setTimeout) {
  var_r = setTimeout;
  return setTimeout(param_e, 0);
  }
  try {
  return var_r(param_e, 0);
  }
  catch (var_t) {
  try {
  return var_r.call(null, param_e, 0);
  }
  catch (var_t_1) {
  return var_r.call(this, param_e, 0);
  }
  }
  }
  (function () {
  try {
  var_r = typeof setTimeout == "function" ? setTimeout : var_i;
  }
  catch (var_e) {
  var_r = var_i;
  }
  try {
  var_n = typeof clearTimeout == "function" ? clearTimeout :
  var_a;
  }
  catch (var_e) {
  var_n = var_a;
  }
  }
  )();
  var var_c;
  var list_u = [];
  var flag_l = false;
  var var_d = -1;
  function var_p() {
  if (flag_l && var_c) {
  flag_l = false;
  if (var_c.length) {
  list_u = var_c.concat(list_u);
  }
  else {
  var_d = -1;
  }
  if (list_u.length) {
  var_f();
  }
  }
  }
  function var_f() {
  if (!flag_l) {
  var var_e = var_s(var_p);
  flag_l = true;
  for (var var_t = list_u.length;
  var_t;
  ) {
  var_c = list_u;
  list_u = [];
  while (++var_d < var_t) {
  if (var_c) {
  var_c[var_d].run();
  }
  }
  var_d = -1;
  var_t = list_u.length;
  }
  var_c = null;
  flag_l = false;
  (function (param_e) {
  if (var_n === clearTimeout) {
  return clearTimeout(param_e);
  }
  if ((var_n === var_a || !var_n) && clearTimeout) {
  var_n = clearTimeout;
  return clearTimeout(param_e);
  }
  try {
  var_n(param_e);
  }
  catch (var_t_1) {
  try {
  return var_n.call(null, param_e);
  }
  catch (var_t_2) {
  return var_n.call(this, param_e);
  }
  }
  }
  )(var_e);
  }
  }
  function var_h(param_e, param_t) {
  this.fun = param_e;
  this.array = param_t;
  }
  function var_m() {
  }
  var_o.nextTick = function (param_e) {
  var var_t = new Array(arguments.length - 1);
  if (arguments.length > 1) {
  for (var num_r = 1;
  num_r < arguments.length;
  num_r++) {
  var_t[num_r - 1] = arguments[num_r];
  }
  }
  list_u.push(new var_h(param_e, var_t));
  if (list_u.length === 1 && !flag_l) {
  var_s(var_f);
  }
  };
  var_h.prototype.run = function () {
  this.fun.apply(null, this.array);
  };
  var_o.title = "browser";
  var_o.browser = true;
  var_o.env = {
  };
  var_o.argv = [];
  var_o.version = "";
  var_o.versions = {
  };
  var_o.on = var_m;
  var_o.addListener = var_m;
  var_o.once = var_m;
  var_o.off = var_m;
  var_o.removeListener = var_m;
  var_o.removeAllListeners = var_m;
  var_o.emit = var_m;
  var_o.prependListener = var_m;
  var_o.prependOnceListener = var_m;
  var_o.listeners = function (param_e) {
  return [];
  };
  var_o.binding = function (param_e) {
  throw new Error("process.binding is not supported");
  };
  var_o.cwd = function () {
  return "/";
  };
  var_o.chdir = function (param_e) {
  throw new Error("process.chdir is not supported");
  };
  var_o.umask = function () {
  return 0;
  };
  };
