// Module 515 [utilities] - Stream downloader instance factory
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_segment_url_resolver = requireFn(717);
  function var_o() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
  }
  var regex_i = /^([a-z0-9.+-]+:)/i;
  var regex_a = /:[0-9]*$/;
  var regex_s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
  var var_c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r",
  "\n", "\t"]);
  var var_u = ["'"].concat(var_c);
  var var_l = ["%", "/", "?", ";", "#"].concat(var_u);
  var list_d = ["/", "?", "#"];
  var regex_p = /^[+a-z0-9A-Z_-]{0,63}$/;
  var regex_f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
  var obj_h = {
  javascript: true,
  "javascript:": true
  };
  var obj_m = {
  javascript: true,
  "javascript:": true
  };
  var obj_g = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
  };
  var dep_signed_url_refresher = requireFn(718);
  function var_y(param_e, param_t, param_r) {
  if (param_e && typeof param_e == "object" && param_e instanceof var_o) {
  return param_e;
  }
  var var_n = new var_o();
  var_n.parse(param_e, param_t, param_r);
  return var_n;
  }
  var_o.prototype.parse = function (param_e, param_t, param_r) {
  if (typeof param_e != "string") {
  throw new TypeError("Parameter 'url' must be a string, not " + typeof param_e);
  }
  var var_o_1 = param_e.indexOf("?");
  var var_a = var_o_1 !== -1 && var_o_1 < param_e.indexOf("#") ?
  "?" : "#";
  var var_c_1 = param_e.split(var_a);
  var_c_1[0] = var_c_1[0].replace(/\\/g, "/");
  var var_y_1 = param_e = var_c_1.join(var_a);
  var_y_1 = var_y_1.trim();
  if (!param_r && param_e.split("#").length === 1) {
  var var__ = regex_s.exec(var_y_1);
  if (var__) {
  this.path = var_y_1;
  this.href = var_y_1;
  this.pathname = var__[1];
  if (var__[2]) {
  this.search = var__[2];
  this.query = param_t ? dep_signed_url_refresher.parse(this.search.substr(1)) :
  this.search.substr(1);
  }
  else if (param_t) {
  this.search = "";
  this.query = {
  };
  }
  return this;
  }
  }
  var var_b = regex_i.exec(var_y_1);
  if (var_b) {
  var var_w = (var_b = var_b[0]).toLowerCase();
  this.protocol = var_w;
  var_y_1 = var_y_1.substr(var_b.length);
  }
  if (param_r || var_b || var_y_1.match(/^\/\/[^@/]+@[^@/]+/)) {
  var var_E = var_y_1.substr(0, 2) === "//";
  if (!!var_E && (!var_b || !obj_m[var_b])) {
  var_y_1 = var_y_1.substr(2);
  this.slashes = true;
  }
  }
  if (!obj_m[var_b] && (var_E || var_b && !obj_g[var_b])) {
  var var_D;
  var var_T;
  var var_k = -1;
  for (var num_A = 0;
  num_A < list_d.length;
  num_A++) {
  if ((var_C = var_y_1.indexOf(list_d[num_A])) !== -1 && (var_k === -1 ||
  var_C < var_k)) {
  var_k = var_C;
  }
  }
  if ((var_T = var_k === -1 ? var_y_1.lastIndexOf("@") : var_y_1.lastIndexOf("@",
  var_k)) !== -1) {
  var_D = var_y_1.slice(0, var_T);
  var_y_1 = var_y_1.slice(var_T + 1);
  this.auth = decodeURIComponent(var_D);
  }
  var_k = -1;
  for (num_A = 0;
  num_A < var_l.length;
  num_A++) {
  var var_C;
  if ((var_C = var_y_1.indexOf(var_l[num_A])) !== -1 && (var_k === -1 ||
  var_C < var_k)) {
  var_k = var_C;
  }
  }
  if (var_k === -1) {
  var_k = var_y_1.length;
  }
  this.host = var_y_1.slice(0, var_k);
  var_y_1 = var_y_1.slice(var_k);
  this.parseHost();
  this.hostname = this.hostname || "";
  var var_x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
  if (!var_x) {
  var var_S = this.hostname.split(/\./);
  num_A = 0;
  for (var var_O = var_S.length;
  num_A < var_O;
  num_A++) {
  var var_I = var_S[num_A];
  if (var_I && !var_I.match(regex_p)) {
  var str_L = "";
  for (var num_R = 0, var_P = var_I.length;
  num_R < var_P;
  num_R++) {
  if (var_I.charCodeAt(num_R) > 127) {
  str_L += "x";
  }
  else {
  str_L += var_I[num_R];
  }
  }
  if (!str_L.match(regex_p)) {
  var var_B = var_S.slice(0, num_A);
  var var_M = var_S.slice(num_A + 1);
  var var_F = var_I.match(regex_f);
  if (var_F) {
  var_B.push(var_F[1]);
  var_M.unshift(var_F[2]);
  }
  if (var_M.length) {
  var_y_1 = "/" + var_M.join(".") + var_y_1;
  }
  this.hostname = var_B.join(".");
  break;
  }
  }
  }
  }
  if (this.hostname.length > 255) {
  this.hostname = "";
  }
  else {
  this.hostname = this.hostname.toLowerCase();
  }
  if (!var_x) {
  this.hostname = dep_segment_url_resolver.toASCII(this.hostname);
  }
  var var_U = this.port ? ":" + this.port : "";
  var var_N = this.hostname || "";
  this.host = var_N + var_U;
  this.href += this.host;
  if (var_x) {
  this.hostname = this.hostname.substr(1, this.hostname.length - 2);
  if (var_y_1[0] !== "/") {
  var_y_1 = "/" + var_y_1;
  }
  }
  }
  if (!obj_h[var_w]) {
  num_A = 0;
  var_O = var_u.length;
  for (;
  num_A < var_O;
  num_A++) {
  var var_j = var_u[num_A];
  if (var_y_1.indexOf(var_j) !== -1) {
  var var_q = encodeURIComponent(var_j);
  if (var_q === var_j) {
  var_q = escape(var_j);
  }
  var_y_1 = var_y_1.split(var_j).join(var_q);
  }
  }
  }
  var var_H = var_y_1.indexOf("#");
  if (var_H !== -1) {
  this.hash = var_y_1.substr(var_H);
  var_y_1 = var_y_1.slice(0, var_H);
  }
  var var_V = var_y_1.indexOf("?");
  if (var_V !== -1) {
  this.search = var_y_1.substr(var_V);
  this.query = var_y_1.substr(var_V + 1);
  if (param_t) {
  this.query = dep_signed_url_refresher.parse(this.query);
  }
  var_y_1 = var_y_1.slice(0, var_V);
  }
  else if (param_t) {
  this.search = "";
  this.query = {
  };
  }
  if (var_y_1) {
  this.pathname = var_y_1;
  }
  if (obj_g[var_w] && this.hostname && !this.pathname) {
  this.pathname = "/";
  }
  if (this.pathname || this.search) {
  var_U = this.pathname || "";
  var var_W = this.search || "";
  this.path = var_U + var_W;
  }
  this.href = this.format();
  return this;
  };
  var_o.prototype.format = function () {
  var var_e = this.auth || "";
  if (var_e) {
  var_e = (var_e = encodeURIComponent(var_e)).replace(/%3A/i, ":");
  var_e += "@";
  }
  var var_t = this.protocol || "";
  var var_r = this.pathname || "";
  var var_n = this.hash || "";
  var flag_o = false;
  var str_i = "";
  if (this.host) {
  flag_o = var_e + this.host;
  }
  else if (this.hostname) {
  flag_o = var_e + (this.hostname.indexOf(":") === -1 ? this.hostname :
  "[" + this.hostname + "]");
  if (this.port) {
  flag_o += ":" + this.port;
  }
  }
  if (this.query && typeof this.query == "object" && Object.keys(this.query).length) {
  str_i = dep_signed_url_refresher.stringify(this.query, {
  arrayFormat: "repeat",
  addQueryPrefix: false
  }
  );
  }
  var var_a = this.search || str_i && "?" + str_i || "";
  if (var_t && var_t.substr(-1) !== ":") {
  var_t += ":";
  }
  if (this.slashes || (!var_t || obj_g[var_t]) && flag_o !== false) {
  flag_o = "//" + (flag_o || "");
  if (var_r && var_r.charAt(0) !== "/") {
  var_r = "/" + var_r;
  }
  }
  else {
  flag_o ||= "";
  }
  if (var_n && var_n.charAt(0) !== "#") {
  var_n = "#" + var_n;
  }
  if (var_a && var_a.charAt(0) !== "?") {
  var_a = "?" + var_a;
  }
  return var_t + flag_o + (var_r = var_r.replace(/[?#]/g, function (param_e) {
  return encodeURIComponent(param_e);
  }
  )) + (var_a = var_a.replace("#", "%23")) + var_n;
  };
  var_o.prototype.resolve = function (param_e) {
  return this.resolveObject(var_y(param_e, false, true)).format();
  };
  var_o.prototype.resolveObject = function (param_e) {
  if (typeof param_e == "string") {
  var var_t = new var_o();
  var_t.parse(param_e, false, true);
  param_e = var_t;
  }
  var var_r = new var_o();
  for (var var_n = Object.keys(this), num_i = 0;
  num_i < var_n.length;
  num_i++) {
  var var_a = var_n[num_i];
  var_r[var_a] = this[var_a];
  }
  var_r.hash = param_e.hash;
  if (param_e.href === "") {
  var_r.href = var_r.format();
  return var_r;
  }
  if (param_e.slashes && !param_e.protocol) {
  for (var var_s = Object.keys(param_e), num_c = 0;
  num_c < var_s.length;
  num_c++) {
  var var_u_1 = var_s[num_c];
  if (var_u_1 !== "protocol") {
  var_r[var_u_1] = param_e[var_u_1];
  }
  }
  if (obj_g[var_r.protocol] && var_r.hostname && !var_r.pathname) {
  var_r.pathname = "/";
  var_r.path = var_r.pathname;
  }
  var_r.href = var_r.format();
  return var_r;
  }
  if (param_e.protocol && param_e.protocol !== var_r.protocol) {
  if (!obj_g[param_e.protocol]) {
  for (var var_l_1 = Object.keys(param_e), num_d = 0;
  num_d < var_l_1.length;
  num_d++) {
  var var_p = var_l_1[num_d];
  var_r[var_p] = param_e[var_p];
  }
  var_r.href = var_r.format();
  return var_r;
  }
  var_r.protocol = param_e.protocol;
  if (param_e.host || obj_m[param_e.protocol]) {
  var_r.pathname = param_e.pathname;
  }
  else {
  for (var var_f = (param_e.pathname || "").split("/");
  var_f.length && !(param_e.host = var_f.shift());
  );
  param_e.host ||= "";
  param_e.hostname ||= "";
  if (var_f[0] !== "") {
  var_f.unshift("");
  }
  if (var_f.length < 2) {
  var_f.unshift("");
  }
  var_r.pathname = var_f.join("/");
  }
  var_r.search = param_e.search;
  var_r.query = param_e.query;
  var_r.host = param_e.host || "";
  var_r.auth = param_e.auth;
  var_r.hostname = param_e.hostname || param_e.host;
  var_r.port = param_e.port;
  if (var_r.pathname || var_r.search) {
  var var_h = var_r.pathname || "";
  var var_v = var_r.search || "";
  var_r.path = var_h + var_v;
  }
  var_r.slashes = var_r.slashes || param_e.slashes;
  var_r.href = var_r.format();
  return var_r;
  }
  var var_y_1 = var_r.pathname && var_r.pathname.charAt(0) === "/";
  var var__ = param_e.host || param_e.pathname && param_e.pathname.charAt(0) === "/";
  var var_b = var__ || var_y_1 || var_r.host && param_e.pathname;
  var var_w = var_b;
  var var_E = var_r.pathname && var_r.pathname.split("/") ||
  [];
  var_f = param_e.pathname && param_e.pathname.split("/") ||
  [];
  var var_D = var_r.protocol && !obj_g[var_r.protocol];
  if (var_D) {
  var_r.hostname = "";
  var_r.port = null;
  if (var_r.host) {
  if (var_E[0] === "") {
  var_E[0] = var_r.host;
  }
  else {
  var_E.unshift(var_r.host);
  }
  }
  var_r.host = "";
  if (param_e.protocol) {
  param_e.hostname = null;
  param_e.port = null;
  if (param_e.host) {
  if (var_f[0] === "") {
  var_f[0] = param_e.host;
  }
  else {
  var_f.unshift(param_e.host);
  }
  }
  param_e.host = null;
  }
  var_b = var_b && (var_f[0] === "" || var_E[0] === "");
  }
  if (var__) {
  var_r.host = param_e.host || param_e.host === "" ? param_e.host :
  var_r.host;
  var_r.hostname = param_e.hostname || param_e.hostname === "" ?
  param_e.hostname : var_r.hostname;
  var_r.search = param_e.search;
  var_r.query = param_e.query;
  var_E = var_f;
  }
  else if (var_f.length) {
  var_E ||= [];
  var_E.pop();
  var_E = var_E.concat(var_f);
  var_r.search = param_e.search;
  var_r.query = param_e.query;
  }
  else if (param_e.search != null) {
  if (var_D) {
  var_r.host = var_E.shift();
  var_r.hostname = var_r.host;
  if (var_x = !!var_r.host && !!(var_r.host.indexOf("@") > 0) &&
  var_r.host.split("@")) {
  var_r.auth = var_x.shift();
  var_r.hostname = var_x.shift();
  var_r.host = var_r.hostname;
  }
  }
  var_r.search = param_e.search;
  var_r.query = param_e.query;
  if (var_r.pathname !== null || var_r.search !== null) {
  var_r.path = (var_r.pathname ? var_r.pathname : "") + (var_r.search ?
  var_r.search : "");
  }
  var_r.href = var_r.format();
  return var_r;
  }
  if (!var_E.length) {
  var_r.pathname = null;
  if (var_r.search) {
  var_r.path = "/" + var_r.search;
  }
  else {
  var_r.path = null;
  }
  var_r.href = var_r.format();
  return var_r;
  }
  var var_T = var_E.slice(-1)[0];
  var var_k = (var_r.host || param_e.host || var_E.length > 1) &&
  (var_T === "." || var_T === "..") || var_T === "";
  var num_A = 0;
  for (var var_C = var_E.length;
  var_C >= 0;
  var_C--) {
  if ((var_T = var_E[var_C]) === ".") {
  var_E.splice(var_C, 1);
  }
  else if (var_T === "..") {
  var_E.splice(var_C, 1);
  num_A++;
  }
  else if (num_A) {
  var_E.splice(var_C, 1);
  num_A--;
  }
  }
  if (!var_b && !var_w) {
  for (;
  num_A--;
  num_A) {
  var_E.unshift("..");
  }
  }
  if (!!var_b && var_E[0] !== "" && (!var_E[0] || var_E[0].charAt(0) !== "/")) {
  var_E.unshift("");
  }
  if (var_k && var_E.join("/").substr(-1) !== "/") {
  var_E.push("");
  }
  var var_x;
  var var_S = var_E[0] === "" || var_E[0] && var_E[0].charAt(0) === "/";
  if (var_D) {
  var_r.hostname = var_S ? "" : var_E.length ? var_E.shift() :
  "";
  var_r.host = var_r.hostname;
  if (var_x = !!var_r.host && !!(var_r.host.indexOf("@") > 0) &&
  var_r.host.split("@")) {
  var_r.auth = var_x.shift();
  var_r.hostname = var_x.shift();
  var_r.host = var_r.hostname;
  }
  }
  if ((var_b = var_b || var_r.host && var_E.length) && !var_S) {
  var_E.unshift("");
  }
  if (var_E.length > 0) {
  var_r.pathname = var_E.join("/");
  }
  else {
  var_r.pathname = null;
  var_r.path = null;
  }
  if (var_r.pathname !== null || var_r.search !== null) {
  var_r.path = (var_r.pathname ? var_r.pathname : "") + (var_r.search ?
  var_r.search : "");
  }
  var_r.auth = param_e.auth || var_r.auth;
  var_r.slashes = var_r.slashes || param_e.slashes;
  var_r.href = var_r.format();
  return var_r;
  };
  var_o.prototype.parseHost = function () {
  var var_e = this.host;
  var var_t = regex_a.exec(var_e);
  if (var_t) {
  if ((var_t = var_t[0]) !== ":") {
  this.port = var_t.substr(1);
  }
  var_e = var_e.substr(0, var_e.length - var_t.length);
  }
  if (var_e) {
  this.hostname = var_e;
  }
  };
  exportsObj.parse = var_y;
  exportsObj.resolve = function (param_e, param_t) {
  return var_y(param_e, false, true).resolve(param_t);
  };
  exportsObj.resolveObject = function (param_e, param_t) {
  if (param_e) {
  return var_y(param_e, false, true).resolveObject(param_t);
  }
  else {
  return param_t;
  }
  };
  exportsObj.format = function (param_e) {
  if (typeof param_e == "string") {
  param_e = var_y(param_e);
  }
  if (param_e instanceof var_o) {
  return param_e.format();
  }
  else {
  return var_o.prototype.format.call(param_e);
  }
  };
  exportsObj.Url = var_o;
  };
