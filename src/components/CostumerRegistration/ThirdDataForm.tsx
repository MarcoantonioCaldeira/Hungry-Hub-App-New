import React from 'react';
import { Link } from 'react-router-dom';

interface ThirdDataFormProps {
    data:{
        tipo_pagamento: string,
        num_cartao: string,
        nomeImpresso: string,
        validadeCartao: string,
        cvvCartao: string,
        nome_Apelido: string,
        cpf_cnpj: string

    }
    showSuccessMessage:boolean
    onParte3Change: (parte3Data: Partial<ThirdDataFormProps['data']>) => void;
}


const ThirdDataForm: React.FC<ThirdDataFormProps> = ({ data, showSuccessMessage, onParte3Change }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onParte3Change({ [name]: value });
    };

    return (
        <div>
            <h2>Adicione um metodo de pagamento</h2>

            <input type="text" name="tipo_pagamento" value={data.tipo_pagamento} onChange={handleInputChange} placeholder="Debito ou Credito" />

            <input type="text" name="num_cartao" value={data.num_cartao} onChange={handleInputChange} placeholder="Numero do Cartão" />

            <input type="text" name="nomeImpresso" value={data.nomeImpresso} onChange={handleInputChange} placeholder="Nome Impresso" />

            <input type="text" name="validadeCartao" value={data.validadeCartao} onChange={handleInputChange} placeholder="Data de Validade" />

            <input type="text" name="cvvCartao" value={data.cvvCartao} onChange={handleInputChange} placeholder="CVV" />

            <input type="text" name="nome_Apelido" value={data.nome_Apelido} onChange={handleInputChange} placeholder="Apelido para o Cartão" />
        
            <input type="text" name="cpf_cnpj" value={data.cpf_cnpj} onChange={handleInputChange} placeholder="Seu CPF" />

            {showSuccessMessage && (
                <div className="success-message">Cadastro feito com sucesso!!!</div>
            )}
         
        </div>
    )
}

export default ThirdDataForm;