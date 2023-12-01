import cors from "cors";
import express, { RequestHandler } from "express";
import coursesRoute from "./routes/courses route /courses.routes";
import majorsRoute from "./routes/majors route/majors.routes";

const app = express();

app.use(cors());

const homeRouter: RequestHandler = (req, res) => {
  return res.json({
    msg: "hello, are you there?",
    status: 200,
  });
};

// app.use("/", homeRouter);

//ROUTES
app.use("/courses", coursesRoute);
app.use("/majors", majorsRoute);
// app.use("/cartitems", cartRoute);
// app.use("/Contact", contactRoute);
// app.use("/products", productRoute);

export default app;
