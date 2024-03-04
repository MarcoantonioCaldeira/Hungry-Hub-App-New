import { UserState } from '../reducers/userReducer';

export const loginSuccess = (user: UserState) => ({
    type: 'LOGIN_SUCCESS' as const,
    payload: user,
});

export const logout = () => ({
    type: 'LOGOUT' as const,
}); 