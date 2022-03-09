const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../model/auth");

const signUp = async (req, res, next) => {
  const { email, password, repeatPassword } = req.body;

  const authModel = await auth.findOne({ email });

  // error validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() });
  }

  // error email already exist
  if (authModel) {
    return res.status(409).json({ message: "Email Already Exist" });
  }

  // password hash
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const newAuth = new auth({
      email,
      password: passwordHash,
    });

    const resultAuth = await newAuth.save();

    const { password, ...data } = resultAuth._doc;
    return res.status(200).json({ message: "success", data });
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

const users = async (req, res, next) => {
  const id = req.user._id;

  const authModel = await auth.findOne({ _id: id });
  const { password, ...info } = authModel._doc;

  try {
    return res.status(200).json({ message: "success", data: { info } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  signIn,
  users,
};
