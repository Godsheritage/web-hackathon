import React from "react";
import { useContext } from "react";
import { useNavigate, redirect} from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Layout, Input, Space, Button } from "antd";
import { UserContext } from "../content/userContext";
import { logoutUser } from "../../magic";

const { Header } = Layout;

// HEADER COMPONENT

// todo work on the app wide state to be able to show the thread on click

const HeaderComponent = () => {


    //For Magic Link Authentication 
    const {email} = useContext(UserContext)
    const navigate = useNavigate();
    /////-----
   
    const handleLogOut = async () => {
      try{
        await logoutUser();
        console.log('testing')
        return redirect("/signup")
      }catch (error){
        console.error(error)
      }
    }

  return (
    <Header className="header" style={{height:"5vh"}}>
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
      <h1>User: { email }</h1>
      <Button size={"large"} shape="round" style={{ marginLeft: "1rem" }} onClick = {handleLogOut}>
          Logout
        </Button>
    </Header>
  );
};

export default HeaderComponent;
