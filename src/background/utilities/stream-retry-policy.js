// Module 507 [utilities] - Stream fetch retry and backoff policy
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  exportsObj.fetch = var_s(param_e.fetch) && var_s(param_e.ReadableStream);
  exportsObj.writableStream = var_s(param_e.WritableStream);
  exportsObj.abortController = var_s(param_e.AbortController);
  exportsObj.blobConstructor = false;
  try {
  new Blob([new ArrayBuffer(1)]);
  exportsObj.blobConstructor = true;
  }
  catch (var_e) {
  }
  var var_r;
  function var_n() {
  if (var_r !== undefined) {
  return var_r;
  }
  if (param_e.XMLHttpRequest) {
  var_r = new param_e.XMLHttpRequest();
  try {
  var_r.open("GET", param_e.XDomainRequest ? "/" : "https://example.com");
  }
  catch (var_e) {
  var_r = null;
  }
  }
  else {
  var_r = null;
  }
  return var_r;
  }
  function var_o(param_e_1) {
  var var_t = var_n();
  if (!var_t) {
  return false;
  }
  try {
  var_t.responseType = param_e_1;
  return var_t.responseType === param_e_1;
  }
  catch (var_e) {
  }
  return false;
  }
  var var_i = param_e.ArrayBuffer !== undefined;
  var var_a = var_i && var_s(param_e.ArrayBuffer.prototype.slice);
  function var_s(param_e_1) {
  return typeof param_e_1 == "function";
  }
  exportsObj.arraybuffer = exportsObj.fetch || var_i && var_o("arraybuffer");
  exportsObj.msstream = !exportsObj.fetch && var_a && var_o("ms-stream");
  exportsObj.mozchunkedarraybuffer = !exportsObj.fetch && var_i &&
  var_o("moz-chunked-arraybuffer");
  exportsObj.overrideMimeType = exportsObj.fetch || !!var_n() &&
  var_s(var_n().overrideMimeType);
  exportsObj.vbArray = var_s(param_e.VBArray);
  var_r = null;
  }
  ).call(this, requireFn(13));
  };
