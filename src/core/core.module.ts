import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { CoreController } from './core.controller';
import * as ormConfig from 'ormconfig';
import * as https from 'https';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      autoLoadEntities: true,
    }),
    HttpModule.register({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }),
  ],
  controllers: [CoreController],
})
export class CoreModule {}
