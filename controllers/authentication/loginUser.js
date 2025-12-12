const { generateToken } = require("../../middleware/generateToken");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { password } = req.body;
  const { user } = req;
  console.log("working ...");
  try {
    const hashedPassword = user.password;
    const comparedPassword = await bcrypt.compare(password, hashedPassword);

    if (!comparedPassword) {
      return res.status(400).json("password not match");
    } else {
      const token = generateToken(user);
      console.log("this is the token", token);
      res.status(200).json({ user: user, token: token });
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
