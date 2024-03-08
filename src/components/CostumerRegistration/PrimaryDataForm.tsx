import React from 'react';
import { useForm } from "react-hook-form";
import { InputRegister } from '../../design-systems/Inputs';
import { FontLogin } from '../../design-systems/Fonts';
import './style/style.scss'
import LogoImg from '../../assets/img/Logo.png';
import { Logo } from '../../design-systems/Images';
import  ImgFundo  from '../../assets/img/img_background.jpg';


interface FormData {
    nome: string;
    email: string;
    telefone: string;
    senha: string;
    confirmarSenha: string;
}
  
interface PrimaryDataFormProps {
    data: FormData;
    onParte1Change: (parte1Data: Partial<FormData>) => void;
}

const PrimaryDataForm: React.FC<PrimaryDataFormProps> = ({ data, onParte1Change }) =>  {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
      console.log(formData)
      onParte1Change(formData);
    };
  
    return (
        <>
            <div className='FirstForm'> 

                <Logo>
                    <img src={LogoImg} className='LogoImg'/>
                </Logo>

                <img  src={ImgFundo} className='Ilustration'/>

                <form className='FormRegistration' onSubmit={handleSubmit(onSubmit)}>

                    <div className='areaInputRegister'>

                        <FontLogin className='Title'>Vamos criar uma Conta</FontLogin>
        
                        <InputRegister type='text' {...register('nome')} value={data.nome} placeholder='Nome do Proprietário' />

                        <InputRegister type='text' {...register('email')} value={data.email} placeholder='Email' />

                        <InputRegister type='text' {...register('telefone')} value={data.telefone} placeholder='Telefone' />

                        <InputRegister type='password' {...register('senha')} value={data.senha} placeholder='Senha' />
                        
                        <InputRegister type='password' {...register('confirmarSenha')} value={data.confirmarSenha} placeholder='Confirmar Senha' />

                        {/* <Link to="/">retornar a página inicial</Link> */}

                    </div>
                </form>
            </div>
        </>
    
    )
}

export default PrimaryDataForm;