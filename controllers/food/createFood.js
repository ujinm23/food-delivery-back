const foodModel = require("../../schemas/foodSchemas").default;

const createFood = async (req, res) => {
  const { name, price, incredients } = req.body;

  try {
    const data = await foodModel.create({
      name,
      price,
      incredients,
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
