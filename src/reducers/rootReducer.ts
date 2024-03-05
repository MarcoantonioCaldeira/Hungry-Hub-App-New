import { combineReducers } from 'redux';
import userReducer, { UserState } from './userReducer'; // Importe o tipo UserState do userReducer

const rootReducer = combineReducers({
    user: userReducer, // Renomeie de userReducer para user
});

export type RootState = {
    user: UserState; 
};

export default rootReducer;