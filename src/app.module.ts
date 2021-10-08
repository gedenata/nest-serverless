import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoreController } from './core/core.controller';
import { CoreModule } from './core/core.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), CoreModule],
  controllers: [AppController, CoreController],
  providers: [AppService],
})
export class AppModule {}
