import { search, resetFacetValues } from './dataflows';

export const SETLOCALE = 'SETLOCALE';

export const setLocale = locale => dispatch => {
  dispatch(resetFacetValues());
  dispatch({ type: SETLOCALE, locale });
  dispatch(search());
};
