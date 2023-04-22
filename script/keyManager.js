function GetKeyPair() {
  return forge.pki.rsa.generateKeyPair({ bits: 4096 });
}

function encrypt(message, keyPair) {
  var encryptedMsg = forge.util.encode64(
    keyPair.publicKey.encrypt(forge.util.encode64(message))
  );
  return encryptedMsg;
}

function decrypt(message, keyPair) {
  var decryptedMsg = forge.util.decode64(
    keyPair.privateKey.decrypt(forge.util.decode64(message))
  );

  return decryptedMsg;
}
