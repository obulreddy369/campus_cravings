import express from 'express'
import isAuthenticated from '../config/userAuth.js'
import { Login,Register,logout,updateUserProfile } from '../controllers/userController.js';
import { createReview,getRestaurantReviews,deleteReview } from '../controllers/reviewController.js';
import { placeOrder,getUserOrders, updateOrderStatus } from '../controllers/orderController.js';
import { getFoodByRestaurant } from '../controllers/foodController.js';
import { addToCart,getCartItems,removeFromCart,clearCart } from '../controllers/cartController.js';
import { syncOrderToServiceNow } from '../controllers/servicenowController.js';
import { getUserProfile } from '../controllers/userController.js';

const router = express.Router()


//Auth Profile
router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(logout);
router.get("/profile", isAuthenticated, getUserProfile);
router.put("/profile/update", isAuthenticated, updateUserProfile);

// Food Items
router.get("/restaurant/:id/foods", getFoodByRestaurant); // Foods by restaurant

// Cart
router.post("/cart/add", isAuthenticated, addToCart);
router.get("/cart", isAuthenticated, getCartItems);
router.delete("/cart/remove/:foodId", isAuthenticated, removeFromCart);
router.delete("/cart/clear", isAuthenticated, clearCart);

// Orders
router.post("/order", isAuthenticated, placeOrder);
router.get("/orders", isAuthenticated, getUserOrders);
router.post("/sync-orders",isAuthenticated,syncOrderToServiceNow);
router.post('/update-status',updateOrderStatus);

// Reviews
router.post("/review", isAuthenticated, createReview);
router.get("/reviews/:restaurantId", getRestaurantReviews);
router.delete("/review/:reviewId", isAuthenticated, deleteReview);

export default router;