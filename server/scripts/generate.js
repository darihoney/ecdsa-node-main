const privateKey = secp.utils.randomPrivateKey();
  // 87999b88c97796220f12b12d005dcfea3e871db2b748730fbc49c8cd8df33fe5
  // 7ae5a070f7ec9e3cc1d8ff2f8705d206f044e46fbc991013f4b86589d652126a
  // d15170540e81715462ffadcd6a3defea166f66460cc452100a9f401b2de5e191

  const hashMsg = keccak256(utf8ToBytes("message"));
  // c2baf6c66618acd49fb133cebc22f55bd907fe9f0d69a726d45b7539ba6bbe08 
  

  const publicKey = secp.getPublicKey(privateKey);
  // 04a61cb4b9023243fc5c47d37b22984a03f696220e7de8ff79589132c1271b72fd3fb73cd67669420716721ba04a50f307fc23233396250dbb14d560025737b680
  // 042a3ccaaf7d0dd485380960a16338480d8b820de8ce1ea2d22158e1e84ac36d481935f5cccb4d004828dd6f89e4953432cf50dce68cbb95603b4ed820314ceecb
  // 04d4968676e2acf025c304addc020c806bfd0409eece57d071c25b504dcf6e075613f2adda7fe73f42ffff57100e2ef5df49f21fa70e16e95d8b58a6bb259e4001

  const senderAddress = "0x"+toHex(keccak256(publicKey.slice(1)).slice(-20));
  // 0xef3181a61eb19f38de977dd753608ab120997658
  // 0xba776351778dbf5d8f08378467a9faa9c3937627
  // 0xdc5e45a0e93011e9c7ddfa337e3bf463603522ef

console.log("privateKey:", toHex(privateKey));
console.log("publicKey:", toHex(publicKey));
console.log("senderAddress:", (senderAddress))
console.log("hashMsg:", toHex(hashMsg));
