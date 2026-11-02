// Module 178 [entry] - Service Worker entry point and runtime dispatch
export default function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  (function (global) {
  __webpack_require__.d(__webpack_exports__, "catchError", function () {
  return catchError;
  }
  );
  var _common_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
  var _common_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
  var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(542);
  var _ytdl_ytdl_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(537);
  var _downloads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(456);
  var _common_serp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
  var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
  var _request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(740);
  var _pip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(730);
  var _background_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(124);
  var metrics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
  var utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
  var _common_consts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
  var _ab_testing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43);
  var _common_browser_features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
  11);
  function _createForOfIteratorHelper(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = _unsupportedIterableToArray(param_e)) ||
  param_t && param_e && typeof param_e.length == "number") {
  if (var_r) {
  param_e = var_r;
  }
  var num_n = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_n >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_n++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_s = false;
  return {
  s: function () {
  var_r = var_r.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_r.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_s = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_r.return != null) {
  var_r.return();
  }
  }
  finally {
  if (flag_s) {
  throw var_i;
  }
  }
  }
  };
  }
  function _unsupportedIterableToArray(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return _arrayLikeToArray(param_e, param_t);
  }
  var var_r = {
  }
  .toString.call(param_e).slice(8, -1);
  if (var_r === "Object" && param_e.constructor) {
  var_r = param_e.constructor.name;
  }
  if (var_r === "Map" || var_r === "Set") {
  return Array.from(param_e);
  }
  else if (var_r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_r)) {
  return _arrayLikeToArray(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function _arrayLikeToArray(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_r = 0, var_n = Array(param_t);
  num_r < param_t;
  num_r++) {
  var_n[num_r] = param_e[num_r];
  }
  return var_n;
  }
  function _regenerator() {
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
  var var_u_1 = Object.create(var_c_1.prototype);
  _regeneratorDefine2(var_u_1, "_invoke", function (param_r_1, param_n_1, param_o_1) {
  var var_i_1;
  var var_s_1;
  var var_c_2;
  var num_u = 0;
  var var_l_1 = param_o_1 || [];
  var flag_d = false;
  var obj_p = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_f,
  f: var_f.bind(var_e, 4),
  d: function (param_t, param_r_2) {
  var_i_1 = param_t;
  var_s_1 = 0;
  var_c_2 = var_e;
  obj_p.n = param_r_2;
  return obj_a;
  }
  };
  function var_f(param_r_2, param_n_2) {
  var_s_1 = param_r_2;
  var_c_2 = param_n_2;
  var_t = 0;
  for (;
  !flag_d && num_u && !var_o_1 && var_t < var_l_1.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_l_1[var_t];
  var var_f_1 = obj_p.p;
  var var_h = var_i_2[2];
  if (param_r_2 > 3) {
  if (var_o_1 = var_h === param_n_2) {
  var_c_2 = var_i_2[(var_s_1 = var_i_2[4]) ? 5 : (var_s_1 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_f_1) {
  if (var_o_1 = param_r_2 < 2 && var_f_1 < var_i_2[1]) {
  var_s_1 = 0;
  obj_p.v = param_n_2;
  obj_p.n = var_i_2[1];
  }
  else if (var_f_1 < var_h && (var_o_1 = param_r_2 < 3 || var_i_2[0] > param_n_2 ||
  param_n_2 > var_h)) {
  var_i_2[4] = param_r_2;
  var_i_2[5] = param_n_2;
  obj_p.n = var_h;
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
  var_f(param_l, param_h);
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
  var_f(var_s_1, var_c_2);
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
  return var_u_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_c() {
  }
  function var_u() {
  }
  var_t = Object.getPrototypeOf;
  var var_l = [][var_n] ? var_t(var_t([][var_n]())) : (_regeneratorDefine2(var_t = {
  }
  , var_n, function () {
  return this;
  }
  ), var_t);
  var var_d = var_u.prototype = var_s.prototype = Object.create(var_l);
  function var_p(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_u);
  }
  else {
  param_e.__proto__ = var_u;
  _regeneratorDefine2(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_d);
  return param_e;
  }
  var_c.prototype = var_u;
  _regeneratorDefine2(var_d, "constructor", var_u);
  _regeneratorDefine2(var_u, "constructor", var_c);
  var_c.displayName = "GeneratorFunction";
  _regeneratorDefine2(var_u, var_o, "GeneratorFunction");
  _regeneratorDefine2(var_d);
  _regeneratorDefine2(var_d, var_o, "Generator");
  _regeneratorDefine2(var_d, var_n, function () {
  return this;
  }
  );
  _regeneratorDefine2(var_d, "toString", function () {
  return "[object Generator]";
  }
  );
  return (_regenerator = function () {
  return {
  w: var_i,
  m: var_p
  };
  }
  )();
  }
  function _regeneratorDefine2(param_e, param_t, param_r, param_n) {
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
  (_regeneratorDefine2 = function (param_e_1, param_t_1, param_r_1, param_n_1) {
  function var_i(param_t_2, param_r_2) {
  _regeneratorDefine2(param_e_1, param_t_2, function (param_e_2) {
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
  var_i("next", 0);
  var_i("throw", 1);
  var_i("return", 2);
  }
  }
  )(param_e, param_t, param_r, param_n);
  }
  function __awaiter(param_e, param_t, param_r, param_n) {
  return new (param_r ||= Promise)(function (param_o, param_i) {
  function var_a(param_e_1) {
  try {
  var_c(param_n.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s(param_e_1) {
  try {
  var_c(param_n.throw(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c(param_e_1) {
  var var_t;
  if (param_e_1.done) {
  param_o(param_e_1.value);
  }
  else {
  (var_t = param_e_1.value, var_t instanceof param_r ? var_t :
  new param_r(function (param_e_2) {
  param_e_2(var_t);
  }
  )).then(var_a, var_s);
  }
  }
  var_c((param_n = param_n.apply(param_e, param_t || [])).next());
  }
  );
  }
  var _a;
  var _b;
  var offscreenAvailable = chrome.offscreen && typeof chrome.offscreen.createDocument == "function";
  if (offscreenAvailable) {
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.g)("offscreen.html");
  }
  global.IS_CONTENT_SCRIPT = false;
  var turnedOff = false;
  var openedPanels = new Set();
  var recentlyClosedTabs = new Map();
  var recentlyClosedWindows = new Map();
  var CLOSE_CLICK_GRACE_MS = 150;
  var SIDEPANEL_PORT = "savior-sidepanel";
  var adsblockPlusTurnedOff;
  function markRecentlyClosed(param_e, param_t) {
  var var_r = Date.now();
  if (param_e != null) {
  openedPanels.delete(param_e);
  recentlyClosedTabs.set(param_e, var_r);
  }
  if (param_t != null) {
  recentlyClosedWindows.set(param_t, var_r);
  }
  }
  function consumeRecentClose(param_e, param_t) {
  var var_r = Date.now();
  var var_n = recentlyClosedTabs.get(param_e);
  var var_o = recentlyClosedWindows.get(param_t);
  recentlyClosedTabs.delete(param_e);
  recentlyClosedWindows.delete(param_t);
  return var_n != null && var_r - var_n < CLOSE_CLICK_GRACE_MS ||
  var_o != null && var_r - var_o < CLOSE_CLICK_GRACE_MS;
  }
  if ((_a = chrome.sidePanel) !== null && _a !== undefined) {
  _a.setPanelBehavior({
  openPanelOnActionClick: false
  }
  ).catch(param_e => console.error(param_e));
  }
  chrome.runtime.onConnect.addListener(param_e => {
  var var_t;
  var var_r;
  if (param_e.name === SIDEPANEL_PORT) {
  param_e.onMessage.addListener(param_e_1 => {
  if ((param_e_1 == null ? undefined : param_e_1.tabId) != null) {
  var_t = param_e_1.tabId;
  openedPanels.add(var_t);
  }
  if ((param_e_1 == null ? undefined : param_e_1.windowId) != null) {
  var_r = param_e_1.windowId;
  }
  }
  );
  param_e.onDisconnect.addListener(() => {
  markRecentlyClosed(var_t, var_r);
  }
  );
  }
  }
  );
  chrome.action.onClicked.addListener(param_e => {
  var var_t;
  var var_r;
  var var_n;
  var var_o = param_e.id;
  if (var_o != null) {
  if (consumeRecentClose(var_o, param_e.windowId)) {
  openedPanels.delete(var_o);
  }
  else {
  if (openedPanels.has(var_o)) {
  openedPanels.delete(var_o);
  if ((var_t = chrome.sidePanel) !== null && var_t !== undefined) {
  var_t.close({
  windowId: param_e.windowId
  }
  ).catch(param_e_1 => console.error(param_e_1));
  }
  return;
  }
  openedPanels.add(var_o);
  if ((var_r = chrome.sidePanel) !== null && var_r !== undefined) {
  var_r.setOptions({
  tabId: var_o,
  path: "sidepanel.html",
  enabled: true
  }
  );
  }
  if ((var_n = chrome.sidePanel) !== null && var_n !== undefined) {
  var_n.open({
  tabId: var_o
  }
  ).catch(param_e_1 => console.error(param_e_1));
  }
  }
  }
  }
  );
  if ((_b = chrome.sidePanel) !== null && _b !== undefined) {
  _b.onClosed.addListener(param_e => {
  markRecentlyClosed(param_e.tabId, param_e.windowId);
  }
  );
  }
  chrome.tabs.onRemoved.addListener(param_e => {
  openedPanels.delete(param_e);
  recentlyClosedTabs.delete(param_e);
  }
  );
  try {
  chrome.coccoc.onGetTranscript.addListener(param_e => {
  sendMessage(param_e.tabId, {
  type: "get_transcript",
  data: {
  requestId: param_e.requestId,
  language: param_e.language
  }
  }
  );
  }
  );
  }
  catch (var_e) {
  console.error(var_e);
  }
  function sendMessage(param_e, param_t, param_r) {
  return __awaiter(this, undefined, undefined, _regenerator().m(function var_n() {
  var var_o;
  return _regenerator().w(function (param_n) {
  while (true) {
  switch (param_n.p = param_n.n) {
  case 0:
  param_n.p = 0;
  if (!param_e) {
  param_n.n = 4;
  break;
  }
  if (!param_r && param_r !== 0) {
  param_n.n = 2;
  break;
  }
  param_n.n = 1;
  return chrome.tabs.sendMessage(param_e, param_t, {
  frameId: param_r
  }
  );
  case 1:
  param_n.n = 3;
  break;
  case 2:
  param_n.n = 3;
  return chrome.tabs.sendMessage(param_e, param_t);
  case 3:
  param_n.n = 5;
  break;
  case 4:
  param_n.n = 5;
  return chrome.runtime.sendMessage(param_t);
  case 5:
  param_n.n = 7;
  break;
  case 6:
  param_n.p = 6;
  var_o = param_n.v;
  console.log(var_o);
  case 7:
  return param_n.a(2);
  }
  }
  }
  , var_n, null, [[0, 6]]);
  }
  ));
  }
  function recordAttempTurnOffAdblock(param_e) {
  var var_t;
  var var_r;
  var var_i;
  var var_a;
  if (param_e && !turnedOff) {
  turnedOff = true;
  if ((var_r = (var_t = chrome.coccoc) === null || var_t === undefined ?
  undefined : var_t.mayTurnOffAdblockOnYoutube) !== null && var_r !== undefined) {
  var_r.call(var_t);
  }
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log("ForceDisableAdblockOnYoutube", 1);
  return;
  }
  if (!param_e) {
  var var_s = _common_options__WEBPACK_IMPORTED_MODULE_1__.a.get(_common_consts__WEBPACK_IMPORTED_MODULE_12__.w)?.turn_off_adblock_max_attemp ||
  _common_consts__WEBPACK_IMPORTED_MODULE_12__.g;
  var var_c = _common_options__WEBPACK_IMPORTED_MODULE_1__.a.get(_common_consts__WEBPACK_IMPORTED_MODULE_12__.w)?.turn_off_adblock_duration ||
  _common_consts__WEBPACK_IMPORTED_MODULE_12__.f;
  var var_u = _common_options__WEBPACK_IMPORTED_MODULE_1__.a.get(_common_consts__WEBPACK_IMPORTED_MODULE_12__.z);
  if (!var_u || var_u.startAt + var_c * 60 * 1000 < Date.now()) {
  var_u = {
  retryNo: 0,
  startAt: Date.now()
  };
  }
  var_u.retryNo++;
  _common_options__WEBPACK_IMPORTED_MODULE_1__.a.set(_common_consts__WEBPACK_IMPORTED_MODULE_12__.z,
  var_u);
  if (var_u.retryNo <= var_s) {
  if ((var_a = (var_i = chrome.coccoc) === null || var_i === undefined ?
  undefined : var_i.mayTurnOffAdblockOnYoutube) !== null && var_a !== undefined) {
  var_a.call(var_i);
  }
  }
  }
  }
  var currentAdguardInfo = null;
  function catchError(param_e, param_t = "adguardInject") {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: param_t,
  error: param_e.toString()
  }
  );
  }
  function callServer(param_e) {
  return __awaiter(this, undefined, undefined, _regenerator().m(function var_t() {
  var var_r;
  var var_n;
  return _regenerator().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  var_r = Date.now();
  var_n = !(param_e == null ? undefined : param_e.ruleVersion);
  if (!param_e || !param_e.ruleVersion) {
  param_t.n = 1;
  break;
  }
  param_t.n = 1;
  return fetch("https://browser.coccoc.com/api/v1/youtube/adguard/rules", {
  method: "HEAD"
  }
  ).catch(param_e_1 => {
  catchError(param_e_1, "versionChecking");
  }
  ).then(param_t_1 => {
  if (param_t_1 == null ? undefined : param_t_1.ok) {
  var var_o = param_t_1.headers.get("x-coc-coc-version") || "";
  if (!param_e || !param_e.ruleVersion || var_o <= param_e.ruleVersion) {
  (currentAdguardInfo = param_e).adguardFetchTime = var_r;
  }
  else {
  var_n = true;
  }
  }
  }
  );
  case 1:
  if (var_n) {
  param_t.n = 2;
  break;
  }
  return param_t.a(2);
  case 2:
  param_t.n = 3;
  return fetch("https://browser.coccoc.com/api/v1/youtube/adguard/rules").catch(
  param_e_1 => {
  catchError(param_e_1, "ruleFetching");
  }
  ).then(param_e_1 => {
  if (param_e_1 == null ? undefined : param_e_1.ok) {
  currentAdguardInfo ||= {
  };
  currentAdguardInfo.ruleVersion = param_e_1.headers.get("x-coc-coc-version") ||
  "";
  return param_e_1.text();
  }
  }
  ).then(param_t_1 => {
  currentAdguardInfo = Object.assign(Object.assign({
  }
  , currentAdguardInfo), {
  isAdguardEnabled: true,
  script: param_t_1 || (param_e == null ? undefined : param_e.script),
  adguardFetchTime: var_r
  }
  );
  }
  );
  case 3:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  ));
  }
  function fetchRule(param_e, param_t, param_r) {
  return __awaiter(this, undefined, undefined, _regenerator().m(function var_n() {
  var var_o;
  var var_i;
  return _regenerator().w(function (param_n) {
  while (true) {
  switch (param_n.p = param_n.n) {
  case 0:
  var_o = (param_e == null ? undefined : param_e.isAdguardEnabled) == null ||
  (param_e == null ? undefined : param_e.isAdguardEnabled);
  param_n.p = 1;
  if (!(param_t > 0)) {
  param_n.n = 4;
  break;
  }
  param_n.n = 2;
  return utils__WEBPACK_IMPORTED_MODULE_11__.sleep(param_t);
  case 2:
  param_n.n = 3;
  return callServer(param_e);
  case 3:
  return param_n.a(2);
  case 4:
  param_n.n = 5;
  return callServer(param_e);
  case 5:
  param_n.n = 10;
  break;
  case 6:
  param_n.p = 6;
  param_n.v;
  if (!(param_r >= 3)) {
  param_n.n = 9;
  break;
  }
  if (!param_e.script) {
  param_n.n = 7;
  break;
  }
  currentAdguardInfo = Object.assign(Object.assign({
  }
  , param_e), {
  adguardFetchTime: Date.now()
  }
  );
  return param_n.a(2);
  case 7:
  param_n.n = 8;
  return fetch(chrome.runtime.getURL("adguard_base_rules.js")).catch(param_e_1 => {
  catchError(param_e_1, "baseRuleFetching");
  }
  ).then(param_e_1 => {
  if (param_e_1 == null ? undefined : param_e_1.ok) {
  return param_e_1.text();
  }
  }
  ).then(param_t_1 => {
  currentAdguardInfo = Object.assign(Object.assign({
  }
  , param_e), {
  isAdguardEnabled: var_o,
  script: param_t_1,
  adguardFetchTime: Date.now()
  }
  );
  }
  );
  case 8:
  return param_n.a(2);
  case 9:
  var_i = param_t === 0 ? 2000 : param_t * 2;
  param_n.n = 10;
  return fetchRule(param_e, var_i, param_r + 1);
  case 10:
  return param_n.a(2);
  }
  }
  }
  , var_n, null, [[1, 6]]);
  }
  ));
  }
  var infoLogged = false;
  function getLogData() {
  return __awaiter(this, undefined, undefined, _regenerator().m(function var_o() {
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_u;
  return _regenerator().w(function (param_o) {
  while (true) {
  switch (param_o.n) {
  case 0:
  var_i = currentAdguardInfo ? Object.assign(Object.assign({
  }
  , currentAdguardInfo), {
  script: currentAdguardInfo.script?.length
  }
  ) : null;
  param_o.n = 1;
  return chrome.storage.local.get();
  case 1:
  var_a = param_o.v;
  var_s = var_a.adguardInfo;
  var_c = var_a.otherControls?.ab_test_data?.adguard_yt;
  var_u = var_s ? Object.assign(Object.assign({
  }
  , var_s), {
  script: var_s.script?.length
  }
  ) : null;
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "logDataAguard",
  current: JSON.stringify(var_i),
  ab: JSON.stringify(var_c),
  store: JSON.stringify(var_u)
  }
  );
  case 2:
  return param_o.a(2);
  }
  }
  }
  , var_o);
  }
  ));
  }
  function logAdguardInfo() {
  chrome.runtime.sendMessage({
  type: "check_info_logged"
  }
  , param_e => __awaiter(this, undefined, undefined, _regenerator().m(function var_t(
  ) {
  return _regenerator().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  if (!(infoLogged = param_e.adguardInfoLogged)) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2);
  case 1:
  getLogData();
  infoLogged = true;
  case 2:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  )));
  setTimeout(() => {
  if (!infoLogged) {
  getLogData();
  }
  }
  , 3000);
  infoLogged = true;
  }
  function getAdguardStatusOffscreen() {
  return __awaiter(this, undefined, undefined, _regenerator().m(function var_e() {
  return _regenerator().w(function (param_e) {
  while (true) {
  switch (param_e.n) {
  case 0:
  return param_e.a(2, new Promise(param_e_1 => {
  chrome.runtime.sendMessage({
  type: "update_adguard_status"
  }
  , param_t => {
  if ((param_t == null ? undefined : param_t.isAdguardEnabled) == null) {
  param_e_1(true);
  }
  else {
  param_e_1(false);
  }
  }
  );
  }
  ));
  }
  }
  }
  , var_e);
  }
  ));
  }
  function logAdguardStatus() {
  var flag_e = false;
  chrome.runtime.sendMessage({
  type: "adguard_on_logged"
  }
  , param_t => {
  flag_e = true;
  if (!(param_t == null ? undefined : param_t.adguardOnLogged)) {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_ON);
  }
  }
  );
  setTimeout(() => {
  if (!flag_e) {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_NO_OFFSCREEN);
  }
  }
  , 3000);
  }
  _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.processRequest({
  testName: "adguard_yt"
  }
  ).then(param_e => __awaiter(undefined, undefined, undefined, _regenerator().m(
  function var_t() {
  var var_r;
  return _regenerator().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  var_r = function (param_e_1) {
  var var_t_1 = utils__WEBPACK_IMPORTED_MODULE_11__.youtubeAdsblockedRules.some(
  param_t_1 => {
  var var_r_2;
  var var_n = param_t_1.regex.test(param_e_1.url);
  var var_o = param_t_1.type == param_e_1.type;
  var var_i = Array.isArray(param_t_1.initiators) ? param_t_1.initiators.some(param_t_2 => {
  var var_r_3;
  if ((var_r_3 = param_e_1.initiator) === null || var_r_3 === undefined) {
  return undefined;
  }
  else {
  return var_r_3.includes(param_t_2);
  }
  }
  ) : (var_r_2 = param_e_1.initiator) === null || var_r_2 === undefined ?
  undefined : var_r_2.includes(param_t_1.initiators);
  return var_n && var_o && var_i;
  }
  );
  var var_r_1 = param_e_1.tabId;
  if (var_t_1 && var_r_1) {
  chrome.eyeoFilteringPrivate.addTabBlockedCount(var_r_1, 1);
  }
  };
  if (param_e.groupName && _common_browser_features__WEBPACK_IMPORTED_MODULE_14__.a.ADGUARD_SWITCHER) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2);
  case 1:
  if (_common_browser_features__WEBPACK_IMPORTED_MODULE_14__.a.ADGUARD_SWITCHER) {
  chrome.webRequest.onBeforeRequest.addListener(param_e_1 => {
  var_r(param_e_1);
  }
  , {
  urls: ["<all_urls>"]
  }
  );
  chrome.eyeoFilteringPrivate.onCoccocAllowedDomainsChanged.addListener(function (
  param_e_1, param_t_1) {
  if (currentAdguardInfo && param_e_1.includes("youtube.com")) {
  if (param_t_1) {
  currentAdguardInfo.isAdguardEnabled = false;
  var_r_1(false);
  }
  else {
  currentAdguardInfo.isAdguardEnabled = true;
  var_r_1(true);
  }
  }
  function var_r_1(param_e_2) {
  chrome.storage.local.get("adguardInfo", param_t_2 => {
  var var_r_2 = param_t_2.adguardInfo || {
  };
  var var_n = Object.assign(Object.assign({
  }
  , var_r_2), {
  isAdguardEnabled: param_e_2
  }
  );
  chrome.storage.local.set({
  adguardInfo: var_n
  }
  );
  }
  );
  }
  }
  );
  }
  chrome.storage.local.get("adguardInfo", param_e_1 => __awaiter(undefined, undefined,
  undefined, _regenerator().m(function var_t_1() {
  var var_r_1;
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  return _regenerator().w(function (param_t_1) {
  while (true) {
  switch (param_t_1.p = param_t_1.n) {
  case 0:
  param_t_1.p = 0;
  var_r_1 = param_e_1.adguardInfo || {
  };
  var_n = (var_r_1 == null ? undefined : var_r_1.adguardFetchTime) ||
  0;
  var_o = (var_r_1 == null ? undefined : var_r_1.isAdguardEnabled) == null ||
  (var_r_1 == null ? undefined : var_r_1.isAdguardEnabled);
  var_i = Date.now();
  if (!(Math.abs(var_i - var_n) > 28800000)) {
  param_t_1.n = 2;
  break;
  }
  param_t_1.n = 1;
  return fetchRule(var_r_1, 0, 0);
  case 1:
  if (currentAdguardInfo) {
  chrome.storage.local.set({
  adguardInfo: currentAdguardInfo
  }
  );
  }
  case 2:
  currentAdguardInfo ||= var_r_1 ? Object.assign({
  }
  , var_r_1) : {
  isAdguardEnabled: var_o
  };
  param_t_1.n = 4;
  break;
  case 3:
  param_t_1.p = 3;
  var_a = param_t_1.v;
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "adguardInject",
  error: var_a == null ? undefined : var_a.toString()
  }
  );
  case 4:
  return param_t_1.a(2);
  }
  }
  }
  , var_t_1, null, [[0, 3]]);
  }
  )));
  case 2:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  )));
  var injectedTabs = new Set();
  function executeScript(details) {
  return __awaiter(this, undefined, undefined, _regenerator().m(function _callee9(
  ) {
  var tabId;
  var tabs;
  var neededTab;
  var script;
  var _t5;
  return _regenerator().w(function (_context9) {
  while (true) {
  switch (_context9.p = _context9.n) {
  case 0:
  _context9.p = 0;
  tabId = details == null ? undefined : details.tabId;
  if (tabId) {
  _context9.n = 3;
  break;
  }
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_NO_TAB_ID);
  _context9.n = 1;
  return chrome.tabs.query({
  currentWindow: true
  }
  );
  case 1:
  tabs = _context9.v;
  neededTab = tabs.find(param_e => {
  var var_t;
  return ((var_t = param_e.url) === null || var_t === undefined ?
  undefined : var_t.includes("youtube.com")) && param_e.status === "loading" &&
  !injectedTabs.has(param_e.id);
  }
  );
  if (neededTab) {
  _context9.n = 2;
  break;
  }
  return _context9.a(2);
  case 2:
  tabId = neededTab.id;
  case 3:
  injectedTabs.add(tabId);
  if (currentAdguardInfo && currentAdguardInfo.script) {
  _context9.n = 5;
  break;
  }
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_NO_SCRIPT);
  _context9.n = 4;
  return fetch(chrome.runtime.getURL("adguard_base_rules.js")).then(param_e => param_e.text(
  ));
  case 4:
  script = _context9.v;
  currentAdguardInfo ||= {
  };
  currentAdguardInfo.script = script;
  case 5:
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_SCRIPTING);
  chrome.scripting.executeScript({
  target: {
  tabId: tabId,
  frameIds: [0]
  }
  ,
  injectImmediately: true,
  world: chrome.scripting.ExecutionWorld.MAIN,
  args: [currentAdguardInfo == null ? undefined : currentAdguardInfo.script],
  func: args => {
  try {
  window.trustedTypes.createPolicy("default", {
  createScript: function (param_e) {
  return param_e;
  }
  }
  );
  }
  catch (var_e) {
  console.log(var_e);
  }
  var injectCode = window.trustedTypes.defaultPolicy.createScript(args);
  eval(injectCode);
  }
  }
  ).then(() => {
  logAdguardStatus();
  }
  );
  _context9.n = 7;
  break;
  case 6:
  _context9.p = 6;
  _t5 = _context9.v;
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "adguardInject",
  error: _t5 == null ? undefined : _t5.toString()
  }
  );
  case 7:
  return _context9.a(2);
  }
  }
  }
  , _callee9, null, [[0, 6]]);
  }
  ));
  }
  function injectScript(details) {
  var promise;
  if (details.frameId === 0 && !_common_consts__WEBPACK_IMPORTED_MODULE_12__.j.some(
  param_e => details.url.includes(param_e)) && !_common_consts__WEBPACK_IMPORTED_MODULE_12__.m.some(
  param_e => details.url.includes(param_e))) {
  if (!currentAdguardInfo) {
  promise = chrome.storage.local.get("adguardInfo");
  }
  _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.processRequest({
  testName: "adguard_yt"
  }
  ).then(abTest => __awaiter(this, undefined, undefined, _regenerator().m(function _callee0(
  ) {
  var allowedDomain;
  var adguardStatusOffscreen;
  var _t6;
  var _t7;
  return _regenerator().w(function (_context0) {
  while (true) {
  switch (_context0.p = _context0.n) {
  case 0:
  _context0.p = 0;
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_HAS_EVENT);
  if (!promise) {
  _context0.n = 3;
  break;
  }
  _context0.n = 1;
  return promise;
  case 1:
  _t6 = _context0.v.adguardInfo;
  if (_t6) {
  _context0.n = 2;
  break;
  }
  _t6 = {
  };
  case 2:
  currentAdguardInfo = _t6;
  case 3:
  if (abTest.groupName && chrome.coccoc?.shouldBlockAdsOnYoutubeBySavior &&
  _common_browser_features__WEBPACK_IMPORTED_MODULE_14__.a.ADGUARD_SWITCHER) {
  _context0.n = 4;
  break;
  }
  return _context0.a(2);
  case 4:
  try {
  chrome.scripting.executeScript({
  target: {
  tabId: details.tabId,
  frameIds: [0]
  }
  ,
  injectImmediately: true,
  world: chrome.scripting.ExecutionWorld.MAIN,
  args: [_common_consts__WEBPACK_IMPORTED_MODULE_12__.a],
  func: args => {
  try {
  window.trustedTypes.createPolicy("default", {
  createScript: function (param_e) {
  return param_e;
  }
  }
  );
  }
  catch (var_e) {
  console.log(var_e);
  }
  var injectCode = window.trustedTypes.defaultPolicy.createScript(args);
  eval(injectCode);
  }
  }
  );
  }
  catch (var_e) {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "adguardInject",
  error: var_e == null ? undefined : var_e.toString()
  }
  );
  }
  _context0.n = 5;
  return chrome.eyeoFilteringPrivate.getAllowedDomains("adblock");
  case 5:
  allowedDomain = _context0.v;
  if (!allowedDomain.includes("youtube.com")) {
  _context0.n = 6;
  break;
  }
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "disabledAdblock"
  }
  );
  return _context0.a(2);
  case 6:
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_IS_GROUP_TEST);
  if (!currentAdguardInfo || (currentAdguardInfo == null ? undefined :
  currentAdguardInfo.isAdguardEnabled)) {
  _context0.n = 8;
  break;
  }
  _context0.n = 7;
  return getAdguardStatusOffscreen();
  case 7:
  adguardStatusOffscreen = _context0.v;
  currentAdguardInfo.isAdguardEnabled = adguardStatusOffscreen;
  chrome.storage.local.set({
  adguardInfo: currentAdguardInfo
  }
  );
  case 8:
  try {
  logAdguardInfo();
  }
  catch (var_e) {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "adguardInject",
  error: var_e == null ? undefined : var_e.toString()
  }
  );
  }
  if (currentAdguardInfo == null ? undefined : currentAdguardInfo.isAdguardEnabled) {
  executeScript(details);
  }
  chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(param_e => {
  var var_t;
  var var_r;
  try {
  if (!adsblockPlusTurnedOff) {
  adsblockPlusTurnedOff = true;
  if (param_e == 0) {
  if ((var_r = (var_t = chrome.coccoc) === null || var_t === undefined ?
  undefined : var_t.mayTurnOffAdblockOnYoutube) !== null && var_r !== undefined) {
  var_r.call(var_t);
  }
  }
  chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(param_e_1 => {
  if (!param_e_1) {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_API_ERROR_TURN_OFF_ABP);
  }
  }
  );
  }
  }
  catch (var_e) {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "adguardInject",
  error: var_e.toString()
  }
  );
  }
  }
  );
  _context0.n = 10;
  break;
  case 9:
  _context0.p = 9;
  _t7 = _context0.v;
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest({
  action: "adguardInject",
  error: _t7 == null ? undefined : _t7.toString()
  }
  );
  case 10:
  return _context0.a(2);
  }
  }
  }
  , _callee0, null, [[0, 9]]);
  }
  )));
  }
  }
  chrome.webNavigation.onCommitted.addListener(param_e => {
  if (param_e.url.includes("youtube.com")) {
  injectScript(param_e);
  }
  }
  );
  chrome.webRequest.onResponseStarted.addListener(param_e => {
  if (param_e.type === "main_frame" || param_e.type === "sub_frame") {
  injectScript(param_e);
  }
  }
  , {
  urls: ["https://www.youtube.com/*"]
  }
  );
  chrome.storage.onChanged.addListener((param_e, param_t) => {
  if (param_t == "local") {
  var var_n = param_e.adguardInfo?.newValue;
  if (var_n) {
  currentAdguardInfo = Object.assign(Object.assign({
  }
  , currentAdguardInfo), var_n);
  chrome.runtime.sendMessage({
  type: "update_adguard_status",
  isAdguardEnabled: var_n.isAdguardEnabled
  }
  );
  }
  }
  }
  );
  var hasDataUserBeforeSidepanel = false;
  function countStreak(param_e, param_t) {
  var var_r;
  chrome.storage.local.get(["onboardTrack"], param_e_1 => {
  var_r = param_e_1.onboardTrack || {
  };
  }
  );
  var var_n = Date.now();
  chrome.storage.local.get(["lastOnlineDay", "streakCount", "onboardTrack", "userBeforeSidepanel"],
  param_o => {
  if (!hasDataUserBeforeSidepanel && !param_o.userBeforeSidepanel) {
  if (param_o.lastOnlineDay) {
  chrome.storage.local.set({
  userBeforeSidepanel: true
  }
  );
  hasDataUserBeforeSidepanel = true;
  }
  else {
  chrome.storage.local.set({
  userBeforeSidepanel: false
  }
  );
  hasDataUserBeforeSidepanel = true;
  }
  }
  var var_i = param_o.lastOnlineDay || var_n;
  var var_a = param_o.streakCount || 0;
  var var_s = new Date(var_n).setHours(0, 0, 0, 0) - new Date(var_i).setHours(0,
  0, 0, 0);
  if (var_s === 86400000) {
  var_a++;
  }
  else if (var_s !== 0) {
  var_a = 0;
  }
  var var_c = (param_o.onboardTrack || {
  }
  ).coccocMobileBase || {
  };
  if ((var_a >= 4 || var_c.lastShow) && param_t == 0) {
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.e)({
  data: var_r.coccocMobileBase,
  onboardingType: "coccocMobileBase",
  currentTabId: param_e
  }
  );
  }
  chrome.storage.local.set({
  lastOnlineDay: var_n,
  streakCount: var_a
  }
  );
  }
  );
  }
  function onExternalRequest(param_e, param_t, param_r) {
  if (!param_e || param_t.tab && param_t.tab.index === -1) {
  console.warn("Empty external request");
  param_r({
  status: "error",
  error_message: "empty_request"
  }
  );
  return;
  }
  switch (param_e.action) {
  case "pip_url":
  EE.emit("pipRequest", {
  method: "pipUrl",
  params: param_e.params
  }
  );
  param_r({
  status: "ok"
  }
  );
  break;
  case "custom_metrics3":
  if (typeof param_e.data != "object" || !Object.keys(param_e.data).length) {
  param_r({
  status: "error",
  error_message: "bad_data"
  }
  );
  return;
  }
  if (param_e.key === undefined || typeof param_e.key != "string") {
  param_r({
  status: "error",
  error_message: "bad_key"
  }
  );
  return;
  }
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log("recordCustomData", [{
  key: param_e.key,
  value: JSON.stringify(param_e.data)
  }
  ]);
  param_r({
  status: "ok"
  }
  );
  break;
  case "adguard_injected":
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.log(_common_consts__WEBPACK_IMPORTED_MODULE_12__.t,
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.YOUTUBE_ADGUARD_REGISTER_INJECT);
  logAdguardStatus();
  break;
  case "get_serp_config":
  chrome.storage.local.get(param_e_1 => {
  param_r({
  status: "ok",
  data: {
  gserpSelectors: param_e_1.gserpSelectors,
  customControlFromServer: param_e_1.otherControls.ab_test_data
  }
  }
  );
  }
  );
  return true;
  }
  }
  _common_options__WEBPACK_IMPORTED_MODULE_1__.a.load().then(() => {
  var var_e;
  _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.loadTestsFromServer();
  _templates__WEBPACK_IMPORTED_MODULE_2__.a.load();
  chrome.storage.local.get(["onboardTrack"], param_t => {
  var_e = param_t.onboardTrack || {
  };
  }
  );
  chrome.tabs.onUpdated.addListener((param_e, param_t, param_r) => __awaiter(undefined,
  undefined, undefined, _regenerator().m(function var_n() {
  return _regenerator().w(function (param_n) {
  while (true) {
  switch (param_n.n) {
  case 0:
  if (_common_serp__WEBPACK_IMPORTED_MODULE_5__.b && _common_serp__WEBPACK_IMPORTED_MODULE_5__.b.isYSERPHref(
  param_r.url) && param_t.status === "complete" && param_r.active) {
  EE.emit("yserp_matched", param_e);
  }
  case 1:
  return param_n.a(2);
  }
  }
  }
  , var_n);
  }
  )));
  chrome.webRequest.onCompleted.addListener(param_e => __awaiter(undefined, undefined,
  undefined, _regenerator().m(function var_t() {
  return _regenerator().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  if (!param_e.url.startsWith("chrome-extension://" + chrome.runtime.id)) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2);
  case 1:
  if (!(param_e.statusCode < 400)) {
  param_t.n = 2;
  break;
  }
  return param_t.a(2);
  case 2:
  param_t.n = 3;
  return chrome.tabs.get(param_e.tabId);
  case 3:
  if (param_t.v.url === param_e.url) {
  param_t.n = 4;
  break;
  }
  return param_t.a(2);
  case 4:
  chrome.scripting.executeScript({
  target: {
  tabId: param_e.tabId
  }
  ,
  files: ["cleanup.js"]
  }
  );
  case 5:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  )), {
  urls: ["<all_urls>"],
  types: ["main_frame"]
  }
  );
  try {
  chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [999999],
  addRules: []
  }
  );
  }
  catch (var_e_1) {
  }
  var obj_t = {
  };
  chrome.webNavigation.onBeforeNavigate.addListener(param_e => {
  var var_r_1 = `${param_e.tabId}
  _${param_e.frameId}
  `;
  obj_t[var_r_1] ||= [];
  obj_t[var_r_1].push(param_e.url);
  }
  );
  chrome.tabs.onRemoved.addListener(param_e => {
  Object.keys(obj_t).forEach(param_r => {
  if (param_r.startsWith(param_e + "_")) {
  delete obj_t[param_r];
  }
  }
  );
  }
  );
  var var_r = new Map();
  chrome.runtime.onMessage.addListener(function (param_n, param_o, param_i) {
  var var_p;
  var var_b;
  var var_w;
  var var_E;
  return __awaiter(this, undefined, undefined, _regenerator().m(function var_T() {
  var var_k;
  var var_A;
  var var_C;
  var var_x;
  var var_S;
  var var_O;
  var var_I;
  var var_L;
  var var_R;
  var var_P;
  var var_B;
  var var_M;
  var var_F;
  var var_U;
  var var_N;
  var var_j;
  var var_q;
  var var_H;
  var var_V;
  var var_W;
  var var_z;
  var var_Y;
  var var_G;
  var var_Q;
  var var_$;
  var var_K;
  var var_X;
  var var_Z;
  var var_J;
  var ee;
  var te;
  var re;
  var ne;
  var oe;
  var ie;
  var ae;
  var se;
  var ce;
  var ue;
  var le;
  return _regenerator().w(function (param_T) {
  while (true) {
  switch (param_T.p = param_T.n) {
  case 0:
  var_k = param_o.tab?.id || 0;
  oe = param_n.type;
  param_T.n = oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.RETURN_TRANSCRIPT ?
  1 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PROMOTE_SERP._ ?
  2 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PROMOTE_SERP.GET ?
  3 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PROMOTE_SERP.CLOSE ?
  4 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.ONBOARD_TRACK.GET ?
  5 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.DOWNLOAD ?
  6 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PLAY ?
  8 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SET_FEATURE ?
  9 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_FEATURE ?
  10 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.IS_SUPPORTED ?
  13 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_ABTEST ?
  15 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.ONBOARD_TRACK.SAVE ?
  17 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.FRAME_TYPE ?
  18 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.YOUTUBE.GET_INFO ?
  21 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.FETCH ?
  22 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.YOUTUBE.GET_MPD ?
  26 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OMNI.ACTIVE ?
  30 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OMNI.DEACTIVE ?
  31 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_URL ?
  32 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.METRICS ?
  33 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CACHE ?
  34 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.EVENTENOUGHTIME ?
  35 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GETVIDTIME ?
  36 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.INNER ?
  37 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.REQUEST ?
  38 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CONSOLE_LOG ?
  39 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_MATCHED_REQUESTS ?
  40 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_SERVER_TIME ?
  41 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_FB_SAVED_URL ?
  42 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SCRIPTING.EXEC ?
  43 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SCRIPTING.INJECT ?
  44 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SCRIPTING.NOTIFY ?
  48 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CHECK_URL_CHANGED ?
  49 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OPEN_SEARCH_SETTINGS ?
  50 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OPEN_SETTINGS ?
  51 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.TURN_OFF_ADBLOCK_ON_YOUTUBE ?
  52 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.TURN_ON_ADBLOCK_ON_YOUTUBE ?
  53 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.OPEN_SIDEPANEL ?
  54 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_FASTFORWARD_ENABLED ?
  55 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_ADBLOCK_STATUS ?
  56 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.ON.ENTER ?
  63 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.PIP.ON.LEAVE ?
  64 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SET_AS_DEFAULT_BROWSER ?
  65 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CORS_FETCH ?
  66 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.CHECK_URL ?
  75 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.GET_COOKIES ?
  80 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SKIP_VIDEO ?
  81 : oe === _common_consts__WEBPACK_IMPORTED_MODULE_12__.b.SEND_REQUEST ?
  83 : 86;
  break;
  case 1:
  try {
  chrome.coccoc.sendYtVideoTranscript({
  requestId: param_n.data.requestId,
  transcript: param_n.data.transcript || ""
  }
  );
  }
  catch (var_e_1) {
  console.error(var_e_1);
  }
  return param_T.a(3, 86);
  case 2:
  chrome.cookies.get({
  url: "https://coccoc.com",
  name: "coccoc_office"
  }
  , param_e => {
  var obj_t_1 = {
  type: "promote_serp_result"
  };
  if (param_e && param_e.value === "1") {
  obj_t_1.data = true;
  }
  else {
  obj_t_1.data = false;
  }
  sendMessage(var_k, obj_t_1);
  }
  );
  return param_T.a(3, 86);
  case 3:
  chrome.storage.local.get(["is_promote_serp_closed"], param_e => {
  sendMessage(var_k, {
  type: "get_promote_serp_result",
  data: param_e.is_promote_serp_closed
  }
  );
  }
  );
  return param_T.a(3, 86);
  case 4:
  chrome.storage.local.set({
  is_promote_serp_closed: 1
  }
  );
  return param_T.a(3, 86);
  case 5:
  sendMessage(var_k, {
  type: "onboard_track_result",
  data: var_e[(param_n == null ? undefined : param_n.params)?.site ||
  {
  }
  ]
  }
  );
  return param_T.a(3, 86);
  case 6:
  param_T.n = 7;
  return _downloads__WEBPACK_IMPORTED_MODULE_4__.a.processRequest(param_o.tab?.id,
  param_n.data.method, param_n.data.params, param_o.tab);
  case 7:
  ie = param_T.v;
  sendMessage(var_k, {
  type: "download.result",
  data: ie
  }
  );
  return param_T.a(3, 86);
  case 8:
  _downloads__WEBPACK_IMPORTED_MODULE_4__.a.play(param_n.id);
  return param_T.a(3, 86);
  case 9:
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.a)(param_n, param_o);
  return param_T.a(3, 86);
  case 10:
  if (var_e[param_n.onboardType]?.rendering) {
  param_T.n = 12;
  break;
  }
  var_e[param_n.onboardType] = {
  rendering: true
  };
  param_T.n = 11;
  return Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.b)(param_n);
  case 11:
  var_A = param_T.v;
  case 12:
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: (var_A == null ? undefined : var_A.configurations)?.additionalProperties
  }
  }
  );
  return param_T.a(3, 86);
  case 13:
  param_T.n = 14;
  return Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.c)(param_n, param_o);
  case 14:
  var_C = param_T.v;
  sendMessage(var_k, var_C, param_o.frameId);
  return param_T.a(3, 86);
  case 15:
  param_T.n = 16;
  return _ab_testing__WEBPACK_IMPORTED_MODULE_13__.a.processRequest(param_n);
  case 16:
  var_x = param_T.v;
  var_S = {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: var_x
  }
  };
  sendMessage(var_k, var_S, param_o.frameId || 0);
  return param_T.a(3, 86);
  case 17:
  var_e[param_n.params.site] = param_n.params.data;
  chrome.storage.local.set({
  onboardTrack: var_e
  }
  );
  return param_T.a(3, 86);
  case 18:
  countStreak(param_o.tab?.id, param_o.frameId);
  var_O = _common_consts__WEBPACK_IMPORTED_MODULE_12__.p.filter(param_e => param_e.constructor.toString(
  ).includes("RegExp()"));
  var_I = _common_consts__WEBPACK_IMPORTED_MODULE_12__.h.filter(param_e => param_e.constructor.toString(
  ).includes("RegExp()"));
  if (var_O.some(param_e => {
  var var_t;
  if ((var_t = param_o.url) === null || var_t === undefined) {
  return undefined;
  }
  else {
  return var_t.match(param_e);
  }
  }
  ) || param_o.frameId !== 0 && !var_I.some(param_e => {
  var var_t;
  if ((var_t = param_o.url) === null || var_t === undefined) {
  return undefined;
  }
  else {
  return var_t.match(param_e);
  }
  }
  )) {
  param_T.n = 20;
  break;
  }
  if (!((var_p = param_o.origin) === null || var_p === undefined ?
  undefined : var_p.includes("wattpad"))) {
  param_T.n = 19;
  break;
  }
  setTimeout(() => {
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.d)({
  tabId: var_k,
  frameId: param_o.frameId
  }
  );
  }
  , 2000);
  return param_T.a(3, 86);
  case 19:
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.d)({
  tabId: var_k,
  frameId: param_o.frameId
  }
  );
  case 20:
  return param_T.a(3, 86);
  case 21:
  try {
  chrome.storage.local.get("timeout", param_e => __awaiter(this, undefined, undefined,
  _regenerator().m(function var_e_1() {
  var var_t;
  var var_r_1;
  return _regenerator().w(function (param_e_1) {
  while (true) {
  switch (param_e_1.n) {
  case 0:
  param_e_1.n = 1;
  return Object(_ytdl_ytdl_index__WEBPACK_IMPORTED_MODULE_3__.a)(param_n.data.url);
  case 1:
  var_t = param_e_1.v;
  (var_r_1 = {
  type: "youtube_get_info",
  data: var_t
  }
  ).data.url = param_n.data.url;
  sendMessage(var_k, var_r_1);
  case 2:
  return param_e_1.a(2);
  }
  }
  }
  , var_e_1);
  }
  )));
  }
  catch (var_e_1) {
  console.log("Caught", var_e_1);
  sendMessage(var_k, {
  type: "youtube_get_info",
  data: {
  url: param_n.data.url
  }
  }
  );
  }
  return param_T.a(3, 86);
  case 22:
  param_T.p = 22;
  param_T.n = 23;
  return utils__WEBPACK_IMPORTED_MODULE_11__.send(param_n.data.method, param_n.data.url,
  param_n.data.params, param_n.data.headers, param_n.data.includeCredentials, param_n.data.paramType);
  case 23:
  var_R = param_T.v;
  var_L = {
  type: "background_request_result",
  data: {
  success: "resolve",
  id: param_n.data.id,
  response: var_R
  }
  };
  param_T.n = 25;
  break;
  case 24:
  param_T.p = 24;
  ae = param_T.v;
  var_L = {
  type: "background_request_result",
  data: {
  success: "reject",
  id: param_n.data.id,
  response: ae
  }
  };
  case 25:
  sendMessage(var_k, var_L);
  return param_T.a(3, 86);
  case 26:
  param_T.p = 26;
  param_T.n = 27;
  return utils__WEBPACK_IMPORTED_MODULE_11__.send(param_n.data.method, param_n.data.url,
  param_n.data.params, param_n.data.headers, param_n.data.includeCredentials);
  case 27:
  var_B = param_T.v;
  var_M = var_B.responseText;
  var_P = {
  type: "youtube_set_mpd_info",
  data: {
  success: "resolve",
  response: var_M
  }
  };
  param_T.n = 29;
  break;
  case 28:
  param_T.p = 28;
  se = param_T.v;
  var_P = {
  type: "youtube_set_mpd_info",
  data: {
  success: "reject",
  response: se
  }
  };
  case 29:
  sendMessage(var_k, var_P);
  return param_T.a(3, 86);
  case 30:
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.e)({
  data: var_e.sidepanel,
  onboardingType: "sidepanel",
  currentTabId: var_k
  }
  );
  if (chrome.action) {
  chrome.action.enable(param_o.tab?.id);
  }
  else {
  chrome.pageAction.show(var_k);
  }
  return param_T.a(3, 86);
  case 31:
  if (chrome.action) {
  chrome.action.disable(param_o.tab?.id);
  }
  else {
  chrome.pageAction.hide(var_k);
  }
  return param_T.a(3, 86);
  case 32:
  chrome.webNavigation.getAllFrames({
  tabId: var_k
  }
  , param_e => {
  var var_u = param_e || [];
  var list_l = [];
  if (param_n.params?.parentTargetUrl) {
  var var_d;
  var var_p_1 = _createForOfIteratorHelper(var_u);
  try {
  for (var_p_1.s();
  !(var_d = var_p_1.n()).done;
  ) {
  var var_f = var_d.value;
  if (var_f.url == param_n.params?.parentTargetUrl) {
  param_n.params.parentTargetFrame = var_f.frameId;
  }
  }
  }
  catch (var_e_1) {
  var_p_1.e(var_e_1);
  }
  finally {
  var_p_1.f();
  }
  }
  var var_h;
  var var_m = _createForOfIteratorHelper(var_u);
  try {
  function var_g() {
  var var_e_1 = var_h.value;
  if (var_e_1.frameId !== 0) {
  if ((!param_n.params?.targetUrl || var_e_1.url == param_n.params?.targetUrl) &&
  (!param_n.params?.parentTargetFrame || var_e_1.parentFrameId == param_n.params?.parentTargetFrame)) {
  list_l.push(new Promise(param_t => {
  try {
  chrome.tabs.sendMessage(var_k, Object.assign({
  type: "get_inner_data",
  id: param_n.id
  }
  , (param_n == null ? undefined : param_n.params) || {
  }
  ), {
  frameId: var_e_1.frameId
  }
  , param_e_1 => param_t(param_e_1));
  }
  catch (var_e_2) {
  param_t(undefined);
  }
  }
  ));
  }
  }
  }
  for (var_m.s();
  !(var_h = var_m.n()).done;
  ) {
  var_g();
  }
  }
  catch (var_e_1) {
  var_m.e(var_e_1);
  }
  finally {
  var_m.f();
  }
  Promise.all(list_l).then(param_e_1 => {
  var var_t = param_e_1.find(param_e_2 => param_e_2 && param_e_2.data);
  if (var_t) {
  sendMessage(var_k, {
  type: "return_inner_data",
  data: var_t
  }
  , param_o.frameId || 0);
  }
  else {
  param_e_1[0] = param_e_1[0] || {
  id: param_n.id
  };
  sendMessage(var_k, {
  type: "return_inner_data",
  data: param_e_1[0]
  }
  , param_o.frameId || null);
  }
  }
  );
  }
  );
  return param_T.a(3, 86);
  case 33:
  if (param_n.method === "log") {
  var_F = param_n.params;
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logFromContentScript(var_F.name, var_F.value);
  }
  else if (param_n.method === "log_request") {
  metrics__WEBPACK_IMPORTED_MODULE_10__.a.logRequest(param_n.params);
  }
  return param_T.a(3, 86);
  case 34:
  var_U = _cache__WEBPACK_IMPORTED_MODULE_6__.a.processRequest(param_n.data.method,
  param_n.data.params);
  if (param_n.data.method === "get") {
  if (var_U != null) {
  var_U.then(param_e => ({
  type: "cache.background.hit",
  data: {
  id: param_n.data.id,
  result: param_e
  }
  }
  )).catch(() => ({
  type: "cache.background.miss",
  data: {
  id: param_n.data.id
  }
  }
  )).then(param_e => sendMessage(var_k, param_e));
  }
  }
  return param_T.a(3, 86);
  case 35:
  chrome.webNavigation.getAllFrames({
  tabId: var_k
  }
  , param_e => {
  var var_t;
  var var_r_1 = _createForOfIteratorHelper(param_e || []);
  try {
  for (var_r_1.s();
  !(var_t = var_r_1.n()).done;
  ) {
  var var_o = var_t.value;
  if (var_o.parentFrameId == -1) {
  chrome.tabs.sendMessage(var_k, Object.assign(Object.assign({
  }
  , param_n.params), {
  type: "media_enough_time"
  }
  ), {
  frameId: var_o.frameId
  }
  );
  }
  }
  }
  catch (var_e_1) {
  var_r_1.e(var_e_1);
  }
  finally {
  var_r_1.f();
  }
  }
  );
  return param_T.a(3, 86);
  case 36:
  chrome.webNavigation.getAllFrames({
  tabId: var_k
  }
  , param_e => {
  var var_t;
  var var_r_1 = param_e || [];
  var var_o = param_n.params.url;
  var var_i = _createForOfIteratorHelper(var_r_1);
  try {
  for (var_i.s();
  !(var_t = var_i.n()).done;
  ) {
  var var_a = var_t.value;
  try {
  if (var_a.parentFrameId != -1 && var_a.url == var_o) {
  chrome.tabs.sendMessage(var_k, Object.assign(Object.assign({
  }
  , param_n.params), {
  type: "get_vid_time_in_frame"
  }
  ), {
  frameId: var_a.frameId
  }
  );
  }
  }
  catch (var_e_1) {
  console.log(var_e_1);
  }
  }
  }
  catch (var_e_1) {
  var_i.e(var_e_1);
  }
  finally {
  var_i.f();
  }
  }
  );
  return param_T.a(3, 86);
  case 37:
  chrome.webNavigation.getAllFrames({
  tabId: var_k
  }
  , param_e => {
  var var_o;
  var var_i;
  var var_a = param_e || [];
  var var_s = param_n.params.url;
  if (var_s == "") {
  var_s = "about:blank";
  }
  var flag_c = false;
  if (var_s == null ? undefined : var_s.startsWith("blob:")) {
  flag_c = true;
  }
  var var_u;
  var var_l = var_a.find(param_e_1 => param_e_1.parentFrameId == -1)?.url;
  var var_d = flag_c && ((var_s == null ? undefined : var_s.includes("javhdporn.")) ||
  (var_s == null ? undefined : var_s.includes("bestjavporn.")));
  var var_p_1 = _createForOfIteratorHelper(var_a);
  try {
  for (var_p_1.s();
  !(var_u = var_p_1.n()).done;
  ) {
  var var_f = var_u.value;
  var var_h = `${var_k}
  _${var_f.frameId}
  `;
  var var_m = var_s == null ? undefined : var_s.includes("playhydrax.com");
  if (var_s == null ? undefined : var_s.includes("playhydrax.com")) {
  var var_g = new URL(var_s).search;
  var_m = (var_o = var_f.url) === null || var_o === undefined ?
  undefined : var_o.includes(var_g);
  }
  try {
  if (var_f.parentFrameId != -1 && (var_f.url == var_s || var_m ||
  var_d) || ((var_i = obj_t[var_h]) === null || var_i === undefined ?
  undefined : var_i.some(param_e_1 => param_e_1 == var_s || param_e_1.startsWith(
  var_s)))) {
  chrome.tabs.sendMessage(var_k, Object.assign(Object.assign({
  }
  , param_n.params), {
  type: "inner_pip",
  requestUrl: var_l
  }
  ), {
  frameId: var_f.frameId
  }
  );
  }
  }
  catch (var_e_1) {
  console.log(var_e_1);
  }
  }
  }
  catch (var_e_1) {
  var_p_1.e(var_e_1);
  }
  finally {
  var_p_1.f();
  }
  }
  );
  return param_T.a(3, 86);
  case 38:
  EE.emit("pipRequest", {
  method: param_n.method,
  params: param_n.params
  }
  );
  return param_T.a(3, 86);
  case 39:
  console.log(param_n);
  return param_T.a(3, 86);
  case 40:
  EE.emit("request_cache.get_matched_requests", {
  id: var_k
  }
  );
  return param_T.a(3, 86);
  case 41:
  EE.emit("request_cache.get_server_time", {
  id: var_k,
  msgId: param_n.id
  }
  );
  return param_T.a(3, 86);
  case 42:
  EE.emit("request_cache.get_fb_saved_url", {
  id: var_k,
  msgId: param_n.id,
  name: param_n.params.name
  }
  );
  return param_T.a(3, 86);
  case 43:
  chrome.scripting.executeScript({
  target: {
  tabId: var_k
  }
  ,
  world: chrome.scripting.ExecutionWorld.MAIN,
  func: param_n.func
  }
  );
  return param_T.a(3, 86);
  case 44:
  var_N = param_n.videoId || var_k;
  var_r.set(var_N, param_n.id);
  if (param_o.frameId) {
  var_j = param_o.frameId;
  }
  if (!param_n.frameUrl) {
  param_T.n = 47;
  break;
  }
  param_T.n = 45;
  return chrome.webNavigation.getAllFrames({
  tabId: param_o.tab?.id || 0
  }
  );
  case 45:
  if (!(var_q = param_T.v)) {
  param_T.n = 47;
  break;
  }
  if (var_H = var_q.find(param_e => param_e.url === param_n.frameUrl)) {
  param_T.n = 46;
  break;
  }
  return param_T.a(3, 86);
  case 46:
  var_j = (var_H == null ? undefined : var_H.frameId) || var_j;
  case 47:
  chrome.scripting.executeScript({
  target: {
  tabId: var_k,
  frameIds: var_j ? [var_j] : undefined
  }
  ,
  world: chrome.scripting.ExecutionWorld.MAIN,
  files: [`inject/${param_n.file}
  /main-world.js`]
  }
  );
  chrome.scripting.executeScript({
  target: {
  tabId: var_k,
  frameIds: var_j ? [var_j] : undefined
  }
  ,
  files: [`inject/${param_n.file}
  /index.js`]
  }
  );
  return param_T.a(3, 86);
  case 48:
  var_V = param_n.data?.videoId || var_k;
  var_W = var_r.get(var_V);
  var_r.delete(var_V);
  sendMessage(var_k, Object.assign(Object.assign({
  }
  , param_n), {
  type: "return_inner_data",
  data: {
  data: param_n.data?.data,
  id: var_W
  }
  }
  ));
  return param_T.a(3, 86);
  case 49:
  if (var_z = param_n.originalUrl) {
  var_Y = function (param_e) {
  if (param_e.url !== var_z) {
  chrome.webNavigation.onHistoryStateUpdated.removeListener(var_Y);
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id
  }
  }
  );
  }
  };
  chrome.webNavigation.onHistoryStateUpdated.addListener(var_Y);
  setTimeout(() => {
  if (chrome.webNavigation.onHistoryStateUpdated.hasListener(var_Y)) {
  chrome.webNavigation.onHistoryStateUpdated.removeListener(var_Y);
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id
  }
  }
  );
  }
  }
  , 1000);
  }
  return param_T.a(3, 86);
  case 50:
  chrome.tabs.create({
  url: "coccoc://settings/searchEngines"
  }
  );
  return param_T.a(3, 86);
  case 51:
  chrome.runtime.openOptionsPage();
  return param_T.a(3, 86);
  case 52:
  if (chrome.coccoc?.shouldBlockAdsOnYoutubeBySavior) {
  chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(param_e => {
  if (!param_e) {
  recordAttempTurnOffAdblock(param_n.force || param_n.data?.force);
  }
  }
  );
  }
  else {
  recordAttempTurnOffAdblock(param_n.force || param_n.data?.force);
  }
  return param_T.a(3, 86);
  case 53:
  if ((var_w = (var_b = chrome.coccoc) === null || var_b === undefined ?
  undefined : var_b.mayTurnOnAdblockOnYoutube) !== null && var_w !== undefined) {
  var_w.call(var_b);
  }
  return param_T.a(3, 86);
  case 54:
  if (param_o.tab && param_o.tab.id !== undefined) {
  if ((var_E = chrome.sidePanel) !== null && var_E !== undefined) {
  var_E.open({
  tabId: param_o.tab.id
  }
  );
  }
  }
  return param_T.a(3, 86);
  case 55:
  try {
  chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(param_e => {
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: param_e
  }
  }
  );
  }
  );
  }
  catch (var_e_1) {
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: null
  }
  }
  );
  }
  return param_T.a(3, 86);
  case 56:
  param_T.p = 56;
  param_T.n = 57;
  return chrome.eyeoFilteringPrivate.getAllowedDomains("adblock");
  case 57:
  if (!param_T.v.includes("youtube.com")) {
  param_T.n = 58;
  break;
  }
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: {
  isAdblockTurnedOff: true
  }
  }
  }
  );
  return param_T.a(3, 86);
  case 58:
  param_T.n = 59;
  return chrome.eyeoFilteringPrivate.getCustomFilters("adblock");
  case 59:
  if (!param_T.v.includes("@@||youtube.com^$document")) {
  param_T.n = 60;
  break;
  }
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: {
  isAdblockAutoOff: true
  }
  }
  }
  );
  return param_T.a(3, 86);
  case 60:
  param_T.n = 62;
  break;
  case 61:
  param_T.p = 61;
  param_T.v;
  try {
  chrome.coccoc.shouldBlockAdsOnYoutubeBySavior(param_e => {
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: param_e
  }
  }
  );
  }
  );
  }
  catch (var_e_1) {
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: null
  }
  }
  );
  }
  return param_T.a(3, 86);
  case 62:
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: null
  }
  }
  );
  return param_T.a(3, 86);
  case 63:
  sendMessage(var_k, {
  type: "inner_pip_event_fired",
  data: Object.assign(Object.assign({
  }
  , param_n.params || {
  }
  ), {
  name: "enterpictureinpicture"
  }
  )
  }
  );
  return param_T.a(3, 86);
  case 64:
  sendMessage(var_k, {
  type: "inner_pip_event_fired",
  data: Object.assign(Object.assign({
  }
  , param_n.params || {
  }
  ), {
  name: "leavepictureinpicture"
  }
  )
  }
  );
  return param_T.a(3, 86);
  case 65:
  Object(_background_utils__WEBPACK_IMPORTED_MODULE_9__.f)();
  return param_T.a(3, 86);
  case 66:
  var_G = param_n.data;
  var_Q = var_G.url;
  var_$ = var_G.responseType;
  param_T.p = 67;
  param_T.n = 68;
  return fetch(var_Q);
  case 68:
  var_K = param_T.v;
  var_X = Object.fromEntries(var_K.headers);
  if (var_$ !== "text") {
  param_T.n = 70;
  break;
  }
  param_T.n = 69;
  return var_K.text();
  case 69:
  ce = param_T.v;
  param_T.n = 72;
  break;
  case 70:
  param_T.n = 71;
  return var_K.json();
  case 71:
  ce = param_T.v;
  case 72:
  var_Z = ce;
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: {
  data: var_Z,
  headers: var_X
  }
  }
  }
  , param_o.frameId);
  param_T.n = 74;
  break;
  case 73:
  param_T.p = 73;
  ue = param_T.v;
  console.error(ue);
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: null
  }
  }
  );
  case 74:
  return param_T.a(3, 86);
  case 75:
  var_J = param_n.data.url;
  param_T.p = 76;
  param_T.n = 77;
  return fetch(var_J, {
  method: "HEAD"
  }
  );
  case 77:
  ee = param_T.v;
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: {
  status: ee.status
  }
  }
  }
  , param_o.frameId || 0);
  param_T.n = 79;
  break;
  case 78:
  param_T.p = 78;
  le = param_T.v;
  console.error(le);
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: null
  }
  }
  );
  case 79:
  return param_T.a(3, 86);
  case 80:
  chrome.cookies.getAll({
  url: "https://www.youtube.com"
  }
  , param_e => {
  var var_r_1;
  var obj_i = {
  };
  var var_a = _createForOfIteratorHelper(param_n.cookies);
  try {
  function var_s() {
  var var_n = var_r_1.value;
  obj_i[var_n] = param_e.find(param_e_1 => param_e_1.name === var_n)?.value;
  }
  for (var_a.s();
  !(var_r_1 = var_a.n()).done;
  ) {
  var_s();
  }
  }
  catch (var_e_1) {
  var_a.e(var_e_1);
  }
  finally {
  var_a.f();
  }
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: obj_i
  }
  }
  , param_o.frameId || 0);
  }
  );
  return param_T.a(3, 86);
  case 81:
  te = param_o.tab?.id;
  re = param_n.params.url;
  if (te && re) {
  param_T.n = 82;
  break;
  }
  return param_T.a(3, 86);
  case 82:
  chrome.webNavigation.getAllFrames({
  tabId: te
  }
  , param_e => {
  try {
  var var_t = new URL(re);
  var var_r_1 = param_e == null ? undefined : param_e.find(param_e_1 => new URL(
  param_e_1.url).hostname === var_t.hostname);
  if (!var_r_1) {
  return;
  }
  chrome.scripting.executeScript({
  target: {
  tabId: te,
  frameIds: [var_r_1.frameId]
  }
  ,
  injectImmediately: true,
  world: chrome.scripting.ExecutionWorld.MAIN,
  func: () => {
  var var_e_1 = document.body.querySelector("video");
  if (var_e_1) {
  var_e_1.currentTime = var_e_1.duration;
  }
  }
  }
  );
  }
  catch (var_e_1) {
  console.error(var_e_1);
  }
  }
  );
  return param_T.a(3, 86);
  case 83:
  if (chrome.coccoc.sendRequest) {
  param_T.n = 84;
  break;
  }
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: null
  }
  }
  );
  return param_T.a(3, 86);
  case 84:
  param_T.n = 85;
  return chrome.coccoc.sendRequest(param_n.request);
  case 85:
  ne = param_T.v;
  sendMessage(var_k, {
  type: "return_inner_data",
  data: {
  id: param_n.id,
  data: ne
  }
  }
  , param_o.frameId || 0);
  return param_T.a(3, 86);
  case 86:
  param_i();
  case 87:
  return param_T.a(2);
  }
  }
  }
  , var_T, this, [[76, 78], [67, 73], [56, 61], [26, 28], [22, 24]]);
  }
  ));
  }
  );
  EE.on("request.matched", param_e => sendMessage(param_e.tabId, param_e.data, 0));
  EE.on("request.fb", param_e => sendMessage(param_e.tabId, param_e.data, 0));
  EE.on("yserp_matched", param_e => sendMessage(param_e, {
  type: "yserp_metrics"
  }
  ));
  EE.on("finish_download", param_e => sendMessage(param_e.tabId, param_e));
  EE.on("download_error", param_e => sendMessage(param_e.tabId, param_e));
  EE.on("request_cache.return_matched_requests", param_e => sendMessage(param_e.id,
  {
  type: "request.matched",
  result: param_e.tasks
  }
  , 0));
  EE.on("request_cache.return_fb_saved_url", param_e => sendMessage(param_e.id, {
  type: "return_inner_data",
  data: {
  id: param_e.msgId,
  data: param_e.url
  }
  }
  , 0));
  EE.on("request_cache.return_server_time", param_e => sendMessage(param_e.id, {
  type: "return_inner_data",
  data: {
  id: param_e.msgId,
  data: param_e.serverTime
  }
  }
  , 0));
  }
  ).catch(param_e => console.log("Caught", param_e));
  chrome.runtime.onMessageExternal.addListener(onExternalRequest);
  }
  ).call(this, __webpack_require__(13));
  };
