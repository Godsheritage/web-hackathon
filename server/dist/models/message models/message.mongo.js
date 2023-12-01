"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// where the schema will be stored
const messageSchema = new mongoose_1.default.Schema({
    msg: { type: String, required: true },
    room: { type: String, required: true },
    senderId: { type: String, required: true },
});
//connect launchesSchema with the launches collection
const messageDatabase = mongoose_1.default.model("message", messageSchema);
exports.default = messageDatabase;
