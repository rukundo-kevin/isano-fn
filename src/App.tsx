import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import MainRoutes from "./Routes";

function App() {
  useEffect(() => {
    const lockOrientation = async () => {
      try {
        await window.screen.orientation.lock("landscape");
      } catch (err) {
        console.error("Failed to lock screen orientation", err);
      }
    };

    lockOrientation();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
