import express from 'express';
import bodyParser from 'body-parser';
import umzug from './utils/migration.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const APP_PORT = process.env.APP_PORT

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);

umzug
  .up()
  .then(() => {
    console.log('Migrations completed');

    app.listen(APP_PORT, () => {
      console.log(`Server running on http://localhost:${APP_PORT}`);
    });
  })
  .catch((error) => {
    console.error('Migration failed: ', error);
    process.exit(1);
  });
