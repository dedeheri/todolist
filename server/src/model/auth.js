const mongoose = require("mongoose");
const auth = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    refreshToken: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const authModel = mongoose.model("auth", auth);
module.exports = authModel;
