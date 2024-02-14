import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
interface IRoute {
  path: string;
  element: ReactNode;
}
interface ISidebarItem {
  key: string;
  label: ReactNode;
  children?: ISidebarItem[];
}
const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "createadmin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "createfaculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "createstudent",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc: IRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc; // Ensure to return the accumulator after the operations
}, []);

export const adminSidebarItems = adminPaths.reduce((acc:ISidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, []);
// export const adminPaths=[
      // {
      //  index:true,
      //   element: <AdminDashboard />,
      // },
//       {
//        path:"dashboard",
//         element: <AdminDashboard />,
//       },
//       {
//         path: "createstudent",
//         element: <CreateStudent />,

//       },
//       {
//         path: "createadmin",
//         element: <CreateAdmin />,

//       },
//       {
//         path: "createfaculty",
//         element: <CreateFaculty />,

//       },
//     ]
