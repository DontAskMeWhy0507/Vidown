// Module 368 [providers]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=r(0),i=r(28),o=/youtube\.com\/embed\//i,a={getDomains:()=>["vatlyhadong."],getCustomParent:t=>t.parentElement,parse:{sources:[{checkSource:t=>o.test(t.url),parse:t=>{var e=t.media,r=Object(n.getVideoId)(e.url);return r?i.a.parse(r):[]}}]}};e.default=a};
