"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const admin_ui_1 = require("@socket.io/admin-ui");
const server = http_1.default.createServer(App_1.default);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: ["http://localhost:5173", "https://admin.socket.io"],
        methods: ["GET", "POST"],
        credentials: true,
    },
});
(0, admin_ui_1.instrument)(io, {
    auth: false,
});
const PORT = process.env.PORT || 1234;
io.on("connection", (socket) => {
    socket.on("clientMsg", (data) => {
        if ((data.room = "")) {
            socket.broadcast.emit("serverMsg", data);
        }
        else {
            socket.join(data.room);
            io.to(data.room).emit("serverMsg", data);
        }
    });
});
server.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}...`);
});
