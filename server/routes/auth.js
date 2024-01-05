import express from 'express';
import { createNewUser } from '../controllers/createNewUser.js';
import { login } from '../controllers/login.js';
import { logout } from '../controllers/logout.js';

const authRouter = express.Router();

authRouter.post('/registration', createNewUser);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

export default authRouter;
