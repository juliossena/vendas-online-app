import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import { logout } from '../../../shared/functions/connection/auth';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View>
      <Text>HOME</Text>
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </View>
  );
};

export default Home;
