// Module 206 - Savior Artlist_io Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  num_i = 0,
  obj_o = {
  getDomains: () => ["artlist.io"],
  addNode: () => ['[data-testid="ComposableAudioList"]'],
  forceUpdate() {
  var var_t = Array.from(document.querySelectorAll('[data-testid="ComposableAudioList"] [data-testid="MusicRow"]')).length;
  if (var_t !== num_i) return num_i = var_t, EE.emit("widget.forceUpdate"), !0;
  }
  ,
  isMiniPlayerNode: (param_t, param_e) => param_t.matches('[data-testid="ComposableAudioList"]'),
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("search-api.artlist.io/v2/graphql"),
  parse: param_t => {
  var var_e = param_t.response;
  try {
  return JSON.parse(var_e).data.songList.songs.filter(param_t_1 => param_t_1.sitePlayableFilePath ||
  param_t_1.MP3FilePath).map(param_t_1 => {
  var var_e_1 = new URL(param_t_1.sitePlayableFilePath || param_t_1.MP3FilePath);
  var_e_1.pathname = "/" + atob(var_e_1.pathname.substring(1));
  var var_r = var_e_1.href,
  var_i = Object(dep_url_utils.f)(var_r);
  return var_i.identifier = param_t_1.songId, var_i.altUrl = param_t_1.MP3FilePath,
  var_i.filename = `${param_t_1.songName}- ${param_t_1.artistName}`, var_i.type = "audio", var_i.ext = "mp3", var_i.exts = ["mp3"], var_i;
  }
  );
  }
  catch (var_t) {
  return [];
  }
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.node.matches('[data-id="global-player"], [data-testid="ComposableAudioList"]'),
  getUrl: param_t => {
  var var_e = param_t.node,
  var_r = Math.ceil(var_e.childElementCount / 20);
  return Array.from({
  length: var_r
  }
  , (param_t_1, param_e) => {
  var var_r_1 = Object(dep_url_utils.f)("https://search-api.artlist.io/v2/graphql");
  return var_r_1.requestMethod = "POST", var_r_1.params = {
  query: "query SongList($page: Int!, $songSortType: SongSortType!, $take: Int!, $vocalType: VocalType!, $bpmMax: Int, $bpmMin: Int, $durationMax: Int, $durationMin: Int, $excludedCategoryIds: [Int], $categoryIds: [Int], $searchTerm: String, $isWithStemsOnly: Boolean) {\n  songList(\n    page: $page, songSortType: $songSortType, take: $take, vocalType: $vocalType, bpmMax: $bpmMax, bpmMin: $bpmMin, durationMax: $durationMax, durationMin: $durationMin, excludedCategoryIds: $excludedCategoryIds, categoryIds: $categoryIds, searchTerm: $searchTerm, isWithStemsOnly: $isWithStemsOnly\n  ) {\n    songs {\n      artistName\n      featuredArtists\n      MP3FilePath\n      nameForURL\n      primaryArtists\n      sitePlayableFilePath\n      songName\n      songId\n    }\n    totalResults\n  }\n}",
  variables: {
  isAuthenticated: !1,
  searchTerm: "",
  typeId: 1,
  take: 20,
  page: param_e + 1,
  songSortType: "STAFF_PICKS",
  vocalType: "VOCAL_AND_INSTRUMENTS",
  categoryIds: [],
  excludedCategoryIds: [],
  isWithStemsOnly: !1
  }
  }
  , var_r_1.paramType = "JSON", var_r_1.ext = "m3u8", var_r_1.exts = ["m3u8"], var_r_1.identifier = "page-" + (
  param_e + 1), var_r_1.type = "video", var_r_1;
  }
  );
  }
  }
  ]
  };
  exportsObj.default = obj_o;
  };
