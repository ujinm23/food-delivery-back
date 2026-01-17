const Order = require("../../schemas/orderSchemas");

module.exports = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
