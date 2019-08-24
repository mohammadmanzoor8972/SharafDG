import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, {initialState} from '../reducers';

const middlewares = [thunk];

export const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middlewares));
