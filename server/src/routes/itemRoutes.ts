import { Router } from 'express';
import { getItems } from '../controllers/itemController';

const itemRoutes = Router();

itemRoutes.get('/', getItems);

export default itemRoutes;
