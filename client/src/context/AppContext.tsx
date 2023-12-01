import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { contextTypes } from "../types";

const AppContext = createContext<contextTypes | null>(null);

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [majorsData, setMajorsData] = useState<[]>([]);
  const [courseData, setCourseData] = useState<[]>([]);

  const API_URL = "http://localhost:1234";

  const FetchMajorsData: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/majors/get`);
    setMajorsData(response.data.majors);
  };
  const FetchCoursesData: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/courses/get`);
    setCourseData(response.data.courses);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
