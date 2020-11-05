import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoffeModule } from './coffe/coffe.module';

@Module({  
    imports : [CoffeModule],
    controllers: [],
    providers: [] 
  })
export class AppModule {}
