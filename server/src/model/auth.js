const mongoose = require("mongoose");

const validation = {
  type: String,
  required: true,
  trim: true,
};

const auth = mongoose.Schema(
  {
    email: {
      ...validation,
    },
    password: {
      ...validation,
    },
  },
  { timestamps: true }
);

const authModel = mongoose.model("auth", auth);
module.exports = authModel;
