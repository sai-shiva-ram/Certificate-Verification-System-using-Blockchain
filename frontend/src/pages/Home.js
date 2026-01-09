import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Certificate Verification System</h1>
      <h3>Using Blockchain Technology</h3>

      <br />

      <Link to="/issue">
        <button style={{ padding: "10px 20px" }}>
          Issue Certificate
        </button>
      </Link>

      <br /><br />

      <Link to="/verify">
        <button style={{ padding: "10px 20px" }}>
          Verify Certificate
        </button>
      </Link>

      <Link to="/scan">
        <button style={{ padding: "10px 20px" }}>
          Verify Using QR Code
        </button>
      </Link>
      <br /><br />
    </div>
  );
}

export default Home;
