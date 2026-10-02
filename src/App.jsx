import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function Certificate() {
  return (
    <div className="certificate-page">
      <div className="certificate-container">
        <img
          src="/certificate.jpg"
          alt="Certificate"
          className="certificate-image"
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Certificate />} />
        <Route path="/verify/:certificateId" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;