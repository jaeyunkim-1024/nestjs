import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { TxMovie } from './entities/movie.tx.entity';

@Injectable()
export class MovieService {
    private movies : Movie[] = [];

    getAll() : Movie[]{
        return this.movies;
    }

    getOne(id:number) : Movie{           
        const movie = this.movies.find(movie=> movie.id === id);
        if(!movie){
            throw new NotFoundException('Not Found the movie id is '+id);
        }
        return movie;
    }

    crateMovie(data:TxMovie){
        let insertMovie:Movie = JSON.parse(JSON.stringify(data));        
        this.movies.push({
            id : this.movies.length + 1,
            ...insertMovie        
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
