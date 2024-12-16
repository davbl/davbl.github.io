import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fundraising from "./pages/fundraising/Fundraising";
import Bola from "./pages/bola/Bola";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/bola" element={<Bola />} />
      </Routes>
    </Router>
  );
}

export default App;
