const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../model/auth");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;

  const authModel = await auth.findOne({ email });

  // error validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next("error");
  }

  // error email already exist
  if (authModel) {
    return res.status(403).json({ message: "Email Already Exist" });
  }

  // password hash
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const newAuth = new auth({
      email,
      password: passwordHash,
    });

    const resultAuth = await newAuth.save();
    return res.status(200).json({ message: "success", data: resultAuth });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  /*  req body
   validation req body
   email not exist
   callbak
   password compare
   jwt sign
   */

  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ validation: errors.array() });
  }

  const authModel = await auth.findOne({ email });
  if (!authModel) {
    return res.status(404).json({ message: "Email not exist" });
  }

  try {
    const passwordCompare = await bcrypt.compare(password, authModel.password);
    if (!passwordCompare) {
      return res.status(403).json({ message: "Wrong Password" });
    }

    const token = jwt.sign({ _id: authModel.id }, process.env.JWT_SECRET_TOKEN);
    return res.status(200).json({
      message: "success",
      data: {
        _id: authModel._id,
        email: authModel.email,
      },
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  signIn,
};
