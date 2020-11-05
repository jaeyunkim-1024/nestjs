import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { CoffeController } from './coffe.controller';
import { CoffeService } from './coffe.service';

@Module({  
  imports : [AppModule],
  controllers: [CoffeController],
  providers: [CoffeService] 
})
export class CoffeModule {}
