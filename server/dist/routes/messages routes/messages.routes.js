"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_controler_1 = require("./messages.controler");
const messages_controler_2 = require("./messages.controler");
const messagesRoute = express_1.default.Router();
messagesRoute.get("/get", messages_controler_1.httpFetchMessages);
messagesRoute.post("/save", messages_controler_2.httpSaveMessages);
exports.default = messagesRoute;
