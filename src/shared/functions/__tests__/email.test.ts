import { validateEmail } from '../email';

describe('Email', () => {
  it('should error in invalid email', () => {
    expect(false).toEqual(validateEmail('fldkja.com.br'));
    expect(false).toEqual(validateEmail('fldkja@jose'));
    expect(false).toEqual(validateEmail('@jose.com'));
  });

  it('should success in valid email', () => {
    expect(true).toEqual(validateEmail('email@email.com'));
    expect(true).toEqual(validateEmail('email.fkjdlsa@email.com.br'));
  });
});
