import {
  CREATE_TASK,
  READTE_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, lists: [...state.lists, action.payload] };
    case READTE_TASK:
      return { ...state, lists: [...state.lists, action.payload] };
    case UPDATE_TASK:
      return { ...state, lists: [...state.lists, action.payload] };
    case DELETE_TASK:
      return { ...state, lists: [...state.lists, action.payload] };
    default:
      return state;
  }
};

export default reducer;
