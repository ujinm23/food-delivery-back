const jwt = require("jsonwebtoken");
const JWT_SECRET = "12354";

const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: "24h" });
};

module.exports = { generateToken };
