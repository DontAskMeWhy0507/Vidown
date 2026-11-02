// Module 539 [utilities] - Background telemetry and error reporter
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  exportsObj.a = new class {
  constructor() {
  this.DEFAULT_TTL = 1200000;
  this._cache = {
  };
  this.DEFAULT_TTL = 1200000;
  }
  processRequest(param_e, param_t) {
  switch (param_e) {
  case "get":
  return this.get(param_t.key);
  case "put":
  this.put(param_t.key, param_t.value, param_t.ttl);
  break;
  case "delete":
  this.delete(param_t.key);
  }
  }
  get(param_e) {
  return new Promise((param_t, param_r) => {
  if (param_e in this._cache) {
  param_t(this._cache[param_e]);
  }
  else {
  param_r(null);
  }
  }
  );
  }
  _get(param_e) {
  return this._cache[param_e] || null;
  }
  put(param_e, param_t, param_r = this.DEFAULT_TTL) {
  if (param_e && param_t !== undefined) {
  param_r = param_r || this.DEFAULT_TTL;
  this._cache[param_e] = param_t;
  setTimeout(this.delete.bind(this, param_e), param_r);
  }
  }
  delete(param_e) {
  if (this._cache[param_e]) {
  delete this._cache[param_e];
  }
  }
  }
  ();
  };
