import { Request, Response } from 'express';

import { Controller } from '../helpers/controller';

export class LoginController implements Controller {
    // eslint-disable-next-line class-methods-use-this
    async handle(request: Request, response: Response): Promise<any> {
        response.status(400).send({ error: new Error('Email or password is incorrect') });
    }
}
