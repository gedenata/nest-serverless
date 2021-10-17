import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/core/modules/firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(private firebaseService: FirebaseService) {}

  // async userLogin(): Promise<void> {}

  // async adminLogin(): Promise<void> {}
}
