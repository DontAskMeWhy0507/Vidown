// Module 43 [storage] - Shared utility component (ab-test-provider)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_media_constants = requireFn(1);
  var dep_metrics_logger = requireFn(5);
  var dep_stream_destroy = requireFn(76);
  var var_a = requireFn.n(dep_stream_destroy);
  function var_s() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_r = typeof Symbol == "function" ? Symbol : {
  };
  var var_n = var_r.iterator || "@@iterator";
  var var_o = var_r.toStringTag || "@@toStringTag";
  function var_i(param_r, param_n, param_o, param_i) {
  var var_s_1 = param_n && param_n.prototype instanceof var_u_1 ?
  param_n : var_u_1;
  var var_l_2 = Object.create(var_s_1.prototype);
  var_c(var_l_2, "_invoke", function (param_r_1, param_n_1, param_o_1) {
  var var_i_1;
  var var_s_2;
  var var_c_1;
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
  var_s_2 = 0;
  var_c_1 = var_e;
  obj_p.n = param_r_2;
  return obj_a;
  }
  };
  function var_f_2(param_r_2, param_n_2) {
  var_s_2 = param_r_2;
  var_c_1 = param_n_2;
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
  var_c_1 = var_i_2[(var_s_2 = var_i_2[4]) ? 5 : (var_s_2 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_f_3) {
  if (var_o_1 = param_r_2 < 2 && var_f_3 < var_i_2[1]) {
  var_s_2 = 0;
  obj_p.v = param_n_2;
  obj_p.n = var_i_2[1];
  }
  else if (var_f_3 < var_h_2 && (var_o_1 = param_r_2 < 3 || var_i_2[0] > param_n_2 ||
  param_n_2 > var_h_2)) {
  var_i_2[4] = param_r_2;
  var_i_2[5] = param_n_2;
  obj_p.n = var_h_2;
  var_s_2 = 0;
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
  var_f_2(param_l, param_h);
  }
  var_s_2 = param_l;
  var_c_1 = param_h;
  while ((var_t = var_s_2 < 2 ? var_e : var_c_1) || !flag_d) {
  if (!var_i_1) {
  if (var_s_2) {
  if (var_s_2 < 3) {
  if (var_s_2 > 1) {
  obj_p.n = -1;
  }
  var_f_2(var_s_2, var_c_1);
  }
  else {
  obj_p.n = var_c_1;
  }
  }
  else {
  obj_p.v = var_c_1;
  }
  }
  try {
  num_u = 2;
  if (var_i_1) {
  if (!var_s_2) {
  param_o_2 = "next";
  }
  if (var_t = var_i_1[param_o_2]) {
  if (!(var_t = var_t.call(var_i_1, var_c_1))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_c_1 = var_t.value;
  if (var_s_2 < 2) {
  var_s_2 = 0;
  }
  }
  else {
  if (var_s_2 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_s_2 < 2) {
  var_c_1 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_s_2 = 1;
  }
  }
  var_i_1 = var_e;
  }
  else if ((var_t = (flag_d = obj_p.n < 0) ? var_c_1 : param_r_1.call(param_n_1,
  obj_p)) !== obj_a) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_s_2 = 1;
  var_c_1 = var_t_1;
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
  function var_u_1() {
  }
  function var_l_1() {
  }
  function var_d_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_p_1 = [][var_n] ? var_t(var_t([][var_n]())) : (var_c(var_t = {
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
  var_c(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_f_1);
  return param_e;
  }
  var_l_1.prototype = var_d_1;
  var_c(var_f_1, "constructor", var_d_1);
  var_c(var_d_1, "constructor", var_l_1);
  var_l_1.displayName = "GeneratorFunction";
  var_c(var_d_1, var_o, "GeneratorFunction");
  var_c(var_f_1);
  var_c(var_f_1, var_o, "Generator");
  var_c(var_f_1, var_n, function () {
  return this;
  }
  );
  var_c(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_s = function () {
  return {
  w: var_i,
  m: var_h_1
  };
  }
  )();
  }
  function var_c(param_e, param_t, param_r, param_n) {
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
  (var_c = function (param_e_1, param_t_1, param_r_1, param_n_1) {
  function var_i(param_t_2, param_r_2) {
  var_c(param_e_1, param_t_2, function (param_e_2) {
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
  function var_u(param_e, param_t) {
  return function (param_e_1) {
  if (Array.isArray(param_e_1)) {
  return param_e_1;
  }
  }
  (param_e) || function (param_e_1, param_t_1) {
  var var_r = param_e_1 == null ? null : typeof Symbol != "undefined" &&
  param_e_1[Symbol.iterator] || param_e_1["@@iterator"];
  if (var_r != null) {
  var var_n;
  var var_o;
  var var_i;
  var var_a_1;
  var list_s = [];
  var flag_c = true;
  var flag_u = false;
  try {
  var_i = (var_r = var_r.call(param_e_1)).next;
  if (param_t_1 === 0) {
  if (Object(var_r) !== var_r) {
  return;
  }
  flag_c = false;
  }
  else {
  for (;
  !(flag_c = (var_n = var_i.call(var_r)).done) && (list_s.push(var_n.value), list_s.length !== param_t_1);
  flag_c = true);
  }
  }
  catch (var_e) {
  flag_u = true;
  var_o = var_e;
  }
  finally {
  try {
  if (!flag_c && var_r.return != null && (var_a_1 = var_r.return(), Object(var_a_1) !== var_a_1)) {
  return;
  }
  }
  finally {
  if (flag_u) {
  throw var_o;
  }
  }
  }
  return list_s;
  }
  }
  (param_e, param_t) || function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_l(param_e_1, param_t_1);
  }
  var var_r = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_r === "Object" && param_e_1.constructor) {
  var_r = param_e_1.constructor.name;
  }
  if (var_r === "Map" || var_r === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_r)) {
  return var_l(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_l(param_e, param_t) {
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
  function var_d(param_e, param_t, param_r, param_n) {
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
  var var_p = new Date();
  if (var_p.getMonth() >= 8) {
  5;
  var var_f = var_p.getDate();
  if (var_f >= 8) {
  2;
  }
  if (var_f >= 11) {
  1;
  }
  }
  class var_h {
  constructor() {
  this.tests = {
  youtubeMobileonboarding: {
  groups: ["A", null, null, null, null, null, null, null, null, null, "B", null,
  null, null, null, null, null, null, null, null],
  buckets: 20
  }
  ,
  setCCAsDefaultonboarding: {
  groups: ["A", ...Array(49).fill(null), ...Array(49).fill(null), "B"],
  buckets: 100
  }
  ,
  accountOnboardingonboarding: {
  groups: ["A"],
  buckets: 1
  }
  };
  this.serverRuleLoadPromise = this.loadTestsFromServer();
  this.cookies = {
  };
  this.forced = {
  };
  }
  loadTestsFromServer() {
  return var_d(this, undefined, undefined, var_s().m(function var_e() {
  return var_s().w(function (param_e) {
  while (true) {
  switch (param_e.n) {
  case 0:
  return param_e.a(2, new Promise(param_e_1 => {
  chrome.storage.local.get(dep_media_constants.n, param_t => var_d(this, undefined,
  undefined, var_s().m(function var_r() {
  var var_o;
  return var_s().w(function (param_r) {
  while (true) {
  switch (param_r.n) {
  case 0:
  if ((var_o = param_t[dep_media_constants.n] || {
  }
  ).ab_test_data) {
  Object.entries(var_o.ab_test_data).forEach(param_e_2 => {
  var var_t = var_u(param_e_2, 2);
  var var_r_1 = var_t[0];
  var var_n = var_t[1];
  if (var_n.groups && var_n.buckets) {
  this.tests[var_r_1] = var_n;
  }
  }
  );
  }
  param_e_1();
  case 1:
  return param_r.a(2);
  }
  }
  }
  , var_r, this);
  }
  )));
  }
  ));
  }
  }
  }
  , var_e, this);
  }
  ));
  }
  processRequest(param_e) {
  var var_t = param_e.testName;
  return var_d(this, undefined, undefined, var_s().m(function var_e() {
  return var_s().w(function (param_e_1) {
  while (true) {
  switch (param_e_1.n) {
  case 0:
  if (var_t) {
  param_e_1.n = 1;
  break;
  }
  return param_e_1.a(2, Promise.reject("No test name"));
  case 1:
  if (!this.serverRuleLoadPromise) {
  param_e_1.n = 3;
  break;
  }
  param_e_1.n = 2;
  return this.serverRuleLoadPromise;
  case 2:
  this.serverRuleLoadPromise = null;
  case 3:
  return param_e_1.a(2, this.getCookies().then(this.getTest.bind(this, var_t)));
  }
  }
  }
  , var_e, this);
  }
  ));
  }
  getCookies() {
  return new Promise((param_e, param_t) => {
  chrome.cookies.getAll({
  url: "https://coccoc.com"
  }
  , param_r => {
  var var_n = param_r.find(param_e_1 => param_e_1.name === "uid");
  var var_o = param_r.find(param_e_1 => param_e_1.name === "vid");
  var var_i = param_r.find(param_e_1 => param_e_1.name === "forceAB");
  var var_a_1 = param_r.find(param_e_1 => param_e_1.name === "idCookie");
  if (var_n && var_n.value) {
  this.cookies = {
  uid: var_n.value,
  idCookie: var_a_1 == null ? undefined : var_a_1.value,
  vid: var_o == null ? undefined : var_o.value
  };
  if (var_i && var_i.value) {
  this.cookies.forceAB = var_i.value;
  try {
  var var_s_1 = decodeURIComponent(this.cookies.forceAB);
  this.forced = var_h.parseForcedTests(var_s_1);
  }
  catch (var_e) {
  console.warn("Cannot parse forced tests");
  }
  }
  param_e();
  }
  else {
  param_t("No uid cookie");
  }
  }
  );
  }
  );
  }
  getTest(param_e) {
  var var_t = this.forced[param_e];
  if (var_t !== undefined) {
  var var_r = this.tests[param_e] ? this.tests[param_e].groups[var_t] :
  null;
  return Promise.resolve({
  group: var_t,
  groupName: var_r
  }
  );
  }
  var var_n = this.tests[param_e];
  if (!var_n || var_n.time && var_n.time.end && (Date.parse(var_n.time.end) < Date.now(
  ) || var_n.time && var_n.time.start && Date.parse(var_n.time.start) > Date.now(
  ))) {
  return Promise.resolve({
  group: null
  }
  );
  }
  var var_o = this.cookies.vid;
  var var_i = var_h.generateGroup(var_n.groups, var_n.buckets, var_o, param_e);
  var_h.generateGroup(var_n.groups, var_n.buckets, this.cookies.uid, param_e);
  if (!var_i) {
  return Promise.resolve({
  group: null
  }
  );
  }
  var var_a_1 = var_n.groups.indexOf(var_i);
  return Promise.resolve({
  group: var_a_1,
  groupName: var_i
  }
  );
  }
  static generateGroup(param_e, param_t, param_r, param_n = "") {
  var var_i = param_e[parseInt(new var_a.a().update(param_r + String(param_n)).digest(
  "hex").slice(-12), 16) % param_t] || null;
  if (param_n === "setCCAsDefaultonboarding" && var_i) {
  dep_metrics_logger.a.log("Onboarding.setCCAsDefault.Variant", {
  A: 1,
  B: 2,
  C: 3,
  D: 4
  }
  [var_i]);
  }
  return var_i;
  }
  static parseForcedTests(param_e) {
  return (param_e || "").split(",").filter(Boolean).reduce(function (param_e_1, param_t) {
  var var_r = param_t.split(":");
  param_e_1[var_r[0]] = Number(var_r[1]);
  return param_e_1;
  }
  , {
  }
  );
  }
  checkIsNewUser(param_e = 1) {
  var var_t = decodeURIComponent(this.cookies.idCookie || "");
  if (var_t.match(/\d+:\d+:\w+$/)) {
  return (Date.now() - Number(new Date(Number(var_t.split(":")[1]) * 1000 * 86400))) / 1000 / 86400 < param_e;
  }
  else {
  return null;
  }
  }
  }
  exportsObj.a = new var_h();
  };
