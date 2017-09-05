import { combineReducers } from 'redux';
import search from './search';
import dataflows from './dataflows';
import intl from './intl';
import message from './message';
import config from './config';
import facets from './facets';
import toggleSidePanel from './toggleSidePanel';

const reducer = combineReducers({
  toggleSidePanel,
  search,
  dataflows,
  intl,
  message,
  config,
  facets,
});

export default reducer;
