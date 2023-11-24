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
import { useState } from "react";
const { Header, Footer, Sider, Content } = Layout;
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [current, setCurrent] = useState("majors");
  const [thread, setThread] = useState("Select Thread");
  const [data, setData] = useState(courseData);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  //   const [data, setData] = useState(courseData);

  const handleSend = () => {
    setChat([...chat, message]);
    setMessage("");
  };

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
        {/* //! Start Header Component  */}
        <Header className="header">
          {/* //TODO get a better logo*/}
          <h1>Logo</h1>
          <h1>{thread}</h1>
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
        {/* //! End Header Component  */}
        {/* //! Main Body Component  */}
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
        {/* //! Footer Component  */}
        <Footer className="footer">Copywright Godsheritage &#169; 2023</Footer>
      </Layout>
    </Space>
  );
};

export default Home;
