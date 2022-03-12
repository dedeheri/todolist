const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const tokenHeaders = req.headers.authorization;
  if (tokenHeaders) {
    const token = tokenHeaders.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Wrong Token" });
      }

      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "You are not authenticated!" });
  }
}

module.exports = verifyToken;
