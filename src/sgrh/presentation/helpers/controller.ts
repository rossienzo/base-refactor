export type Request = {
    body?: any;
}

export type Response = {
    statusCode: number;
    body: any;
}

export interface Controller {
    handle(request: Request): Promise<Response>;
}