import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Layout, Input, Space, Button } from "antd";


const { Header } = Layout;

// HEADER COMPONENT

// todo work on the app wide state to be able to show the thread on click

const HeaderComponent = () => {
  return (
    <Header className="header">
      {/* //TODO get a better logo*/}
      <h1>Logo</h1>
      <h1>{"thread"}</h1>
      <div>
        <Space.Compact size="large">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search Chats, Messages"
            size="large"
            style={{ width: "20rem" }}
            // bordered={true}
          />
        </Space.Compact>
        <Button size={"large"} shape="round" style={{ marginLeft: "1rem" }}>
          Join
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
