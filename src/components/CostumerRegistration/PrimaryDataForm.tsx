import React from 'react';
import { Link } from 'react-router-dom';
import { InputRegister } from '../../design-systems/Inputs';
import { FontLogin } from '../../design-systems/Fonts';
import './style/style.scss'
import LogoImg from '../../assets/img/Logo.png';
import { Logo } from '../../design-systems/Images';
import  ImgFundo  from '../../assets/img/img_background.jpg';

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
        <>
            <div className='FirstForm'> 

                <Logo>
                    <img src={LogoImg} className='LogoImg'/>
                </Logo>


                <img  src={ImgFundo} className='Ilustration'/>

                <form className='FormRegistration'>

                    <div className='areaInputRegister'>

                        <FontLogin className='Title'>Vamos criar uma Conta</FontLogin>

                        <InputRegister type="text" name="nome" value={data.nome} onChange={handleInputChange} placeholder="Nome do Proprietário" />

                        <InputRegister type="text" name="email" value={data.email} onChange={handleInputChange} placeholder="Email" />

                        <InputRegister type="text" name="telefone" value={data.telefone}  onChange={handleInputChange} placeholder="Telefone" />

                        <InputRegister type="text" name="senha" value={data.senha} onChange={handleInputChange} placeholder="Senha" />

                        <InputRegister type="text" name="confirmarSenha" value={data.confirmarSenha} onChange={handleInputChange} placeholder="Confirmar Senha" />

                            {/* <Link to="/">retornar a página inicial</Link> */}

                    </div>
                </form>
            </div>
        </>
    
    )
}

export default PrimaryDataForm;