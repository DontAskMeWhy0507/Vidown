// Module 656 - Savior Helper 656
export default function(t,e,r){
  var n=r(15);
  function i(t){
  this._reporterState={
  obj:null,path:[],options:t||{
  }
  ,errors:[]}
  }
  function o(t,e){
  this.path=t,this.rethrow(e)}
  e.Reporter=i,i.prototype.isError=function(t){
  return t instanceof o}
  ,i.prototype.save=function(){
  var t=this._reporterState;
  return{
  obj:t.obj,pathLen:t.path.length}
  }
  ,i.prototype.restore=function(t){
  var e=this._reporterState;
  e.obj=t.obj,e.path=e.path.slice(0,t.pathLen)}
  ,i.prototype.enterKey=function(t){
  return this._reporterState.path.push(t)}
  ,i.prototype.exitKey=function(t){
  var e=this._reporterState;
  e.path=e.path.slice(0,t-1)}
  ,i.prototype.leaveKey=function(t,e,r){
  var n=this._reporterState;
  this.exitKey(t),null!==n.obj&&(n.obj[e]=r)}
  ,i.prototype.path=function(){
  return this._reporterState.path.join("/")}
  ,i.prototype.enterObject=function(){
  var t=this._reporterState,e=t.obj;
  return t.obj={
  }
  ,e}
  ,i.prototype.leaveObject=function(t){
  var e=this._reporterState,r=e.obj;
  return e.obj=t,r}
  ,i.prototype.error=function(t){
  var e,r=this._reporterState,n=t instanceof o;
  if(e=n?t:new o(r.path.map((function(t){
  return"["+JSON.stringify(t)+"]"}
  )).join(""),t.message||t,t.stack),!r.options.partial)throw e;
  return n||r.errors.push(e),e}
  ,i.prototype.wrapResult=function(t){
  var e=this._reporterState;
  return e.options.partial?{
  result:this.isError(t)?null:t,errors:e.errors}
  :t}
  ,n(o,Error),o.prototype.rethrow=function(t){
  if(this.message=t+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,
  o),!this.stack)try{
  throw new Error(this.message)}
  catch(t){
  this.stack=t.stack}
  return this}
  };
