const mongoose = require("mongoose");

const validation = {
  type: String,
  trim: true,
};
const label = mongoose.Schema(
  {
    userId: { ...validation },
    icons: { ...validation },
    title: { ...validation },
  },
  { timestamps: true }
);

const labelModel = mongoose.model("label", label);
module.exports = labelModel;
