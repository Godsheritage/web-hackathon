import https from "https";
import App from "./App";


const server = https.createServer(App);

const port = 1234;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
