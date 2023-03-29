import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Login from './modules/login';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
