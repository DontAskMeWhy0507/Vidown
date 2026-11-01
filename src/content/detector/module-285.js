// Module 285 [detector]
export default function(t,e,r) {
  "use strict";
var n,i;r.r(e);var o={getDomains:()=>["myclip.vn"],forceUpdate(){i!=location.href&&(i=location.href,n=void 0)},urls:[{checkUrl:t=>{var e=t.url;return/^blob:/i.test(e)},getUrl:()=>n?n.url:"",mediaObjectChange(t){var e,r,i=t.mediaObject,o=null===(r=null===(e=t.node.closest(".swiper-slide"))||void 0===e?void 0:e.querySelector(".headline"))||void 0===r?void 0:r.innerText;return o&&(i.fixName=o),i.url==(null==n?void 0:n.url)?"video":i.type}}],processRequestIds(t){if(/_m\.m3u8/i.test(t.url))return n=t,!0}};e.default=o};
