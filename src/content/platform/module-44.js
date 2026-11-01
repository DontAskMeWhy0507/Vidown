// Module 44 [platform]
module.exports = function(t,e,r) {
  "use strict";
const n=r(191),i=r(125),o=r(125),a=r(88).buildOptions,s=r(194);e.parse=function(t,e={},r){if(r){!0===r&&(r={});const e=s.validate(t,r);if(!0!==e)throw Error(e.err.msg)}e.parseTrueNumberOnly&&!1!==e.parseNodeValue&&!e.numParseOptions&&(e.numParseOptions={leadingZeros:!1});let u=a(e,o.defaultOptions,o.props);const c=i.getTraversalObj(t,u);return n.convertToJson(c,u)},e.convertTonimn=r(195).convert2nimn,e.getTraversalObj=i.getTraversalObj,e.convertToJson=n.convertToJson,e.convertToJsonString=r(196).convertToJsonString,e.validate=s.validate,e.j2xParser=r(197),e.parseToNimn=function(t,r,n){return e.convertTonimn(e.getTraversalObj(t,n),r,n)}};
