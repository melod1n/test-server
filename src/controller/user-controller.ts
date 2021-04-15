import {Action, Controller, Get, Param, UseAfter, UseBefore, UseInterceptor} from 'routing-controllers';
import 'reflect-metadata';
import {loggingAfter, loggingBefore} from '../middleware/middleware';


@UseBefore(loggingBefore)
@UseAfter(loggingAfter)
@Controller()
@UseInterceptor(function (action: Action, content: any) {
    console.log('change response...');
    return content;
})
export class UserController {
    @Get('/users/:id')
    getById(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }
}