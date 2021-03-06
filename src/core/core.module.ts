import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
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
})
export class CoreModule {}
