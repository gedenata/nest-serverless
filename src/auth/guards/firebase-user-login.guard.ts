import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FirebaseUserLoginGuard extends AuthGuard('firebase-user-login') {}
