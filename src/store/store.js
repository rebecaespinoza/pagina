import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import {AuthReducers} from '../reducers/AuthReducers';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: AuthReducers,
    ui:uiReducer
})

export const store = createStore(
    reducers,
    /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );