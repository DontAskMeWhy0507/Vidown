// Module 175 [utilities] - HTTP request headers and cookies manager
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  var var_n = typeof Map == "function" && Map.prototype;
  var var_o = Object.getOwnPropertyDescriptor && var_n ? Object.getOwnPropertyDescriptor(
  Map.prototype, "size") : null;
  var var_i = var_n && var_o && typeof var_o.get == "function" ?
  var_o.get : null;
  var var_a = var_n && Map.prototype.forEach;
  var var_s = typeof Set == "function" && Set.prototype;
  var var_c = Object.getOwnPropertyDescriptor && var_s ? Object.getOwnPropertyDescriptor(
  Set.prototype, "size") : null;
  var var_u = var_s && var_c && typeof var_c.get == "function" ?
  var_c.get : null;
  var var_l = var_s && Set.prototype.forEach;
  var var_d = typeof WeakMap == "function" && WeakMap.prototype ?
  WeakMap.prototype.has : null;
  var var_p = typeof WeakSet == "function" && WeakSet.prototype ?
  WeakSet.prototype.has : null;
  var var_f = typeof WeakRef == "function" && WeakRef.prototype ?
  WeakRef.prototype.deref : null;
  var var_h = Boolean.prototype.valueOf;
  var var_m = Object.prototype.toString;
  var var_g = Function.prototype.toString;
  var var_v = String.prototype.match;
  var var_y = String.prototype.slice;
  var var__ = String.prototype.replace;
  var var_b = String.prototype.toUpperCase;
  var var_w = String.prototype.toLowerCase;
  var var_E = RegExp.prototype.test;
  var var_D = Array.prototype.concat;
  var var_T = Array.prototype.join;
  var var_k = Array.prototype.slice;
  var var_A = Math.floor;
  var var_C = typeof BigInt == "function" ? BigInt.prototype.valueOf :
  null;
  var var_x = Object.getOwnPropertySymbols;
  var var_S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
  Symbol.prototype.toString : null;
  var var_O = typeof Symbol == "function" && typeof Symbol.iterator == "object";
  var var_I = typeof Symbol == "function" && Symbol.toStringTag &&
  (typeof Symbol.toStringTag === var_O || "symbol") ? Symbol.toStringTag :
  null;
  var var_L = Object.prototype.propertyIsEnumerable;
  var var_R = (typeof Reflect == "function" ? Reflect.getPrototypeOf :
  Object.getPrototypeOf) || ([].__proto__ === Array.prototype ?
  function (param_e) {
  return param_e.__proto__;
  }
  : null);
  function var_P(param_e, param_t_1) {
  if (param_e === Infinity || param_e === -Infinity || param_e != param_e ||
  param_e && param_e > -1000 && param_e < 1000 || var_E.call(/e/, param_t_1)) {
  return param_t_1;
  }
  var regex_r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof param_e == "number") {
  var var_n_1 = param_e < 0 ? -var_A(-param_e) : var_A(param_e);
  if (var_n_1 !== param_e) {
  var var_o_1 = String(var_n_1);
  var var_i_1 = var_y.call(param_t_1, var_o_1.length + 1);
  return var__.call(var_o_1, regex_r, "$&_") + "." + var__.call(var__.call(var_i_1,
  /([0-9]{3})/g, "$&_"), /_$/, "");
  }
  }
  return var__.call(param_t_1, regex_r, "$&_");
  }
  var dep_referrer_header_policy = requireFn(720);
  var var_M = dep_referrer_header_policy.custom;
  var var_F = var_z(var_M) ? var_M : null;
  var obj_U = {
  __proto__: null,
  double: "\"",
  single: "'"
  };
  var obj_N = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
  };
  function var_j(param_e, param_t_1, param_r) {
  var var_n_1 = param_r.quoteStyle || param_t_1;
  var var_o_1 = obj_U[var_n_1];
  return var_o_1 + param_e + var_o_1;
  }
  function var_q(param_e) {
  return var__.call(String(param_e), /"/g, "&quot;");
  }
  function var_H(param_e) {
  return !var_I || typeof param_e != "object" || !(var_I in param_e) &&
  param_e[var_I] === undefined;
  }
  function var_V(param_e) {
  return var_Q(param_e) === "[object Array]" && var_H(param_e);
  }
  function var_W(param_e) {
  return var_Q(param_e) === "[object RegExp]" && var_H(param_e);
  }
  function var_z(param_e) {
  if (var_O) {
  return param_e && typeof param_e == "object" && param_e instanceof Symbol;
  }
  if (typeof param_e == "symbol") {
  return true;
  }
  if (!param_e || typeof param_e != "object" || !var_S) {
  return false;
  }
  try {
  var_S.call(param_e);
  return true;
  }
  catch (var_e) {
  }
  return false;
  }
  moduleObj.exports = function var_e(param_r, param_n, param_o, param_s) {
  var var_c_1 = param_n || {
  };
  if (var_G(var_c_1, "quoteStyle") && !var_G(obj_U, var_c_1.quoteStyle)) {
  throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
  }
  if (var_G(var_c_1, "maxStringLength") && (typeof var_c_1.maxStringLength == "number" ?
  var_c_1.maxStringLength < 0 && var_c_1.maxStringLength !== Infinity :
  var_c_1.maxStringLength !== null)) {
  throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
  }
  var var_m_1 = !var_G(var_c_1, "customInspect") || var_c_1.customInspect;
  if (typeof var_m_1 != "boolean" && var_m_1 !== "symbol") {
  throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (var_G(var_c_1, "indent") && var_c_1.indent !== null &&
  var_c_1.indent !== "\t" && (parseInt(var_c_1.indent, 10) !== var_c_1.indent ||
  !(var_c_1.indent > 0))) {
  throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
  }
  if (var_G(var_c_1, "numericSeparator") && typeof var_c_1.numericSeparator != "boolean") {
  throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
  }
  var var_b_1 = var_c_1.numericSeparator;
  if (param_r === undefined) {
  return "undefined";
  }
  if (param_r === null) {
  return "null";
  }
  if (typeof param_r == "boolean") {
  if (param_r) {
  return "true";
  }
  else {
  return "false";
  }
  }
  if (typeof param_r == "string") {
  return function var_e_1(param_t_1, param_r_1) {
  if (param_t_1.length > param_r_1.maxStringLength) {
  var var_n_1 = param_t_1.length - param_r_1.maxStringLength;
  var var_o_1 = "... " + var_n_1 + " more character" + (var_n_1 > 1 ?
  "s" : "");
  return var_e_1(var_y.call(param_t_1, 0, param_r_1.maxStringLength), param_r_1) + var_o_1;
  }
  var var_i_1 = obj_N[param_r_1.quoteStyle || "single"];
  var_i_1.lastIndex = 0;
  return var_j(var__.call(var__.call(param_t_1, var_i_1, "\\$1"), /[\x00-\x1f]/g,
  var_K), "single", param_r_1);
  }
  (param_r, var_c_1);
  }
  if (typeof param_r == "number") {
  if (param_r === 0) {
  if (Infinity / param_r > 0) {
  return "0";
  }
  else {
  return "-0";
  }
  }
  var var_E_1 = String(param_r);
  if (var_b_1) {
  return var_P(param_r, var_E_1);
  }
  else {
  return var_E_1;
  }
  }
  if (typeof param_r == "bigint") {
  var var_A_1 = String(param_r) + "n";
  if (var_b_1) {
  return var_P(param_r, var_A_1);
  }
  else {
  return var_A_1;
  }
  }
  var var_x_1 = var_c_1.depth === undefined ? 5 : var_c_1.depth;
  if (param_o === undefined) {
  param_o = 0;
  }
  if (param_o >= var_x_1 && var_x_1 > 0 && typeof param_r == "object") {
  if (var_V(param_r)) {
  return "[Array]";
  }
  else {
  return "[Object]";
  }
  }
  var var_M_1 = function (param_e, param_t_1) {
  var var_r;
  if (param_e.indent === "\t") {
  var_r = "\t";
  }
  else {
  if (typeof param_e.indent != "number" || !(param_e.indent > 0)) {
  return null;
  }
  var_r = var_T.call(Array(param_e.indent + 1), " ");
  }
  return {
  base: var_r,
  prev: var_T.call(Array(param_t_1 + 1), var_r)
  };
  }
  (var_c_1, param_o);
  if (param_s === undefined) {
  param_s = [];
  }
  else if (var_$(param_s, param_r) >= 0) {
  return "[Circular]";
  }
  function var_Y_1(param_t_1, param_r_1, param_n_1) {
  if (param_r_1) {
  (param_s = var_k.call(param_s)).push(param_r_1);
  }
  if (param_n_1) {
  var obj_i = {
  depth: var_c_1.depth
  };
  if (var_G(var_c_1, "quoteStyle")) {
  obj_i.quoteStyle = var_c_1.quoteStyle;
  }
  return var_e(param_t_1, obj_i, param_o + 1, param_s);
  }
  return var_e(param_t_1, var_c_1, param_o + 1, param_s);
  }
  if (typeof param_r == "function" && !var_W(param_r)) {
  var re = function (param_e) {
  if (param_e.name) {
  return param_e.name;
  }
  var var_t = var_v.call(var_g.call(param_e), /^function\s*([\w$]+)/);
  if (var_t) {
  return var_t[1];
  }
  return null;
  }
  (param_r);
  var ne = te(param_r, var_Y_1);
  return "[Function" + (re ? ": " + re : " (anonymous)") + "]" + (ne.length > 0 ?
  " { " + var_T.call(ne, ", ") + " }" : "");
  }
  if (var_z(param_r)) {
  var oe = var_O ? var__.call(String(param_r), /^(Symbol\(.*\))_[^)]*$/, "$1") :
  var_S.call(param_r);
  if (typeof param_r != "object" || var_O) {
  return oe;
  }
  else {
  return var_X(oe);
  }
  }
  if (function (param_e) {
  if (!param_e || typeof param_e != "object") {
  return false;
  }
  if (typeof HTMLElement != "undefined" && param_e instanceof HTMLElement) {
  return true;
  }
  return typeof param_e.nodeName == "string" && typeof param_e.getAttribute == "function";
  }
  (param_r)) {
  var ie = "<" + var_w.call(String(param_r.nodeName));
  for (var ae = param_r.attributes || [], se = 0;
  se < ae.length;
  se++) {
  ie += " " + ae[se].name + "=" + var_j(var_q(ae[se].value), "double", var_c_1);
  }
  ie += ">";
  if (param_r.childNodes && param_r.childNodes.length) {
  ie += "...";
  }
  return ie += "</" + var_w.call(String(param_r.nodeName)) + ">";
  }
  if (var_V(param_r)) {
  if (param_r.length === 0) {
  return "[]";
  }
  var ce = te(param_r, var_Y_1);
  if (var_M_1 && !function (param_e) {
  for (var num_t = 0;
  num_t < param_e.length;
  num_t++) {
  if (var_$(param_e[num_t], "\n") >= 0) {
  return false;
  }
  }
  return true;
  }
  (ce)) {
  return "[" + ee(ce, var_M_1) + "]";
  }
  else {
  return "[ " + var_T.call(ce, ", ") + " ]";
  }
  }
  if (function (param_e) {
  return var_Q(param_e) === "[object Error]" && var_H(param_e);
  }
  (param_r)) {
  var ue = te(param_r, var_Y_1);
  if ("cause" in Error.prototype || !("cause" in param_r) ||
  var_L.call(param_r, "cause")) {
  if (ue.length === 0) {
  return "[" + String(param_r) + "]";
  }
  else {
  return "{ [" + String(param_r) + "] " + var_T.call(ue, ", ") + " }";
  }
  }
  else {
  return "{ [" + String(param_r) + "] " + var_T.call(var_D.call("[cause]: " + var_Y_1(
  param_r.cause), ue), ", ") + " }";
  }
  }
  if (typeof param_r == "object" && var_m_1) {
  if (var_F && typeof param_r[var_F] == "function" && dep_referrer_header_policy) {
  return dep_referrer_header_policy(param_r, {
  depth: var_x_1 - param_o
  }
  );
  }
  if (var_m_1 !== "symbol" && typeof param_r.inspect == "function") {
  return param_r.inspect();
  }
  }
  if (function (param_e) {
  if (!var_i || !param_e || typeof param_e != "object") {
  return false;
  }
  try {
  var_i.call(param_e);
  try {
  var_u.call(param_e);
  }
  catch (var_e_1) {
  return true;
  }
  return param_e instanceof Map;
  }
  catch (var_e_1) {
  }
  return false;
  }
  (param_r)) {
  var le = [];
  if (var_a) {
  var_a.call(param_r, function (param_e, param_t_1) {
  le.push(var_Y_1(param_t_1, param_r, true) + " => " + var_Y_1(param_e, param_r));
  }
  );
  }
  return var_J("Map", var_i.call(param_r), le, var_M_1);
  }
  if (function (param_e) {
  if (!var_u || !param_e || typeof param_e != "object") {
  return false;
  }
  try {
  var_u.call(param_e);
  try {
  var_i.call(param_e);
  }
  catch (var_e_1) {
  return true;
  }
  return param_e instanceof Set;
  }
  catch (var_e_1) {
  }
  return false;
  }
  (param_r)) {
  var de = [];
  if (var_l) {
  var_l.call(param_r, function (param_e) {
  de.push(var_Y_1(param_e, param_r));
  }
  );
  }
  return var_J("Set", var_u.call(param_r), de, var_M_1);
  }
  if (function (param_e) {
  if (!var_d || !param_e || typeof param_e != "object") {
  return false;
  }
  try {
  var_d.call(param_e, var_d);
  try {
  var_p.call(param_e, var_p);
  }
  catch (var_e_1) {
  return true;
  }
  return param_e instanceof WeakMap;
  }
  catch (var_e_1) {
  }
  return false;
  }
  (param_r)) {
  return var_Z("WeakMap");
  }
  if (function (param_e) {
  if (!var_p || !param_e || typeof param_e != "object") {
  return false;
  }
  try {
  var_p.call(param_e, var_p);
  try {
  var_d.call(param_e, var_d);
  }
  catch (var_e_1) {
  return true;
  }
  return param_e instanceof WeakSet;
  }
  catch (var_e_1) {
  }
  return false;
  }
  (param_r)) {
  return var_Z("WeakSet");
  }
  if (function (param_e) {
  if (!var_f || !param_e || typeof param_e != "object") {
  return false;
  }
  try {
  var_f.call(param_e);
  return true;
  }
  catch (var_e_1) {
  }
  return false;
  }
  (param_r)) {
  return var_Z("WeakRef");
  }
  if (function (param_e) {
  return var_Q(param_e) === "[object Number]" && var_H(param_e);
  }
  (param_r)) {
  return var_X(var_Y_1(Number(param_r)));
  }
  if (function (param_e) {
  if (!param_e || typeof param_e != "object" || !var_C) {
  return false;
  }
  try {
  var_C.call(param_e);
  return true;
  }
  catch (var_e_1) {
  }
  return false;
  }
  (param_r)) {
  return var_X(var_Y_1(var_C.call(param_r)));
  }
  if (function (param_e) {
  return var_Q(param_e) === "[object Boolean]" && var_H(param_e);
  }
  (param_r)) {
  return var_X(var_h.call(param_r));
  }
  if (function (param_e) {
  return var_Q(param_e) === "[object String]" && var_H(param_e);
  }
  (param_r)) {
  return var_X(var_Y_1(String(param_r)));
  }
  if (typeof window != "undefined" && param_r === window) {
  return "{ [object Window] }";
  }
  if (typeof globalThis != "undefined" && param_r === globalThis ||
  param_t !== undefined && param_r === param_t) {
  return "{ [object globalThis] }";
  }
  if (!function (param_e) {
  return var_Q(param_e) === "[object Date]" && var_H(param_e);
  }
  (param_r) && !var_W(param_r)) {
  var pe = te(param_r, var_Y_1);
  var fe = var_R ? var_R(param_r) === Object.prototype : param_r instanceof Object ||
  param_r.constructor === Object;
  var he = param_r instanceof Object ? "" : "null prototype";
  var me = !fe && var_I && Object(param_r) === param_r && var_I in param_r ?
  var_y.call(var_Q(param_r), 8, -1) : he ? "Object" : "";
  var ge = (fe || typeof param_r.constructor != "function" ?
  "" : param_r.constructor.name ? param_r.constructor.name + " " :
  "") + (me || he ? "[" + var_T.call(var_D.call([], me || [], he ||
  []), ": ") + "] " : "");
  if (pe.length === 0) {
  return ge + "{}";
  }
  else if (var_M_1) {
  return ge + "{" + ee(pe, var_M_1) + "}";
  }
  else {
  return ge + "{ " + var_T.call(pe, ", ") + " }";
  }
  }
  return String(param_r);
  };
  var var_Y = Object.prototype.hasOwnProperty || function (param_e) {
  return param_e in this;
  };
  function var_G(param_e, param_t_1) {
  return var_Y.call(param_e, param_t_1);
  }
  function var_Q(param_e) {
  return var_m.call(param_e);
  }
  function var_$(param_e, param_t_1) {
  if (param_e.indexOf) {
  return param_e.indexOf(param_t_1);
  }
  for (var num_r = 0, var_n_1 = param_e.length;
  num_r < var_n_1;
  num_r++) {
  if (param_e[num_r] === param_t_1) {
  return num_r;
  }
  }
  return -1;
  }
  function var_K(param_e) {
  var var_t = param_e.charCodeAt(0);
  var var_r = {
  8: "b",
  9: "t",
  10: "n",
  12: "f",
  13: "r"
  }
  [var_t];
  if (var_r) {
  return "\\" + var_r;
  }
  else {
  return "\\x" + (var_t < 16 ? "0" : "") + var_b.call(var_t.toString(16));
  }
  }
  function var_X(param_e) {
  return "Object(" + param_e + ")";
  }
  function var_Z(param_e) {
  return param_e + " { ? }";
  }
  function var_J(param_e, param_t_1, param_r, param_n) {
  return param_e + " (" + param_t_1 + ") {" + (param_n ? ee(param_r, param_n) :
  var_T.call(param_r, ", ")) + "}";
  }
  function ee(param_e, param_t_1) {
  if (param_e.length === 0) {
  return "";
  }
  var var_r = "\n" + param_t_1.prev + param_t_1.base;
  return var_r + var_T.call(param_e, "," + var_r) + "\n" + param_t_1.prev;
  }
  function te(param_e, param_t_1) {
  var var_r = var_V(param_e);
  var list_n = [];
  if (var_r) {
  list_n.length = param_e.length;
  for (var num_o = 0;
  num_o < param_e.length;
  num_o++) {
  list_n[num_o] = var_G(param_e, num_o) ? param_t_1(param_e[num_o], param_e) :
  "";
  }
  }
  var var_i_1;
  var var_a_1 = typeof var_x == "function" ? var_x(param_e) :
  [];
  if (var_O) {
  var_i_1 = {
  };
  for (var num_s = 0;
  num_s < var_a_1.length;
  num_s++) {
  var_i_1["$" + var_a_1[num_s]] = var_a_1[num_s];
  }
  }
  for (var var_c_1 in param_e) {
  if (var_G(param_e, var_c_1)) {
  if ((!var_r || String(Number(var_c_1)) !== var_c_1 || !(var_c_1 < param_e.length)) &&
  (!var_O || !(var_i_1["$" + var_c_1] instanceof Symbol))) {
  if (var_E.call(/[^\w$]/, var_c_1)) {
  list_n.push(param_t_1(var_c_1, param_e) + ": " + param_t_1(param_e[var_c_1], param_e));
  }
  else {
  list_n.push(var_c_1 + ": " + param_t_1(param_e[var_c_1], param_e));
  }
  }
  }
  }
  if (typeof var_x == "function") {
  for (var num_u = 0;
  num_u < var_a_1.length;
  num_u++) {
  if (var_L.call(param_e, var_a_1[num_u])) {
  list_n.push("[" + param_t_1(var_a_1[num_u]) + "]: " + param_t_1(param_e[var_a_1[num_u]],
  param_e));
  }
  }
  }
  return list_n;
  }
  }
  ).call(this, requireFn(13));
  };
