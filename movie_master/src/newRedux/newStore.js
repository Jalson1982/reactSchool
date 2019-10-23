import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './globalReducer';

export const API_KEY = "43960ac18720b2eb52c3207132d1a80c";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store