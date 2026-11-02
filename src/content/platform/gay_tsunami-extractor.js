// Module 237 - Savior Gay_tsunami Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  exportsObj.default = {
  getDomains: () => ["gaytsunami."],
  isValidVideoNode: param_t => "VIDEO" === param_t.tagName ||
  "IFRAME" === param_t.tagName && /gaytsunami\.com\/embed.+/i.test(param_t.src)
  };
  };
