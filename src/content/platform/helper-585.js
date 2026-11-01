// Module 585 - Savior Helper 585
export default function(t,e,r) {
  "use strict";
  var n=r(136),i=function(){
  return!!n};
  i.hasArrayLengthDefineBug=function(){
  if(!n)return null;
  try{
  return 1!==n([],"length",{
  value:1}
  ).length}
  catch(t){
  return!0}
  }
  ,t.exports=i};
