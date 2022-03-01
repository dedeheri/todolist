const { validationResult } = require("express-validator");
const task = require("../model/task");
const label = require("../model/label");

const addLabel = async (req, res, next) => {
  const usersId = req.user._id;
  const { icons, title } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ validation: errors.array() });
  }

  try {
    const newLabel = new label({
      userId: usersId,
      icons,
      title,
    });

    const saveLable = await newLabel.save();

    res.status(200).json({
      message: "working",
      data: saveLable,
    });
  } catch (error) {
    next(error);
  }
};

const getLabels = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const labelModel = await label.find({ userId });
    return res
      .status(200)
      .json({ message: "success", total: labelModel.length, data: labelModel });
  } catch (error) {
    next(error);
  }
};

const addTask = async (req, res, next) => {
  const userId = req.user._id;

  const { content, date, pins, archive, label } = req.body;

  try {
    const newTask = new task({
      userId,
      content,
      date,
      pins,
      archive,
      label: "621ceba2a8a2f04a27f7abdb",
    });

    const saveTask = await newTask.save();

    return res.status(200).json({ message: "success", data: saveTask });
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const taskModel = await task
      .find({ userId })
      .sort({ createdAt: -1 })
      .populate("label");
    return res
      .status(200)
      .json({ message: "success", total: taskModel.length, data: taskModel });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addLabel,
  getLabels,
  addTask,
  getTask,
};
