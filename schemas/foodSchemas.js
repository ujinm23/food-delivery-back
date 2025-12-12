import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});
const foodModel = model("food", foodSchema);
export default foodModel;
