import { useRef } from 'react';
import { TextInput } from 'react-native/types';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  const { createUser, disabled, loading, handleOnChangeInput, handleCreateUser } = useCreateUser();

  const phoneInput = useRef<TextInput>(null);
  const emailInput = useRef<TextInput>(null);
  const cpfInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const confirmPasswordInput = useRef<TextInput>(null);

  return (
    <CreateUserContainer>
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome completo:"
        onSubmitEditing={() => phoneInput?.current?.focus()}
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        type="cel-phone"
        title="Telefone:"
        ref={phoneInput}
        onSubmitEditing={() => emailInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
        ref={emailInput}
        onSubmitEditing={() => cpfInput?.current?.focus()}
        keyboardType="email-address"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        type="cpf"
        title="CPF:"
        ref={cpfInput}
        onSubmitEditing={() => passwordInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
        secureTextEntry
        ref={passwordInput}
        onSubmitEditing={() => confirmPasswordInput?.current?.focus()}
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar senha:"
        secureTextEntry
        ref={confirmPasswordInput}
        onSubmitEditing={handleCreateUser}
      />
      <Button
        disabled={disabled}
        onPress={handleCreateUser}
        loading={loading}
        margin="0px 0px 32px 0px"
        title="Criar usuário"
      />
    </CreateUserContainer>
  );
};

export default CreateUser;
