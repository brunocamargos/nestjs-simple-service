import { Event } from 'src/events'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CoffeesController } from './coffees.controller'
import { CoffeesService } from './coffees.service'
import { Coffee, Flavor } from './entities'

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
