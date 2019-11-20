import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './globalReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;