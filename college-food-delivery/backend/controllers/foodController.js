import { FoodItem } from '../models/foodSchema.js';


export const getFoodByRestaurant = async (req, res) => {
    const foodItems = await FoodItem.find({ restaurantId: req.params.restaurantId });
    res.status(200).json({ success: true, foodItems });
};

