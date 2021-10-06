import { FirebaseUserLoginGuard } from './firebase-user-login.guard';

describe('FirebaseUserLoginGuard', () => {
  it('should be defined', () => {
    expect(new FirebaseUserLoginGuard()).toBeDefined();
  });
});
