// Module 238 - Savior Gocphim_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  siteMatcher: param_t => /gocphim[a-z0-9]*\.(net)/i.test(param_t),
  getCustomParent: param_t => param_t.closest("#video-player-wrap-control, .video-player-content"),
  shouldWidgetAttachToParentNode: () => !0,
  isValidVideoNode: param_t => !!["VIDEO", "IFRAME"].includes(param_t.nodeName),
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" == param_t.node.nodeName && !var_e;
  }
  ,
  getUrl: param_t => param_t.ids
  }
  ]
  };
  exportsObj.default = obj_n;
  };
