export const convertNumberToMoney = (value: number) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};
