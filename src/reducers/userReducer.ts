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
    senha: string
}

const initialState: UserState | null = null;

type Action = { type: 'LOGIN_SUCCESS'; payload: UserState } | { type: 'LOGOUT' };

const userReducer = (state: UserState | null = initialState, action: Action): UserState | null => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.payload;
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
