const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    minLength: [6, "First name must be at least 6 characters"],
    maxLength: [50, "First name must be 6 to 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
