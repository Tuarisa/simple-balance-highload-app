import umzug from './utils/migration.js';
import dotenv from 'dotenv';
import { startServer } from './server.js';

dotenv.config();

const APP_PORT = process.env.APP_PORT;

async function main() {
  try {
    await umzug.up();
    console.log('Migrations completed');

    startServer(APP_PORT);
  } catch (error) {
    console.error('Migration failed: ', error);
    process.exit(1);
  }
}

main();
