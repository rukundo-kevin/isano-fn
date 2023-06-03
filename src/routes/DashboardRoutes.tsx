import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../helpers/ProtectedRoute";
import Dashboard from "../pages/Dashboard";

const handleToggle = () => {};

function DashboardRoutes() {
  return (
    <ProtectedRoute>
      <Sidebar style="" toggle={handleToggle} />
      <Routes>
        <Route path="" element={<Dashboard />} />
      </Routes>
    </ProtectedRoute>
  );
}

export default DashboardRoutes;
