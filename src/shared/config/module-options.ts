import { ConfigModuleOptions } from '@nestjs/config';
import Joi from 'joi';
import configuration from './configuration';

export const configModuleOptions: ConfigModuleOptions = {
  envFilePath: '.env',
  load: [configuration],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    APP_PORT: Joi.number().default(3000),
    FIREBASE_DATABASE_URL: Joi.string().required(),
    FIREBASE_STORAGE_BUCKET: Joi.string().required(),
    FIREBASE_PRIVATE_KEY: Joi.string().required(),
    FIREBASE_WEB_API_KEY: Joi.string().required(),
  }),
};
