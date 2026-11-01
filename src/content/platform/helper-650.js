// Module 650 - Savior Helper 650
export default function(t,e,r) {
  "use strict";
  var n=r(126),i=r(117),o=i.assert,a=i.cachedProperty,s=i.parseBytes;
  function u(t,e){
  this.eddsa=t,"object"!=typeof e&&(e=s(e)),Array.isArray(e)&&(o(e.length===2*t.encodingLength,"Signature has invalid size"),
  e={
  R:e.slice(0,t.encodingLength),S:e.slice(t.encodingLength)}
  ),o(e.R&&e.S,"Signature without R or S"),t.isPoint(e.R)&&(this._R=e.R),e.S instanceof n&&(this._S=e.S),
  this._Rencoded=Array.isArray(e.R)?e.R:e.Rencoded,this._Sencoded=Array.isArray(e.S)?e.S:e.Sencoded}
  a(u,"S",(function(){
  return this.eddsa.decodeInt(this.Sencoded())}
  )),a(u,"R",(function(){
  return this.eddsa.decodePoint(this.Rencoded())}
  )),a(u,"Rencoded",(function(){
  return this.eddsa.encodePoint(this.R())}
  )),a(u,"Sencoded",(function(){
  return this.eddsa.encodeInt(this.S())}
  )),u.prototype.toBytes=function(){
  return this.Rencoded().concat(this.Sencoded())}
  ,u.prototype.toHex=function(){
  return i.encode(this.toBytes(),"hex").toUpperCase()}
  ,t.exports=u};
