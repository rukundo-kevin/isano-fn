import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import MainRoutes from "./Routes";
import Home from "./components/Homepage";

function App() {
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
