import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Event } from 'src/events'

import { CoffeesController } from './coffees.controller'
import { CoffeesService } from './coffees.service'
import coffeesConfig from './config/coffees.config'
import { Coffee, Flavor } from './entities'

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
