import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FirebaseAdminLoginGuard extends AuthGuard(
  'firebase-admin-login',
) {}
