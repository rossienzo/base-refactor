import express from 'express';
import setupMiddlewares from './middlewares';
import routes from './routes';
import swagger from './swagger';

const app = express();
swagger(app);
setupMiddlewares(app);
routes(app);

export default app;
