import express from 'express';
import { msg } from '@utils';

export const server = express();

server.get('/health', (req, res) => {
  return res.status(200).send(msg);
});