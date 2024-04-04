import type { Router } from 'express';

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
    router.get(path, (req, res) => {
        res.send('Hello, World!');
    });
};
