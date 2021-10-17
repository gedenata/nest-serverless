import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as firebaseAdmin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(private configService: ConfigService) {
    const firebaseDatabaseURL = this.configService.get('FIREBASE_DATABASE_URL');
    const firebaseStorageBucket = this.configService.get(
      'FIREBASE_STORAGE_BUCKET',
    );

    if (firebaseAdmin.app.length) {
      firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(
          this.configService.get('firebase'),
        ),
        databaseURL: firebaseDatabaseURL,
        storageBucket: firebaseStorageBucket,
      });
    }
  }

  async Firestore(): Promise<firebaseAdmin.firestore.Firestore> {
    return firebaseAdmin.firestore();
  }

  async Storage(): Promise<firebaseAdmin.storage.Storage> {
    return firebaseAdmin.storage();
  }

  /**
   * Delete user in Firebase auth.
   * @param userId: string
   */
  async DeleteFirebaseUser(userId: string): Promise<void> {
    await firebaseAdmin.auth().deleteUser(userId);
  }
}
