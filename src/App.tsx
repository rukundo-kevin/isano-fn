import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import MainRoutes from "./Routes";
import Home from "./components/Homepage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
