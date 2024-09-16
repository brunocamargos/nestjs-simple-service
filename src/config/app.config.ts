import { z } from 'zod'

import { registerAs } from '@nestjs/config'

export const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3000),
  NODE_ENV: z.string().optional().default('development'),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
})

const appConfigSchema = envSchema.transform((envVars) => ({
  environment: envVars.NODE_ENV,
  database: {
    host: envVars.DATABASE_HOST,
    port: envVars.DATABASE_PORT,
    username: envVars.DATABASE_USER,
    password: envVars.DATABASE_PASSWORD,
    database: envVars.DATABASE_NAME,
  },
}))

export type AppConfig = z.infer<typeof appConfigSchema>

export const appConfig = registerAs(
  'appConfig',
  (): AppConfig => appConfigSchema.parse(process.env),
)
