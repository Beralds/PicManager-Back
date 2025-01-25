import { Router } from 'express';
import axios, { HttpStatusCode } from 'axios';

const router = Router();

router.get('/users', async (_, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    const processedData = response.data;
    res.status(HttpStatusCode.Ok).send(processedData);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch users' });
  }
});

router.get('/users/:userId/albums', async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.userId}/albums`);
    const processedData = response.data;
    res.status(HttpStatusCode.Ok).send(processedData);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch albums' });
  }
});

router.get('/photos', async (_, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const processedData = response.data;
    res.status(HttpStatusCode.Ok).send(processedData);
  } catch {
    res.status(HttpStatusCode.InternalServerError).send({ error: 'Failed to fetch photos' });
  }
});

export { router };