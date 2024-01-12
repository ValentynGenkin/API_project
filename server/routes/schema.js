import express from 'express';
import { createSchema } from '../controllers/userSchema/createSchema.js';
import { createEndpoints } from '../controllers/userSchema/createEndpoints.js';

const schemaRouter = express.Router();

schemaRouter.post('/create-schema', createSchema);
schemaRouter.post('/endpoints', createEndpoints);

export default schemaRouter;
