import express from 'express';
import { createNewUser } from '../controllers/createNewUser.js';

const authRouter = express.Router();

authRouter.post('/registration', createNewUser);

export default authRouter;
