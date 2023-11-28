import React from "react";
import "./ChatComponent.scss"
interface ChatTypes {
  text: string;
  key: number
  className: string
}

const ChatComponent: React.FC<ChatTypes> = ({ text, key, className }) => {
  return <div key={key} className={className}>{text}</div>;
};

export default ChatComponent;
