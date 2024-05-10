/* eslint-disable no-console */
import dotenv from 'dotenv';

import app from './config/app';
import AppDataSource from './config/database';

dotenv.config({ path: './.env/.env' });

AppDataSource.initialize()
    .then(async () => {
        await AppDataSource.runMigrations();
    })
    .then(async () => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
