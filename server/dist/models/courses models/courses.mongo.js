"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// where the schema will be stored
const courseSchema = new mongoose_1.default.Schema({
    course_number: { type: String, required: true },
    course_name: { type: String, required: true },
    major: { type: String, required: true },
});
// CREAE THE DATABASE MODEL
const courseDatabase = mongoose_1.default.model("course", courseSchema);
exports.default = courseDatabase;
