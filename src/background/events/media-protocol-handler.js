// Module 505 [events] - Media protocol handler and buffer decoder
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  (function (param_t) {
  param_t.parser = function (param_e_1, param_t_1) {
  return new var_i(param_e_1, param_t_1);
  };
  param_t.SAXParser = var_i;
  param_t.SAXStream = var_s;
  param_t.createStream = function (param_e_1, param_t_1) {
  return new var_s(param_e_1, param_t_1);
  };
  param_t.MAX_BUFFER_LENGTH = 65536;
  var var_n;
  var list_o = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName",
  "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
  function var_i(param_e_1, param_r) {
  if (!(this instanceof var_i)) {
  return new var_i(param_e_1, param_r);
  }
  (function (param_e_2) {
  for (var num_t = 0, var_r = list_o.length;
  num_t < var_r;
  num_t++) {
  param_e_2[list_o[num_t]] = "";
  }
  }
  )(this);
  this.q = this.c = "";
  this.bufferCheckPosition = param_t.MAX_BUFFER_LENGTH;
  this.opt = param_r || {
  };
  this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags;
  this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase";
  this.tags = [];
  this.closed = this.closedRoot = this.sawRoot = false;
  this.tag = this.error = null;
  this.strict = !!param_e_1;
  this.noscript = !!param_e_1 || !!this.opt.noscript;
  this.state = num_E.BEGIN;
  this.strictEntities = this.opt.strictEntities;
  this.ENTITIES = this.strictEntities ? Object.create(param_t.XML_ENTITIES) :
  Object.create(param_t.ENTITIES);
  this.attribList = [];
  if (this.opt.xmlns) {
  this.ns = Object.create(obj_u);
  }
  this.trackPosition = this.opt.position !== false;
  if (this.trackPosition) {
  this.position = this.line = this.column = 0;
  }
  var_T(this, "onready");
  }
  param_t.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype",
  "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata",
  "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
  Object.create ||= function (param_e_1) {
  function var_t() {
  }
  var_t.prototype = param_e_1;
  return new var_t();
  };
  Object.keys ||= function (param_e_1) {
  var list_t = [];
  for (var var_r in param_e_1) {
  if (param_e_1.hasOwnProperty(var_r)) {
  list_t.push(var_r);
  }
  }
  return list_t;
  };
  var_i.prototype = {
  end: function () {
  var_S(this);
  }
  ,
  write: function (param_e_1) {
  if (this.error) {
  throw this.error;
  }
  if (this.closed) {
  return var_x(this, "Cannot write after close. Assign an onready handler.");
  }
  if (param_e_1 === null) {
  return var_S(this);
  }
  if (typeof param_e_1 == "object") {
  param_e_1 = param_e_1.toString();
  }
  var num_r = 0;
  var str_n = "";
  while (str_n = var_U(param_e_1, num_r++), this.c = str_n, str_n) {
  if (this.trackPosition) {
  this.position++;
  if (str_n === "\n") {
  this.line++;
  this.column = 0;
  }
  else {
  this.column++;
  }
  }
  switch (this.state) {
  case num_E.BEGIN:
  this.state = num_E.BEGIN_WHITESPACE;
  if (str_n === "﻿") {
  continue;
  }
  var_F(this, str_n);
  continue;
  case num_E.BEGIN_WHITESPACE:
  var_F(this, str_n);
  continue;
  case num_E.TEXT:
  if (this.sawRoot && !this.closedRoot) {
  var var_i_1 = num_r - 1;
  while (str_n && str_n !== "<" && str_n !== "&") {
  if ((str_n = var_U(param_e_1, num_r++)) && this.trackPosition) {
  this.position++;
  if (str_n === "\n") {
  this.line++;
  this.column = 0;
  }
  else {
  this.column++;
  }
  }
  }
  this.textNode += param_e_1.substring(var_i_1, num_r - 1);
  }
  if (str_n !== "<" || this.sawRoot && this.closedRoot && !this.strict) {
  if (!var_h(str_n) && (!this.sawRoot || !!this.closedRoot)) {
  var_O(this, "Text data outside of root node.");
  }
  if (str_n === "&") {
  this.state = num_E.TEXT_ENTITY;
  }
  else {
  this.textNode += str_n;
  }
  }
  else {
  this.state = num_E.OPEN_WAKA;
  this.startTagPosition = this.position;
  }
  continue;
  case num_E.SCRIPT:
  if (str_n === "<") {
  this.state = num_E.SCRIPT_ENDING;
  }
  else {
  this.script += str_n;
  }
  continue;
  case num_E.SCRIPT_ENDING:
  if (str_n === "/") {
  this.state = num_E.CLOSE_TAG;
  }
  else {
  this.script += "<" + str_n;
  this.state = num_E.SCRIPT;
  }
  continue;
  case num_E.OPEN_WAKA:
  if (str_n === "!") {
  this.state = num_E.SGML_DECL;
  this.sgmlDecl = "";
  }
  else if (var_h(str_n));
  else if (var_v(regex_l, str_n)) {
  this.state = num_E.OPEN_TAG;
  this.tagName = str_n;
  }
  else if (str_n === "/") {
  this.state = num_E.CLOSE_TAG;
  this.tagName = "";
  }
  else if (str_n === "?") {
  this.state = num_E.PROC_INST;
  this.procInstName = this.procInstBody = "";
  }
  else {
  var_O(this, "Unencoded <");
  if (this.startTagPosition + 1 < this.position) {
  var var_a_1 = this.position - this.startTagPosition;
  str_n = new Array(var_a_1).join(" ") + str_n;
  }
  this.textNode += "<" + str_n;
  this.state = num_E.TEXT;
  }
  continue;
  case num_E.SGML_DECL:
  if ((this.sgmlDecl + str_n).toUpperCase() === "[CDATA[") {
  var_k(this, "onopencdata");
  this.state = num_E.CDATA;
  this.sgmlDecl = "";
  this.cdata = "";
  }
  else if (this.sgmlDecl + str_n === "--") {
  this.state = num_E.COMMENT;
  this.comment = "";
  this.sgmlDecl = "";
  }
  else if ((this.sgmlDecl + str_n).toUpperCase() === "DOCTYPE") {
  this.state = num_E.DOCTYPE;
  if (this.doctype || this.sawRoot) {
  var_O(this, "Inappropriately located doctype declaration");
  }
  this.doctype = "";
  this.sgmlDecl = "";
  }
  else if (str_n === ">") {
  var_k(this, "onsgmldeclaration", this.sgmlDecl);
  this.sgmlDecl = "";
  this.state = num_E.TEXT;
  }
  else if (var_m(str_n)) {
  this.state = num_E.SGML_DECL_QUOTED;
  this.sgmlDecl += str_n;
  }
  else {
  this.sgmlDecl += str_n;
  }
  continue;
  case num_E.SGML_DECL_QUOTED:
  if (str_n === this.q) {
  this.state = num_E.SGML_DECL;
  this.q = "";
  }
  this.sgmlDecl += str_n;
  continue;
  case num_E.DOCTYPE:
  if (str_n === ">") {
  this.state = num_E.TEXT;
  var_k(this, "ondoctype", this.doctype);
  this.doctype = true;
  }
  else {
  this.doctype += str_n;
  if (str_n === "[") {
  this.state = num_E.DOCTYPE_DTD;
  }
  else if (var_m(str_n)) {
  this.state = num_E.DOCTYPE_QUOTED;
  this.q = str_n;
  }
  }
  continue;
  case num_E.DOCTYPE_QUOTED:
  this.doctype += str_n;
  if (str_n === this.q) {
  this.q = "";
  this.state = num_E.DOCTYPE;
  }
  continue;
  case num_E.DOCTYPE_DTD:
  this.doctype += str_n;
  if (str_n === "]") {
  this.state = num_E.DOCTYPE;
  }
  else if (var_m(str_n)) {
  this.state = num_E.DOCTYPE_DTD_QUOTED;
  this.q = str_n;
  }
  continue;
  case num_E.DOCTYPE_DTD_QUOTED:
  this.doctype += str_n;
  if (str_n === this.q) {
  this.state = num_E.DOCTYPE_DTD;
  this.q = "";
  }
  continue;
  case num_E.COMMENT:
  if (str_n === "-") {
  this.state = num_E.COMMENT_ENDING;
  }
  else {
  this.comment += str_n;
  }
  continue;
  case num_E.COMMENT_ENDING:
  if (str_n === "-") {
  this.state = num_E.COMMENT_ENDED;
  this.comment = var_C(this.opt, this.comment);
  if (this.comment) {
  var_k(this, "oncomment", this.comment);
  }
  this.comment = "";
  }
  else {
  this.comment += "-" + str_n;
  this.state = num_E.COMMENT;
  }
  continue;
  case num_E.COMMENT_ENDED:
  if (str_n !== ">") {
  var_O(this, "Malformed comment");
  this.comment += "--" + str_n;
  this.state = num_E.COMMENT;
  }
  else {
  this.state = num_E.TEXT;
  }
  continue;
  case num_E.CDATA:
  if (str_n === "]") {
  this.state = num_E.CDATA_ENDING;
  }
  else {
  this.cdata += str_n;
  }
  continue;
  case num_E.CDATA_ENDING:
  if (str_n === "]") {
  this.state = num_E.CDATA_ENDING_2;
  }
  else {
  this.cdata += "]" + str_n;
  this.state = num_E.CDATA;
  }
  continue;
  case num_E.CDATA_ENDING_2:
  if (str_n === ">") {
  if (this.cdata) {
  var_k(this, "oncdata", this.cdata);
  }
  var_k(this, "onclosecdata");
  this.cdata = "";
  this.state = num_E.TEXT;
  }
  else if (str_n === "]") {
  this.cdata += "]";
  }
  else {
  this.cdata += "]]" + str_n;
  this.state = num_E.CDATA;
  }
  continue;
  case num_E.PROC_INST:
  if (str_n === "?") {
  this.state = num_E.PROC_INST_ENDING;
  }
  else if (var_h(str_n)) {
  this.state = num_E.PROC_INST_BODY;
  }
  else {
  this.procInstName += str_n;
  }
  continue;
  case num_E.PROC_INST_BODY:
  if (!this.procInstBody && var_h(str_n)) {
  continue;
  }
  if (str_n === "?") {
  this.state = num_E.PROC_INST_ENDING;
  }
  else {
  this.procInstBody += str_n;
  }
  continue;
  case num_E.PROC_INST_ENDING:
  if (str_n === ">") {
  var_k(this, "onprocessinginstruction", {
  name: this.procInstName,
  body: this.procInstBody
  }
  );
  this.procInstName = this.procInstBody = "";
  this.state = num_E.TEXT;
  }
  else {
  this.procInstBody += "?" + str_n;
  this.state = num_E.PROC_INST_BODY;
  }
  continue;
  case num_E.OPEN_TAG:
  if (var_v(regex_d, str_n)) {
  this.tagName += str_n;
  }
  else {
  var_I(this);
  if (str_n === ">") {
  var_P(this);
  }
  else if (str_n === "/") {
  this.state = num_E.OPEN_TAG_SLASH;
  }
  else {
  if (!var_h(str_n)) {
  var_O(this, "Invalid character in tag name");
  }
  this.state = num_E.ATTRIB;
  }
  }
  continue;
  case num_E.OPEN_TAG_SLASH:
  if (str_n === ">") {
  var_P(this, true);
  var_B(this);
  }
  else {
  var_O(this, "Forward-slash in opening tag not followed by >");
  this.state = num_E.ATTRIB;
  }
  continue;
  case num_E.ATTRIB:
  if (var_h(str_n)) {
  continue;
  }
  if (str_n === ">") {
  var_P(this);
  }
  else if (str_n === "/") {
  this.state = num_E.OPEN_TAG_SLASH;
  }
  else if (var_v(regex_l, str_n)) {
  this.attribName = str_n;
  this.attribValue = "";
  this.state = num_E.ATTRIB_NAME;
  }
  else {
  var_O(this, "Invalid attribute name");
  }
  continue;
  case num_E.ATTRIB_NAME:
  if (str_n === "=") {
  this.state = num_E.ATTRIB_VALUE;
  }
  else if (str_n === ">") {
  var_O(this, "Attribute without value");
  this.attribValue = this.attribName;
  var_R(this);
  var_P(this);
  }
  else if (var_h(str_n)) {
  this.state = num_E.ATTRIB_NAME_SAW_WHITE;
  }
  else if (var_v(regex_d, str_n)) {
  this.attribName += str_n;
  }
  else {
  var_O(this, "Invalid attribute name");
  }
  continue;
  case num_E.ATTRIB_NAME_SAW_WHITE:
  if (str_n === "=") {
  this.state = num_E.ATTRIB_VALUE;
  }
  else {
  if (var_h(str_n)) {
  continue;
  }
  var_O(this, "Attribute without value");
  this.tag.attributes[this.attribName] = "";
  this.attribValue = "";
  var_k(this, "onattribute", {
  name: this.attribName,
  value: ""
  }
  );
  this.attribName = "";
  if (str_n === ">") {
  var_P(this);
  }
  else if (var_v(regex_l, str_n)) {
  this.attribName = str_n;
  this.state = num_E.ATTRIB_NAME;
  }
  else {
  var_O(this, "Invalid attribute name");
  this.state = num_E.ATTRIB;
  }
  }
  continue;
  case num_E.ATTRIB_VALUE:
  if (var_h(str_n)) {
  continue;
  }
  if (var_m(str_n)) {
  this.q = str_n;
  this.state = num_E.ATTRIB_VALUE_QUOTED;
  }
  else {
  var_O(this, "Unquoted attribute value");
  this.state = num_E.ATTRIB_VALUE_UNQUOTED;
  this.attribValue = str_n;
  }
  continue;
  case num_E.ATTRIB_VALUE_QUOTED:
  if (str_n !== this.q) {
  if (str_n === "&") {
  this.state = num_E.ATTRIB_VALUE_ENTITY_Q;
  }
  else {
  this.attribValue += str_n;
  }
  continue;
  }
  var_R(this);
  this.q = "";
  this.state = num_E.ATTRIB_VALUE_CLOSED;
  continue;
  case num_E.ATTRIB_VALUE_CLOSED:
  if (var_h(str_n)) {
  this.state = num_E.ATTRIB;
  }
  else if (str_n === ">") {
  var_P(this);
  }
  else if (str_n === "/") {
  this.state = num_E.OPEN_TAG_SLASH;
  }
  else if (var_v(regex_l, str_n)) {
  var_O(this, "No whitespace between attributes");
  this.attribName = str_n;
  this.attribValue = "";
  this.state = num_E.ATTRIB_NAME;
  }
  else {
  var_O(this, "Invalid attribute name");
  }
  continue;
  case num_E.ATTRIB_VALUE_UNQUOTED:
  if (!var_g(str_n)) {
  if (str_n === "&") {
  this.state = num_E.ATTRIB_VALUE_ENTITY_U;
  }
  else {
  this.attribValue += str_n;
  }
  continue;
  }
  var_R(this);
  if (str_n === ">") {
  var_P(this);
  }
  else {
  this.state = num_E.ATTRIB;
  }
  continue;
  case num_E.CLOSE_TAG:
  if (this.tagName) {
  if (str_n === ">") {
  var_B(this);
  }
  else if (var_v(regex_d, str_n)) {
  this.tagName += str_n;
  }
  else if (this.script) {
  this.script += "</" + this.tagName;
  this.tagName = "";
  this.state = num_E.SCRIPT;
  }
  else {
  if (!var_h(str_n)) {
  var_O(this, "Invalid tagname in closing tag");
  }
  this.state = num_E.CLOSE_TAG_SAW_WHITE;
  }
  }
  else {
  if (var_h(str_n)) {
  continue;
  }
  if (var_y(regex_l, str_n)) {
  if (this.script) {
  this.script += "</" + str_n;
  this.state = num_E.SCRIPT;
  }
  else {
  var_O(this, "Invalid tagname in closing tag.");
  }
  }
  else {
  this.tagName = str_n;
  }
  }
  continue;
  case num_E.CLOSE_TAG_SAW_WHITE:
  if (var_h(str_n)) {
  continue;
  }
  if (str_n === ">") {
  var_B(this);
  }
  else {
  var_O(this, "Invalid characters in closing tag");
  }
  continue;
  case num_E.TEXT_ENTITY:
  case num_E.ATTRIB_VALUE_ENTITY_Q:
  case num_E.ATTRIB_VALUE_ENTITY_U:
  var var_s_1;
  var var_c;
  switch (this.state) {
  case num_E.TEXT_ENTITY:
  var_s_1 = num_E.TEXT;
  var_c = "textNode";
  break;
  case num_E.ATTRIB_VALUE_ENTITY_Q:
  var_s_1 = num_E.ATTRIB_VALUE_QUOTED;
  var_c = "attribValue";
  break;
  case num_E.ATTRIB_VALUE_ENTITY_U:
  var_s_1 = num_E.ATTRIB_VALUE_UNQUOTED;
  var_c = "attribValue";
  }
  if (str_n === ";") {
  this[var_c] += var_M(this);
  this.entity = "";
  this.state = var_s_1;
  }
  else if (var_v(this.entity.length ? regex_f : regex_p, str_n)) {
  this.entity += str_n;
  }
  else {
  var_O(this, "Invalid character in entity name");
  this[var_c] += "&" + this.entity + str_n;
  this.entity = "";
  this.state = var_s_1;
  }
  continue;
  default:
  throw new Error(this, "Unknown state: " + this.state);
  }
  }
  if (this.position >= this.bufferCheckPosition) {
  (function (param_e_2) {
  var var_r = Math.max(param_t.MAX_BUFFER_LENGTH, 10);
  var num_n = 0;
  for (var num_i = 0, var_a_2 = list_o.length;
  num_i < var_a_2;
  num_i++) {
  var var_s_2 = param_e_2[list_o[num_i]].length;
  if (var_s_2 > var_r) {
  switch (list_o[num_i]) {
  case "textNode":
  var_A(param_e_2);
  break;
  case "cdata":
  var_k(param_e_2, "oncdata", param_e_2.cdata);
  param_e_2.cdata = "";
  break;
  case "script":
  var_k(param_e_2, "onscript", param_e_2.script);
  param_e_2.script = "";
  break;
  default:
  var_x(param_e_2, "Max buffer length exceeded: " + list_o[num_i]);
  }
  }
  num_n = Math.max(num_n, var_s_2);
  }
  var var_c_1 = param_t.MAX_BUFFER_LENGTH - num_n;
  param_e_2.bufferCheckPosition = var_c_1 + param_e_2.position;
  }
  )(this);
  }
  return this;
  }
  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,
  resume: function () {
  this.error = null;
  return this;
  }
  ,
  close: function () {
  return this.write(null);
  }
  ,
  flush: function () {
  var var_e;
  var_A(var_e = this);
  if (var_e.cdata !== "") {
  var_k(var_e, "oncdata", var_e.cdata);
  var_e.cdata = "";
  }
  if (var_e.script !== "") {
  var_k(var_e, "onscript", var_e.script);
  var_e.script = "";
  }
  }
  };
  try {
  var_n = requireFn(83).Stream;
  }
  catch (var_e) {
  var_n = function () {
  };
  }
  var var_a = param_t.EVENTS.filter(function (param_e_1) {
  return param_e_1 !== "error" && param_e_1 !== "end";
  }
  );
  function var_s(param_e_1, param_t_1) {
  if (!(this instanceof var_s)) {
  return new var_s(param_e_1, param_t_1);
  }
  var_n.apply(this);
  this._parser = new var_i(param_e_1, param_t_1);
  this.writable = true;
  this.readable = true;
  var var_r = this;
  this._parser.onend = function () {
  var_r.emit("end");
  };
  this._parser.onerror = function (param_e_2) {
  var_r.emit("error", param_e_2);
  var_r._parser.error = null;
  };
  this._decoder = null;
  var_a.forEach(function (param_e_2) {
  Object.defineProperty(var_r, "on" + param_e_2, {
  get: function () {
  return var_r._parser["on" + param_e_2];
  }
  ,
  set: function (param_t_2) {
  if (!param_t_2) {
  var_r.removeAllListeners(param_e_2);
  var_r._parser["on" + param_e_2] = param_t_2;
  return param_t_2;
  }
  var_r.on(param_e_2, param_t_2);
  }
  ,
  enumerable: true,
  configurable: false
  }
  );
  }
  );
  }
  var_s.prototype = Object.create(var_n.prototype, {
  constructor: {
  value: var_s
  }
  }
  );
  var_s.prototype.write = function (param_t_1) {
  if (typeof param_e == "function" && typeof param_e.isBuffer == "function" &&
  param_e.isBuffer(param_t_1)) {
  if (!this._decoder) {
  var var_n_1 = requireFn(46).StringDecoder;
  this._decoder = new var_n_1("utf8");
  }
  param_t_1 = this._decoder.write(param_t_1);
  }
  this._parser.write(param_t_1.toString());
  this.emit("data", param_t_1);
  return true;
  };
  var_s.prototype.end = function (param_e_1) {
  if (param_e_1 && param_e_1.length) {
  this.write(param_e_1);
  }
  this._parser.end();
  return true;
  };
  var_s.prototype.on = function (param_e_1, param_t_1) {
  var var_r = this;
  if (!var_r._parser["on" + param_e_1] && var_a.indexOf(param_e_1) !== -1) {
  var_r._parser["on" + param_e_1] = function () {
  var var_t = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
  var_t.splice(0, 0, param_e_1);
  var_r.emit.apply(var_r, var_t);
  };
  }
  return var_n.prototype.on.call(var_r, param_e_1, param_t_1);
  };
  var str_c = "http://www.w3.org/XML/1998/namespace";
  var obj_u = {
  xml: str_c,
  xmlns: "http://www.w3.org/2000/xmlns/"
  };
  var regex_l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var regex_d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  var regex_p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var regex_f = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  function var_h(param_e_1) {
  return param_e_1 === " " || param_e_1 === "\n" || param_e_1 === "\r" ||
  param_e_1 === "\t";
  }
  function var_m(param_e_1) {
  return param_e_1 === "\"" || param_e_1 === "'";
  }
  function var_g(param_e_1) {
  return param_e_1 === ">" || var_h(param_e_1);
  }
  function var_v(param_e_1, param_t_1) {
  return param_e_1.test(param_t_1);
  }
  function var_y(param_e_1, param_t_1) {
  return !var_v(param_e_1, param_t_1);
  }
  var var__;
  var var_b;
  var var_w;
  var num_E = 0;
  param_t.STATE = {
  BEGIN: num_E++,
  BEGIN_WHITESPACE: num_E++,
  TEXT: num_E++,
  TEXT_ENTITY: num_E++,
  OPEN_WAKA: num_E++,
  SGML_DECL: num_E++,
  SGML_DECL_QUOTED: num_E++,
  DOCTYPE: num_E++,
  DOCTYPE_QUOTED: num_E++,
  DOCTYPE_DTD: num_E++,
  DOCTYPE_DTD_QUOTED: num_E++,
  COMMENT_STARTING: num_E++,
  COMMENT: num_E++,
  COMMENT_ENDING: num_E++,
  COMMENT_ENDED: num_E++,
  CDATA: num_E++,
  CDATA_ENDING: num_E++,
  CDATA_ENDING_2: num_E++,
  PROC_INST: num_E++,
  PROC_INST_BODY: num_E++,
  PROC_INST_ENDING: num_E++,
  OPEN_TAG: num_E++,
  OPEN_TAG_SLASH: num_E++,
  ATTRIB: num_E++,
  ATTRIB_NAME: num_E++,
  ATTRIB_NAME_SAW_WHITE: num_E++,
  ATTRIB_VALUE: num_E++,
  ATTRIB_VALUE_QUOTED: num_E++,
  ATTRIB_VALUE_CLOSED: num_E++,
  ATTRIB_VALUE_UNQUOTED: num_E++,
  ATTRIB_VALUE_ENTITY_Q: num_E++,
  ATTRIB_VALUE_ENTITY_U: num_E++,
  CLOSE_TAG: num_E++,
  CLOSE_TAG_SAW_WHITE: num_E++,
  SCRIPT: num_E++,
  SCRIPT_ENDING: num_E++
  };
  param_t.XML_ENTITIES = {
  amp: "&",
  gt: ">",
  lt: "<",
  quot: "\"",
  apos: "'"
  };
  param_t.ENTITIES = {
  amp: "&",
  gt: ">",
  lt: "<",
  quot: "\"",
  apos: "'",
  AElig: 198,
  Aacute: 193,
  Acirc: 194,
  Agrave: 192,
  Aring: 197,
  Atilde: 195,
  Auml: 196,
  Ccedil: 199,
  ETH: 208,
  Eacute: 201,
  Ecirc: 202,
  Egrave: 200,
  Euml: 203,
  Iacute: 205,
  Icirc: 206,
  Igrave: 204,
  Iuml: 207,
  Ntilde: 209,
  Oacute: 211,
  Ocirc: 212,
  Ograve: 210,
  Oslash: 216,
  Otilde: 213,
  Ouml: 214,
  THORN: 222,
  Uacute: 218,
  Ucirc: 219,
  Ugrave: 217,
  Uuml: 220,
  Yacute: 221,
  aacute: 225,
  acirc: 226,
  aelig: 230,
  agrave: 224,
  aring: 229,
  atilde: 227,
  auml: 228,
  ccedil: 231,
  eacute: 233,
  ecirc: 234,
  egrave: 232,
  eth: 240,
  euml: 235,
  iacute: 237,
  icirc: 238,
  igrave: 236,
  iuml: 239,
  ntilde: 241,
  oacute: 243,
  ocirc: 244,
  ograve: 242,
  oslash: 248,
  otilde: 245,
  ouml: 246,
  szlig: 223,
  thorn: 254,
  uacute: 250,
  ucirc: 251,
  ugrave: 249,
  uuml: 252,
  yacute: 253,
  yuml: 255,
  copy: 169,
  reg: 174,
  nbsp: 160,
  iexcl: 161,
  cent: 162,
  pound: 163,
  curren: 164,
  yen: 165,
  brvbar: 166,
  sect: 167,
  uml: 168,
  ordf: 170,
  laquo: 171,
  not: 172,
  shy: 173,
  macr: 175,
  deg: 176,
  plusmn: 177,
  sup1: 185,
  sup2: 178,
  sup3: 179,
  acute: 180,
  micro: 181,
  para: 182,
  middot: 183,
  cedil: 184,
  ordm: 186,
  raquo: 187,
  frac14: 188,
  frac12: 189,
  frac34: 190,
  iquest: 191,
  times: 215,
  divide: 247,
  OElig: 338,
  oelig: 339,
  Scaron: 352,
  scaron: 353,
  Yuml: 376,
  fnof: 402,
  circ: 710,
  tilde: 732,
  Alpha: 913,
  Beta: 914,
  Gamma: 915,
  Delta: 916,
  Epsilon: 917,
  Zeta: 918,
  Eta: 919,
  Theta: 920,
  Iota: 921,
  Kappa: 922,
  Lambda: 923,
  Mu: 924,
  Nu: 925,
  Xi: 926,
  Omicron: 927,
  Pi: 928,
  Rho: 929,
  Sigma: 931,
  Tau: 932,
  Upsilon: 933,
  Phi: 934,
  Chi: 935,
  Psi: 936,
  Omega: 937,
  alpha: 945,
  beta: 946,
  gamma: 947,
  delta: 948,
  epsilon: 949,
  zeta: 950,
  eta: 951,
  theta: 952,
  iota: 953,
  kappa: 954,
  lambda: 955,
  mu: 956,
  nu: 957,
  xi: 958,
  omicron: 959,
  pi: 960,
  rho: 961,
  sigmaf: 962,
  sigma: 963,
  tau: 964,
  upsilon: 965,
  phi: 966,
  chi: 967,
  psi: 968,
  omega: 969,
  thetasym: 977,
  upsih: 978,
  piv: 982,
  ensp: 8194,
  emsp: 8195,
  thinsp: 8201,
  zwnj: 8204,
  zwj: 8205,
  lrm: 8206,
  rlm: 8207,
  ndash: 8211,
  mdash: 8212,
  lsquo: 8216,
  rsquo: 8217,
  sbquo: 8218,
  ldquo: 8220,
  rdquo: 8221,
  bdquo: 8222,
  dagger: 8224,
  Dagger: 8225,
  bull: 8226,
  hellip: 8230,
  permil: 8240,
  prime: 8242,
  Prime: 8243,
  lsaquo: 8249,
  rsaquo: 8250,
  oline: 8254,
  frasl: 8260,
  euro: 8364,
  image: 8465,
  weierp: 8472,
  real: 8476,
  trade: 8482,
  alefsym: 8501,
  larr: 8592,
  uarr: 8593,
  rarr: 8594,
  darr: 8595,
  harr: 8596,
  crarr: 8629,
  lArr: 8656,
  uArr: 8657,
  rArr: 8658,
  dArr: 8659,
  hArr: 8660,
  forall: 8704,
  part: 8706,
  exist: 8707,
  empty: 8709,
  nabla: 8711,
  isin: 8712,
  notin: 8713,
  ni: 8715,
  prod: 8719,
  sum: 8721,
  minus: 8722,
  lowast: 8727,
  radic: 8730,
  prop: 8733,
  infin: 8734,
  ang: 8736,
  and: 8743,
  or: 8744,
  cap: 8745,
  cup: 8746,
  int: 8747,
  there4: 8756,
  sim: 8764,
  cong: 8773,
  asymp: 8776,
  ne: 8800,
  equiv: 8801,
  le: 8804,
  ge: 8805,
  sub: 8834,
  sup: 8835,
  nsub: 8836,
  sube: 8838,
  supe: 8839,
  oplus: 8853,
  otimes: 8855,
  perp: 8869,
  sdot: 8901,
  lceil: 8968,
  rceil: 8969,
  lfloor: 8970,
  rfloor: 8971,
  lang: 9001,
  rang: 9002,
  loz: 9674,
  spades: 9824,
  clubs: 9827,
  hearts: 9829,
  diams: 9830
  };
  Object.keys(param_t.ENTITIES).forEach(function (param_e_1) {
  var var_r = param_t.ENTITIES[param_e_1];
  var var_n_1 = typeof var_r == "number" ? String.fromCharCode(var_r) :
  var_r;
  param_t.ENTITIES[param_e_1] = var_n_1;
  }
  );
  for (var var_D in param_t.STATE) {
  param_t.STATE[param_t.STATE[var_D]] = var_D;
  }
  function var_T(param_e_1, param_t_1, param_r) {
  if (param_e_1[param_t_1]) {
  param_e_1[param_t_1](param_r);
  }
  }
  function var_k(param_e_1, param_t_1, param_r) {
  if (param_e_1.textNode) {
  var_A(param_e_1);
  }
  var_T(param_e_1, param_t_1, param_r);
  }
  function var_A(param_e_1) {
  param_e_1.textNode = var_C(param_e_1.opt, param_e_1.textNode);
  if (param_e_1.textNode) {
  var_T(param_e_1, "ontext", param_e_1.textNode);
  }
  param_e_1.textNode = "";
  }
  function var_C(param_e_1, param_t_1) {
  if (param_e_1.trim) {
  param_t_1 = param_t_1.trim();
  }
  if (param_e_1.normalize) {
  param_t_1 = param_t_1.replace(/\s+/g, " ");
  }
  return param_t_1;
  }
  function var_x(param_e_1, param_t_1) {
  var_A(param_e_1);
  if (param_e_1.trackPosition) {
  param_t_1 += "\nLine: " + param_e_1.line + "\nColumn: " + param_e_1.column + "\nChar: " + param_e_1.c;
  }
  param_t_1 = new Error(param_t_1);
  param_e_1.error = param_t_1;
  var_T(param_e_1, "onerror", param_t_1);
  return param_e_1;
  }
  function var_S(param_e_1) {
  if (param_e_1.sawRoot && !param_e_1.closedRoot) {
  var_O(param_e_1, "Unclosed root tag");
  }
  if (param_e_1.state !== num_E.BEGIN && param_e_1.state !== num_E.BEGIN_WHITESPACE &&
  param_e_1.state !== num_E.TEXT) {
  var_x(param_e_1, "Unexpected end");
  }
  var_A(param_e_1);
  param_e_1.c = "";
  param_e_1.closed = true;
  var_T(param_e_1, "onend");
  var_i.call(param_e_1, param_e_1.strict, param_e_1.opt);
  return param_e_1;
  }
  function var_O(param_e_1, param_t_1) {
  if (typeof param_e_1 != "object" || !(param_e_1 instanceof var_i)) {
  throw new Error("bad call to strictFail");
  }
  if (param_e_1.strict) {
  var_x(param_e_1, param_t_1);
  }
  }
  function var_I(param_e_1) {
  if (!param_e_1.strict) {
  param_e_1.tagName = param_e_1.tagName[param_e_1.looseCase]();
  }
  var var_t = param_e_1.tags[param_e_1.tags.length - 1] || param_e_1;
  var var_r = param_e_1.tag = {
  name: param_e_1.tagName,
  attributes: {
  }
  };
  if (param_e_1.opt.xmlns) {
  var_r.ns = var_t.ns;
  }
  param_e_1.attribList.length = 0;
  var_k(param_e_1, "onopentagstart", var_r);
  }
  function var_L(param_e_1, param_t_1) {
  var var_r = param_e_1.indexOf(":") < 0 ? ["", param_e_1] :
  param_e_1.split(":");
  var var_n_1 = var_r[0];
  var var_o = var_r[1];
  if (param_t_1 && param_e_1 === "xmlns") {
  var_n_1 = "xmlns";
  var_o = "";
  }
  return {
  prefix: var_n_1,
  local: var_o
  };
  }
  function var_R(param_e_1) {
  if (!param_e_1.strict) {
  param_e_1.attribName = param_e_1.attribName[param_e_1.looseCase]();
  }
  if (param_e_1.attribList.indexOf(param_e_1.attribName) !== -1 ||
  param_e_1.tag.attributes.hasOwnProperty(param_e_1.attribName)) {
  param_e_1.attribName = param_e_1.attribValue = "";
  }
  else {
  if (param_e_1.opt.xmlns) {
  var var_t = var_L(param_e_1.attribName, true);
  var var_r = var_t.prefix;
  var var_n_1 = var_t.local;
  if (var_r === "xmlns") {
  if (var_n_1 === "xml" && param_e_1.attribValue !== str_c) {
  var_O(param_e_1, "xml: prefix must be bound to " + str_c + "\nActual: " + param_e_1.attribValue);
  }
  else if (var_n_1 === "xmlns" && param_e_1.attribValue !== "http://www.w3.org/2000/xmlns/") {
  var_O(param_e_1, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + param_e_1.attribValue);
  }
  else {
  var var_o = param_e_1.tag;
  var var_i_1 = param_e_1.tags[param_e_1.tags.length - 1] ||
  param_e_1;
  if (var_o.ns === var_i_1.ns) {
  var_o.ns = Object.create(var_i_1.ns);
  }
  var_o.ns[var_n_1] = param_e_1.attribValue;
  }
  }
  param_e_1.attribList.push([param_e_1.attribName, param_e_1.attribValue]);
  }
  else {
  param_e_1.tag.attributes[param_e_1.attribName] = param_e_1.attribValue;
  var_k(param_e_1, "onattribute", {
  name: param_e_1.attribName,
  value: param_e_1.attribValue
  }
  );
  }
  param_e_1.attribName = param_e_1.attribValue = "";
  }
  }
  function var_P(param_e_1, param_t_1) {
  if (param_e_1.opt.xmlns) {
  var var_r = param_e_1.tag;
  var var_n_1 = var_L(param_e_1.tagName);
  var_r.prefix = var_n_1.prefix;
  var_r.local = var_n_1.local;
  var_r.uri = var_r.ns[var_n_1.prefix] || "";
  if (var_r.prefix && !var_r.uri) {
  var_O(param_e_1, "Unbound namespace prefix: " + JSON.stringify(param_e_1.tagName));
  var_r.uri = var_n_1.prefix;
  }
  var var_o = param_e_1.tags[param_e_1.tags.length - 1] || param_e_1;
  if (var_r.ns && var_o.ns !== var_r.ns) {
  Object.keys(var_r.ns).forEach(function (param_t_2) {
  var_k(param_e_1, "onopennamespace", {
  prefix: param_t_2,
  uri: var_r.ns[param_t_2]
  }
  );
  }
  );
  }
  for (var num_i = 0, var_a_1 = param_e_1.attribList.length;
  num_i < var_a_1;
  num_i++) {
  var var_s_1 = param_e_1.attribList[num_i];
  var var_c = var_s_1[0];
  var var_u = var_s_1[1];
  var var_l = var_L(var_c, true);
  var var_d = var_l.prefix;
  var var_p = var_l.local;
  var var_f = var_d === "" ? "" : var_r.ns[var_d] || "";
  var obj_h = {
  name: var_c,
  value: var_u,
  prefix: var_d,
  local: var_p,
  uri: var_f
  };
  if (var_d && var_d !== "xmlns" && !var_f) {
  var_O(param_e_1, "Unbound namespace prefix: " + JSON.stringify(var_d));
  obj_h.uri = var_d;
  }
  param_e_1.tag.attributes[var_c] = obj_h;
  var_k(param_e_1, "onattribute", obj_h);
  }
  param_e_1.attribList.length = 0;
  }
  param_e_1.tag.isSelfClosing = !!param_t_1;
  param_e_1.sawRoot = true;
  param_e_1.tags.push(param_e_1.tag);
  var_k(param_e_1, "onopentag", param_e_1.tag);
  if (!param_t_1) {
  if (param_e_1.noscript || param_e_1.tagName.toLowerCase() !== "script") {
  param_e_1.state = num_E.TEXT;
  }
  else {
  param_e_1.state = num_E.SCRIPT;
  }
  param_e_1.tag = null;
  param_e_1.tagName = "";
  }
  param_e_1.attribName = param_e_1.attribValue = "";
  param_e_1.attribList.length = 0;
  }
  function var_B(param_e_1) {
  if (!param_e_1.tagName) {
  var_O(param_e_1, "Weird empty close tag.");
  param_e_1.textNode += "</>";
  param_e_1.state = num_E.TEXT;
  return;
  }
  if (param_e_1.script) {
  if (param_e_1.tagName !== "script") {
  param_e_1.script += "</" + param_e_1.tagName + ">";
  param_e_1.tagName = "";
  param_e_1.state = num_E.SCRIPT;
  return;
  }
  var_k(param_e_1, "onscript", param_e_1.script);
  param_e_1.script = "";
  }
  var var_t = param_e_1.tags.length;
  var var_r = param_e_1.tagName;
  if (!param_e_1.strict) {
  var_r = var_r[param_e_1.looseCase]();
  }
  var var_n_1 = var_r;
  while (var_t--) {
  if (param_e_1.tags[var_t].name === var_n_1) {
  break;
  }
  var_O(param_e_1, "Unexpected close tag");
  }
  if (var_t < 0) {
  var_O(param_e_1, "Unmatched closing tag: " + param_e_1.tagName);
  param_e_1.textNode += "</" + param_e_1.tagName + ">";
  param_e_1.state = num_E.TEXT;
  return;
  }
  param_e_1.tagName = var_r;
  for (var var_o = param_e_1.tags.length;
  var_o-- > var_t;
  ) {
  var var_i_1 = param_e_1.tag = param_e_1.tags.pop();
  param_e_1.tagName = param_e_1.tag.name;
  var_k(param_e_1, "onclosetag", param_e_1.tagName);
  var obj_a = {
  };
  for (var var_s_1 in var_i_1.ns) {
  obj_a[var_s_1] = var_i_1.ns[var_s_1];
  }
  var var_c = param_e_1.tags[param_e_1.tags.length - 1] || param_e_1;
  if (param_e_1.opt.xmlns && var_i_1.ns !== var_c.ns) {
  Object.keys(var_i_1.ns).forEach(function (param_t_1) {
  var var_r_1 = var_i_1.ns[param_t_1];
  var_k(param_e_1, "onclosenamespace", {
  prefix: param_t_1,
  uri: var_r_1
  }
  );
  }
  );
  }
  }
  if (var_t === 0) {
  param_e_1.closedRoot = true;
  }
  param_e_1.tagName = param_e_1.attribValue = param_e_1.attribName = "";
  param_e_1.attribList.length = 0;
  param_e_1.state = num_E.TEXT;
  }
  function var_M(param_e_1) {
  var var_t;
  var var_r = param_e_1.entity;
  var var_n_1 = var_r.toLowerCase();
  var str_o = "";
  if (param_e_1.ENTITIES[var_r]) {
  return param_e_1.ENTITIES[var_r];
  }
  else if (param_e_1.ENTITIES[var_n_1]) {
  return param_e_1.ENTITIES[var_n_1];
  }
  else {
  if ((var_r = var_n_1).charAt(0) === "#") {
  if (var_r.charAt(1) === "x") {
  var_r = var_r.slice(2);
  str_o = (var_t = parseInt(var_r, 16)).toString(16);
  }
  else {
  var_r = var_r.slice(1);
  str_o = (var_t = parseInt(var_r, 10)).toString(10);
  }
  }
  var_r = var_r.replace(/^0+/, "");
  if (isNaN(var_t) || str_o.toLowerCase() !== var_r) {
  var_O(param_e_1, "Invalid character entity");
  return "&" + param_e_1.entity + ";";
  }
  else {
  return String.fromCodePoint(var_t);
  }
  }
  }
  function var_F(param_e_1, param_t_1) {
  if (param_t_1 === "<") {
  param_e_1.state = num_E.OPEN_WAKA;
  param_e_1.startTagPosition = param_e_1.position;
  }
  else if (!var_h(param_t_1)) {
  var_O(param_e_1, "Non-whitespace before first tag.");
  param_e_1.textNode = param_t_1;
  param_e_1.state = num_E.TEXT;
  }
  }
  function var_U(param_e_1, param_t_1) {
  var str_r = "";
  if (param_t_1 < param_e_1.length) {
  str_r = param_e_1.charAt(param_t_1);
  }
  return str_r;
  }
  num_E = param_t.STATE;
  if (!String.fromCodePoint) {
  var__ = String.fromCharCode;
  var_b = Math.floor;
  var_w = function () {
  var var_e;
  var var_t;
  var num_r = 16384;
  var list_n = [];
  var var_o = -1;
  var var_i_1 = arguments.length;
  if (!var_i_1) {
  return "";
  }
  var str_a = "";
  while (++var_o < var_i_1) {
  var var_s_1 = Number(arguments[var_o]);
  if (!isFinite(var_s_1) || var_s_1 < 0 || var_s_1 > 1114111 ||
  var_b(var_s_1) !== var_s_1) {
  throw RangeError("Invalid code point: " + var_s_1);
  }
  if (var_s_1 <= 65535) {
  list_n.push(var_s_1);
  }
  else {
  var_e = 55296 + ((var_s_1 -= 65536) >> 10);
  var_t = var_s_1 % 1024 + 56320;
  list_n.push(var_e, var_t);
  }
  if (var_o + 1 === var_i_1 || list_n.length > num_r) {
  str_a += var__.apply(null, list_n);
  list_n.length = 0;
  }
  }
  return str_a;
  };
  if (Object.defineProperty) {
  Object.defineProperty(String, "fromCodePoint", {
  value: var_w,
  configurable: true,
  writable: true
  }
  );
  }
  else {
  String.fromCodePoint = var_w;
  }
  }
  }
  )(exportsObj);
  }
  ).call(this, requireFn(27).Buffer);
  };
