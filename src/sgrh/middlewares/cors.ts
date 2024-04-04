import type { NextFunction, Request, Response } from 'express';

/**
 * Middleware para configurar o CORS, para o compartilhamento de recursos entre origens diferentes.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns void
 */
export const cors = (req: Request, res: Response, next: NextFunction): void => {
    // Configuração do CORS para permitir qualquer origem
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
