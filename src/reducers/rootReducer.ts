// rootReducer.ts
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    usuario: userReducer,

});

export default rootReducer;
