import type { Router } from 'express';
import { createGetUsers } from '../presentation/factories/get-users-factory';

export default (router: Router): void => {
    const path = '/';

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Retorna uma lista de usuários
     *     tags: [User]
     *     responses:
     *       200:
     *         description: Uma lista de usuários
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     */
    router.get(path, async (req, res) => createGetUsers().handle(req, res));
    // .handle só funciona caso wrapped numa função assíncrona. Caso contrário, a dependência é 'undefined'.
};
