import axios from "axios";
import { contextTypes } from "../Types";
import React, { createContext, useEffect, useState } from "react";
import { messageType } from "../Types";

const API_URL = "http://localhost:1234";

const AppContext = createContext<contextTypes | null>(null);

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [majorsData, setMajorsData] = useState<[]>([]);
  const [courseData, setCourseData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [thread, setThread] = useState<string>("Thread");
  const [chatMessages, setChatMessage] = useState<messageType[]>([]);

  //FETCHES ALL THE MAJORS FROM THE BACKEND
  const FetchMajorsData: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/majors/get`);
    setMajorsData(response.data.majors);
    setLoading(false);
  };

  //FETCHES ALL THE COURSES FROM THE BACKEND
  const FetchCoursesData: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/courses/get`);
    setCourseData(response.data.courses);
    setLoading(false);
  };

  const sendMessage = async (messageObj: messageType) => {
    const response = await axios.post(`${API_URL}/messages/save`, messageObj);
    // setChatMessage([...chatMessages, response.data.message])
    return response.data;
  };

  const fetchMessages = async () => {
    const response = await axios.get(`${API_URL}/messages/get`);
    setChatMessage([...chatMessages, response.data])
  };

  useEffect(() => {
    FetchMajorsData();
    FetchCoursesData();
  }, []);
  useEffect(() => {
    fetchMessages
  }, [thread]);

  return (
    <AppContext.Provider
      value={{
        majorsData,
        courseData,
        loading,
        thread,
        setThread,
        sendMessage,
        fetchMessages,
        chatMessages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
