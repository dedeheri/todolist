const express = require("express");
const router = express.Router();

const {
  addLabel,
  getLabels,
  addTask,
  getTask,
  getTaskByLabel,
  getTaskById,
} = require("../controller/main");
const authorization = require("../middleware/authorization");
const validate = require("../validation/validation");

router.post("/addlabel", authorization, validate("label"), addLabel);
router.get("/labels", authorization, getLabels);
router.post("/addtask", authorization, validate("addtask"), addTask);
router.get("/task", authorization, getTask);
router.get("/taskbylabel/:slug", authorization, getTaskByLabel);
router.get("/taskbyid/", authorization, getTaskById);

module.exports = router;
