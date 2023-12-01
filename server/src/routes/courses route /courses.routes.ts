import express from "express";
import { httpGetCourses, httpSaveCourses } from "./courses.controller";

const coursesRoute = express.Router();

coursesRoute.get("/get", httpGetCourses);
coursesRoute.get("/save", httpSaveCourses);

export default coursesRoute;
