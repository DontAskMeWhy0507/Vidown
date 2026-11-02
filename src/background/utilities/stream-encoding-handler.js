// Module 714 [utilities] - Stream binary encoding handler
export default function (moduleObj, exportsObj, requireFn) {
  var var_n = requireFn(27).Buffer;
  moduleObj.exports = function (param_e) {
  if (param_e instanceof Uint8Array) {
  if (param_e.byteOffset === 0 && param_e.byteLength === param_e.buffer.byteLength) {
  return param_e.buffer;
  }
  if (typeof param_e.buffer.slice == "function") {
  return param_e.buffer.slice(param_e.byteOffset, param_e.byteOffset + param_e.byteLength);
  }
  }
  if (var_n.isBuffer(param_e)) {
  var var_t = new Uint8Array(param_e.length);
  for (var var_r = param_e.length, num_o = 0;
  num_o < var_r;
  num_o++) {
  var_t[num_o] = param_e[num_o];
  }
  return var_t.buffer;
  }
  throw new Error("Argument must be a Buffer");
  };
  };
