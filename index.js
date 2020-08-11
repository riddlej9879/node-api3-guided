const express = require("express");
var morgan = require("morgan");
const logger = require("./middleware/logger");
const welcomeRouter = require("./welcome/welcome-router");
const usersRouter = require("./users/users-router");

const server = express();
const port = 4000;

server.use(express.json());
// Install morgan middleware using the 'combined' format
// server.use(morgan("combined"));

server.use(welcomeRouter);
server.use(usersRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
