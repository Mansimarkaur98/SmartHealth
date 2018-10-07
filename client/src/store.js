import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const initialState = {};
let middleware = [thunk];
//
// const rootReducer = combineReducers({
//     reducers
// });

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;