import { combineReducers } from 'redux';
import tasks from './CardReducer';
import lists from './ListReducer';

export default combineReducers({
  tasks,
  lists
})
