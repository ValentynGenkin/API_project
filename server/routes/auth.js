import express from 'express';
import { createNewUser } from '../controllers/auth/createNewUser.js';
import { login } from '../controllers/auth/login.js';
import { logout } from '../controllers/auth/logout.js';
import { authentication } from '../controllers/auth/authentication.js';
import { deleteUser } from '../controllers/auth/deleteUser.js';
import { newApiKey } from '../controllers/auth/newApiKey.js';

const authRouter = express.Router();

authRouter.post('/registration', createNewUser);
authRouter.post('/login', login);
authRouter.get('/logout', logout);
authRouter.get('/authentication', authentication);
authRouter.get('/schema-authentication', authentication);
authRouter.get('/endpoint-authentication', authentication);
authRouter.get('/statistics-authentication', authentication);
authRouter.get('/account-authentication', authentication);
authRouter.post('/new-api-key', newApiKey);
authRouter.delete('/delete-user', deleteUser);

export default authRouter;
