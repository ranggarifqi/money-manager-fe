import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Accounts from "./pages/accounts/Accounts";
import NewAccount from "./pages/accounts/NewAccount";
import EditAccount from "./pages/accounts/EditAccount";
import AccountTransactions from "./pages/accounts/AccountTransactions";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
