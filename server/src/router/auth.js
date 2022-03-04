const express = require("express");
const router = express.Router();

const { signUp, signIn, users } = require("../controller/auth");
const validate = require("../validation/validation");

const authorization = require("../middleware/authorization");

router.post("/signup", validate("authorization"), signUp);
router.post("/signin", validate("authorization"), signIn);
router.get("/users", authorization, users);

module.exports = router;
