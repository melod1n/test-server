import {Body, ContentType, Controller, Get, Param, Post, QueryParams} from 'routing-controllers';
import 'reflect-metadata';
import {Database} from '../database/database';
import {Utils} from '../utils/utils';

const database = new Database();
const utils = new Utils();

@Controller()
export class TestingController {

    @Get('/testing.check')
    @ContentType('application/json')
    checkUserTesting(@QueryParams() params) {
        const userId = utils.requireNumber('userId', params.userId);
        if (typeof userId !== 'number') return userId;

        const users = database.getTestUsers();

        return {inTesting: users.includes(<number>userId)};
    }

    @Get('/testing.add')
    @ContentType('application/json')
    setUserTesting(@QueryParams() params) {
        const userId = utils.requireNumber('userId', params.userId);
        if (typeof userId !== 'number') return userId;

        if (params.access_token !== process.env.TOKEN) return utils.error(1, 'Wrong token');

        database.setUserTesting(<number>userId);

        return {success: 1};
    }

}