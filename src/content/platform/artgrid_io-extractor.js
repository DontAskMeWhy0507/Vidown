// Module 205 - Savior Artgrid_io Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["artgrid.io"],
  default: {
  getUrl: param_t => {
  var var_e;
  return null === (var_e = param_t.node.querySelector("source")) ||
  void 0 === var_e ? void 0 : var_e.src;
  }
  ,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.noAudio = !0, var_e.identifier = Date.now().toString(), var_e.type;
  }
  }
  ,
  notMiniPlayerNode: param_t => Boolean(param_t.closest("mat-grid-tile, .mat-grid-tile"))
  };
  exportsObj.default = obj_n;
  };
