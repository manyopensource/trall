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
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    case DELETE_TASK:
      return state.filter(row => row.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
