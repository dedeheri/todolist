const { body } = require("express-validator");

const validate = (props) => {
  switch (props) {
    case "authorization": {
      return [
        body("email", "Invalide Email").notEmpty().isEmail(),
        body("password", "Invalide Password")
          .notEmpty()
          .isLength({ min: 6 })
          .withMessage("Password Must be then 6 character"),
      ];
    }

    default:
      return props;
  }
};

module.exports = validate;
