// Module 301 - Savior Phatphapungdung_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(28),i=r(0),o=r(3),a={
  getDomains:()=>["phatphapungdung."],getCustomParent:t=>t.closest(".data-item")||t.closest(".fp-player"),
  addNode:()=>[".fp-player iframe.fp-engine"],isMiniPlayerNode:t=>t.src.includes(".mp3"),isValidVideoNode:
  t=>["IFRAME"].includes(t.nodeName)||"VIDEO"===t.nodeName,parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return Boolean(Object(i.getVideoId)(e))}
  ,parse:t=>{
  var e=t.media;
  return n.a.parse(e.url)}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(Object(i.getVideoId)(e))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.ext="mp4",e.exts=["mp4"],"video"}
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return"VIDEO"==t.node.nodeName&&/\.(mp3|mp4|avi|aac|wav)$/i.test(e)}
  ,getUrl(t){
  var e=t.url,r=Object(o.f)(e);
  return"mp3"===r.ext&&(r.type="audio"),[r]}
  }
  ]};
  e.default=a};
