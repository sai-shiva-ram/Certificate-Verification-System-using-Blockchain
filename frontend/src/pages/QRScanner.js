import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

function QRScanner() {
  const [scanResult, setScanResult] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 250
      },
      false
    );

    scanner.render(
      async (decodedText) => {
        scanner.clear();
        setScanResult(decodedText);

        try {
          const res = await axios.post(
            "http://localhost:5000/api/certificate/verify",
            {
              certId: decodedText,
              certData: {
                certId: decodedText
              }
            }
          );

          if (res.data.isValid) {
            setStatus("✅ Certificate is VALID");
          } else {
            setStatus("❌ Certificate is FAKE");
          }
        } catch (error) {
          setStatus("❌ Verification failed");
        }
      },
      () => {}
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Scan QR Code to Verify Certificate</h2>

      <div id="reader" style={{ width: "300px", margin: "auto" }}></div>

      <br />

      <h3>Scanned Certificate ID:</h3>
      <p>{scanResult}</p>

      <h3>Status:</h3>
      <p>{status}</p>
    </div>
  );
}

export default QRScanner;
