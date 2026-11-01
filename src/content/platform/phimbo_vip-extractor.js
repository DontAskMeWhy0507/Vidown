// Module 304 - Savior Phimbo_vip Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i={
  getDomains:()=>["phimbo.vip","phimbo.me"],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i))}
  ,parse:t=>{
  var e,r,i=t.media,o=t.response;
  try{
  var a=JSON.parse(o);
  if(!a)return[i];
  var s=JSON.parse(JSON.stringify(i));
  s.resolution=a.quality,s.quality=null===(e=n.r[a.quality])||void 0===e?void 0:e.label;
  var u=atob(a.cdn),c=["#EXTM3U","#EXT-X-VERSION:"+(a.version||3),"#EXT-X-TARGETDURATION:"+(a.duration||
  4),"#EXT-X-MEDIA-SEQUENCE:"+(a.mediaSequence||0)];
  if(null===(r=null==a?void 0:a.content)||void 0===r?void 0:r.length)for(var l=0,f=a.content.length;
  l<f;
  l++){
  var d=a.content[l];
  c.push(`#EXTINF:${d.extinf}
  ,`),c.push(`${u}
  ${d.url}
  .html`)}
  return c.push("#EXT-X-ENDLIST"),delete s.referrer,s.skipReferrer=!0,s.play_list=c.join("\n"),s.extraData={
  referrer:location.href,tab_url:location.href}
  ,[s]}
  catch(t){
  return[i]}
  }
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/streamsb\.biz\/playlist2\/.*\.m3u8+/i))}
  ,parse:t=>{
  var e=t.media;
  try{
  return[Object.assign({
  }
  ,e)]}
  catch(t){
  return[e]}
  }
  }
  ]}
  ,idsProcess:t=>{
  var e=t.defaultIds,r=t.id,n=t.index;
  r.url.match(/media\.discordapp\.net\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/i)&&e.splice(n,1)}
  };
  e.default=i};
