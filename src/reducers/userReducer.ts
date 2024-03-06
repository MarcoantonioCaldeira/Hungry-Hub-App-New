import { Reducer } from "redux";
import { UserAction, UserActionTypes, UserState } from "./types";



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

const userReducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
            return { ...state, ...action.payload };
        case UserActionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;

