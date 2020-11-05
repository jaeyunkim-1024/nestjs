import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TxMovie } from '../movies/entities/movie.tx.entity';
import { CoffeService } from './coffe.service';

@Controller('movies')
export class CoffeController {
    constructor(private readonly coffeService : CoffeService){}
    
    @Get()
    getAll(){
        return this.coffeService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id:number){                
        return this.coffeService.getOne(id);
    }

    @Post()
    create(@Body() data : TxMovie){        
        return this.coffeService.crateMovie(data);
    }

    @Delete(":id")
    delete(@Param("id") id:number){
        return this.coffeService.deleteOne(id);
    }
    
    @Patch(":id")
    update(@Param("id") id:number, @Body() data : TxMovie){
        return this.coffeService.update(id,data);
    }
}
