// Module 279 [platform]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=r(14),i=r(20),o=[],a={getDomains:()=>["motphim2.com","iphimchillzz.com"],processRequestIds:t=>{if(null==t?void 0:t.url){var e=new URL(t.url),r=e.origin,n=e.searchParams;return"1"===n.get("type")&&"6"===n.get("ct")&&(t.origin=r,o.push(t)),!0}},parse:{default:t=>{var e=t.media,r=t.response;return r?Object(n.b)(r,document.title,e.origin,e.url):[]}},urls:[...i.a.urls||[]],default:{getUrl:()=>o[0]?[o[0]]:[]}};e.default=a};
