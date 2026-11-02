// Module 497 - Savior Helper 497
export default function (moduleObj, exportsObj, requireFn) {
  var dep_module_15 = requireFn(15),
  var_i = requireFn(158).Reporter,
  var_o = requireFn(27).Buffer;
  function var_a(param_t, param_e) {
  var_i.call(this, param_e), var_o.isBuffer(param_t) ? (this.base = param_t, this.offset = 0,
  this.length = param_t.length) : this.error("Input not Buffer");
  }
  function var_s(param_t, param_e) {
  if (Array.isArray(param_t)) this.length = 0, this.value = param_t.map(function (
  param_t_1) {
  return param_t_1 instanceof var_s || (param_t_1 = new var_s(param_t_1, param_e)),
  this.length += param_t_1.length, param_t_1;
  }
  , this);
  else if ("number" == typeof param_t) {
  if (!(0 <= param_t && param_t <= 255)) return param_e.error("non-byte EncoderBuffer value");
  this.value = param_t, this.length = 1;
  }
  else if ("string" == typeof param_t) this.value = param_t, this.length = var_o.byteLength(
  param_t);
  else {
  if (!var_o.isBuffer(param_t)) return param_e.error("Unsupported type: " + typeof param_t);
  this.value = param_t, this.length = param_t.length;
  }
  }
  dep_module_15(var_a, var_i), exportsObj.DecoderBuffer = var_a, var_a.prototype.save = function (
  ) {
  return {
  offset: this.offset,
  reporter: var_i.prototype.save.call(this)
  };
  }
  , var_a.prototype.restore = function (param_t) {
  var var_e = new var_a(this.base);
  return var_e.offset = param_t.offset, var_e.length = this.offset, this.offset = param_t.offset,
  var_i.prototype.restore.call(this, param_t.reporter), var_e;
  }
  , var_a.prototype.isEmpty = function () {
  return this.offset === this.length;
  }
  , var_a.prototype.readUInt8 = function (param_t) {
  return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) :
  this.error(param_t || "DecoderBuffer overrun");
  }
  , var_a.prototype.skip = function (param_t, param_e) {
  if (!(this.offset + param_t <= this.length)) return this.error(param_e ||
  "DecoderBuffer overrun");
  var var_r = new var_a(this.base);
  return var_r._reporterState = this._reporterState, var_r.offset = this.offset,
  var_r.length = this.offset + param_t, this.offset += param_t, var_r;
  }
  , var_a.prototype.raw = function (param_t) {
  return this.base.slice(param_t ? param_t.offset : this.offset, this.length);
  }
  , exportsObj.EncoderBuffer = var_s, var_s.prototype.join = function (param_t, param_e) {
  return param_t || (param_t = new var_o(this.length)), param_e ||
  (param_e = 0), 0 === this.length || (Array.isArray(this.value) ?
  this.value.forEach(function (param_r) {
  param_r.join(param_t, param_e), param_e += param_r.length;
  }
  ) : ("number" == typeof this.value ? param_t[param_e] = this.value :
  "string" == typeof this.value ? param_t.write(this.value, param_e) :
  var_o.isBuffer(this.value) && this.value.copy(param_t, param_e), param_e += this.length)),
  param_t;
  };
  };
