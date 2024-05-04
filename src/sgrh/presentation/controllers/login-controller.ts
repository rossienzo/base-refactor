import { Controller, Request, Response } from '../helpers/controller';

export class LoginController implements Controller{
    async handle(request: Request): Promise<Response> {
        return {
            statusCode: 400,
            body: new Error('Email or password is incorrect')
        }
    }
}