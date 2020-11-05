import { Controller, Get } from '@nestjs/common';
import { CoffeService } from './coffe.service';

@Controller('coffe')
export class CoffeController {
    constructor (private readonly coffeService : CoffeService){}

    @Get("index")
    getCoffe() : string{
        return "this is Coffe Controller";
    }
}
