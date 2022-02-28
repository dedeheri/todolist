const jwt = require("jsonwebtoken");
const authorization = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Access Daniel" });
  }

  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = verifyToken;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Wrong Token" });
  }
};

module.exports = authorization;
