import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { MenuUrl } from '../../enums/MenuUrl.enum';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = async (token: string) =>
  setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);

export const logout = (navigate: NavigationProp<ParamListBase>) => {
  unsetAuthorizationToken();
  navigate.reset({
    index: 0,
    routes: [{ name: MenuUrl.LOGIN }],
  });
};
