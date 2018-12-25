import { OPEN_CARD, CLOSE_CARD } from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.global, action) => {
  switch (action.type) {
    case OPEN_CARD:
      return { ...state, openTaskId: action.payload, isOpenTask: true };
    case CLOSE_CARD:
      return { ...state, isOpenTask: false };
    default:
      return state;
  }
};

export default reducer;
