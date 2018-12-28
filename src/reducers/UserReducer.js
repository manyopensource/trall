import {
  LOAD_INITIAL_DATA,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER
} from './../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      return action.payload.users;
    case CREATE_USER:
      return state.concat([action.payload]);;
    case UPDATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default reducer;
