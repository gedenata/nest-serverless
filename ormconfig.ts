import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const ormConfig: ConnectionOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrationsRun: true,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};

export = ormConfig;
