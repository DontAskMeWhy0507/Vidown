// Module 272 - Savior Luotphimtv_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(9),i=r(0),o={
  }
  ,a={
  getDomains:()=>["luotphimtv"],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/(dpst1.xyz\/stream)/))}
  ,parse:t=>{
  var e=t.media;
  return[Object.assign(Object.assign({
  }
  ,e),{
  referrer:o[e.url]||o[location.href]||location.href}
  )]}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  if(e.match(/(video\.mp4\?)/)){
  var r=new URL(e),n=r.searchParams.has("hash"),i=r.searchParams.has("cookie"),o=r.searchParams.has("key");
  if(n&&i&&o)return!0}
  return!1}
  ,parse:t=>{
  var e=t.media,r=Object.assign(Object.assign({
  }
  ,e),{
  skipReferrer:!0}
  );
  return delete r.referrer,r.quality||(r.quality=n.b.DEFAULT_QUALITY_TYPE),"number"==typeof r.size&&
  (r.size=Object(i.beautifyFileSize)(r.size)),[r]}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/(dpst1.xyz\/stream)|(nobiphim\.com)/))}
  ,getUrl:t=>{
  var e=t.url;
  return o[location.href]=e,e}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  e.referrer=o[e.url]||o[location.href]||location.href}
  }
  ]};
  e.default=a};
