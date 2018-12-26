import { OPEN_CARD, CLOSE_CARD } from './../constants/ActionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_CARD:
      return { ...state, openTaskId: action.payload };
    case CLOSE_CARD:
      return { ...state, openTaskId: null };
    default:
      return state;
  }
};

export default reducer;
