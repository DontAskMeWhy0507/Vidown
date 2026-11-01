// Module 607 - Savior Helper 607
export default function(t,e){
  e.encrypt=function(t,e){
  return t._cipher.encryptBlock(e)}
  ,e.decrypt=function(t,e){
  return t._cipher.decryptBlock(e)}
  };
