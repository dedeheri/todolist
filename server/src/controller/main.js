const { validationResult } = require("express-validator");
const task = require("../model/task");
const label = require("../model/label");
const { findByIdAndUpdate } = require("../model/task");

const addLabel = async (req, res, next) => {
  const usersId = req.user._id;
  const { icons, title } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ message: { validation: errors.array() } });
  }

  const checkTitleExist = await label.findOne({ title });

  if (checkTitleExist) {
    return res.status(200).json({ message: { error: "Title Already Exist" } });
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

  const { content, startDate, endDate, pins, archive, label, title } = req.body;

  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ validaton: errors.array() });
  }

  try {
    const newTask = new task({
      userId,
      content,
      title,
      startDate,
      endDate,
      pins,
      archive,
      label,
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

const getTaskByLabel = async (req, res, next) => {
  const userId = req.user._id;
  const slug = req.params.slug;

  const taskModel = await task
    .find({ userId })
    .sort({ createdAt: -1 })
    .populate("label");

  function findBySlug(tasks) {
    const result = tasks.filter((task) => {
      if (task.label !== null) {
        return task.label.title === slug;
      }
    });

    return result;
  }

  const resultFindBySlug = findBySlug(taskModel);

  try {
    return res.status(200).json({
      message: "success",
      total: taskModel.length,
      data: resultFindBySlug,
    });
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  const id = req.params.id;

  const taskModel = await task
    .findOne({ _id: id })
    .sort({ createdAt: -1 })
    .populate("label");

  try {
    return res.status(200).json({
      message: "success",
      data: taskModel,
    });
  } catch (error) {
    res.status(404).json({ message: "Id not found" });
  }
};

const pinsTask = async (req, res, next) => {
  const id = req.params.id;
  const pin = Boolean(req.body.pin);

  try {
    resultPins = await task.findByIdAndUpdate({ _id: id }, { pins: pin });

    return res.status(200).json({ message: "success", data: resultPins });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addLabel,
  getLabels,
  addTask,
  getTask,
  getTaskByLabel,
  getTaskById,
  pinsTask,
};
