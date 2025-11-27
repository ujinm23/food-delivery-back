const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("working ...");

  // const { user } = req;
  try {
    const user = await UserModel.findOne({ email });

    // const hashedPassword = user.password;

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    console.log("isPasswordMatching", isPasswordMatching);
    if (!isPasswordMatching) {
      res.status(400).json(`password not matching`);
    } else {
      res.status(200).json(`user: ${user}`);
    }
    // const returnUser = {};

    // res.status(200).json(`user: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
