import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
