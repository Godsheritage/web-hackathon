import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Layout, Button, Input, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { Divider, List, Typography } from "antd";

const data = [
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",
    "Computer Science",

];

import "./home.scss";

const items: MenuProps["items"] = [
  {
    label: "Majors",
    key: "1",
    icon: <MailOutlined />,
  },
  {
    label: "Courses",
    key: "2",
    icon: <MailOutlined />,
  },
];

const Home = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className="header">
          <h1>Logo</h1>
          <h1>Select Thread</h1>
          <div>
            <Space.Compact size="large">
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="Search Chats, Messages"
              />
            </Space.Compact>
            <Button size={"large"}>Join</Button>
          </div>
        </Header>
        <Layout hasSider className="main-content">
          <Sider className="sider" width={"20vw"}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
            <Space.Compact
              size="large"
              style={{ backgroundColor: "white", width: "20vw" }}
            >
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="Search Majors and Courses"
              />
            </Space.Compact>
            <br/>
            <br/>

            <List
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer className="footer">Copywright Godsheritage &#169; 2023</Footer>
      </Layout>
    </Space>
  );
};

export default Home;
