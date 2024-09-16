import { DataSource } from 'typeorm'

import { Coffee, Flavor } from 'src/coffees/entities'

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: ['./dist/src/migrations/*'],
})
