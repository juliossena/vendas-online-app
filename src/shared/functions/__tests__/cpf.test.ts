import { insertMaskInCpf, validateCpf } from '../cpf';

const CPF_VALID = '94760362061';
const CPF_INVALID = '12345678900';
const CPF_INVALID2 = '00000000000';
const CPF_INVALID3 = '543534';
const CPF_WITH_MASK = '123.456.789-00';

describe('CPF', () => {
  it('should insert mask in cpf', () => {
    expect(CPF_WITH_MASK).toEqual(insertMaskInCpf(CPF_INVALID));
  });

  it('should invalid cpf', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID));
  });

  it('should invalid cpf in all zero', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID2));
  });

  it('should invalid cpf in lentth != 11', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID3));
  });

  it('should valid cpf', () => {
    expect(true).toEqual(validateCpf(CPF_VALID));
  });
});
