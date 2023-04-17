import { AUTHORIZATION_KEY } from '../../../constants/authorizationConstants';
import { MenuUrl } from '../../../enums/MenuUrl.enum';
import { getItemStorage, removeItemStorage, setItemStorage } from '../../storageProxy';
import {
  getAuthorizationToken,
  logout,
  setAuthorizationToken,
  unsetAuthorizationToken,
} from '../auth';

jest.mock('../../storageProxy');

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve('mockReturn')),
  removeItem: jest.fn(() => Promise.resolve()),
}));

describe('auth', () => {
  it('should call removeItem in unsetAuthorizationToken', () => {
    unsetAuthorizationToken();

    expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
  });

  it('should call setItemStorage in setAuthorizationToken', async () => {
    const token = 'tokenMock';
    await setAuthorizationToken(token);

    expect(setItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY, token);
  });

  it('should call getItemStorage in getAuthorizationToken', async () => {
    await getAuthorizationToken();

    expect(getItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
  });

  it('should call logout', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigate: any = {
      reset: jest.fn(),
    };

    logout(navigate);

    expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    expect(navigate.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: MenuUrl.LOGIN }],
    });
  });
});
