// Module 206 - Savior Artlist_io Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(3),i=0,o={
  getDomains:()=>["artlist.io"],addNode:()=>['[data-testid="ComposableAudioList"]'],forceUpdate(){
  var t=Array.from(document.querySelectorAll('[data-testid="ComposableAudioList"] [data-testid="MusicRow"]')).length;
  if(t!==i)return i=t,EE.emit("widget.forceUpdate"),!0}
  ,isMiniPlayerNode:(t,e)=>t.matches('[data-testid="ComposableAudioList"]'),parse:{
  sources:[{
  checkSource:t=>t.url.includes("search-api.artlist.io/v2/graphql"),parse:t=>{
  var e=t.response;
  try{
  return JSON.parse(e).data.songList.songs.filter(t=>t.sitePlayableFilePath||t.MP3FilePath).map(t=>{
  var e=new URL(t.sitePlayableFilePath||t.MP3FilePath);
  e.pathname="/"+atob(e.pathname.substring(1));
  var r=e.href,i=Object(n.f)(r);
  return i.identifier=t.songId,i.altUrl=t.MP3FilePath,i.filename=`${t.songName}
   - ${t.artistName}
  `,i.type="audio",i.ext="mp3",i.exts=["mp3"],i}
  )}
  catch(t){
  return[]}
  }
  }
  ]}
  ,urls:[{
  checkUrl:t=>t.node.matches('[data-id="global-player"], [data-testid="ComposableAudioList"]'),getUrl:
  t=>{
  var e=t.node,r=Math.ceil(e.childElementCount/20);
  return Array.from({
  length:r}
  ,(t,e)=>{
  var r=Object(n.f)("https://search-api.artlist.io/v2/graphql");
  return r.requestMethod="POST",r.params={
  query:"query SongList($page: Int!, $songSortType: SongSortType!, $take: Int!, $vocalType: VocalType!, $bpmMax: Int, $bpmMin: Int, $durationMax: Int, $durationMin: Int, $excludedCategoryIds: [Int], $categoryIds: [Int], $searchTerm: String, $isWithStemsOnly: Boolean) {\n  songList(\n    page: $page, songSortType: $songSortType, take: $take, vocalType: $vocalType, bpmMax: $bpmMax, bpmMin: $bpmMin, durationMax: $durationMax, durationMin: $durationMin, excludedCategoryIds: $excludedCategoryIds, categoryIds: $categoryIds, searchTerm: $searchTerm, isWithStemsOnly: $isWithStemsOnly\n  ) {\n    songs {\n      artistName\n      featuredArtists\n      MP3FilePath\n      nameForURL\n      primaryArtists\n      sitePlayableFilePath\n      songName\n      songId\n    }\n    totalResults\n  }\n}",
  variables:{
  isAuthenticated:!1,searchTerm:"",typeId:1,take:20,page:e+1,songSortType:"STAFF_PICKS",vocalType:"VOCAL_AND_INSTRUMENTS",
  categoryIds:[],excludedCategoryIds:[],isWithStemsOnly:!1}
  }
  ,r.paramType="JSON",r.ext="m3u8",r.exts=["m3u8"],r.identifier="page-"+(e+1),r.type="video",r}
  )}
  }
  ]};
  e.default=o};
