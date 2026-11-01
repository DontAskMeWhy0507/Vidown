// Module 235 - Savior Fptplay_vn Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n,i=r(44),o=r(14),a=r(9),s=r(1),u=r(0),c=r(3),l=location.href,f={
  getDomains:()=>["fptplay.vn"],forceUpdate(){
  l!=location.href&&(n=void 0,l=location.href)}
  ,parse:{
  sources:[],default:t=>{
  var e,r,l,f,d,h=t.media,p=t.response,v={
  filename:document.title}
  ,m=Object(i.parse)(p,{
  attributeNamePrefix:"",attrNodeName:"@",textNodeName:"#text",ignoreAttributes:!1,cdataTagName:"__cdata"}
  );
  try{
  var y=m.MPD.Period.AdaptationSet,g=null===(e=m.MPD["@"])||void 0===e?void 0:e.mediaPresentationDuration,
  b=Object(o.i)(g),w=Object.keys(y).find(t=>y[t]["@"].mimeType.includes("video")),A=Object.keys(y).find(t=>y[t]["@"].mimeType.includes("audio")),
  _=y.filter(t=>t["@"].mimeType.includes("text/")),E=y[w].Representation,S=null===(l=null===(r=y[A])||
  void 0===r?void 0:r.SegmentTemplate)||void 0===l?void 0:l["@"],O=y[A].Representation["@"].id,x=null===(d=null===(f=y[A])||
  void 0===f?void 0:f.SegmentTemplate)||void 0===d?void 0:d["@"];
  return E.map(t=>{
  var e,r,i;
  if(S){
  var c=t["@"],l=Math.ceil(b/(S.duration/S.timescale));
  r=c.id+"/"+S.initialization.split("/")[1],(i=[o.h]).push(`<Initialization sourceURL="${r}
  "/>`);
  for(var f=1;
  f<l;
  f++){
  var d=f.toString(),h=c.id+"/"+S.media.split("/")[1].replace(/\$Number\$/,d);
  i.push(`<SegmentURL media="${h}
  "/>`)}
  i.push('</SegmentList>\n\t\t\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t\t\t<AdaptationSet lang="en" mimeType="audio/mp4" codecs="mp4a.40.2" bitmovin:label="English stereo">\n\t\t\t\t\t\t\t\t<Representation id="4" mimeType="audio/mp4" codecs="mp4a.40.2" audioSamplingRate="48000" startWithSAP="1" bandwidth="98414">\n\t\t\t\t\t\t\t\t\t<SegmentList duration="10">'),
  i.push(`<Initialization sourceURL="${O+"/"+x.initialization.split("/")[1]}
  "/>`);
  for(var p=1;
  p<l;
  p++){
  var m=p.toString(),g=O+"/"+x.media.split("/")[1].replace(/\$Number\$/,m);
  i.push(`<SegmentURL media="${g}
  "/>`)}
  i.push("</SegmentList>\n\t\t\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t\t\t</Period>\n\t\t\t\t\t\t</MPD>")}
  else r={
  videoUrl:t.BaseURL,audioUrl:y[A].Representation.BaseURL};
  var w,_=t["@"].height+"p",E=a.b.getQualityBySize(_);
  try{
  w=v.i18n_quality||Object(u.i18n)(null===(e=s.r[_])||void 0===e?void 0:e.i18n_label)||E}
  catch(t){
  w=E}
  var k=Object.assign({
  }
  ,v,{
  url:null==n?void 0:n.url,resolution:_,quality:w,i18n_quality:w,play_list:null==i?void 0:i.join("\n"),
  type:"video",ext:"mp4",_isDashMPD:!!i}
  );
  return S||(k.extraData||(k.extraData=[]),k.extraData.push({
  name:"downloadRangeRequest",value:"true"}
  )),k}
  ).concat(..._.map(t=>{
  var e=t["@"].lang,r=t.Representation.BaseURL,n=new URL(r,h.url),i=Object(c.f)(n.href);
  return i.filename=v.filename,i.type="subtitles",i.quality=e,i}
  ))}
  catch(t){
  return console.warn(t),Promise.resolve(null)}
  }
  }
  ,default:{
  getUrl:()=>null==n?void 0:n.url}
  ,urls:[{
  checkUrl:t=>{
  var e=t.node;
  return Boolean(e.closest(".vjs-live"))}
  ,getUrl:()=>[]}
  ],idsProcess:t=>{
  var e=t.defaultIds,r=t.id,n=t.index;
  r.url.match(/livecdn/i)&&e.splice(n,1)}
  ,processRequestIds(t){
  var e=t.url;
  return!t.url.match(/livecdn\.fpt /i)&&(e.match(/(master\.m3u8)|(playlist\.m3u8)|(stream\.mpd)/i)?(n=t,
  !0):void 0)}
  ,changeZIndexLightOff:!0};
  e.default=f};
