import express from 'express';
import _ from 'lodash';
import writeJsonFile from 'write-json-file';

const router = express.Router();

import models from '../models';
let { User, Business, Review } = models;

import businesses from '../db/businesses.json';
import users from '../db/users.json';

router.get('/', (req, res, next) => {
  res.json('hello there business');
});

/*router.post('/api/v1/business', (req, res, next) => {
  let body = _.pick(req.body, [name, address, category]);

  res.json(body).status(201);
});


router.patch('/api/v1/business/:id', (req, res, next) => {
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
