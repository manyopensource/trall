import {
  CREATE_USER,
  READ_USER,
  UPDATE_USER,
  DELETE_USER
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.users, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case READ_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default reducer;
