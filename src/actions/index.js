import {
  INCREMENT,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from '../constants/ActionTypes';

export const increment = () => ({
  type: INCREMENT
});

export const createTask = task => ({
  type: CREATE_TASK,
  payload: task
});

export const updateTask = task => ({
  type: UPDATE_TASK,
  payload: task
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
});
