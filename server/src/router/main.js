const express = require("express");
const router = express.Router();

const { addLabel } = require("../controller/main");
const authorization = require("../middleware/authorization");

router.post("/addlabel", authorization, addLabel);

module.exports = router;
