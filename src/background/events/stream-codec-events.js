// Module 508 [events] - Stream codec listener and demuxer events
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e, param_n, param_o) {
  var dep_stream_retry_policy = requireFn(507);
  var dep_util_inherits = requireFn(15);
  var dep_media_fragment_assembler = requireFn(509);
  var var_c = exportsObj.readyStates = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
  };
  var var_u = exportsObj.IncomingMessage = function (param_t, param_r, param_a, param_c) {
  var var_u_1 = this;
  dep_media_fragment_assembler.Readable.call(var_u_1);
  var_u_1._mode = param_a;
  var_u_1.headers = {
  };
  var_u_1.rawHeaders = [];
  var_u_1.trailers = {
  };
  var_u_1.rawTrailers = [];
  var_u_1.on("end", function () {
  param_e.nextTick(function () {
  var_u_1.emit("close");
  }
  );
  }
  );
  if (param_a === "fetch") {
  var_u_1._fetchResponse = param_r;
  var_u_1.url = param_r.url;
  var_u_1.statusCode = param_r.status;
  var_u_1.statusMessage = param_r.statusText;
  param_r.headers.forEach(function (param_e_1, param_t_1) {
  var_u_1.headers[param_t_1.toLowerCase()] = param_e_1;
  var_u_1.rawHeaders.push(param_t_1, param_e_1);
  }
  );
  if (dep_stream_retry_policy.writableStream) {
  var var_l = new WritableStream({
  write: function (param_e_1) {
  return new Promise(function (param_t_1, param_r_1) {
  if (var_u_1._destroyed) {
  param_r_1();
  }
  else if (var_u_1.push(new param_n(param_e_1))) {
  param_t_1();
  }
  else {
  var_u_1._resumeFetch = param_t_1;
  }
  }
  );
  }
  ,
  close: function () {
  param_o.clearTimeout(param_c);
  if (!var_u_1._destroyed) {
  var_u_1.push(null);
  }
  }
  ,
  abort: function (param_e_1) {
  if (!var_u_1._destroyed) {
  var_u_1.emit("error", param_e_1);
  }
  }
  }
  );
  try {
  param_r.body.pipeTo(var_l).catch(function (param_e_1) {
  param_o.clearTimeout(param_c);
  if (!var_u_1._destroyed) {
  var_u_1.emit("error", param_e_1);
  }
  }
  );
  return;
  }
  catch (var_e) {
  }
  }
  var var_d = param_r.body.getReader();
  (function var_e() {
  var_d.read().then(function (param_t_1) {
  if (!var_u_1._destroyed) {
  if (param_t_1.done) {
  param_o.clearTimeout(param_c);
  var_u_1.push(null);
  return;
  }
  var_u_1.push(new param_n(param_t_1.value));
  var_e();
  }
  }
  ).catch(function (param_e_1) {
  param_o.clearTimeout(param_c);
  if (!var_u_1._destroyed) {
  var_u_1.emit("error", param_e_1);
  }
  }
  );
  }
  )();
  }
  else {
  var_u_1._xhr = param_t;
  var_u_1._pos = 0;
  var_u_1.url = param_t.responseURL;
  var_u_1.statusCode = param_t.status;
  var_u_1.statusMessage = param_t.statusText;
  param_t.getAllResponseHeaders().split(/\r?\n/).forEach(function (param_e_1) {
  var var_t = param_e_1.match(/^([^:]+):\s*(.*)/);
  if (var_t) {
  var var_r = var_t[1].toLowerCase();
  if (var_r === "set-cookie") {
  if (var_u_1.headers[var_r] === undefined) {
  var_u_1.headers[var_r] = [];
  }
  var_u_1.headers[var_r].push(var_t[2]);
  }
  else if (var_u_1.headers[var_r] !== undefined) {
  var_u_1.headers[var_r] += ", " + var_t[2];
  }
  else {
  var_u_1.headers[var_r] = var_t[2];
  }
  var_u_1.rawHeaders.push(var_t[1], var_t[2]);
  }
  }
  );
  var_u_1._charset = "x-user-defined";
  if (!dep_stream_retry_policy.overrideMimeType) {
  var var_p = var_u_1.rawHeaders["mime-type"];
  if (var_p) {
  var var_f = var_p.match(/;\s*charset=([^;])(;|$)/);
  if (var_f) {
  var_u_1._charset = var_f[1].toLowerCase();
  }
  }
  var_u_1._charset ||= "utf-8";
  }
  }
  };
  dep_util_inherits(var_u, dep_media_fragment_assembler.Readable);
  var_u.prototype._read = function () {
  var var_e = this._resumeFetch;
  if (var_e) {
  this._resumeFetch = null;
  var_e();
  }
  };
  var_u.prototype._onXHRProgress = function () {
  var var_e = this;
  var var_t = var_e._xhr;
  var var_r = null;
  switch (var_e._mode) {
  case "text:vbarray":
  if (var_t.readyState !== var_c.DONE) {
  break;
  }
  try {
  var_r = new param_o.VBArray(var_t.responseBody).toArray();
  }
  catch (var_e_1) {
  }
  if (var_r !== null) {
  var_e.push(new param_n(var_r));
  break;
  }
  case "text":
  try {
  var_r = var_t.responseText;
  }
  catch (var_t_1) {
  var_e._mode = "text:vbarray";
  break;
  }
  if (var_r.length > var_e._pos) {
  var var_i = var_r.substr(var_e._pos);
  if (var_e._charset === "x-user-defined") {
  var var_a = new param_n(var_i.length);
  for (var num_s = 0;
  num_s < var_i.length;
  num_s++) {
  var_a[num_s] = var_i.charCodeAt(num_s) & 255;
  }
  var_e.push(var_a);
  }
  else {
  var_e.push(var_i, var_e._charset);
  }
  var_e._pos = var_r.length;
  }
  break;
  case "arraybuffer":
  if (var_t.readyState !== var_c.DONE || !var_t.response) {
  break;
  }
  var_r = var_t.response;
  var_e.push(new param_n(new Uint8Array(var_r)));
  break;
  case "moz-chunked-arraybuffer":
  var_r = var_t.response;
  if (var_t.readyState !== var_c.LOADING || !var_r) {
  break;
  }
  var_e.push(new param_n(new Uint8Array(var_r)));
  break;
  case "ms-stream":
  var_r = var_t.response;
  if (var_t.readyState !== var_c.LOADING) {
  break;
  }
  var var_u_1 = new param_o.MSStreamReader();
  var_u_1.onprogress = function () {
  if (var_u_1.result.byteLength > var_e._pos) {
  var_e.push(new param_n(new Uint8Array(var_u_1.result.slice(var_e._pos))));
  var_e._pos = var_u_1.result.byteLength;
  }
  };
  var_u_1.onload = function () {
  var_e.push(null);
  };
  var_u_1.readAsArrayBuffer(var_r);
  }
  if (var_e._xhr.readyState === var_c.DONE && var_e._mode !== "ms-stream") {
  var_e.push(null);
  }
  };
  }
  ).call(this, requireFn(32), requireFn(27).Buffer, requireFn(13));
  };
