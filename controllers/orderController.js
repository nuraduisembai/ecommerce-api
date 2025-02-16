const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  try {
    const order = new Order({ user: req.user.id, products: req.body.products });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
