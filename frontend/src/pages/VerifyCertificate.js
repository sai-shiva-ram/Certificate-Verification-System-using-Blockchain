import { useState } from "react";
import axios from "axios";

function VerifyCertificate() {
  const [certId, setCertId] = useState("");
  const [certData, setCertData] = useState({
    certId: "",
    name: "",
    roll: "",
    course: "",
    year: ""
  });

  const handleChange = (e) => {
    setCertData({
      ...certData,
      [e.target.name]: e.target.value
    });
  };

  const verifyCertificate = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/certificate/verify",
        {
          certId,
          certData
        }
      );

      if (res.data.isValid) {
        alert("✅ Certificate is VALID");
      } else {
        alert("❌ Certificate is FAKE");
      }
    } catch (error) {
      alert("Verification failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Verify Certificate</h2>

      <input
        placeholder="Certificate ID"
        onChange={(e) => setCertId(e.target.value)}
      />
      <br /><br />

      <input name="certId" placeholder="Certificate ID" onChange={handleChange} /><br /><br />
      <input name="name" placeholder="Student Name" onChange={handleChange} /><br /><br />
      <input name="roll" placeholder="Roll Number" onChange={handleChange} /><br /><br />
      <input name="course" placeholder="Course" onChange={handleChange} /><br /><br />
      <input name="year" placeholder="Year" onChange={handleChange} /><br /><br />

      <button onClick={verifyCertificate}>Verify Certificate</button>
    </div>
  );
}

export default VerifyCertificate;
