import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = async (token: string) =>
  setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);
