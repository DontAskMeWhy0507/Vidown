// Module 234 - Savior Forvo_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(3),i="",o={
  getDomains:()=>["forvo.com"],addNode:()=>['li div.play[onclick^="Play"]'],isMiniPlayerNode:t=>!!t.matches('li div.play[onclick^="Play"]'),
  beforeGetUrl(){
  var t,e=null===(t=Array.from(document.querySelectorAll("script")).find(t=>t.innerText.includes("_AUDIO_HTTP_HOST")))||
  void 0===t?void 0:t.innerText.trim();
  e&&Array.from(e.matchAll(/(AUDIO|VIDEO)_HTTP_HOST\s?=\s?['"]([a-z0-9\-_\.]+)['"]/gi)).forEach(t=>{
  var e,r=null===(e=t[1])||void 0===e?void 0:e.toLowerCase();
  "audio"!==r&&"video"!==r||("audio"!==r?t[2]:i=t[2])}
  )}
  ,urls:[{
  checkUrl:t=>t.node.matches('li div.play[onclick^="Play"]'),getUrl:t=>{
  var e,r=t.node.getAttribute("onclick"),o=(null===(e=null==r?void 0:r.match(/\((.+)\)/i))||void 0===e?
  void 0:e[1].split(",").map(t=>t.replace(/['"]/gi,"")))||[];
  if(!o.length)return[];
  var a=[o[1],o[2],o[4],o[5]],s=o[7],u=o[8],c=["/mp3/","/ogg/","/audios/mp3/","/audios/ogg/"];
  return a.map((t,e)=>{
  if(t){
  var r=atob(t),o=`https://${i}
  ${c[e]}
  ${r}
  `,a=Object(n.f)(o);
  return a.filename=s,a.quality=u,a.type="audio",a}
  }
  ).filter(Boolean)}
  }
  ]};
  e.default=o};
