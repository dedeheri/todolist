const mongoose = require("mongoose");

const validation = {
  type: String,
  trim: true,
};
const label = mongoose.Schema(
  {
    userId: { ...validation },
    title: { ...validation },
    icon: { ...validation },
  },
  { timestamps: true }
);

const labelModel = mongoose.model("label", label);
module.exports = labelModel;
