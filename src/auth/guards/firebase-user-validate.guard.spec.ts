import { FirebaseUserValidateGuard } from './firebase-user-validate.guard';

describe('FirebaseUserValidateGuard', () => {
  it('should be defined', () => {
    expect(new FirebaseUserValidateGuard()).toBeDefined();
  });
});
