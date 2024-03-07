import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


interface ThirdDataFormProps {
    data:{
        foto_Restaurante: string,
        nome_restaurante: string,
        descricao: string,
        especialidade: string,
       
    }
    showSuccessMessage:boolean
    onParte3Change: (parte3Data: Partial<ThirdDataFormProps['data']>) => void;

}


const ThirdDataForm: React.FC<ThirdDataFormProps> = ({ data, showSuccessMessage, onParte3Change }) => {
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onParte3Change({ [name]: value });
    };


    return (
        <div>
            <h2>Cadastro de restaurante Parte 3</h2>

            <input type="text" name="foto_Restaurante" value={data.foto_Restaurante} onChange={handleInputChange} placeholder="FOTO" />

            <input type="text" name="nome_restaurante" value={data.nome_restaurante} onChange={handleInputChange} placeholder="Nome do Restaurante" />

            <input type="text" name="descricao" value={data.descricao} onChange={handleInputChange} placeholder="Descrição" />

            <input type="text" name="especialidade" value={data.especialidade} onChange={handleInputChange} placeholder="Especialidade" />

        
            {showSuccessMessage && (
                <div className="success-message">Restaurante cadastrado com sucesso!</div>
            )}
         
        </div>
    )
}

export default ThirdDataForm;