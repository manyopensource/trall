import { combineReducers } from 'redux';
import users from './UserReducer';
import boards from './BoardReducer';
import lists from './ListReducer';
import tasks from './TaskReducer';
import comments from './CommentReducer';
import global from './GlobalReducer';

export default combineReducers({
  users,
  boards,
  lists,
  tasks,
  comments,
  global
});
