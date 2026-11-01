// Module 697 - Savior Vimeo Host
export default function(t,e,r) {
  "use strict";
  r.r(e),e.default={
  index:250,getUrl(t,e,r,n,i,o){
  var a,s=location.origin+location.pathname;
  if(t.match(/vimeo\.com/i)&&(!o||o.startsWith(s)))for(var u,c=[/config *= *({.*?});/i,/config *= *({.*})/i,
  /playerConfig\s*=\s*({.*})/],l=Array.from(document.querySelectorAll("script")).filter(t=>t&&t.innerText).map(t=>t.innerText),
  f=function(){
  var t=c[d],e=l.find(e=>e.match(t));
  if(e)return{
  v:{
  return:!0,data:{
  config:JSON.parse((null===(a=t.exec(e))||void 0===a?void 0:a[1])||"{}")}
  }
  }
  }
  ,d=0;
  d<c.length;
  d++)if(u=f())return u.v}
  }
  };
