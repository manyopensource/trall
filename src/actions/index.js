import {
  LOAD_INITIAL_DATA,
  INCREMENT,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  OPEN_CARD,
  CLOSE_CARD
} from '../constants/ActionTypes';

export const initData = data => ({
  type: LOAD_INITIAL_DATA,
  payload: data
});

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

export const openCard = () => ({
  type: OPEN_CARD
});

export const closeCard = () => ({
  type: CLOSE_CARD
});
