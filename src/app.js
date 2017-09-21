
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import AppNavigation from './components/AppNavigation';
import reducer from './redux';

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
