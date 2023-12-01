"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courses_controller_1 = require("./courses.controller");
const coursesRoute = express_1.default.Router();
coursesRoute.get("/get", courses_controller_1.httpGetCourses);
coursesRoute.get("/save", courses_controller_1.httpSaveCourses);
exports.default = coursesRoute;
