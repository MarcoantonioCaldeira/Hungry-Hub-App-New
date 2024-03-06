import { combineReducers } from 'redux';
import userReducer, { UserState } from './userReducer'; 

const rootReducer = combineReducers({
    usuario: userReducer,
});

export type RootState = {
    usuario: UserState; 
};

export default rootReducer;