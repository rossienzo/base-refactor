import { Request, Response } from 'express';
import Service from '../helpers/service';
import { Controller } from '../helpers/controller';

export default class GetUsersController implements Controller {
    constructor(private getUsersService: Service) {}

    async handle(req: Request, res: Response): Promise<any> {
        try {
            res.status(200).json(await this.getUsersService.execute());
        } catch (Error) {
            console.log(`<!> Error: ${Error}`);
            res.status(400).json({ error: Error });
        }
    }
}
