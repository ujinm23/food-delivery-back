const CategoryModel = require("../../schemas/foodcategoryschemas").default;

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const data = await CategoryModel.create({
      name,
    });

    res.status(201).json({
      message: "Category created successfully",
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
};

module.exports = createCategory;
