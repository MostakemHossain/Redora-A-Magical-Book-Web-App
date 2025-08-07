import App from "@/App";
import About from "@/components/About";
import Books from "@/components/Books";
import AdminDashboard from "@/pages/dashboard/admin-dashboard/admin-dashboard";
import Analytics from "@/pages/dashboard/admin-dashboard/components/Analytics";
import DashboardHomePage from "@/pages/dashboard/admin-dashboard/components/Dashboard-Home-page";
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
      
        element: <DashboardHomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);

export default router;
