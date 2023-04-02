import { removeSpecialCharacters } from './characters';

export const insertMaskInCpf = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export function validateCpf(cpf: string): boolean {
  const strCPF = removeSpecialCharacters(cpf);
  let sum;
  let rest;
  sum = 0;

  if (strCPF.length !== 11) {
    return false;
  }

  if (strCPF === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  }
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  return rest === parseInt(strCPF.substring(10, 11), 10);
}
