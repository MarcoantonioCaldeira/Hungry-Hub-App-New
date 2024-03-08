import React from 'react';
import { InputRegister } from '../../design-systems/Inputs';
import { FontLogin } from '../../design-systems/Fonts';
import { Logo } from '../../design-systems/Images';
import LogoImg from '../../assets/img/Logo.png'

interface SecondDataFormProps {
    data:{
        cep: string,
        uf: string,
        cidade: string,
        bairro: string,
        numero_end: string,
        rua: string,
        complemento: string
    }
    onParte2Change: (parte2Data: Partial<SecondDataFormProps['data']>) => void;
}

const SecondDataForm: React.FC<SecondDataFormProps> = ({ data, onParte2Change }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onParte2Change({ [name]: value });
    };

    return (
        <div>

            <Logo>
                <img src={LogoImg} className='LogoImg'/>
            </Logo>


            <form className='FormRegistration'>

                <div className='areaInputRegister'>
                    <FontLogin className='Title'>Adicione um Endereço</FontLogin>

                    <InputRegister type="text" name="cep" value={data.cep} onChange={handleInputChange} placeholder="CEP" />

                    <InputRegister type="text" name="uf" value={data.uf} onChange={handleInputChange} placeholder="UF" />

                    <InputRegister type="text" name="cidade" value={data.cidade} onChange={handleInputChange} placeholder="Cidade" />

                    <InputRegister type="text" name="bairro" value={data.bairro} onChange={handleInputChange} placeholder="Bairro" />

                    <InputRegister type="text" name="numero_end" value={data.numero_end} onChange={handleInputChange} placeholder="Numero" />

                    <InputRegister type="text" name="rua" value={data.rua} onChange={handleInputChange} placeholder="Rua" />

                    <InputRegister type="text" name="complemento" value={data.complemento} onChange={handleInputChange} placeholder="Complemento" />

                </div>

            </form>

        </div>

        
        
    )
}


export default SecondDataForm;