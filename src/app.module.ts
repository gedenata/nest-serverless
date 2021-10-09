import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
