const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food", // or your product schema
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    location: { type: String, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("Order", orderSchema);
