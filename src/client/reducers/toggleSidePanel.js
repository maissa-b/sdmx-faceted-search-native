import { SHOWSIDEPANEL } from '../actions/toggleSidePanel';

const reducer = (state = false, action) => {
  switch (action.type) {
    case SHOWSIDEPANEL:
      return !state;
    default:
      return state;
  }
};

export default reducer;
