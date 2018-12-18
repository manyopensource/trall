import { ADD_CARD } from './../constants/action-types';

export const addCard = task => ({
  type: ADD_CARD,
  payload: task
});
