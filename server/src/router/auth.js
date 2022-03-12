const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const validate = require("../validation/validation");

const verifyToken = require("../middleware/verifyToken");

router.post("/signup", validate("register"), authController.signUp);
router.post("/signin", validate("login"), authController.signIn);

// forgot
router.post("/forgot", validate("forgot"), authController.forgotPassword);
router.post("/reset", validate("reset"), authController.resetPassword);
router.get("/invalid", validate("reset"), authController.invalidSignature);

// refresh token
router.post("/refresh", authController.refresh);

// load users
router.get("/users", verifyToken, authController.users);

module.exports = router;
