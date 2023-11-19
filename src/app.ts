import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Lo que estamos viendo es una app montada con express, se utiliza para tener cadenas de middleware y gestionar las peticiones de GET, POST, PATCH y DELETE. Debemos verlo como un enrutador para regresar algo dependiendo de la petición.

// Esta app es una capa que está conectada a otra capa en donde están los puertos.

export const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static('public'));

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  console.log('Hola desde express');
});
