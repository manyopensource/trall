import {
  INCREMENT,
  CREATE_TASK
} from '../constants/ActionTypes';

export const increment = () => ({
  type: INCREMENT
});

export const createTask = task => ({
  type: CREATE_TASK,
  payload: task
});
