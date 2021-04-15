import {IsDefined, Min} from 'class-validator';

export class SetUserTesting {

    @IsDefined()
    userId?: number;

    @IsDefined()
    accessToken?: string;
}