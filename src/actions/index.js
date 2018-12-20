import {
  INCREMENT,
  CREATE_TASK
} from '../constants/ActionTypes';

export const increment = task => ({
  type: INCREMENT,
  payload: task
});

export const createTask = task => ({
  type: CREATE_TASK,
  payload: task
});
