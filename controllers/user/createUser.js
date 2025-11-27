const bcrypt = require("bcrypt");

const UserModel = require("../../schemas/userSchemas");

const SALT_ROUND = 10;
const createUser = async (req, res) => {
  const { firstName, email, password, address, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  try {
    const data = await UserModel.create({
      firstName: firstName,
      email: email,
      password: hashedPassword,
      address: address,
      phoneNumber: phoneNumber,
    });

    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = createUser;
