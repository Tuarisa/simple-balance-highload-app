import express from 'express';
import bodyParser from 'body-parser';
import umzug from './utils/migration.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);

umzug
  .up()
  .then(() => {
    console.log('Migrations completed');

    // Запуск сервера
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Migration failed: ', error);
    process.exit(1);
  });
