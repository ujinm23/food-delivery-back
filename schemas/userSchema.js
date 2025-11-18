const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [6, "First name length must be at least 6 characters"],
    maxLength: [50, "First name length must be 6 to 50 characters"],
  },
  email: {
    type: String,
    required: [true],
  },
  password: {
    type: String,
    required: [true],
  },
  address: {
    type: String,
    required: [true],
  },
  phoneNumber: {
    type: String,
    required: [true],
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
