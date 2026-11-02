// Module 227 - Savior Docbao_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n = new RegExp(/url=+[\s\S]+(video.docbao.vn)+[\s\S]+(.mp4)/g),
  obj_i = {
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(var_n));
  }
  ,
  getUrl: param_t => param_t.url.split("url=")[1]
  }
  ]
  };
  exportsObj.default = obj_i;
  };
