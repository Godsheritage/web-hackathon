"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const majors_routes_1 = __importDefault(require("./routes/majors route/majors.routes"));
const courses_routes_1 = __importDefault(require("./routes/courses route /courses.routes"));
const messages_routes_1 = __importDefault(require("./routes/messages routes/messages.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// SERVER ROUTES
app.use("/courses", courses_routes_1.default);
app.use("/majors", majors_routes_1.default);
app.use("/messages", messages_routes_1.default);
exports.default = app;
