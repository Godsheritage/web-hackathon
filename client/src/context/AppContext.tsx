import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { contextTypes } from "../types";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext<contextTypes | null>(null);

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [majorsData, setMajorsData] = useState<[]>([]);
  const [courseData, setCourseData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [thread, setThread] = useState<string>("Thread");

  const API_URL = "http://localhost:1234";

  const FetchMajorsData: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/majors/get`);
    setMajorsData(response.data.majors);
    setLoading(false);
  };
  const FetchCoursesData: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/courses/get`);
    setCourseData(response.data.courses);
    setLoading(false);
  };

  useEffect(() => {
    FetchMajorsData();
    FetchCoursesData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        majorsData,
        courseData,
        loading,
        thread,
        setThread
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
