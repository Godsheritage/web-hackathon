import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

 const handleCancel = () => {
    setIsModalOpen(false);
  };
 
  return (
    <>
      <Modal
        title={"AI chatbot"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}

      >
        {/* //Todo make sure you add the thread in state to be displayed */}
        <p>
          I am an AI chatbot with expertise in both general conversation
          handling for group chats and a specialized focus on this topic related
          topics. Please don't hesitate to ask me any questions or seek
          assistance on these subjects—I'm here to help!{" "}
        </p>
      </Modal>
    </>
  );
};

export default ModalComponent;
