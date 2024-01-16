import express from 'express';
import { addItem } from '../controllers/usersCollections/addItem.js';
import { getItems } from '../controllers/usersCollections/getItems.js';
import { deleteItem } from '../controllers/usersCollections/deleteItemById.js';

const usersRouter = express.Router();

usersRouter.post('/:endpoint/add', addItem);
usersRouter.get('/:endpoint/get', getItems); // ...get/?id=xxx

// usersRouter.put('/:endpoint/update/:id', updateItemById);
usersRouter.delete('/:endpoint/delete/', deleteItem); // ...delete/?id=xxx

export default usersRouter;
