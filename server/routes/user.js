import express from 'express';
const router = express.Router();

import UserController from '../controllers/user';

let { createUser, loginUser } = UserController;

router.post('/signup', createUser);

router.post('/login', loginUser);

export default router;
