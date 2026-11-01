// Module 399 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e),r.d(e,"_data",(function(){return o}));var n=[],i=location.href,o={getDomains:()=>["xxphimsex.pro"],forceUpdate:()=>{location.href!==i&&(EE.emit("widget.forceUpdate"),i=location.href)},processRequestIds:t=>{if("string"==typeof t.url&&(t.url.match(/ntkstream.xyz/)||t.url.includes(".m3u8")))return n.push(t),!0},default:{getUrl:t=>{if(n.length>0)return n.map(e=>(e.referrer=t.url,e))}},addNode:()=>["iframe"]};e.default=o};
