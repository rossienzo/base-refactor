import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

import 'reflect-metadata';

dotenv.config();

dotenv.config({ path: './.env/.env' });

const options: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: process.env.NODE_ENV !== 'production',
    password: process.env.DB_PASSWORD,
    logging: false,
    // entities: [`${__dirname}/../domain/entities/*.entity.ts`],
    entities: [`${process.cwd()}/src/sgrh/domain/entities/*.entity.ts`],
    migrations: ['/migrations/*.ts']
};

const AppDataSource = new DataSource(options);

export default AppDataSource;
