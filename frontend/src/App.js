import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IssueCertificate from "./pages/IssueCertificate";
import VerifyCertificate from "./pages/VerifyCertificate";
import QRScanner from "./pages/QRScanner";   

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<IssueCertificate />} />
        <Route path="/verify" element={<VerifyCertificate />} />
        <Route path="/scan" element={<QRScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
