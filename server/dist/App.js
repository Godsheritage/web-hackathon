"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const courses_routes_1 = __importDefault(require("./routes/courses route /courses.routes"));
const majors_routes_1 = __importDefault(require("./routes/majors route/majors.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const homeRouter = (req, res) => {
    return res.json({
        msg: "hello, are you there?",
        status: 200,
    });
};
// app.use("/", homeRouter);
//ROUTES
app.use("/courses", courses_routes_1.default);
app.use("/majors", majors_routes_1.default);
// app.use("/cartitems", cartRoute);
// app.use("/Contact", contactRoute);
// app.use("/products", productRoute);
exports.default = app;
