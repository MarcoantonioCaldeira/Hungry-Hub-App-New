import { UserState } from "./types";


export const loginSuccess = (usuario: UserState) => ({
    type: 'LOGIN_SUCCESS' as const,
    payload: usuario,
});

export const logout = () => ({
    type: 'LOGOUT' as const,
}); 