import "./home.scss";
import {
  SearchOutlined,
  BookOutlined,
  GlobalOutlined,
  SendOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Button,
  Input,
  Space,
  Menu,
  MenuProps,
  List,
  Avatar,
  Divider,
  Skeleton,
} from "antd";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const { Sider, Content } = Layout;
const courseData = [
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
import { Socket, io } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../../../../typing";

// This function sets the menu items up
const items: MenuProps["items"] = [
  {
    label: "Majors",
    key: "majors",
    icon: <BookOutlined />,
  },
  {
    label: "Courses",
    key: "courses",
    icon: <GlobalOutlined />,
  },
];

const Home = () => {
  // SETUP THE WEB SOCKET CONNECTION TO THE BACKEND SERVER
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    "http://localhost:1234/"
  );

  const [chatMessage, setChatMessage] = useState<string[]>([]);
  const [current, setCurrent] = useState("majors");
  const [thread, setThread] = useState("Select Thread");
  const [data, setData] = useState(courseData);
  const [message, setMessage] = useState("");

  // CONSTANTLY QUERY THE BACKEND SERVER FOR NEW MESSAGES FROM OTHER USERS
  useEffect(() => {
    socket.on("serverMsg", (data) => {
      setChatMessage([...chatMessage, data.msg]);
      console.log(chatMessage);
    });
  }, [socket, chatMessage]);

  // EMMITS THE SOCKET EVENT TO THE SERVER
  const handleSend = () => {
    socket.emit("clientMsg", { msg: message });
    setMessage("");
  };


  // HANDLES THE "MAJORS " SEARCH FEATURRE
  const handleSearch = (e) => {
    const searchParam = e.target.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchParam)
    );
    setData(searchParam ? filteredData : courseData);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <HeaderComponent />
        <Layout hasSider className="main-content">
          {/* //! Start SideBar Component   */}
          <Sider className="sider" width={"25vw"}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />

            <Space.Compact
              size="large"
              style={{ backgroundColor: "white", width: "25vw" }}
            >
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="Search Majors and Courses"
                onChange={(e) => handleSearch(e)}
              />
            </Space.Compact>
            <br />
            <br />

            <InfiniteScroll
              dataLength={data.length}
              hasMore={data.length < 50}
              //   loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              height={"73vh"}
            >
              <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    onClick={(e: any) => setThread(e.target.innerText)}
                    style={{ cursor: "pointer" }}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </Sider>
          {/* //! End SideBar Component   */}
          {/* //! Start Main Content Component   */}
          <Content>
            <Space.Compact
              size="large"
              style={{
                backgroundColor: "white",
                width: "73.8vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div>
                {chatMessage.map((msg, idx) => {
                  return <p key={idx}>{msg}</p>;
                })}
              </div>
              <Input
                addonAfter={<SendOutlined onClick={() => handleSend()} />}
                placeholder="Send a message here"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </Space.Compact>
          </Content>
          {/* //! End Main Content Component   */}
        </Layout>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default Home;
