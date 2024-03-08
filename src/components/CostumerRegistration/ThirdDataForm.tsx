import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../design-systems/Images';
import LogoImg from '../../assets/img/Logo.png'
import { FontLogin } from '../../design-systems/Fonts';
import { InputRegister } from '../../design-systems/Inputs';
import { useForm } from 'react-hook-form';

interface FormData {
    tipo_pagamento: string,
    num_cartao: string,
    nomeImpresso: string,
    validadeCartao: string,
    cvvCartao: string,
    nome_Apelido: string,
    cpf_cnpj: string;
}


interface ThirdDataFormProps {
    data:FormData
    showSuccessMessage:boolean
    onParte3Change: (parte3Data: Partial<FormData>) => void;
}


const ThirdDataForm: React.FC<ThirdDataFormProps> = ({ data, showSuccessMessage, onParte3Change }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        console.log(formData)
        onParte3Change(formData);
      };

    return (
        <div>

            <Logo>
                <img src={LogoImg} className='LogoImg'/>
            </Logo>

            <form className='FormRegistration'>

                <div className='areaInputRegister'>
                    <FontLogin className='Title'>Adicione um Cartão</FontLogin>

                    <div className='LabelArea'>
                        <input type="radio" {...register('tipo_pagamento')} value={data.tipo_pagamento = "1"} />
                        <label>Debito</label>

                        <input type="radio" {...register('tipo_pagamento')} value={data.tipo_pagamento = "2"}  />
                        <label>Credito</label>
                    </div>
                    
                    <InputRegister type="text" {...register('num_cartao')} value={data.num_cartao} placeholder="Numero do Cartão" />

                    <InputRegister type="text" {...register('nomeImpresso')} value={data.nomeImpresso} laceholder="Nome Impresso" />

                    <InputRegister type="text" {...register('validadeCartao')} value={data.validadeCartao}  placeholder="Data de Validade" />

                    <InputRegister type="text" {...register('cvvCartao')} value={data.cvvCartao} placeholder="CVV" />

                    <InputRegister type="text" {...register('nome_Apelido')} value={data.nome_Apelido} placeholder="Apelido para o Cartão" />

                    <InputRegister type="text" {...register('cpf_cnpj')} value={data.cpf_cnpj} placeholder="Seu CPF" />

                    {showSuccessMessage && (
                        <div className="success-message">Cadastro feito com sucesso!!!</div>
                    )}

                </div>

            </form>

        </div>

    )
}

export default ThirdDataForm;