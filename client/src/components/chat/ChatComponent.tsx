import React from "react";
import "./ChatComponent.scss"
interface ChatTypes {
  text: string;
  key: number
}

const ChatComponent: React.FC<ChatTypes> = ({ text, key }) => {
  return <div key={key} className="receiver">{text}</div>;
};

export default ChatComponent;
