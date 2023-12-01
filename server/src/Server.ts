import app from "./App";
import http from "http";
import { Server, Socket } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import mongoose from "mongoose";
import { ClientToServerEvents, ServerToClientEvents } from "../../typing";

const MOGO_URL =
  "mongodb+srv://Heritage:Heritage4lyf@msuchat.wqkqbrm.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: ["http://localhost:5173", "https://admin.socket.io"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

instrument(io, {
  auth: false,
});


mongoose.connection.once("open", () => {
  console.log("Mongodb connection is ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

const PORT = process.env.PORT || 1234;


// SET THE SOCKET SERVER TO LISTEN TO EVENTS
io.on(
  "connection",
  (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
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
  }
);


// THIS METHOD STARTS THE SERVER AND CONNECTS TO THE DB
const startServer = async () => {
  await mongoose.connect(MOGO_URL);
  server.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}...`);
  });
};

startServer();
