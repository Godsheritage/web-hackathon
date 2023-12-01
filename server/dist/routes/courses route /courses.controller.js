"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSaveCourses = exports.httpGetCourses = void 0;
const courses_1 = require("../../data/courses");
const courses_model_1 = require("../../models/courses models/courses.model");
//GETS ALL THE COURSES FROM THE DATABASE
const httpGetCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let courses = yield (0, courses_model_1.fetchCourses)();
    return res.status(201).json({
        courses,
    });
});
exports.httpGetCourses = httpGetCourses;
const httpSaveCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, courses_model_1.saveCourses)(courses_1.courseData);
    return res.status(201).json({
        msg: "courses have been saved",
    });
});
exports.httpSaveCourses = httpSaveCourses;
