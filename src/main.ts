import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './core/modules/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(new AppLogger());
  const configService = app.get(ConfigService);
  const port = configService.get('API_PORT');

  await app.listen(port);
}
bootstrap();
