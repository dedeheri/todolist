const { body } = require("express-validator");

const validate = (props) => {
  switch (props) {
    case "authorization": {
      return [
        body("email", "Invalid Email")
          .notEmpty()
          .isEmail()
          .withMessage("Format Email Invalid"),
        body("password", "Invalid Password")
          .notEmpty()
          .isLength({ min: 6 })
          .withMessage("Password Must be then 6 character"),
      ];
    }

    case "label": {
      return [
        body("icons", "Invalid Icons").notEmpty(),
        body("title", "Invalid title").notEmpty(),
      ];
    }
    default:
      return props;
  }
};

module.exports = validate;
