// Module 209 [platform]
export default function(t,e,r) {
  "use strict";
r.r(e);var n=r(9),i=[".story-listen #list-chapter .chapter.active","#container_content .ss_track_info"],o=[],a={getDomains:()=>["truyenaudiofull.com","bailemi.com"],addNode:()=>i,getCustomElement:()=>Array.from(document.querySelectorAll(i.join(","))),isMiniPlayerNode:t=>t.matches(i.join(",")),urls:[{checkUrl:t=>t.node.matches(i[0]),getUrl:()=>o}],default:{getUrl:()=>o},processRequestIds(t){if(location.href.includes("bailemi.com")&&(t.filename=document.title),!o.find(e=>e.url==t.url)&&!t.altUrl){var e=n.b.QUALITY_TYPES[n.a.QL_VIDEO_STANDARD];t.quality=t.quality||e.quality,t.resolution=t.resolution||"128kbps",o.push(t)}return!0}};e.default=a};
