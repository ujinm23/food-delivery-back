const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ujinm23:Ujin2008.@food-delivery.jvhjtlf.mongodb.net/"
    );

    console.log("DATABASE connection success");
  } catch (err) {
    console.log("DATABASE connection fail", err);
  }
};

module.exports = connectToDB;
