// Module 83 [events] - Stream / runtime utility component (stream-base)
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = var_o;
  var var_n = requireFn(42).EventEmitter;
  function var_o() {
  var_n.call(this);
  }
  requireFn(15)(var_o, var_n);
  var_o.Readable = requireFn(47);
  var_o.Writable = requireFn(109);
  var_o.Duplex = requireFn(110);
  var_o.Transform = requireFn(111);
  var_o.PassThrough = requireFn(112);
  var_o.Stream = var_o;
  var_o.prototype.pipe = function (param_e, param_t) {
  var var_r = this;
  function var_o_1(param_t_1) {
  if (param_e.writable && param_e.write(param_t_1) === false &&
  var_r.pause) {
  var_r.pause();
  }
  }
  function var_i() {
  if (var_r.readable && var_r.resume) {
  var_r.resume();
  }
  }
  var_r.on("data", var_o_1);
  param_e.on("drain", var_i);
  if (!param_e._isStdio && (!param_t || param_t.end !== false)) {
  var_r.on("end", var_s);
  var_r.on("close", var_c);
  }
  var flag_a = false;
  function var_s() {
  if (!flag_a) {
  flag_a = true;
  param_e.end();
  }
  }
  function var_c() {
  if (!flag_a) {
  flag_a = true;
  if (typeof param_e.destroy == "function") {
  param_e.destroy();
  }
  }
  }
  function var_u(param_e_1) {
  var_l();
  if (var_n.listenerCount(this, "error") === 0) {
  throw param_e_1;
  }
  }
  function var_l() {
  var_r.removeListener("data", var_o_1);
  param_e.removeListener("drain", var_i);
  var_r.removeListener("end", var_s);
  var_r.removeListener("close", var_c);
  var_r.removeListener("error", var_u);
  param_e.removeListener("error", var_u);
  var_r.removeListener("end", var_l);
  var_r.removeListener("close", var_l);
  param_e.removeListener("close", var_l);
  }
  var_r.on("error", var_u);
  param_e.on("error", var_u);
  var_r.on("end", var_l);
  var_r.on("close", var_l);
  param_e.on("close", var_l);
  param_e.emit("pipe", var_r);
  return param_e;
  };
  };
