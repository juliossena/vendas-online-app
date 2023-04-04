/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateUser from './modules/createUser';
import Home from './modules/home';
import Login from './modules/login';
import Splash from './modules/splash';
import { Icon } from './shared/components/icon/Icon';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import { theme } from './shared/themes/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar usuário' }}
        />
      </Stack.Navigator>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Orders':
                iconName = 'cart';
                break;
              default:
                iconName = 'profile';
                break;
            }

            return <Icon size={16} name={iconName} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.mainTheme.primary,
          tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Home} options={{ title: 'Pedidos' }} />
        <Tab.Screen name="Settings" component={Home} options={{ title: 'Perfil' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
