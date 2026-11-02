// Module 322 - Savior Reddit Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_helper = requireFn(12),
  obj_i = {
  getDomains: () => ["reddit.com"],
  addNode: () => ["shreddit-player-2", "shreddit-embed"],
  isValidVideoNode: param_t => "shreddit-player-2" === param_t.tagName.toLowerCase(
  ) || "shreddit-embed" === param_t.tagName.toLowerCase() ||
  Object(dep_dom_helper.m)(param_t)
  };
  exportsObj.default = obj_i;
  };
