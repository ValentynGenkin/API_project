import express from 'express';
import { createSchema } from '../controllers/schema/createSchema.js';

const schemaRouter = express.Router();

schemaRouter.post('/create-schema', createSchema);
schemaRouter.post('/endpoints');

export default schemaRouter;
