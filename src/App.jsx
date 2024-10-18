import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bola from "./pages/Bola";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bola" element={<Bola />} />
      </Routes>
    </Router>
  );
}

export default App;
