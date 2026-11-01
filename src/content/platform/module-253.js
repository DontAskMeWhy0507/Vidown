// Module 253 [platform]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=location.href,i={getDomains:()=>["ibomma.net","net.ibomma.day"],default:{mediaObjectChange:t=>{var e=t.mediaObject,r=t.node;return n=r.src,e.referrer=n,e.type}},idsProcess(t){var e=t.id;e.referrer==e.url&&(e.referrer=n)}};e.default=i};
