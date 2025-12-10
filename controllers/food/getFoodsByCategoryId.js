const { default: FoodModel } = require("../../schemas/foodSchemas");

const getFoodsByCategoryId = async (req, res) => {
  try {
    const data = await FoodModel.find({ category: req.params.id });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getFoodsByCategoryId;
