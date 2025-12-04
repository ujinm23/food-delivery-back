const { default: CategoryModel } = require("../../schemas/foodcategoryschemas");

const getCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await CategoryModel.findById(id);

    if (!(data.length > 0)) {
      throw new Error("category empty");
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getCategory;
