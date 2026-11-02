// Module 705 [utilities] - Stream processing pipeline controller
export default function (moduleObj, exportsObj, requireFn) {
  const dep_webrequest_filter = requireFn(438);
  const dep_media_protocol_handler = requireFn(505);
  const dep_download_event_router = requireFn(174);
  const dep_download_event_sink = requireFn(160);
  const {
  setTimeout: dep_env_context
  }
  = requireFn(78);
  const dep_task_queue_scheduler = requireFn(520);
  const dep_priority_queue = requireFn(521);
  const dep_download_watchdog = requireFn(726);
  const dep_network_error_handler = requireFn(523);
  const dep_socket_timeout_tracker = requireFn(524);
  const str_f = "https://www.youtube.com/watch?v=";
  exportsObj.cache = new dep_socket_timeout_tracker();
  exportsObj.cookieCache = new dep_socket_timeout_tracker(86400000);
  exportsObj.watchPageCache = new dep_socket_timeout_tracker();
  let str_h = "2.20210622.10.00";
  class var_m extends Error {
  }
  const list_g = ["support.google.com/youtube/?p=age_restrictions", "youtube.com/t/community_guidelines"];
  exportsObj.getBasicInfo = async (param_e, param_t) => {
  const var_r = Object.assign({
  }
  , dep_download_event_router.defaultOptions, param_t.requestOptions);
  param_t.requestOptions = Object.assign({
  }
  , param_t.requestOptions, {
  }
  );
  param_t.requestOptions.headers = Object.assign({
  }
  , {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"
  }
  , param_t.requestOptions.headers);
  let var_n = await fn_D([param_e, param_t], param_e_1 => {
  let var_t = dep_download_event_sink.playError(param_e_1.player_response, ["ERROR"],
  var_m);
  let var_r_1 = fn_v(param_e_1.player_response);
  if (var_t || var_r_1) {
  throw var_t || var_r_1;
  }
  return param_e_1 && param_e_1.player_response && (param_e_1.player_response.streamingData ||
  fn_y(param_e_1.player_response) || fn__(param_e_1.player_response));
  }
  , var_r, [fn_I, fn_O, fn_L]);
  Object.assign(var_n, {
  formats: fn_R(var_n.player_response),
  related_videos: dep_download_watchdog.getRelatedVideos(var_n)
  }
  );
  const var_o = dep_download_watchdog.getMedia(var_n);
  const obj_s = {
  author: dep_download_watchdog.getAuthor(var_n),
  media: var_o,
  likes: dep_download_watchdog.getLikes(var_n),
  dislikes: dep_download_watchdog.getDislikes(var_n),
  age_restricted: !!var_o && !!var_o.notice_url && !!list_g.some(param_e_1 => var_o.notice_url.includes(
  param_e_1)),
  video_url: str_f + param_e,
  storyboards: dep_download_watchdog.getStoryboards(var_n),
  chapters: dep_download_watchdog.getChapters(var_n)
  };
  var_n.videoDetails = dep_download_watchdog.cleanVideoDetails(Object.assign({
  }
  , var_n.player_response && var_n.player_response.microformat &&
  var_n.player_response.microformat.playerMicroformatRenderer, var_n.player_response &&
  var_n.player_response.videoDetails, obj_s), var_n);
  return var_n;
  };
  const fn_v = param_e => {
  let var_t = param_e && param_e.playabilityStatus;
  if (var_t && var_t.status === "LOGIN_REQUIRED" && var_t.messages &&
  var_t.messages.filter(param_e_1 => /This is a private video/.test(param_e_1)).length) {
  return new var_m(var_t.reason || var_t.messages && var_t.messages[0]);
  }
  else {
  return null;
  }
  };
  const fn_y = param_e => {
  let var_t = param_e.playabilityStatus;
  return var_t && var_t.status === "UNPLAYABLE" && var_t.errorScreen &&
  var_t.errorScreen.playerLegacyDesktopYpcOfferRenderer;
  };
  const fn__ = param_e => {
  let var_t = param_e.playabilityStatus;
  return var_t && var_t.status === "LIVE_STREAM_OFFLINE";
  };
  const fn_b = (param_e, param_t) => `${str_f + param_e}
  &hl=${param_t.lang || "en"}
  `;
  const fn_w = (param_e, param_r) => {
  const var_n = fn_b(param_e, param_r);
  return exportsObj.watchPageCache.getOrSet(var_n, () => dep_download_event_sink.exposedMiniget(
  var_n, param_r).text());
  };
  const fn_E = param_e => {
  let var_t = /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/.exec(
  param_e);
  if (var_t) {
  return var_t[1] || var_t[2];
  }
  else {
  return null;
  }
  };
  const fn_D = async (param_e, param_t, param_r, param_n) => {
  let var_o;
  for (let var_i of param_n) {
  try {
  const var_n = await fn_k(var_i, param_e.concat([var_o]), param_r);
  if (var_n.player_response) {
  var_n.player_response.videoDetails = fn_T(var_o && var_o.player_response &&
  var_o.player_response.videoDetails, var_n.player_response.videoDetails);
  var_n.player_response = fn_T(var_o && var_o.player_response, var_n.player_response);
  }
  var_o = fn_T(var_o, var_n);
  if (param_t(var_o, false)) {
  break;
  }
  }
  catch (var_e) {
  if (var_e instanceof var_m || var_i === param_n[param_n.length - 1]) {
  throw var_e;
  }
  }
  }
  return var_o;
  };
  const fn_T = (param_e, param_t) => {
  if (!param_e || !param_t) {
  return param_e || param_t;
  }
  for (let [var_r, var_n] of Object.entries(param_t)) {
  if (var_n != null) {
  param_e[var_r] = var_n;
  }
  }
  return param_e;
  };
  const fn_k = async (param_e, param_t, param_r) => {
  let var_n;
  let num_o = 0;
  while (num_o <= param_r.maxRetries) {
  try {
  var_n = await param_e(...param_t);
  break;
  }
  catch (var_e) {
  if (var_e instanceof var_m || var_e instanceof dep_download_event_router.MinigetError &&
  var_e.statusCode < 500 || num_o >= param_r.maxRetries) {
  throw var_e;
  }
  let var_t = Math.min(++num_o * param_r.backoff.inc, param_r.backoff.max);
  await new Promise(param_e_1 => dep_env_context(param_e_1, var_t));
  }
  }
  return var_n;
  };
  const regex_A = /^[)\]}'\s]+/;
  const fn_C = (param_e, param_t, param_r) => {
  if (!param_r || typeof param_r == "object") {
  return param_r;
  }
  try {
  param_r = param_r.replace(regex_A, "");
  return JSON.parse(param_r);
  }
  catch (var_r) {
  throw Error(`Error parsing ${param_t}
   in ${param_e}
  : ${var_r.message}
  `);
  }
  };
  const fn_x = (param_e, param_t, param_r, param_n, param_o, param_i) => {
  let var_s = dep_download_event_sink.between(param_r, param_n, param_o);
  if (!var_s) {
  throw Error(`Could not find ${param_t}
   in ${param_e}
  `);
  }
  return fn_C(param_e, param_t, dep_download_event_sink.cutAfterJSON(`${param_i}
  ${var_s}
  `));
  };
  const fn_S = (param_e, param_t) => {
  const var_r = param_t && (param_t.args && param_t.args.player_response ||
  param_t.player_response || param_t.playerResponse || param_t.embedded_player_response);
  return fn_C(param_e, "player_response", var_r);
  };
  const fn_O = async (param_e, param_r) => {
  const var_n = Object.assign({
  headers: {
  }
  }
  , param_r.requestOptions);
  let var_o = var_n.headers.Cookie || var_n.headers.cookie;
  var_n.headers = Object.assign({
  "x-youtube-client-name": "1",
  "x-youtube-client-version": str_h,
  "x-youtube-identity-token": exportsObj.cookieCache.get(var_o ||
  "browser") || ""
  }
  , var_n.headers);
  const fn_i = async (param_o, param_i) => {
  var_n.headers["x-youtube-identity-token"] ||= await ((param_e_1, param_r_1, param_n,
  param_o_1) => exportsObj.cookieCache.getOrSet(param_n, async () => {
  let var_t = (await fn_w(param_e_1, param_r_1)).match(/(["'])ID_TOKEN\1[:,]\s?"([^"]+)"/);
  if (!var_t && param_o_1) {
  throw new var_m("Cookie header used in request, but unable to find YouTube identity token");
  }
  return var_t && var_t[2];
  }
  ))(param_e, param_r, param_o, param_i);
  };
  if (var_o) {
  await fn_i(var_o, true);
  }
  const var_s = ((param_e_1, param_t) => fn_b(param_e_1, param_t) + "&pbj=1")(param_e,
  param_r);
  const var_c = await dep_download_event_sink.exposedMiniget(var_s, param_r, var_n).text(
  );
  let var_u = fn_C("watch.json", "body", var_c);
  if (var_u.reload === "now") {
  await fn_i("browser", false);
  }
  if (var_u.reload === "now" || !Array.isArray(var_u)) {
  throw Error("Unable to retrieve video metadata in watch.json");
  }
  let var_l = var_u.reduce((param_e_1, param_t) => Object.assign(param_t, param_e_1),
  {
  }
  );
  var_l.player_response = fn_S("watch.json", var_l);
  var_l.html5player = var_l.player && var_l.player.assets &&
  var_l.player.assets.js;
  return var_l;
  };
  const fn_I = async (param_e, param_t) => {
  let var_r = await fn_w(param_e, param_t);
  let obj_n = {
  page: "watch"
  };
  try {
  str_h = dep_download_event_sink.between(var_r, "{\"key\":\"cver\",\"value\":\"",
  "\"}");
  obj_n.player_response = fn_x("watch.html", "player_response", var_r, /\bytInitialPlayerResponse\s*=\s*\{/i,
  "</script>", "{");
  }
  catch (var_e) {
  let var_t = fn_x("watch.html", "player_response", var_r, /\bytplayer\.config\s*=\s*{/,
  "</script>", "{");
  obj_n.player_response = fn_S("watch.html", var_t);
  }
  obj_n.response = fn_x("watch.html", "response", var_r, /\bytInitialData("\])?\s*=\s*\{/i,
  "</script>", "{");
  obj_n.html5player = fn_E(var_r);
  return obj_n;
  };
  const fn_L = async (param_e, param_t) => {
  const var_r = new URL("https://www.youtube.com/get_video_info");
  var_r.searchParams.set("video_id", param_e);
  var_r.searchParams.set("c", "TVHTML5");
  var_r.searchParams.set("cver", "7" + str_h.substr(1));
  var_r.searchParams.set("eurl", "https://youtube.googleapis.com/v/" + param_e);
  var_r.searchParams.set("ps", "default");
  var_r.searchParams.set("gl", "US");
  var_r.searchParams.set("hl", param_t.lang || "en");
  var_r.searchParams.set("html5", "1");
  const var_o = await dep_download_event_sink.exposedMiniget(var_r.toString(), param_t).text(
  );
  let var_i = dep_webrequest_filter.parse(var_o);
  var_i.player_response = fn_S("get_video_info", var_i);
  return var_i;
  };
  const fn_R = param_e => {
  let list_t = [];
  if (param_e && param_e.streamingData) {
  list_t = list_t.concat(param_e.streamingData.formats || []).concat(param_e.streamingData.adaptiveFormats ||
  []);
  }
  return list_t;
  };
  exportsObj.getInfo = async (param_e, param_r) => {
  let var_n = await exportsObj.getBasicInfo(param_e, param_r);
  const var_o = var_n.player_response && var_n.player_response.streamingData &&
  (var_n.player_response.streamingData.dashManifestUrl || var_n.player_response.streamingData.hlsManifestUrl);
  let list_i = [];
  if (var_n.formats.length) {
  var_n.html5player = var_n.html5player || fn_E(await fn_w(param_e, param_r)) ||
  fn_E(await ((param_e_1, param_t) => {
  const var_r = `${"https://www.youtube.com/embed/" + param_e_1}?hl=${param_t.lang || "en"}`;
  return dep_download_event_sink.exposedMiniget(var_r, param_t).text();
  }
  )(param_e, param_r));
  if (!var_n.html5player) {
  throw Error("Unable to find html5player file");
  }
  const var_t = new URL(var_n.html5player, str_f).toString();
  list_i.push(dep_network_error_handler.decipherFormats(var_n.formats, var_t, param_r));
  }
  if (var_o && var_n.player_response.streamingData.dashManifestUrl) {
  let var_e = var_n.player_response.streamingData.dashManifestUrl;
  list_i.push(fn_P(var_e, param_r));
  }
  if (var_o && var_n.player_response.streamingData.hlsManifestUrl) {
  let var_e = var_n.player_response.streamingData.hlsManifestUrl;
  list_i.push(fn_B(var_e, param_r));
  }
  let var_s = await Promise.all(list_i);
  var_n.formats = Object.values(Object.assign({
  }
  , ...var_s));
  var_n.formats = var_n.formats.map(dep_task_queue_scheduler.addFormatMeta);
  var_n.formats.sort(dep_task_queue_scheduler.sortFormats);
  var_n.full = true;
  return var_n;
  };
  const fn_P = (param_e, param_t) => new Promise((param_r, param_n) => {
  let obj_i = {
  };
  const var_s = dep_media_protocol_handler.parser(false);
  let var_c;
  var_s.onerror = param_n;
  var_s.onopentag = param_t_1 => {
  if (param_t_1.name === "ADAPTATIONSET") {
  var_c = param_t_1.attributes;
  }
  else if (param_t_1.name === "REPRESENTATION") {
  const var_r = parseInt(param_t_1.attributes.ID);
  if (!isNaN(var_r)) {
  obj_i[param_e] = Object.assign({
  itag: var_r,
  url: param_e,
  bitrate: parseInt(param_t_1.attributes.BANDWIDTH),
  mimeType: `${var_c.MIMETYPE}
  ; codecs="${param_t_1.attributes.CODECS}
  "`
  }
  , param_t_1.attributes.HEIGHT ? {
  width: parseInt(param_t_1.attributes.WIDTH),
  height: parseInt(param_t_1.attributes.HEIGHT),
  fps: parseInt(param_t_1.attributes.FRAMERATE)
  }
  : {
  audioSampleRate: param_t_1.attributes.AUDIOSAMPLINGRATE
  }
  );
  }
  }
  };
  var_s.onend = () => {
  param_r(obj_i);
  };
  const var_u = dep_download_event_sink.exposedMiniget(new URL(param_e, str_f).toString(
  ), param_t);
  var_u.setEncoding("utf8");
  var_u.on("error", param_n);
  var_u.on("data", param_e_1 => {
  var_s.write(param_e_1);
  }
  );
  var_u.on("end", var_s.close.bind(var_s));
  }
  );
  const fn_B = async (param_e, param_t) => {
  param_e = new URL(param_e, str_f);
  const var_r = await dep_download_event_sink.exposedMiniget(param_e.toString(),
  param_t).text();
  let obj_n = {
  };
  var_r.split("\n").filter(param_e_1 => /^https?:\/\//.test(param_e_1)).forEach(
  param_e_1 => {
  const var_t = parseInt(param_e_1.match(/\/itag\/(\d+)\//)[1]);
  obj_n[param_e_1] = {
  itag: var_t,
  url: param_e_1
  };
  }
  );
  return obj_n;
  };
  for (let var_e of ["getBasicInfo", "getInfo"]) {
  const var_r = exportsObj[var_e];
  exportsObj[var_e] = async (param_n, param_o = {
  }
  ) => {
  dep_download_event_sink.checkForUpdates();
  let var_i = await dep_priority_queue.getVideoID(param_n);
  const var_s = [var_e, var_i, param_o.lang].join("-");
  return exportsObj.cache.getOrSet(var_s, () => var_r(var_i, param_o));
  };
  }
  exportsObj.validateID = dep_priority_queue.validateID;
  exportsObj.validateURL = dep_priority_queue.validateURL;
  exportsObj.getURLVideoID = dep_priority_queue.getURLVideoID;
  exportsObj.getVideoID = dep_priority_queue.getVideoID;
  };
