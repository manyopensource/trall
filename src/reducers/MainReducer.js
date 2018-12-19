import { combineReducers } from 'redux';
import cards from './CardReducer';
import lists from './ListReducer';

export default combineReducers({
  cards,
  lists
});
