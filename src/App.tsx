import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Skeleton from "./components/Skeleton";
import ScrollToTop from "./components/ScrollToTop";
import MainRoutes from "./Routes";
import Home from "./components/Homepage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Suspense fallback={<Skeleton />}>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<MainRoutes />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
