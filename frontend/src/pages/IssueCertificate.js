import { useState } from "react";
import axios from "axios";

function IssueCertificate() {
  const [formData, setFormData] = useState({
    certId: "",
    name: "",
    roll: "",
    course: "",
    year: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const issueCertificate = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/certificate/issue",
        formData
      );

      alert(
        "Certificate Issued Successfully!\n\nHash:\n" + res.data.hash
      );
    } catch (error) {
      alert("Error issuing certificate");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Issue Certificate</h2>

      <input name="certId" placeholder="Certificate ID" onChange={handleChange} /><br /><br />
      <input name="name" placeholder="Student Name" onChange={handleChange} /><br /><br />
      <input name="roll" placeholder="Roll Number" onChange={handleChange} /><br /><br />
      <input name="course" placeholder="Course" onChange={handleChange} /><br /><br />
      <input name="year" placeholder="Year" onChange={handleChange} /><br /><br />

      <button onClick={issueCertificate}>Issue Certificate</button>
    </div>
  );
}

export default IssueCertificate;
