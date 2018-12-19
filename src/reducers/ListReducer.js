import {
  CREATE_TASK,
  READTE_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from './../constants/ActionTypes';

const initialState = {
  tasks: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case READTE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export default listReducer;
