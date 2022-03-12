const nodemailer = require("nodemailer");

const mail = (email, subject, text) => {
  return async (req, res, next) => {
    try {
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
        subject: subject,
        text: text,
      });
    } catch (error) {
      res.status(400).json({ message: "Something Broke" });
    }
  };
};

module.exports = mail;
