import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Origin from "./pages/Origin";
import Fundraising from "./pages/Fundraising";
import Bola from "./pages/Bola";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origin" element={<Origin />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/bola" element={<Bola />} />
      </Routes>
    </Router>
  );
}

export default App;
