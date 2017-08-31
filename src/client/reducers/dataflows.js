import { DATAFLOWSLOADED } from '../actions/dataflows';

const reducer = (state = [], action) => {
  switch (action.type) {
    case DATAFLOWSLOADED:
      return action.dataflows;
    default:
      return state;
  }
};

export default reducer;
