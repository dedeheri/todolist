const express = require("express");
const router = express.Router();

const { addLabel, getLabels, addTask, getTask } = require("../controller/main");
const authorization = require("../middleware/authorization");
const validate = require("../validation/validation");

router.post("/addlabel", authorization, validate("label"), addLabel);
router.get("/labels", authorization, getLabels);
router.post("/addtask", authorization, addTask);
router.get("/task", authorization, getTask);

module.exports = router;
