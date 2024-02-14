import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AlibabaOutlined } from "@ant-design/icons";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Phone from "../pages/Phone";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "phone",
            element: <Phone />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
       index:true,
        element: <AdminDashboard />,
      },
      {
       path:"dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "createstudent",
        element: <CreateStudent />,
       
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;