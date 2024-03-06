import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Footer from '../Footer/Footer';
import './style.scss';
import LogoImg from '../../assets/img/Logo.png';
import { Logo } from '../../design-systems/Images';
import { FontLogin } from '../../design-systems/Fonts';
import { InputLogin } from '../../design-systems/Inputs';
import { ButtonLogin } from '../../design-systems/Buttons';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../reducers/userActions';
import { UserState } from '../../reducers/types';




const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormAuth = async (event: React.FormEvent) => {
        event.preventDefault();

        const DadosFormulario = {
            email: email,
            senha: senha
        }

        try {
            const URL_API = 'http://localhost:5050'
            const response = await axios.post<UserState>(URL_API + '/auth/login', DadosFormulario)
            console.log(response)
           
    
            if (response.status === 200) {
                console.log(response.data)
                dispatch(loginSuccess(response.data));
                navigate('/dashboard')
                
            }else{
                alert("Credenciais invalidades!!!")
            }
        } catch (error) {
            console.error('Erro durante o login:', error);

            alert("Ocorreu um erro durante o Login. Tente mais tarde");
        }
    };

    return(
        <>
            <div className='BodyLogin'>

                <Logo>
                    <img src={LogoImg} className='LogoImg'/>
                </Logo>

                <form onSubmit={handleFormAuth}>
                    
                    <div className='areaInputLogin'>

                        <FontLogin className='TitleLogin'>Iniciar Sessão</FontLogin>

                        <InputLogin className='InputLogin' placeholder='E-mail'  type="text" value={email}  onChange={(e:any) => setEmail(e.target.value)} />
                        <InputLogin className='InputLogin' placeholder="Senha" type="text" value={senha} onChange={(e:any) => setSenha(e.target.value)} />

                        <ButtonLogin type="submit" className='btn_login'><a>Entrar</a></ButtonLogin>  
                    </div>
                                      
                    <Link to="/login">retornar a página inicial</Link>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login;
