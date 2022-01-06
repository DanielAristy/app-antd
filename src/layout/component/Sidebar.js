import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Avatar, Badge, Menu, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import UseSidebar from "../hook/UseSidebar";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const Sidebar = () => {
  const { openKeys, onOpenChange } = UseSidebar();

  return (
    <Layout>
      <Header>
        <span style={{ float: "right" }}>
          <Badge count={1}>
            <Avatar icon={<UserOutlined />} />
          </Badge>
        </span>
      </Header>
      <Layout>
        <Sider>
          <Menu
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ background: "green", textAlign: "center" }}>
            Contendido
          </Content>
          <Footer style={{ background: "yellow", textAlign: "center" }}>
            footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
