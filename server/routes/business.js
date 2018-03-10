import express from 'express';
import fs from 'fs';
import _ from 'lodash';

let data = fs.readFileSync('db/businesses.json');
let businesses = JSON.parse(data);

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(businesses);
});

router.post('/business/new', (req, res, next) => {
  let body = _.pick(req.body, ['name', 'location', 'category']);
});

/*router.patch('/api/v1/business/:id', (req, res, next) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'address', 'category']);

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business).status(200);
    }
  });
});

router.delete('/api/v1/business/:id', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business).status(200);
    }
  });
});

router.get('/api/v1/business/:id', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business).status(200);
    }
  });
});

router.get('/api/v1/businesses', (req, res, next) => {
  let id = req.params.id;
  let locationQuery = req.query.location;
  let categoryQuery = req.query.category;

  let results = [];

  if (locationQuery || categoryQuery) {
    businesses.map(business => {
      if (
        business.location.includes(locationQuery) ||
        business.category.includes(categoryQuery)
      ) {
        results.push(business);
      }
    });
    return res.json(results).status(200);
  }

  res.json(businesses).status(200);
});

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
