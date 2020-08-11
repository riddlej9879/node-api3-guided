const express = require("express");
var morgan = require("morgan");
const logger = require("./middleware/logger");
const deny = require("./middleware/deny");
const welcomeRouter = require("./welcome/welcome-router");
const usersRouter = require("./users/users-router");

const server = express();
const port = 4000;

server.use(express.json());
// Install morgan middleware using the 'combined' format
// server.use(morgan("combined"));
server.use(deny());
server.use(logger());

server.use(welcomeRouter);
server.use(usersRouter);

// err in front is error catching
server.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({ message: "Something went wrong try again later" });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
