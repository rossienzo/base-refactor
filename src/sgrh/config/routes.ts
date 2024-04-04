import { Router, type Express } from 'express';
import fs from 'fs';
import path from 'path';

export default (app: Express): void => {
    const router = Router();
    app.use('/api', router);

    const dirPath = path.join(__dirname, '..', 'routes');

    // Importa automaticamente os arquivos de /routes
    Promise.all(
        fs.readdirSync(dirPath).map(async (file) => {
            if (!file.endsWith('.routes')) {
                (await import(`../routes/${file}`)).default(router);
            }
        })
    );
};
