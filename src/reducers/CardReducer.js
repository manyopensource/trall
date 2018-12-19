import {
  CREATE_TASK,
  READTE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  INIT_STATE
} from './../constants/ActionTypes';
import { initialState } from './../actions';

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_STATE:
      return action.payload.cards;
    case CREATE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    case READTE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    case UPDATE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    case DELETE_TASK:
      return { ...state, cards: [...state.cards, action.payload] };
    default:
      return state;
  }
};

export default cardReducer;
