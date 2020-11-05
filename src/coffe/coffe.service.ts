import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movie.entity';
import { TxMovie } from 'src/movies/entities/movie.tx.entity';

@Injectable()
export class CoffeService {
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

    update(id, data : TxMovie){  
        const before = this.getOne(id);
        this.deleteOne(id);                
        this.movies.push({...before,...data});
    }

}
