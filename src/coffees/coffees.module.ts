import { Event } from 'src/events'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CoffeesController } from './coffees.controller'
import { CoffeesService } from './coffees.service'
import { Coffee, Flavor } from './entities'

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
