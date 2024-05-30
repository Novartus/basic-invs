import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="logo" style={{ color: "white", fontSize: "24px" }}>
        Company Name
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu-desktop"
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/user-inventory">User Inventory</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/admin-inventory">Admin Inventory</Link>
        </Menu.Item>
      </Menu>
      <Button
        className="menu-button"
        type="primary"
        onClick={showDrawer}
        icon={<MenuOutlined />}
        style={{ display: "none" }}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        className="menu-drawer"
      >
        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          onClick={onClose}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/user-inventory">User Inventory</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/admin-inventory">Admin Inventory</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default NavBar;
