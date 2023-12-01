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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const admin_ui_1 = require("@socket.io/admin-ui");
const mongoose_1 = __importDefault(require("mongoose"));
const MOGO_URL = "mongodb+srv://Heritage:Heritage4lyf@msuchat.wqkqbrm.mongodb.net/?retryWrites=true&w=majority";
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
mongoose_1.default.connection.once("open", () => {
    console.log("Mongodb connection is ready");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log(err);
});
const PORT = process.env.PORT || 1234;
// SET THE SOCKET SERVER TO LISTEN TO EVENTS
io.on("connection", (socket) => {
    console.log(`websocket server is connected`);
    socket.on("clientMsg", (data) => {
        io.emit("serverMsg", data);
        // if ((data.room = "")) {
        //   socket.broadcast.emit("serverMsg", data);
        // } else {
        //   socket.join(data.room);
        //   io.to(data.room).emit("serverMsg", data);
        // }
    });
    socket.on("disconnect", (reason) => {
        console.log(`Websocket discsonnected due to ${reason}`);
    });
});
// THIS METHOD STARTS THE SERVER AND CONNECTS TO THE DB
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(MOGO_URL);
    server.listen(PORT, () => {
        console.log(`server is listening on PORT ${PORT}...`);
    });
});
startServer();
