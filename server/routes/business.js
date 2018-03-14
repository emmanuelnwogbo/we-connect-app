import express from 'express';
const router = express.Router();

import BusinessController from '../controllers/business';

let {
  getAllBusinesses,
  addNewBusiness,
  editBusiness,
  deleteBusiness,
  getOneBusiness,
  getBusinessesByCategory,
  addReviewToBusiness,
  getBusinessReviews,
} = BusinessController;

router.get('/', getAllBusinesses);

router.post('/', addNewBusiness);

router.get('/:businessid', getOneBusiness);

router.patch('/:businessid', editBusiness);

router.delete('/:businessid', deleteBusiness);

router.get('/:businessid/reviews', getBusinessReviews);

router.post('/:businessid/reviews', addReviewToBusiness);

export default router;
