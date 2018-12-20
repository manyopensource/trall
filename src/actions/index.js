import { CREATE_TASK } from '../constants/ActionTypes';

export const addTask = task => ({
  type: CREATE_TASK,
  payload: task
});
