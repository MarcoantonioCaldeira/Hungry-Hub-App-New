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

const initialState: UserState = {
    id: 0,
    email: '',
    telefone: '',
    nome: '',
    formaPagamento: {
        id: 0,
        tipoPagamento: 0,
        num_cartao: '',
        nomeImpresso: '',
        validadeCartao: '',
        cvvCartao: '',
        nome_Apelido: '',
        cpf_cnpj: '',
    },
    endereco: {
        id: 0,
        cep: '',
        uf: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero_end: '',
        complemento: '',
    },
    senha: '',
};

type Action = { type: 'LOGIN_SUCCESS'; payload: UserState } | { type: 'LOGOUT' };

const userReducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, ...action.payload }; // Atualiza o estado com os dados do usuário logado
        case 'LOGOUT':
            return initialState; 
        default:
            return state;
    }
};

export default userReducer;

