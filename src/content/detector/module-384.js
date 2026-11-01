// Module 384 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=[],i={getDomains:()=>["vphimmoizz."],processRequestIds:t=>!t.url.match(/.+app-.+\/video.mp4/i)||(n.push(t),!0),urls:[{checkUrl:t=>t.url.includes("p.thoctv.com"),getUrl:()=>{if(n.length>0){var t=n[0];return t.referrer="https://p.thoctv.com",t.title=document.title,[t]}}}]};e.default=i};
