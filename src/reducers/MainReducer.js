import { combineReducers } from 'redux';
import users from './UserReducer';
import boards from './BoardReducer';
import lists from './ListReducer';
import cards from './CardReducer';
import comments from './CommentReducer';

export default combineReducers({
  users,
  boards,
  lists,
  cards,
  comments
});
