import { UserState } from '../reducers/userReducer';

export const loginSuccess = (usuario: UserState) => ({
    type: 'LOGIN_SUCCESS' as const,
    payload: usuario,
});

export const logout = () => ({
    type: 'LOGOUT' as const,
}); 