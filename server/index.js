require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const setDatabaseConfig = require("./src/database/database");
const authRouter = require("./src/router/auth");
const mainRouter = require("./src/router/main");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(process.env.COOKIE_KEY));

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
