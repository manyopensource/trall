import {
  CREATE_TASK,
  READ_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.cards, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    case READ_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    case UPDATE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    case DELETE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    default:
      return state;
  }
};

export default reducer;
