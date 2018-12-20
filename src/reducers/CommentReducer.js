import {
  CREATE_COMMENT,
  READTE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from './../constants/ActionTypes';
import data from './../data';

const reducer = (state = data.comments, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case READTE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case UPDATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case DELETE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};

export default reducer;
