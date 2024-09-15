import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CoffeesModule } from './coffees/coffees.module'
import appConfig from './config/app.config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(appConfig)],
      useFactory: (appConfiguration: ConfigType<typeof appConfig>) => {
        console.log(appConfiguration.database)
        return {
          type: 'postgres',
          // host: configService.get<string>('database.host'),
          // port: configService.get<number>('database.port'),
          // username: configService.get<string>('database.username'),
          // password: configService.get<string>('database.password'),
          // database: configService.get<string>('database.database'),
          ...appConfiguration.database,
          autoLoadEntities: true,
          synchronize: true,
        }
      },
      inject: [appConfig.KEY],
    }),
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
