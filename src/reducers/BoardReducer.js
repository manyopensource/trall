import {
  LOAD_INITIAL_DATA,
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD
} from './../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      return action.payload.boards;
    case CREATE_BOARD:
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
