import express, {Express} from 'express';
import log4js from 'log4js';
import env from 'dotenv';

import {createExpressServer, useExpressServer} from 'routing-controllers';
import {UserController} from './controller/user-controller';
import {TestingController} from './controller/testing-controller';
import bodyParser from 'body-parser';
import httpContext from 'express-http-context';
import {GlobalErrorHandler} from './middleware/global-error-handler';

env.config();

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

const port = process.env.PORT;

export const app: Express = express();
app.use(bodyParser.json());
app.use(httpContext.middleware);

useExpressServer(app, {
    controllers: [UserController, TestingController],
    middlewares: [GlobalErrorHandler],
    defaultErrorHandler: false
});

// app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    httpContext.ns.bindEmitter(req);
    httpContext.ns.bindEmitter(res);
});

app.listen(port, () => console.log(`Running on port ${port}`));
