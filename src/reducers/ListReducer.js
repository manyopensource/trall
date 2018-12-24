import {
  LOAD_INITIAL_DATA,
  CREATE_LIST,
  UPDATE_LIST,
  DELETE_LIST
} from './../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      return action.payload.lists;
    case CREATE_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case UPDATE_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case DELETE_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    default:
      return state;
  }
};

export default reducer;
