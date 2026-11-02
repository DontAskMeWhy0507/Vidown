// Module 657 - Savior Stream Url Normalizer
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(158).Reporter,
  var_i = requireFn(158).EncoderBuffer,
  var_o = requireFn(158).DecoderBuffer,
  dep_helper_116 = requireFn(116),
  list_s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime",
  "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr",
  "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str",
  "videostr"],
  var_u = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice",
  "any", "contains"].concat(list_s);
  function var_c(param_t, param_e) {
  var obj_r = {
  };
  this._baseState = obj_r, obj_r.enc = param_t, obj_r.parent = param_e ||
  null, obj_r.children = null, obj_r.tag = null, obj_r.args = null, obj_r.reverseArgs = null,
  obj_r.choice = null, obj_r.optional = !1, obj_r.any = !1, obj_r.obj = !1, obj_r.use = null,
  obj_r.useDecoder = null, obj_r.key = null, obj_r.default = null, obj_r.explicit = null,
  obj_r.implicit = null, obj_r.contains = null, obj_r.parent ||
  (obj_r.children = [], this._wrap());
  }
  moduleObj.exports = var_c;
  var list_l = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice",
  "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit",
  "contains"];
  var_c.prototype.clone = function () {
  var var_t = this._baseState,
  obj_e = {
  };
  list_l.forEach(function (param_r) {
  obj_e[param_r] = var_t[param_r];
  }
  );
  var var_r = new this.constructor(obj_e.parent);
  return var_r._baseState = obj_e, var_r;
  }
  , var_c.prototype._wrap = function () {
  var var_t = this._baseState;
  var_u.forEach(function (param_e) {
  this[param_e] = function () {
  var var_r = new this.constructor(this);
  return var_t.children.push(var_r), var_r[param_e].apply(var_r, arguments);
  };
  }
  , this);
  }
  , var_c.prototype._init = function (param_t) {
  var var_e = this._baseState;
  dep_helper_116(null === var_e.parent), param_t.call(this), var_e.children = var_e.children.filter(
  function (param_t_1) {
  return param_t_1._baseState.parent === this;
  }
  , this), dep_helper_116.equal(var_e.children.length, 1, "Root node can have only one child");
  }
  , var_c.prototype._useArgs = function (param_t) {
  var var_e = this._baseState,
  var_r = param_t.filter(function (param_t_1) {
  return param_t_1 instanceof this.constructor;
  }
  , this);
  param_t = param_t.filter(function (param_t_1) {
  return !(param_t_1 instanceof this.constructor);
  }
  , this), 0 !== var_r.length && (dep_helper_116(null === var_e.children), var_e.children = var_r,
  var_r.forEach(function (param_t_1) {
  param_t_1._baseState.parent = this;
  }
  , this)), 0 !== param_t.length && (dep_helper_116(null === var_e.args), var_e.args = param_t,
  var_e.reverseArgs = param_t.map(function (param_t_1) {
  if ("object" != typeof param_t_1 || param_t_1.constructor !== Object) return param_t_1;
  var obj_e = {
  };
  return Object.keys(param_t_1).forEach(function (param_r) {
  param_r == (0 | param_r) && (param_r |= 0);
  var var_n_1 = param_t_1[param_r];
  obj_e[var_n_1] = param_r;
  }
  ), obj_e;
  }
  ));
  }
  , ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime",
  "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite",
  "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(
  function (param_t) {
  var_c.prototype[param_t] = function () {
  var var_e = this._baseState;
  throw new Error(param_t + " not implemented for encoding: " + var_e.enc);
  };
  }
  ), list_s.forEach(function (param_t) {
  var_c.prototype[param_t] = function () {
  var var_e = this._baseState,
  var_r = Array.prototype.slice.call(arguments);
  return dep_helper_116(null === var_e.tag), var_e.tag = param_t, this._useArgs(
  var_r), this;
  };
  }
  ), var_c.prototype.use = function (param_t) {
  dep_helper_116(param_t);
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.use), var_e.use = param_t, this;
  }
  , var_c.prototype.optional = function () {
  return this._baseState.optional = !0, this;
  }
  , var_c.prototype.def = function (param_t) {
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.default), var_e.default = param_t, var_e.optional = !0,
  this;
  }
  , var_c.prototype.explicit = function (param_t) {
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.explicit && null === var_e.implicit), var_e.explicit = param_t,
  this;
  }
  , var_c.prototype.implicit = function (param_t) {
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.explicit && null === var_e.implicit), var_e.implicit = param_t,
  this;
  }
  , var_c.prototype.obj = function () {
  var var_t = this._baseState,
  var_e = Array.prototype.slice.call(arguments);
  return var_t.obj = !0, 0 !== var_e.length && this._useArgs(var_e), this;
  }
  , var_c.prototype.key = function (param_t) {
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.key), var_e.key = param_t, this;
  }
  , var_c.prototype.any = function () {
  return this._baseState.any = !0, this;
  }
  , var_c.prototype.choice = function (param_t) {
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.choice), var_e.choice = param_t, this._useArgs(
  Object.keys(param_t).map(function (param_e) {
  return param_t[param_e];
  }
  )), this;
  }
  , var_c.prototype.contains = function (param_t) {
  var var_e = this._baseState;
  return dep_helper_116(null === var_e.use), var_e.contains = param_t, this;
  }
  , var_c.prototype._decode = function (param_t, param_e) {
  var var_r = this._baseState;
  if (null === var_r.parent) return param_t.wrapResult(var_r.children[0]._decode(
  param_t, param_e));
  var var_n_1,
  var_i_1 = var_r.default,
  flag_a = !0,
  var_s = null;
  if (null !== var_r.key && (var_s = param_t.enterKey(var_r.key)), var_r.optional) {
  var var_u_1 = null;
  if (null !== var_r.explicit ? var_u_1 = var_r.explicit : null !== var_r.implicit ?
  var_u_1 = var_r.implicit : null !== var_r.tag && (var_u_1 = var_r.tag), null !== var_u_1 ||
  var_r.any) {
  if (flag_a = this._peekTag(param_t, var_u_1, var_r.any), param_t.isError(flag_a)) return flag_a;
  }
  else {
  var var_c_1 = param_t.save();
  try {
  null === var_r.choice ? this._decodeGeneric(var_r.tag, param_t, param_e) :
  this._decodeChoice(param_t, param_e), flag_a = !0;
  }
  catch (var_t) {
  flag_a = !1;
  }
  param_t.restore(var_c_1);
  }
  }
  if (var_r.obj && flag_a && (var_n_1 = param_t.enterObject()), flag_a) {
  if (null !== var_r.explicit) {
  var var_l = this._decodeTag(param_t, var_r.explicit);
  if (param_t.isError(var_l)) return var_l;
  param_t = var_l;
  }
  var var_f = param_t.offset;
  if (null === var_r.use && null === var_r.choice) {
  if (var_r.any) var_c_1 = param_t.save();
  var var_d = this._decodeTag(param_t, null !== var_r.implicit ?
  var_r.implicit : var_r.tag, var_r.any);
  if (param_t.isError(var_d)) return var_d;
  var_r.any ? var_i_1 = param_t.raw(var_c_1) : param_t = var_d;
  }
  if (param_e && param_e.track && null !== var_r.tag && param_e.track(param_t.path(
  ), var_f, param_t.length, "tagged"), param_e && param_e.track &&
  null !== var_r.tag && param_e.track(param_t.path(), param_t.offset, param_t.length,
  "content"), var_i_1 = var_r.any ? var_i_1 : null === var_r.choice ?
  this._decodeGeneric(var_r.tag, param_t, param_e) : this._decodeChoice(param_t,
  param_e), param_t.isError(var_i_1)) return var_i_1;
  if (var_r.any || null !== var_r.choice || null === var_r.children ||
  var_r.children.forEach(function (param_r) {
  param_r._decode(param_t, param_e);
  }
  ), var_r.contains && ("octstr" === var_r.tag || "bitstr" === var_r.tag)) {
  var var_h = new var_o(var_i_1);
  var_i_1 = this._getUse(var_r.contains, param_t._reporterState.obj)._decode(var_h,
  param_e);
  }
  }
  return var_r.obj && flag_a && (var_i_1 = param_t.leaveObject(var_n_1)), null === var_r.key ||
  null === var_i_1 && !0 !== flag_a ? null !== var_s && param_t.exitKey(var_s) :
  param_t.leaveKey(var_s, var_r.key, var_i_1), var_i_1;
  }
  , var_c.prototype._decodeGeneric = function (param_t, param_e, param_r) {
  var var_n_1 = this._baseState;
  return "seq" === param_t || "set" === param_t ? null : "seqof" === param_t ||
  "setof" === param_t ? this._decodeList(param_e, param_t, var_n_1.args[0], param_r) :
  /str$/.test(param_t) ? this._decodeStr(param_e, param_t, param_r) :
  "objid" === param_t && var_n_1.args ? this._decodeObjid(param_e, var_n_1.args[0],
  var_n_1.args[1], param_r) : "objid" === param_t ? this._decodeObjid(param_e, null,
  null, param_r) : "gentime" === param_t || "utctime" === param_t ?
  this._decodeTime(param_e, param_t, param_r) : "null_" === param_t ?
  this._decodeNull(param_e, param_r) : "bool" === param_t ? this._decodeBool(param_e,
  param_r) : "objDesc" === param_t ? this._decodeStr(param_e, param_t, param_r) :
  "int" === param_t || "enum" === param_t ? this._decodeInt(param_e, var_n_1.args &&
  var_n_1.args[0], param_r) : null !== var_n_1.use ? this._getUse(var_n_1.use, param_e._reporterState.obj)._decode(
  param_e, param_r) : param_e.error("unknown tag: " + param_t);
  }
  , var_c.prototype._getUse = function (param_t, param_e) {
  var var_r = this._baseState;
  return var_r.useDecoder = this._use(param_t, param_e), dep_helper_116(null === var_r.useDecoder._baseState.parent),
  var_r.useDecoder = var_r.useDecoder._baseState.children[0], var_r.implicit !== var_r.useDecoder._baseState.implicit &&
  (var_r.useDecoder = var_r.useDecoder.clone(), var_r.useDecoder._baseState.implicit = var_r.implicit),
  var_r.useDecoder;
  }
  , var_c.prototype._decodeChoice = function (param_t, param_e) {
  var var_r = this._baseState,
  var_n_1 = null,
  flag_i = !1;
  return Object.keys(var_r.choice).some(function (param_o) {
  var var_a = param_t.save(),
  var_s = var_r.choice[param_o];
  try {
  var var_u_1 = var_s._decode(param_t, param_e);
  if (param_t.isError(var_u_1)) return !1;
  var_n_1 = {
  type: param_o,
  value: var_u_1
  }
  , flag_i = !0;
  }
  catch (var_e) {
  return param_t.restore(var_a), !1;
  }
  return !0;
  }
  , this), flag_i ? var_n_1 : param_t.error("Choice not matched");
  }
  , var_c.prototype._createEncoderBuffer = function (param_t) {
  return new var_i(param_t, this.reporter);
  }
  , var_c.prototype._encode = function (param_t, param_e, param_r) {
  var var_n_1 = this._baseState;
  if (null === var_n_1.default || var_n_1.default !== param_t) {
  var var_i_1 = this._encodeValue(param_t, param_e, param_r);
  if (void 0 !== var_i_1 && !this._skipDefault(var_i_1, param_e, param_r)) return var_i_1;
  }
  }
  , var_c.prototype._encodeValue = function (param_t, param_e, param_r) {
  var var_i_1 = this._baseState;
  if (null === var_i_1.parent) return var_i_1.children[0]._encode(param_t, param_e ||
  new var_n());
  var var_o_1 = null;
  if (this.reporter = param_e, var_i_1.optional && void 0 === param_t) {
  if (null === var_i_1.default) return;
  param_t = var_i_1.default;
  }
  var var_a = null,
  flag_s = !1;
  if (var_i_1.any) var_o_1 = this._createEncoderBuffer(param_t);
  else if (var_i_1.choice) var_o_1 = this._encodeChoice(param_t, param_e);
  else if (var_i_1.contains) var_a = this._getUse(var_i_1.contains, param_r)._encode(
  param_t, param_e), flag_s = !0;
  else if (var_i_1.children) var_a = var_i_1.children.map(function (param_r_1) {
  if ("null_" === param_r_1._baseState.tag) return param_r_1._encode(null, param_e,
  param_t);
  if (null === param_r_1._baseState.key) return param_e.error("Child should have a key");
  var var_n_1 = param_e.enterKey(param_r_1._baseState.key);
  if ("object" != typeof param_t) return param_e.error("Child expected, but input is not object");
  var var_i_2 = param_r_1._encode(param_t[param_r_1._baseState.key], param_e, param_t);
  return param_e.leaveKey(var_n_1), var_i_2;
  }
  , this).filter(function (param_t_1) {
  return param_t_1;
  }
  ), var_a = this._createEncoderBuffer(var_a);
  else if ("seqof" === var_i_1.tag || "setof" === var_i_1.tag) {
  if (!var_i_1.args || 1 !== var_i_1.args.length) return param_e.error("Too many args for : " + var_i_1.tag);
  if (!Array.isArray(param_t)) return param_e.error("seqof/setof, but data is not Array");
  var var_u_1 = this.clone();
  var_u_1._baseState.implicit = null, var_a = this._createEncoderBuffer(param_t.map(
  function (param_r_1) {
  var var_n_1 = this._baseState;
  return this._getUse(var_n_1.args[0], param_t)._encode(param_r_1, param_e);
  }
  , var_u_1));
  }
  else null !== var_i_1.use ? var_o_1 = this._getUse(var_i_1.use, param_r)._encode(
  param_t, param_e) : (var_a = this._encodePrimitive(var_i_1.tag, param_t), flag_s = !0);
  if (!var_i_1.any && null === var_i_1.choice) {
  var var_c_1 = null !== var_i_1.implicit ? var_i_1.implicit :
  var_i_1.tag,
  var_l = null === var_i_1.implicit ? "universal" : "context";
  null === var_c_1 ? null === var_i_1.use && param_e.error("Tag could be omitted only for .use()") :
  null === var_i_1.use && (var_o_1 = this._encodeComposite(var_c_1, flag_s, var_l,
  var_a));
  }
  return null !== var_i_1.explicit && (var_o_1 = this._encodeComposite(var_i_1.explicit,
  !1, "context", var_o_1)), var_o_1;
  }
  , var_c.prototype._encodeChoice = function (param_t, param_e) {
  var var_r = this._baseState,
  var_n_1 = var_r.choice[param_t.type];
  return var_n_1 || dep_helper_116(!1, param_t.type + " not found in " + JSON.stringify(
  Object.keys(var_r.choice))), var_n_1._encode(param_t.value, param_e);
  }
  , var_c.prototype._encodePrimitive = function (param_t, param_e) {
  var var_r = this._baseState;
  if (/str$/.test(param_t)) return this._encodeStr(param_e, param_t);
  if ("objid" === param_t && var_r.args) return this._encodeObjid(param_e, var_r.reverseArgs[0],
  var_r.args[1]);
  if ("objid" === param_t) return this._encodeObjid(param_e, null, null);
  if ("gentime" === param_t || "utctime" === param_t) return this._encodeTime(param_e,
  param_t);
  if ("null_" === param_t) return this._encodeNull();
  if ("int" === param_t || "enum" === param_t) return this._encodeInt(param_e, var_r.args &&
  var_r.reverseArgs[0]);
  if ("bool" === param_t) return this._encodeBool(param_e);
  if ("objDesc" === param_t) return this._encodeStr(param_e, param_t);
  throw new Error("Unsupported tag: " + param_t);
  }
  , var_c.prototype._isNumstr = function (param_t) {
  return /^[0-9 ]*$/.test(param_t);
  }
  , var_c.prototype._isPrintstr = function (param_t) {
  return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(param_t);
  };
  };
