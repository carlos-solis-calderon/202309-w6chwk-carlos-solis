import { Router as createRouter } from 'express';
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from '../controller/monuments.controller.js';

export const monumentsRouter = createRouter();

monumentsRouter.get('/', getAll);
monumentsRouter.get('/:id', getById);
monumentsRouter.post('/', create);
monumentsRouter.patch('/:id', update);
monumentsRouter.delete('/:id', remove);
