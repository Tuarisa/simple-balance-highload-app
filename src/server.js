import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

export function startServer(port) {
  const app = express();
  app.use(bodyParser.json());
  app.use('/user', userRoutes);

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
