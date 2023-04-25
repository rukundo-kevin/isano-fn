/* eslint-disable */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Homepage";

import Nav from "./components/Nav";
import Skeleton from "./components/Skeleton";
import TreeView from "./pages/FamilySidebar";
import Profile from "./components/Profile";

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<TreeView />}>
            <Route path=":id" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MainRoutes;
