// Module 263 - Savior Kenh14_vn Extractor
export default function(t,e,r) {
  "use strict";
  function n(t){
  var e,r=t.closest('[type="VideoStream"][data-vid]'),n=null===(e=null==r?void 0:r.querySelector(".VideoCMS_Caption p"))||
  void 0===e?void 0:e.innerText;
  r||(r=t);
  for(var i=[()=>{
  var t,e,n;
  return null===(n=null===(e=null===(t=null==r?void 0:r.closest(".k14-videoUpdate-wrapper"))||void 0===t?
  void 0:t.querySelector(".videoUpdate-right .info-content a"))||void 0===e?void 0:e.innerText)||void 0===n?
  void 0:n.trim()}
  ,()=>{
  var t,e,n;
  return null===(n=null===(e=null===(t=null==r?void 0:r.closest(".featured-video-wrapper"))||void 0===t?
  void 0:t.querySelector(".video-info_title"))||void 0===e?void 0:e.innerText)||void 0===n?void 0:n.trim()}
  ,()=>{
  var t,e,n;
  return null===(n=null===(e=null===(t=null==r?void 0:r.closest(".video-item, [data-newsid]"))||void 0===t?
  void 0:t.querySelector(".video-title, .video-info h3>a"))||void 0===e?void 0:e.innerText)||void 0===n?
  void 0:n.trim()}
  ,()=>{
  var e,r,n;
  return null===(n=null===(r=null===(e=t.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box'))||
  void 0===e?void 0:e.querySelector(".mutex-video-item.nowPlaying a"))||void 0===r?void 0:r.innerText)||
  void 0===n?void 0:n.trim()}
  ,()=>{
  var e,r,n;
  return null===(n=null===(r=null===(e=t.closest('[data-marked-zoneid="k14_video_detail_topvideo"], .vdbw-left'))||
  void 0===e?void 0:e.querySelector("h1, .vdbw-title"))||void 0===r?void 0:r.innerText)||void 0===n?
  void 0:n.trim()}
  ,()=>t.getAttribute("alt")||void 0,()=>{
  var t,e;
  return null===(e=null===(t=null==r?void 0:r.previousElementSibling)||void 0===t?void 0:t.innerText)||
  void 0===e?void 0:e.trim()}
  ],o=0;
  !n&&o<i.length;
  )n=i[o](),o++;
  return n}
  function i(t){
  try{
  var e=new URL(t);
  return e.pathname.startsWith("/.hls/")?t:(e.pathname="/.hls"+e.pathname,e.href)}
  catch(e){
  return t}
  }
  r.r(e);
  var o={
  getDomains:()=>["kenh14.vn"],isMiniPlayerNode:t=>t.matches(".video-slide-thumb a video"),urls:[{
  checkUrl:t=>t.url.includes("streamfile.aspx"),mediaObjectChange:t=>{
  var e,r=t.mediaObject;
  return r.ext="mp4",r.filename=null===(e=document.getElementById("titlePlaying"))||void 0===e?void 0:
  e.innerText,"video"}
  }
  ,{
  checkUrl:t=>{
  var e=t.node;
  return Boolean(e.closest('[type="VideoStream"][data-vid]'))}
  ,getUrl:t=>{
  var e=t.node.closest('[type="VideoStream"][data-vid]'),r=(null==e?void 0:e.getAttribute("data-vid"))||
  void 0;
  if(r)return r.startsWith("kenh14/")&&(r=r.replace("kenh14/","kenh14cdn.com/")),i(`https://${r}
  .master.m3u8`)}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=n(t.node);
  return e.fixName=r||e.filename,"video"}
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return"VIDEO"==t.node.nodeName&&/(kenh14cdn\.com\/.+\.mp4)/i.test(e)}
  ,getUrl:t=>{
  var e=t.url,r=e.match(/(kenh14cdn\.com\/.+\.mp4)/i)[1];
  return r?i(`https://${r}
  .master.m3u8`):e}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=n(t.node);
  return e.url.includes(".gif.mp4")&&(e.noAudio=!0),e.fixName=r||e.filename,"video"}
  }
  ,{
  checkUrl:t=>{
  var e=t.url,r=t.node;
  return/^blob:/i.test(e)&&null!=r.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box')}
  ,getUrl:t=>{
  var e,r,n=null===(r=null===(e=t.node.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box'))||
  void 0===e?void 0:e.querySelector(".mutex-video-item.nowPlaying a"))||void 0===r?void 0:r.href;
  if(n){
  var o=new URL(n).searchParams.get("vid");
  return o?i(`https://kenh14cdn.com/${o}
  .master.m3u8`):n}
  }
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=n(t.node);
  return r&&(e.filename=r,e.fixName=r),"video"}
  }
  ],default:{
  mediaObjectChange(t){
  var e=t.mediaObject,r=n(t.node);
  r&&(e.filename=r,e.fixName=r)}
  }
  ,toggleLight:{
  turnOff:{
  updated(){
  var t=document.querySelectorAll("li.video-item");
  t.length&&t.forEach(t=>{
  t.setAttribute("style","opacity: unset")}
  )}
  }
  }
  };
  e.default=o};
