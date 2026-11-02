// Module 257 - Savior Japxtube_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  getDomains: () => ["japxtube."],
  default: {
  getUrl: param_t => param_t.ids.filter(param_t_1 => String(param_t_1.url).includes(
  "master.m3u8"))
  }
  };
  };
