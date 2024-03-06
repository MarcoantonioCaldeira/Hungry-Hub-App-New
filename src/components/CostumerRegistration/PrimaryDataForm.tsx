import React from 'react';
import { Link } from 'react-router-dom';


interface PrimaryDataFormProps {
    data: {
        nome: string,
        email: string,
        telefone: string,
        senha: string,
        confirmarSenha: string,
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
            <h2>Vamos criar uma Conta</h2>

            <input type="text" name="nome" value={data.nome} onChange={handleInputChange} placeholder="Nome do Proprietário" />

            <input type="text" name="email" value={data.email} onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="telefone" value={data.telefone}  onChange={handleInputChange} placeholder="Telefone" />

            <input type="text" name="senha" value={data.senha} onChange={handleInputChange} placeholder="Senha" />

            <input type="text" name="confirmarSenha" value={data.confirmarSenha} onChange={handleInputChange} placeholder="Confirmar Senha" />

            <Link to="/">retornar a página inicial</Link>

        </div>
    )
}

export default PrimaryDataForm;