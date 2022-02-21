const express = require("express");
const crypto = require("crypto");
const app = express();
const port = 5500;

const encrypt = (data) => {
  if (!data) return data;
  const cipher = crypto.createCipher("aes-256-cbc", "$Tl;,*/56*2F5$*88s");
  let crypted = cipher.update(data, "utf-8", "hex");
  crypted += cipher.final("hex");

  return crypted;
};

const decrypt = (data) => {
  if (!data) return data;
  try {
    const decipher = crypto.createDecipher("aes-256-cbc", "$Tl;,*/56*2F5$*88s");
    let decrypted = decipher.update(data, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    return decrypted;
  } catch (e) {
    return data;
  }
};
// const msgToEncrypt = encrypt("malek");
const msgToDecrypt = decrypt("6ed4f72b6e8d2d59c6e278249d854663");

console.log("msgToDecrypt", msgToDecrypt);
// console.log("msgToDecrypt", msgToDecrypt);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
