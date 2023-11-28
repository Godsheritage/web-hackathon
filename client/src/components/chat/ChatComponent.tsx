import React from "react";
import "./ChatComponent.scss"


interface ChatTypes {
  text: string;
  id: number
  className: string
}

const ChatComponent: React.FC<ChatTypes> = ({ text,className, key }) => {
  return <div className={className} key={key}>{text}</div>;
};

export default ChatComponent;
