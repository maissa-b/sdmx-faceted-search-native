import { SEARCH, DATAFLOWSLOADED } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case DATAFLOWSLOADED:
      return {
        ...state,
        start: action.start,
        numFound: action.numFound,
      };
    case SEARCH:
      if ('search' in action) {
        return {
          ...state,
          searchValue: action.search,
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
