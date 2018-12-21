import { OPEN_TASK } from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.global, action) => {
  switch (action.type) {
    case OPEN_TASK:
      return { ...state, isOpenTask: true };
    default:
      return state;
  }
};

export default reducer;
