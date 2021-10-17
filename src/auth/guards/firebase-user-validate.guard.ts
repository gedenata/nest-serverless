import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FirebaseUserValidateGuard extends AuthGuard(
  'firebase-user-validate',
) {}
