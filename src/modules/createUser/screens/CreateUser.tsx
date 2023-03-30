import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  const { createUser, loading, handleOnChangeInput, handleCreateUser } = useCreateUser();

  return (
    <CreateUserContainer>
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome completo:"
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="CPF:"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar senha:"
      />
      <Button
        onPress={handleCreateUser}
        loading={loading}
        margin="0px 0px 32px 0px"
        title="Criar usuário"
      />
    </CreateUserContainer>
  );
};

export default CreateUser;
