import { map, prop, merge } from 'ramda';
import { requestJson } from '../utils';
import { alert } from './message';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';
export const RESET_FACET_VALUES = 'RESET_FACET_VALUES';

export const resetFacetValues = () => ({
  type: RESET_FACET_VALUES,
});

const dataflowsLoaded = ({ dataflows = [], numFound, start, facets } = {}) => ({
  type: DATAFLOWSLOADED,
  dataflows,
  numFound,
  start,
  facets,
});

export const search = (params, start = 0) => (dispatch, getState) => {
  dispatch({ type: SEARCH, ...params });
  const { search: { rows, searchValue }, facets, intl: { locale } } = getState();
  const baseQuery = { search: searchValue, facets: map(prop('value'), facets) };
  const query = merge(params, baseQuery);
  const body = { ...query, start, rows, lang: locale };
  requestJson({ method: 'post', url: '/api/search', body })
  .then(data => dispatch(dataflowsLoaded(data)))
  .catch(() => dispatch(alert('Cannot search dataflows, check the server!')));
};
