const label = require("../model/label");

const addLabel = async (req, res, next) => {
  const usersId = req.user._id;
  console.log(usersId);

  res.status(200).json({
    message: "working",
  });
};

module.exports = {
  addLabel,
};
