import appConfig from 'src/config/app.config'

import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(appConfig.KEY)
    private appConfiguration: ConfigType<typeof appConfig>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      ...this.appConfiguration.database,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }
  }
}
