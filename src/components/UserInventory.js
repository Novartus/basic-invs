import React, { useState } from "react";
import { Table, Layout, Typography, Image } from "antd";
import moment from "moment";

const { Content } = Layout;
const { Title } = Typography;

const UserInventory = () => {
  const [data, setData] = useState([
    {
      key: "1",
      item: "Item 1",
      quantity: 32,
      lastUpdated: moment().format("YYYY-MM-DD HH:mm:ss"),
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      key: "2",
      item: "Item 2",
      quantity: 42,
      lastUpdated: moment().format("YYYY-MM-DD HH:mm:ss"),
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      width: 100,
      render: (text) => <Image width={50} src={text} />,
    },
    { title: "Item", dataIndex: "item", key: "item", width: 150 },
    { title: "Quantity", dataIndex: "quantity", key: "quantity", width: 100 },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      width: 200,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "0 25px", marginTop: "20px" }}>
        <div
          className="site-layout-content"
          style={{ maxWidth: "1200px", margin: "0 auto", overflowX: "auto" }}
        >
          <Title level={2} style={{ marginBottom: "20px" }}>
            User Inventory
          </Title>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            scroll={{ x: 600 }} // Ensures the table is scrollable horizontally
            style={{ minWidth: "600px" }} // Ensures a minimum width for the table
          />
        </div>
      </Content>
    </Layout>
  );
};

export default UserInventory;
