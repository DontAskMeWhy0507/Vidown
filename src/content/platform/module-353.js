// Module 353 [platform]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={getDomains:()=>["tienganh123.com"],addNode:()=>["span[media-url]"],getCustomParent:t=>t.closest(".flowplayer, #hlsjsvod"),urls:[{checkUrl:t=>"SPAN"==t.node.nodeName,getUrl:t=>t.node.getAttribute("media-url")||void 0,mediaObjectChange:t=>{var e,r,n=t.mediaObject,i=null===(r=null===(e=t.node.parentElement)||void 0===e?void 0:e.parentElement)||void 0===r?void 0:r.innerText;return i&&(n.filename=i),n.type}}]};e.default=n};
