import express from 'express';
import { createSchema } from '../controllers/schema/createSchema.js';

const schemaRouter = express.Router();

schemaRouter.post('/create-schema', createSchema);

export default schemaRouter;
