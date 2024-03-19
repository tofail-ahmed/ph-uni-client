import { Layout,Button } from "antd";
import {  Outlet } from "react-router-dom";
// import Button from "antd"


import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

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
  const dispatch=useAppDispatch();
  const handleLogout=()=>{
    dispatch(logout())
  }
  return (
    <Layout style={{ height: "100%" }}>


    <Sidebar/>

      <Layout>
        <Header ><Button onClick={handleLogout}>Logout</Button></Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default MainLayout;
