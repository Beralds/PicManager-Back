import express from 'express';
import cors from 'cors';

import { router } from './routes';

const server = express();
server.use(cors({
  origin: '*'
}));

server.use(router);

export { server };