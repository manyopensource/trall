import { ADD_CARD } from './../constants/action-types';

const initialState = {
  tasks: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            // state.tasks.push(action.payload);
            return {...state, tasks: [...state.tasks, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;
