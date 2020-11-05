import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
        constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(){
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id:number){                
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() data : CreateMovieDto){        
        return this.moviesService.crateMovie(data);
    }

    @Delete(":id")
    delete(@Param("id") id:number){
        return this.moviesService.deleteOne(id);
    }
    
    @Patch(":id")
    update(@Param("id") id:number, @Body() data : UpdateMovieDto){
        return this.moviesService.update(id,data);
    }
}