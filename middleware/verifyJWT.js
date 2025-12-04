const jwt = require("jsonwebtoken");

const JWT_SECRET = "12354";

const verifyJwt = (req, res, next) => {
  const authentication = req.headers("authorization");
  if (!authentication) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authentication.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "invalid or expired" });

    console.log("decoded", decoded);

    req.user = decoded.user;
    next();
  });
};

module.exports = verifyJwt;
