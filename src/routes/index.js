import { useRoutes, Navigate } from "react-router-dom";
import Page404 from "../pages/ErrorPages/Page404";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/HomePage/Home";
import AddUserForm from "../pages/AddUserForm";

export default function Router() {
  return useRoutes([
    // {path: "/", element: "menuConfig" },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <Home />,
          index: "true",
        },
        { path: "/AddUserForm", element: <AddUserForm /> },

        // Not Found
        { path: "404", element: <Page404 /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
