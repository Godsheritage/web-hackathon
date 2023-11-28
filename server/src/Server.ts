import app from "./App";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "../../typing";

const server = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 1234;

io.on(
  "connection",
  (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
    socket.on("clientMsg", (data) => {
      if ((data.room = "")) {
        socket.broadcast.emit("serverMsg", data);
      }
      else{
        socket.join(data.room)
        io.to(data.room).emit("serverMsg", data)
      }
    });
  }
);

server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}...`);
});