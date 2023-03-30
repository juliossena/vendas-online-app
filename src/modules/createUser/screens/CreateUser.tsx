import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  return (
    <CreateUserContainer>
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Nome completo:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Telefone:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Email:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="CPF:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Senha:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Confirmar senha:" />
      <Button margin="0px 0px 32px 0px" title="Criar usuário" />
    </CreateUserContainer>
  );
};

export default CreateUser;
