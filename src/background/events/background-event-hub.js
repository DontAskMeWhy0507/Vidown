// Module 538 [events] - Central background event hub and message bus
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  const var_n = requireFn(83).PassThrough;
  const dep_stream_pipeline_controller = requireFn(705);
  const dep_download_event_sink = requireFn(160);
  const dep_task_queue_scheduler = requireFn(520);
  const dep_priority_queue = requireFn(521);
  const dep_network_error_handler = requireFn(523);
  const dep_download_event_router = requireFn(174);
  const dep_media_capture_events = requireFn(441);
  const {
  parseTimestamp: dep_media_capture_events_1
  }
  = requireFn(441);
  const fn_p = (param_e, param_t_1) => {
  const var_r = fn_f(param_t_1);
  fn_p.getInfo(param_e, param_t_1).then(param_e_1 => {
  fn_m(var_r, param_e_1, param_t_1);
  }
  , var_r.emit.bind(var_r, "error"));
  return var_r;
  };
  moduleObj.exports = fn_p;
  fn_p.getBasicInfo = dep_stream_pipeline_controller.getBasicInfo;
  fn_p.getInfo = dep_stream_pipeline_controller.getInfo;
  fn_p.chooseFormat = dep_task_queue_scheduler.chooseFormat;
  fn_p.filterFormats = dep_task_queue_scheduler.filterFormats;
  fn_p.validateID = dep_priority_queue.validateID;
  fn_p.validateURL = dep_priority_queue.validateURL;
  fn_p.getURLVideoID = dep_priority_queue.getURLVideoID;
  fn_p.getVideoID = dep_priority_queue.getVideoID;
  fn_p.cache = {
  sig: dep_network_error_handler.cache,
  info: dep_stream_pipeline_controller.cache,
  watch: dep_stream_pipeline_controller.watchPageCache,
  cookie: dep_stream_pipeline_controller.cookieCache
  };
  fn_p.version = requireFn(519).version;
  const fn_f = param_e => {
  const var_t = new var_n({
  highWaterMark: param_e && param_e.highWaterMark || 524288
  }
  );
  var_t._destroy = () => {
  var_t.destroyed = true;
  };
  return var_t;
  };
  const fn_h = (param_e, param_t_1, param_r) => {
  ["abort", "request", "response", "error", "redirect", "retry", "reconnect"].forEach(
  param_r_1 => {
  param_e.prependListener(param_r_1, param_t_1.emit.bind(param_t_1, param_r_1));
  }
  );
  param_e.pipe(param_t_1, {
  end: param_r
  }
  );
  };
  const fn_m = (param_e, param_t_1, param_r) => {
  param_r = param_r || {
  };
  let var_n_1;
  let var_o = dep_download_event_sink.playError(param_t_1.player_response, ["UNPLAYABLE",
  "LIVE_STREAM_OFFLINE", "LOGIN_REQUIRED"]);
  if (var_o) {
  param_e.emit("error", var_o);
  return;
  }
  if (!param_t_1.formats.length) {
  param_e.emit("error", Error("This video is unavailable"));
  return;
  }
  try {
  var_n_1 = dep_task_queue_scheduler.chooseFormat(param_t_1.formats, param_r);
  }
  catch (var_t) {
  param_e.emit("error", var_t);
  return;
  }
  param_e.emit("info", param_t_1, var_n_1);
  if (param_e.destroyed) {
  return;
  }
  let var_s;
  let num_c = 0;
  const fn_p_1 = param_t_2 => {
  num_c += param_t_2.length;
  param_e.emit("progress", param_t_2.length, num_c, var_s);
  };
  const var_f = param_r.dlChunkSize || 10485760;
  let var_m;
  let flag_g = true;
  if (var_n_1.isHLS || var_n_1.isDashMPD) {
  var_m = dep_media_capture_events(var_n_1.url, {
  chunkReadahead: +param_t_1.live_chunk_readahead,
  begin: param_r.begin || var_n_1.isLive && Date.now(),
  liveBuffer: param_r.liveBuffer,
  requestOptions: param_r.requestOptions,
  parser: var_n_1.isDashMPD ? "dash-mpd" : "m3u8",
  id: var_n_1.itag
  }
  );
  var_m.on("progress", (param_t_2, param_r_1) => {
  param_e.emit("progress", param_t_2.size, param_t_2.num, param_r_1);
  }
  );
  fn_h(var_m, param_e, flag_g);
  }
  else {
  const var_t = Object.assign({
  }
  , param_r.requestOptions, {
  maxReconnects: 6,
  maxRetries: 3,
  backoff: {
  inc: 500,
  max: 10000
  }
  }
  );
  if (var_f !== 0 && (!var_n_1.hasAudio || !var_n_1.hasVideo)) {
  let var_o_1 = param_r.range && param_r.range.start || 0;
  let var_i = var_o_1 + var_f;
  const var_a = param_r.range && param_r.range.end;
  var_s = param_r.range ? (var_a ? var_a + 1 : parseInt(var_n_1.contentLength)) - var_o_1 :
  parseInt(var_n_1.contentLength);
  const fn_c = () => {
  if (!var_a && var_i >= var_s) {
  var_i = 0;
  }
  if (var_a && var_i > var_a) {
  var_i = var_a;
  }
  flag_g = !var_i || var_i === var_a;
  var_t.headers = Object.assign({
  }
  , var_t.headers, {
  Range: `bytes=${var_o_1}
  -${var_i || ""}
  `
  }
  );
  var_m = dep_download_event_router(var_n_1.url, var_t);
  var_m.on("data", fn_p_1);
  var_m.on("end", () => {
  if (!param_e.destroyed) {
  if (var_i && var_i !== var_a) {
  var_o_1 = var_i + 1;
  var_i += var_f;
  fn_c();
  }
  }
  }
  );
  fn_h(var_m, param_e, flag_g);
  };
  fn_c();
  }
  else {
  if (param_r.begin) {
  var_n_1.url += "&begin=" + dep_media_capture_events_1(param_r.begin);
  }
  if (param_r.range && (param_r.range.start || param_r.range.end)) {
  var_t.headers = Object.assign({
  }
  , var_t.headers, {
  Range: `bytes=${param_r.range.start || "0"}
  -${param_r.range.end || ""}
  `
  }
  );
  }
  var_m = dep_download_event_router(var_n_1.url, var_t);
  var_m.on("response", param_t_2 => {
  if (!param_e.destroyed) {
  var_s = var_s || parseInt(param_t_2.headers["content-length"]);
  }
  }
  );
  var_m.on("data", fn_p_1);
  fn_h(var_m, param_e, flag_g);
  }
  }
  param_e._destroy = () => {
  param_e.destroyed = true;
  var_m.destroy();
  var_m.end();
  };
  };
  fn_p.downloadFromInfo = (param_e, param_r) => {
  const var_n_1 = fn_f(param_r);
  if (!param_e.full) {
  throw Error("Cannot use `ytdl.downloadFromInfo()` when called with info from `ytdl.getBasicInfo()`");
  }
  param_t(() => {
  fn_m(var_n_1, param_e, param_r);
  }
  );
  return var_n_1;
  };
  }
  ).call(this, requireFn(78).setImmediate);
  };
