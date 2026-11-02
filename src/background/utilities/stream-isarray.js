// Module 46 [utilities] - Stream / runtime utility component (stream-isarray)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(107).Buffer;
  var var_o = var_n.isEncoding || function (param_e) {
  switch ((param_e = "" + param_e) && param_e.toLowerCase()) {
  case "hex":
  case "utf8":
  case "utf-8":
  case "ascii":
  case "binary":
  case "base64":
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  case "raw":
  return true;
  default:
  return false;
  }
  };
  function var_i(param_e) {
  var var_t;
  this.encoding = function (param_e_1) {
  var var_t_1 = function (param_e_2) {
  if (!param_e_2) {
  return "utf8";
  }
  var var_t_2;
  while (true) {
  switch (param_e_2) {
  case "utf8":
  case "utf-8":
  return "utf8";
  case "ucs2":
  case "ucs-2":
  case "utf16le":
  case "utf-16le":
  return "utf16le";
  case "latin1":
  case "binary":
  return "latin1";
  case "base64":
  case "ascii":
  case "hex":
  return param_e_2;
  default:
  if (var_t_2) {
  return;
  }
  param_e_2 = ("" + param_e_2).toLowerCase();
  var_t_2 = true;
  }
  }
  }
  (param_e_1);
  if (typeof var_t_1 != "string" && (var_n.isEncoding === var_o ||
  !var_o(param_e_1))) {
  throw new Error("Unknown encoding: " + param_e_1);
  }
  return var_t_1 || param_e_1;
  }
  (param_e);
  switch (this.encoding) {
  case "utf16le":
  this.text = var_c;
  this.end = var_u;
  var_t = 4;
  break;
  case "utf8":
  this.fillLast = var_s;
  var_t = 4;
  break;
  case "base64":
  this.text = var_l;
  this.end = var_d;
  var_t = 3;
  break;
  default:
  this.write = var_p;
  this.end = var_f;
  return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = var_n.allocUnsafe(var_t);
  }
  function var_a(param_e) {
  if (param_e <= 127) {
  return 0;
  }
  else if (param_e >> 5 == 6) {
  return 2;
  }
  else if (param_e >> 4 == 14) {
  return 3;
  }
  else if (param_e >> 3 == 30) {
  return 4;
  }
  else if (param_e >> 6 == 2) {
  return -1;
  }
  else {
  return -2;
  }
  }
  function var_s(param_e) {
  var var_t = this.lastTotal - this.lastNeed;
  var var_r = function (param_e_1, param_t, param_r) {
  if ((param_t[0] & 192) != 128) {
  param_e_1.lastNeed = 0;
  return "�";
  }
  if (param_e_1.lastNeed > 1 && param_t.length > 1) {
  if ((param_t[1] & 192) != 128) {
  param_e_1.lastNeed = 1;
  return "�";
  }
  if (param_e_1.lastNeed > 2 && param_t.length > 2 && (param_t[2] & 192) != 128) {
  param_e_1.lastNeed = 2;
  return "�";
  }
  }
  }
  (this, param_e);
  if (var_r !== undefined) {
  return var_r;
  }
  else if (this.lastNeed <= param_e.length) {
  param_e.copy(this.lastChar, var_t, 0, this.lastNeed);
  return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  else {
  param_e.copy(this.lastChar, var_t, 0, param_e.length);
  this.lastNeed -= param_e.length;
  return;
  }
  }
  function var_c(param_e, param_t) {
  if ((param_e.length - param_t) % 2 == 0) {
  var var_r = param_e.toString("utf16le", param_t);
  if (var_r) {
  var var_n_1 = var_r.charCodeAt(var_r.length - 1);
  if (var_n_1 >= 55296 && var_n_1 <= 56319) {
  this.lastNeed = 2;
  this.lastTotal = 4;
  this.lastChar[0] = param_e[param_e.length - 2];
  this.lastChar[1] = param_e[param_e.length - 1];
  return var_r.slice(0, -1);
  }
  }
  return var_r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = param_e[param_e.length - 1];
  return param_e.toString("utf16le", param_t, param_e.length - 1);
  }
  function var_u(param_e) {
  var var_t = param_e && param_e.length ? this.write(param_e) :
  "";
  if (this.lastNeed) {
  var var_r = this.lastTotal - this.lastNeed;
  return var_t + this.lastChar.toString("utf16le", 0, var_r);
  }
  return var_t;
  }
  function var_l(param_e, param_t) {
  var var_r = (param_e.length - param_t) % 3;
  if (var_r === 0) {
  return param_e.toString("base64", param_t);
  }
  else {
  this.lastNeed = 3 - var_r;
  this.lastTotal = 3;
  if (var_r === 1) {
  this.lastChar[0] = param_e[param_e.length - 1];
  }
  else {
  this.lastChar[0] = param_e[param_e.length - 2];
  this.lastChar[1] = param_e[param_e.length - 1];
  }
  return param_e.toString("base64", param_t, param_e.length - var_r);
  }
  }
  function var_d(param_e) {
  var var_t = param_e && param_e.length ? this.write(param_e) :
  "";
  if (this.lastNeed) {
  return var_t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  }
  else {
  return var_t;
  }
  }
  function var_p(param_e) {
  return param_e.toString(this.encoding);
  }
  function var_f(param_e) {
  if (param_e && param_e.length) {
  return this.write(param_e);
  }
  else {
  return "";
  }
  }
  exportsObj.StringDecoder = var_i;
  var_i.prototype.write = function (param_e) {
  if (param_e.length === 0) {
  return "";
  }
  var var_t;
  var var_r;
  if (this.lastNeed) {
  if ((var_t = this.fillLast(param_e)) === undefined) {
  return "";
  }
  var_r = this.lastNeed;
  this.lastNeed = 0;
  }
  else {
  var_r = 0;
  }
  if (var_r < param_e.length) {
  if (var_t) {
  return var_t + this.text(param_e, var_r);
  }
  else {
  return this.text(param_e, var_r);
  }
  }
  else {
  return var_t || "";
  }
  };
  var_i.prototype.end = function (param_e) {
  var var_t = param_e && param_e.length ? this.write(param_e) :
  "";
  if (this.lastNeed) {
  return var_t + "�";
  }
  else {
  return var_t;
  }
  };
  var_i.prototype.text = function (param_e, param_t) {
  var var_r = function (param_e_1, param_t_1, param_r) {
  var var_n_2 = param_t_1.length - 1;
  if (var_n_2 < param_r) {
  return 0;
  }
  var var_o_1 = var_a(param_t_1[var_n_2]);
  if (var_o_1 >= 0) {
  if (var_o_1 > 0) {
  param_e_1.lastNeed = var_o_1 - 1;
  }
  return var_o_1;
  }
  if (--var_n_2 < param_r || var_o_1 === -2) {
  return 0;
  }
  if ((var_o_1 = var_a(param_t_1[var_n_2])) >= 0) {
  if (var_o_1 > 0) {
  param_e_1.lastNeed = var_o_1 - 2;
  }
  return var_o_1;
  }
  if (--var_n_2 < param_r || var_o_1 === -2) {
  return 0;
  }
  if ((var_o_1 = var_a(param_t_1[var_n_2])) >= 0) {
  if (var_o_1 > 0) {
  if (var_o_1 === 2) {
  var_o_1 = 0;
  }
  else {
  param_e_1.lastNeed = var_o_1 - 3;
  }
  }
  return var_o_1;
  }
  return 0;
  }
  (this, param_e, param_t);
  if (!this.lastNeed) {
  return param_e.toString("utf8", param_t);
  }
  this.lastTotal = var_r;
  var var_n_1 = param_e.length - (var_r - this.lastNeed);
  param_e.copy(this.lastChar, 0, var_n_1);
  return param_e.toString("utf8", param_t, var_n_1);
  };
  var_i.prototype.fillLast = function (param_e) {
  if (this.lastNeed <= param_e.length) {
  param_e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
  return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  param_e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, param_e.length);
  this.lastNeed -= param_e.length;
  };
  };
