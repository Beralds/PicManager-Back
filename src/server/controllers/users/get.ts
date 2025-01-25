import axios, { HttpStatusCode } from 'axios';
import { Request, Response } from 'express'

export const getAll = async (_: Request, res: Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    const processedData = response.data;
    res.status(HttpStatusCode.Ok).send(processedData);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch users' });
  }
};

export const getAlbums = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.userId}/albums`);
    const processedData = response.data;
    res.status(HttpStatusCode.Ok).send(processedData);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch albums' });
  }
};
