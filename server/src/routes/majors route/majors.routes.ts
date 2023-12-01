import express from "express";
import { httpGetMajors } from "./majors.controller";

const majorsRoute = express.Router();

majorsRoute.get("/get", httpGetMajors);

export default majorsRoute;
