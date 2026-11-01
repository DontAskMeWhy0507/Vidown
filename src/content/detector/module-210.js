// Module 210 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={getDomains:()=>["autopro.com.vn"],urls:[{checkUrl:t=>"VIDEO"===t.node.tagName,getUrl:t=>{var e;return`https://${null===(e=t.node.closest(".VCSortableInPreviewMode"))||void 0===e?void 0:e.getAttribute("data-vid")}/master.m3u8`.replace("autopro/","autopro8.mediacdn.vn/")},mediaObjectChange:t=>{var e,r,n,i=t.mediaObject,o=t.node;i.url&&(i.fixName=(null===(n=null===(r=null===(e=o.closest("li"))||void 0===e?void 0:e.querySelector("h3"))||void 0===r?void 0:r.querySelector("a"))||void 0===n?void 0:n.title)||document.title)}}]};e.default=n};
