import express from 'express';
const router = express.Router();

import BusinessController from '../controllers/business.controller';

const {getAllBusinesses, getBusiness, getBusinessReviews, postBusinessReview, postBusiness, updateBusiness, deleteBusiness } = BusinessController;

router.get('/', getAllBusinesses);

router.get('/:businessid', getBusiness);

router.get('/:businessid/reviews', getBusinessReviews);

router.post('/:businessid/reviews', postBusinessReview);

router.post('/', postBusiness);

router.patch('/:businessid', updateBusiness);

router.delete('/:businessid', deleteBusiness);

export default router;
