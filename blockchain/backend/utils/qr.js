const QRCode = require("qrcode");
const path = require("path");

async function generateQR(certId) {
  const qrPath = path.join(__dirname, `../qrcodes/${certId}.png`);
  await QRCode.toFile(qrPath, certId);
  return qrPath;
}

module.exports = generateQR;
