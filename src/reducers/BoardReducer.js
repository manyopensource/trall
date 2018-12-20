import {
  CREATE_BOARD,
  READ_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.boards, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case READ_BOARD:
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
