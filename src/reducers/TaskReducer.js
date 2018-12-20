import {
  CREATE_TASK,
  READ_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.tasks, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return state.concat([action.payload]);
    case READ_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export default reducer;
