// Module 518 [utilities] - Authorization header injector for stream requests
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_network_monitor = requireFn(440);
  var dep_cookie_auth_provider = requireFn(516);
  var dep_helper_136 = requireFn(136);
  var var_a = Object.prototype.hasOwnProperty;
  var var_s = Array.isArray;
  var var_c = dep_cookie_auth_provider();
  function var_u(param_e, param_t) {
  var_c.set(param_e, param_t);
  return param_e;
  }
  function var_l(param_e) {
  return var_c.has(param_e);
  }
  function var_d(param_e) {
  return var_c.get(param_e);
  }
  function var_p(param_e, param_t) {
  var_c.set(param_e, param_t);
  }
  var var_f = function () {
  var list_e = [];
  for (var num_t = 0;
  num_t < 256;
  ++num_t) {
  list_e[list_e.length] = "%" + ((num_t < 16 ? "0" : "") + num_t.toString(16)).toUpperCase(
  );
  }
  return list_e;
  }
  ();
  function var_h(param_e, param_t) {
  var var_r = param_t && param_t.plainObjects ? {
  __proto__: null
  }
  : {
  };
  for (var num_n = 0;
  num_n < param_e.length;
  ++num_n) {
  if (param_e[num_n] !== undefined) {
  var_r[num_n] = param_e[num_n];
  }
  }
  return var_r;
  }
  function var_m(param_e, param_t, param_r) {
  if (param_t === "__proto__" && dep_helper_136) {
  dep_helper_136(param_e, param_t, {
  configurable: true,
  enumerable: true,
  value: param_r,
  writable: true
  }
  );
  }
  else {
  param_e[param_t] = param_r;
  }
  }
  moduleObj.exports = {
  arrayToObject: var_h,
  assign: function (param_e, param_t) {
  return Object.keys(param_t).reduce(function (param_e_1, param_r) {
  var_m(param_e_1, param_r, param_t[param_r]);
  return param_e_1;
  }
  , param_e);
  }
  ,
  combine: function (param_e, param_t, param_r, param_n, param_o) {
  if (var_l(param_e)) {
  if (param_o) {
  throw new RangeError("Array limit exceeded. Only " + param_r + " element" + (param_r === 1 ?
  "" : "s") + " allowed in an array.");
  }
  for (var var_i = var_s(param_t) ? param_t : [param_t], var_a_1 = var_d(param_e),
  num_c = 0;
  num_c < var_i.length;
  ++num_c) {
  param_e[var_a_1 += 1] = var_i[num_c];
  }
  var_p(param_e, var_a_1);
  return param_e;
  }
  var var_f_1 = [].concat(param_e, param_t);
  if (var_f_1.length > param_r) {
  if (param_o) {
  throw new RangeError("Array limit exceeded. Only " + param_r + " element" + (param_r === 1 ?
  "" : "s") + " allowed in an array.");
  }
  return var_u(var_h(var_f_1, {
  plainObjects: param_n
  }
  ), var_f_1.length - 1);
  }
  return var_f_1;
  }
  ,
  compact: function (param_e) {
  for (var list_t = [{
  obj: {
  o: param_e
  }
  ,
  prop: "o"
  }
  ], var_r = dep_cookie_auth_provider(), num_n = 0;
  num_n < list_t.length;
  ++num_n) {
  var var_i = list_t[num_n];
  var var_a_1 = var_i.obj[var_i.prop];
  for (var var_c_1 = Object.keys(var_a_1), num_u = 0;
  num_u < var_c_1.length;
  ++num_u) {
  var var_l_1 = var_c_1[num_u];
  var var_d_1 = var_a_1[var_l_1];
  if (typeof var_d_1 == "object" && var_d_1 !== null && !var_r.has(var_d_1)) {
  list_t[list_t.length] = {
  obj: var_a_1,
  prop: var_l_1
  };
  var_r.set(var_d_1, true);
  }
  }
  }
  (function (param_e_1) {
  while (param_e_1.length > 1) {
  var var_t = param_e_1.pop();
  var var_r_1 = var_t.obj[var_t.prop];
  if (var_s(var_r_1)) {
  var list_n = [];
  for (var num_o = 0;
  num_o < var_r_1.length;
  ++num_o) {
  if (var_r_1[num_o] !== undefined) {
  list_n[list_n.length] = var_r_1[num_o];
  }
  }
  var_t.obj[var_t.prop] = list_n;
  }
  }
  }
  )(list_t);
  return param_e;
  }
  ,
  decode: function (param_e, param_t, param_r) {
  var var_n = param_e.replace(/\+/g, " ");
  if (param_r === "iso-8859-1") {
  return var_n.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
  return decodeURIComponent(var_n);
  }
  catch (var_e) {
  return var_n;
  }
  }
  ,
  encode: function (param_e, param_t, param_r, param_o, param_i) {
  if (param_e.length === 0) {
  return param_e;
  }
  var var_a_1 = param_e;
  if (typeof param_e == "symbol") {
  var_a_1 = Symbol.prototype.toString.call(param_e);
  }
  else if (typeof param_e != "string") {
  var_a_1 = String(param_e);
  }
  if (param_r === "iso-8859-1") {
  return escape(var_a_1).replace(/%u[0-9a-f]{4}/gi, function (param_e_1) {
  return "%26%23" + parseInt(param_e_1.slice(2), 16) + "%3B";
  }
  );
  }
  var str_s = "";
  for (var num_c = 0;
  num_c < var_a_1.length;
  num_c += 1024) {
  var var_u_1 = var_a_1.length >= 1024 ? var_a_1.slice(num_c, num_c + 1024) :
  var_a_1;
  if (num_c + 1024 < var_a_1.length) {
  var var_l_1 = var_u_1.charCodeAt(var_u_1.length - 1);
  if (var_l_1 >= 55296 && var_l_1 <= 56319) {
  var_u_1 = var_u_1.slice(0, -1);
  num_c -= 1;
  }
  }
  var list_d = [];
  for (var num_p = 0;
  num_p < var_u_1.length;
  ++num_p) {
  var var_h_1 = var_u_1.charCodeAt(num_p);
  if (var_h_1 === 45 || var_h_1 === 46 || var_h_1 === 95 || var_h_1 === 126 ||
  var_h_1 >= 48 && var_h_1 <= 57 || var_h_1 >= 65 && var_h_1 <= 90 ||
  var_h_1 >= 97 && var_h_1 <= 122 || param_i === dep_network_monitor.RFC1738 &&
  (var_h_1 === 40 || var_h_1 === 41)) {
  list_d[list_d.length] = var_u_1.charAt(num_p);
  }
  else if (var_h_1 < 128) {
  list_d[list_d.length] = var_f[var_h_1];
  }
  else if (var_h_1 < 2048) {
  list_d[list_d.length] = var_f[var_h_1 >> 6 | 192] + var_f[var_h_1 & 63 | 128];
  }
  else if (var_h_1 < 55296 || var_h_1 >= 57344) {
  list_d[list_d.length] = var_f[var_h_1 >> 12 | 224] + var_f[var_h_1 >> 6 & 63 | 128] + var_f[var_h_1 & 63 | 128];
  }
  else {
  num_p += 1;
  var_h_1 = 65536 + ((var_h_1 & 1023) << 10 | var_u_1.charCodeAt(num_p) & 1023);
  list_d[list_d.length] = var_f[var_h_1 >> 18 | 240] + var_f[var_h_1 >> 12 & 63 | 128] + var_f[var_h_1 >> 6 & 63 | 128] + var_f[var_h_1 & 63 | 128];
  }
  }
  str_s += list_d.join("");
  }
  return str_s;
  }
  ,
  isBuffer: function (param_e) {
  return !!param_e && typeof param_e == "object" && !!param_e.constructor &&
  typeof param_e.constructor.isBuffer == "function" && !!param_e.constructor.isBuffer(
  param_e);
  }
  ,
  isOverflow: var_l,
  isRegExp: function (param_e) {
  return Object.prototype.toString.call(param_e) === "[object RegExp]";
  }
  ,
  markOverflow: var_u,
  maybeMap: function (param_e, param_t) {
  if (var_s(param_e)) {
  var list_r = [];
  for (var num_n = 0;
  num_n < param_e.length;
  num_n += 1) {
  list_r[list_r.length] = param_t(param_e[num_n]);
  }
  return list_r;
  }
  return param_t(param_e);
  }
  ,
  merge: function var_e(param_t, param_r, param_n) {
  if (!param_r) {
  return param_t;
  }
  if (typeof param_r != "object" && typeof param_r != "function") {
  if (var_s(param_t)) {
  var var_o = param_t.length;
  if (param_n && typeof param_n.arrayLimit == "number" && var_o >= param_n.arrayLimit) {
  if (param_n.throwOnLimitExceeded) {
  throw new RangeError("Array limit exceeded. Only " + param_n.arrayLimit + " element" + (
  param_n.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  return var_u(var_h(param_t.concat(param_r), param_n), var_o);
  }
  param_t[var_o] = param_r;
  }
  else {
  if (!param_t || typeof param_t != "object") {
  return [param_t, param_r];
  }
  if (var_l(param_t)) {
  var var_i = var_d(param_t) + 1;
  param_t[var_i] = param_r;
  var_p(param_t, var_i);
  }
  else {
  if (param_n && param_n.strictMerge) {
  return [param_t, param_r];
  }
  if (param_n && (param_n.plainObjects || param_n.allowPrototypes) ||
  !var_a.call(Object.prototype, param_r)) {
  param_t[param_r] = true;
  }
  }
  }
  return param_t;
  }
  if (!param_t || typeof param_t != "object") {
  if (var_l(param_r)) {
  for (var var_c_1 = Object.keys(param_r), var_f_1 = param_n &&
  param_n.plainObjects ? {
  __proto__: null,
  0: param_t
  }
  : {
  0: param_t
  }
  , num_g = 0;
  num_g < var_c_1.length;
  num_g++) {
  var_f_1[parseInt(var_c_1[num_g], 10) + 1] = param_r[var_c_1[num_g]];
  }
  return var_u(var_f_1, var_d(param_r) + 1);
  }
  var var_v = [param_t].concat(param_r);
  if (param_n && typeof param_n.arrayLimit == "number" && var_v.length > param_n.arrayLimit) {
  if (param_n.throwOnLimitExceeded) {
  throw new RangeError("Array limit exceeded. Only " + param_n.arrayLimit + " element" + (
  param_n.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  return var_u(var_h(var_v, param_n), var_v.length - 1);
  }
  return var_v;
  }
  var var_y = param_t;
  if (var_s(param_t) && !var_s(param_r)) {
  var_y = var_h(param_t, param_n);
  }
  if (var_s(param_t) && var_s(param_r)) {
  param_r.forEach(function (param_r_1, param_o) {
  if (var_a.call(param_t, param_o)) {
  var var_i_1 = param_t[param_o];
  if (var_i_1 && typeof var_i_1 == "object" && param_r_1 && typeof param_r_1 == "object") {
  param_t[param_o] = var_e(var_i_1, param_r_1, param_n);
  }
  else {
  param_t[param_t.length] = param_r_1;
  }
  }
  else {
  param_t[param_o] = param_r_1;
  }
  }
  );
  if (param_n && typeof param_n.arrayLimit == "number" && param_t.length > param_n.arrayLimit) {
  if (param_n.throwOnLimitExceeded) {
  throw new RangeError("Array limit exceeded. Only " + param_n.arrayLimit + " element" + (
  param_n.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  return var_u(var_h(param_t, param_n), param_t.length - 1);
  }
  return param_t;
  }
  return Object.keys(param_r).reduce(function (param_t_1, param_o) {
  var var_i_1 = param_r[param_o];
  if (var_a.call(param_t_1, param_o)) {
  var_m(param_t_1, param_o, var_e(param_t_1[param_o], var_i_1, param_n));
  }
  else {
  var_m(param_t_1, param_o, var_i_1);
  }
  if (var_l(param_r) && !var_l(param_t_1)) {
  var_u(param_t_1, var_d(param_r));
  }
  if (var_l(param_t_1)) {
  var var_s_1 = parseInt(param_o, 10);
  if (String(var_s_1) === param_o && var_s_1 >= 0 && var_s_1 > var_d(param_t_1)) {
  var_p(param_t_1, var_s_1);
  }
  }
  return param_t_1;
  }
  , var_y);
  }
  };
  };
