import "./home.scss";
import { Socket, io } from "socket.io-client";
import React, { useState, useEffect } from "react";
import ModalComponent from "../../components/ModalComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import ChatComponent from "../../components/chat/ChatComponent";
import { ServerToClientEvents, ClientToServerEvents } from "../../../../typing";
import { courseData } from "../../data/courses";
import { majorsData } from "../../data/majors";
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

const { Sider, Content } = Layout;

// MENU ITEMS
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

  const [message, setMessage] = useState("");
  const [currentMenuItem, setCurrentMenuItem] = useState("majors");
  const [data, setData] = useState<any>(majorsData);
  const [showModal, setShowModal] = useState(false);
  const [thread, setThread] = useState("Select Thread");
  const [chatMessage, setChatMessage] = useState([]);
  const [user, setUser] = useState();

  // // Retrieve the JSON string from local storage using the key 'user'
  const userJSON = JSON.parse(localStorage.getItem("user"));

  // CONSTANTLY QUERY THE BACKEND SERVER FOR NEW MESSAGES FROM OTHER USERS
  useEffect(() => {
    socket.on("serverMsg", (data) => {
      setChatMessage([...chatMessage, data]);
    });
  }, [socket, chatMessage]);

  // EMMITS THE SOCKET EVENT TO THE SERVER
  const handleSend = () => {
    if (message) {
      socket.emit("clientMsg", {
        msg: message,
        room: thread,
        sender_id: userJSON.id,
      });
      setMessage("");
    }
  };

  // HANDLES THE "MAJORS, AND COURSES SEARCH FEATURRE
  const handleSearch = (e) => {
    const searchParam = e.target.value.toLowerCase();
    if (currentMenuItem == "majors") {
      const filteredData = data.filter((item) =>
        item.major.toLowerCase().includes(searchParam)
      );
      setData(searchParam ? filteredData : majorsData);
    } else if (currentMenuItem == "courses") {
      const filteredData = data.filter((item) =>
        item.course_number.toLowerCase().includes(searchParam)
      );
      setData(searchParam ? filteredData : courseData);
    }
  };

  // HANDLES THE SUB MENU CLICK FEAUTURE
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrentMenuItem(e.key);

    // CHANGES THE DATA STATE BASED ON MAJORS, OR COURSE FILTER
    if (e.key == "courses") {
      setData(courseData);
    } else if (e.key == "majors") {
      setData(majorsData);
    }
  };

  // DISPLAYS THE AI MODAL WHWEN @ai IS DETECTED
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setMessage(inputValue);

    if (inputValue.includes("@ai ")) {
      setShowModal(false);
    } else if (inputValue.includes("@ai")) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <HeaderComponent />
        <Layout hasSider className="main-content" style={{ height: "88vh" }}>
          {/* //! Start SideBar Component   */}
          <Sider className="sider" width={"25vw"}>
            <Menu
              onClick={onClick}
              selectedKeys={[currentMenuItem]}
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
                    {/* CONDITIONAL STATEMENT TO FILTER LIST BY MAJOR OR COURSES */}
                    {currentMenuItem === "majors"
                      ? item.major
                      : `${item.course_number} (${item.course_name})`}
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
              <div className="message-frame">
                {chatMessage.map((msg, idx) => {
                  console.log(msg.sender_id);
                  console.log(userJSON.id);
                  return (
                    <ChatComponent
                      key={idx}
                      text={msg.msg}
                      className={
                        msg.sender_id === userJSON.id ? "sender" : "receiver"
                      }
                    />
                  );
                })}
              </div>
              <Input
                addonAfter={<SendOutlined onClick={() => handleSend()} />}
                placeholder="Send a message here"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                value={message}
              />
              {showModal && <ModalComponent />}
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
