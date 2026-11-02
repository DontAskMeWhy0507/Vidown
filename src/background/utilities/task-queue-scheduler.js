// Module 520 [utilities] - Background task queue scheduler
export default function (moduleObj, exportsObj, requireFn) {
  const dep_download_event_sink = requireFn(160);
  const dep_disk_space_monitor = requireFn(725);
  const list_i = ["mp4a", "mp3", "vorbis", "aac", "opus", "flac"];
  const list_a = ["mp4v", "avc1", "Sorenson H.283", "MPEG-4 Visual", "VP8", "VP9",
  "H.264"];
  const fn_s = param_e => param_e.bitrate || 0;
  const fn_c = param_e => list_a.findIndex(param_t => param_e.codecs &&
  param_e.codecs.includes(param_t));
  const fn_u = param_e => param_e.audioBitrate || 0;
  const fn_l = param_e => list_i.findIndex(param_t => param_e.codecs &&
  param_e.codecs.includes(param_t));
  const fn_d = (param_e, param_t, param_r) => {
  let num_n = 0;
  for (let var_o of param_r) {
  num_n = var_o(param_t) - var_o(param_e);
  if (num_n !== 0) {
  break;
  }
  }
  return num_n;
  };
  const fn_p = (param_e, param_t) => fn_d(param_e, param_t, [param_e_1 => parseInt(
  param_e_1.qualityLabel), fn_s, fn_c]);
  const fn_f = (param_e, param_t) => fn_d(param_e, param_t, [fn_u, fn_l]);
  exportsObj.sortFormats = (param_e, param_t) => fn_d(param_e, param_t, [param_e_1 => +!!param_e_1.isHLS,
  param_e_1 => +!!param_e_1.isDashMPD, param_e_1 => +(param_e_1.contentLength > 0),
  param_e_1 => +(param_e_1.hasVideo && param_e_1.hasAudio), param_e_1 => +param_e_1.hasVideo,
  param_e_1 => parseInt(param_e_1.qualityLabel) || 0, fn_s, fn_u, fn_c, fn_l]);
  exportsObj.chooseFormat = (param_e, param_r) => {
  if (typeof param_r.format == "object") {
  if (!param_r.format.url) {
  throw Error("Invalid format given, did you use `ytdl.getInfo()`?");
  }
  return param_r.format;
  }
  let var_n;
  if (param_r.filter) {
  param_e = exportsObj.filterFormats(param_e, param_r.filter);
  }
  if (param_e.some(param_e_1 => param_e_1.isHLS)) {
  param_e = param_e.filter(param_e_1 => param_e_1.isHLS || !param_e_1.isLive);
  }
  const var_o = param_r.quality || "highest";
  switch (var_o) {
  case "highest":
  var_n = param_e[0];
  break;
  case "lowest":
  var_n = param_e[param_e.length - 1];
  break;
  case "highestaudio":
  {
  (param_e = exportsObj.filterFormats(param_e, "audio")).sort(fn_f);
  const var_r = param_e[0];
  const var_o_1 = (param_e = param_e.filter(param_e_1 => fn_f(var_r, param_e_1) === 0)).map(
  param_e_1 => parseInt(param_e_1.qualityLabel) || 0).sort((param_e_1, param_t) => param_e_1 - param_t)[0];
  var_n = param_e.find(param_e_1 => (parseInt(param_e_1.qualityLabel) ||
  0) === var_o_1);
  break;
  }
  case "lowestaudio":
  (param_e = exportsObj.filterFormats(param_e, "audio")).sort(fn_f);
  var_n = param_e[param_e.length - 1];
  break;
  case "highestvideo":
  {
  (param_e = exportsObj.filterFormats(param_e, "video")).sort(fn_p);
  const var_r = param_e[0];
  const var_o_1 = (param_e = param_e.filter(param_e_1 => fn_p(var_r, param_e_1) === 0)).map(
  param_e_1 => param_e_1.audioBitrate || 0).sort((param_e_1, param_t) => param_e_1 - param_t)[0];
  var_n = param_e.find(param_e_1 => (param_e_1.audioBitrate ||
  0) === var_o_1);
  break;
  }
  case "lowestvideo":
  (param_e = exportsObj.filterFormats(param_e, "video")).sort(fn_p);
  var_n = param_e[param_e.length - 1];
  break;
  default:
  var_n = fn_h(var_o, param_e);
  }
  if (!var_n) {
  throw Error("No such format found: " + var_o);
  }
  return var_n;
  };
  const fn_h = (param_e, param_t) => {
  let fn_r = param_e_1 => param_t.find(param_t_1 => "" + param_t_1.itag == "" + param_e_1);
  if (Array.isArray(param_e)) {
  return fn_r(param_e.find(param_e_1 => fn_r(param_e_1)));
  }
  else {
  return fn_r(param_e);
  }
  };
  exportsObj.filterFormats = (param_e, param_t) => {
  let var_r;
  switch (param_t) {
  case "videoandaudio":
  case "audioandvideo":
  var_r = param_e_1 => param_e_1.hasVideo && param_e_1.hasAudio;
  break;
  case "video":
  var_r = param_e_1 => param_e_1.hasVideo;
  break;
  case "videoonly":
  var_r = param_e_1 => param_e_1.hasVideo && !param_e_1.hasAudio;
  break;
  case "audio":
  var_r = param_e_1 => param_e_1.hasAudio;
  break;
  case "audioonly":
  var_r = param_e_1 => !param_e_1.hasVideo && param_e_1.hasAudio;
  break;
  default:
  if (typeof param_t != "function") {
  throw TypeError(`Given filter (${param_t}
  ) is not supported`);
  }
  var_r = param_t;
  }
  return param_e.filter(param_e_1 => !!param_e_1.url && var_r(param_e_1));
  };
  exportsObj.addFormatMeta = param_e => {
  (param_e = Object.assign({
  }
  , dep_disk_space_monitor[param_e.itag], param_e)).hasVideo = !!param_e.qualityLabel;
  param_e.hasAudio = !!param_e.audioBitrate;
  param_e.container = param_e.mimeType ? param_e.mimeType.split(";")[0].split("/")[1] :
  null;
  param_e.codecs = param_e.mimeType ? dep_download_event_sink.between(param_e.mimeType,
  "codecs=\"", "\"") : null;
  param_e.videoCodec = param_e.hasVideo && param_e.codecs ? param_e.codecs.split(
  ", ")[0] : null;
  param_e.audioCodec = param_e.hasAudio && param_e.codecs ? param_e.codecs.split(
  ", ").slice(-1)[0] : null;
  param_e.isLive = /\bsource[/=]yt_live_broadcast\b/.test(param_e.url);
  param_e.isHLS = /\/manifest\/hls_(variant|playlist)\//.test(param_e.url);
  param_e.isDashMPD = /\/manifest\/dash\//.test(param_e.url);
  return param_e;
  };
  };
