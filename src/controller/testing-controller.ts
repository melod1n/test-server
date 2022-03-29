import {ContentType, Controller, Get} from 'routing-controllers';
import 'reflect-metadata';

@Controller()
export class TestingController {

    @Get('/build.starting')
    @ContentType('application/json')
    buildStarting() {
        console.log('Build started');
        return 'started';
    }

    @Get('/build.success')
    @ContentType('application/json')
    buildSuccess() {
        console.log('Build succeed');
        return 'succeed';
    }

    @Get('/build.error')
    @ContentType('application/json')
    buildError() {
        console.log('Build error');
        return 'error';
    }

    // @Get('/testing.check')
    // @ContentType('application/json')
    // checkUserTesting(@QueryParams() params) {
    //     const userId = utils.requireNumber('userId', params.userId);
    //     if (typeof userId !== 'number') return userId;
    //
    //     const users = database.getTestUsers();
    //
    //     return {inTesting: users.includes(<number>userId)};
    // }
    //
    // @Get('/testing.add')
    // @ContentType('application/json')
    // setUserTesting(@QueryParams() params) {
    //     const userId = utils.requireNumber('userId', params.userId);
    //     if (typeof userId !== 'number') return userId;
    //
    //     if (params.access_token !== process.env.TOKEN) return utils.error(1, 'Wrong token');
    //
    //     database.setUserTesting(<number>userId);
    //
    //     return {success: 1};
    // }

}