import { Order } from '../models/orderSchema.js';

// place an order
export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      userId: req.user.id, 
      email: req.user.email,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      status: 'Pending',
    });

    res.status(201).json({ success: true, order });
  } catch (error) {
    console.error("Order creation error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
//fetch all orders of the logged-in user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .populate({
        path: 'items.foodItemId',
        select: 'name price image restaurant',
        populate: {
          path: 'restaurant',
          select: 'name'
        }
      });

    res.status(200).json({
      success: true,
      orders,
      message: orders.length ? 'Orders fetched successfully' : 'No orders found'
    });
    
  } catch (error) {
    console.error("Order fetch error:", error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }

  
};
export const updateOrderStatus = async (req, res) => {
  try {
    const { email, status } = req.body;

    if (!email || !status) {
      return res.status(400).json({ success: false, message: "Email and status are required" });
    }

    const allowedStatuses = ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status value" });
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { email },
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found for the given email" });
    }

    res.json({ success: true, message: `Order status updated to ${status}`, order: updatedOrder });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
