const { default: CategoryModel } = require("../../schemas/foodcategoryschemas");

const getCategory = async (req, res) => {
  try {
    const data = await CategoryModel.find();

    if (!(data.length > 0)) {
      throw new Error("category empty");
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getCategory;
