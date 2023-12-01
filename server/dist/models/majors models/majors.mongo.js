"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// where the schema will be stored
const majorsSchema = new mongoose_1.default.Schema({
    index: { type: String, required: true },
    major: { type: String, required: true },
});
//connect launchesSchema with the launches collection
const majorsDatabase = mongoose_1.default.model("major", majorsSchema);
exports.default = majorsDatabase;
