import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../design-systems/Images';
import LogoImg from '../../assets/img/Logo.png'
import { FontLogin } from '../../design-systems/Fonts';
import { InputRegister } from '../../design-systems/Inputs';
import { useForm } from 'react-hook-form';



interface ThirdDataFormProps {
    data:{
        tipo_pagamento: string,
        num_cartao: string,
        nomeImpresso: string,
        validadeCartao: string,
        cvvCartao: string,
        nome_Apelido: string,
        cpf_cnpj: string;
    }
    showSuccessMessage:boolean
    onParte3Change: (parte3Data: Partial<ThirdDataFormProps['data']>) => void;
}


const ThirdDataForm: React.FC<ThirdDataFormProps> = ({ data, showSuccessMessage, onParte3Change }) => {
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        onParte3Change({ [name]: value });
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
                   
                        <input type="radio" name="tipo_pagamento" value={data.tipo_pagamento = "1"} onChange={handleInputChange} />
                        <label>Debito</label>

                        <input type="radio" name="tipo_pagamento" value={data.tipo_pagamento = "2"} onChange={handleInputChange} />
                        <label>Credito</label>
                    </div>
                    
                    <InputRegister type="text" name="num_cartao" value={data.num_cartao} placeholder="Numero do Cartão" />

                    <InputRegister type="text" name="nomeImpresso" value={data.nomeImpresso} placeholder="Nome Impresso" />

                    <InputRegister type="text" name="validadeCartao" value={data.validadeCartao}   placeholder="Data de Validade" />

                    <InputRegister type="text" name="cvvCartao" value={data.cvvCartao} placeholder="CVV" />

                    <InputRegister type="text" name="nome_Apelido" value={data.nome_Apelido}  placeholder="Apelido para o Cartão" />

                    <InputRegister type="text" name="cpf_cnpj" value={data.cpf_cnpj}  placeholder="Seu CPF" />

                    {showSuccessMessage && (
                        <div className="success-message">Cadastro feito com sucesso!!!</div>
                    )}

                </div>

            </form>

        </div>

    )
}

export default ThirdDataForm;