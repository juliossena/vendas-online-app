import { removeSpecialCharacters } from './characters';

export const insertMaskInPhone = (phone: string) => {
  const noMask = removeSpecialCharacters(phone);
  return noMask
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(noMask.length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
};

export const validatePhone = (phone: string): boolean => {
  const noMask = removeSpecialCharacters(phone);
  return noMask.length === 11 || noMask.length === 10;
};
