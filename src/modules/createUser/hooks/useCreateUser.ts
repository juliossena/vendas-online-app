import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';

import { MethodEnum } from '../../../enums/methods.enum';
import { URL_USER } from '../../../shared/constants/urls';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CreateUserType } from '../../../shared/types/createUserType';

export const useCreateUser = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request, loading } = useRequest();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [createUser, setCreateUser] = useState<CreateUserType>({
    confirmPassword: '',
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (
      createUser.name !== '' &&
      createUser.phone !== '' &&
      createUser.email !== '' &&
      createUser.cpf !== '' &&
      createUser.password !== '' &&
      createUser.password === createUser.confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [createUser]);

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: createUser,
      message: 'Usuário cadastrado com sucesso!',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN }],
      });
    }
  };

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    let text = event.nativeEvent.text;
    switch (name) {
      case 'cpf':
        text = insertMaskInCpf(text);
        break;
      case 'phone':
        text = insertMaskInPhone(text);
        break;
      default:
        text = event.nativeEvent.text;
        break;
    }
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [name]: text,
    }));
  };

  return {
    createUser,
    loading,
    disabled,
    handleOnChangeInput,
    handleCreateUser,
  };
};
