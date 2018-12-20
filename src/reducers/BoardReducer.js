import {
  CREATE_BOARD,
  READTE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case READTE_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case UPDATE_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case DELETE_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    default:
      return state;
  }
};

export default reducer;
