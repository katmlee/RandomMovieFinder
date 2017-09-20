
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppNavigation from './components/AppNavigation';
import reducer from './redux';

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
