// Module 174 [events] - Download event routing and state synchronization
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_t) {
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
  const var_o = var_n(requireFn(506));
  const var_i = var_n(requireFn(724));
  const dep_stream_base = requireFn(83);
  const obj_s = {
  "http:": var_o.default,
  "https:": var_i.default
  };
  const var_c = new Set([301, 302, 303, 307, 308]);
  const var_u = new Set([429, 503]);
  const list_l = ["connect", "continue", "information", "socket", "timeout", "upgrade"];
  const list_d = ["aborted"];
  function var_p(param_e, param_r = {
  }
  ) {
  const var_o_1 = Object.assign({
  }
  , var_p.defaultOptions, param_r);
  const var_i_1 = new dep_stream_base.PassThrough({
  highWaterMark: var_o_1.highWaterMark
  }
  );
  let var_f;
  let var_h;
  let var_m;
  var_i_1.destroyed = var_i_1.aborted = false;
  let var_g;
  let var_v;
  let var_y;
  let num__ = 0;
  let num_b = 0;
  let num_w = 0;
  let flag_E = false;
  let num_D = 0;
  let num_T = 0;
  if (var_o_1.headers?.Range) {
  let var_e = /bytes=(\d+)-(\d+)?/.exec("" + var_o_1.headers.Range);
  if (var_e) {
  num_D = parseInt(var_e[1], 10);
  var_y = parseInt(var_e[2], 10);
  }
  }
  if (var_o_1.acceptEncoding) {
  var_o_1.headers = Object.assign({
  "Accept-Encoding": Object.keys(var_o_1.acceptEncoding).join(", ")
  }
  , var_o_1.headers);
  }
  const fn_k = param_e_1 => param_r.method !== "HEAD" && !!flag_E &&
  num_T !== var_v && !!(num_w++ < var_o_1.maxReconnects) && ((param_e_2 => {
  var_m = null;
  num_b = 0;
  let var_t = var_o_1.backoff.inc;
  let var_r = Math.min(var_t, var_o_1.backoff.max);
  var_g = setTimeout(fn_x, var_r);
  var_i_1.emit("reconnect", num_w, param_e_2);
  }
  )(param_e_1), true);
  const fn_A = param_e_1 => {
  if (var_i_1.destroyed) {
  return false;
  }
  if (var_m && num_T > 0) {
  return fn_k(param_e_1.err);
  }
  if ((!param_e_1.err || param_e_1.err.message === "ENOTFOUND") &&
  num_b++ < var_o_1.maxRetries) {
  let var_t = param_e_1.retryAfter || Math.min(num_b * var_o_1.backoff.inc, var_o_1.backoff.max);
  var_g = setTimeout(fn_x, var_t);
  var_i_1.emit("retry", num_b, param_e_1.err);
  return true;
  }
  return false;
  };
  const fn_C = (param_e_1, param_t_1) => {
  for (let var_r of param_t_1) {
  param_e_1.on(var_r, var_i_1.emit.bind(var_i_1, var_r));
  }
  };
  const fn_x = () => {
  let var_t;
  let obj_r = {
  };
  try {
  let var_n_1 = typeof param_e == "string" ? new URL(param_e) :
  param_e;
  obj_r = Object.assign({
  }
  , {
  host: var_n_1.host,
  hostname: var_n_1.hostname,
  path: var_n_1.pathname + var_n_1.search + var_n_1.hash,
  port: var_n_1.port,
  protocol: var_n_1.protocol
  }
  );
  if (var_n_1.username) {
  obj_r.auth = `${var_n_1.username}:${var_n_1.password}`;
  }
  var_t = obj_s[String(obj_r.protocol)];
  }
  catch (var_e) {
  }
  if (!var_t) {
  var_i_1.emit("error", new var_p.MinigetError("Invalid URL: " + param_e));
  return;
  }
  Object.assign(obj_r, var_o_1);
  if (flag_E && num_T > 0) {
  let var_e = num_T + num_D;
  let var_t_1 = var_y || "";
  obj_r.headers = Object.assign({
  }
  , obj_r.headers, {
  Range: `bytes=${var_e}-${var_t_1}`
  }
  );
  }
  if (var_o_1.transform) {
  try {
  obj_r = var_o_1.transform(obj_r);
  }
  catch (var_e) {
  var_i_1.emit("error", var_e);
  return;
  }
  if ((!obj_r || obj_r.protocol) && (var_t = obj_s[String(obj_r == null ?
  undefined : obj_r.protocol)], !var_t)) {
  var_i_1.emit("error", new var_p.MinigetError("Invalid URL object from `transform` function"));
  return;
  }
  }
  const fn_n = param_e_1 => {
  if (!var_i_1.destroyed && !var_i_1.readableEnded) {
  fn_g();
  if (fn_A({
  err: param_e_1
  }
  )) {
  var_f.removeListener("close", fn_a);
  }
  else {
  var_i_1.emit("error", param_e_1);
  }
  }
  };
  const fn_a = () => {
  fn_g();
  fn_A({
  }
  );
  };
  const fn_g = () => {
  var_f.removeListener("close", fn_a);
  if (var_h != null) {
  var_h.removeListener("data", fn_b);
  }
  if (var_m != null) {
  var_m.removeListener("end", fn_w);
  }
  };
  const fn_b = param_e_1 => {
  num_T += param_e_1.length;
  };
  const fn_w = () => {
  fn_g();
  if (!fn_k()) {
  var_i_1.end();
  }
  };
  var_f = var_t.request(obj_r, param_t_1 => {
  if (!var_i_1.destroyed) {
  if (var_c.has(param_t_1.statusCode)) {
  if (num__++ >= var_o_1.maxRedirects) {
  var_i_1.emit("error", new var_p.MinigetError("Too many redirects"));
  }
  else {
  if (!param_t_1.headers.location) {
  let var_e = new var_p.MinigetError("Redirect status code given with no location",
  param_t_1.statusCode);
  var_i_1.emit("error", var_e);
  fn_g();
  return;
  }
  param_e = param_t_1.headers.location;
  setTimeout(fn_x, parseInt(param_t_1.headers["retry-after"] ||
  "0", 10) * 1000);
  var_i_1.emit("redirect", param_e);
  }
  fn_g();
  }
  else if (var_u.has(param_t_1.statusCode)) {
  if (!fn_A({
  retryAfter: parseInt(param_t_1.headers["retry-after"] || "0", 10)
  }
  )) {
  let var_e = new var_p.MinigetError("Status code: " + param_t_1.statusCode, param_t_1.statusCode);
  var_i_1.emit("error", var_e);
  }
  fn_g();
  }
  else {
  if (param_t_1.statusCode && (param_t_1.statusCode < 200 ||
  param_t_1.statusCode >= 400)) {
  let var_e = new var_p.MinigetError("Status code: " + param_t_1.statusCode, param_t_1.statusCode);
  if (param_t_1.statusCode >= 500) {
  fn_n(var_e);
  }
  else {
  var_i_1.emit("error", var_e);
  }
  fn_g();
  return;
  }
  var_m = param_t_1;
  if (var_o_1.acceptEncoding && param_t_1.headers["content-encoding"]) {
  for (let var_e of param_t_1.headers["content-encoding"].split(", ").reverse()) {
  let var_t_1 = var_o_1.acceptEncoding[var_e];
  if (var_t_1) {
  var_m = var_m.pipe(var_t_1());
  var_m.on("error", fn_n);
  }
  }
  }
  if (!var_v) {
  var_v = parseInt("" + param_t_1.headers["content-length"], 10);
  flag_E = param_t_1.headers["accept-ranges"] === "bytes" &&
  var_v > 0 && var_o_1.maxReconnects > 0;
  }
  param_t_1.on("data", fn_b);
  var_m.on("end", fn_w);
  var_m.pipe(var_i_1, {
  end: !flag_E
  }
  );
  var_h = param_t_1;
  var_i_1.emit("response", param_t_1);
  param_t_1.on("error", fn_n);
  fn_C(param_t_1, list_d);
  }
  }
  }
  );
  var_f.on("error", fn_n);
  var_f.on("close", fn_a);
  fn_C(var_f, list_l);
  if (var_i_1.destroyed) {
  fn_O(...list_S);
  }
  var_i_1.emit("request", var_f);
  var_f.end();
  };
  var_i_1.abort = param_e_1 => {
  console.warn("`MinigetStream#abort()` has been deprecated in favor of `MinigetStream#destroy()`");
  var_i_1.aborted = true;
  var_i_1.emit("abort");
  var_i_1.destroy(param_e_1);
  };
  let list_S = [];
  const fn_O = param_e_1 => {
  var_f.destroy(param_e_1);
  if (var_m != null) {
  var_m.unpipe(var_i_1);
  }
  if (var_m != null) {
  var_m.destroy();
  }
  clearTimeout(var_g);
  };
  var_i_1._destroy = (...param_e_1) => {
  var_i_1.destroyed = true;
  if (var_f) {
  fn_O(...param_e_1);
  }
  else {
  list_S = param_e_1;
  }
  };
  var_i_1.text = () => new Promise((param_e_1, param_t_1) => {
  let str_r = "";
  var_i_1.setEncoding("utf8");
  var_i_1.on("data", param_e_2 => str_r += param_e_2);
  var_i_1.on("end", () => param_e_1(str_r));
  var_i_1.on("error", param_t_1);
  }
  );
  param_t.nextTick(fn_x);
  return var_i_1;
  }
  var_p.MinigetError = class extends Error {
  constructor(param_e, param_t_1) {
  super(param_e);
  this.statusCode = param_t_1;
  }
  };
  var_p.defaultOptions = {
  maxRedirects: 10,
  maxRetries: 2,
  maxReconnects: 0,
  backoff: {
  inc: 100,
  max: 10000
  }
  };
  moduleObj.exports = var_p;
  }
  ).call(this, requireFn(32));
  };
