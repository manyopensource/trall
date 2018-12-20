import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import mainReducer from './reducers/MainReducer';

const Store = createStore(mainReducer, devToolsEnhancer());

export default Store;
