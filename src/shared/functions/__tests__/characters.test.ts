import { removeSpecialCharacters } from '../characters';

describe('Characters', () => {
  it('should remove special characters', () => {
    const specialCharacters = 'jdlsa5643jkf.-fldks65436a$,lfkdj774s';

    expect('564365436774').toEqual(removeSpecialCharacters(specialCharacters));
  });
});
