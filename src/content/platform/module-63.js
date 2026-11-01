// Module 63 [platform]
export default function(t,e,r){var n,i;t.exports=(i=r(4),r(8),i.mode.ECB=((n=i.lib.BlockCipherMode.extend()).Encryptor=n.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),n.Decryptor=n.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),n),i.mode.ECB)};
