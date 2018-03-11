import express from 'express';
const router = express.Router();

import ReviewController from '../controllers/review';

let { addReview, getBusinessReviews } = ReviewController;

router.post('/:businessid/reviews', addReview);

router.get('/:businessid/reviews', getBusinessReviews);

export default router;
