/* eslint-disable */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Error from "../components/Error";
import Home from "../pages/Homepage";

import Nav from "../components/Nav";
import Skeleton from "../components/Skeleton";
import TreeView from "../pages/FamilySidebar";
import Profile from "../pages/Profile";
import FamilyTree from "../pages/FamilyTree";
import Login from "../pages/Login";

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/familytree" element={<FamilyTree />} />
          <Route path="/family" element={<TreeView />}>
            <Route path=":id" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MainRoutes;
