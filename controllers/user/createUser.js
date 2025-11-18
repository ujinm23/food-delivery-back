const UserModel = require("../../schemas/userSchema");
const SALT_ROUND = 10;
const createUser = async (req, res) => {
  const { firstName, email, password, address, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  console.log(hashedPassword, "hashedPassword");
  console.log(password, "password");
  try {
    const data = await UserModel.create({
      email: email,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
    });

    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = createUser;
