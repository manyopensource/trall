import {
  CREATE_LIST,
  READ_LIST,
  UPDATE_LIST,
  DELETE_LIST
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.lists, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case READ_LIST:
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
