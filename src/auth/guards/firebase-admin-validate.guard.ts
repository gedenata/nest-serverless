import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FirebaseAdminValidateGuard extends AuthGuard(
  'firebase-admin-validate',
) {}
