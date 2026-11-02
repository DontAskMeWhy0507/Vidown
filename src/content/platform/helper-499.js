// Module 499 - Savior Helper 499
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_15 = requireFn(15),
  dep_helper_157 = requireFn(157),
  var_o = dep_helper_157.base,
  var_a = dep_helper_157.bignum,
  var_s = dep_helper_157.constants.der;
  function var_u(param_t) {
  this.enc = "der", this.name = param_t.name, this.entity = param_t, this.tree = new var_c(
  ), this.tree._init(param_t.body);
  }
  function var_c(param_t) {
  var_o.Node.call(this, "der", param_t);
  }
  function var_l(param_t, param_e) {
  var var_r = param_t.readUInt8(param_e);
  if (param_t.isError(var_r)) return var_r;
  var var_n = var_s.tagClass[var_r >> 6],
  var_i = 0 == (32 & var_r);
  if (31 == (31 & var_r)) {
  var var_o_1 = var_r;
  for (var_r = 0;
  128 == (128 & var_o_1);
  ) {
  if (var_o_1 = param_t.readUInt8(param_e), param_t.isError(var_o_1)) return var_o_1;
  var_r <<= 7, var_r |= 127 & var_o_1;
  }
  }
  else var_r &= 31;
  return {
  cls: var_n,
  primitive: var_i,
  tag: var_r,
  tagStr: var_s.tag[var_r]
  };
  }
  function var_f(param_t, param_e, param_r) {
  var var_n = param_t.readUInt8(param_r);
  if (param_t.isError(var_n)) return var_n;
  if (!param_e && 128 === var_n) return null;
  if (0 == (128 & var_n)) return var_n;
  var var_i = 127 & var_n;
  if (var_i > 4) return param_t.error("length octect is too long");
  var_n = 0;
  for (var num_o = 0;
  num_o < var_i;
  num_o++) {
  var_n <<= 8;
  var var_a_1 = param_t.readUInt8(param_r);
  if (param_t.isError(var_a_1)) return var_a_1;
  var_n |= var_a_1;
  }
  return var_n;
  }
  moduleObj.exports = var_u, var_u.prototype.decode = function (param_t, param_e) {
  return param_t instanceof var_o.DecoderBuffer || (param_t = new var_o.DecoderBuffer(
  param_t, param_e)), this.tree._decode(param_t, param_e);
  }
  , dep_module_15(var_c, var_o.Node), var_c.prototype._peekTag = function (param_t,
  param_e, param_r) {
  if (param_t.isEmpty()) return !1;
  var var_n = param_t.save(),
  var_i = var_l(param_t, 'Failed to peek tag: "' + param_e + '"');
  return param_t.isError(var_i) ? var_i : (param_t.restore(var_n), var_i.tag === param_e ||
  var_i.tagStr === param_e || var_i.tagStr + "of" === param_e ||
  param_r);
  }
  , var_c.prototype._decodeTag = function (param_t, param_e, param_r) {
  var var_n = var_l(param_t, 'Failed to decode tag of "' + param_e + '"');
  if (param_t.isError(var_n)) return var_n;
  var var_i = var_f(param_t, var_n.primitive, 'Failed to get length of "' + param_e + '"');
  if (param_t.isError(var_i)) return var_i;
  if (!param_r && var_n.tag !== param_e && var_n.tagStr !== param_e &&
  var_n.tagStr + "of" !== param_e) return param_t.error('Failed to match tag: "' + param_e + '"');
  if (var_n.primitive || null !== var_i) return param_t.skip(var_i, 'Failed to match body of: "' + param_e + '"');
  var var_o_1 = param_t.save(),
  var_a_1 = this._skipUntilEnd(param_t, 'Failed to skip indefinite length body: "' + this.tag + '"');
  return param_t.isError(var_a_1) ? var_a_1 : (var_i = param_t.offset - var_o_1.offset,
  param_t.restore(var_o_1), param_t.skip(var_i, 'Failed to match body of: "' + param_e + '"'));
  }
  , var_c.prototype._skipUntilEnd = function (param_t, param_e) {
  for (;;
  ) {
  var var_r = var_l(param_t, param_e);
  if (param_t.isError(var_r)) return var_r;
  var var_n,
  var_i = var_f(param_t, var_r.primitive, param_e);
  if (param_t.isError(var_i)) return var_i;
  if (var_n = var_r.primitive || null !== var_i ? param_t.skip(var_i) :
  this._skipUntilEnd(param_t, param_e), param_t.isError(var_n)) return var_n;
  if ("end" === var_r.tagStr) break;
  }
  }
  , var_c.prototype._decodeList = function (param_t, param_e, param_r, param_n) {
  for (var list_i = [];
  !param_t.isEmpty();
  ) {
  var var_o_1 = this._peekTag(param_t, "end");
  if (param_t.isError(var_o_1)) return var_o_1;
  var var_a_1 = param_r.decode(param_t, "der", param_n);
  if (param_t.isError(var_a_1) && var_o_1) break;
  list_i.push(var_a_1);
  }
  return list_i;
  }
  , var_c.prototype._decodeStr = function (param_t, param_e) {
  if ("bitstr" === param_e) {
  var var_r = param_t.readUInt8();
  return param_t.isError(var_r) ? var_r : {
  unused: var_r,
  data: param_t.raw()
  };
  }
  if ("bmpstr" === param_e) {
  var var_n = param_t.raw();
  if (var_n.length % 2 == 1) return param_t.error("Decoding of string type: bmpstr length mismatch");
  for (var str_i = "", num_o = 0;
  num_o < var_n.length / 2;
  num_o++) str_i += String.fromCharCode(var_n.readUInt16BE(2 * num_o));
  return str_i;
  }
  if ("numstr" === param_e) {
  var var_a_1 = param_t.raw().toString("ascii");
  return this._isNumstr(var_a_1) ? var_a_1 : param_t.error("Decoding of string type: numstr unsupported characters");
  }
  if ("octstr" === param_e) return param_t.raw();
  if ("objDesc" === param_e) return param_t.raw();
  if ("printstr" === param_e) {
  var var_s_1 = param_t.raw().toString("ascii");
  return this._isPrintstr(var_s_1) ? var_s_1 : param_t.error("Decoding of string type: printstr unsupported characters");
  }
  return /str$/.test(param_e) ? param_t.raw().toString() : param_t.error("Decoding of string type: " + param_e + " unsupported");
  }
  , var_c.prototype._decodeObjid = function (param_t, param_e, param_r) {
  for (var var_n, list_i = [], num_o = 0;
  !param_t.isEmpty();
  ) {
  var var_a_1 = param_t.readUInt8();
  num_o <<= 7, num_o |= 127 & var_a_1, 0 == (128 & var_a_1) &&
  (list_i.push(num_o), num_o = 0);
  }
  128 & var_a_1 && list_i.push(num_o);
  var var_s_1 = list_i[0] / 40 | 0,
  var_u_1 = list_i[0] % 40;
  if (var_n = param_r ? list_i : [var_s_1, var_u_1].concat(list_i.slice(1)), param_e) {
  var var_c_1 = param_e[var_n.join(" ")];
  void 0 === var_c_1 && (var_c_1 = param_e[var_n.join(".")]), void 0 !== var_c_1 &&
  (var_n = var_c_1);
  }
  return var_n;
  }
  , var_c.prototype._decodeTime = function (param_t, param_e) {
  var var_r = param_t.raw().toString();
  if ("gentime" === param_e) var var_n = 0 | var_r.slice(0, 4),
  var_i = 0 | var_r.slice(4, 6),
  var_o_1 = 0 | var_r.slice(6, 8),
  var_a_1 = 0 | var_r.slice(8, 10),
  var_s_1 = 0 | var_r.slice(10, 12),
  var_u_1 = 0 | var_r.slice(12, 14);
  else {
  if ("utctime" !== param_e) return param_t.error("Decoding " + param_e + " time is not supported yet");
  var_n = 0 | var_r.slice(0, 2), var_i = 0 | var_r.slice(2, 4), var_o_1 = 0 | var_r.slice(
  4, 6), var_a_1 = 0 | var_r.slice(6, 8), var_s_1 = 0 | var_r.slice(8, 10), var_u_1 = 0 | var_r.slice(
  10, 12);
  var_n = var_n < 70 ? 2e3 + var_n : 1900 + var_n;
  }
  return Date.UTC(var_n, var_i - 1, var_o_1, var_a_1, var_s_1, var_u_1, 0);
  }
  , var_c.prototype._decodeNull = function (param_t) {
  return null;
  }
  , var_c.prototype._decodeBool = function (param_t) {
  var var_e = param_t.readUInt8();
  return param_t.isError(var_e) ? var_e : 0 !== var_e;
  }
  , var_c.prototype._decodeInt = function (param_t, param_e) {
  var var_r = param_t.raw(),
  var_n = new var_a(var_r);
  return param_e && (var_n = param_e[var_n.toString(10)] || var_n), var_n;
  }
  , var_c.prototype._use = function (param_t, param_e) {
  return "function" == typeof param_t && (param_t = param_t(param_e)), param_t._getDecoder(
  "der").tree;
  };
  };
