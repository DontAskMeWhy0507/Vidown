// Module 740 [tabs] - Tab media session observer and listener
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_dom_utils = requireFn(0);
  var dep_url_utils = requireFn(3);
  var dep_feature_flags = requireFn(11);
  var dep_url_matcher = requireFn(33);
  var dep_settings_manager = requireFn(7);
  var dep_media_constants = requireFn(1);
  var var_u = new class {
  constructor() {
  this._cache = new Map();
  this._timeCache = new Map();
  this._saveUrl = new Map();
  this.setListener();
  }
  report(param_e, param_t, param_r) {
  var var_n = this._cache.has(param_e) && this._cache.get(param_e) ||
  [];
  var_n.push({
  name: param_t,
  result: param_r
  }
  );
  this._cache.set(param_e, var_n);
  this.autoClean(param_e, param_t, param_r);
  EE.emit("request.matched", {
  tabId: param_e,
  data: {
  type: "request.matched",
  name: param_t,
  result: param_r
  }
  }
  );
  }
  fbSetTime(param_e, param_t) {
  this._timeCache.set(param_e, param_t);
  }
  reportFbUrl(param_e, param_t) {
  var var_r = this._saveUrl.has(param_e) && this._saveUrl.get(param_e) ||
  [];
  var_r.push(param_t);
  this._saveUrl.set(param_e, var_r);
  this.cleanFbUrl(param_e, param_t.name);
  EE.emit("request.fb", {
  tabId: param_e,
  data: {
  type: "request.fb"
  }
  }
  );
  }
  removeFbUrl(param_e, param_t) {
  var var_r = this._cache.get(param_e);
  if (var_r && var_r.length) {
  if ((var_r = var_r.filter(param_e_1 => param_e_1.name !== param_t)).length !== 0) {
  this._cache.set(param_e, var_r);
  }
  else {
  this._cache.delete(param_e);
  }
  }
  }
  cleanFbUrl(param_e, param_t) {
  setTimeout(() => {
  this.removeFbUrl(param_e, param_t);
  }
  , 15000);
  }
  removeTask(param_e, param_t, param_r) {
  var var_n = this._cache.get(param_e);
  if (var_n && var_n.length) {
  if ((var_n = var_n.filter(param_e_1 => param_e_1.name !== param_t &&
  param_e_1.result !== param_r)).length !== 0) {
  this._cache.set(param_e, var_n);
  }
  else {
  this._cache.delete(param_e);
  }
  }
  }
  autoClean(param_e, param_t, param_r) {
  setTimeout(() => {
  this.removeTask(param_e, param_t, param_r);
  }
  , 15000);
  }
  setListener() {
  EE.on("request_cache.get_matched_requests", param_e => {
  var var_t;
  if (param_e.id) {
  var var_r = (var_t = this._cache.get(param_e.id)) === null ||
  var_t === undefined ? undefined : var_t.map(param_e_1 => param_e_1.result);
  EE.emit("request_cache.return_matched_requests", {
  id: param_e.id,
  tasks: var_r
  }
  );
  this._cache.delete(param_e.id);
  }
  }
  );
  EE.on("request_cache.get_server_time", param_e => {
  if (param_e.id) {
  var var_t = this._timeCache.get(param_e.id);
  EE.emit("request_cache.return_server_time", {
  id: param_e.id,
  msgId: param_e.msgId,
  serverTime: var_t
  }
  );
  }
  }
  );
  EE.on("request_cache.get_fb_saved_url", param_e => {
  if (param_e.id) {
  var var_t = this._saveUrl.has(param_e.id) ? this._saveUrl.get(param_e.id) :
  [];
  var var_r = var_t == null ? undefined : var_t.find(param_t => param_t.name.includes(
  param_e.name));
  EE.emit("request_cache.return_fb_saved_url", {
  id: param_e.id,
  msgId: param_e.msgId,
  url: var_r
  }
  );
  }
  }
  );
  chrome.tabs.onRemoved.addListener(param_e => {
  this._cache.delete(param_e);
  }
  );
  chrome.tabs.onUpdated.addListener((param_e, param_t) => {
  if (param_t.status === "loading") {
  this._cache.delete(param_e);
  }
  }
  );
  }
  }
  ();
  var list_l = ["unicornmedia.com", "plist.vn-hd.com", "content-aaps1.uplynk.com",
  "playlist-free.vieon.vn", "watch.asiaplayer.site"];
  class var_d {
  constructor() {
  this.name = "default";
  }
  match(param_e, param_t, param_r) {
  var var_o;
  var var_i;
  if ((!(param_e_1 => dep_url_matcher.a.check(param_e_1.url, "requests") ||
  dep_url_matcher.a.check(param_e_1.url))(param_t) || param_e.initiator &&
  param_e.initiator.includes("//vuighe.net") && param_t.url.match(/playlist[\s\S]*\.m3u8/g) ||
  ((var_o = param_e.initiator) === null || var_o === undefined ?
  undefined : var_o.match(/tvzingvn\.net|play\.play[\s\S]*(xyz|net)/g)) &&
  param_t.url.includes(".m3u8") || Object(dep_dom_utils.isSpecialUrls)(param_t.url)) &&
  !param_e.url.match(/https:\/[\s\S]*phim18hd\.net\/link\/[\s\S]*\.m3u/g)) {
  var var_u_1 = param_t;
  if (!((var_i = var_u_1.filename) === null || var_i === undefined ?
  undefined : var_i.trim())) {
  var_u_1.filename = "noname_" + Date.now();
  }
  if (list_l.some(param_e_1 => {
  var var_t;
  if ((var_t = var_u_1.host) === null || var_t === undefined) {
  return undefined;
  }
  else {
  return var_t.includes(param_e_1);
  }
  }
  ) && (Object(dep_media_constants.B)(var_u_1.ext) || var_u_1.ext == "mpd")) {
  var_u_1.type = "video";
  }
  else {
  var_u_1 = Object(dep_dom_utils.detectMediaTypeAndExt)(var_u_1, param_r["content-type"],
  param_r["content-disposition"]);
  if ((!!Object(dep_media_constants.B)(var_u_1.ext) || var_u_1.ext == "mpd") &&
  !var_u_1.type) {
  var_u_1.type = "video";
  }
  }
  if (Object(dep_dom_utils.isValidData)(var_u_1) && !function (param_e_1, param_t_1) {
  var var_r;
  var var_n;
  if ((var_r = param_e_1.host) === null || var_r === undefined ?
  undefined : var_r.includes("vlive-hls.akamaized.net")) {
  return true;
  }
  if (param_e_1.ext !== "flv" && param_e_1.host !== "musicmd1.keeng.net") {
  return false;
  }
  if ((var_n = param_e_1.host) === null || var_n === undefined ?
  undefined : var_n.includes("flv.nimo.tv")) {
  return true;
  }
  var var_o_1 = param_t_1.server;
  return var_o_1 && var_o_1.indexOf("icecast") !== -1;
  }
  (var_u_1, param_r) && var_u_1.type !== "image" || Object(dep_dom_utils.isSpecialUrls)(
  var_u_1.url)) {
  var var_d_1 = this._removeByteRequestFromUrl(param_e.url);
  var_u_1.url = var_d_1.url;
  if (param_e.statusCode === 302 || function (param_e_1, param_t_1, param_r_1) {
  if (!param_t_1 || Object(dep_media_constants.B)(param_e_1.ext) ||
  Object(dep_dom_utils.isSpecialUrls)(param_e_1.url)) {
  return true;
  }
  if (param_e_1.host === "vhosting.vcmedia.vn") {
  return true;
  }
  var var_o_1 = +param_t_1;
  if (Number.isNaN(var_o_1)) {
  var_o_1 = null;
  }
  if (param_e_1.ext === "m3u8" || param_e_1.exts && param_e_1.exts.includes("m3u8")) {
  return true;
  }
  var var_i_1 = dep_settings_manager.a.get("min_stream_size");
  if (var_o_1 !== null && var_o_1 < var_i_1 && !param_r_1 &&
  param_e_1.ext != "mpd") {
  return false;
  }
  if (param_r_1 && param_r_1.match(/^bytes\s[1-9]\d+-\d+\/\d+/g)) {
  var var_a = param_r_1.split("/");
  if (var_a && var_a.length) {
  param_e_1.size = parseInt(var_a.pop() || "");
  return true;
  }
  }
  param_e_1.size = var_o_1 || undefined;
  return true;
  }
  (var_u_1, param_r["content-length"], param_r["content-range"])) {
  if (var_d_1.hasChanged) {
  delete var_u_1.size;
  }
  if (param_e.statusCode === 302 && param_e.redirectUrl) {
  var_u_1.altUrl = this._removeByteRequestFromUrl(param_e.redirectUrl);
  }
  this._reportNewMedia(param_e, var_u_1);
  }
  }
  }
  }
  _reportNewMedia(param_e, param_t) {
  var var_r = this;
  var var_n = param_e.tabId || -1;
  function var_i(param_e_1, param_n, param_i) {
  var var_a_1 = Object(dep_url_utils.f)(param_e_1);
  if ((!var_a_1.protocol || !!var_a_1.protocol.match(/^http|^ftp/)) &&
  (var_a_1.host !== "coccoc.com" || var_a_1.pathname !== "/webhp")) {
  param_t.referrer = param_i || param_e_1;
  (function (param_e_2, param_t_1, param_r) {
  var_u.report(param_e_2, param_t_1, param_r);
  }
  )(param_n, var_r.name, param_t);
  }
  }
  function var_a(param_t_1) {
  return var_i(param_t_1, var_n, param_e.initiator);
  }
  if (param_e.parentFrameId === -1 || param_e.initiator && param_e.initiator.match(
  /zingmp3\.vn|www\.twitch\.tv/)) {
  if (var_n === -1) {
  chrome.tabs.query({
  url: param_e.initiator + "/*"
  }
  ).then(param_e_1 => {
  var var_t = param_e_1.find(param_e_2 => param_e_2.active);
  if (var_t) {
  var_i(var_t.url, var_t.id, var_t.url);
  }
  else {
  param_e_1.forEach(param_e_2 => {
  var_i(param_e_2.url, param_e_2.id, param_e_2.url);
  }
  );
  }
  }
  );
  return;
  }
  chrome.tabs.get(var_n, param_e_1 => {
  if (param_e_1) {
  var_a(param_e_1.url || "");
  }
  else {
  console.log(chrome.runtime.lastError);
  }
  }
  );
  }
  else {
  try {
  if (param_e.url == "about:blank") {
  return;
  }
  var_a(param_e.url);
  }
  catch (var_e) {
  console.log(var_e);
  }
  }
  }
  _removeByteRequestFromUrl(param_e) {
  var flag_t = false;
  if (param_e.match(/(googlevideo\.com)|(mycdn\.me)/g)) {
  if (param_e !== (param_e = param_e.replace(/[&?]begin=\d+/g, "").replace(/&bytes=\d+-\d+/g,
  "").replace(/&range=\d+-\d+/g, "").replace(/&rn=\d+/g, "").replace(/&rbuf=\d+/g,
  ""))) {
  flag_t = true;
  }
  }
  return {
  url: param_e,
  hasChanged: flag_t
  };
  }
  }
  new class {
  constructor() {
  this._listener = new var_d();
  this._init();
  this._saveData = {
  };
  }
  _init() {
  var var_e = this._onResponseStarted.bind(this);
  var list_t = ["xmlhttprequest", "object", "other", "script", "image", "sub_frame"];
  if (dep_feature_flags.a.MEDIA_WEB_REQUEST) {
  list_t.push("media");
  }
  var obj_r = {
  urls: ["*://*/*"],
  types: list_t
  };
  if (dep_feature_flags.a.WEB_REQUEST_EXTRA_HEADERS) {
  ["requestHeaders"].push("extraHeaders");
  }
  chrome.webRequest.onBeforeRequest.addListener(this._onBeforeRequest.bind(this),
  obj_r, ["requestBody"]);
  chrome.webRequest.onBeforeRedirect.addListener(var_e, obj_r, ["responseHeaders",
  "extraHeaders"]);
  chrome.webRequest.onResponseStarted.addListener(var_e, obj_r, ["responseHeaders",
  "extraHeaders"]);
  }
  _onBeforeRequest(param_e) {
  var var_c;
  var var_d_1;
  var var_f;
  var var_y;
  var var_T;
  var var_k;
  try {
  if (param_e.url.match(/https:\/\/www.facebook.com\/ajax\/bulk-route-definitions/) &&
  (param_e == null ? undefined : param_e.requestBody)?.raw?.[0]?.bytes) {
  var regex_x = /route_urls\[\d+\]\s*=\s*(.+?)&/;
  var var_S = decodeURIComponent(String.fromCharCode.apply(null, new Uint8Array(
  param_e.requestBody.raw[0].bytes))).match(/route_urls\[\d+\]\s*=\s*(.+?)&/g);
  var str_O = "";
  if (var_S && var_S.some(param_e_1 => param_e_1.match(/reel\/\d+/) &&
  !param_e_1.includes("?comment_id"), false) && var_S.length > 1) {
  for (var num_I = 0;
  num_I < var_S.length;
  ++num_I) {
  var var_L = regex_x.exec(var_S[num_I])?.[1];
  if (var_L) {
  if (!var_L.match(/reel\/\d+/) || var_L.includes("?comment_id")) {
  str_O += decodeURIComponent(var_L);
  }
  else {
  var_u.reportFbUrl(param_e.tabId, {
  url: var_L,
  name: str_O
  }
  );
  str_O = "";
  }
  }
  }
  }
  }
  if (param_e.url.includes("cdn-s.hoolacdn.com")) {
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_e.url)), {
  type: "video",
  ext: "m3u8",
  exts: ["m3u8"]
  }
  ), {
  }
  );
  }
  if (param_e.url.includes("/avcaption.v1.StreamingService/GetPlaylist") &&
  param_e.tabId !== -1) {
  var var_R = new Uint8Array(((var_c = param_e.requestBody?.raw) === null ||
  var_c === undefined ? undefined : var_c[0].bytes) || []);
  fetch(param_e.url, {
  method: "POST",
  body: var_R,
  headers: {
  "Content-Type": "application/grpc-web+proto",
  "x-grpc-web": "1"
  }
  }
  ).then(param_e_1 => param_e_1.text()).then(param_t => {
  var var_r = param_t.indexOf("#EXTM3U");
  param_t = param_t.slice(var_r);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_e.url)), {
  type: "video",
  ext: "m3u8",
  exts: ["m3u8"],
  realRes: param_t
  }
  ), {
  }
  );
  }
  );
  }
  if (param_e.url.includes("https://video.nimo.tv/v1/liveVideo/aggregateVideos")) {
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_e.url)), {
  type: "video",
  ext: "m3u8",
  exts: ["m3u8"],
  requestBodyFormData: [["keyType", ((var_d_1 = param_e.requestBody?.formData) === null ||
  var_d_1 === undefined ? undefined : var_d_1.keyType[0]) ||
  ""], ["body", ((var_f = param_e.requestBody?.formData) === null ||
  var_f === undefined ? undefined : var_f.body[0]) || ""]]
  }
  ), {
  }
  );
  }
  if (param_e.url.includes("https://wsapi.nimo.tv/") && param_e.requestBody?.raw?.[0]?.bytes) {
  var var_P = param_e.requestBody.raw[0].bytes;
  var var_B = new TextDecoder().decode(var_P);
  if (var_B.includes("getLiveVideoInfo") || var_B.includes("GetLiveRoomInfo")) {
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_e.url)), {
  type: "video",
  ext: "m3u8",
  exts: ["m3u8"],
  requestBody: Object(dep_dom_utils.arrayBufferToBase64)(var_P)
  }
  ), {
  }
  );
  }
  }
  if (param_e.url.match(/youtube\.com\/.+\/GenerateIT/i)) {
  var var_M = Object(dep_url_utils.f)(param_e.url);
  var var_F = new TextDecoder().decode((var_y = param_e.requestBody?.raw) === null ||
  var_y === undefined ? undefined : var_y[0].bytes);
  var var_U = JSON.parse(var_F);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_M), {
  url: var_M.url,
  ext: "m3u8",
  exts: ["m3u8"],
  params: var_U,
  requestMethod: param_e.method,
  identifier: Date.now().toString()
  }
  ), {
  }
  );
  }
  if (param_e.url.match(/:\/\/v\.douyu\.com\/.+\/stream\/getStreamUrl/i) &&
  param_e.initiator === "https://v.douyu.com") {
  var var_N = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_N), {
  url: var_N.url,
  ext: "m3u8",
  exts: ["m3u8"],
  params: param_e.requestBody?.formData,
  requestMethod: param_e.method,
  identifier: param_e.requestBody?.formData?.vid?.[0]
  }
  ), {
  }
  );
  }
  if (param_e.url.match(/[a-z0-9\-_]+\.l\.qq\.com\/proxyhttp/i)) {
  try {
  var var_j = new TextDecoder().decode((var_T = param_e.requestBody?.raw) === null ||
  var_T === undefined ? undefined : var_T[0].bytes);
  if (var_j) {
  var var_q = JSON.parse(var_j);
  if (var_q.vinfoparam || var_q.build == "vinfoad") {
  var var_H = Date.now().toString();
  if (var_q.adparam) {
  var var_V = new URLSearchParams(var_q.adparam);
  if (var_V && var_V.has("vid")) {
  var_H = var_V.get("vid");
  }
  }
  var var_W = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_W), {
  url: var_W.url,
  ext: "m3u8",
  exts: ["m3u8"],
  params: var_q,
  paramType: "JSON",
  requestMethod: param_e.method,
  identifier: var_H
  }
  ), {
  }
  );
  }
  }
  }
  catch (var_e) {
  }
  }
  if (param_e.url.match(/\/videos\//i) && /https?:\/\/(www\.)?ecostream\.[a-z]+/i.test(
  param_e.initiator || "")) {
  var var_z = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_z), {
  url: var_z.url,
  ext: "m3u8",
  exts: ["m3u8"]
  }
  ), {
  }
  );
  }
  if (param_e.url.match(/\/\/api-.+\.(play|plhq).+\.(xyz|net|site|click|cfd|com)\/api(\/.+)?\/(playiframe|getblob).+/i) &&
  ((var_k = param_e.initiator) === null || var_k === undefined ?
  undefined : var_k.match(/\/\/play\.(play|plhq).+\.(xyz|net|site|click|cfd|com)/i))) {
  var var_Y = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_Y), {
  url: var_Y.url,
  ext: var_Y.ext || "",
  exts: var_Y.exts,
  params: param_e.requestBody?.formData,
  requestMethod: param_e.method,
  identifier: param_e.requestId
  }
  ), {
  }
  );
  }
  try {
  if (param_e.url.match(/nhaccuatui\.com\/api(\/media\/info)/i)) {
  var var_G = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_G), {
  url: var_G.url,
  ext: "m3u8",
  exts: ["m3u8"],
  params: param_e.requestBody?.formData,
  requestMethod: param_e.method,
  identifier: param_e.requestId,
  type: "video"
  }
  ), {
  }
  );
  }
  }
  catch (var_e) {
  console.log(var_e);
  }
  if (param_e.initiator && param_e.initiator.includes("bschool.vn") &&
  /\.mp4.+?\.ts\?nimblesessionid=/.test(param_e.url)) {
  var obj_Q = {
  };
  chrome.tabs.get(param_e.tabId, param_t => {
  obj_Q["" + param_t.url] = param_e.url.split("?")[1];
  chrome.storage.local.set(obj_Q);
  }
  );
  }
  if (param_e.url.match(/\.(mpd|m3u8)$/i)) {
  var var_$ = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, Object.assign(Object.assign({
  }
  , var_$), {
  url: var_$.url,
  ext: var_$.ext || "",
  exts: var_$.exts
  }
  ), {
  }
  );
  }
  }
  catch (var_e) {
  console.log(var_e);
  }
  }
  _onResponseStarted(param_e) {
  try {
  if (param_e.tabId < 0 || param_e.statusCode > 399) {
  return;
  }
  var var_t = this._parseHeaders(param_e.responseHeaders || []);
  if (param_e.url.includes("graphql")) {
  var_u.fbSetTime(param_e.tabId, Date.parse(var_t.date || ""));
  }
  var var_r = Object(dep_url_utils.f)(param_e.url);
  this._listener.match(param_e, var_r, var_t);
  }
  catch (var_e) {
  console.log(var_e);
  }
  }
  _parseHeaders(param_e) {
  var obj_t = {
  };
  if (param_e.length) {
  param_e.forEach(param_e_1 => {
  var var_r;
  obj_t[param_e_1.name.toLowerCase()] = (var_r = param_e_1.value) === null ||
  var_r === undefined ? undefined : var_r.toLowerCase();
  }
  );
  return obj_t;
  }
  else {
  return {
  };
  }
  }
  }
  ();
  };
