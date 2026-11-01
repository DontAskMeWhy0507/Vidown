// Module 670 - Savior Helper 670
export default function(t,e,r){
  e.publicEncrypt=r(671),e.privateDecrypt=r(673),e.privateEncrypt=function(t,r){
  return e.publicEncrypt(t,r,!0)}
  ,e.publicDecrypt=function(t,r){
  return e.privateDecrypt(t,r,!0)}
  };
