// Module 730 [tabs] - Chrome tab query and active window helper
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_metrics_logger = requireFn(5);
  var dep_feature_flags = requireFn(11);
  var dep_url_utils = requireFn(3);
  var num_a = 640;
  var num_s = 480;
  var var_c = new class {
  constructor() {
  chrome.tabs.onAttached.addListener((param_e, param_t) => {
  var var_r;
  var var_o;
  if (param_t.isFromPanel) {
  dep_metrics_logger.a.log("Pip", dep_metrics_logger.a.PIP_RESTORE_CLICK);
  if ((var_o = (var_r = chrome.tabs.sendMessage(param_e, {
  type: "restore_tab"
  }
  )) === null || var_r === undefined ? undefined : var_r.catch) !== null &&
  var_o !== undefined) {
  var_o.call(var_r, console.log);
  }
  }
  }
  );
  this.requestActions = {
  detachTab: this.detachTab.bind(this),
  pipUrl: this.pipUrl.bind(this),
  restorePanelToTab: this.restorePanelToTab.bind(this)
  };
  }
  processRequest(param_e) {
  var var_t = param_e.method;
  if (var_t && this.requestActions[var_t]) {
  return this.requestActions[var_t].apply(this, arguments);
  }
  }
  detachTab(param_e, param_t) {
  var var_s = param_e.params;
  var var_c_1 = param_e.params.url ? param_e.params.url : param_t.tab?.url;
  var var_u = param_t.tab?.id;
  chrome.windows.create(this.getWindowOptions(var_s, var_c_1, var_u), () => {
  dep_metrics_logger.a.log("Pip", dep_metrics_logger.a.PIP_DETACH_CLICK);
  var var_e = Object(dep_url_utils.c)(var_c_1);
  dep_metrics_logger.a.log("RefrPin", var_e);
  if (dep_feature_flags.a.CUSTOM_METRICS_JSON) {
  var obj_t = {
  timestamp_ms: Date.now(),
  page_url: var_c_1
  };
  dep_metrics_logger.a.log("recordCustomData", [{
  key: "savior_pip_action",
  value: JSON.stringify(obj_t)
  }
  ]);
  }
  }
  );
  }
  pipUrl(param_e) {
  var var_t;
  var var_r = param_e.params;
  (var_t = var_r.url, new Promise(param_e_1 => {
  chrome.windows.getAll({
  populate: true
  }
  , param_r => {
  for (var num_n = 0;
  num_n < param_r.length;
  num_n++) {
  var var_o = param_r[num_n];
  if (var_o.type === "panel" && (var_o.tabs || []).length !== 0 &&
  (var_o.tabs || [])[0].url === var_t) {
  param_e_1(true);
  return;
  }
  }
  param_e_1(false);
  }
  );
  }
  )).then(param_e_1 => {
  if (!param_e_1) {
  var var_t_1 = var_r.height ? var_r.height + 36 : num_s + 36;
  var obj_i = {
  type: "panel",
  width: var_r.width || num_a,
  height: var_t_1,
  url: var_r.url
  };
  if (var_r.isAds && dep_feature_flags.a.IS_ADS_PIP_PARAMS) {
  obj_i.isAds = true;
  }
  if (navigator.vendor === "Coc Coc") {
  obj_i.proportional = true;
  }
  chrome.windows.create(obj_i, () => {
  dep_metrics_logger.a.log("Pip", dep_metrics_logger.a.PIP_SITE_LINK_CLICK);
  }
  );
  }
  }
  );
  }
  restorePanelToTab(param_e, param_t) {
  var var_n = param_t.tab?.id || 0;
  try {
  chrome.tabs.move(var_n, {
  index: -1,
  restoreFromPanel: true
  }
  );
  }
  catch (var_e) {
  }
  }
  getWindowOptions(param_e, param_t, param_r) {
  var obj_n = {
  width: param_e.width,
  height: (param_e.height || 0) + 36,
  type: "panel",
  url: param_t
  };
  if (param_e.incognito) {
  obj_n.incognito = true;
  }
  if (navigator.vendor === "Coc Coc") {
  obj_n.proportional = true;
  obj_n.moveTabToPanel = true;
  obj_n.forceAlwaysOnTop = true;
  obj_n.tabId = param_r;
  }
  return obj_n;
  }
  }
  ();
  EE.on("pipRequest", param_e => {
  var_c.processRequest(param_e);
  }
  );
  };
