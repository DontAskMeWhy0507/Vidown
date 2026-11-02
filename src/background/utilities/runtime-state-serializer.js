// Module 729 [utilities] - Runtime service worker state serializer
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  Object.defineProperty(exportsObj, "__esModule", {
  value: true
  }
  );
  exportsObj.Queue = undefined;
  exportsObj.Queue = class {
  constructor(param_e, param_t = {
  }
  ) {
  this._worker = param_e;
  this._concurrency = param_t.concurrency || 1;
  this.tasks = [];
  this.total = 0;
  this.active = 0;
  }
  push(param_e, param_t) {
  this.tasks.push({
  item: param_e,
  callback: param_t
  }
  );
  this.total++;
  this._next();
  }
  _next() {
  if (this.active >= this._concurrency || !this.tasks.length) {
  return;
  }
  const {
  item: var_e,
  callback: var_t
  }
  = this.tasks.shift();
  let flag_r = false;
  this.active++;
  this._worker(var_e, (param_e, param_n) => {
  if (!flag_r) {
  this.active--;
  flag_r = true;
  if (var_t != null) {
  var_t(param_e, param_n);
  }
  this._next();
  }
  }
  );
  }
  die() {
  this.tasks = [];
  }
  };
  };
