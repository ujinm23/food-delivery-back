const foodModel = require("../../schemas/foodSchemas").default;

const createFood = async (req, res) => {
  const { name, price, ingredients, imageURL, category } = req.body;

  try {
    const data = await foodModel.create({
      name,
      price,
      ingredients,
      imageURL,
      category,
    });

    res.status(201).json({
      message: "Food created successfully",
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

module.exports = createFood;
