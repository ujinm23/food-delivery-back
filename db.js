const mongoose = require("mongoose");

const connectToDB = async () => {
  console.log("DATABASE connecting...", process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("DATABASE connection success");
  } catch (err) {
    console.log("DATABASE connection fail", err);
  }
};

module.exports = connectToDB;
