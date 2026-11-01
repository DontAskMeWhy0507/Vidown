// Module 381 - Savior Vnexpress_net Extractor
export default function(t,e,r) {
  "use strict";
  var n;
  r.r(e);
  var i=location.href;
  function o(t,e){
  for(var r=[t=>{
  var e,r,n;
  return null===(n=null===(r=null===(e=t.closest("[data-vid], .box_embed_video_parent, .embed_video_new"))||
  void 0===e?void 0:e.querySelector(".parser_title"))||void 0===r?void 0:r.innerText)||void 0===n?void 0:
  n.trim()}
  ,t=>{
  var e,r;
  return null===(r=null===(e=t.closest("a.thumb[title][href]"))||void 0===e?void 0:e.title)||void 0===r?
  void 0:r.trim()}
  ,t=>{
  var e,r,n;
  return null===(n=null===(r=null===(e=t.closest(".swiper-slide"))||void 0===e?void 0:e.querySelector(".description-short"))||
  void 0===r?void 0:r.innerText)||void 0===n?void 0:n.trim()}
  ],n=0,i=r.length;
  n<i;
  n++){
  var o=r[n](e);
  if(o)return t.filename=o,void(t.fixName=o)}
  }
  var a={
  getDomains:()=>["vnexpress.net"],forceUpdate:/video\.vnexpress\.net/i.test(location.origin)?()=>{
  i!=location.href&&(i=location.href,EE.emit("widget.forceUpdate"))}
  :void 0,urls:[{
  checkUrl:t=>!!t.node.closest(".swiper-slide"),getUrl:t=>{
  var e=t.node.closest(".swiper-slide");
  if(!e)return[];
  if(e.getAttribute("data-is-ad")||"true"===e.getAttribute("data-is-ad"))return[];
  var r=e.getAttribute("data-master");
  return r||[]}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.referrer=location.href,e.type="video",o(e,r),e.type}
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return"VIDEO"==t.node.nodeName&&/\.vnecdn\.net/i.test(e)}
  ,getUrl:t=>{
  var e,r=t.url,n=t.node;
  return n.childElementCount&&(r=(null===(e=n.querySelector("source"))||void 0===e?void 0:e.src)||r),
  r}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.referrer=location.href,e.type="video",o(e,r),"gif"==e.ext&&r.matches(".thumb-gif")&&(e.ext="mp4",
  e.exts=["mp4"],e.noAudio=!0),e.type}
  }
  ,{
  checkUrl:t=>{
  var e,r,n=t.node;
  return"VIDEO"==n.nodeName&&Boolean(null===(r=null===(e=n.parentElement)||void 0===e?void 0:e.getAttribute("src"))||
  void 0===r?void 0:r.match(/\.vnecdn\.net/i))}
  ,getUrl:t=>t.node.parentElement.getAttribute("src"),mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.referrer=location.href,e.type="video",o(e,r),e.type}
  }
  ,{
  checkUrl:()=>{
  var t=document.querySelector("#content_script script")||{
  };
  if(t&&t.innerText){
  t=t.innerText;
  var e=new RegExp(/m3u8:\s*'.+\.m3u8/g).exec(t);
  if(e&&e[0])return n=e[0].replace(/(m3u8:\s*'|\s)/,""),!0}
  return!1}
  ,getUrl:()=>n,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.referrer=location.href,o(e,r),e.type}
  }
  ],idsProcess(t){
  var e=t.defaultIds,r=t.id,n=t.index;
  r.url.match(/\.vnecdn\.net\/live/)&&e.splice(n,1)}
  ,toggleLight:{
  turnOff:{
  parentUpdate(){
  }
  ,updated(t,e){
  var r,n;
  if("Shorts"==(null===(n=null===(r=document.querySelector(".open"))||void 0===r?void 0:r.querySelector("span"))||
  void 0===n?void 0:n.textContent)){
  var i=e.$backdrop;
  i.remove();
  var o=document.querySelector(".section-shortplaying"),a=null==o?void 0:o.parentElement;
  if(a){
  a.classList.add("--savior-overlay-z-index-top"),o.classList.add("--savior-overlay-position-relative",
  "--savior-overlay-z-index-top");
  var s=["0px","0px"];
  i.style.top=s[0],i.style.left=s[1],a.prepend(i)}
  }
  else{
  if("vnexpress.net"!=location.host||location.pathname.includes(".html"))return;
  document.body.classList.add("--savior-lightoff-fix"),document.querySelectorAll(".swiper-wrapper").forEach(t=>{
  var e;
  return null===(e=null==t?void 0:t.classList)||void 0===e?void 0:e.add("--savior-overlay-transform-reset")}
  ),null==t||t.scrollIntoView()}
  }
  }
  ,turnOn:{
  updated(t){
  "vnexpress.net"!=location.host||location.pathname.includes(".html")||(document.body.classList.remove("--savior-lightoff-fix"),
  null==t||t.scrollIntoView())}
  }
  }
  };
  e.default=a};
