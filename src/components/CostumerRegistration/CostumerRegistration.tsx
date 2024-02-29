import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const CostumerRegistration = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleFormSubmit = async (event:any) => {
        event.preventDefault();
    
        const DadosFormulario = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
            confirmarSenha: confirmarSenha,
        };
    
        try {
            const API_URL = 'http://localhost:5050';
            const resposta = await axios.post(API_URL + '/rest/cliente/save', DadosFormulario);
            console.log(resposta);
           
            if (resposta.status === 200) {

                setSuccess(true);
                setNome('');
                setEmail('');
                setTelefone('');
                setSenha('');
                setConfirmarSenha('');
            }

        }catch(error) { 
            console.error('Ocorreu um erro ao cadastrar.');
        }
    }


    return(
        <div>
            <h1>Cadastro de clientes</h1>
            <form onSubmit={handleFormSubmit}>

                <input type='text' placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />

                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <input type='text' placeholder='Celular' value={telefone} onChange={(e) => setTelefone(e.target.value)}/>

                <input type='submit' value="CADASTRAR" />
            </form>
            

            {success && <p>Cadastro realizado com sucesso!</p>}
            {error && <p>{error}</p>}
            
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}



export default CostumerRegistration;
