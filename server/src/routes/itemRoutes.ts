import { Router } from 'express';
import { getItems } from '../controllers/itemController';

const itemRoutes = Router();

itemRoutes.get('/', getItems);
// router.get("/:id", getItemById);
// router.post("/", createItem);
// router.put("/:id", updateItem);
// router.delete("/:id", deleteItem);

export default itemRoutes;
