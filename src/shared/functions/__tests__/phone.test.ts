import { insertMaskInPhone, validatePhone } from '../phone';

const phone = '1188765433';
const phoneWithMask = '(11) 8876-5433';
const cellPhone = '11988765433';
const cellPhoneWithMask = '(11) 98876-5433';

describe('phone', () => {
  it('should insert mask in cell phone', () => {
    expect(cellPhoneWithMask).toEqual(insertMaskInPhone(cellPhone));
  });

  it('should insert mask in phone', () => {
    expect(phoneWithMask).toEqual(insertMaskInPhone(phone));
  });

  it('should return succes valid cell phone', () => {
    expect(true).toEqual(validatePhone(cellPhone));
    expect(true).toEqual(validatePhone(cellPhoneWithMask));
  });

  it('should return succes valid phone', () => {
    expect(true).toEqual(validatePhone(phone));
    expect(true).toEqual(validatePhone(phoneWithMask));
  });

  it('should return error in invalid phone', () => {
    expect(false).toEqual(validatePhone('876768'));
  });
});
