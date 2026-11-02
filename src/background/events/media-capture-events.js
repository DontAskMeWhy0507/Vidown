// Module 441 [events] - Media capture and stream detection events
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = this && this.__importDefault || function (param_e) {
  if (param_e && param_e.__esModule) {
  return param_e;
  }
  else {
  return {
  default: param_e
  };
  }
  };
  const dep_stream_base = requireFn(83);
  const var_i = var_n(requireFn(174));
  const var_a = var_n(requireFn(727));
  const var_s = var_n(requireFn(728));
  const dep_runtime_state_serializer = requireFn(729);
  const dep_event_serializer = requireFn(522);
  const obj_l = {
  m3u8: var_a.default,
  "dash-mpd": var_s.default
  };
  let fn_d = (param_e, param_t = {
  }
  ) => {
  const var_r = new dep_stream_base.PassThrough({
  highWaterMark: param_t.highWaterMark
  }
  );
  const var_n_1 = param_t.chunkReadahead || 3;
  const var_a_1 = param_t.liveBuffer || 20000;
  const var_s_1 = param_t.requestOptions;
  const var_d = obj_l[param_t.parser || (/\.mpd$/.test(param_e) ?
  "dash-mpd" : "m3u8")];
  if (!var_d) {
  throw TypeError(`parser '${param_t.parser}
  ' not supported`);
  }
  let num_p = 0;
  if (param_t.begin !== undefined) {
  num_p = typeof param_t.begin == "string" ? dep_event_serializer.humanStr(param_t.begin) :
  Math.max(param_t.begin - var_a_1, 0);
  }
  const fn_f = param_e_1 => {
  for (let var_t of ["abort", "request", "response", "redirect", "retry", "reconnect"]) {
  param_e_1.on(var_t, var_r.emit.bind(var_r, var_t));
  }
  };
  let var_h;
  const var_m = new dep_runtime_state_serializer.Queue((param_e_1, param_t_1) => {
  var_h = param_e_1;
  let num_n = 0;
  param_e_1.on("data", param_e_2 => num_n += param_e_2.length);
  param_e_1.pipe(var_r, {
  end: false
  }
  );
  param_e_1.on("end", () => param_t_1(null, num_n));
  }
  , {
  concurrency: 1
  }
  );
  let num_g = 0;
  let num_v = 0;
  const var_y = new dep_runtime_state_serializer.Queue((param_t_1, param_n) => {
  let var_o = Object.assign({
  }
  , var_s_1);
  if (param_t_1.range) {
  var_o.headers = Object.assign({
  }
  , var_o.headers, {
  Range: `bytes=${param_t_1.range.start}-${param_t_1.range.end}`
  }
  );
  }
  let var_a_2 = var_i.default(new URL(param_t_1.url, param_e).toString(), var_o);
  var_a_2.on("error", param_n);
  fn_f(var_a_2);
  var_m.push(var_a_2, (param_e_1, param_o) => {
  num_v += +param_o;
  var_r.emit("progress", {
  num: ++num_g,
  size: param_o,
  duration: param_t_1.duration,
  url: param_t_1.url
  }
  , var_y.total, num_v);
  param_n(null);
  }
  );
  }
  , {
  concurrency: var_n_1
  }
  );
  const fn__ = param_e_1 => {
  var_r.emit("error", param_e_1);
  var_r.end();
  };
  let var_b;
  let var_w;
  let var_E;
  let var_D;
  let flag_T = true;
  let flag_k = false;
  let flag_A = false;
  const fn_C = param_e_1 => {
  var_h = null;
  if (param_e_1) {
  fn__(param_e_1);
  }
  else if (!flag_T && !flag_k && !flag_A && var_y.tasks.length + var_y.active <= var_b) {
  let var_e = Math.max(0, var_w - (Date.now() - var_D));
  flag_T = true;
  var_E = setTimeout(fn_I, var_e);
  }
  else if ((!!flag_k || !!flag_A) && !var_y.tasks.length && !var_y.active) {
  var_r.end();
  }
  };
  let var_x;
  let var_S;
  let num_O = 0;
  const fn_I = () => {
  var_D = Date.now();
  var_x = var_i.default(param_e, var_s_1);
  var_x.on("error", fn__);
  fn_f(var_x);
  const var_r_1 = var_x.pipe(new var_d(param_t.id));
  var_r_1.on("starttime", param_e_1 => {
  if (!num_O) {
  num_O = param_e_1;
  if (typeof param_t.begin == "string" && num_p >= 0) {
  num_p += num_O;
  }
  }
  }
  );
  var_r_1.on("endlist", () => {
  flag_A = true;
  }
  );
  var_r_1.on("endearly", var_x.unpipe.bind(var_x, var_r_1));
  let list_n = [];
  const fn_o = param_e_1 => {
  if (!param_e_1.init) {
  if (param_e_1.seq <= var_S) {
  return;
  }
  var_S = param_e_1.seq;
  }
  num_p = param_e_1.time;
  var_y.push(param_e_1, fn_C);
  list_n.push(param_e_1);
  };
  let list_c = [];
  let num_u = 0;
  var_r_1.on("item", param_e_1 => {
  let var_t = Object.assign({
  time: num_O
  }
  , param_e_1);
  if (num_p <= var_t.time) {
  fn_o(var_t);
  }
  else {
  list_c.push(var_t);
  num_u += var_t.duration;
  while (list_c.length > 1 && num_u - list_c[0].duration > var_a_1) {
  const var_e = list_c.shift();
  num_u -= var_e.duration;
  }
  }
  num_O += var_t.duration;
  }
  );
  var_r_1.on("end", () => {
  var_x = null;
  if (!list_n.length && list_c.length) {
  list_c.forEach(param_e_1 => {
  fn_o(param_e_1);
  }
  );
  }
  var_b = Math.max(1, Math.ceil(list_n.length * 0.01));
  var_w = list_n.reduce((param_e_1, param_t_1) => param_t_1.duration + param_e_1,
  0);
  flag_T = false;
  fn_C(null);
  }
  );
  };
  fn_I();
  var_r.end = () => {
  flag_k = true;
  var_m.die();
  var_y.die();
  clearTimeout(var_E);
  if (var_x != null) {
  var_x.destroy();
  }
  if (var_h != null) {
  var_h.destroy();
  }
  dep_stream_base.PassThrough.prototype.end.call(var_r, null);
  return var_r;
  };
  return var_r;
  };
  fn_d.parseTimestamp = dep_event_serializer.humanStr;
  moduleObj.exports = fn_d;
  };
