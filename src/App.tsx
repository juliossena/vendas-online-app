import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Home from './modules/home';
import Login from './modules/login';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
