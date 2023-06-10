import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
