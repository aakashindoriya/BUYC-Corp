import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import carReducer from './reducers/oldcar.reducer';
import oemReducer from './reducers/oem.reducer';
import authReducer from './reducers/auth.reducer';


let root = combineReducers({
    car: carReducer,
    oem: oemReducer,
    auth: authReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);