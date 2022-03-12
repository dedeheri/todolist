const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../model/auth");

const nodemailer = require("nodemailer");

const sendEmail = require("../utils/mail");

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

const generateAccessToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "7d",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.JWT_SECRET_REFRESH_TOKEN);
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() });
  }

  const authModel = await auth.findOne({ email });
  if (!authModel) {
    return res.status(404).json({ message: "Email not exist" });
  }

  try {
    const passwordCompare = await bcrypt.compare(password, authModel.password);
    if (!passwordCompare) {
      return res.status(401).json({ message: "Wrong Password" });
    } else {
      const accessToken = generateAccessToken(authModel);
      const refreshToken = generateRefreshToken(authModel);

      // push refresh token
      await auth.findByIdAndUpdate(
        { _id: authModel._id },
        { refreshToken },
        { new: true }
      );

      res.cookie("token", accessToken);

      return res.status(200).json({
        message: "success",
        data: {
          _id: authModel._id,
          email: authModel.email,
          refreshToken,
        },
        accessToken,
      });
    }
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res) => {
  const email = req.body.email;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const authModel = await auth.findOne({ email });
  if (!authModel) {
    return res.status(404).json({ message: "Email is not registered" });
  }

  try {
    token = jwt.sign({ _id: authModel.id }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: 5 * 60, // 5 minutes exp
    });
    const link = `${process.env.BASE_URL}/reset?token=${token}&id=${authModel._id}`;
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: "Reset Password",
      text: link,
    });

    res.status(200).json({ message: "Success sending email" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to respond. Please try again later",
    });
  }
};

const resetPassword = async (req, res) => {
  const token = req.query.token;
  const id = req.query.id;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  const authModel = await auth.findOne({ _id: id });
  if (!authModel) {
    return res.status(400).json({ message: "Email not registration" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const passwordHash = await bcrypt.hash(password, 10);
    await auth.findByIdAndUpdate(
      { _id: authModel._id },
      { password: passwordHash },
      { new: true }
    );

    return res.status(200).json({ message: "Reset password sucessfully" });
  } catch (error) {
    if (error.message) {
      return res.status(500).json({ message: "Invalid Signature" });
    } else {
      res.status(500).json({ message: "Something Broke" });
    }
  }
};

const invalidSignature = (req, res) => {
  const token = req.query.token;

  try {
    jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    res.status(200).json({ message: "next" });
  } catch (error) {
    if (error.message) {
      return res.status(500).json({ message: "Invalid Signature" });
    }
  }
};

const refresh = async (req, res) => {
  const refreshToken = req.body.token;
  const authModel = await auth.findOne({ refreshToken });

  try {
    if (!refreshToken) {
      return res.status(401).json({ message: "You are not authenticated" });
    } else if (!authModel) {
      return res.status(403).json({ message: "Refresh Token no valid" });
    } else {
      jwt.verify(
        refreshToken,
        process.env.JWT_SECRET_REFRESH_TOKEN,
        async (err, user) => {
          const accessToken = generateAccessToken(user);
          const refreshToken = generateRefreshToken(user);

          // push token to db
          await auth.findByIdAndUpdate(
            { _id: authModel._id },
            { refreshToken: refreshToken },
            { new: true }
          );

          return res.status(200).json({
            message: "success",
            data: {
              accessToken,
              refreshToken,
            },
          });
        }
      );
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const users = async (req, res) => {
  const id = req.user._id;

  const authModel = await auth.findOne({ _id: id });
  const { password, ...data } = authModel._doc;

  try {
    return res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  signUp,
  signIn,
  refresh,
  users,
  forgotPassword,
  resetPassword,
  invalidSignature,
};
