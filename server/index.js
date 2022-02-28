require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const setDatabaseConfig = require("./src/database/database");
const authRouter = require("./src/router/auth");
const mainRouter = require("./src/router/main");
const handleError = require("./src/middleware/error");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// database
setDatabaseConfig();

// router
app.use("/api/", authRouter);
app.use("/api/", mainRouter);

// error
// app.use(handleError);

// server
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
