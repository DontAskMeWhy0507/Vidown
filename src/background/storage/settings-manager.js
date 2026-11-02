// Module 7 [storage] - Shared utility component (settings-manager)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_quality_helper = requireFn(9);
  var dep_media_constants = requireFn(1);
  var var_i = new class {
  constructor() {
  this._storage = chrome.storage.local;
  this._handlerMap = new Map();
  this._options = {
  };
  this._default = {
  detach_enabled: true,
  on_page_buttons: true,
  min_stream_size: 30720,
  prefer_last_quality: true,
  last_quality: undefined,
  hide_play_now_tooltip: false,
  hide_play_now_tooltip_bottom: false,
  instant_actions_tooltip_shown: false,
  instant_actions_tooltip_shown_count: 0,
  instant_actions_button_download: false,
  preferred_quality_level: dep_quality_helper.b.DEFAULT_QUALITY_LEVEL,
  show_3gp_ext: false,
  skip_video_enabled: true,
  video_changed: false,
  ADLIST_CUSTOM_RULE: {
  }
  ,
  [dep_media_constants.o]: []
  };
  this.loaded = false;
  var var_e = this;
  chrome.storage.onChanged.addListener((param_t, param_r) => {
  var var_n;
  if (param_r === "local") {
  for (var var_o in param_t) {
  var_e._options[var_o] = param_t[var_o].newValue;
  }
  for (var var_i_1 in param_t) {
  if ((var_n = this._handlerMap.get(var_i_1)) !== null && var_n !== undefined) {
  var_n.forEach(param_e => param_e());
  }
  }
  }
  }
  );
  }
  load() {
  var var_e = this;
  return new Promise(param_t => {
  var_e._storage.get(null, param_r => {
  var_e._options = param_r;
  var_e.loaded = true;
  var_e._migratePreferredQualityLevel();
  param_t(param_r);
  }
  );
  }
  );
  }
  _migratePreferredQualityLevel() {
  if (this._options.preferred_quality_level === "Medium") {
  this.set("preferred_quality_level", "Standard");
  }
  }
  set(param_e, param_t) {
  var obj_r = {
  [param_e]: param_t
  };
  this._storage.set(obj_r);
  if (this.loaded && (typeof param_e == "string" || typeof param_e == "number" &&
  param_t !== undefined)) {
  this._options[param_e] = param_t;
  }
  }
  get(param_e) {
  if (this.loaded && param_e in this._options) {
  return this._options[param_e];
  }
  else {
  return this._default[param_e];
  }
  }
  has(param_e) {
  return this._options[param_e] !== undefined;
  }
  remove(param_e) {
  delete this._options[param_e];
  this._storage.remove([param_e], () => {
  var var_e = chrome.runtime.lastError;
  if (var_e) {
  console.warn("Caught", var_e);
  }
  }
  );
  }
  addOptionChangedListener(param_e, param_t) {
  var var_n = this._handlerMap.get(param_e) ?? [];
  var_n.push(param_t);
  this._handlerMap.set(param_e, var_n);
  }
  }
  ();
  exportsObj.a = var_i;
  };
