const mongoose = require("mongoose");

const validation = {
  type: String,
  trim: true,
};
const task = mongoose.Schema(
  {
    userId: { ...validation },
    content: { ...validation, required: true },
    pins: { ...validation, default: null },
    archive: { ...validation, default: null },
    date: { ...validation, default: null },
    label: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "label",
      default: null,
    },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("task", task);

module.exports = taskModel;
