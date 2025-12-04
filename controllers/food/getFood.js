const { default: FoodModel } = require("../../schemas/foodSchemas");

const getFood = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await FoodModel.findById(id);

    if (!(data.length > 0)) {
      throw new Error("Food empty");
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getFood;
