import express from 'express';
import { createSchema } from '../controllers/userSchema/createSchema.js';
import { createEndpoints } from '../controllers/userSchema/createEndpoints.js';
import { deleteSchema } from '../controllers/userSchema/deleteSchema.js';

const schemaRouter = express.Router();

schemaRouter.post('/create-schema', createSchema);
schemaRouter.post('/create-endpoints', createEndpoints);
schemaRouter.delete('/delete-api', deleteSchema);

export default schemaRouter;
