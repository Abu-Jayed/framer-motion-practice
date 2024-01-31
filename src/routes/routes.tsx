import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      { index: true, element: <Navigate to={"/admin/dashboard"}></Navigate> },
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "service-list", element: <About></About> },
      { path: "add-service", element: <About></About> },
    ],
  },
]);

export default router;
