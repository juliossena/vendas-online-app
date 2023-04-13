import { convertNumberToMoney } from '../money';

describe('money', () => {
  it('should return money', () => {
    const returnMoney = convertNumberToMoney(55);

    expect(returnMoney).toContain('R$');
    expect(returnMoney).toContain('55,00');
  });

  it('should return money with decimal', () => {
    const returnMoney = convertNumberToMoney(54.54);

    expect(returnMoney).toContain('R$');
    expect(returnMoney).toContain('54,54');
  });

  it('should return money with thousand', () => {
    const returnMoney = convertNumberToMoney(6456.54);

    expect(returnMoney).toContain('R$');
    expect(returnMoney).toContain('6.456,54');
  });
});
