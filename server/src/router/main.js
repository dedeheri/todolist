const express = require("express");
const router = express.Router();

const {
  addLabel,
  getLabels,
  addTask,
  getTask,
  getTaskByLabel,
  getTaskById,
  pinsTask,
  deleteTask,
  archiveTask,
  getTaskByArchive,
} = require("../controller/main");
const verifyToken = require("../middleware/verifyToken");
const validate = require("../validation/validation");

router.post("/addlabel", verifyToken, validate("label"), addLabel);
router.get("/labels", verifyToken, getLabels);
router.post("/addtask", verifyToken, validate("addtask"), addTask);
router.get("/task", verifyToken, getTask);
router.get("/taskbylabel/:slug", verifyToken, getTaskByLabel);
router.get("/taskbyid/:id", verifyToken, getTaskById);
router.put("/pins/:id", verifyToken, pinsTask);
router.delete("/task/:id", verifyToken, deleteTask);
router.put("/archive/:id", verifyToken, archiveTask);

// archive
router.get("/archive", verifyToken, getTaskByArchive);

module.exports = router;
