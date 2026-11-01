// Module 464 - Savior Helper 464
export default function(t,e,r) {
  "use strict";
  var n=r(36);
  function i(t,e){
  t.emit("error",e)}
  t.exports={
  destroy:function(t,e){
  var r=this,o=this._readableState&&this._readableState.destroyed,a=this._writableState&&this._writableState.destroyed;
  return o||a?(e?e(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,
  n.nextTick(i,this,t)):n.nextTick(i,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),
  this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){
  !e&&t?r._writableState?r._writableState.errorEmitted||(r._writableState.errorEmitted=!0,n.nextTick(i,
  r,t)):n.nextTick(i,r,t):e&&e(t)}
  )),this)}
  ,undestroy:function(){
  this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,
  this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,
  this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,
  this._writableState.finished=!1,this._writableState.errorEmitted=!1)}
  }
  };
