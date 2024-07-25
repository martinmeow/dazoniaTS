import express, { Router } from 'express';
import { join } from 'node:path';

const app = express();

const apiRouter = Router();

apiRouter.get('/time', (req, res) => {
  res.type('text/plain').send(new Date().toLocaleTimeString());
});

apiRouter.get('/person', (req, res) => {
  res.json({ name: 'martin', age: '25' });
});

app.use('/api', apiRouter);

app.use(express.static(join(__dirname, '..', 'frontend', 'dist', 'spa')));

const server = app.listen(8000, () => {
  console.info('Server listening on', server.address());
});
