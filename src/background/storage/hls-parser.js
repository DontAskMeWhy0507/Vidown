// Module 24 [storage] - Shared utility component (hls-parser)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "a", function () {
  return var_U;
  }
  );
  requireFn.d(exportsObj, "b", function () {
  return var_j;
  }
  );
  var dep_dom_utils = requireFn(0);
  var dep_media_constants = requireFn(1);
  var dep_ast_parser = requireFn(37);
  function var_a(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_s(param_e_1, param_t_1);
  }
  var var_r_1 = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_r_1 === "Object" && param_e_1.constructor) {
  var_r_1 = param_e_1.constructor.name;
  }
  if (var_r_1 === "Map" || var_r_1 === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_r_1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_r_1)) {
  return var_s(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e)) || param_t && param_e && typeof param_e.length == "number") {
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
  var flag_c = false;
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
  flag_c = true;
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
  if (flag_c) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_s(param_e, param_t) {
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
  var var_c = Symbol("WALK_STOP");
  var var_u = new Set(["AbortController", "AbortSignal", "Array", "ArrayBuffer",
  "AsyncContext", "Atomics", "AudioContext", "BigInt", "BigInt64Array", "BigUint64Array",
  "Blob", "Boolean", "BroadcastChannel", "Buffer", "CanvasRenderingContext2D", "clearImmediate",
  "clearInterval", "clearTimeout", "confirm", "console", "Crypto", "CustomEvent",
  "DataView", "Date", "decodeURI", "decodeURIComponent", "document", "Element", "encodeURI",
  "encodeURIComponent", "Error", "escape", "eval", "Event", "EventTarget", "fetch",
  "File", "FileReader", "Float32Array", "Float64Array", "FormData", "function", "global",
  "globalThis", "hasOwnProperty", "Headers", "History", "HTMLElement", "HTMLCollection",
  "IDBKeyRange", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "IntersectionObserver",
  "isFinite", "isNaN", "isPrototypeOf", "JSON", "location", "log", "Map", "Math",
  "MediaRecorder", "MediaSource", "MediaStream", "MemberExpression", "MutationObserver",
  "NaN", "navigator", "Node", "NodeList", "Number", "Object", "OfflineAudioContext",
  "parse", "parseFloat", "parseInt", "Performance", "process", "Promise", "prompt",
  "prototype", "Proxy", "ReadableStream", "Reflect", "RegExp", "requestAnimationFrame",
  "requestIdleCallback", "Request", "Response", "ResizeObserver", "Screen", "setImmediate",
  "setInterval", "setTimeout", "SharedArrayBuffer", "SharedWorker", "SourceBuffer",
  "split", "String", "stringify", "structuredClone", "SubtleCrypto", "Symbol", "TextDecoder",
  "TextEncoder", "this", "toString", "TransformStream", "Uint16Array", "Uint32Array",
  "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URL", "URLSearchParams",
  "valueOf", "WeakMap", "WeakSet", "WebAssembly", "WebGLRenderingContext", "window",
  "Worker", "WritableStream", "XMLHttpRequest", "alert", "arguments", "atob", "btoa",
  "cancelAnimationFrame", "cancelIdleCallback", "queueMicrotask"]);
  function var_l(param_e, param_t) {
  if (param_e && typeof param_e == "object") {
  for (var list_o = [{
  node: param_e,
  parent: null,
  exit: false
  }
  ], list_i = [], var_a_1 = typeof param_t == "function" ? param_t :
  param_t.enter ?? null, var_s_1 = typeof param_t == "function" ?
  null : param_t.leave ?? null, flag_u = false;
  !flag_u && list_o.length > 0;
  ) {
  var var_l_1 = list_o.pop();
  var var_d_1 = var_l_1.node;
  var var_p_1 = var_l_1.parent;
  if (var_l_1.exit) {
  list_i.pop();
  if (var_s_1 && var_s_1(var_d_1, var_p_1, list_i) === var_c) {
  flag_u = true;
  }
  }
  else if (var_d_1 && typeof var_d_1.type == "string") {
  var var_f_1 = var_a_1 ? var_a_1(var_d_1, var_p_1, list_i) :
  undefined;
  if (var_f_1 !== var_c) {
  if (var_f_1 !== true) {
  list_o.push({
  node: var_d_1,
  parent: var_p_1,
  exit: true
  }
  );
  list_i.push(var_d_1);
  for (var var_h_1 in var_d_1) {
  if (var_h_1 !== "loc" && var_h_1 !== "range" && var_h_1 !== "start" &&
  var_h_1 !== "end" && Object.prototype.hasOwnProperty.call(var_d_1, var_h_1)) {
  var var_m_1 = var_d_1[var_h_1];
  if (var_m_1) {
  if (Array.isArray(var_m_1)) {
  for (var var_g_1 = var_m_1.length - 1;
  var_g_1 >= 0;
  var_g_1--) {
  var var_v_1 = var_m_1[var_g_1];
  if (var_v_1 && typeof var_v_1.type == "string") {
  list_o.push({
  node: var_v_1,
  parent: var_d_1,
  exit: false
  }
  );
  }
  }
  }
  else if (typeof var_m_1 == "object" && typeof var_m_1.type == "string") {
  list_o.push({
  node: var_m_1,
  parent: var_d_1,
  exit: false
  }
  );
  }
  }
  }
  }
  }
  }
  else {
  flag_u = true;
  }
  }
  }
  }
  }
  function var_d(param_e, param_t) {
  var var_r = function (param_e_1) {
  if (param_e_1) {
  if (Array.isArray(param_e_1.range)) {
  return param_e_1.range;
  }
  else if (typeof param_e_1.start == "number" && typeof param_e_1.end == "number") {
  return [param_e_1.start, param_e_1.end];
  }
  else {
  return null;
  }
  }
  else {
  return null;
  }
  }
  (param_e);
  if (var_r) {
  return param_t.slice(var_r[0], var_r[1]);
  }
  else {
  return null;
  }
  }
  function var_p(param_e, param_t) {
  if (param_e.type !== "MemberExpression") {
  return null;
  }
  var list_r = [];
  for (var var_n = param_e;
  var_n && var_n.type === "MemberExpression";
  ) {
  var var_o = var_n;
  var var_i = var_o.property;
  if (!var_i) {
  return null;
  }
  if (var_o.computed) {
  var var_a_1 = var_d(var_i, param_t);
  if (!var_a_1) {
  return null;
  }
  list_r.unshift(`[${var_a_1.trim()}
  ]`);
  }
  else {
  if (var_i.type !== "Identifier") {
  return null;
  }
  list_r.unshift("." + var_i.name);
  }
  var_n = var_o.object;
  }
  var var_s_1 = null;
  if ((var_n == null ? undefined : var_n.type) === "Identifier") {
  var_s_1 = var_n.name;
  }
  else if ((var_n == null ? undefined : var_n.type) === "ThisExpression") {
  var_s_1 = "this";
  }
  if (var_s_1) {
  return var_s_1 + list_r.join("");
  }
  else {
  return null;
  }
  }
  function var_f(param_e, param_t) {
  for (var var_r = param_e.object;
  var_r && var_r.type === "MemberExpression";
  ) {
  var var_n = var_p(var_r, param_t);
  if (var_n) {
  return var_n;
  }
  var_r = var_r.object;
  }
  if ((var_r == null ? undefined : var_r.type) === "Identifier") {
  return var_r.name;
  }
  else if ((var_r == null ? undefined : var_r.type) === "ThisExpression") {
  return "this";
  }
  else {
  return null;
  }
  }
  function var_h(param_e, param_t, param_r) {
  if (param_r.type === "CallExpression" && param_r.callee.type === "Identifier" &&
  param_e.declaredVariables.has(param_r.callee.name)) {
  return var_m(param_t, param_r.callee.name, var_g(param_e, param_r.arguments));
  }
  if (param_r.type === "VariableDeclarator" && param_r.init?.type === "FunctionExpression" &&
  param_r.id.type === "Identifier") {
  return var_m(param_t, param_r.id.name, var_g(param_e, param_r.init.params));
  }
  if (param_r.type === "NewExpression" && param_r.callee.type === "MemberExpression" &&
  param_r.callee.object.type === "Identifier") {
  var var_o = var_p(param_r.callee, param_e.getSource());
  if (!var_o) {
  return;
  }
  return var_m(param_t, var_o, var_g(param_e, param_r.arguments), true);
  }
  }
  function var_m(param_e, param_t, param_r, param_n = false) {
  return [`  function ${param_e}
  (${param_r.join(", ")}
  ) {`, `    return ${param_n ? "new " : ""}
  ${param_t}
  (${param_r.join(", ")}
  );`, "  }"].join("\n");
  }
  function var_g(param_e, param_t) {
  var var_r;
  var list_n = [];
  var var_o = var_a(param_t);
  try {
  for (var_o.s();
  !(var_r = var_o.n()).done;
  ) {
  var var_i = var_r.value;
  if (var_i.type === "Identifier" && param_e.declaredVariables.has(var_i.name)) {
  list_n.push(var_i.name);
  }
  else if (var_i.type !== "Literal" || typeof var_i.value != "string" &&
  typeof var_i.value != "number") {
  if (var_i.type === "UnaryExpression") {
  var var_s_1 = var_d(var_i, param_e.getSource());
  if (var_s_1) {
  list_n.push(var_s_1.trim());
  }
  }
  else if (var_i.type === "AssignmentPattern" && var_i.left.type === "Identifier") {
  list_n.push(var_i.left.name);
  }
  else if (var_i.type === "Identifier") {
  list_n.push(var_i.name);
  }
  else if (!list_n.includes("input")) {
  list_n.push("input");
  }
  }
  else {
  list_n.push(JSON.stringify(var_i.value));
  }
  }
  }
  catch (var_e) {
  var_o.e(var_e);
  }
  finally {
  var_o.f();
  }
  return list_n;
  }
  function var_v(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_y(param_e_1, param_t_1);
  }
  var var_r_1 = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_r_1 === "Object" && param_e_1.constructor) {
  var_r_1 = param_e_1.constructor.name;
  }
  if (var_r_1 === "Map" || var_r_1 === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_r_1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_r_1)) {
  return var_y(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e)) || param_t && param_e && typeof param_e.length == "number") {
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
  function var_y(param_e, param_t) {
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
  class var__ {
  constructor(param_e, param_t = {
  }
  ) {
  this.dependentsTracker = new Map();
  this.pendingPrototypeAliasBinding = null;
  this.iifeParamName = null;
  this.declaredVariables = new Map();
  this.source = param_e;
  var var_r = param_t.extractions ? Array.isArray(param_t.extractions) ?
  param_t.extractions : [param_t.extractions] : [];
  this.extractionStates = var_r.map(param_e_1 => ({
  config: Object.assign({
  collectDependencies: true,
  stopWhenReady: true
  }
  , param_e_1),
  dependencies: new Set(),
  dependents: new Set(),
  ready: false
  }
  ));
  this.hasExtractions = this.extractionStates.length > 0;
  this.programAst = Object(dep_ast_parser.parseScript)(param_e, {
  ranges: true,
  loc: false,
  module: false
  }
  );
  this.analyzeAst();
  }
  analyzeAst() {
  var var_r;
  var var_n;
  var var_o;
  var var_i = var_v(this.programAst.body);
  try {
  for (var_i.s();
  !(var_o = var_i.n()).done;
  ) {
  var var_a_1 = var_o.value;
  if (var_a_1.type === "ExpressionStatement" && var_a_1.expression.type === "CallExpression") {
  var var_s_1 = var_a_1.expression;
  if (var_s_1.callee.type === "FunctionExpression") {
  var var_c_1 = var_s_1.callee;
  var var_u_1 = var_c_1.params.length > 0 ? var_c_1.params[0] :
  null;
  if (!this.iifeParamName && (var_u_1 == null ? undefined : var_u_1.type) === "Identifier") {
  this.iifeParamName = var_u_1.name;
  }
  if (var_c_1.body?.type === "BlockStatement") {
  var_n = var_c_1.body;
  break;
  }
  }
  }
  }
  }
  catch (var_e) {
  var_i.e(var_e);
  }
  finally {
  var_i.f();
  }
  if (var_n) {
  var var_l_1;
  var var_d_1 = var_v(var_n.body);
  try {
  for (var_d_1.s();
  !(var_l_1 = var_d_1.n()).done;
  ) {
  var var_h_1 = var_l_1.value;
  switch (var_h_1.type) {
  case "ExpressionStatement":
  var var_m_1 = var_h_1.expression;
  if (var_m_1.type !== "AssignmentExpression") {
  continue;
  }
  var var_g_1 = var_m_1.left;
  var var_y_1 = var_m_1.right;
  if (var_y_1.type === "MemberExpression" && !var_y_1.computed &&
  var_y_1.property.type === "Identifier" && var_y_1.property.name === "prototype") {
  var var___1 = var_p(var_y_1, this.source);
  var var_b_1 = var_g_1.type === "Identifier" ? var_g_1.name :
  var_p(var_g_1, this.source);
  if (var___1) {
  var var_w_1 = this.declaredVariables.get(var___1.replace(".prototype", ""));
  if (var_b_1 && var_w_1) {
  var var_E_1 = new Set();
  var var_D_1 = var_b_1 + ".";
  this.pendingPrototypeAliasBinding = [var_D_1, var_w_1];
  var_w_1.prototypeAliases.set(var_D_1, var_E_1);
  }
  }
  }
  if (var_g_1.type === "Identifier") {
  var var_T_1 = this.declaredVariables.get(var_g_1.name);
  if (!var_T_1) {
  continue;
  }
  var_T_1.node.init = var_y_1;
  if (this.needsDependencyAnalysis(var_y_1)) {
  var_T_1.dependencies = this.findDependencies(var_m_1.right, var_g_1.name);
  }
  if (this.onMatch(var_T_1.node, var_T_1)) {
  return;
  }
  }
  else if (var_m_1.left.type === "MemberExpression") {
  var var_k_1 = var_p(var_m_1.left, this.source);
  var var_A_1 = this.pendingPrototypeAliasBinding?.[0];
  if (var_A_1 && ((var_k_1 == null ? undefined : var_k_1.includes(var_A_1)) ||
  var_k_1 === var_A_1.slice(0, -1))) {
  var var_C_1 = this.declaredVariables.get(((var_r = this.pendingPrototypeAliasBinding) === null ||
  var_r === undefined ? undefined : var_r[1].name) || "");
  if (var_C_1) {
  var var_x_1 = var_C_1.prototypeAliases.get(var_A_1);
  var obj_S = {
  name: var_k_1,
  node: var_h_1,
  dependents: this.dependentsTracker.get(var_k_1) || new Set(),
  predeclared: false,
  prototypeAliases: new Map(),
  dependencies: this.findDependencies(var_y_1, var_k_1)
  };
  if (var_x_1) {
  var_x_1.add(obj_S);
  }
  else {
  var_C_1.prototypeAliases.set(var_A_1, new Set([obj_S]));
  }
  }
  }
  else {
  this.pendingPrototypeAliasBinding = null;
  }
  if (!var_k_1 || this.declaredVariables.has(var_k_1)) {
  continue;
  }
  var obj_O = {
  name: var_k_1,
  node: var_h_1,
  dependents: this.dependentsTracker.get(var_k_1) || new Set(),
  predeclared: false,
  prototypeAliases: new Map(),
  dependencies: this.findDependencies(var_y_1, var_k_1)
  };
  var var_I_1 = var_f(var_m_1.left, this.source);
  if (var_I_1 && var_I_1 !== var_k_1 && !var_I_1.startsWith("this.")) {
  obj_O.dependencies.add(var_I_1.replace(".prototype", ""));
  }
  if (this.dependentsTracker.has(var_k_1)) {
  this.dependentsTracker.delete(var_k_1);
  }
  this.declaredVariables.set(var_k_1, obj_O);
  if (this.onMatch(var_h_1, obj_O)) {
  return;
  }
  }
  break;
  case "VariableDeclaration":
  this.pendingPrototypeAliasBinding = null;
  var var_L_1;
  var var_R_1 = var_v(var_h_1.declarations);
  try {
  for (var_R_1.s();
  !(var_L_1 = var_R_1.n()).done;
  ) {
  var var_P_1 = var_L_1.value;
  if (var_P_1.id.type === "Identifier") {
  var obj_B = {
  name: var_P_1.id.name,
  node: var_P_1,
  dependents: this.dependentsTracker.get(var_P_1.id.name) ||
  new Set(),
  prototypeAliases: new Map(),
  dependencies: new Set(),
  predeclared: false
  };
  var var_M_1 = var_P_1.init;
  if (var_M_1 || var_h_1.kind !== "var") {
  if (var_M_1 && this.needsDependencyAnalysis(var_M_1)) {
  obj_B.dependencies = this.findDependencies(var_M_1, obj_B.name);
  }
  }
  else {
  obj_B.predeclared = true;
  }
  if (this.dependentsTracker.has(obj_B.name)) {
  this.dependentsTracker.delete(obj_B.name);
  }
  this.declaredVariables.set(obj_B.name, obj_B);
  if (this.onMatch(var_P_1, obj_B)) {
  return;
  }
  }
  }
  }
  catch (var_e) {
  var_R_1.e(var_e);
  }
  finally {
  var_R_1.f();
  }
  }
  }
  }
  catch (var_e) {
  var_d_1.e(var_e);
  }
  finally {
  var_d_1.f();
  }
  }
  }
  needsDependencyAnalysis(param_e) {
  if (!param_e) {
  return false;
  }
  switch (param_e.type) {
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  case "ArrayExpression":
  case "LogicalExpression":
  case "CallExpression":
  case "NewExpression":
  case "MemberExpression":
  case "BinaryExpression":
  case "ConditionalExpression":
  case "ObjectExpression":
  case "SequenceExpression":
  case "ClassExpression":
  case "Identifier":
  return true;
  default:
  return false;
  }
  }
  onMatch(param_e, param_t) {
  if (!this.hasExtractions) {
  return false;
  }
  var var_r;
  var flag_n = false;
  var flag_o = false;
  var var_i = var_v(this.extractionStates);
  try {
  for (var_i.s();
  !(var_r = var_i.n()).done;
  ) {
  var var_a_1 = var_r.value;
  if (var_a_1.node) {
  if (var_a_1.node !== param_e && (this.refreshExtractionState(var_a_1), this.shouldStopTraversal(
  ))) {
  return true;
  }
  }
  else {
  if (param_e.type === "VariableDeclarator" && !param_e.init) {
  continue;
  }
  if (!(flag_o = var_a_1.config.match(param_e))) {
  continue;
  }
  var_a_1.node = param_e;
  flag_n = true;
  if (param_t) {
  var_a_1.metadata = param_t;
  var_a_1.dependents = param_t.dependents;
  var_a_1.dependencies = param_t.dependencies;
  if (typeof flag_o != "boolean") {
  var_a_1.matchContext = flag_o;
  }
  }
  this.refreshExtractionState(var_a_1);
  }
  }
  }
  catch (var_e) {
  var_i.e(var_e);
  }
  finally {
  var_i.f();
  }
  return !!flag_n && this.shouldStopTraversal();
  }
  refreshExtractionState(param_e) {
  if (param_e.node) {
  if (param_e.config.collectDependencies !== false) {
  if (param_e.metadata) {
  param_e.ready = this.areDependenciesResolved(param_e.dependencies);
  }
  else {
  param_e.ready = false;
  }
  }
  else {
  param_e.ready = true;
  }
  }
  else {
  param_e.ready = false;
  }
  }
  shouldStopTraversal() {
  if (!this.hasExtractions) {
  return false;
  }
  var var_e;
  var flag_t = false;
  var var_r = var_v(this.extractionStates);
  try {
  for (var_r.s();
  !(var_e = var_r.n()).done;
  ) {
  var var_n = var_e.value;
  if (var_n.config.stopWhenReady !== false) {
  flag_t = true;
  if (!var_n.node) {
  return false;
  }
  if (!var_n.ready) {
  return false;
  }
  }
  }
  }
  catch (var_e_1) {
  var_r.e(var_e_1);
  }
  finally {
  var_r.f();
  }
  return flag_t;
  }
  areDependenciesResolved(param_e, param_t = new Set()) {
  if (!param_e || param_e.size === 0) {
  return true;
  }
  var var_r;
  var var_n = var_v(param_e);
  try {
  for (var_n.s();
  !(var_r = var_n.n()).done;
  ) {
  var var_o = var_r.value;
  if (var_o && !var_u.has(var_o) && var_o !== this.iifeParamName &&
  !param_t.has(var_o)) {
  var var_i = this.declaredVariables.get(var_o);
  if (!var_i) {
  return false;
  }
  param_t.add(var_o);
  if (!this.areDependenciesResolved(var_i.dependencies, param_t)) {
  return false;
  }
  }
  }
  }
  catch (var_e) {
  var_n.e(var_e);
  }
  finally {
  var_n.f();
  }
  return true;
  }
  findDependencies(param_e, param_t) {
  var var_n = new Set();
  if (!param_e) {
  return var_n;
  }
  var list_o = [{
  names: new Set(),
  type: "block"
  }
  ];
  var fn_i = () => list_o[list_o.length - 1];
  var fn_a = param_e_1 => {
  for (var var_t = list_o.length - 1;
  var_t >= 0;
  var_t--) {
  if (list_o[var_t].names.has(param_e_1)) {
  return true;
  }
  }
  return false;
  };
  var var_s_1 = "id" in param_e && (param_e == null ? undefined :
  param_e.id)?.type === "Identifier" ? param_e.id.name : undefined;
  var fn_c = (param_e_1, param_t_1) => {
  if (param_e_1) {
  switch (param_e_1.type) {
  case "Identifier":
  param_t_1.add(param_e_1.name);
  break;
  case "ObjectPattern":
  var var_r;
  var var_n_1 = var_v(param_e_1.properties);
  try {
  for (var_n_1.s();
  !(var_r = var_n_1.n()).done;
  ) {
  var var_o = var_r.value;
  if (var_o.type === "RestElement") {
  fn_c(var_o.argument, param_t_1);
  }
  else if (var_o.type === "Property") {
  fn_c(var_o.value, param_t_1);
  }
  }
  }
  catch (var_e) {
  var_n_1.e(var_e);
  }
  finally {
  var_n_1.f();
  }
  break;
  case "ArrayPattern":
  var var_i;
  var var_a_1 = var_v(param_e_1.elements);
  try {
  for (var_a_1.s();
  !(var_i = var_a_1.n()).done;
  ) {
  var var_s_2 = var_i.value;
  if (var_s_2) {
  fn_c(var_s_2, param_t_1);
  }
  }
  }
  catch (var_e) {
  var_a_1.e(var_e);
  }
  finally {
  var_a_1.f();
  }
  break;
  case "RestElement":
  fn_c(param_e_1.argument, param_t_1);
  break;
  case "AssignmentPattern":
  fn_c(param_e_1.left, param_t_1);
  }
  }
  };
  var_l(param_e, {
  enter: (param_e_1, param_r) => {
  var var_d_1;
  switch (param_e_1.type) {
  case "FunctionDeclaration":
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  var var_m_1 = param_e_1.type === "FunctionDeclaration";
  var var_g_1 = "id" in param_e_1 ? param_e_1.id?.name : undefined;
  if (var_m_1 && var_g_1) {
  fn_i().names.add(var_g_1);
  }
  var obj_y = {
  names: new Set(),
  type: "function"
  };
  if (param_e_1.type === "FunctionExpression" && var_g_1) {
  obj_y.names.add(var_g_1);
  }
  ((param_e_2, param_t_1) => {
  if (param_e_2 == null ? undefined : param_e_2.params) {
  var var_r;
  var var_n_1 = var_v(param_e_2.params);
  try {
  for (var_n_1.s();
  !(var_r = var_n_1.n()).done;
  ) {
  var var_o = var_r.value;
  fn_c(var_o, param_t_1);
  }
  }
  catch (var_e) {
  var_n_1.e(var_e);
  }
  finally {
  var_n_1.f();
  }
  }
  }
  )(param_e_1, obj_y.names);
  list_o.push(obj_y);
  break;
  case "BlockStatement":
  list_o.push({
  names: new Set(),
  type: "block"
  }
  );
  break;
  case "CatchClause":
  var var___1 = new Set();
  if (param_e_1.param) {
  fn_c(param_e_1.param, var___1);
  }
  list_o.push({
  names: var___1,
  type: "block"
  }
  );
  break;
  case "VariableDeclaration":
  var var_b_1;
  var var_w_1 = param_e_1.kind === "var" && (var_d_1 = function (param_e_2, param_t_1) {
  for (var var_r = param_e_2.length - 1;
  var_r >= 0;
  var_r--) {
  var var_n_1 = param_e_2[var_r];
  if (param_t_1(var_n_1, var_r, param_e_2)) {
  return var_n_1;
  }
  }
  }
  (list_o, param_e_2 => param_e_2.type === "function")) !== null &&
  var_d_1 !== undefined ? var_d_1 : fn_i();
  var var_E_1 = var_v(param_e_1.declarations);
  try {
  for (var_E_1.s();
  !(var_b_1 = var_E_1.n()).done;
  ) {
  var var_D_1 = var_b_1.value;
  fn_c(var_D_1.id, var_w_1.names);
  }
  }
  catch (var_e) {
  var_E_1.e(var_e);
  }
  finally {
  var_E_1.f();
  }
  break;
  case "ClassDeclaration":
  if (param_e_1.id?.name) {
  fn_i().names.add(param_e_1.id.name);
  }
  break;
  case "LabeledStatement":
  if (param_e_1.label?.type === "Identifier") {
  fn_i().names.add(param_e_1.label.name);
  }
  break;
  case "Identifier":
  if (param_e_1.name === var_s_1) {
  return;
  }
  if ((param_r == null ? undefined : param_r.type) === "Property" &&
  param_r.key === param_e_1 && !param_r.computed) {
  return;
  }
  if ((param_r == null ? undefined : param_r.type) === "MethodDefinition" &&
  param_r.key === param_e_1 && !param_r.computed) {
  return;
  }
  if ((param_r == null ? undefined : param_r.type) === "MemberExpression" &&
  param_r.property === param_e_1 && !param_r.computed) {
  if (param_r.object.type === "ThisExpression") {
  return;
  }
  var var_T_1 = var_p(param_r, this.source);
  if (!var_T_1) {
  return;
  }
  var var_k_1 = this.declaredVariables.get(var_T_1);
  if (var_k_1) {
  var_k_1.dependents.add(param_t);
  var_n.add(var_T_1);
  }
  else if (param_r.object.type === "Identifier") {
  var var_A_1 = param_r.object.name;
  var var_C_1 = this.declaredVariables.get(var_A_1);
  if ((var_C_1 || var_A_1 === this.iifeParamName) && !fn_a(var_A_1) &&
  !var_u.has(var_A_1)) {
  if (var_C_1 != null) {
  var_C_1.dependents.add(param_t);
  }
  var_n.add(var_T_1);
  var var_x_1 = this.dependentsTracker.get(var_T_1);
  if (var_x_1) {
  var_x_1.add(param_t);
  }
  else {
  this.dependentsTracker.set(var_T_1, new Set([param_t]));
  }
  }
  }
  return;
  }
  if ((param_r == null ? undefined : param_r.type) === "MetaProperty") {
  return;
  }
  if (fn_a(param_e_1.name) || var_u.has(param_e_1.name)) {
  return;
  }
  var_n.add(param_e_1.name);
  var var_S_1 = this.declaredVariables.get(param_e_1.name);
  if (var_S_1) {
  var_S_1.dependents.add(param_t);
  }
  else {
  var var_O_1 = this.dependentsTracker.get(param_e_1.name);
  if (var_O_1) {
  var_O_1.add(param_t);
  }
  else {
  this.dependentsTracker.set(param_e_1.name, new Set([param_t]));
  }
  }
  break;
  case "ForStatement":
  case "ForInStatement":
  case "ForOfStatement":
  list_o.push({
  names: new Set(),
  type: "block"
  }
  );
  }
  }
  ,
  leave: param_e_1 => {
  switch (param_e_1.type) {
  case "FunctionDeclaration":
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  case "BlockStatement":
  case "CatchClause":
  case "ForStatement":
  case "ForInStatement":
  case "ForOfStatement":
  if (list_o.length > 1) {
  list_o.pop();
  }
  }
  }
  }
  );
  return var_n;
  }
  getExtractedMatches() {
  return this.extractionStates.filter(param_e => !!param_e.node);
  }
  getSource() {
  return this.source;
  }
  }
  function var_b(param_e, param_t) {
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
  (param_e, param_t) || var_E(param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_w(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = var_E(param_e)) || param_t &&
  param_e && typeof param_e.length == "number") {
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
  function var_E(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return var_D(param_e, param_t);
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
  return var_D(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function var_D(param_e, param_t) {
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
  class var_T {
  constructor(param_e) {
  this.analyzer = param_e;
  }
  areSafeArgs(param_e, param_t = "strict") {
  return (param_e ?? []).every(param_e_1 => !!param_e_1 && param_e_1.type !== "SpreadElement" &&
  this.isSafeInitializer(param_e_1, param_t));
  }
  isSafeInitializer(param_e) {
  var var_t;
  var var_r = arguments.length > 1 && arguments[1] !== undefined ?
  arguments[1] : "strict";
  if (!param_e) {
  return true;
  }
  switch (param_e.type) {
  case "ClassExpression":
  return true;
  case "Literal":
  var var_n = param_e;
  return typeof var_n.value == "string" || typeof var_n.value == "number" ||
  typeof var_n.value == "boolean" || var_n.value === null ||
  Boolean(var_n.regex);
  case "TemplateLiteral":
  return param_e.expressions.every(param_e_1 => this.isSafeInitializer(param_e_1,
  var_r));
  case "ArrayExpression":
  return param_e.elements.every(param_e_1 => !param_e_1 || param_e_1.type !== "SpreadElement" &&
  this.isSafeInitializer(param_e_1, var_r));
  case "ObjectExpression":
  return param_e.properties.every(param_e_1 => {
  if (param_e_1.type !== "Property") {
  return false;
  }
  if (param_e_1.computed) {
  return false;
  }
  if (param_e_1.kind !== "init") {
  return false;
  }
  var var_t_1 = param_e_1.value;
  return !!var_t_1 && (var_t_1.type === "FunctionExpression" ||
  var_t_1.type === "ArrowFunctionExpression" || var_t_1.type === "Literal");
  }
  );
  case "CallExpression":
  if (param_e.callee.type === "Identifier" && var_u.has(param_e.callee.name)) {
  return this.areSafeArgs(param_e.arguments, var_r);
  }
  if (param_e.callee.type === "MemberExpression") {
  if (!this.isSafeInitializer(param_e.callee.object, var_r)) {
  return false;
  }
  if (var_r === "strict") {
  var var_o = param_e.callee.property.type === "Identifier" ?
  param_e.callee.property.name : "";
  if (param_e.callee.computed || !var_u.has(var_o)) {
  return false;
  }
  }
  return this.areSafeArgs(param_e.arguments, var_r);
  }
  return false;
  case "NewExpression":
  if (param_e.callee.type === "Identifier") {
  if (var_u.has(param_e.callee.name)) {
  return this.areSafeArgs(param_e.arguments, var_r);
  }
  if (var_r === "loose") {
  return this.areSafeArgs(param_e.arguments, var_r);
  }
  }
  return false;
  case "UnaryExpression":
  return this.isSafeInitializer(param_e.argument, var_r);
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  case "Identifier":
  return true;
  case "MemberExpression":
  if (var_r === "loose") {
  return (!param_e.computed || !!this.isSafeInitializer(param_e.property, var_r)) &&
  this.isSafeInitializer(param_e.object, var_r);
  }
  else {
  return !param_e.computed && param_e.property.type === "Identifier" &&
  param_e.property.name === "prototype";
  }
  case "LogicalExpression":
  case "BinaryExpression":
  return this.isSafeInitializer(param_e.left, var_r) && this.isSafeInitializer(param_e.right,
  var_r);
  case "ConditionalExpression":
  return var_r === "loose" && this.isSafeInitializer(param_e.test, var_r) &&
  this.isSafeInitializer(param_e.consequent, var_r) && this.isSafeInitializer(param_e.alternate,
  var_r);
  case "SequenceExpression":
  return var_r === "loose" && param_e.expressions.every(param_e_1 => this.isSafeInitializer(
  param_e_1, var_r));
  case "AssignmentExpression":
  if (param_e.left.type !== "MemberExpression" || param_e.left.computed) {
  if (param_e.left.type === "Identifier" && this.analyzer.declaredVariables.has(
  param_e.left.name)) {
  return this.isSafeInitializer(param_e.right, var_r);
  }
  }
  else {
  var var_i = param_e.left.object;
  if (var_i.type === "Identifier" && ((var_t = this.analyzer.declaredVariables.get(
  var_i.name)) === null || var_t === undefined ? undefined :
  var_t.node.init) !== undefined) {
  return this.isSafeInitializer(param_e.right, var_r);
  }
  }
  return false;
  default:
  return false;
  }
  }
  getInitializerFallback(param_e) {
  switch (param_e == null ? undefined : param_e.type) {
  case "ObjectExpression":
  case "NewExpression":
  case "MemberExpression":
  case "LogicalExpression":
  return "{}";
  case "ArrayExpression":
  return "[]";
  default:
  return "undefined";
  }
  }
  renderNode(param_e, param_t) {
  var var_r;
  var var_n;
  var var_o;
  var var_i = arguments.length > 2 && arguments[2] !== undefined ?
  arguments[2] : {
  };
  var var_a_1 = this.analyzer.getSource();
  var var_s_1 = this.analyzer.declaredVariables;
  var var_c_1 = var_i.disallowSideEffectInitializers;
  var var_u_1 = typeof var_c_1 == "object" && var_c_1 !== null &&
  (var_r = var_c_1.mode) !== null && var_r !== undefined ? var_r :
  "strict";
  var var_l_1 = Boolean(var_c_1);
  var var_f_1 = param_e.type === "AssignmentExpression" ? param_e :
  param_e.type === "ExpressionStatement" && param_e.expression.type === "AssignmentExpression" ?
  param_e.expression : null;
  var var_h_1 = var_f_1 && var_f_1.operator === "=" ? var_f_1.right :
  param_e.type === "VariableDeclarator" ? param_e.init : null;
  var var_m_1 = var_l_1 && var_h_1 && !this.isSafeInitializer(var_h_1, var_u_1);
  var var_g_1 = this.getInitializerFallback(var_h_1);
  var var_v_1 = var_g_1;
  if (!var_m_1 && var_h_1) {
  if (param_t || var_h_1.type !== "Identifier" || var_s_1.has(var_h_1.name)) {
  var var_y_1 = var_f_1 == null ? undefined : var_f_1.left;
  if (((var_h_1 == null ? undefined : var_h_1.type) !== "MemberExpression" ||
  !!var_h_1.computed || var_h_1.property.type !== "Identifier" ||
  var_h_1.property.name !== "prototype") && (var_y_1 == null ?
  undefined : var_y_1.type) === "MemberExpression" && var_h_1 &&
  var_l_1 && var_y_1.object.type === "Identifier" && var_h_1.type !== "FunctionExpression" &&
  var_h_1.type !== "ArrowFunctionExpression" && var_h_1.type !== "LogicalExpression" &&
  var_h_1.type !== "ClassExpression") {
  return `  // Skipped ${var_p(var_y_1, var_a_1)}
   assignment.`;
  }
  var_v_1 = ((var_n = var_d(var_h_1, var_a_1)) === null || var_n === undefined ?
  undefined : var_n.trim().replace(/;\s*$/, "")) || "undefined // [JsExtractor] Failed to extract initializer source.";
  }
  else {
  var_v_1 = var_g_1;
  }
  }
  if (!var_m_1 && !!var_h_1 && var_h_1.type === "SequenceExpression" &&
  !var_v_1.startsWith("(")) {
  var_v_1 = `(${var_v_1}
  )`;
  }
  var var___1 = `${param_e.type === "VariableDeclarator" && param_e.id.type === "Identifier" ?
  param_e.id.name : var_f_1 && var_f_1.left.type === "Identifier" ?
  var_f_1.left.name : (var_f_1 == null ? undefined : var_f_1.type) === "AssignmentExpression" ?
  (var_o = var_p(var_f_1.left, var_a_1)) === null || var_o === undefined ?
  undefined : var_o.trim() : "unknown"}
   = ${var_v_1}
  ;`;
  if (param_e.type === "VariableDeclarator" && param_e.init &&
  !param_t) {
  return "  var " + var___1;
  }
  else {
  return "  " + var___1;
  }
  }
  buildScript(param_e) {
  var var_n = this;
  var var_o = param_e.maxDepth;
  var var_i = var_o === undefined ? Infinity : var_o;
  var var_a_1 = param_e.forceVarPredeclaration;
  var var_s_1 = var_a_1 !== undefined && var_a_1;
  var var_c_1 = param_e.exportRawValues;
  var var_u_1 = var_c_1 !== undefined && var_c_1;
  var var_l_1 = param_e.rawValueOnly;
  var var_f_1 = var_l_1 === undefined ? [] : var_l_1;
  var var_m_1 = this.analyzer.getExtractedMatches();
  var var_g_1 = new Set(var_m_1.map(param_e_1 => {
  return param_e_1.metadata?.name || "";
  }
  ));
  var list_v = [];
  var var_y_1 = new Set();
  var var___1 = new Map();
  var obj_E = {
  };
  function var_D_1(param_e_1) {
  if (param_e_1 && !param_e_1.includes(".")) {
  var_y_1.add(param_e_1);
  }
  }
  var var_T_1;
  function var_k_1(param_t, param_r = 0, param_o) {
  if (param_t && !(param_r > var_i)) {
  var var_a_2;
  var var_c_2 = var_w(param_t.dependencies);
  try {
  for (var_c_2.s();
  !(var_a_2 = var_c_2.n()).done;
  ) {
  var var_u_2 = var_a_2.value;
  if (param_o && param_o !== var_u_2) {
  if (!var_g_1.has(param_o)) {
  continue;
  }
  param_o = undefined;
  }
  if (!var_g_1.has(var_u_2)) {
  var_g_1.add(var_u_2);
  var var_l_2 = var_n.analyzer.declaredVariables.get(var_u_2);
  if (var_l_2) {
  var var_d_1 = var_s_1 || var_l_2.predeclared;
  if (var_d_1) {
  var_D_1(var_u_2);
  }
  var_k_1(var_l_2, param_r + 1, param_o);
  list_v.push(var_n.renderNode(var_l_2.node, var_d_1, param_e));
  if (var_l_2.prototypeAliases.size > 0) {
  var var_p_1;
  var var_f_2 = var_w(var_l_2.prototypeAliases);
  try {
  for (var_f_2.s();
  !(var_p_1 = var_f_2.n()).done;
  ) {
  var var_h_1;
  var var_m_2 = var_b(var_p_1.value, 2);
  var var_y_2 = var_m_2[1];
  var var___2 = var_w(var_y_2);
  try {
  for (var___2.s();
  !(var_h_1 = var___2.n()).done;
  ) {
  var var_E_1 = var_h_1.value;
  var_k_1(var_E_1, param_r);
  list_v.push(var_n.renderNode(var_E_1.node, var_d_1, param_e));
  }
  }
  catch (var_e) {
  var___2.e(var_e);
  }
  finally {
  var___2.f();
  }
  }
  }
  catch (var_e) {
  var_f_2.e(var_e);
  }
  finally {
  var_f_2.f();
  }
  }
  }
  }
  }
  }
  catch (var_e) {
  var_c_2.e(var_e);
  }
  finally {
  var_c_2.f();
  }
  }
  }
  var var_A_1 = var_w(var_m_1);
  try {
  for (var_A_1.s();
  !(var_T_1 = var_A_1.n()).done;
  ) {
  var var_C_1 = var_T_1.value;
  var var_x_1 = var_C_1.config.friendlyName;
  var var_S_1 = var_x_1 && var_f_1.includes(var_x_1);
  if (var_C_1.metadata) {
  if (!var_S_1) {
  list_v.push(`  //#region --- start [${var_x_1 || "Unknown"}
  ] ---`);
  }
  var var_O_1 = (var_s_1 || var_C_1.metadata.predeclared) &&
  !var_S_1;
  var var_I_1 = var_C_1.config.onlyProcessMatchContext;
  if (var_O_1) {
  var_D_1(var_C_1.metadata.name);
  }
  if (var_C_1.config.collectDependencies && !var_S_1) {
  var var_L_1 = undefined;
  var var_R_1 = var_C_1.matchContext;
  if ((var_R_1 == null ? undefined : var_R_1.type) === "NewExpression" &&
  var_I_1) {
  if (var_R_1.callee.type === "Identifier") {
  var_L_1 = var_R_1.callee.name;
  }
  else if (var_R_1.callee.type === "MemberExpression") {
  var_L_1 = var_p(var_R_1.callee, this.analyzer.getSource()) ||
  undefined;
  }
  }
  var_k_1(var_C_1.metadata, undefined, var_L_1);
  }
  if (var_C_1.matchContext && var_x_1 && (var___1.set(var_x_1, var_C_1.matchContext),
  var_u_1)) {
  var var_P_1 = var_C_1.matchContext;
  var var_B_1 = this.analyzer.getSource();
  var var_M_1 = null;
  var_M_1 = var_P_1.type === "Property" ? var_d(var_P_1.value, var_B_1) :
  var_P_1.type === "Identifier" ? var_P_1.name : var_d(var_P_1, var_B_1);
  obj_E[var_x_1] = var_M_1;
  }
  if (!var_S_1) {
  if (!var_I_1) {
  list_v.push(this.renderNode(var_C_1.metadata.node, var_O_1, param_e));
  }
  list_v.push(`  //#endregion --- end [${var_x_1 || "Unknown"}
  ] ---\n`);
  }
  }
  }
  }
  catch (var_e) {
  var_A_1.e(var_e);
  }
  finally {
  var_A_1.f();
  }
  var list_F = [];
  list_F.push("const __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis :");
  list_F.push("  typeof self !== 'undefined' ? self :");
  list_F.push("  typeof window !== 'undefined' ? window :");
  list_F.push("  typeof global !== 'undefined' ? global : {};\n");
  list_F.push(`const exportedVars = (function(${this.analyzer.iifeParamName}
  ) {`);
  list_F.push("  const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);");
  list_F.push("  const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};");
  list_F.push("  const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n");
  if (var_y_1.size > 0) {
  list_F.push(`  var ${Array.from(var_y_1).join(", ")}
  ;\n`);
  }
  list_F.push(list_v.join("\n"));
  var var_U_1;
  var list_N = [];
  var var_j_1 = var_w(var___1);
  try {
  for (var_j_1.s();
  !(var_U_1 = var_j_1.n()).done;
  ) {
  var var_q = var_b(var_U_1.value, 2);
  var var_H = var_q[0];
  var var_V = var_q[1];
  var var_W = null;
  if (var_V.type === "Identifier") {
  var var_z = this.analyzer.declaredVariables.get(var_V.name);
  if ((var_z == null ? undefined : var_z.node)?.type === "VariableDeclarator" &&
  var_z.node.init?.type === "FunctionExpression") {
  var_W = var_z.node;
  }
  }
  else if (var_V.type === "CallExpression" || var_V.type === "NewExpression" ||
  var_V.type === "VariableDeclarator") {
  var_W = var_V;
  }
  if (var_W) {
  var var_Y = var_h(this.analyzer, var_H, var_W);
  if (var_Y) {
  list_F.push(var_Y + "\n");
  list_N.push(var_H);
  }
  }
  }
  }
  catch (var_e) {
  var_j_1.e(var_e);
  }
  finally {
  var_j_1.f();
  }
  if (var_u_1) {
  var var_G = JSON.stringify(obj_E, null, "  ".length).split("\n");
  var var_Q = `${var_G[0]}
  \n${var_G.slice(1).map(param_e_1 => "  " + param_e_1).join("\n")}
  `;
  list_F.push(`  const rawValues = ${var_Q}
  ;\n`);
  list_N.push("rawValues");
  }
  list_F.push(`  return { ${list_N.join(", ")}
   };`);
  list_F.push("})({});\n");
  return {
  output: list_F.join("\n"),
  exported: list_N,
  exportedRawValues: var_u_1 ? obj_E : undefined
  };
  }
  }
  function var_k(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = var_C(param_e)) || param_t &&
  param_e && typeof param_e.length == "number") {
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
  function var_A(param_e, param_t) {
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
  (param_e, param_t) || var_C(param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_C(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return var_x(param_e, param_t);
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
  return var_x(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function var_x(param_e, param_t) {
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
  function var_S(param_e) {
  if (param_e.type !== "VariableDeclarator") {
  return false;
  }
  var var_t = param_e.init;
  if (!var_t || var_t.type !== "FunctionExpression") {
  return false;
  }
  if (var_t.params.length < 3) {
  return false;
  }
  var var_r = var_A(var_t.params, 3);
  var var_n = var_r[0];
  var var_o = var_r[1];
  var var_i = var_r[2];
  if (var_n.type !== "Identifier" || var_o.type !== "AssignmentPattern" ||
  var_i.type !== "AssignmentPattern") {
  return false;
  }
  var var_a_1;
  var var_s_1 = var_t.body;
  var flag_c = false;
  var flag_u = false;
  var var_l_1 = var_k((var_s_1 == null ? undefined : var_s_1.body) ||
  []);
  try {
  for (var_l_1.s();
  !(var_a_1 = var_l_1.n()).done;
  ) {
  var var_d_1 = var_a_1.value;
  if (var_d_1.type === "ExpressionStatement") {
  var var_p_1 = var_d_1.expression;
  if (var_p_1.type === "AssignmentExpression" && var_p_1.operator === "=" &&
  var_p_1.left.type === "Identifier" && var_p_1.left.name === var_n.name) {
  var var_f_1 = var_p_1.right;
  if (var_f_1.type === "NewExpression" && var_f_1.callee.type === "MemberExpression") {
  flag_c = true;
  }
  }
  if (var_p_1.type === "CallExpression" && var_p_1.callee.type === "MemberExpression") {
  var var_h_1 = var_p_1.arguments;
  if (var_h_1.length === 2 && var_h_1[0].type === "Literal" &&
  var_h_1[0].value === "alr" && var_h_1[1].type === "Literal" &&
  var_h_1[1].value === "yes") {
  flag_u = true;
  }
  }
  }
  }
  }
  catch (var_e) {
  var_l_1.e(var_e);
  }
  finally {
  var_l_1.f();
  }
  return !!flag_c && !!flag_u && param_e;
  }
  function var_O(param_e) {
  if (param_e.type !== "VariableDeclarator" || param_e.init?.type !== "FunctionExpression") {
  return false;
  }
  var var_r = param_e.init.body;
  if (!var_r) {
  return false;
  }
  var var_n = null;
  var_l(var_r, param_e_1 => {
  if (param_e_1.type === "ObjectExpression") {
  var var_t;
  var var_r_1 = var_k(param_e_1.properties);
  try {
  for (var_r_1.s();
  !(var_t = var_r_1.n()).done;
  ) {
  var var_o = var_t.value;
  if (var_o.type === "Property" && var_o.key.type === "Identifier" &&
  var_o.key.name === "signatureTimestamp") {
  var_n = var_o;
  return var_c;
  }
  }
  }
  catch (var_e) {
  var_r_1.e(var_e);
  }
  finally {
  var_r_1.f();
  }
  }
  }
  );
  return var_n || false;
  }
  function var_I(param_e, param_t) {
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
  (param_e, param_t) || var_R(param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_L(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = var_R(param_e)) || param_t &&
  param_e && typeof param_e.length == "number") {
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
  function var_R(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return var_P(param_e, param_t);
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
  return var_P(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function var_P(param_e, param_t) {
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
  function var_B() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_r = typeof Symbol == "function" ? Symbol : {
  };
  var var_n = var_r.iterator || "@@iterator";
  var var_o = var_r.toStringTag || "@@toStringTag";
  function var_i(param_r, param_n, param_o, param_i) {
  var var_c_2 = param_n && param_n.prototype instanceof var_s_1 ?
  param_n : var_s_1;
  var var_u_2 = Object.create(var_c_2.prototype);
  var_M(var_u_2, "_invoke", function (param_r_1, param_n_1, param_o_1) {
  var var_i_1;
  var var_s_2;
  var var_c_3;
  var num_u = 0;
  var var_l_2 = param_o_1 || [];
  var flag_d = false;
  var obj_p = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_f_1,
  f: var_f_1.bind(var_e, 4),
  d: function (param_t, param_r_2) {
  var_i_1 = param_t;
  var_s_2 = 0;
  var_c_3 = var_e;
  obj_p.n = param_r_2;
  return obj_a;
  }
  };
  function var_f_1(param_r_2, param_n_2) {
  var_s_2 = param_r_2;
  var_c_3 = param_n_2;
  var_t = 0;
  for (;
  !flag_d && num_u && !var_o_1 && var_t < var_l_2.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_l_2[var_t];
  var var_f_2 = obj_p.p;
  var var_h_1 = var_i_2[2];
  if (param_r_2 > 3) {
  if (var_o_1 = var_h_1 === param_n_2) {
  var_c_3 = var_i_2[(var_s_2 = var_i_2[4]) ? 5 : (var_s_2 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_f_2) {
  if (var_o_1 = param_r_2 < 2 && var_f_2 < var_i_2[1]) {
  var_s_2 = 0;
  obj_p.v = param_n_2;
  obj_p.n = var_i_2[1];
  }
  else if (var_f_2 < var_h_1 && (var_o_1 = param_r_2 < 3 || var_i_2[0] > param_n_2 ||
  param_n_2 > var_h_1)) {
  var_i_2[4] = param_r_2;
  var_i_2[5] = param_n_2;
  obj_p.n = var_h_1;
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
  var_f_1(param_l, param_h);
  }
  var_s_2 = param_l;
  var_c_3 = param_h;
  while ((var_t = var_s_2 < 2 ? var_e : var_c_3) || !flag_d) {
  if (!var_i_1) {
  if (var_s_2) {
  if (var_s_2 < 3) {
  if (var_s_2 > 1) {
  obj_p.n = -1;
  }
  var_f_1(var_s_2, var_c_3);
  }
  else {
  obj_p.n = var_c_3;
  }
  }
  else {
  obj_p.v = var_c_3;
  }
  }
  try {
  num_u = 2;
  if (var_i_1) {
  if (!var_s_2) {
  param_o_2 = "next";
  }
  if (var_t = var_i_1[param_o_2]) {
  if (!(var_t = var_t.call(var_i_1, var_c_3))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_c_3 = var_t.value;
  if (var_s_2 < 2) {
  var_s_2 = 0;
  }
  }
  else {
  if (var_s_2 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_s_2 < 2) {
  var_c_3 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_s_2 = 1;
  }
  }
  var_i_1 = var_e;
  }
  else if ((var_t = (flag_d = obj_p.n < 0) ? var_c_3 : param_r_1.call(param_n_1,
  obj_p)) !== obj_a) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_s_2 = 1;
  var_c_3 = var_t_1;
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
  return var_u_2;
  }
  var obj_a = {
  };
  function var_s_1() {
  }
  function var_c_1() {
  }
  function var_u_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_l_1 = [][var_n] ? var_t(var_t([][var_n]())) : (var_M(var_t = {
  }
  , var_n, function () {
  return this;
  }
  ), var_t);
  var var_d_1 = var_u_1.prototype = var_s_1.prototype = Object.create(var_l_1);
  function var_p_1(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_u_1);
  }
  else {
  param_e.__proto__ = var_u_1;
  var_M(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_d_1);
  return param_e;
  }
  var_c_1.prototype = var_u_1;
  var_M(var_d_1, "constructor", var_u_1);
  var_M(var_u_1, "constructor", var_c_1);
  var_c_1.displayName = "GeneratorFunction";
  var_M(var_u_1, var_o, "GeneratorFunction");
  var_M(var_d_1);
  var_M(var_d_1, var_o, "Generator");
  var_M(var_d_1, var_n, function () {
  return this;
  }
  );
  var_M(var_d_1, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_B = function () {
  return {
  w: var_i,
  m: var_p_1
  };
  }
  )();
  }
  function var_M(param_e, param_t, param_r, param_n) {
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
  (var_M = function (param_e_1, param_t_1, param_r_1, param_n_1) {
  function var_i(param_t_2, param_r_2) {
  var_M(param_e_1, param_t_2, function (param_e_2) {
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
  function var_F(param_e, param_t, param_r, param_n) {
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
  class var_U {
  static get PLAYER_CONFIG_RX() {
  return /ytInitialPlayerResponse\s*=\s*({.+});(var meta)?/i;
  }
  static get PLAYER_URL_RX() {
  return /(src|href)=['"]([a-z0-9\-_\/\.]*player\/[a-z0-9\-_\/\.]*\/base\.js)['"]/i;
  }
  static get PLAYER_URL_MUSIC_RX() {
  return /"jsUrl":\s*"(.+?\/base.js)"/;
  }
  static get USER_SESSION_ID_RX() {
  return /"USER_SESSION_ID"\s*:\s*"(.+?)"/;
  }
  static get VISITOR_DATA_RX() {
  return /"VISITOR_DATA":\s*"([^"]+)"/i;
  }
  static get INNERTUBE_API_KEY_RX() {
  return /"innertubeApiKey":\s*"([^"]+)"/i;
  }
  static get INNERTUBE_CONTEXT_CLIENT_VERSION_RX() {
  return /"innertubeContextClientVersion":\s*"([^"]+)"/i;
  }
  static get DATASYNC_ID_RX() {
  return /"datasyncId":\s*"([^"]+)"/i;
  }
  static fetchConfigs(param_e) {
  var var_s_1;
  return var_F(this, undefined, undefined, var_B().m(function var_f_1() {
  var var_h_1;
  var var_m_1;
  var var_g_1;
  var var_v_1;
  var var_y_1;
  var var___1;
  var var_b_1;
  var var_w_1;
  var var_E_1;
  var var_D_1;
  return var_B().w(function (param_f) {
  while (true) {
  switch (param_f.p = param_f.n) {
  case 0:
  if (!(var_h_1 = `https://${location.hostname}
  /watch?v=${param_e}
  &has_verified=1`).match(/(youtube-nocookie)/i)) {
  param_f.n = 2;
  break;
  }
  param_f.n = 1;
  return Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CORS_FETCH,
  data: {
  url: `https://www.youtube.com/watch?v=${param_e}
  &has_verified=1`,
  responseType: "text"
  }
  }
  );
  case 1:
  var_m_1 = param_f.v.data;
  param_f.n = 4;
  break;
  case 2:
  param_f.n = 3;
  return fetch(var_h_1).then(param_e_1 => param_e_1.text()).catch(() => Object(dep_dom_utils.send)(
  "GET", var_h_1).then(param_e_1 => param_e_1.responseText));
  case 3:
  var_m_1 = param_f.v;
  case 4:
  this.visitorData = var_m_1.match(this.VISITOR_DATA_RX)?.[1];
  this.apiKey = var_m_1.match(this.INNERTUBE_API_KEY_RX)?.[1];
  this.clientVersion = var_m_1.match(this.INNERTUBE_CONTEXT_CLIENT_VERSION_RX)?.[1];
  this.datasyncId = (var_s_1 = var_m_1.match(this.DATASYNC_ID_RX)?.[1]) === null ||
  var_s_1 === undefined ? undefined : var_s_1.replace(/\|/g, "");
  if (var_g_1 = var_m_1.match(this.USER_SESSION_ID_RX)) {
  this.ssId = var_g_1[1];
  }
  var_v_1 = var_m_1.slice(0, var_m_1.indexOf("var meta =") + 1 ||
  undefined).match(this.PLAYER_CONFIG_RX)?.[1] || "";
  try {
  if (var_v_1) {
  JSON.parse(var_v_1);
  }
  }
  catch (var_e) {
  var_v_1 = var_v_1.slice(0, var_v_1.indexOf("};<") + 1 || undefined).match(/({.+});?/)?.[1] ||
  "";
  }
  param_f.n = 5;
  return chrome.storage.local.get(dep_media_constants.w);
  case 5:
  var_y_1 = param_f.v;
  if (var___1 = var_y_1[dep_media_constants.w]?.playerUrl ||
  var_m_1.match(this.PLAYER_URL_RX)?.[2] || var_m_1.match(this.PLAYER_URL_MUSIC_RX)?.[1]) {
  this.foundPlayerUrlFromConfig = var___1;
  }
  if (this.playerScript) {
  param_f.n = 7;
  break;
  }
  param_f.n = 6;
  return fetch(var___1).then(param_e_1 => param_e_1.text());
  case 6:
  this.playerScript = param_f.v;
  case 7:
  if (!(var_b_1 = this.parseConfig(var_v_1))) {
  param_f.n = 8;
  break;
  }
  return param_f.a(2, var_b_1);
  case 8:
  param_f.p = 8;
  var_w_1 = new DOMParser();
  (var_E_1 = var_w_1.parseFromString(var_m_1, "text/html")).querySelectorAll("script");
  var_D_1 = Array.from(var_E_1.querySelectorAll("body script")).map(param_e_1 => {
  var var_t;
  return ((var_t = param_e_1.innerText) === null || var_t === undefined ?
  undefined : var_t.match(this.PLAYER_CONFIG_RX))?.[1];
  }
  ).find(param_e_1 => !!param_e_1);
  return param_f.a(2, this.parseConfig(var_D_1 || ""));
  case 9:
  param_f.p = 9;
  param_f.v;
  return param_f.a(2, null);
  }
  }
  }
  , var_f_1, this, [[8, 9]]);
  }
  ));
  }
  static getConfigFromSite() {
  var var_t = Array.from(document.querySelectorAll("script")).find(param_e => param_e.innerText.includes(
  "ytInitialPlayerResponse"))?.innerText || "";
  return this.parseConfig(var_t);
  }
  static get playerURL() {
  return document.querySelector("link[href*=\"player/\"][href*=\"/base\"], script[src*=\"player/\"][src*=\"/base\"]")?.href ||
  this.foundPlayerUrlFromConfig;
  }
  static get signatureTimestamp() {
  var var_e = this.playerScript.match(/(signatureTimestamp|sts):(\d+)/);
  if (var_e == null ? undefined : var_e[2]) {
  return parseInt(var_e[2]);
  }
  else {
  return undefined;
  }
  }
  static parseConfig(param_e) {
  try {
  return JSON.parse(param_e);
  }
  catch (var_e) {
  Object(dep_dom_utils.devLog)(var_e);
  return null;
  }
  }
  static getNeededMetadataFromConfig(param_e, param_t) {
  return var_F(this, undefined, undefined, var_B().m(function var_r() {
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_c_1;
  var var_u_1;
  var var_l_1;
  var var_d_1;
  var var_p_1;
  var var_f_1;
  var var_h_1;
  var var_m_1;
  var var_g_1;
  var var_v_1;
  return var_B().w(function (param_r) {
  while (true) {
  switch (param_r.p = param_r.n) {
  case 0:
  if (param_e && param_e.playabilityStatus && param_e.playabilityStatus.status) {
  param_r.n = 1;
  break;
  }
  throw new Error("Invalid playabilityStatus");
  case 1:
  if (param_e.playabilityStatus.status !== "LOGIN_REQUIRED") {
  param_r.n = 2;
  break;
  }
  throw new Error("LOGIN_REQUIRED");
  case 2:
  if (param_e.playabilityStatus.status === "OK") {
  param_r.n = 3;
  break;
  }
  throw new Error("API_ERROR");
  case 3:
  if (param_e.playabilityStatus.reason !== "This video is unavailable") {
  param_r.n = 4;
  break;
  }
  throw new Error("VIDEO_UNAVAILABLE");
  case 4:
  if (param_e.videoDetails.shortDescription !== "Video Not Available") {
  param_r.n = 5;
  break;
  }
  throw new Error("VIDEO_NOT_AVAILABLE");
  case 5:
  if (param_e.streamingData) {
  param_r.n = 6;
  break;
  }
  throw new Error("INVALID_STREAMING_DATA");
  case 6:
  param_e.streamingData.formats = [...(param_e.streamingData.adaptiveFormats ||
  []), ...(param_e.streamingData.formats || [])];
  if (!((var_i = param_e.streamingData.formats.filter(param_e_1 => param_e_1.url)).length / param_e.streamingData.formats.length > 0.4)) {
  param_r.n = 10;
  break;
  }
  param_r.p = 7;
  param_r.n = 8;
  return var_j(var_i);
  case 8:
  return param_r.a(2, {
  formats: param_e.streamingData.formats,
  player_response: {
  captions: param_e.captions
  }
  ,
  videoDetails: param_e.videoDetails
  }
  );
  case 9:
  param_r.p = 9;
  var_h_1 = param_r.v;
  console.log(var_h_1);
  case 10:
  if (!(param_e.streamingData.formats.filter(param_e_1 => !param_e_1.url &&
  !param_e_1.signatureCipher && !param_e_1.cipher).length / param_e.streamingData.formats.length >= 0.4)) {
  param_r.n = 11;
  break;
  }
  throw new Error("MISSING_URL_CIPHER");
  case 11:
  if (!this.playerURL) {
  param_r.n = 28;
  break;
  }
  var_y_1 = this.playerScript;
  var_b_1 = undefined;
  var_w_1 = undefined;
  var_b_1 = new var__(var_y_1, {
  extractions: [{
  friendlyName: "nsigFunction",
  match: var_S
  }
  , {
  friendlyName: "signatureTimestampVar",
  match: var_O,
  collectDependencies: false
  }
  ]
  }
  );
  if (!(var_w_1 = new var_T(var_b_1).buildScript({
  disallowSideEffectInitializers: true,
  exportRawValues: true,
  rawValueOnly: ["signatureTimestampVar"]
  }
  )).exported.includes("nsigFunction")) {
  console.warn("Youtube.js", "Failed to extract n/sig decipher function.");
  }
  var_a_1 = var_w_1;
  var_s_1 = param_e.videoDetails.videoId;
  document.body.setAttribute("savior-functions", JSON.stringify(var_a_1));
  document.body.setAttribute("savior-meta-video-id", var_s_1);
  param_r.p = 12;
  param_r.p = 13;
  document.body.setAttribute("savior-meta-formats-" + var_s_1, JSON.stringify(param_e.streamingData.formats));
  param_r.n = 14;
  return Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "youtube/youtubejs",
  videoId: param_e.videoDetails.videoId
  }
  );
  case 14:
  if (!(var_c_1 = param_r.v) || !var_c_1.length) {
  var_u_1 = document.body.getAttribute("savior-decoded-meta-formats");
  var_c_1 = JSON.parse(var_u_1 || "[]");
  }
  var_l_1 = var_L(var_c_1);
  param_r.p = 15;
  var_l_1.s();
  case 16:
  if ((var_d_1 = var_l_1.n()).done) {
  param_r.n = 20;
  break;
  }
  var_p_1 = var_d_1.value;
  param_r.p = 17;
  var_f_1 = new URL(var_p_1.url);
  if (param_e.cver) {
  var_f_1.searchParams.set("cver", encodeURIComponent(param_e.cver));
  }
  if (param_t) {
  var_f_1.searchParams.set("pot", param_t);
  }
  var_p_1.url = var_f_1.href;
  param_r.n = 19;
  break;
  case 18:
  param_r.p = 18;
  var_m_1 = param_r.v;
  console.error(var_m_1);
  return param_r.a(3, 19);
  case 19:
  param_r.n = 16;
  break;
  case 20:
  param_r.n = 22;
  break;
  case 21:
  param_r.p = 21;
  var_g_1 = param_r.v;
  var_l_1.e(var_g_1);
  case 22:
  param_r.p = 22;
  var_l_1.f();
  return param_r.f(22);
  case 23:
  param_r.n = 24;
  return var_j(var_c_1);
  case 24:
  return param_r.a(2, {
  formats: var_c_1,
  player_response: {
  captions: param_e.captions
  }
  ,
  videoDetails: param_e.videoDetails
  }
  );
  case 25:
  param_r.p = 25;
  var_v_1 = param_r.v;
  console.error(var_v_1);
  case 26:
  param_r.p = 26;
  document.body.removeAttribute("savior-functions");
  document.body.removeAttribute("savior-meta-video-id");
  document.body.removeAttribute("savior-meta-formats-" + var_s_1);
  document.body.removeAttribute("savior-decoded-meta-formats");
  return param_r.f(26);
  case 27:
  param_r.n = 29;
  break;
  case 28:
  throw new Error("PLAYER_FILE_NOT_FOUND");
  case 29:
  return param_r.a(2);
  }
  }
  var var_y_1;
  var var_b_1;
  var var_w_1;
  }
  , var_r, this, [[17, 18], [15, 21, 22, 23], [13, 25], [12,, 26, 27], [7, 9]]);
  }
  ));
  }
  static getMetadataFromVideoID(param_e, param_t) {
  return var_F(this, undefined, undefined, var_B().m(function var_r() {
  var var_n;
  var var_o;
  return var_B().w(function (param_r) {
  while (true) {
  switch (param_r.p = param_r.n) {
  case 0:
  param_r.n = 1;
  return this.fetchConfigs(param_e);
  case 1:
  if (var_n = param_r.v) {
  param_r.n = 2;
  break;
  }
  throw new Error("Cannot fetch config");
  case 2:
  param_r.p = 2;
  return param_r.a(2, this.getNeededMetadataFromConfig(var_n, param_t));
  case 3:
  param_r.p = 3;
  var_o = param_r.v;
  console.error(var_o);
  throw var_o;
  case 4:
  return param_r.a(2);
  }
  }
  }
  , var_r, this, [[2, 3]]);
  }
  ));
  }
  }
  function var_N(param_e) {
  return param_e.height || param_e.bitrate;
  }
  function var_j(param_e) {
  return var_F(this, undefined, undefined, var_B().m(function var_t() {
  var var_r;
  var var_o;
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_c_1;
  var var_u_1;
  var var_l_1;
  var var_d_1;
  return var_B().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  var_r = param_e.filter(param_e_1 => param_e_1.mimeType.includes("video")).reduce(
  (param_e_1, param_t_1) => var_N(param_e_1) < var_N(param_t_1) ?
  param_t_1 : param_e_1, param_e[0]);
  var_o = param_e.filter(param_e_1 => param_e_1.mimeType.includes("audio")).reduce(
  (param_e_1, param_t_1) => var_N(param_e_1) < var_N(param_t_1) ?
  param_t_1 : param_e_1, param_e[0]);
  if (var_r.url && var_o.url) {
  param_t.n = 1;
  break;
  }
  throw new Error("MISSING_URL_CIPHER");
  case 1:
  var_i = param_e_1 => !!param_e_1 && param_e_1 >= 200 && param_e_1 < 300;
  param_t.n = 2;
  return Promise.all([Object(dep_dom_utils.fetchStatus)(var_r.url), Object(dep_dom_utils.fetchStatus)(
  var_o.url)]);
  case 2:
  var_a_1 = param_t.v;
  var_s_1 = var_I(var_a_1, 2);
  var_c_1 = var_s_1[0];
  var_u_1 = var_s_1[1];
  if (var_i(var_c_1) && var_i(var_u_1)) {
  param_t.n = 5;
  break;
  }
  param_t.n = 3;
  return Object(dep_dom_utils.sleep)(2000);
  case 3:
  param_t.n = 4;
  return Promise.all([var_i(var_c_1) ? Promise.resolve(var_c_1) :
  Object(dep_dom_utils.fetchStatus)(var_r.url), var_i(var_u_1) ?
  Promise.resolve(var_u_1) : Object(dep_dom_utils.fetchStatus)(var_o.url)]);
  case 4:
  var_l_1 = param_t.v;
  var_d_1 = var_I(var_l_1, 2);
  var_c_1 = var_d_1[0];
  var_u_1 = var_d_1[1];
  case 5:
  if (var_i(var_c_1) && var_i(var_u_1)) {
  param_t.n = 6;
  break;
  }
  throw new Error("REQUEST_SAMPLE_FAILED");
  case 6:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  ));
  }
  var_U.playerScript = "";
  var_U.ssId = "";
  var_U.visitorData = "";
  var_U.apiKey = "";
  var_U.clientVersion = "";
  var_U.datasyncId = "";
  var_U.foundPlayerUrlFromConfig = "";
  };
