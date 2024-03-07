export interface UserState {
    id: number;
    email: string;
    telefone: string;
    nome: string;
    formaPagamento: {
        id: number;
        tipoPagamento: number;
        num_cartao: string;
        nomeImpresso: string;
        validadeCartao: string;
        cvvCartao: string;
        nome_Apelido: string;
        cpf_cnpj: string;
    };
    endereco: {
        id: number;
        cep: string;
        uf: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero_end: string;
        complemento: string;
    };
    senha: string;
}

export enum UserActionTypes {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGOUT = 'LOGOUT',
    // UPDATE_PART_1_DATA = 'UPDATE_PART_1_DATA',
    // UPDATE_PART_2_DATA = 'UPDATE_PART_2_DATA',
    // UPDATE_PART_3_DATA = 'UPDATE_PART_3_DATA',
    // SUBMIT_FORM = 'SUBMIT_FORM',
    // SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE'
}

export interface LoginSuccessAction {
    type: UserActionTypes.LOGIN_SUCCESS;
    payload: UserState;
}

export interface LogoutAction {
    type: UserActionTypes.LOGOUT;
}

export type UserAction = LoginSuccessAction | LogoutAction;


