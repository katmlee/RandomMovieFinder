
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigation from './components/AppNavigation';
import reducer from './redux';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
