import express from 'express';
const router = express.Router();

import BusinessController from '../controllers/business';

let {
  getAllBusinesses,
  addNewBusiness,
  editBusiness,
  deleteBusiness,
  getOneBusiness,
  getBusinessesOfCategory,
} = BusinessController;

router.get('/', getAllBusinesses);

router.post('/', addNewBusiness);

router.patch('/:id', editBusiness);

router.delete('/:id', deleteBusiness);

router.get('/:id', getOneBusiness);

router.get('/', getBusinessesOfCategory);

/*

router.post('/api/v1/business/:id/reviews', (req, res, next) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['review']);
});

router.get('/api/v1/businesses/:id/reviews', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business.reviews).status(200);
    }
  });
});*/

export default router;
