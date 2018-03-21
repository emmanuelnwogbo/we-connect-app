import express from 'express';
const router = express.Router();

import UserController from '../controllers/user.controller';

const {postUser, loginUser} = UserController;

router.post('/signup', );

router.post('/login', );

export default router;
