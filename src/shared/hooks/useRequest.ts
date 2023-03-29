import { useState } from 'react';

import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const { setUser } = useUserReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.18.152:8080/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha inválidos');
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
