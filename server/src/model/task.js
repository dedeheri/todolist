const mongoose = require("mongoose");

const task = mongoose.Schema(
  {
    userId: {
      type: String,
      trim: true,
      required: true,
    },
    content: { type: String, trim: true, required: true },
    title: { type: String, trim: true, default: null },
    pins: { type: Boolean, trim: true, default: false },
    archive: { type: Boolean, trim: true, default: false },
    startDate: { type: String, trim: true, default: null },
    endDate: { type: String, trim: true, default: null },
    time: { type: String, trim: true, default: null },
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
