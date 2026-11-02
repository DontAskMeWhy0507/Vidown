// Module 500 - Savior Helper 500
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_15 = requireFn(15),
  var_i = requireFn(27).Buffer,
  dep_helper_157 = requireFn(157),
  var_a = dep_helper_157.base,
  var_s = dep_helper_157.constants.der;
  function var_u(param_t) {
  this.enc = "der", this.name = param_t.name, this.entity = param_t, this.tree = new var_c(
  ), this.tree._init(param_t.body);
  }
  function var_c(param_t) {
  var_a.Node.call(this, "der", param_t);
  }
  function var_l(param_t) {
  return param_t < 10 ? "0" + param_t : param_t;
  }
  moduleObj.exports = var_u, var_u.prototype.encode = function (param_t, param_e) {
  return this.tree._encode(param_t, param_e).join();
  }
  , dep_module_15(var_c, var_a.Node), var_c.prototype._encodeComposite = function (
  param_t, param_e, param_r, param_n) {
  var var_o,
  var_a_1 = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  var var_i_1;
  "seqof" === param_t_1 ? param_t_1 = "seq" : "setof" === param_t_1 &&
  (param_t_1 = "set");
  if (var_s.tagByName.hasOwnProperty(param_t_1)) var_i_1 = var_s.tagByName[param_t_1];
  else {
  if ("number" != typeof param_t_1 || (0 | param_t_1) !== param_t_1) return param_n_1.error(
  "Unknown tag: " + param_t_1);
  var_i_1 = param_t_1;
  }
  if (var_i_1 >= 31) return param_n_1.error("Multi-octet tag encoding unsupported");
  param_e_1 || (var_i_1 |= 32);
  return var_i_1 |= var_s.tagClassByName[param_r_1 || "universal"] << 6;
  }
  (param_t, param_e, param_r, this.reporter);
  if (param_n.length < 128) return (var_o = new var_i(2))[0] = var_a_1, var_o[1] = param_n.length,
  this._createEncoderBuffer([var_o, param_n]);
  for (var num_u = 1, var_c_1 = param_n.length;
  var_c_1 >= 256;
  var_c_1 >>= 8) num_u++;
  (var_o = new var_i(2 + num_u))[0] = var_a_1, var_o[1] = 128 | num_u;
  var_c_1 = 1 + num_u;
  for (var var_l_1 = param_n.length;
  var_l_1 > 0;
  var_c_1--, var_l_1 >>= 8) var_o[var_c_1] = 255 & var_l_1;
  return this._createEncoderBuffer([var_o, param_n]);
  }
  , var_c.prototype._encodeStr = function (param_t, param_e) {
  if ("bitstr" === param_e) return this._createEncoderBuffer([0 | param_t.unused,
  param_t.data]);
  if ("bmpstr" === param_e) {
  for (var var_r = new var_i(2 * param_t.length), num_n = 0;
  num_n < param_t.length;
  num_n++) var_r.writeUInt16BE(param_t.charCodeAt(num_n), 2 * num_n);
  return this._createEncoderBuffer(var_r);
  }
  return "numstr" === param_e ? this._isNumstr(param_t) ? this._createEncoderBuffer(
  param_t) : this.reporter.error("Encoding of string type: numstr supports only digits and space") :
  "printstr" === param_e ? this._isPrintstr(param_t) ? this._createEncoderBuffer(
  param_t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") :
  /str$/.test(param_e) || "objDesc" === param_e ? this._createEncoderBuffer(param_t) :
  this.reporter.error("Encoding of string type: " + param_e + " unsupported");
  }
  , var_c.prototype._encodeObjid = function (param_t, param_e, param_r) {
  if ("string" == typeof param_t) {
  if (!param_e) return this.reporter.error("string objid given, but no values map found");
  if (!param_e.hasOwnProperty(param_t)) return this.reporter.error("objid not found in values map");
  param_t = param_e[param_t].split(/[\s\.]+/g);
  for (var num_n = 0;
  num_n < param_t.length;
  num_n++) param_t[num_n] |= 0;
  }
  else if (Array.isArray(param_t)) {
  param_t = param_t.slice();
  for (num_n = 0;
  num_n < param_t.length;
  num_n++) param_t[num_n] |= 0;
  }
  if (!Array.isArray(param_t)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(
  param_t));
  if (!param_r) {
  if (param_t[1] >= 40) return this.reporter.error("Second objid identifier OOB");
  param_t.splice(0, 2, 40 * param_t[0] + param_t[1]);
  }
  var num_o = 0;
  for (num_n = 0;
  num_n < param_t.length;
  num_n++) {
  var var_a_1 = param_t[num_n];
  for (num_o++;
  var_a_1 >= 128;
  var_a_1 >>= 7) num_o++;
  }
  var var_s_1 = new var_i(num_o),
  var_u_1 = var_s_1.length - 1;
  for (num_n = param_t.length - 1;
  num_n >= 0;
  num_n--) {
  var_a_1 = param_t[num_n];
  for (var_s_1[var_u_1--] = 127 & var_a_1;
  (var_a_1 >>= 7) > 0;
  ) var_s_1[var_u_1--] = 128 | 127 & var_a_1;
  }
  return this._createEncoderBuffer(var_s_1);
  }
  , var_c.prototype._encodeTime = function (param_t, param_e) {
  var var_r,
  var_n = new Date(param_t);
  return "gentime" === param_e ? var_r = [var_l(var_n.getFullYear()), var_l(var_n.getUTCMonth(
  ) + 1), var_l(var_n.getUTCDate()), var_l(var_n.getUTCHours()), var_l(var_n.getUTCMinutes(
  )), var_l(var_n.getUTCSeconds()), "Z"].join("") : "utctime" === param_e ?
  var_r = [var_l(var_n.getFullYear() % 100), var_l(var_n.getUTCMonth() + 1), var_l(
  var_n.getUTCDate()), var_l(var_n.getUTCHours()), var_l(var_n.getUTCMinutes()),
  var_l(var_n.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + param_e + " time is not supported yet"),
  this._encodeStr(var_r, "octstr");
  }
  , var_c.prototype._encodeNull = function () {
  return this._createEncoderBuffer("");
  }
  , var_c.prototype._encodeInt = function (param_t, param_e) {
  if ("string" == typeof param_t) {
  if (!param_e) return this.reporter.error("String int or enum given, but no values map");
  if (!param_e.hasOwnProperty(param_t)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(
  param_t));
  param_t = param_e[param_t];
  }
  if ("number" != typeof param_t && !var_i.isBuffer(param_t)) {
  var var_r = param_t.toArray();
  !param_t.sign && 128 & var_r[0] && var_r.unshift(0), param_t = new var_i(var_r);
  }
  if (var_i.isBuffer(param_t)) {
  var var_n = param_t.length;
  0 === param_t.length && var_n++;
  var var_o = new var_i(var_n);
  return param_t.copy(var_o), 0 === param_t.length && (var_o[0] = 0), this._createEncoderBuffer(
  var_o);
  }
  if (param_t < 128) return this._createEncoderBuffer(param_t);
  if (param_t < 256) return this._createEncoderBuffer([0, param_t]);
  var_n = 1;
  for (var var_a_1 = param_t;
  var_a_1 >= 256;
  var_a_1 >>= 8) var_n++;
  for (var_a_1 = (var_o = new Array(var_n)).length - 1;
  var_a_1 >= 0;
  var_a_1--) var_o[var_a_1] = 255 & param_t, param_t >>= 8;
  return 128 & var_o[0] && var_o.unshift(0), this._createEncoderBuffer(new var_i(
  var_o));
  }
  , var_c.prototype._encodeBool = function (param_t) {
  return this._createEncoderBuffer(param_t ? 255 : 0);
  }
  , var_c.prototype._use = function (param_t, param_e) {
  return "function" == typeof param_t && (param_t = param_t(param_e)), param_t._getEncoder(
  "der").tree;
  }
  , var_c.prototype._skipDefault = function (param_t, param_e, param_r) {
  var var_n,
  var_i_1 = this._baseState;
  if (null === var_i_1.default) return !1;
  var var_o = param_t.join();
  if (void 0 === var_i_1.defaultBuffer && (var_i_1.defaultBuffer = this._encodeValue(
  var_i_1.default, param_e, param_r).join()), var_o.length !== var_i_1.defaultBuffer.length) return !1;
  for (var_n = 0;
  var_n < var_o.length;
  var_n++) if (var_o[var_n] !== var_i_1.defaultBuffer[var_n]) return !1;
  return !0;
  };
  };
