import { Cart } from '../models/cartSchema.js';

export const addToCart = async (req, res) => {
    const { foodItemId, quantity } = req.body;
    const cart = await Cart.findOneAndUpdate(
        { userId: req.user.id, foodItemId },
        { $inc: { quantity } },
        { new: true, upsert: true }
    );
    res.status(200).json({ success: true, cart });
};

export const getCartItems = async (req, res) => {
    const items = await Cart.find({ userId: req.user.id }).populate("foodItemId");
    res.status(200).json({ success: true, items });
};

export const removeFromCart = async (req, res) => {
    await Cart.findOneAndDelete({ userId: req.user.id, foodItemId: req.params.foodItemId });
    res.status(200).json({ success: true, message: "Removed from cart" });
};

export const clearCart = async (req, res) => {
    await Cart.deleteMany({ userId: req.user.id });
    res.status(200).json({ success: true, message: "Cart cleared" });
};
