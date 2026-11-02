// Module 124 [tabs] - Tab navigation and active tab lifecycle tracker
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "c", function () {
  return var_u;
  }
  );
  requireFn.d(exportsObj, "a", function () {
  return var_l;
  }
  );
  requireFn.d(exportsObj, "b", function () {
  return var_d;
  }
  );
  requireFn.d(exportsObj, "g", function () {
  return var_f;
  }
  );
  requireFn.d(exportsObj, "e", function () {
  return var_h;
  }
  );
  requireFn.d(exportsObj, "d", function () {
  return var_m;
  }
  );
  requireFn.d(exportsObj, "f", function () {
  return fn_g;
  }
  );
  var dep_ab_test_provider = requireFn(43);
  var dep_dom_utils = requireFn(0);
  requireFn(178);
  function var_i() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_r = typeof Symbol == "function" ? Symbol : {
  };
  var var_n = var_r.iterator || "@@iterator";
  var var_o = var_r.toStringTag || "@@toStringTag";
  function var_s_1(param_r, param_n, param_o, param_i) {
  var var_s_2 = param_n && param_n.prototype instanceof var_u_1 ?
  param_n : var_u_1;
  var var_l_2 = Object.create(var_s_2.prototype);
  var_a(var_l_2, "_invoke", function (param_r_1, param_n_1, param_o_1) {
  var var_i_1;
  var var_a_1;
  var var_s_3;
  var num_u = 0;
  var var_l_3 = param_o_1 || [];
  var flag_d = false;
  var obj_p = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_f_2,
  f: var_f_2.bind(var_e, 4),
  d: function (param_t, param_r_2) {
  var_i_1 = param_t;
  var_a_1 = 0;
  var_s_3 = var_e;
  obj_p.n = param_r_2;
  return obj_c;
  }
  };
  function var_f_2(param_r_2, param_n_2) {
  var_a_1 = param_r_2;
  var_s_3 = param_n_2;
  var_t = 0;
  for (;
  !flag_d && num_u && !var_o_1 && var_t < var_l_3.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_l_3[var_t];
  var var_f_3 = obj_p.p;
  var var_h_2 = var_i_2[2];
  if (param_r_2 > 3) {
  if (var_o_1 = var_h_2 === param_n_2) {
  var_s_3 = var_i_2[(var_a_1 = var_i_2[4]) ? 5 : (var_a_1 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_f_3) {
  if (var_o_1 = param_r_2 < 2 && var_f_3 < var_i_2[1]) {
  var_a_1 = 0;
  obj_p.v = param_n_2;
  obj_p.n = var_i_2[1];
  }
  else if (var_f_3 < var_h_2 && (var_o_1 = param_r_2 < 3 || var_i_2[0] > param_n_2 ||
  param_n_2 > var_h_2)) {
  var_i_2[4] = param_r_2;
  var_i_2[5] = param_n_2;
  obj_p.n = var_h_2;
  var_a_1 = 0;
  }
  }
  }
  if (var_o_1 || param_r_2 > 1) {
  return obj_c;
  }
  flag_d = true;
  throw param_n_2;
  }
  return function (param_o_2, param_l, param_h) {
  if (num_u > 1) {
  throw TypeError("Generator is already running");
  }
  if (flag_d && param_l === 1) {
  var_f_2(param_l, param_h);
  }
  var_a_1 = param_l;
  var_s_3 = param_h;
  while ((var_t = var_a_1 < 2 ? var_e : var_s_3) || !flag_d) {
  if (!var_i_1) {
  if (var_a_1) {
  if (var_a_1 < 3) {
  if (var_a_1 > 1) {
  obj_p.n = -1;
  }
  var_f_2(var_a_1, var_s_3);
  }
  else {
  obj_p.n = var_s_3;
  }
  }
  else {
  obj_p.v = var_s_3;
  }
  }
  try {
  num_u = 2;
  if (var_i_1) {
  if (!var_a_1) {
  param_o_2 = "next";
  }
  if (var_t = var_i_1[param_o_2]) {
  if (!(var_t = var_t.call(var_i_1, var_s_3))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_s_3 = var_t.value;
  if (var_a_1 < 2) {
  var_a_1 = 0;
  }
  }
  else {
  if (var_a_1 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_a_1 < 2) {
  var_s_3 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_a_1 = 1;
  }
  }
  var_i_1 = var_e;
  }
  else if ((var_t = (flag_d = obj_p.n < 0) ? var_s_3 : param_r_1.call(param_n_1,
  obj_p)) !== obj_c) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_a_1 = 1;
  var_s_3 = var_t_1;
  }
  finally {
  num_u = 1;
  }
  }
  return {
  value: var_t,
  done: flag_d
  };
  };
  }
  (param_r, param_o, param_i), true);
  return var_l_2;
  }
  var obj_c = {
  };
  function var_u_1() {
  }
  function var_l_1() {
  }
  function var_d_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_p_1 = [][var_n] ? var_t(var_t([][var_n]())) : (var_a(var_t = {
  }
  , var_n, function () {
  return this;
  }
  ), var_t);
  var var_f_1 = var_d_1.prototype = var_u_1.prototype = Object.create(var_p_1);
  function var_h_1(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_d_1);
  }
  else {
  param_e.__proto__ = var_d_1;
  var_a(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_f_1);
  return param_e;
  }
  var_l_1.prototype = var_d_1;
  var_a(var_f_1, "constructor", var_d_1);
  var_a(var_d_1, "constructor", var_l_1);
  var_l_1.displayName = "GeneratorFunction";
  var_a(var_d_1, var_o, "GeneratorFunction");
  var_a(var_f_1);
  var_a(var_f_1, var_o, "Generator");
  var_a(var_f_1, var_n, function () {
  return this;
  }
  );
  var_a(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_i = function () {
  return {
  w: var_s_1,
  m: var_h_1
  };
  }
  )();
  }
  function var_a(param_e, param_t, param_r, param_n) {
  var var_o = Object.defineProperty;
  try {
  var_o({
  }
  , "", {
  }
  );
  }
  catch (var_e) {
  var_o = 0;
  }
  (var_a = function (param_e_1, param_t_1, param_r_1, param_n_1) {
  function var_i_1(param_t_2, param_r_2) {
  var_a(param_e_1, param_t_2, function (param_e_2) {
  return this._invoke(param_t_2, param_r_2, param_e_2);
  }
  );
  }
  if (param_t_1) {
  if (var_o) {
  var_o(param_e_1, param_t_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  );
  }
  else {
  param_e_1[param_t_1] = param_r_1;
  }
  }
  else {
  var_i_1("next", 0);
  var_i_1("throw", 1);
  var_i_1("return", 2);
  }
  }
  )(param_e, param_t, param_r, param_n);
  }
  var var_s;
  function var_c(param_e, param_t, param_r, param_n) {
  return new (param_r ||= Promise)(function (param_o, param_i) {
  function var_a_1(param_e_1) {
  try {
  var_c_1(param_n.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s_1(param_e_1) {
  try {
  var_c_1(param_n.throw(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c_1(param_e_1) {
  var var_t;
  if (param_e_1.done) {
  param_o(param_e_1.value);
  }
  else {
  (var_t = param_e_1.value, var_t instanceof param_r ? var_t :
  new param_r(function (param_e_2) {
  param_e_2(var_t);
  }
  )).then(var_a_1, var_s_1);
  }
  }
  var_c_1((param_n = param_n.apply(param_e, param_t || [])).next());
  }
  );
  }
  function var_u(param_e, param_t) {
  return new Promise(param_r => {
  if (param_t.frameId > 0) {
  param_r({
  type: "support_result",
  data: null
  }
  );
  }
  else if (param_e.params.testName == "sidepanelonboarding") {
  dep_ab_test_provider.a.processRequest({
  testName: "sidepanelDownload"
  }
  ).then(param_e_1 => {
  param_r({
  type: "support_result",
  data: {
  abTestData: param_e_1
  }
  }
  );
  }
  );
  }
  else {
  dep_ab_test_provider.a.processRequest({
  testName: param_e.params.testName
  }
  ).then(param_e_1 => {
  param_r({
  type: "support_result",
  data: {
  abTestData: param_e_1
  }
  }
  );
  }
  );
  }
  }
  );
  }
  function var_l(param_e, param_t) {
  var var_n = param_e.params;
  var_n.params.windowId = param_t.tab?.windowId;
  if (var_n.activatName) {
  chrome.coccocPrivate.getFeatureState(var_n.checkName, param_e_1 => {
  var var_i_1;
  if (param_e_1.enabled) {
  if (var_n.checkName == "sidebar" && var_n.params.predefinedIcons &&
  ((var_i_1 = param_e_1.configurations?.additionalProperties?.active_url) === null ||
  var_i_1 === undefined ? undefined : var_i_1.includes(var_n.params.predefinedIcons))) {
  return;
  }
  var_p(var_n);
  }
  else {
  chrome.coccocPrivate.actOnFeature({
  action: var_n.activatName,
  params: {
  windowId: param_t.tab?.windowId
  }
  }
  , () => {
  var_p(var_n);
  }
  );
  }
  }
  );
  }
  else {
  var_p(var_n);
  }
  }
  function var_d(param_e) {
  return new Promise(param_t => {
  if (!chrome.coccocPrivate?.getFeatureState) {
  param_t(null);
  }
  chrome.coccocPrivate.getFeatureState(param_e.feature, param_e_1 => {
  param_t(param_e_1);
  }
  );
  }
  );
  }
  function var_p(param_e) {
  chrome.coccocPrivate.actOnFeature({
  action: param_e.action,
  params: param_e.params
  }
  , () => {
  }
  );
  }
  function var_f(param_e) {
  return var_c(this, undefined, undefined, var_i().m(function var_t() {
  var var_r;
  return var_i().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  var_r = chrome.runtime.getURL(param_e);
  param_t.n = 1;
  return chrome.runtime.getContexts({
  contextTypes: ["OFFSCREEN_DOCUMENT"],
  documentUrls: [var_r]
  }
  );
  case 1:
  if (!(param_t.v.length > 0)) {
  param_t.n = 2;
  break;
  }
  return param_t.a(2);
  case 2:
  if (!var_s) {
  param_t.n = 4;
  break;
  }
  param_t.n = 3;
  return var_s;
  case 3:
  param_t.n = 6;
  break;
  case 4:
  var_s = chrome.offscreen.createDocument({
  url: param_e,
  reasons: [chrome.offscreen.Reason.CLIPBOARD],
  justification: "reason for needing the document"
  }
  );
  param_t.n = 5;
  return var_s;
  case 5:
  var_s = null;
  case 6:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  ));
  }
  var var_h = Object(dep_dom_utils.useDebounce)(param_e => {
  chrome.tabs.query({
  }
  , param_t => {
  var var_r = param_t.find(param_t_1 => param_t_1.id === param_e.currentTabId);
  if (var_r) {
  var var_n = var_r.id;
  chrome.tabs.sendMessage(var_n, {
  type: "open_onboarding",
  data: param_e.data,
  site: param_e.onboardingType
  }
  );
  }
  }
  );
  }
  );
  var var_m = Object(dep_dom_utils.useDebounce)(param_e => {
  chrome.tabs.sendMessage(param_e.tabId, {
  type: "init_main_frame"
  }
  , {
  frameId: param_e.frameId || 0
  }
  );
  }
  , 500);
  var fn_g = () => {
  chrome.coccoc.setAsDefaultBrowser();
  };
  };
