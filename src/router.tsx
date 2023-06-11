import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Accounts from "./pages/accounts/Accounts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
