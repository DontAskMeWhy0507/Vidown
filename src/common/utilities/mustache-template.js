// Module 39 [utilities] - Stream / runtime utility component (mustache-template)
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = function () {
  "use strict";
  /*!
       * mustache.js - Logic-less {{mustache}} templates with JavaScript
       * http://github.com/janl/mustache.js
       */
  var var_e = Object.prototype.toString;
  var var_t = Array.isArray || function (param_t) {
  return var_e.call(param_t) === "[object Array]";
  };
  function var_n(param_e) {
  return typeof param_e == "function";
  }
  function var_r(param_e) {
  return param_e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function var_o(param_e, param_t) {
  return param_e != null && typeof param_e == "object" && param_t in param_e;
  }
  var var_i = RegExp.prototype.test;
  var regex_a = /\S/;
  function var_s(param_e) {
  return !function (param_e_1, param_t) {
  return var_i.call(param_e_1, param_t);
  }
  (regex_a, param_e);
  }
  var obj_c = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
  };
  var regex_l = /\s*/;
  var regex_u = /\s+/;
  var regex_d = /\s*=/;
  var regex_f = /\s*\}/;
  var regex_p = /#|\^|\/|>|\{|&|=|!/;
  function var_h(param_e) {
  this.string = param_e;
  this.tail = param_e;
  this.pos = 0;
  }
  function var_g(param_e, param_t) {
  this.view = param_e;
  this.cache = {
  ".": this.view
  };
  this.parent = param_t;
  }
  function var_m() {
  this.cache = {
  };
  }
  var_h.prototype.eos = function () {
  return this.tail === "";
  };
  var_h.prototype.scan = function (param_e) {
  var var_t_1 = this.tail.match(param_e);
  if (!var_t_1 || var_t_1.index !== 0) {
  return "";
  }
  var var_n_1 = var_t_1[0];
  this.tail = this.tail.substring(var_n_1.length);
  this.pos += var_n_1.length;
  return var_n_1;
  };
  var_h.prototype.scanUntil = function (param_e) {
  var var_t_1;
  var var_n_1 = this.tail.search(param_e);
  switch (var_n_1) {
  case -1:
  var_t_1 = this.tail;
  this.tail = "";
  break;
  case 0:
  var_t_1 = "";
  break;
  default:
  var_t_1 = this.tail.substring(0, var_n_1);
  this.tail = this.tail.substring(var_n_1);
  }
  this.pos += var_t_1.length;
  return var_t_1;
  };
  var_g.prototype.push = function (param_e) {
  return new var_g(param_e, this);
  };
  var_g.prototype.lookup = function (param_e) {
  var var_t_1;
  var var_r_1;
  var var_i_1;
  var var_a = this.cache;
  if (var_a.hasOwnProperty(param_e)) {
  var_t_1 = var_a[param_e];
  }
  else {
  var var_s_1;
  var var_c;
  var var_l;
  for (var var_u = this, flag_d = false;
  var_u;
  ) {
  if (param_e.indexOf(".") > 0) {
  var_s_1 = var_u.view;
  var_c = param_e.split(".");
  var_l = 0;
  while (var_s_1 != null && var_l < var_c.length) {
  if (var_l === var_c.length - 1) {
  flag_d = var_o(var_s_1, var_c[var_l]) || (var_r_1 = var_s_1, var_i_1 = var_c[var_l],
  var_r_1 != null && typeof var_r_1 != "object" && var_r_1.hasOwnProperty &&
  var_r_1.hasOwnProperty(var_i_1));
  }
  var_s_1 = var_s_1[var_c[var_l++]];
  }
  }
  else {
  var_s_1 = var_u.view[param_e];
  flag_d = var_o(var_u.view, param_e);
  }
  if (flag_d) {
  var_t_1 = var_s_1;
  break;
  }
  var_u = var_u.parent;
  }
  var_a[param_e] = var_t_1;
  }
  if (var_n(var_t_1)) {
  var_t_1 = var_t_1.call(this.view);
  }
  return var_t_1;
  };
  var_m.prototype.clearCache = function () {
  this.cache = {
  };
  };
  var_m.prototype.parse = function (param_e, param_n) {
  var var_o_1 = this.cache;
  var var_i_1 = param_e + ":" + (param_n || obj_v.tags).join(":");
  var var_a = var_o_1[var_i_1];
  if (var_a == null) {
  var_a = var_o_1[var_i_1] = function (param_e_1, param_n_1) {
  if (!param_e_1) {
  return [];
  }
  var var_o_2;
  var var_i_2;
  var var_a_1;
  var flag_c = false;
  var list_g = [];
  var list_m = [];
  var list_y = [];
  var flag_k = false;
  var flag_b = false;
  var str__ = "";
  var num_T = 0;
  function var_S() {
  if (flag_k && !flag_b) {
  while (list_y.length) {
  delete list_m[list_y.pop()];
  }
  }
  else {
  list_y = [];
  }
  flag_k = false;
  flag_b = false;
  }
  function var_x(param_e_2) {
  if (typeof param_e_2 == "string") {
  param_e_2 = param_e_2.split(regex_u, 2);
  }
  if (!var_t(param_e_2) || param_e_2.length !== 2) {
  throw new Error("Invalid tags: " + param_e_2);
  }
  var_o_2 = new RegExp(var_r(param_e_2[0]) + "\\s*");
  var_i_2 = new RegExp("\\s*" + var_r(param_e_2[1]));
  var_a_1 = new RegExp("\\s*" + var_r("}" + param_e_2[1]));
  }
  var_x(param_n_1 || obj_v.tags);
  var var_w;
  var var_E;
  var var_A;
  var var_C;
  var var_O;
  var var_I;
  for (var var_N = new var_h(param_e_1);
  !var_N.eos();
  ) {
  var_w = var_N.pos;
  if (var_A = var_N.scanUntil(var_o_2)) {
  for (var num_D = 0, var_R = var_A.length;
  num_D < var_R;
  ++num_D) {
  if (var_s(var_C = var_A.charAt(num_D))) {
  list_y.push(list_m.length);
  str__ += var_C;
  }
  else {
  flag_b = true;
  flag_c = true;
  str__ += " ";
  }
  list_m.push(["text", var_C, var_w, var_w + 1]);
  var_w += 1;
  if (var_C === "\n") {
  var_S();
  str__ = "";
  num_T = 0;
  flag_c = false;
  }
  }
  }
  if (!var_N.scan(var_o_2)) {
  break;
  }
  flag_k = true;
  var_E = var_N.scan(regex_p) || "name";
  var_N.scan(regex_l);
  if (var_E === "=") {
  var_A = var_N.scanUntil(regex_d);
  var_N.scan(regex_d);
  var_N.scanUntil(var_i_2);
  }
  else if (var_E === "{") {
  var_A = var_N.scanUntil(var_a_1);
  var_N.scan(regex_f);
  var_N.scanUntil(var_i_2);
  var_E = "&";
  }
  else {
  var_A = var_N.scanUntil(var_i_2);
  }
  if (!var_N.scan(var_i_2)) {
  throw new Error("Unclosed tag at " + var_N.pos);
  }
  var_O = var_E == ">" ? [var_E, var_A, var_w, var_N.pos, str__, num_T, flag_c] :
  [var_E, var_A, var_w, var_N.pos];
  num_T++;
  list_m.push(var_O);
  if (var_E === "#" || var_E === "^") {
  list_g.push(var_O);
  }
  else if (var_E === "/") {
  if (!(var_I = list_g.pop())) {
  throw new Error("Unopened section \"" + var_A + "\" at " + var_w);
  }
  if (var_I[1] !== var_A) {
  throw new Error("Unclosed section \"" + var_I[1] + "\" at " + var_w);
  }
  }
  else if (var_E === "name" || var_E === "{" || var_E === "&") {
  flag_b = true;
  }
  else if (var_E === "=") {
  var_x(var_A);
  }
  }
  var_S();
  if (var_I = list_g.pop()) {
  throw new Error("Unclosed section \"" + var_I[1] + "\" at " + var_N.pos);
  }
  return function (param_e_2) {
  var var_t_1;
  var list_n = [];
  var var_r_1 = list_n;
  var list_o = [];
  for (var num_i = 0, var_a_2 = param_e_2.length;
  num_i < var_a_2;
  ++num_i) {
  switch ((var_t_1 = param_e_2[num_i])[0]) {
  case "#":
  case "^":
  var_r_1.push(var_t_1);
  list_o.push(var_t_1);
  var_r_1 = var_t_1[4] = [];
  break;
  case "/":
  list_o.pop()[5] = var_t_1[2];
  var_r_1 = list_o.length > 0 ? list_o[list_o.length - 1][4] :
  list_n;
  break;
  default:
  var_r_1.push(var_t_1);
  }
  }
  return list_n;
  }
  (function (param_e_2) {
  var var_t_1;
  var var_n_1;
  var list_r = [];
  for (var num_o = 0, var_i_3 = param_e_2.length;
  num_o < var_i_3;
  ++num_o) {
  if (var_t_1 = param_e_2[num_o]) {
  if (var_t_1[0] === "text" && var_n_1 && var_n_1[0] === "text") {
  var_n_1[1] += var_t_1[1];
  var_n_1[3] = var_t_1[3];
  }
  else {
  list_r.push(var_t_1);
  var_n_1 = var_t_1;
  }
  }
  }
  return list_r;
  }
  (list_m));
  }
  (param_e, param_n);
  }
  return var_a;
  };
  var_m.prototype.render = function (param_e, param_t, param_n, param_r) {
  var var_o_1 = this.parse(param_e, param_r);
  var var_i_1 = param_t instanceof var_g ? param_t : new var_g(param_t, undefined);
  return this.renderTokens(var_o_1, var_i_1, param_n, param_e, param_r);
  };
  var_m.prototype.renderTokens = function (param_e, param_t, param_n, param_r, param_o) {
  var var_i_1;
  var var_a;
  var var_s_1;
  var str_c = "";
  for (var num_l = 0, var_u = param_e.length;
  num_l < var_u;
  ++num_l) {
  var_s_1 = undefined;
  if ((var_a = (var_i_1 = param_e[num_l])[0]) === "#") {
  var_s_1 = this.renderSection(var_i_1, param_t, param_n, param_r);
  }
  else if (var_a === "^") {
  var_s_1 = this.renderInverted(var_i_1, param_t, param_n, param_r);
  }
  else if (var_a === ">") {
  var_s_1 = this.renderPartial(var_i_1, param_t, param_n, param_o);
  }
  else if (var_a === "&") {
  var_s_1 = this.unescapedValue(var_i_1, param_t);
  }
  else if (var_a === "name") {
  var_s_1 = this.escapedValue(var_i_1, param_t);
  }
  else if (var_a === "text") {
  var_s_1 = this.rawValue(var_i_1);
  }
  if (var_s_1 !== undefined) {
  str_c += var_s_1;
  }
  }
  return str_c;
  };
  var_m.prototype.renderSection = function (param_e, param_r, param_o, param_i) {
  var var_a = this;
  var str_s = "";
  var var_c = param_r.lookup(param_e[1]);
  if (var_c) {
  if (var_t(var_c)) {
  for (var num_l = 0, var_u = var_c.length;
  num_l < var_u;
  ++num_l) {
  str_s += this.renderTokens(param_e[4], param_r.push(var_c[num_l]), param_o, param_i);
  }
  }
  else if (typeof var_c == "object" || typeof var_c == "string" ||
  typeof var_c == "number") {
  str_s += this.renderTokens(param_e[4], param_r.push(var_c), param_o, param_i);
  }
  else if (var_n(var_c)) {
  if (typeof param_i != "string") {
  throw new Error("Cannot use higher-order sections without the original template");
  }
  if ((var_c = var_c.call(param_r.view, param_i.slice(param_e[3], param_e[5]), function (
  param_e_1) {
  return var_a.render(param_e_1, param_r, param_o);
  }
  )) != null) {
  str_s += var_c;
  }
  }
  else {
  str_s += this.renderTokens(param_e[4], param_r, param_o, param_i);
  }
  return str_s;
  }
  };
  var_m.prototype.renderInverted = function (param_e, param_n, param_r, param_o) {
  var var_i_1 = param_n.lookup(param_e[1]);
  if (!var_i_1 || var_t(var_i_1) && var_i_1.length === 0) {
  return this.renderTokens(param_e[4], param_n, param_r, param_o);
  }
  };
  var_m.prototype.indentPartial = function (param_e, param_t, param_n) {
  var var_r_1 = param_t.replace(/[^ \t]/g, "");
  for (var var_o_1 = param_e.split("\n"), num_i = 0;
  num_i < var_o_1.length;
  num_i++) {
  if (var_o_1[num_i].length && (num_i > 0 || !param_n)) {
  var_o_1[num_i] = var_r_1 + var_o_1[num_i];
  }
  }
  return var_o_1.join("\n");
  };
  var_m.prototype.renderPartial = function (param_e, param_t, param_r, param_o) {
  if (param_r) {
  var var_i_1 = var_n(param_r) ? param_r(param_e[1]) : param_r[param_e[1]];
  if (var_i_1 != null) {
  var var_a = param_e[6];
  var var_s_1 = param_e[5];
  var var_c = param_e[4];
  var var_l = var_i_1;
  if (var_s_1 == 0 && var_c) {
  var_l = this.indentPartial(var_i_1, var_c, var_a);
  }
  return this.renderTokens(this.parse(var_l, param_o), param_t, param_r, var_l);
  }
  }
  };
  var_m.prototype.unescapedValue = function (param_e, param_t) {
  var var_n_1 = param_t.lookup(param_e[1]);
  if (var_n_1 != null) {
  return var_n_1;
  }
  };
  var_m.prototype.escapedValue = function (param_e, param_t) {
  var var_n_1 = param_t.lookup(param_e[1]);
  if (var_n_1 != null) {
  return obj_v.escape(var_n_1);
  }
  };
  var_m.prototype.rawValue = function (param_e) {
  return param_e[1];
  };
  var obj_v = {
  name: "mustache.js",
  version: "3.2.1",
  tags: ["{{", "}}"],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  to_html: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined
  };
  var var_y = new var_m();
  obj_v.clearCache = function () {
  return var_y.clearCache();
  };
  obj_v.parse = function (param_e, param_t) {
  return var_y.parse(param_e, param_t);
  };
  obj_v.render = function (param_e, param_n, param_r, param_o) {
  if (typeof param_e != "string") {
  throw new TypeError("Invalid template! Template should be a \"string\" but \"" + (
  var_t(var_i_1 = param_e) ? "array" : typeof var_i_1) + "\" was given as the first argument for mustache#render(template, view, partials)");
  }
  var var_i_1;
  return var_y.render(param_e, param_n, param_r, param_o);
  };
  obj_v.to_html = function (param_e, param_t, param_r, param_o) {
  var var_i_1 = obj_v.render(param_e, param_t, param_r);
  if (!var_n(param_o)) {
  return var_i_1;
  }
  param_o(var_i_1);
  };
  obj_v.escape = function (param_e) {
  return String(param_e).replace(/[&<>"'`=\/]/g, function (param_e_1) {
  return obj_c[param_e_1];
  }
  );
  };
  obj_v.Scanner = var_h;
  obj_v.Context = var_g;
  obj_v.Writer = var_m;
  return obj_v;
  }
  ();
  };
