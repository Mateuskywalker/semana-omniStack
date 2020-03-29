const crypto = require('crypto');

// gera 4 bytes de caracteres hexadecimais
function generateRandomId() {
  const id = crypto.randomBytes(4).toString('HEX');
  return id;
}

module.exports = generateRandomId;

    