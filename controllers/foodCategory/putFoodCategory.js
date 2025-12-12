const CategoryModel = require("../../schemas/foodcategoryschemas").default;

const putFoodCategory = async (req, res) => {
  const { id, name } = req.body;
  try {
    const data = await CategoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json(`putFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = putFoodCategory;
