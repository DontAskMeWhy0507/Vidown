// Module 727 [events] - Runtime event listener bridge
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  Object.defineProperty(exportsObj, "__esModule", {
  value: true
  }
  );
  const dep_stream_base = requireFn(83);
  class var_o extends dep_stream_base.Writable {
  constructor() {
  super();
  this._lastLine = "";
  this._seq = 0;
  this._nextItemDuration = null;
  this._nextItemRange = null;
  this._lastItemRangeEnd = 0;
  this.on("finish", () => {
  this._parseLine(this._lastLine);
  this.emit("end");
  }
  );
  }
  _parseAttrList(param_e) {
  let var_t;
  let obj_r = {
  };
  let regex_n = /([A-Z0-9-]+)=(?:"([^"]*?)"|([^,]*?))/g;
  while ((var_t = regex_n.exec(param_e)) !== null) {
  obj_r[var_t[1]] = var_t[2] || var_t[3];
  }
  return obj_r;
  }
  _parseRange(param_e) {
  if (!param_e) {
  return null;
  }
  let var_t = param_e.split("@");
  let var_r = var_t[1] ? parseInt(var_t[1]) : this._lastItemRangeEnd + 1;
  let obj_n = {
  start: var_r,
  end: var_r + parseInt(var_t[0]) - 1
  };
  this._lastItemRangeEnd = obj_n.end;
  return obj_n;
  }
  _parseLine(param_e) {
  let var_t = param_e.match(/^#(EXT[A-Z0-9-]+)(?::(.*))?/);
  if (var_t) {
  const var_e = var_t[1];
  const var_r = var_t[2] || "";
  switch (var_e) {
  case "EXT-X-PROGRAM-DATE-TIME":
  this.emit("starttime", new Date(var_r).getTime());
  break;
  case "EXT-X-MEDIA-SEQUENCE":
  this._seq = parseInt(var_r);
  break;
  case "EXT-X-MAP":
  {
  let var_e_1 = this._parseAttrList(var_r);
  if (!var_e_1.URI) {
  this.destroy(new Error("`EXT-X-MAP` found without required attribute `URI`"));
  return;
  }
  this.emit("item", {
  url: var_e_1.URI,
  seq: this._seq,
  init: true,
  duration: 0,
  range: this._parseRange(var_e_1.BYTERANGE)
  }
  );
  break;
  }
  case "EXT-X-BYTERANGE":
  this._nextItemRange = this._parseRange(var_r);
  break;
  case "EXTINF":
  this._nextItemDuration = Math.round(parseFloat(var_r.split(",")[0]) * 1000);
  break;
  case "EXT-X-ENDLIST":
  this.emit("endlist");
  }
  }
  else if (!/^#/.test(param_e) && param_e.trim()) {
  this.emit("item", {
  url: param_e.trim(),
  seq: this._seq++,
  duration: this._nextItemDuration,
  range: this._nextItemRange
  }
  );
  this._nextItemRange = null;
  }
  }
  _write(param_e, param_t, param_r) {
  let var_n = param_e.toString("utf8").split("\n");
  if (this._lastLine) {
  var_n[0] = this._lastLine + var_n[0];
  }
  var_n.forEach((param_e_1, param_t_1) => {
  if (!this.destroyed) {
  if (param_t_1 < var_n.length - 1) {
  this._parseLine(param_e_1);
  }
  else {
  this._lastLine = param_e_1;
  }
  }
  }
  );
  param_r();
  }
  }
  exportsObj.default = var_o;
  };
