import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TxMovie } from './entities/movie.tx.entity';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService : MovieService){}
    
    @Get()
    getAll(){
        return this.movieService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id:number){                
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() data : TxMovie){        
        return this.movieService.crateMovie(data);
    }

    @Delete(":id")
    delete(@Param("id") id:number){
        return this.movieService.deleteOne(id);
    }
    
    @Patch(":id")
    update(@Param("id") id:number, @Body() data : TxMovie){
        return this.movieService.update(id,data);
    }
}
