import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CoffeesModule } from './coffees/coffees.module'
import { appConfig, envSchema } from './config'
import { PostgresConfigService } from './infrastructure/database/postgres'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [appConfig.KEY],
    }),
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
      validate: envSchema.parse,
      cache: true,
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
