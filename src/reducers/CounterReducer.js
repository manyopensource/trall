import { INCREMENT } from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.counter, action) => {
  if (action.type === INCREMENT) {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;
