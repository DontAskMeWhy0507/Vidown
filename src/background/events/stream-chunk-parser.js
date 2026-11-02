// Module 708 [events] - Stream binary chunk parser and demuxer
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t, param_n, param_o) {
  var dep_stream_retry_policy = requireFn(507);
  var dep_util_inherits = requireFn(15);
  var dep_stream_codec_events = requireFn(508);
  var dep_media_fragment_assembler = requireFn(509);
  var dep_stream_encoding_handler = requireFn(714);
  var var_l = dep_stream_codec_events.IncomingMessage;
  var var_d = dep_stream_codec_events.readyStates;
  var var_p = moduleObj.exports = function (param_e) {
  var var_r;
  var var_n = this;
  dep_media_fragment_assembler.Writable.call(var_n);
  var_n._opts = param_e;
  var_n._body = [];
  var_n._headers = {
  };
  if (param_e.auth) {
  var_n.setHeader("Authorization", "Basic " + new param_t(param_e.auth).toString(
  "base64"));
  }
  Object.keys(param_e.headers).forEach(function (param_t_1) {
  var_n.setHeader(param_t_1, param_e.headers[param_t_1]);
  }
  );
  var flag_o = true;
  if (param_e.mode === "disable-fetch" || "requestTimeout" in param_e &&
  !dep_stream_retry_policy.abortController) {
  flag_o = false;
  var_r = true;
  }
  else if (param_e.mode === "prefer-streaming") {
  var_r = false;
  }
  else if (param_e.mode === "allow-wrong-content-type") {
  var_r = !dep_stream_retry_policy.overrideMimeType;
  }
  else {
  if (param_e.mode && param_e.mode !== "default" && param_e.mode !== "prefer-fast") {
  throw new Error("Invalid value for opts.mode");
  }
  var_r = true;
  }
  var_n._mode = function (param_e_1, param_t_1) {
  if (dep_stream_retry_policy.fetch && param_t_1) {
  return "fetch";
  }
  else if (dep_stream_retry_policy.mozchunkedarraybuffer) {
  return "moz-chunked-arraybuffer";
  }
  else if (dep_stream_retry_policy.msstream) {
  return "ms-stream";
  }
  else if (dep_stream_retry_policy.arraybuffer && param_e_1) {
  return "arraybuffer";
  }
  else if (dep_stream_retry_policy.vbArray && param_e_1) {
  return "text:vbarray";
  }
  else {
  return "text";
  }
  }
  (var_r, flag_o);
  var_n._fetchTimer = null;
  var_n.on("finish", function () {
  var_n._onFinish();
  }
  );
  };
  dep_util_inherits(var_p, dep_media_fragment_assembler.Writable);
  var_p.prototype.setHeader = function (param_e, param_t_1) {
  var var_r = param_e.toLowerCase();
  if (list_f.indexOf(var_r) === -1) {
  this._headers[var_r] = {
  name: param_e,
  value: param_t_1
  };
  }
  };
  var_p.prototype.getHeader = function (param_e) {
  var var_t = this._headers[param_e.toLowerCase()];
  if (var_t) {
  return var_t.value;
  }
  else {
  return null;
  }
  };
  var_p.prototype.removeHeader = function (param_e) {
  delete this._headers[param_e.toLowerCase()];
  };
  var_p.prototype._onFinish = function () {
  var var_e = this;
  if (!var_e._destroyed) {
  var var_r = var_e._opts;
  var var_a = var_e._headers;
  var var_s = null;
  if (var_r.method !== "GET" && var_r.method !== "HEAD") {
  var_s = dep_stream_retry_policy.arraybuffer ? dep_stream_encoding_handler(param_t.concat(
  var_e._body)) : dep_stream_retry_policy.blobConstructor ? new param_n.Blob(var_e._body.map(
  function (param_e) {
  return dep_stream_encoding_handler(param_e);
  }
  ), {
  type: (var_a["content-type"] || {
  }
  ).value || ""
  }
  ) : param_t.concat(var_e._body).toString();
  }
  var list_c = [];
  Object.keys(var_a).forEach(function (param_e) {
  var var_t = var_a[param_e].name;
  var var_r_1 = var_a[param_e].value;
  if (Array.isArray(var_r_1)) {
  var_r_1.forEach(function (param_e_1) {
  list_c.push([var_t, param_e_1]);
  }
  );
  }
  else {
  list_c.push([var_t, var_r_1]);
  }
  }
  );
  if (var_e._mode === "fetch") {
  var var_l_1 = null;
  if (dep_stream_retry_policy.abortController) {
  var var_p_1 = new AbortController();
  var_l_1 = var_p_1.signal;
  var_e._fetchAbortController = var_p_1;
  if ("requestTimeout" in var_r && var_r.requestTimeout !== 0) {
  var_e._fetchTimer = param_n.setTimeout(function () {
  var_e.emit("requestTimeout");
  if (var_e._fetchAbortController) {
  var_e._fetchAbortController.abort();
  }
  }
  , var_r.requestTimeout);
  }
  }
  param_n.fetch(var_e._opts.url, {
  method: var_e._opts.method,
  headers: list_c,
  body: var_s || undefined,
  mode: "cors",
  credentials: var_r.withCredentials ? "include" : "same-origin",
  signal: var_l_1
  }
  ).then(function (param_t_1) {
  var_e._fetchResponse = param_t_1;
  var_e._connect();
  }
  , function (param_t_1) {
  param_n.clearTimeout(var_e._fetchTimer);
  if (!var_e._destroyed) {
  var_e.emit("error", param_t_1);
  }
  }
  );
  }
  else {
  var var_f = var_e._xhr = new param_n.XMLHttpRequest();
  try {
  var_f.open(var_e._opts.method, var_e._opts.url, true);
  }
  catch (var_t) {
  param_o.nextTick(function () {
  var_e.emit("error", var_t);
  }
  );
  return;
  }
  if ("responseType" in var_f) {
  var_f.responseType = var_e._mode.split(":")[0];
  }
  if ("withCredentials" in var_f) {
  var_f.withCredentials = !!var_r.withCredentials;
  }
  if (var_e._mode === "text" && "overrideMimeType" in var_f) {
  var_f.overrideMimeType("text/plain; charset=x-user-defined");
  }
  if ("requestTimeout" in var_r) {
  var_f.timeout = var_r.requestTimeout;
  var_f.ontimeout = function () {
  var_e.emit("requestTimeout");
  };
  }
  list_c.forEach(function (param_e) {
  var_f.setRequestHeader(param_e[0], param_e[1]);
  }
  );
  var_e._response = null;
  var_f.onreadystatechange = function () {
  switch (var_f.readyState) {
  case var_d.LOADING:
  case var_d.DONE:
  var_e._onXHRProgress();
  }
  };
  if (var_e._mode === "moz-chunked-arraybuffer") {
  var_f.onprogress = function () {
  var_e._onXHRProgress();
  };
  }
  var_f.onerror = function () {
  if (!var_e._destroyed) {
  var_e.emit("error", new Error("XHR error"));
  }
  };
  try {
  var_f.send(var_s);
  }
  catch (var_t) {
  param_o.nextTick(function () {
  var_e.emit("error", var_t);
  }
  );
  return;
  }
  }
  }
  };
  var_p.prototype._onXHRProgress = function () {
  if (function (param_e) {
  try {
  var var_t = param_e.status;
  return var_t !== null && var_t !== 0;
  }
  catch (var_e) {
  return false;
  }
  }
  (this._xhr) && !this._destroyed) {
  if (!this._response) {
  this._connect();
  }
  this._response._onXHRProgress();
  }
  };
  var_p.prototype._connect = function () {
  var var_e = this;
  if (!var_e._destroyed) {
  var_e._response = new var_l(var_e._xhr, var_e._fetchResponse, var_e._mode, var_e._fetchTimer);
  var_e._response.on("error", function (param_t_1) {
  var_e.emit("error", param_t_1);
  }
  );
  var_e.emit("response", var_e._response);
  }
  };
  var_p.prototype._write = function (param_e, param_t_1, param_r) {
  this._body.push(param_e);
  param_r();
  };
  var_p.prototype.abort = var_p.prototype.destroy = function () {
  this._destroyed = true;
  param_n.clearTimeout(this._fetchTimer);
  if (this._response) {
  this._response._destroyed = true;
  }
  if (this._xhr) {
  this._xhr.abort();
  }
  else if (this._fetchAbortController) {
  this._fetchAbortController.abort();
  }
  };
  var_p.prototype.end = function (param_e, param_t_1, param_r) {
  if (typeof param_e == "function") {
  param_r = param_e;
  param_e = undefined;
  }
  dep_media_fragment_assembler.Writable.prototype.end.call(this, param_e, param_t_1,
  param_r);
  };
  var_p.prototype.flushHeaders = function () {
  };
  var_p.prototype.setTimeout = function () {
  };
  var_p.prototype.setNoDelay = function () {
  };
  var_p.prototype.setSocketKeepAlive = function () {
  };
  var list_f = ["accept-charset", "accept-encoding", "access-control-request-headers",
  "access-control-request-method", "connection", "content-length", "cookie", "cookie2",
  "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer",
  "transfer-encoding", "upgrade", "via"];
  }
  ).call(this, requireFn(27).Buffer, requireFn(13), requireFn(32));
  };
