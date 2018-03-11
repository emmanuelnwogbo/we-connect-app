import express from 'express';
import fs from 'fs';
import _ from 'lodash';

let data = fs.readFileSync('db/users.json');
let users = JSON.parse(data);

const router = express.Router();

router.post('/signup', (req, res, next) => {
  let body = _.pick(req.body, [
    'firstname',
    'lastname',
    'email',
    'password',
    'confirmpassword',
  ]);

  if (body.password !== body.confirmpassword) {
    return res.json({ message: "passwords don't match" });
  }

  _.forEach(users, user => {
    if (user.email === body.email) {
      return res.json({ message: 'a user with that email already exists' });
    }
  });

  body.id = '1';

  let newUser = JSON.stringify(body, null, 2);
  fs.writeFile('db/newUser.json', newUser, err => {
    if (err) {
      return console.log(err);
    }

    return res.status(201).json(JSON.parse(fs.readFileSync('db/newUser.json')));
  });
});

router.post('/login', (req, res, next) => {
  let body = _.pick(req.body, ['email', 'password']);

  let user = JSON.parse(fs.readFileSync('db/newUser.json'));

  if (user.email !== body.email || user.password !== body.password) {
    return res.status(401).json({ message: 'incorrect login details' });
  }

  return res.status(200).json(user.id);
});

export default router;
