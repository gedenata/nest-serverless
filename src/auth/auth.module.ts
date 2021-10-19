import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FirebaseService } from 'src/core/modules/firebase/firebase.service';

@Module({
  providers: [AuthService, FirebaseService],
  controllers: [AuthController],
})
export class AuthModule {}
