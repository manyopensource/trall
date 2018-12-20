import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import mainReducer from './reducers/MainReducer';
import data from './data';

const Store = createStore(mainReducer, data, devToolsEnhancer());

export default Store;
