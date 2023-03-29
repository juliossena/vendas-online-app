import { Provider } from 'react-redux';

import Navigation from './Navigation';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <Navigation />
    </Provider>
  );
};

export default App;
