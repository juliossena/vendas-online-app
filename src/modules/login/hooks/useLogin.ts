import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { useRequest } from '../../../shared/hooks/useRequest';

export const useLogin = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();

  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleGoToCreateUser = () => {
    navigate(MenuUrl.CREATE_USER);
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleGoToCreateUser,
  };
};
