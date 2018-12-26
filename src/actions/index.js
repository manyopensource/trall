import {
  LOAD_INITIAL_DATA,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  OPEN_CARD,
  CLOSE_CARD,
  UPDATE_LIST
} from '../constants/ActionTypes';

export const initData = data => ({
  type: LOAD_INITIAL_DATA,
  payload: data
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

export const openCard = id => ({
  type: OPEN_CARD,
  payload: id
});

export const closeCard = () => ({
  type: CLOSE_CARD
});

export const updateList = list => ({
  type: UPDATE_LIST,
  payload: list
});