import { Request, Response } from 'express';

/*
export type Request = {
    body?: any;
};

export type Response = {
    statusCode: number;
    body: any;
};
*/

export interface Controller {
    handle(req: Request, res: Response): Promise<any>;
}
