import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});
const foodModel = model("food", foodSchema);
export default foodModel;
