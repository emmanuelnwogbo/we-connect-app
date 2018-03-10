import express from 'express';
import fs from 'fs';
import _ from 'lodash';

let test = fs.readFileSync('db/test.json');
let data = JSON.parse(test);

import businessRouter from './business';
import userRouter from './user';

const router = express.Router();

router.get('/', (req, res) => {
  //res.send(data);
  _.forEach(data, data => {
    if (data.firstname === 'ope') {
      return res.json(data);
    }
  });
});

router.post('/', (req, res, next) => {
  let newUser = {
    firstname: 'ope',
    lastname: 'odedeyi',
    email: 'ope@gmail.com',
    password: 'eemmaann',
  };

  let newData = JSON.stringify(newUser, null, 2);
  fs.writeFile('db/test2.json', newData, err => {
    console.log('done');
  });
});

const Routers = {
  businessRouter,
  userRouter,
  indexRouter: router,
};

export default Routers;
