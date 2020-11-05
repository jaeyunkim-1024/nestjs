import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoffeModule } from './coffe/coffe.module';
import { MoviesModule } from './movies/movies.module';

@Module({  
    imports : [MoviesModule,CoffeModule],
    controllers: [AppController],
    providers: [] 
  })
export class AppModule {}
