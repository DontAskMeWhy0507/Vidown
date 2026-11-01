// Module 238 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e);var n={siteMatcher:t=>/gocphim[a-z0-9]*\.(net)/i.test(t),getCustomParent:t=>t.closest("#video-player-wrap-control, .video-player-content"),shouldWidgetAttachToParentNode:()=>!0,isValidVideoNode:t=>!!["VIDEO","IFRAME"].includes(t.nodeName),urls:[{checkUrl:t=>{var e=t.url;return"VIDEO"==t.node.nodeName&&!e},getUrl:t=>t.ids}]};e.default=n};
