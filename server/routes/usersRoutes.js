import express from 'express';
import { addItem } from '../controllers/usersCollections/addItem.js';
import { getAllItems } from '../controllers/usersCollections/getAllItems.js';

const usersRouter = express.Router();

usersRouter.post('/:endpoint/add', addItem);
// usersRouter.get('/:endpoint/get/:id', getOneItem);
usersRouter.get('/:endpoint/get', getAllItems);
// usersRouter.put('/:endpoint/update/:id', updateItemById);
// usersRouter.delete('/:endpoint/delete/:id', deleteItemById);

export default usersRouter;
