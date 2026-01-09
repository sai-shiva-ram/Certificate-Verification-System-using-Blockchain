import axios from "axios";

function IssueCertificate() {

  const issue = async () => {
    const data = {
      name: "Sai",
      roll: "22891A05B0",
      course: "CSE"
    };

    const res = await axios.post("http://localhost:5000/issue", data);
    alert("Certificate Hash: " + res.data.hash);
  };

  return <button onClick={issue}>Issue Certificate</button>;
}

export default IssueCertificate;
