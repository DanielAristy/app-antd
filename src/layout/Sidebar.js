import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Header, Content, Sider, Footer } = Layout;

const Sidebar = () => {
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider style={{ background: "red" }}>left sidebar</Sider>
        <Layout>
          <Content style={{ background: "green", textAlign: "center" }}>
            Contendido
          </Content>
          <Footer style={{ textAlign: "center" }}>footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
