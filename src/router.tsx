import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Accounts from "./pages/accounts/Accounts";
import NewAccount from "./pages/accounts/NewAccount";
import EditAccount from "./pages/accounts/EditAccount";
import AccountTransactions from "./pages/accounts/AccountTransactions";
import Category from "./pages/categories/Category";
import NewCategory from "./pages/categories/NewCategory";
import EditCategory from "./pages/categories/EditCategory";

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
      {
        path: "/accounts/new",
        element: <NewAccount />,
      },
      {
        path: "/accounts/:accountId/edit",
        element: <EditAccount />,
      },
      {
        path: "/accounts/:accountId/transactions",
        element: <AccountTransactions />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/categories/add",
        element: <NewCategory />,
      },
      {
        path: "/categories/:categoryId/edit",
        element: <EditCategory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
