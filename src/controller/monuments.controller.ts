import { Request, Response } from 'express';
import { Monument } from '../model/monuments';

const data: Monument[] = [
  {
    id: 1,
    name: 'Roman theatre',
    age: '16-15 a. C',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Teatro_de_M%C3%A9rida%2C_Espa%C3%B1a%2C_2017_18.jpg',
  },
  {
    id: 2,
    name: 'Diana Temple',
    age: '20 d. C',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Templo_de_Diana_en_M%C3%A9rida.jpg',
  },
  {
    id: 3,
    name: 'Trajan Arc',
    age: '30 d. C',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Merida_Arco_de_Trajano.JPG/1200px-Merida_Arco_de_Trajano.JPG',
  },
  {
    id: 4,
    name: 'Aqueduct of the Miracles',
    age: '30 d. C',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/El_acueducto_de_Los_Milagros.jpg/220px-El_acueducto_de_Los_Milagros.jpg',
  },
];

export const getAll = (req: Request, res: Response) => {
  res.json(data);
};

export const getById = (req: Request, res: Response) => {
  const result = data.find((item) => item.id === Number(req.params.idMonument));
  res.json(result);
};

export const remove = (req: Request, res: Response) => {
  data.splice(
    data.findIndex((item) => item.id === Number(req.params.idMonument)),
    1
  );
  res.send({});
};

export const create = (req: Request, res: Response) => {
  const result = { ...req.body, id: data.length };
  data.push(result);
  res.json(result);
};

export const update = (req: Request, res: Response) => {
  const index = data.findIndex(
    (item) => item.id === Number(req.params.idMonument)
  );
  data[index] = {
    id: Number(req.params.idMonument),
    ...req.body,
  };

  res.json(data[index]);
};
