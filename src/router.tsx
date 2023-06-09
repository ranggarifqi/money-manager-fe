import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <div>Dashboard</div>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
