import React from 'react';
import { InputRegister } from '../../design-systems/Inputs';
import { FontLogin } from '../../design-systems/Fonts';
import { Logo } from '../../design-systems/Images';
import LogoImg from '../../assets/img/Logo.png'
import { useForm } from 'react-hook-form';

interface FormData {
    cep: string,
    uf: string,
    cidade: string,
    bairro: string,
    numero_end: string,
    rua: string,
    complemento: string
}

interface SecondDataFormProps {
    data: FormData
    onParte2Change: (parte2Data: Partial<FormData>) => void;
}

const SecondDataForm: React.FC<SecondDataFormProps> = ({ data, onParte2Change }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    

    const onSubmit = (formData: FormData) => {
        console.log(formData)
        onParte2Change(formData);
      };
    

    return (
        <div>

            <Logo>
                <img src={LogoImg} className='LogoImg'/>
            </Logo>


            <form className='FormRegistration' onSubmit={handleSubmit(onSubmit)}>

                <div className='areaInputRegister'>
                    <FontLogin className='Title'>Adicione um Endereço</FontLogin>

                    <InputRegister type="text" {...register('cep')}  value={data.cep} placeholder="CEP" />

                    <InputRegister type="text"  {...register('uf')} value={data.uf}  placeholder="UF" />

                    <InputRegister type="text" {...register('cidade')} value={data.cidade}  placeholder="Cidade" />

                    <InputRegister type="text"  {...register('bairro')} value={data.bairro}  placeholder="Bairro" />

                    <InputRegister type="text"  {...register('numero_end')} value={data.numero_end} placeholder="Numero" />

                    <InputRegister type="text"  {...register('rua')} value={data.rua}  placeholder="Rua" />

                    <InputRegister type="text"  {...register('complemento')} value={data.complemento} placeholder="Complemento" />

                </div>

            </form>

        </div>

        
        
    )
}


export default SecondDataForm;