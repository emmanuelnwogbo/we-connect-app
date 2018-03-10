import express from 'express';

import businessRouter from './business';
import userRouter from './user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello world');
});

router.get('*', (req, res) => {
  res.status(404).send({
    message: "this is not the page you're looking for",
  });
});

const Routers = {
  businessRouter,
  userRouter,
  indexRouter: router,
};

export default Routers;
