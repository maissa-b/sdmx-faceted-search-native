import { cond, prop, T, identity, reduce, toPairs, omit, map } from 'ramda';
import { CONFIGLOADED } from '../actions/config';
import { DATAFLOWSLOADED, SEARCH, RESET_FACET_VALUES } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_FACET_VALUES:
      // return map(x => x.localized ? omit(['value'], x) : x, state);
      return map(cond([[prop('localized'), omit(['value'])], [T, identity]]), state);
    case SEARCH:
      if (!action.facets) return state;
      return reduce((acc, [name, value]) => ({ ...acc, [name]: { ...state[name], value } }), state, toPairs(action.facets));
    case CONFIGLOADED:
      return action.facets;
    case DATAFLOWSLOADED:
      return reduce((acc, [name, v]) => ({ ...acc, [name]: { ...state[name], buckets: v.buckets } }), state, toPairs(action.facets));
    default:
      return state;
  }
};

export default reducer;
