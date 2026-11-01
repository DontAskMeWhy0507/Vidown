// Module 299 [platform]
export default function(t,e,r) {
  "use strict";
r.r(e);var n=[],i=location.href,o={getDomains:()=>["oxfordlearnersdictionaries.com"],forceUpdate:()=>{location.href!==i&&(EE.emit("widget.forceUpdate"),i=location.href)},processRequestIds:t=>{if("string"==typeof t.url&&(t.url.match(/oxfordlearnersdictionaries.com\/media/)||t.url.includes(".mp3")))return n.push(t),!0},default:{getUrl:t=>{if(n.length>0)return(null==t?void 0:t.node)?n.filter(e=>e.url==t.node.getAttribute("data-src-mp3")):n}},addNode:()=>[".audio_play_button"]};e.default=o};
