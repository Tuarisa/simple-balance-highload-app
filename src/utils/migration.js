import { Umzug, SequelizeStorage } from 'umzug';
import sequelize from './sequelize.js';

const umzug = new Umzug({
  migrations: { glob: 'src/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console
});

export default umzug;
