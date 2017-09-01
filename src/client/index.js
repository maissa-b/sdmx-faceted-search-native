import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import { loadConfig } from './actions/config';
import params from '../params';
import App from './components/App';

const { search: { rows = 10 } } = params;

const initialState = {
  config: {
    currentLang: 'en',
  },
  intl: {
    language: 'en',
  },
  dataflows: [],
  facets: {},
  search: {
    start: 0,
    rows,
    searchValue: '',
  },
};

const store = configureStore(initialState);

store.dispatch(loadConfig());

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
