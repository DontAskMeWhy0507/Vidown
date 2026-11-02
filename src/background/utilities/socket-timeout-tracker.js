// Module 524 [utilities] - Socket connection and read timeout tracker
export default function (moduleObj, exportsObj, requireFn) {
  const {
  setTimeout: dep_env_context
  }
  = requireFn(78);
  moduleObj.exports = class extends Map {
  constructor(param_e = 1000) {
  super();
  this.timeout = param_e;
  }
  set(param_e, param_t) {
  if (this.has(param_e)) {
  clearTimeout(super.get(param_e).tid);
  }
  super.set(param_e, {
  tid: dep_env_context(this.delete.bind(this, param_e), this.timeout).unref(),
  value: param_t
  }
  );
  }
  get(param_e) {
  let var_t = super.get(param_e);
  if (var_t) {
  return var_t.value;
  }
  else {
  return null;
  }
  }
  getOrSet(param_e, param_t) {
  if (this.has(param_e)) {
  return this.get(param_e);
  }
  {
  let var_r = param_t();
  this.set(param_e, var_r);
  (async () => {
  try {
  await var_r;
  }
  catch (var_t) {
  this.delete(param_e);
  }
  }
  )();
  return var_r;
  }
  }
  delete(param_e) {
  let var_t = super.get(param_e);
  if (var_t) {
  clearTimeout(var_t.tid);
  super.delete(param_e);
  }
  }
  clear() {
  for (let var_e of this.values()) {
  clearTimeout(var_e.tid);
  }
  super.clear();
  }
  };
  };
