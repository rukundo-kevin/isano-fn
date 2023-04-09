/* eslint-disable */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Home from "./components/Homepage";

import Nav from "./components/Nav";
import Skeleton from "./components/Skeleton";

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default MainRoutes;