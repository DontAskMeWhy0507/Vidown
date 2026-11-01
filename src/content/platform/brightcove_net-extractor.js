// Module 219 - Savior Brightcove_net Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n,i=void 0,o={
  getDomains:()=>["brightcove.net"],toggleLight:{
  turnOn:{
  updated:()=>{
  var t;
  null===(t=document.querySelector(".vjs-playlist-sidebar"))||void 0===t||t.classList.remove("--savior-overlay-z-index-top")}
  }
  ,turnOff:{
  updated:()=>{
  var t;
  null===(t=document.querySelector(".vjs-playlist-sidebar"))||void 0===t||t.classList.add("--savior-overlay-z-index-top")}
  }
  }
  ,forceUpdate:()=>{
  var t=document.querySelector('video[role="application"]');
  t&&t.src!==n&&(n=t.src,i=void 0)}
  ,default:{
  getUrl:()=>null==i?void 0:i.url}
  ,processRequestIds(t){
  if(String(t.url).match(/master\.m3u8/))return i=t,!0}
  };
  e.default=o};
