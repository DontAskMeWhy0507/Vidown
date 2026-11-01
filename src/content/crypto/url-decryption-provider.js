// Module 114 - Savior Url Decryption Provider
export default function(t,e){
  const r=new TextEncoder,n=new TextDecoder;
  function i(t){
  const e=new Uint8Array(t.length/2);
  for(let r=0;
  r<t.length;
  r+=2)e[r/2]=Number.parseInt(t.slice(r,r+2),16);
  return e}
  function o(t){
  const e=atob(t),r=new Uint8Array(e.length);
  for(let t=0;
  t<e.length;
  t++)r[t]=e.charCodeAt(t);
  return r}
  t.exports={
  hexToBytes:i,base64ToBytes:o,parseVideoHashFromObf:function(t){
  const e=JSON.parse(atob(t)),r=null==e?void 0:e.hD;
  if(!r)throw new Error("Session JSON missing hD video hash");
  return r}
  ,parseKXFromNonce:function(t){
  const e=JSON.parse(atob(t)),r=null==e?void 0:e.kX;
  if(!r)throw new Error("Session JSON missing kX key");
  return r}
  ,decryptM3U8:async function(t,e){
  const a=t.split("\n");
  let s="",u="";
  for(let t of a)if(t=t.trim(),t.startsWith("#ENC-AESGCM")){
  const e=t.match(/iv=([a-fA-F0-9]+)/);
  e&&(s=e[1])}
  else t&&!t.startsWith("#")&&(u=t);
  if(!s||!u)throw new Error("Invalid encrypted m3u8: missing #ENC-AESGCM iv or ciphertext line");
  if(!e)throw new Error("Missing video hash for decryption");
  const c=i(s),l=o(u),f=l.slice(0,-16),d=l.slice(-16),h=new Uint8Array(f.length+d.length);
  h.set(f),h.set(d,f.length);
  const p=await async function(t){
  const e=await crypto.subtle.importKey("raw",r.encode("stream-derive-v1"),{
  name:"HMAC",hash:"SHA-256"}
  ,!1,["sign"]),n=await crypto.subtle.sign("HMAC",e,r.encode(t));
  return new Uint8Array(n).slice(0,32)}
  (e),v=await crypto.subtle.importKey("raw",p,{
  name:"AES-GCM"}
  ,!1,["decrypt"]),m=await crypto.subtle.decrypt({
  name:"AES-GCM",iv:c,tagLength:128}
  ,v,h);
  return n.decode(m)}
  ,decryptM3U8WithKX:async function(t,e){
  const a=t.split("\n");
  let s="",u="";
  for(let t of a)if(t=t.trim(),t.startsWith("#ENC-AESGCM")){
  const e=t.match(/iv=([a-fA-F0-9]+)/);
  e&&(s=e[1])}
  else t&&!t.startsWith("#")&&(u=t);
  if(!s||!u)throw new Error("Invalid encrypted m3u8: missing #ENC-AESGCM iv or ciphertext line");
  const c=i(s),l=o(u),f=r.encode(e).slice(0,32),d=await crypto.subtle.importKey("raw",f,{
  name:"AES-GCM"}
  ,!1,["decrypt"]),h=await crypto.subtle.decrypt({
  name:"AES-GCM",iv:c,tagLength:128}
  ,d,l);
  return n.decode(h)}
  }
  };
