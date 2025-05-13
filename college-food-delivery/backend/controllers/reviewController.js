import { Review } from '../models/reviewSchema.js';

export const createReview = async (req, res) => {
    const review = await Review.create({
        userId: req.user.id,
        restaurantId: req.body.restaurantId,
        rating: req.body.rating,
        comment: req.body.comment
    });
    res.status(201).json({ success: true, review });
};

export const getRestaurantReviews = async (req, res) => {
    const reviews = await Review.find({ restaurantId: req.params.restaurantId }).populate('userId');
    res.status(200).json({ success: true, reviews });
};

export const deleteReview = async (req, res) => {
    await Review.findOneAndDelete({ userId: req.user.id, _id: req.params.id });
    res.status(200).json({ success: true, message: "Review deleted" });
};
