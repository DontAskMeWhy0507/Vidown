// Module 267 - Savior Kuaishou_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["kuaishou.com"],urls:[{
  checkUrl:()=>location.href.includes("live.kuaishou.com"),getUrl:()=>[]}
  ],getCustomParent:t=>t.closest(".swiper-container")||t.parentElement};
  e.default=n};
