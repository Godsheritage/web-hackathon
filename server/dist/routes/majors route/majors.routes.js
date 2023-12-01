"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const majors_controller_1 = require("./majors.controller");
const majorsRoute = express_1.default.Router();
majorsRoute.get("/get", majors_controller_1.httpGetMajors);
exports.default = majorsRoute;
