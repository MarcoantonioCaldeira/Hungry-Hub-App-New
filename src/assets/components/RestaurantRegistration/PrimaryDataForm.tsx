import React from 'react';
import { Link } from 'react-router-dom';


interface PrimaryDataFormProps {
    data: {
        nome_proprietario: string;
        email: string;
        telefone_Restaurante: string;
        cnpj_cpf: string;
        senha: string;
        confirmarSenha: string;
    };
    onParte1Change: (parte1Data: Partial<PrimaryDataFormProps['data']>) => void;
}


const PrimaryDataForm: React.FC<PrimaryDataFormProps> = ({ data, onParte1Change }) =>  {
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        onParte1Change({ [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de restaurante Parte 1</h2>

            <input type="text" name="nome_proprietario" value={data.nome_proprietario} onChange={handleInputChange} placeholder="Nome do Proprietário" />

            <input type="text" name="email" value={data.email} onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="telefone_Restaurante" value={data.telefone_Restaurante}  onChange={handleInputChange} placeholder="Telefone" />

            <input type="text" name="cnpj_cpf" value={data.cnpj_cpf} onChange={handleInputChange} placeholder="CPF ou CNPJ" />

            <input type="text" name="senha" value={data.senha} onChange={handleInputChange} placeholder="Senha" />

            <input type="text" name="confirmarSenha" value={data.confirmarSenha} onChange={handleInputChange} placeholder="Confirmar Senha" />

            <Link to="/">retornar a página inicial</Link>

        </div>
    )
}

export default PrimaryDataForm;