"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_controler_1 = require("./messages.controler");
const courses_controller_1 = require("../courses route /courses.controller");
const messagesRoute = express_1.default.Router();
messagesRoute.get("/get", messages_controler_1.httpFetchMessages);
//ROUTES TO SAVE MESSAGES
messagesRoute.post("/save", courses_controller_1.httpSaveCourses);
exports.default = messagesRoute;
