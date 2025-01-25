import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { UsersProvider } from './../../services/providers/users';

export const getAll = async (_: Request, res: Response) => {
  try {
    const users = await UsersProvider.getAll();
    res.status(HttpStatusCode.Ok).send(users);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch users' });
  }
};

export const getAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await UsersProvider.getAlbums(req.params.userId);
    res.status(HttpStatusCode.Ok).send(albums);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch albums' });
  }
};
