import express, { RequestHandler } from "express";
import cors from "cors";

const app = express();

app.use(cors());

const homeRouter: RequestHandler = (req, res) => {
  return res.json({
    msg: "hello, are you there?",
    status: 200,
  });
};

app.use("/", homeRouter);


export default app;

