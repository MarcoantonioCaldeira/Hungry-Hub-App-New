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
import { UserState } from '../../reducers/userReducer';



const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormAuth = async () => {
        try {
            const URL_API = 'http://localhost:5050';
            const response = await axios.post<UserState>(`${URL_API}/auth/login`, {
                email: email,
                senha: senha,
            });

    
            if (response.status === 200) {
                dispatch(loginSuccess(response.data));
                navigate('/dashboard');
                
            }
        } catch (error) {
            console.error('Erro durante o login:', error);
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

                        <InputLogin className='InputLogin' placeholder='E-mail'  type="text" value={email} onChange={(e:any) => setEmail(e.target.value)} />
                        <InputLogin className='InputLogin' placeholder="Senha" type="text" value={senha} onChange={(e:any) => setSenha(e.target.value)} />

                        <ButtonLogin className='btn_login'><a>Entrar</a></ButtonLogin>  
                    </div>
                                      
                    <Link to="/">retornar a página inicial</Link>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login;
