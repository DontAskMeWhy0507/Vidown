// Module 315 - Savior Phimsex69_xyz Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  }
  ,
  obj_i = {
  parse: {
  sources: [],
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  var var_i = JSON.parse(var_r),
  var_o = obj_n[var_e.cacheUrl || ""],
  var_a = var_o.domainList.length;
  if (1 == var_i.status && var_o) {
  if (1 == var_i.type) {
  var var_s = Object.assign({
  }
  , var_e),
  list_u = ["#EXTM3U"];
  list_u.push("#EXT-X-VERSION:3"), list_u.push("#EXT-X-TARGETDURATION:" + var_i.tgdr),
  list_u.push("#EXT-X-PLAYLIST-TYPE:VOD");
  for (var num_c = 0;
  num_c < var_i.data[0].length;
  num_c++) 0 == num_c && (var_s.url = `https://${var_o.domainList[num_c % var_a]}
  
  
  /${var_o.userId}
  
  
  /${var_i.data[1][num_c]}
  
  
  `), list_u.push(`#EXTINF:${var_i.data[0][num_c]}
  
  
  ,`), list_u.push(`https://${var_o.domainList[num_c % var_a]}
  
  
  /${var_o.userId}
  
  
  /${var_i.data[1][num_c]}
  
  
  `);
  return list_u.push("#EXT-X-ENDLIST"), var_s.play_list = list_u.join("\n"), [var_s];
  }
  return 2 == var_i.type ? [{
  url: var_i.data,
  ext: "m3u8",
  exts: ["m3u8"],
  type: "video",
  filename: document.title
  }
  ] : [];
  }
  return [];
  }
  catch (var_t) {
  return console.log(var_t), [];
  }
  }
  }
  ,
  urls: []
  };
  exportsObj.default = obj_i;
  };
