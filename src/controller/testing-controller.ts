import {Body, ContentType, Controller, Get, OnUndefined, Param, Post, QueryParams} from 'routing-controllers';
import 'reflect-metadata';
import {Database} from '../database/db';
import {SetUserTesting} from '../model/request/set-user-testing';
import {Utils} from '../utils/utils';
import {type} from 'os';

const database = new Database();
const utils = new Utils();

@Controller()
export class TestingController {

    @Get('/testing/:id')
    @ContentType('application/json')
    checkUserTesting(@Param('id') id: number) {
        if (!id) return utils.error(0, 'wrong type');
        const users = database.getTestUsers();

        const n = users.includes(id) ? 1 : 0;

        const json = JSON.parse(`{"in_testing": ${n}}`);

        return JSON.stringify(json);
    }

    @Get('/testing.add')
    @ContentType('application/json')
    setUserTesting(@QueryParams() params) {

        console.log(JSON.stringify(params));

        if (params.accessToken !== process.env.TOKEN) return utils.error(1, 'Wrong token');
        if (!params.userId) return utils.error(2);

        database.setUserTesting(params.userId);

        return {success: 1};
    }

}