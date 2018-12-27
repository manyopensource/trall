import {
  LOAD_INITIAL_DATA,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from './../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      return action.payload.comments;
    case CREATE_COMMENT:
      return state.concat([action.payload]);
    case UPDATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case DELETE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};

export default reducer;
