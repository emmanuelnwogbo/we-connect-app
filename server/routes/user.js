import express from 'express';
import _ from 'lodash';
import writeJsonFile from 'write-json-file';

const router = express.Router();

import models from '../models';
let { User, Business, Review } = models;

import businesses from '../db/businesses.json';
import users from '../db/users.json';

router.get('/', (req, res, next) => {
  res.send('hello there user');
});

/*router.post('/api/v1/auth/signup', (req, res, next) => {
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

router.post('/api/v1/auth/login', (req, res, next) => {
  let body = _.pick(req.body, ['email', 'password']);

  res.json(body).status(200);
});*/

export default router;
