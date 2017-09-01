import { CONFIGLOADED } from '../actions/config';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGLOADED:
      return {
        ...state,
        langs: action.langs,
        defaultLang: action.defaultLang,
        searchFields: action.searchFields,
      };
    default:
      return state;
  }
};

export default reducer;
