// Module 726 [utilities] - Download stall watchdog and keep-alive timer
export default function (moduleObj, exportsObj, requireFn) {
  const dep_download_event_sink = requireFn(160);
  const dep_webrequest_filter = requireFn(438);
  const {
  parseTimestamp: dep_media_capture_events
  }
  = requireFn(441);
  const str_a = "https://www.youtube.com/watch?v=";
  const obj_s = {
  song: {
  name: "Music",
  url: "https://music.youtube.com/"
  }
  };
  const fn_c = param_e => param_e ? param_e.runs ? param_e.runs[0].text :
  param_e.simpleText : null;
  exportsObj.getMedia = param_e => {
  let obj_t = {
  };
  let list_r = [];
  try {
  list_r = param_e.response.contents.twoColumnWatchNextResults.results.results.contents;
  }
  catch (var_e) {
  }
  let var_n = list_r.find(param_e_1 => param_e_1.videoSecondaryInfoRenderer);
  if (!var_n) {
  return {
  };
  }
  try {
  let var_e = (var_n.metadataRowContainer || var_n.videoSecondaryInfoRenderer.metadataRowContainer).metadataRowContainerRenderer.rows;
  for (let var_r of var_e) {
  if (var_r.metadataRowRenderer) {
  let var_e_1 = fn_c(var_r.metadataRowRenderer.title).toLowerCase();
  let var_n_1 = var_r.metadataRowRenderer.contents[0];
  obj_t[var_e_1] = fn_c(var_n_1);
  let var_o = var_n_1.runs;
  if (var_o && var_o[0].navigationEndpoint) {
  obj_t[var_e_1 + "_url"] = new URL(var_o[0].navigationEndpoint.commandMetadata.webCommandMetadata.url,
  str_a).toString();
  }
  if (var_e_1 in obj_s) {
  obj_t.category = obj_s[var_e_1].name;
  obj_t.category_url = obj_s[var_e_1].url;
  }
  }
  else if (var_r.richMetadataRowRenderer) {
  let var_e_1 = var_r.richMetadataRowRenderer.contents;
  let var_n_1 = var_e_1.filter(param_e_1 => param_e_1.richMetadataRenderer.style === "RICH_METADATA_RENDERER_STYLE_BOX_ART");
  for (let {
  richMetadataRenderer: var_e_2
  }
  of var_n_1) {
  let var_r_1 = var_e_2;
  obj_t.year = fn_c(var_r_1.subtitle);
  let var_n_2 = fn_c(var_r_1.callToAction).split(" ")[1];
  obj_t[var_n_2] = fn_c(var_r_1.title);
  obj_t[var_n_2 + "_url"] = new URL(var_r_1.endpoint.commandMetadata.webCommandMetadata.url,
  str_a).toString();
  obj_t.thumbnails = var_r_1.thumbnail.thumbnails;
  }
  let var_o = var_e_1.filter(param_e_1 => param_e_1.richMetadataRenderer.style === "RICH_METADATA_RENDERER_STYLE_TOPIC");
  for (let {
  richMetadataRenderer: var_e_2
  }
  of var_o) {
  let var_r_1 = var_e_2;
  obj_t.category = fn_c(var_r_1.title);
  obj_t.category_url = new URL(var_r_1.endpoint.commandMetadata.webCommandMetadata.url,
  str_a).toString();
  }
  }
  }
  }
  catch (var_e) {
  }
  return obj_t;
  };
  const fn_u = param_e => !!param_e && !!param_e.find(param_e_1 => param_e_1.metadataBadgeRenderer.tooltip === "Verified");
  exportsObj.getAuthor = param_e => {
  let var_t;
  let var_r;
  let list_o = [];
  let flag_i = false;
  try {
  let var_s = param_e.response.contents.twoColumnWatchNextResults.results.results.contents.find(
  param_e_1 => param_e_1.videoSecondaryInfoRenderer && param_e_1.videoSecondaryInfoRenderer.owner &&
  param_e_1.videoSecondaryInfoRenderer.owner.videoOwnerRenderer).videoSecondaryInfoRenderer.owner.videoOwnerRenderer;
  var_t = var_s.navigationEndpoint.browseEndpoint.browseId;
  list_o = var_s.thumbnail.thumbnails.map(param_e_1 => {
  param_e_1.url = new URL(param_e_1.url, str_a).toString();
  return param_e_1;
  }
  );
  var_r = dep_download_event_sink.parseAbbreviatedNumber(fn_c(var_s.subscriberCountText));
  flag_i = fn_u(var_s.badges);
  }
  catch (var_e) {
  }
  try {
  let var_s = param_e.player_response.microformat && param_e.player_response.microformat.playerMicroformatRenderer;
  let var_c = var_s && var_s.channelId || var_t || param_e.player_response.videoDetails.channelId;
  let obj_u = {
  id: var_c,
  name: var_s ? var_s.ownerChannelName : param_e.player_response.videoDetails.author,
  user: var_s ? var_s.ownerProfileUrl.split("/").slice(-1)[0] :
  null,
  channel_url: "https://www.youtube.com/channel/" + var_c,
  external_channel_url: var_s ? "https://www.youtube.com/channel/" + var_s.externalChannelId :
  "",
  user_url: var_s ? new URL(var_s.ownerProfileUrl, str_a).toString() :
  "",
  thumbnails: list_o,
  verified: flag_i,
  subscriber_count: var_r
  };
  if (list_o.length) {
  dep_download_event_sink.deprecate(obj_u, "avatar", obj_u.thumbnails[0].url, "author.avatar",
  "author.thumbnails[0].url");
  }
  return obj_u;
  }
  catch (var_e) {
  return {
  };
  }
  };
  const fn_l = (param_e, param_t) => {
  if (param_e) {
  try {
  let var_r = fn_c(param_e.viewCountText);
  let var_o = fn_c(param_e.shortViewCountText);
  let var_s = param_t.find(param_t_1 => param_t_1.id === param_e.videoId);
  if (!/^\d/.test(var_o)) {
  var_o = var_s && var_s.short_view_count_text || "";
  }
  var_r = (/^\d/.test(var_r) ? var_r : var_o).split(" ")[0];
  let var_l = param_e.shortBylineText.runs[0].navigationEndpoint.browseEndpoint;
  let var_d = var_l.browseId;
  let var_p = fn_c(param_e.shortBylineText);
  let var_f = (var_l.canonicalBaseUrl || "").split("/").slice(-1)[0];
  let obj_h = {
  id: param_e.videoId,
  title: fn_c(param_e.title),
  published: fn_c(param_e.publishedTimeText),
  author: {
  id: var_d,
  name: var_p,
  user: var_f,
  channel_url: "https://www.youtube.com/channel/" + var_d,
  user_url: "https://www.youtube.com/user/" + var_f,
  thumbnails: param_e.channelThumbnail.thumbnails.map(param_e_1 => {
  param_e_1.url = new URL(param_e_1.url, str_a).toString();
  return param_e_1;
  }
  ),
  verified: fn_u(param_e.ownerBadges),
  [Symbol.toPrimitive]: () => {
  console.warn("`relatedVideo.author` will be removed in a near future release, use `relatedVideo.author.name` instead.");
  return obj_h.author.name;
  }
  }
  ,
  short_view_count_text: var_o.split(" ")[0],
  view_count: var_r.replace(/,/g, ""),
  length_seconds: param_e.lengthText ? Math.floor(dep_media_capture_events(fn_c(
  param_e.lengthText)) / 1000) : param_t && "" + param_t.length_seconds,
  thumbnails: param_e.thumbnail.thumbnails,
  richThumbnails: param_e.richThumbnail ? param_e.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails :
  [],
  isLive: !!param_e.badges && !!param_e.badges.find(param_e_1 => param_e_1.metadataBadgeRenderer.label === "LIVE NOW")
  };
  dep_download_event_sink.deprecate(obj_h, "author_thumbnail", obj_h.author.thumbnails[0].url,
  "relatedVideo.author_thumbnail", "relatedVideo.author.thumbnails[0].url");
  dep_download_event_sink.deprecate(obj_h, "ucid", obj_h.author.id, "relatedVideo.ucid",
  "relatedVideo.author.id");
  dep_download_event_sink.deprecate(obj_h, "video_thumbnail", obj_h.thumbnails[0].url,
  "relatedVideo.video_thumbnail", "relatedVideo.thumbnails[0].url");
  return obj_h;
  }
  catch (var_e) {
  }
  }
  };
  exportsObj.getRelatedVideos = param_e => {
  let list_t = [];
  let list_r = [];
  try {
  list_t = param_e.response.webWatchNextResponseExtensionData.relatedVideoArgs.split(
  ",").map(param_e_1 => dep_webrequest_filter.parse(param_e_1));
  }
  catch (var_e) {
  }
  try {
  list_r = param_e.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
  }
  catch (var_e) {
  return [];
  }
  let list_n = [];
  for (let var_e of list_r || []) {
  let var_r = var_e.compactVideoRenderer;
  if (var_r) {
  let var_e_1 = fn_l(var_r, list_t);
  if (var_e_1) {
  list_n.push(var_e_1);
  }
  }
  else {
  let var_r_1 = var_e.compactAutoplayRenderer || var_e.itemSectionRenderer;
  if (!var_r_1 || !Array.isArray(var_r_1.contents)) {
  continue;
  }
  for (let var_e_1 of var_r_1.contents) {
  let var_r_2 = fn_l(var_e_1.compactVideoRenderer, list_t);
  if (var_r_2) {
  list_n.push(var_r_2);
  }
  }
  }
  }
  return list_n;
  };
  exportsObj.getLikes = param_e => {
  try {
  let var_t = param_e.response.contents.twoColumnWatchNextResults.results.results.contents.find(
  param_e_1 => param_e_1.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(
  param_e_1 => param_e_1.toggleButtonRenderer && param_e_1.toggleButtonRenderer.defaultIcon.iconType === "LIKE");
  return parseInt(var_t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(
  /\D+/g, ""));
  }
  catch (var_e) {
  return null;
  }
  };
  exportsObj.getDislikes = param_e => {
  try {
  let var_t = param_e.response.contents.twoColumnWatchNextResults.results.results.contents.find(
  param_e_1 => param_e_1.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(
  param_e_1 => param_e_1.toggleButtonRenderer && param_e_1.toggleButtonRenderer.defaultIcon.iconType === "DISLIKE");
  return parseInt(var_t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(
  /\D+/g, ""));
  }
  catch (var_e) {
  return null;
  }
  };
  exportsObj.cleanVideoDetails = (param_e, param_t) => {
  param_e.thumbnails = param_e.thumbnail.thumbnails;
  delete param_e.thumbnail;
  dep_download_event_sink.deprecate(param_e, "thumbnail", {
  thumbnails: param_e.thumbnails
  }
  , "videoDetails.thumbnail.thumbnails", "videoDetails.thumbnails");
  param_e.description = param_e.shortDescription || fn_c(param_e.description);
  delete param_e.shortDescription;
  dep_download_event_sink.deprecate(param_e, "shortDescription", param_e.description,
  "videoDetails.shortDescription", "videoDetails.description");
  param_e.lengthSeconds = param_t.player_response.microformat &&
  param_t.player_response.microformat.playerMicroformatRenderer.lengthSeconds ||
  param_t.player_response.videoDetails.lengthSeconds;
  return param_e;
  };
  exportsObj.getStoryboards = param_e => {
  const var_t = param_e.player_response.storyboards && param_e.player_response.storyboards.playerStoryboardSpecRenderer &&
  param_e.player_response.storyboards.playerStoryboardSpecRenderer.spec &&
  param_e.player_response.storyboards.playerStoryboardSpecRenderer.spec.split("|");
  if (!var_t) {
  return [];
  }
  const var_r = new URL(var_t.shift());
  return var_t.map((param_e_1, param_t) => {
  let [var_n, var_o, var_i, var_a, var_s, var_c, var_u, var_l] = param_e_1.split(
  "#");
  var_r.searchParams.set("sigh", var_l);
  var_i = parseInt(var_i, 10);
  var_a = parseInt(var_a, 10);
  var_s = parseInt(var_s, 10);
  const var_d = Math.ceil(var_i / (var_a * var_s));
  return {
  templateUrl: var_r.toString().replace("$L", param_t).replace("$N", var_u),
  thumbnailWidth: parseInt(var_n, 10),
  thumbnailHeight: parseInt(var_o, 10),
  thumbnailCount: var_i,
  interval: parseInt(var_c, 10),
  columns: var_a,
  rows: var_s,
  storyboardCount: var_d
  };
  }
  );
  };
  exportsObj.getChapters = param_e => {
  const var_t = param_e.response && param_e.response.playerOverlays &&
  param_e.response.playerOverlays.playerOverlayRenderer;
  const var_r = var_t && var_t.decoratedPlayerBarRenderer &&
  var_t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer &&
  var_t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer.playerBar;
  const var_n = var_r && var_r.multiMarkersPlayerBarRenderer &&
  var_r.multiMarkersPlayerBarRenderer.markersMap;
  const var_o = Array.isArray(var_n) && var_n.find(param_e_1 => param_e_1.value &&
  Array.isArray(param_e_1.value.chapters));
  if (!var_o) {
  return [];
  }
  return var_o.value.chapters.map(param_e_1 => ({
  title: fn_c(param_e_1.chapterRenderer.title),
  start_time: param_e_1.chapterRenderer.timeRangeStartMillis / 1000
  }
  ));
  };
  };
