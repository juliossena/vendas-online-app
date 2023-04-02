export const removeSpecialCharacters = (value: string) => {
  return value.replace(/\D/g, '');
};
