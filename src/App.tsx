import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import FamilySidebar from "./pages/FamilySidebar";
import FamilyTree from "./pages/FamilyTree";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error/>
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "family",
    element: <FamilySidebar />,
    children: [
      {
        path: ":id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "familytree",
    element: <FamilyTree />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
