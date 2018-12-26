import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import mainReducer from './reducers/MainReducer';

const Store = createStore(mainReducer, devToolsEnhancer());

Store.subscribe(() => {
  if (typeof Storage !== 'undefined') {
    const { global, ...state} = Store.getState();
    window.localStorage.setItem('localState', JSON.stringify(state));
  }
});

export default Store;
