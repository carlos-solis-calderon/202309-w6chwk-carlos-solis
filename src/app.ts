import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { monumentsRouter } from './routes/monument.routes';

export const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static('public'));

app.use('/monuments', monumentsRouter);

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  console.log('Hola desde express');
});
