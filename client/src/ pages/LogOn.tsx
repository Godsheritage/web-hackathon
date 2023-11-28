import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";


const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LogOn: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    console.log("hey")
    e.preventDefault();

    const userObj = {
      userName: name,
      password: password,
      id: uuidv4(),
    };
    const userJSON = JSON.stringify(userObj);

    // Store the JSON string in local storage with a specific key, in this case, 'user'
    localStorage.setItem("user", userJSON);
    // console.log(localStorage.getItem("user"))
    navigate("/")
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogOn;
