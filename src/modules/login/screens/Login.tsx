import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
