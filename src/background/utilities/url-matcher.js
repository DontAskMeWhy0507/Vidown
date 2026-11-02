// Module 33 [utilities] - Shared utility component (url-matcher)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var dep_media_parser = requireFn(22);
  var dep_settings_manager = requireFn(7);
  var dep_dom_utils = requireFn(0);
  var dep_media_constants = requireFn(1);
  var dep_ab_test_provider = requireFn(43);
  function var_c() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_r = typeof Symbol == "function" ? Symbol : {
  };
  var var_n = var_r.iterator || "@@iterator";
  var var_o = var_r.toStringTag || "@@toStringTag";
  function var_i(param_r, param_n, param_o, param_i) {
  var var_c_1 = param_n && param_n.prototype instanceof var_s ?
  param_n : var_s;
  var var_l_2 = Object.create(var_c_1.prototype);
  var_u(var_l_2, "_invoke", function (param_r_1, param_n_1, param_o_1) {
  var var_i_1;
  var var_s_1;
  var var_c_2;
  var num_u = 0;
  var var_l_3 = param_o_1 || [];
  var flag_d = false;
  var obj_p = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_f_1,
  f: var_f_1.bind(var_e, 4),
  d: function (param_t, param_r_2) {
  var_i_1 = param_t;
  var_s_1 = 0;
  var_c_2 = var_e;
  obj_p.n = param_r_2;
  return obj_a;
  }
  };
  function var_f_1(param_r_2, param_n_2) {
  var_s_1 = param_r_2;
  var_c_2 = param_n_2;
  var_t = 0;
  for (;
  !flag_d && num_u && !var_o_1 && var_t < var_l_3.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_l_3[var_t];
  var var_f_2 = obj_p.p;
  var var_h_1 = var_i_2[2];
  if (param_r_2 > 3) {
  if (var_o_1 = var_h_1 === param_n_2) {
  var_c_2 = var_i_2[(var_s_1 = var_i_2[4]) ? 5 : (var_s_1 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_f_2) {
  if (var_o_1 = param_r_2 < 2 && var_f_2 < var_i_2[1]) {
  var_s_1 = 0;
  obj_p.v = param_n_2;
  obj_p.n = var_i_2[1];
  }
  else if (var_f_2 < var_h_1 && (var_o_1 = param_r_2 < 3 || var_i_2[0] > param_n_2 ||
  param_n_2 > var_h_1)) {
  var_i_2[4] = param_r_2;
  var_i_2[5] = param_n_2;
  obj_p.n = var_h_1;
  var_s_1 = 0;
  }
  }
  }
  if (var_o_1 || param_r_2 > 1) {
  return obj_a;
  }
  flag_d = true;
  throw param_n_2;
  }
  return function (param_o_2, param_l, param_h) {
  if (num_u > 1) {
  throw TypeError("Generator is already running");
  }
  if (flag_d && param_l === 1) {
  var_f_1(param_l, param_h);
  }
  var_s_1 = param_l;
  var_c_2 = param_h;
  while ((var_t = var_s_1 < 2 ? var_e : var_c_2) || !flag_d) {
  if (!var_i_1) {
  if (var_s_1) {
  if (var_s_1 < 3) {
  if (var_s_1 > 1) {
  obj_p.n = -1;
  }
  var_f_1(var_s_1, var_c_2);
  }
  else {
  obj_p.n = var_c_2;
  }
  }
  else {
  obj_p.v = var_c_2;
  }
  }
  try {
  num_u = 2;
  if (var_i_1) {
  if (!var_s_1) {
  param_o_2 = "next";
  }
  if (var_t = var_i_1[param_o_2]) {
  if (!(var_t = var_t.call(var_i_1, var_c_2))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_c_2 = var_t.value;
  if (var_s_1 < 2) {
  var_s_1 = 0;
  }
  }
  else {
  if (var_s_1 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_s_1 < 2) {
  var_c_2 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_s_1 = 1;
  }
  }
  var_i_1 = var_e;
  }
  else if ((var_t = (flag_d = obj_p.n < 0) ? var_c_2 : param_r_1.call(param_n_1,
  obj_p)) !== obj_a) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_s_1 = 1;
  var_c_2 = var_t_1;
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
  var obj_a = {
  };
  function var_s() {
  }
  function var_l_1() {
  }
  function var_d_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_p_1 = [][var_n] ? var_t(var_t([][var_n]())) : (var_u(var_t = {
  }
  , var_n, function () {
  return this;
  }
  ), var_t);
  var var_f = var_d_1.prototype = var_s.prototype = Object.create(var_p_1);
  function var_h(param_e_1) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e_1, var_d_1);
  }
  else {
  param_e_1.__proto__ = var_d_1;
  var_u(param_e_1, var_o, "GeneratorFunction");
  }
  param_e_1.prototype = Object.create(var_f);
  return param_e_1;
  }
  var_l_1.prototype = var_d_1;
  var_u(var_f, "constructor", var_d_1);
  var_u(var_d_1, "constructor", var_l_1);
  var_l_1.displayName = "GeneratorFunction";
  var_u(var_d_1, var_o, "GeneratorFunction");
  var_u(var_f);
  var_u(var_f, var_o, "Generator");
  var_u(var_f, var_n, function () {
  return this;
  }
  );
  var_u(var_f, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_c = function () {
  return {
  w: var_i,
  m: var_h
  };
  }
  )();
  }
  function var_u(param_e_1, param_t, param_r, param_n) {
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
  (var_u = function (param_e_2, param_t_1, param_r_1, param_n_1) {
  function var_i(param_t_2, param_r_2) {
  var_u(param_e_2, param_t_2, function (param_e_3) {
  return this._invoke(param_t_2, param_r_2, param_e_3);
  }
  );
  }
  if (param_t_1) {
  if (var_o) {
  var_o(param_e_2, param_t_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  );
  }
  else {
  param_e_2[param_t_1] = param_r_1;
  }
  }
  else {
  var_i("next", 0);
  var_i("throw", 1);
  var_i("return", 2);
  }
  }
  )(param_e_1, param_t, param_r, param_n);
  }
  function var_l(param_e_1, param_t, param_r, param_n) {
  return new (param_r ||= Promise)(function (param_o, param_i) {
  function var_a(param_e_2) {
  try {
  var_c_1(param_n.next(param_e_2));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s(param_e_2) {
  try {
  var_c_1(param_n.throw(param_e_2));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c_1(param_e_2) {
  var var_t;
  if (param_e_2.done) {
  param_o(param_e_2.value);
  }
  else {
  (var_t = param_e_2.value, var_t instanceof param_r ? var_t :
  new param_r(function (param_e_3) {
  param_e_3(var_t);
  }
  )).then(var_a, var_s);
  }
  }
  var_c_1((param_n = param_n.apply(param_e_1, param_t || [])).next());
  }
  );
  }
  function var_d(param_e_1, param_t, param_r, param_n) {
  return var_l(this, undefined, undefined, var_c().m(function var_o() {
  var var_a;
  var var_s;
  return var_c().w(function (param_o) {
  while (true) {
  switch (param_o.p = param_o.n) {
  case 0:
  param_o.p = 0;
  if (!(param_t > 0)) {
  param_o.n = 3;
  break;
  }
  param_o.n = 1;
  return Object(dep_dom_utils.sleep)(param_t);
  case 1:
  param_o.n = 2;
  return var_p(param_e_1, param_n);
  case 2:
  var_a = param_o.v;
  return param_o.a(2, var_a);
  case 3:
  param_o.n = 4;
  return var_p(param_e_1, param_n);
  case 4:
  var_a = param_o.v;
  return param_o.a(2, var_a);
  case 5:
  param_o.p = 5;
  param_o.v;
  if (!(param_r >= 3)) {
  param_o.n = 6;
  break;
  }
  return param_o.a(2);
  case 6:
  var_s = param_t === 0 ? 2000 : param_t * 2;
  param_o.n = 7;
  return var_d(param_e_1, var_s, param_r + 1, param_n);
  case 7:
  return param_o.a(2);
  }
  }
  }
  , var_o, null, [[0, 5]]);
  }
  ));
  }
  function var_p(param_e_1, param_t) {
  return var_l(this, undefined, undefined, var_c().m(function var_r() {
  var var_n;
  return var_c().w(function (param_r) {
  while (true) {
  switch (param_r.n) {
  case 0:
  var_n = !(param_e_1 == null ? undefined : param_e_1.ruleVersion);
  if (!param_e_1 || !param_e_1.ruleVersion) {
  param_r.n = 1;
  break;
  }
  param_r.n = 1;
  return fetch(param_t, {
  method: "HEAD"
  }
  ).then(param_t_1 => {
  if (param_t_1 == null ? undefined : param_t_1.ok) {
  var var_r_1 = param_t_1.headers.get("x-coc-coc-version") ||
  "";
  if (!!param_e_1 && !!param_e_1.ruleVersion && !(var_r_1 <= param_e_1.ruleVersion)) {
  var_n = true;
  }
  }
  }
  );
  case 1:
  if (var_n) {
  param_r.n = 2;
  break;
  }
  return param_r.a(2);
  case 2:
  return param_r.a(2, fetch(param_t, {
  mode: "no-cors"
  }
  ).then(param_e_2 => {
  if (param_e_2 == null ? undefined : param_e_2.ok) {
  var var_t = param_e_2.headers.get("x-coc-coc-version") || "";
  return param_e_2.json().then(param_e_3 => Object.assign(Object.assign({
  }
  , param_e_3), {
  ruleVersion: var_t
  }
  ));
  }
  }
  ));
  }
  }
  }
  , var_r);
  }
  ));
  }
  var obj_f = {
  ad_filter: "",
  hide_savior: "hide-widget",
  disable_pin_rx: "disallow-pip",
  disable_savior_rx: "disable_savior_sites"
  };
  var list_h = [];
  exportsObj.a = new class {
  constructor() {
  this.extra = {
  };
  this._loadRules(dep_media_parser.a);
  this._loadRules(dep_media_parser.g, "pip");
  this._loadRules(dep_media_parser.c, "pip-allowfullscreen-false");
  this._loadRules(dep_media_parser.h, "requests");
  this._loadRules(dep_media_parser.e, "hide-widget");
  this._loadRegex(dep_media_parser.d, "disallow-pip");
  this._loadRegex(dep_media_parser.b, "disable_savior_sites");
  this._loadRules(dep_media_parser.f, "mount-directly");
  this.loadPromise = this.loadCustomRules();
  }
  loadCustomRules() {
  return var_l(this, undefined, undefined, var_c().m(function var_t() {
  var var_r;
  var var_n;
  var var_u_1;
  var var_l_1;
  return var_c().w(function (param_t) {
  while (true) {
  switch (param_t.p = param_t.n) {
  case 0:
  param_t.n = 1;
  return dep_dom_utils.Storage.get(["ADLIST_CUSTOM_RULE"]);
  case 1:
  var_r = param_t.v;
  if ((var_n = (var_r == null ? undefined : var_r.ADLIST_CUSTOM_RULE) ||
  {
  }
  ).timestamp && !(var_n.timestamp + 28800000 < Date.now())) {
  param_t.n = 5;
  break;
  }
  if (param_e.IS_CONTENT_SCRIPT) {
  param_t.n = 5;
  break;
  }
  "https://browser.coccoc.com/api/v1/savior/rules";
  param_t.p = 2;
  param_t.n = 3;
  return var_d(var_n, 0, 0, "https://browser.coccoc.com/api/v1/savior/rules");
  case 3:
  if (var_u_1 = param_t.v) {
  var_u_1.timestamp = Date.now();
  dep_settings_manager.a.set("ADLIST_CUSTOM_RULE", var_u_1);
  var_n = var_u_1;
  }
  else {
  var_n.timestamp = Date.now();
  dep_settings_manager.a.set("ADLIST_CUSTOM_RULE", var_n);
  }
  param_t.n = 5;
  break;
  case 4:
  param_t.p = 4;
  var_l_1 = param_t.v;
  console.warn("Caught an error", var_l_1);
  case 5:
  Object.keys(var_n).forEach(param_e_1 => {
  var var_t_1 = obj_f[param_e_1];
  if (typeof var_t_1 == "string") {
  if (list_h.includes(var_t_1)) {
  this._loadRegex(var_n[param_e_1], var_t_1);
  return;
  }
  this._loadRules(var_n[param_e_1], var_t_1 || undefined);
  delete var_n[param_e_1];
  }
  }
  );
  try {
  if (var_n.youtube_logic) {
  if (typeof var_n.youtube_logic != "object") {
  var_n.youtube_logic = JSON.parse(var_n.youtube_logic || "{}");
  }
  dep_settings_manager.a.set(dep_media_constants.w, var_n.youtube_logic);
  }
  if (var_n.gserp_selector) {
  if (typeof var_n.gserp_selector != "object") {
  var_n.gserp_selector = JSON.parse(var_n.gserp_selector || "{}");
  }
  dep_settings_manager.a.set(dep_media_constants.i, var_n.gserp_selector);
  }
  if (var_n.custom_control) {
  if (typeof var_n.custom_control != "object") {
  var_n.custom_control = JSON.parse(var_n.custom_control || "{}");
  }
  dep_settings_manager.a.set(dep_media_constants.c, var_n.custom_control);
  }
  delete var_n.timestamp;
  delete var_n.custom_control;
  delete var_n.youtube_logic;
  delete var_n.gserp_selector;
  if (Object.keys(var_n).length) {
  dep_settings_manager.a.set(dep_media_constants.n, var_n);
  }
  }
  catch (var_e) {
  }
  if (!param_e.IS_CONTENT_SCRIPT) {
  dep_ab_test_provider.a.loadTestsFromServer();
  }
  case 6:
  return param_t.a(2);
  }
  }
  }
  , var_t, this, [[2, 4]]);
  }
  ));
  }
  check(param_e_1, param_t) {
  var var_r = param_t ? this.extra[param_t] : this.rules;
  return this._testRules(param_e_1, var_r);
  }
  checkWhite(param_e_1, param_t) {
  var var_r = param_t ? this.extra[param_t] : this.rules;
  return this._testWhiteList(param_e_1, var_r);
  }
  checkRegex(param_e_1, param_t) {
  var var_r = this.extra[param_t];
  return !!var_r && !!Array.isArray(var_r) && typeof param_e_1 == "string" &&
  var_r.some(param_t_1 => param_t_1 instanceof RegExp && param_t_1.test(param_e_1));
  }
  shouldWidgetAttachToParentNode(param_e_1) {
  return dep_media_parser.i.some(param_t => param_t.test(param_e_1));
  }
  shouldDisableSavior(param_e_1) {
  return var_l(this, undefined, undefined, var_c().m(function var_t() {
  return var_c().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  param_t.n = 1;
  return this.loadPromise;
  case 1:
  return param_t.a(2, (this.extra.disable_savior_sites || dep_media_parser.b).some(
  param_t_1 => param_t_1.test(param_e_1)));
  }
  }
  }
  , var_t, this);
  }
  ));
  }
  _loadRules(param_e_1, param_t) {
  var var_r = this._parseFilters(param_e_1);
  if (param_t) {
  if (!this.extra[param_t]) {
  this.extra[param_t] = var_r;
  return;
  }
  var var_n = this.extra[param_t];
  if (Array.isArray(var_n)) {
  return;
  }
  this._appendRules(var_n, var_r);
  }
  else {
  if (!this.rules) {
  this.rules = var_r;
  return;
  }
  this._appendRules(this.rules, var_r);
  }
  }
  _appendRules(param_e_1, param_t) {
  param_e_1.blCosmetics.push(...param_t.blCosmetics);
  param_e_1.blUrls.push(...param_t.blUrls);
  param_e_1.wlCosmetics.push(...param_t.wlCosmetics);
  param_e_1.wlUrls.push(...param_t.wlUrls);
  }
  filterRegex(param_e_1) {
  return param_e_1.map(param_e_2 => {
  try {
  return new RegExp(param_e_2);
  }
  catch (var_e) {
  return;
  }
  }
  ).filter(Boolean);
  }
  _loadRegex(param_e_1, param_t) {
  var var_r = this.filterRegex(param_e_1);
  if (Array.isArray(var_r) && param_t) {
  this.extra[param_t] ||= [];
  this.extra[param_t].push(...var_r);
  }
  }
  _testRules(param_e_1, param_t) {
  if (!param_t) {
  return false;
  }
  var var_r;
  if (typeof param_e_1 == "string") {
  var_r = param_e_1;
  }
  else if (param_e_1.src || param_e_1.href) {
  var_r = param_e_1.src || param_e_1.href;
  }
  if (var_r == null ? undefined : var_r.startsWith("data:")) {
  return !!/^data:(audio|video)/i.test(var_r);
  }
  if (var_r) {
  for (var var_n = param_t.wlUrls.length, num_o = 0;
  num_o < var_n;
  num_o++) {
  try {
  if (param_t.wlUrls[num_o].test(var_r)) {
  return false;
  }
  }
  catch (var_e) {
  }
  }
  var_n = param_t.blUrls.length;
  for (var num_i = 0;
  num_i < var_n;
  num_i++) {
  try {
  if (param_t.blUrls[num_i].test(var_r)) {
  return true;
  }
  }
  catch (var_e) {
  }
  }
  }
  if (!(param_e_1 instanceof EventTarget)) {
  return false;
  }
  var var_a = param_e_1.ownerDocument.location.href;
  for (var num_s = 0;
  num_s < param_t.wlCosmetics.length;
  num_s++) {
  try {
  var var_c_1 = param_t.wlCosmetics[num_s];
  if ((var_c_1.domain[0] === "~" && var_a.match(var_c_1.domain.substr(1)) ||
  var_a.match(var_c_1.domain)) && var_c_1.selectors.some(param_e_1.matches.bind(
  param_e_1))) {
  return false;
  }
  }
  catch (var_e) {
  }
  }
  for (var num_u = 0;
  num_u < param_t.blCosmetics.length;
  num_u++) {
  try {
  var var_l_1 = param_t.blCosmetics[num_u];
  if ((var_l_1.domain[0] === "~" && var_a.match(var_l_1.domain.substr(1)) ||
  var_a.match(var_l_1.domain)) && var_l_1.selectors.some(param_e_1.matches.bind(
  param_e_1))) {
  return true;
  }
  }
  catch (var_e) {
  }
  }
  return false;
  }
  _testWhiteList(param_e_1, param_t) {
  if (!param_t) {
  return false;
  }
  var var_r;
  if (typeof param_e_1 == "string") {
  var_r = param_e_1;
  }
  else if (param_e_1.src || param_e_1.href) {
  var_r = param_e_1.src || param_e_1.href;
  }
  if (var_r) {
  for (var var_n = param_t.wlUrls.length, num_o = 0;
  num_o < var_n;
  num_o++) {
  try {
  if (param_t.wlUrls[num_o].test(var_r)) {
  return true;
  }
  }
  catch (var_e) {
  }
  }
  }
  if (!(param_e_1 instanceof EventTarget)) {
  return false;
  }
  var var_i = param_e_1.ownerDocument.location.href;
  for (var num_a = 0;
  num_a < param_t.wlCosmetics.length;
  num_a++) {
  try {
  var var_s = param_t.wlCosmetics[num_a];
  if ((var_s.domain[0] === "~" && var_i.match(var_s.domain.substr(1)) ||
  var_i.match(var_s.domain)) && var_s.selectors.some(param_e_1.matches.bind(param_e_1))) {
  return true;
  }
  }
  catch (var_e) {
  }
  }
  return false;
  }
  _convertWildcard(param_e_1) {
  if (/^\/.*?\/$/.test(param_e_1) && /[[\\(){}]/.test(param_e_1)) {
  return new RegExp(param_e_1.replace(/^\/|\/$/g, ""), "i");
  }
  var var_t = param_e_1.replace(/[.?+\\[{()]/g, param_e_2 => "\\" + param_e_2).replace(
  /\^/g, "[\\w\\d_.%-]").replace(/\*/g, ".*").replace(/\|\|/g, "^\\w+://([\\d\\w-]+\\.)*").replace(
  /\|/g, "$");
  return new RegExp(var_t, "i");
  }
  _getParsingRegex() {
  if (this.regex) {
  return this.regex;
  }
  this.regex = new RegExp("^\\s*(@@)?(/(?:[^/]|\\\\/)+/|(?:[^#$]+|#(?!#))+)?(?:(#@#|##)([^$]+))?(?:\\$(.*))?\\s*$",
  "i");
  return this.regex;
  }
  _parseFilters(param_e_1) {
  var var_t = param_e_1;
  if (typeof param_e_1 == "string") {
  var_t = param_e_1.split(/[\r\n]+/);
  }
  var obj_r = {
  blUrls: [],
  wlUrls: [],
  blCosmetics: [],
  wlCosmetics: []
  };
  var obj_n = {
  "": {
  bl: [],
  wl: []
  }
  };
  for (var num_o = 0;
  num_o < var_t.length;
  num_o++) {
  var var_i = var_t[num_o];
  if (!/^\s*!|^\s*\[.*?\]\s*$/.test(var_i)) {
  var var_a = undefined;
  try {
  if (!(var_a = this._getParsingRegex().exec(var_i))) {
  throw new Error();
  }
  }
  catch (var_e) {
  console.warn("AdFilter: could not parse adblock rule: " + var_i);
  continue;
  }
  var obj_s = {
  whitelist: var_a[1],
  url: var_a[2],
  separator: var_a[3],
  selector: var_a[4],
  comment: var_a[5]
  };
  if (obj_s.separator) {
  for (var var_c_1 = obj_s.url ? obj_s.url.split(/,/) : [""], var_u_1 = undefined,
  num_l = 0;
  num_l < var_c_1.length;
  num_l++) {
  if (!((var_u_1 = var_c_1[num_l]) in obj_n)) {
  obj_n[var_u_1] = {
  bl: [],
  wl: []
  };
  }
  var_u_1 = obj_n[var_u_1];
  if (obj_s.separator === "#@#") {
  if (!obj_s.whitelist) {
  obj_n[""].wl.push(obj_s.selector);
  }
  var_u_1[obj_s.whitelist ? "bl" : "wl"].push(obj_s.selector);
  }
  else {
  var_u_1[obj_s.whitelist ? "wl" : "bl"].push(obj_s.selector);
  }
  }
  }
  else {
  if (!obj_s.url) {
  continue;
  }
  var var_d_1 = obj_s.whitelist === "@@" ? obj_r.wlUrls : obj_r.blUrls;
  try {
  var var_p_1 = this._convertWildcard(obj_s.url);
  var_d_1.push(var_p_1);
  }
  catch (var_e) {
  }
  }
  }
  }
  for (var var_f = Object.keys(obj_n), num_h = 0;
  num_h < var_f.length;
  num_h++) {
  var var_m = var_f[num_h];
  var var_g = obj_n[var_m];
  if (var_g.bl.length) {
  try {
  obj_r.blCosmetics.push({
  domain: this._convertWildcard(var_m),
  selectors: obj_n[var_m].bl
  }
  );
  }
  catch (var_e) {
  }
  }
  if (var_g.wl.length) {
  try {
  obj_r.wlCosmetics.push({
  domain: this._convertWildcard(var_m),
  selectors: obj_n[var_m].wl
  }
  );
  }
  catch (var_e) {
  }
  }
  }
  return obj_r;
  }
  }
  ();
  }
  ).call(this, requireFn(13));
  };
