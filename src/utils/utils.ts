import {app} from '../index';
import {GlobalErrorHandler} from '../middleware/global-error-handler';

const errorHandler = new GlobalErrorHandler();

export class Utils {
    json(params: any) {
        const a = app.response.json(params);
        return a;
    }

    error(code: number, message?: string) {
        return errorHandler.error({code: code, message: message});
    }
}

