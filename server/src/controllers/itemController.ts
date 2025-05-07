import { Request, Response, NextFunction } from 'express';
import { items, Item } from '../models/item';

export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(['test', 'test2']);
  } catch (error) {
    next(error);
  }
};

// other methods (createItems, deleteItems etc)
