import {
  CREATE_TASK,
  READ_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.lists, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, lists: [...state.lists, action.payload] };
    case READ_TASK:
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
