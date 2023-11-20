import { Request, Response } from 'express';
import fs from 'fs';

const dataFilePath = './api/db.json';
let monuments: any[] = [];

try {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  monuments = JSON.parse(rawData).Monuments || [];
} catch (error) {
  console.error('Error al leer el archivo db.json:', error);
}

export const getAll = (_req: Request, res: Response) => {
  res.json(monuments);
};

export const getById = (req: Request, res: Response) => {
  const result = monuments.find((item) => item.id === Number(req.params.id));
  res.json(result);
};

export const create = (req: Request, res: Response) => {
  const result = { ...req.body, id: monuments.length + 1 };
  monuments.push(result);
  res.json(result);
};

export const update = (req: Request, res: Response) => {
  let result = monuments.find(
    (item) => Number(item.id) === Number(req.params.id)
  );
  result = { ...result, ...req.body };
  monuments[monuments.findIndex((item) => item.id === Number(req.params.id))] =
    result!;
  res.json(result);
};

export const remove = (req: Request, res: Response) => {
  monuments.splice(
    monuments.findIndex((item) => item.id === Number(req.params.id)),
    1
  );
  res.json({});
};
