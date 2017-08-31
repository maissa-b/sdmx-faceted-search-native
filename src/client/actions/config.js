import { equals, find, propOr } from 'ramda';
import { requestJson } from '../utils';
import { setLocale } from './intl';
import { alert } from './message';

export const CONFIGLOADED = 'CONFIGLOADED';
export const configLoaded = ({ langs, defaultLang, facets, searchFields }) =>
  ({ type: CONFIGLOADED, langs, defaultLang, facets, searchFields });

export const loadConfig = () => (dispatch, getState) => requestJson({ method: 'get', url: '/api/config' })
.then((config) => {
  const { config: { currentLang } } = getState();
  const { defaultLang } = config;
  const language = find(equals(currentLang), propOr([], 'langs', config)) || defaultLang;
  dispatch(setLocale(language));
  dispatch(configLoaded(config));
})
.catch(() => dispatch(alert('Cannot load config')));
