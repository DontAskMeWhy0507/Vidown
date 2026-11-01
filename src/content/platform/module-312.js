// Module 312 [platform]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n,i=r(6),o={getDomains:()=>["phimmoichillec."],parse:{default:t=>{var e=t.media,r=t.response.split("#EXT-X-DISCONTINUITY").filter((t,e)=>0==e||e%2!=0).join("\n");return Object(i.e)(r,e)}},default:{getUrl:()=>n.url},processRequestIds:t=>(t.url.includes("mixed")&&(n=t),!0)};e.default=o};
