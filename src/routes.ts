import { FastifyInstance } from 'fastify';

const axios = require('axios')

export async function routes (app: FastifyInstance) {
  app.get('/users', async (req, res) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
      const processedData = response.data;
      res.send(processedData);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch users' });
    }
  });

  app.get('/users/:userId/albums', async (req, res) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.userId}/albums`);
      const processedData = response.data;
      res.send(processedData);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch users' });
    }
  });

  app.get('/photos', async (req, res) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      const processedData = response.data;
      res.send(processedData);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch photos' });
    }
  });

}