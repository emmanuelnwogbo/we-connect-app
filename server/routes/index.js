import express from 'express';
import _ from 'lodash';
const router = express.Router();

import models from '../models';

import businesses from '../db/businesses.json';
import users from '../db/users.json';

let { User, Business, Review } = models;

router.post('/auth/signup', (req, res, next) => {
  let body = _.pick(req.body, [
    'firstname',
    'lastname',
    'email',
    'password',
    'confirmpassword',
  ]);

  if (body.password !== body.confirmpassword) {
    return res.send('error');
  }

  let newUser = new User(
    body.firstname,
    body.lastname,
    body.email,
    body.password
  );

  res.json(newUser).status(201);
});

router.post('/auth/login', (req, res, next) => {
  let body = _.pick(req.body, ['email', 'password']);

  res.json(body).status(200);
});

router.post('/business', (req, res, next) => {
  let body = _.pick(req.body, [name, address, category]);

  res.json(body).status(201);
});

router.patch('/business/:id', (req, res, next) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'address', 'category']);

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business).status(200);
    }
  });
});

router.delete('/business/:id', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business).status(200);
    }
  });
});

router.get('/business/:id', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business).status(200);
    }
  });
});

router.get('/businesses', (req, res, next) => {
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

router.post('/business/:id/reviews', (req, res, next) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['review']);
});

router.get('/businesses/:id/reviews', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business.reviews).status(200);
    }
  });
});

export default router;
