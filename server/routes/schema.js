import express from 'express';
import { createSchema } from '../controllers/schema/createSchema.js';
import { createEndpoints } from '../controllers/schema/createEndpoints.js';

const schemaRouter = express.Router();

schemaRouter.post('/create-schema', createSchema);
schemaRouter.post('/endpoints', createEndpoints);

export default schemaRouter;
