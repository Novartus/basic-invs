import React from "react";
import { Layout, Row, Col, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Content
      style={{
        padding: "0 50px",
        textAlign: "center",
        backgroundImage: "url(https://via.placeholder.com/1200x600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          padding: "100px 20px",
          borderRadius: "8px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Title level={1}>Welcome to the Inventory Management System</Title>
        <Paragraph style={{ fontSize: "18px" }}>
          Manage your inventory efficiently with our comprehensive system. Track
          items, update quantities, and keep your stock information up-to-date.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
          <Col>
            <Link to="/login">
              <Button type="primary" size="large">
                Login
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/user-inventory">
              <Button size="large">User Inventory</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/admin-inventory">
              <Button type="danger" size="large">
                Admin Inventory
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default HomePage;
