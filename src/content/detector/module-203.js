// Module 203 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={audioUrl:"",videoUrl:""},i={getDomains:()=>["app.strength.muscleandmotion.com"],urls:[{checkUrl:t=>{var e=t.url;return/d24cq1nx03h9us\.cloudfront\.net.*\.(mp3|mp4)$/.test(e)},getUrl:t=>{var e=t.url;return e.includes(".mp3")&&n.audioUrl!==e&&(n.audioUrl=e),e.includes(".mp4")&&n.videoUrl!==e&&(n.videoUrl=e),n},mediaObjectChange:t=>{var e,r,n=t.mediaObject,i=(null===(r=null===(e=t.node.closest("div.simplebar-content"))||void 0===e?void 0:e.querySelector("h2"))||void 0===r?void 0:r.textContent)||document.title;n.filename=i}}]};e.default=i};
