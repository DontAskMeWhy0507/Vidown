// Module 649 - Savior Helper 649
export default function(t,e,r) {
  "use strict";
  var n=r(117),i=n.assert,o=n.parseBytes,a=n.cachedProperty;
  function s(t,e){
  this.eddsa=t,this._secret=o(e.secret),t.isPoint(e.pub)?this._pub=e.pub:this._pubBytes=o(e.pub)}
  s.fromPublic=function(t,e){
  return e instanceof s?e:new s(t,{
  pub:e}
  )}
  ,s.fromSecret=function(t,e){
  return e instanceof s?e:new s(t,{
  secret:e}
  )}
  ,s.prototype.secret=function(){
  return this._secret}
  ,a(s,"pubBytes",(function(){
  return this.eddsa.encodePoint(this.pub())}
  )),a(s,"pub",(function(){
  return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}
  )),a(s,"privBytes",(function(){
  var t=this.eddsa,e=this.hash(),r=t.encodingLength-1,n=e.slice(0,t.encodingLength);
  return n[0]&=248,n[r]&=127,n[r]|=64,n}
  )),a(s,"priv",(function(){
  return this.eddsa.decodeInt(this.privBytes())}
  )),a(s,"hash",(function(){
  return this.eddsa.hash().update(this.secret()).digest()}
  )),a(s,"messagePrefix",(function(){
  return this.hash().slice(this.eddsa.encodingLength)}
  )),s.prototype.sign=function(t){
  return i(this._secret,"KeyPair can only verify"),this.eddsa.sign(t,this)}
  ,s.prototype.verify=function(t,e){
  return this.eddsa.verify(t,e,this)}
  ,s.prototype.getSecret=function(t){
  return i(this._secret,"KeyPair is public only"),n.encode(this.secret(),t)}
  ,s.prototype.getPublic=function(t){
  return n.encode(this.pubBytes(),t)}
  ,t.exports=s};
