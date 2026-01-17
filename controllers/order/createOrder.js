const Order = require("../../schemas/orderSchemas");

const createOrder = async (req, res) => {
  try {
    const { items, location, totalPrice } = req.body;
    const userId = req.user._id; // from verifyJWT

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = await Order.create({
      user: userId,
      items,
      location,
      totalPrice,
      status: "Pending",
      createdAt: new Date(),
    });

    res.status(201).json(order); // <-- send order back
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
};

module.exports = createOrder;
