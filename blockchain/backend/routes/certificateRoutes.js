const express = require("express");
const generateHash = require("../utils/hash");
const generateQR = require("../utils/qr");
const { storeCertificate, verifyCertificate } = require("../utils/blockchain");

const router = express.Router();

/**
 * ISSUE CERTIFICATE
 */
router.post("/issue", async (req, res) => {
  try {
    const certData = req.body;
    const certId = certData.certId;

    const hash = generateHash(certData);
    const qrPath = await generateQR(certId);

    await storeCertificate(certId, hash);

    res.json({
      status: "SUCCESS",
      message: "Certificate issued successfully",
      certId,
      hash,
      qrPath
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * VERIFY CERTIFICATE
 */
router.post("/verify", async (req, res) => {
  try {
    const { certId, certData } = req.body;
    const hash = generateHash(certData);

    const isValid = await verifyCertificate(certId, hash);

    res.json({
      certId,
      isValid
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
