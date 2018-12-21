import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import mainReducer from './reducers/MainReducer';

const Store = createStore(mainReducer, devToolsEnhancer());

Store.subscribe(() => {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem('localState', JSON.stringify(Store.getState()));
  }
});

export default Store;
