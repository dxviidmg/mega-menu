import logo from "./logo.svg";
import "./App.css";
import { Menu, Space, Typography, Tag, Card } from "antd";
import {
  ShopOutlined,
  HomeOutlined,
  ApiOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useState } from "react";

function App() {
  return (
    <div>
      <Menu
        mode="horizontal"
        items={[
          {
            label: "Fashion",
            key: "Fashion",
            icon: <ShopOutlined />,
            children: [
              {
                label: "Men",
                key: "Men",
                icon: <UserOutlined />,
              },
              {
                label: "Women",
                key: "Women",
                icon: <UserOutlined />,
              },
              {
                label: "Kids",
                key: "Kids",
                icon: <UserOutlined />,
              },
            ],
          },
          {
            label: "Home decor",
            key: "Home decor",
            icon: <HomeOutlined />,
            children: [
              {
                label: "Interior",
                key: "Interior",
                icon: <UserOutlined />,
              },
              {
                label: "Exterior",
                key: "Exterior",
                icon: <UserOutlined />,
              },
            ],
          },
          {
            label: "Electronic",
            key: "Electronic",
            icon: <ApiOutlined />,
            children: [
              {
                label: <MegaMenu />,
                key: "MegaMenu",
                style: {
                  height: "fit-content",
                  padding: 0,
                  backgroundColor: "white",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

function MegaMenu() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onMenuItemClick = (item) => {
    console.log('dsfd', item)
    setSelectedKeys([item.keys]);
  };

  return (
    <div
      style={{ backgroundColor: "white", paddingLeft: 20, paddingRight: 20 }}
    >
      <Typography.Title>Electronic</Typography.Title>
      <Space direction="horizontal" size={12}>
        <Tag>descuento</Tag>
        <Space direction="horizontal">
          <Menu
            onClick={onMenuItemClick}
            selectedKeys={selectedKeys}
            items={[
              {
                label: "Ipads",
                key: "Ipads",
                type: "group",
              },
              {
                label: "Ipad 1",
                key: "Ipad 1",
                icon: <UserOutlined />,
              },
              {
                label: "Ipad 2",
                key: "Ipad 2",
                icon: <UserOutlined />,
              },
              {
                label: "Ipad 3",
                key: "Ipad 3",
                icon: <UserOutlined />,
              },
              {
                label: "Laptops",
                key: "Laptops",
                type: "group",
              },
              {
                label: "Laptop 1",
                key: "Laptop 1",
                icon: <UserOutlined />,
              },
              {
                label: "Laptop 2",
                key: "Laptop 2",
                icon: <UserOutlined />,
              },
              {
                label: "Laptop 3",
                key: "Laptop 3",
                icon: <UserOutlined />,
              },
            ]}
            style={{ boxShadow: "none", border: "none" }}
          />
          <Menu             onClick={onMenuItemClick}
            selectedKeys={selectedKeys}
            items={[
              {
                label: "Cels",
                key: "Cels",
                type: "group",
              },
              {
                label: "Cel 1",
                key: "Cel 1",
                icon: <UserOutlined />,
              },
              {
                label: "Cel 2",
                key: "Cel 2",
                icon: <UserOutlined />,
              },
              {
                label: "Cel 3",
                key: "Cel 3",
                icon: <UserOutlined />,
              },
              {
                label: "Tablets",
                key: "Tablets",
                type: "group",
              },
              {
                label: "Tablet 1",
                key: "Tablet 1",
                icon: <UserOutlined />,
              },
              {
                label: "Tablet 2",
                key: "Tablet 2",
                icon: <UserOutlined />,
              },
              {
                label: "Tablet 3",
                key: "Tablet 3",
                icon: <UserOutlined />,
              },
            ]}
            style={{ boxShadow: "none", border: "none" }}
          />
        </Space>

        <Card title="menu card">menu card wtf</Card>
      </Space>
    </div>
  );
}
export default App;
