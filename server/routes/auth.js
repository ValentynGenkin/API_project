import express from 'express';
import { createNewUser } from '../controllers/createNewUser.js';
import { login } from '../controllers/login.js';
import { logout } from '../controllers/logout.js';
import { authentication } from '../controllers/authentication.js';

const authRouter = express.Router();

authRouter.post('/registration', createNewUser);
authRouter.post('/login', login);
authRouter.get('/logout', logout);
authRouter.get('/authentication', authentication);

export default authRouter;
