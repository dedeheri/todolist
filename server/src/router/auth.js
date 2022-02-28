const express = require("express");
const router = express.Router();

const { signUp, signIn } = require("../controller/auth");
const validate = require("../validation/validation");

router.post("/signup", validate("authorization"), signUp);
router.post("/signin", validate("authorization"), signIn);

module.exports = router;
