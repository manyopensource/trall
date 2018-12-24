import {
  LOAD_INITIAL_DATA,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from './../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      return action.payload.tasks;
    case CREATE_TASK:
      return state.concat([action.payload]);
    case UPDATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return state.filter(row => row.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
