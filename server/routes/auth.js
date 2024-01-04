import express from 'express';
import { createNewUser } from '../controllers/createNewUser.js';
import { login } from '../controllers/login.js';

const authRouter = express.Router();

authRouter.post('/registration', createNewUser);
authRouter.post('/login', login);

export default authRouter;
