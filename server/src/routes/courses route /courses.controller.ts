import { RequestHandler } from "express";
import { courseData } from "../../data/courses";
import {
  fetchCourses,
  saveCourses,
} from "../../models/courses models/courses.model";

//GETS ALL THE COURSES FROM THE DATABASE
export const httpGetCourses: RequestHandler = async (req, res) => {
  let courses = await fetchCourses();
  return res.status(201).json({
    courses,
  });
};

export const httpSaveCourses: RequestHandler = async (req, res) => {
  await saveCourses(courseData);
  return res.status(201).json({
    msg: "courses have been saved",
  });
};
