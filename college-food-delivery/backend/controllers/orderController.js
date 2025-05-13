import { Order } from '../models/orderSchema.js';

export const placeOrder = async (req, res) => {
    const order = await Order.create({
        userId: req.user.id,
        items: req.body.items,
        totalAmount: req.body.totalAmount,
        status: 'Pending'
    });
    res.status(201).json({ success: true, order });
};

export const getUserOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
};

