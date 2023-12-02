import cors from "cors";
import express, { RequestHandler } from "express";
import majorsRoute from "./routes/majors route/majors.routes";
import coursesRoute from "./routes/courses route /courses.routes";
import messagesRoute from "./routes/messages routes/messages.routes";

const app = express();

app.use(cors());


// SERVER ROUTES
app.use("/courses", coursesRoute);
app.use("/majors", majorsRoute);
app.use("/messages", messagesRoute);


export default app;
