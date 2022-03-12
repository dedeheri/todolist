const { body } = require("express-validator");

const validate = (props) => {
  switch (props) {
    case "register": {
      return [
        body("email", "Invalid Email")
          .notEmpty()
          .isEmail()
          .withMessage("Format Email Invalid"),
        body("password", "Invalid Password")
          .notEmpty()
          .isLength({ min: 6 })
          .withMessage("Password Must be then 6 character"),
        body("repeatPassword").custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error("Password not the same");
          }

          return true;
        }),
      ];
    }

    case "forgot": {
      return [
        body("email")
          .notEmpty()
          .withMessage("Email can not be empty")
          .isEmail()
          .withMessage("Format Email Invalid"),
      ];
    }

    case "reset": {
      return [
        body("password", "Invalid Password")
          .notEmpty()
          .isLength({ min: 6 })
          .withMessage("Password Must be then 6 character"),
        body("repeatPassword").custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error("Password not the same");
          }

          return true;
        }),
      ];
    }

    case "login": {
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

    case "addtask": {
      return [body("content", "Can not be empty").notEmpty()];
    }

    default:
      return props;
  }
};

module.exports = validate;
