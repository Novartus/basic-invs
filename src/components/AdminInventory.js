import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Layout,
  Space,
  Typography,
  Image,
  Upload,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import moment from "moment";

const { Content } = Layout;
const { Title } = Typography;

const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => callback(reader.result);
};

const AdminInventory = () => {
  const [data, setData] = useState([
    {
      key: "1",
      item: "Item 1",
      quantity: 32,
      modifiedBy: "Admin",
      modifiedTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      imageUrl: "",
    },
    {
      key: "2",
      item: "Item 2",
      quantity: 42,
      modifiedBy: "Admin",
      modifiedTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      imageUrl: "",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

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
      title: "Last Modified By",
      dataIndex: "modifiedBy",
      key: "modifiedBy",
      width: 150,
    },
    {
      title: "Last Modified Time",
      dataIndex: "modifiedTime",
      key: "modifiedTime",
      width: 200,
    },
    {
      title: "Action",
      key: "action",
      width: 150,
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => editItem(record)}
          />
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => deleteItem(record.key)}
          />
        </Space>
      ),
    },
  ];

  const addItem = (values) => {
    setData([
      ...data,
      {
        key: Date.now(),
        ...values,
        modifiedTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        imageUrl,
      },
    ]);
    setIsModalVisible(false);
    setImageUrl("");
  };

  const editItem = (record) => {
    setEditingItem(record);
    setImageUrl(record.imageUrl || "");
    setIsModalVisible(true);
  };

  const updateItem = (values) => {
    setData(
      data.map((item) =>
        item.key === editingItem.key
          ? {
              ...editingItem,
              ...values,
              modifiedTime: moment().format("YYYY-MM-DD HH:mm:ss"),
              imageUrl,
            }
          : item
      )
    );
    setEditingItem(null);
    setIsModalVisible(false);
    setImageUrl("");
  };

  const deleteItem = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingItem(null);
    setImageUrl("");
  };

  const handleImageUpload = ({ file }) => {
    getBase64(file.originFileObj, (imageUrl) => {
      setImageUrl(imageUrl);
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "0 25px", marginTop: "20px" }}>
        <div
          className="site-layout-content"
          style={{ maxWidth: "1200px", margin: "0 auto", overflowX: "auto" }}
        >
          <Title level={2} style={{ marginBottom: "20px" }}>
            Admin Inventory
          </Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
            style={{ marginBottom: "20px" }}
          >
            Add Item
          </Button>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            scroll={{ x: 800 }} // Ensures the table is wider and scrollable horizontally
          />
          <Modal
            title={editingItem ? "Edit Item" : "Add Item"}
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <Form
              onFinish={editingItem ? updateItem : addItem}
              initialValues={editingItem}
            >
              <Form.Item
                label="Item"
                name="item"
                rules={[
                  { required: true, message: "Please input the item name!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[
                  { required: true, message: "Please input the quantity!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Image" name="image">
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  beforeUpload={() => false} // Prevent default upload behavior
                  onChange={handleImageUpload}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="item" style={{ width: "100%" }} />
                  ) : (
                    <div>
                      <UploadOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
              <Form.Item
                label="Last Modified By"
                name="modifiedBy"
                rules={[
                  {
                    required: true,
                    message: "Please input the name of the modifier!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  {editingItem ? "Update" : "Add"}
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </Content>
    </Layout>
  );
};

export default AdminInventory;
