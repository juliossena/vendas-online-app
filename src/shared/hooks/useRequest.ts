import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { MenuUrl } from '../enums/MenuUrl.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.18.152:8080/auth', body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos',
        });
      });
    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
