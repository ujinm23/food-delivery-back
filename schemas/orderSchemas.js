import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const orderModel = model("order", orderSchema);
export default orderModel;
