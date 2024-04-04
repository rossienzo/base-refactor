import 'reflect-metadata';
import dotenv from 'dotenv';
import { DataSource, type DataSourceOptions } from 'typeorm';

dotenv.config({ path: './.env/.env' });

const options: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: process.env.NODE_ENV !== 'production',
    logging: false,
    entities: [`${__dirname}/../domain/entities/*.ts`],
    migrations: ['/migrations/*.ts']
};

const AppDataSource = new DataSource(options);

export default AppDataSource;
