import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll() : Movie[]{
        return this.movies;
    }

    getOne(id) : Movie{
        const movie = this.movies.find(movie=> movie.id === id);
        if(!movie){
            throw new NotFoundException('Not Found the movie id is '+id);
        }
        return movie;
    }

    crateMovie(data){
        this.movies.push({
            id : this.movies.length + 1,
            ...data        
        });
    }

    deleteOne(id:number){        
        this.getOne(id);
        this.movies = this.movies.filter(movie=> movie.id !== id);             
    }

    update(id, data : UpdateMovieDto){  
        const before = this.getOne(id);
        this.deleteOne(id);                
        this.movies.push({...before,...data});
    }
}

