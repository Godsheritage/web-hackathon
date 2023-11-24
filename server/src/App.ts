import express from "express";

const App = express();

App.get("/", (req, res) => {
  res.send("This is home page.");
});

export default App;
