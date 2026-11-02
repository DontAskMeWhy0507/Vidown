// Module 728 [events] - Extension message event dispatcher
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
  Object.defineProperty(exportsObj, "__esModule", {
  value: true
  }
  );
  const dep_stream_base = requireFn(83);
  const var_i = var_n(requireFn(505));
  const dep_event_serializer = requireFn(522);
  class var_s extends dep_stream_base.Writable {
  constructor(param_e) {
  let var_t;
  super();
  this._parser = var_i.default.createStream(false, {
  lowercase: true
  }
  );
  this._parser.on("error", this.destroy.bind(this));
  let var_r;
  let var_n_1;
  let var_o;
  let var_s_1;
  let var_c;
  let var_u;
  let var_l;
  let var_d;
  let num_p = 0;
  let num_f = 0;
  let list_h = [];
  let flag_m = false;
  let flag_g = false;
  const fn_v = param_t => {
  const obj_r = {
  RepresentationID: param_e,
  Number: num_f,
  Time: num_p
  };
  return param_t.replace(/\$(\w+)\$/g, (param_e_1, param_t_1) => "" + obj_r[param_t_1]);
  };
  this._parser.on("opentag", param_i => {
  switch (param_i.name) {
  case "mpd":
  num_p = param_i.attributes.availabilitystarttime ? new Date(param_i.attributes.availabilitystarttime).getTime(
  ) : 0;
  var_u = param_i.attributes.type !== "dynamic";
  break;
  case "period":
  num_f = 0;
  var_n_1 = 1000;
  var_s_1 = 0;
  var_o = 0;
  var_c = [];
  var_l = 0;
  var_d = dep_event_serializer.durationStr(param_i.attributes.start) ||
  0;
  break;
  case "segmentlist":
  num_f = parseInt(param_i.attributes.startnumber) || num_f;
  var_n_1 = parseInt(param_i.attributes.timescale) || var_n_1;
  var_s_1 = parseInt(param_i.attributes.duration) || var_s_1;
  var_o = parseInt(param_i.attributes.presentationtimeoffset) ||
  var_o;
  break;
  case "segmenttemplate":
  var_r = param_i.attributes;
  num_f = parseInt(param_i.attributes.startnumber) || num_f;
  var_n_1 = parseInt(param_i.attributes.timescale) || var_n_1;
  break;
  case "segmenttimeline":
  case "baseurl":
  var_t = param_i.name;
  break;
  case "s":
  list_h.push({
  duration: parseInt(param_i.attributes.d),
  repeat: parseInt(param_i.attributes.r),
  time: parseInt(param_i.attributes.t)
  }
  );
  break;
  case "adaptationset":
  case "representation":
  var_l++;
  param_e ||= param_i.attributes.id;
  flag_m = param_i.attributes.id === "" + param_e;
  if (flag_m) {
  if (var_d) {
  num_p += var_d;
  }
  if (var_o) {
  num_p -= var_o / var_n_1 * 1000;
  }
  this.emit("starttime", num_p);
  }
  break;
  case "initialization":
  if (flag_m) {
  this.emit("item", {
  url: var_c.filter(param_e_1 => !!param_e_1).join("") + param_i.attributes.sourceurl,
  seq: num_f,
  init: true,
  duration: 0
  }
  );
  }
  break;
  case "segmenturl":
  if (flag_m) {
  flag_g = true;
  let var_e = list_h.shift();
  let var_t_1 = ((var_e == null ? undefined : var_e.duration) ||
  var_s_1) / var_n_1 * 1000;
  this.emit("item", {
  url: var_c.filter(param_e_1 => !!param_e_1).join("") + param_i.attributes.media,
  seq: num_f++,
  duration: var_t_1
  }
  );
  num_p += var_t_1;
  }
  }
  }
  );
  const fn_y = () => {
  if (var_u) {
  this.emit("endlist");
  }
  if (flag_m) {
  this.emit("end");
  }
  else {
  this.destroy(Error(`Representation '${param_e}' not found`));
  }
  };
  this._parser.on("closetag", param_e_1 => {
  switch (param_e_1) {
  case "adaptationset":
  case "representation":
  var_l--;
  if (var_r && list_h.length) {
  flag_g = true;
  if (var_r.initialization) {
  this.emit("item", {
  url: var_c.filter(param_e_2 => !!param_e_2).join("") + fn_v(var_r.initialization),
  seq: num_f,
  init: true,
  duration: 0
  }
  );
  }
  for (let {
  duration: var_e,
  repeat: var_t_1,
  time: var_o_1
  }
  of list_h) {
  var_e = var_e / var_n_1 * 1000;
  var_t_1 = var_t_1 || 1;
  num_p = var_o_1 || num_p;
  for (let num_n = 0;
  num_n < var_t_1;
  num_n++) {
  this.emit("item", {
  url: var_c.filter(param_e_2 => !!param_e_2).join("") + fn_v(var_r.media),
  seq: num_f++,
  duration: var_e
  }
  );
  num_p += var_e;
  }
  }
  }
  if (flag_g) {
  this.emit("endearly");
  fn_y();
  this._parser.removeAllListeners();
  this.removeAllListeners("finish");
  }
  }
  }
  );
  this._parser.on("text", param_e_1 => {
  if (var_t === "baseurl") {
  var_c[var_l] = param_e_1;
  var_t = null;
  }
  }
  );
  this.on("finish", fn_y);
  }
  _write(param_e, param_t, param_r) {
  this._parser.write(param_e);
  param_r();
  }
  }
  exportsObj.default = var_s;
  };
