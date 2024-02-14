import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "asdf",
    label: "Admin",
  },
  {
    key: "asdfg",
    label: "Faculty",
    children: [
      {
        key: "asdfh1",
        label: "student",
      },
      {
        key: "asdfj1",
        label: "Teacher",
      },
    ],
  },
  {
    key: "asdfh",
    label: "Professor",
  },
  {
    key: "asdfj",
    label: "Dean",
  },
];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            marginTop:"5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>PH University</h4>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
