import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Pages
import Home from "./pages/Home";
// lazy load subpages
const Fundraising = lazy(() => import("./pages/fundraising/Fundraising"));
const Bola = lazy(() => import("./pages/bola/Bola"));

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Fundraising */}
        <Route
          path="/fundraising"
          element={
            <Suspense fallback={<p></p>}>
              <Fundraising />
            </Suspense>
          }
        />

        {/* Bola */}
        <Route
          path="/bola"
          element={
            <Suspense fallback={<p></p>}>
              <Bola />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
