import App from "@/App";
import About from "@/components/About";
import BookDetails from "@/components/BookDetails";
import Books from "@/components/Books";
import NotFound from "@/components/Notfound";
import PrivateRoute from "@/components/ProtectedRoute";
import AdminDashboard from "@/pages/dashboard/admin-dashboard/admin-dashboard";
import AddBooks from "@/pages/dashboard/admin-dashboard/components/Add-Books";
import Analytics from "@/pages/dashboard/admin-dashboard/components/Analytics";
import DashboardHomePage from "@/pages/dashboard/admin-dashboard/components/Dashboard-Home-page";
import Logout from "@/pages/dashboard/admin-dashboard/components/Logout";
import SettingsPage from "@/pages/dashboard/admin-dashboard/components/Setting";
import UsersPage from "@/pages/dashboard/admin-dashboard/components/UsersPage";
import Home from "@/pages/home/Home";
import Login from "@/pages/login";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <PrivateRoute><AdminDashboard /></PrivateRoute>,
    children: [
      {
        index:true,
        element: <DashboardHomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "create-books",
        element: <AddBooks/>,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "logout",
        element: <Logout/>,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",

    element: <NotFound/>,
  },
]);

export default router;
