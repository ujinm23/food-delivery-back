const UserModel = require("../schemas/userSchemas");

const isUserExist = async (req, res, next) => {
  console.log("working ....");
  const { email } = req.body;
  if (!email) {
    res.status(404).json("email Required");
  }

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(404).json("User not found");
  } else {
    req.user = user;
    next();
  }
};

module.exports = isUserExist;
