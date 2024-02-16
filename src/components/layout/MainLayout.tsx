import { Layout } from "antd";
import {  Outlet } from "react-router-dom";



import Sidebar from "./Sidebar";

const { Header, Content, Footer } = Layout;

//! hardcoded------------
// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to={'/admin/createadmin'}>Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to={'/admin/createfaculty'}>Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to={'/admin/createstudent'}>Create Student</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "asdfh",
//     label: "Professor",
//   },
//   {
//     key: "asdfj",
//     label: "Dean",
//   },
// ];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>


    <Sidebar/>

      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h3> The main content should place over there</h3>
            <Outlet></Outlet>
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default MainLayout;
