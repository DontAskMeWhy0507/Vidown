// Module 325 - Savior Rosenfeldmedia_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_vimeo_com_extractor = requireFn(119),
  var_i = location.href,
  var_o = Object.assign(Object.assign({
  }
  , dep_vimeo_com_extractor.default), {
  forceUpdate() {
  location.href !== var_i && (EE.emit("widget.forceUpdate"), var_i = location.href);
  }
  ,
  idsProcess: param_t => {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  "number" == typeof var_r.size && var_r.size < 131072 && var_e.splice(var_n, 1);
  }
  ,
  toggleLight: {
  turnOff: {
  updated(param_t, param_e) {
  var var_r = param_e.parent.getComponent("toggleLight");
  var_r && (var_r.$backdrop.style.top = "0");
  }
  }
  }
  ,
  getDomains: () => ["rosenfeldmedia.", "talkingkorea.com"]
  }
  );
  exportsObj.default = var_o;
  };
